/**
 * db.js — persistência local do XLearn em IndexedDB.
 *
 * Stores:
 *   meta      { key, value, updatedAt }        configurações, estatísticas agregadas, gamificação e carteira
 *   progress  { key, materialId, questionId }  domínio por questão + histórico curto
 *   sessions  { id, status, ... }              sessões completas, retomáveis
 *   attempts  { key, sessionId, ... }          histórico completo de respostas
 *
 * Nenhum dado de progresso é gravado apenas no cache HTTP.
 */

import {
  ACHIEVEMENTS,
  applyAnswerRewards,
  applySessionRewards,
  normalizeGamification,
} from "./gamification.js";
import {
  applyAnswerCoins,
  applySessionCoins,
  claimAchievementCoins as applyAchievementClaim,
  normalizeWallet,
} from "./coins.js";
import {
  activeDaysInSeason,
  applySeasonCoins,
  normalizeSeason,
  seasonStageFrom,
} from "./season.js";

const DB_NAME = "xlearn";
const DB_VERSION = 1;

let databasePromise = null;

export function openDatabase() {
  if (databasePromise) return databasePromise;
  if (!globalThis.indexedDB) {
    databasePromise = Promise.reject(new Error("IndexedDB não está disponível neste navegador."));
    return databasePromise;
  }

  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("meta")) {
        db.createObjectStore("meta", { keyPath: "key" });
      }
      if (!db.objectStoreNames.contains("progress")) {
        const store = db.createObjectStore("progress", { keyPath: "key" });
        store.createIndex("materialId", "materialId");
        store.createIndex("materialPath", "materialPath");
        store.createIndex("dueAt", "dueAt");
      }
      if (!db.objectStoreNames.contains("sessions")) {
        const store = db.createObjectStore("sessions", { keyPath: "id" });
        store.createIndex("status", "status");
        store.createIndex("updatedAt", "updatedAt");
      }
      if (!db.objectStoreNames.contains("attempts")) {
        const store = db.createObjectStore("attempts", { keyPath: "key" });
        store.createIndex("answeredAt", "answeredAt");
        store.createIndex("materialPath", "materialPath");
        store.createIndex("sessionId", "sessionId");
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      db.onversionchange = () => db.close();
      resolve(db);
    };
    request.onerror = () => reject(request.error || new Error("Falha ao abrir o IndexedDB."));
    request.onblocked = () =>
      reject(new Error("O banco local está bloqueado por outra aba. Feche as outras abas do XLearn."));
  });

  return databasePromise;
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Falha na operação do IndexedDB."));
  });
}

async function readStore(storeName, key) {
  const db = await openDatabase();
  const tx = db.transaction(storeName, "readonly");
  return requestToPromise(tx.objectStore(storeName).get(key));
}

async function readAll(storeName) {
  const db = await openDatabase();
  const tx = db.transaction(storeName, "readonly");
  return requestToPromise(tx.objectStore(storeName).getAll());
}

const BACKUP_STORES = ["meta", "progress", "sessions", "attempts"];
const BACKUP_KEY_FIELDS = { meta: "key", progress: "key", sessions: "id", attempts: "key" };

/** Lê os quatro stores em uma única transação para um backup consistente. */
export async function exportDatabase() {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORES, "readonly");
    const data = { meta: [], progress: [], sessions: [], attempts: [] };
    for (const store of BACKUP_STORES) {
      const request = tx.objectStore(store).getAll();
      request.onsuccess = () => {
        data[store] = request.result || [];
      };
      request.onerror = () => reject(request.error || new Error("Falha ao ler os dados locais."));
    }
    tx.oncomplete = () => resolve(data);
    tx.onerror = () => reject(tx.error || new Error("Falha ao exportar os dados locais."));
    tx.onabort = () => reject(tx.error || new Error("Exportação cancelada."));
  });
}

/**
 * Substitui os quatro stores em uma única transação. A validação prévia evita
 * arquivos sem chave; se uma escrita falhar, o IndexedDB desfaz tudo.
 */
export async function importDatabase(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Dados de importação ausentes.");
  }
  const clean = {};
  for (const store of BACKUP_STORES) {
    const records = data[store];
    if (!Array.isArray(records)) {
      throw new Error(`O backup não contém a lista "${store}".`);
    }
    const keyField = BACKUP_KEY_FIELDS[store];
    for (const record of records) {
      if (!record || typeof record !== "object" || typeof record[keyField] !== "string") {
        throw new Error(`Registro inválido em "${store}".`);
      }
    }
    clean[store] = records;
  }

  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORES, "readwrite");
    try {
      for (const store of BACKUP_STORES) {
        const target = tx.objectStore(store);
        target.clear();
        for (const record of clean[store]) target.put(record);
      }
    } catch (error) {
      tx.abort();
      reject(error);
      return;
    }
    tx.oncomplete = () =>
      resolve({
        meta: clean.meta.length,
        progress: clean.progress.length,
        sessions: clean.sessions.length,
        attempts: clean.attempts.length,
      });
    tx.onerror = () => reject(tx.error || new Error("Falha ao restaurar o backup."));
    tx.onabort = () => reject(tx.error || new Error("Restauração cancelada."));
  });
}

/**
 * Apaga o progresso de estudo e tudo que deriva dele: questões, sessões,
 * tentativas, estatísticas diárias e gamificação (XP, conquistas, sequência).
 * As configurações em `meta/settings` são preservadas.
 */
export async function clearProgressData() {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORES, "readwrite");
    try {
      for (const store of ["progress", "sessions", "attempts"]) {
        tx.objectStore(store).clear();
      }
      const meta = tx.objectStore("meta");
      meta.delete("stats");
      meta.delete("gamification");
      meta.delete("wallet");
      meta.delete("season");
      meta.delete("simuladoSession");
      meta.delete("simulados");
    } catch (error) {
      tx.abort();
      reject(error);
      return;
    }
    tx.oncomplete = () => resolve({ progress: 0, sessions: 0, attempts: 0 });
    tx.onerror = () => reject(tx.error || new Error("Falha ao apagar o progresso local."));
    tx.onabort = () => reject(tx.error || new Error("Operação cancelada."));
  });
}

/** Lê um valor do store meta. */
export async function getMeta(key) {
  const record = await readStore("meta", key);
  return record?.value ?? null;
}

/** Grava um valor no store meta. */
export async function setMeta(key, value) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("meta", "readwrite");
    tx.objectStore("meta").put({ key, value, updatedAt: new Date().toISOString() });
    tx.oncomplete = () => resolve(value);
    tx.onerror = () => reject(tx.error || new Error("Falha ao salvar configuração."));
    tx.onabort = () => reject(tx.error || new Error("Operação cancelada."));
  });
}

export async function getSettingsRecord() {
  return getMeta("settings");
}

export async function saveSettingsRecord(settings) {
  return setMeta("settings", settings);
}

export async function getStats() {
  return (
    (await getMeta("stats")) || {
      answered: 0,
      correct: 0,
      daily: {},
      byMaterial: {},
      updatedAt: null,
    }
  );
}

/** Lê a gamificação acumulada, sempre em formato completo. */
export async function getGamification() {
  return normalizeGamification(await getMeta("gamification"));
}

/** Lê a carteira de moedas, sempre em formato completo. */
export async function getWallet() {
  return normalizeWallet(await getMeta("wallet"));
}

/**
 * Lê a temporada atual. Registros antigos permanecem congelados; quando uma
 * nova temporada configurada já começou, o formato normalizado reinicia o
 * ledger. A gravação ocorre no primeiro pagamento de moedas.
 */
export async function getSeason(now = new Date()) {
  return normalizeSeason(await getMeta("season"), now);
}

/**
 * Coleta a recompensa em moedas de uma conquista desbloqueada.
 * A leitura da gamificação e da carteira, a validação do desbloqueio e a
 * gravação acontecem na mesma transação `readwrite`, portanto cliques
 * repetidos (ou em abas diferentes) não pagam a recompensa duas vezes.
 */
export async function claimAchievementReward(achievementId, { now = new Date() } = {}) {
  const achievement = ACHIEVEMENTS.find((item) => item.id === achievementId);
  if (!achievement) {
    throw new Error("Conquista desconhecida.");
  }

  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("meta", "readwrite");
    const store = tx.objectStore("meta");
    const gamificationRequest = store.get("gamification");
    const walletRequest = store.get("wallet");
    const statsRequest = store.get("stats");
    const seasonRequest = store.get("season");
    let gamificationReady = false;
    let walletReady = false;
    let statsReady = false;
    let seasonReady = false;
    let applied = false;
    let result = null;

    const apply = () => {
      if (applied || !gamificationReady || !walletReady || !statsReady || !seasonReady) {
        return;
      }
      applied = true;
      const gamification = normalizeGamification(gamificationRequest.result?.value);
      const wallet = normalizeWallet(walletRequest.result?.value);

      if (!gamification.achievements[achievementId]) {
        result = {
          wallet,
          gain: 0,
          alreadyClaimed: false,
          notUnlocked: true,
          achievement,
        };
        return;
      }

      const claim = applyAchievementClaim(wallet, {
        achievementId,
        amount: achievement.coins,
        now,
      });
      const nowDate = now instanceof Date ? now : new Date(now);
      const season = normalizeSeason(seasonRequest.result?.value, nowDate);
      const activeDays = activeDaysInSeason(statsRequest.result?.value?.daily || {}, season);
      const beforeStage = seasonStageFrom(season.coinsEarned, activeDays);
      const seasonResult = applySeasonCoins(season, claim.gain, { now: nowDate });
      const seasonStage = seasonStageFrom(seasonResult.season.coinsEarned, activeDays);

      result = {
        ...claim,
        notUnlocked: false,
        achievement,
        season: seasonResult.season,
        seasonStage,
        seasonEvolved: seasonStage.stageNumber > beforeStage.stageNumber,
        seasonGain: seasonResult.gain,
      };
      if (!claim.alreadyClaimed) {
        store.put({
          key: "wallet",
          value: claim.wallet,
          updatedAt: claim.wallet.updatedAt,
        });
      }
      if (seasonResult.gain > 0) {
        store.put({
          key: "season",
          value: seasonResult.season,
          updatedAt: seasonResult.season.updatedAt,
        });
      }
    };

    gamificationRequest.onsuccess = () => {
      gamificationReady = true;
      apply();
    };
    walletRequest.onsuccess = () => {
      walletReady = true;
      apply();
    };
    statsRequest.onsuccess = () => {
      statsReady = true;
      apply();
    };
    seasonRequest.onsuccess = () => {
      seasonReady = true;
      apply();
    };

    tx.oncomplete = () => resolve(result);
    tx.onerror = () => reject(tx.error || new Error("Falha ao coletar a recompensa."));
    tx.onabort = () => reject(tx.error || new Error("Coleta da recompensa cancelada."));
  });
}

/** Simulado ativo, mantido separado das sessões normais. */
export async function getSimuladoSession() {
  return getMeta("simuladoSession");
}

export async function saveSimuladoSession(session) {
  return setMeta("simuladoSession", session);
}

export async function clearSimuladoSession() {
  return setMeta("simuladoSession", null);
}

/** Histórico agregado dos simulados, também separado das estatísticas normais. */
export async function getSimuladoHistory() {
  return getMeta("simulados");
}

export async function saveSimuladoHistory(history) {
  return setMeta("simulados", history);
}

export function progressKey(materialId, questionId) {
  return `${materialId}::${questionId}`;
}

export async function getProgress(materialId, questionId) {
  return readStore("progress", progressKey(materialId, questionId));
}

export async function getAllProgress() {
  return readAll("progress");
}

export async function saveProgress(record) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("progress", "readwrite");
    tx.objectStore("progress").put(record);
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error || new Error("Falha ao salvar progresso."));
    tx.onabort = () => reject(tx.error || new Error("Operação cancelada."));
  });
}

/** Salva a sessão; status derivado de finishedAt. */
export async function saveSession(session) {
  const record = structuredClone(session);
  record.status = record.finishedAt ? "completed" : "active";
  record.updatedAt = record.updatedAt || new Date().toISOString();
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("sessions", "readwrite");
    tx.objectStore("sessions").put(record);
    tx.oncomplete = () => resolve(record);
    tx.onerror = () => reject(tx.error || new Error("Falha ao salvar a sessão."));
    tx.onabort = () => reject(tx.error || new Error("Operação cancelada."));
  });
}

export async function getSession(id) {
  return readStore("sessions", id);
}

/** Retorna a sessão ativa mais recente, ou null. */
export async function getActiveSession() {
  const db = await openDatabase();
  const tx = db.transaction("sessions", "readonly");
  const index = tx.objectStore("sessions").index("status");
  const sessions = await requestToPromise(index.getAll("active"));
  if (!sessions.length) return null;
  sessions.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return sessions[0];
}

export async function listSessions(limit = 20) {
  const sessions = await readAll("sessions");
  return sessions
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    .slice(0, limit);
}

export async function listAttempts(limit = 100) {
  const attempts = await readAll("attempts");
  return attempts
    .sort((a, b) => String(b.answeredAt).localeCompare(String(a.answeredAt)))
    .slice(0, limit);
}

export function localDayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Registra uma resposta de forma atômica: sessão, progresso da questão,
 * tentativa e estatísticas agregadas.
 *
 * @param {{session: object, question: object, answer: object, schedule?: object|null, dailyGoal?: number}} payload
 */
export async function recordAnswer({
  session,
  question,
  answer,
  schedule = null,
  dailyGoal = 20,
}) {
  const db = await openDatabase();
  const sessionSnapshot = structuredClone(session);
  sessionSnapshot.status = sessionSnapshot.finishedAt ? "completed" : "active";
  const attemptKey = `${session.id}::${question.id}`;
  const answeredAt = answer.answeredAt || new Date().toISOString();
  const pKey = progressKey(session.materialId, question.id);
  const dayKey = localDayKey(new Date(answeredAt));
  let savedProgress = null;
  let savedGamification = null;
  let savedWallet = null;
  let xpGain = 0;
  let coinsGain = 0;
  let goalCoinAwarded = false;
  let newAchievements = [];
  let statsSnapshot = null;
  let gamificationSnapshot = null;
  let gamificationReady = false;
  let gamificationApplied = false;
  let walletSnapshot = null;
  let walletReady = false;
  let walletApplied = false;
  let seasonSnapshot = null;
  let seasonReady = false;
  let seasonApplied = false;
  let savedSeason = null;
  let seasonGain = 0;
  let seasonStage = null;
  let seasonEvolved = false;

  return new Promise((resolve, reject) => {
    const tx = db.transaction(["sessions", "progress", "attempts", "meta"], "readwrite");
    const sessionsStore = tx.objectStore("sessions");
    const progressStore = tx.objectStore("progress");
    const attemptsStore = tx.objectStore("attempts");
    const metaStore = tx.objectStore("meta");

    const applyGamification = () => {
      if (gamificationApplied || !statsSnapshot || !gamificationReady) return;
      gamificationApplied = true;
      const result = applyAnswerRewards(gamificationSnapshot, {
        correct: Boolean(answer.correct),
        difficulty: question.difficulty,
        daily: statsSnapshot.daily,
        goal: dailyGoal,
        now: new Date(answeredAt),
      });
      savedGamification = result.gamification;
      xpGain = result.xpGain;
      newAchievements = result.newAchievements;
      metaStore.put({
        key: "gamification",
        value: result.gamification,
        updatedAt: result.gamification.updatedAt,
      });
    };

    const applySeason = () => {
      if (seasonApplied || !walletApplied || !seasonReady || !statsSnapshot) return;
      seasonApplied = true;
      const now = new Date(answeredAt);
      const season = normalizeSeason(seasonSnapshot, now);
      const activeDays = activeDaysInSeason(statsSnapshot.daily, season);
      const beforeStage = seasonStageFrom(season.coinsEarned, activeDays);
      const result = applySeasonCoins(season, coinsGain, { now });
      savedSeason = result.season;
      seasonGain = result.gain;
      seasonStage = seasonStageFrom(result.season.coinsEarned, activeDays);
      seasonEvolved = seasonStage.stageNumber > beforeStage.stageNumber;
      if (result.gain > 0) {
        metaStore.put({
          key: "season",
          value: result.season,
          updatedAt: result.season.updatedAt,
        });
      }
    };

    const applyWallet = () => {
      if (walletApplied || !statsSnapshot || !walletReady) return;
      walletApplied = true;
      const goalReached = (statsSnapshot.daily?.[dayKey]?.answered || 0) >= dailyGoal;
      const result = applyAnswerCoins(walletSnapshot, {
        correct: Boolean(answer.correct),
        goalReached,
        dayKey,
        now: new Date(answeredAt),
      });
      savedWallet = result.wallet;
      coinsGain = result.gain;
      goalCoinAwarded = result.goalAwarded;
      if (result.gain > 0) {
        metaStore.put({
          key: "wallet",
          value: result.wallet,
          updatedAt: result.wallet.updatedAt,
        });
      }
      applySeason();
    };

    sessionsStore.put(sessionSnapshot);

    const attempt = {
      key: attemptKey,
      sessionId: session.id,
      materialId: session.materialId,
      materialPath: session.materialPath,
      materialTitle: session.materialTitle,
      questionId: question.id,
      subject: question.subject || "",
      topic: question.topic || "",
      difficulty: question.difficulty || "",
      selectedId: answer.selectedId,
      correctId: answer.correctId,
      correct: Boolean(answer.correct),
      answeredAt,
      order: answer.order || [],
      mode: session.mode || "material",
    };
    attemptsStore.put(attempt);

    const progressRequest = progressStore.get(pKey);
    progressRequest.onsuccess = () => {
      const previous = progressRequest.result || null;
      const history = Array.isArray(previous?.history) ? [...previous.history] : [];
      history.push({
        at: answeredAt,
        correct: Boolean(answer.correct),
        selectedId: answer.selectedId,
        sessionId: session.id,
        srsLevel: schedule?.level ?? previous?.srsLevel ?? 0,
        dueAt: schedule?.dueAt ?? previous?.dueAt ?? null,
      });

      const record = {
        key: pKey,
        materialId: session.materialId,
        materialPath: session.materialPath,
        materialTitle: session.materialTitle,
        subject: question.subject || "",
        topic: question.topic || "",
        questionId: question.id,
        seen: (previous?.seen || 0) + 1,
        correctCount: (previous?.correctCount || 0) + (answer.correct ? 1 : 0),
        wrongCount: (previous?.wrongCount || 0) + (answer.correct ? 0 : 1),
        streak: answer.correct ? (previous?.streak || 0) + 1 : 0,
        lastResult: Boolean(answer.correct),
        lastSelectedId: answer.selectedId,
        lastAnsweredAt: answeredAt,
        srsLevel: schedule ? schedule.level : previous?.srsLevel ?? 0,
        dueAt: schedule ? schedule.dueAt : previous?.dueAt ?? null,
        lastIntervalMinutes: schedule
          ? schedule.intervalMinutes
          : previous?.lastIntervalMinutes ?? null,
        manualSchedule: schedule ? Boolean(schedule.manual) : previous?.manualSchedule ?? false,
        srsUpdatedAt: schedule ? answeredAt : previous?.srsUpdatedAt ?? null,
        history: history.slice(-30),
      };
      savedProgress = record;
      progressStore.put(record);
    };

    const statsRequest = metaStore.get("stats");
    statsRequest.onsuccess = () => {
      const previous = statsRequest.result?.value || {
        answered: 0,
        correct: 0,
        daily: {},
        byMaterial: {},
      };
      const daily = { ...(previous.daily || {}) };
      const currentDay = daily[dayKey] || { answered: 0, correct: 0 };
      daily[dayKey] = {
        answered: currentDay.answered + 1,
        correct: currentDay.correct + (answer.correct ? 1 : 0),
      };

      const byMaterial = { ...(previous.byMaterial || {}) };
      const materialKey = session.materialPath || session.materialId;
      const currentMaterial = byMaterial[materialKey] || { answered: 0, correct: 0 };
      byMaterial[materialKey] = {
        answered: currentMaterial.answered + 1,
        correct: currentMaterial.correct + (answer.correct ? 1 : 0),
      };

      // Mantém apenas os últimos 365 dias para não crescer indefinidamente.
      const dayKeys = Object.keys(daily).sort();
      while (dayKeys.length > 365) delete daily[dayKeys.shift()];

      metaStore.put({
        key: "stats",
        value: {
          answered: (previous.answered || 0) + 1,
          correct: (previous.correct || 0) + (answer.correct ? 1 : 0),
          daily,
          byMaterial,
          updatedAt: new Date().toISOString(),
        },
        updatedAt: new Date().toISOString(),
      });
      statsSnapshot = {
        answered: (previous.answered || 0) + 1,
        correct: (previous.correct || 0) + (answer.correct ? 1 : 0),
        daily,
        byMaterial,
      };
      applyGamification();
      applyWallet();
    };

    const gamificationRequest = metaStore.get("gamification");
    gamificationRequest.onsuccess = () => {
      gamificationSnapshot = gamificationRequest.result?.value ?? null;
      gamificationReady = true;
      applyGamification();
    };

    const walletRequest = metaStore.get("wallet");
    walletRequest.onsuccess = () => {
      walletSnapshot = walletRequest.result?.value ?? null;
      walletReady = true;
      applyWallet();
    };

    const seasonRequest = metaStore.get("season");
    seasonRequest.onsuccess = () => {
      seasonSnapshot = seasonRequest.result?.value ?? null;
      seasonReady = true;
      applySeason();
    };

    tx.oncomplete = () =>
      resolve({
        attempt,
        progressKey: pKey,
        progress: savedProgress,
        gamification: savedGamification,
        wallet: savedWallet,
        season: savedSeason,
        seasonStage,
        seasonEvolved,
        seasonGain,
        xpGain,
        coinsGain,
        goalCoinAwarded,
        newAchievements,
      });
    tx.onerror = () => reject(tx.error || new Error("Falha ao registrar a resposta."));
    tx.onabort = () => reject(tx.error || new Error("Registro da resposta cancelado."));
  });
}

/**
 * Paga o bônus de conclusão uma única vez por sessão.
 * Deve ser chamado quando a sessão recebe `finishedAt`.
 */
export async function awardSessionCompletion(session, { now = new Date() } = {}) {
  const db = await openDatabase();
  const total = Array.isArray(session?.questionIds) ? session.questionIds.length : 0;
  const answers = session?.answers && typeof session.answers === "object" ? session.answers : {};
  const correct = Object.values(answers).filter((answer) => answer?.correct).length;

  return new Promise((resolve, reject) => {
    const tx = db.transaction("meta", "readwrite");
    const store = tx.objectStore("meta");
    const gamificationRequest = store.get("gamification");
    const walletRequest = store.get("wallet");
    const statsRequest = store.get("stats");
    const seasonRequest = store.get("season");
    let result = null;
    let walletResult = null;
    let seasonResult = null;
    let seasonStage = null;
    let seasonEvolved = false;
    let gamificationReady = false;
    let walletReady = false;
    let statsReady = false;
    let seasonReady = false;
    let applied = false;

    const apply = () => {
      if (
        applied ||
        !gamificationReady ||
        !walletReady ||
        !statsReady ||
        !seasonReady
      ) {
        return;
      }
      applied = true;
      result = applySessionRewards(gamificationRequest.result?.value, {
        sessionId: session?.id,
        correct,
        total,
        now,
      });
      walletResult = applySessionCoins(walletRequest.result?.value, {
        sessionId: session?.id,
        correct,
        total,
        now,
      });
      const nowDate = now instanceof Date ? now : new Date(now);
      const season = normalizeSeason(seasonRequest.result?.value, nowDate);
      const daily = statsRequest.result?.value?.daily || {};
      const activeDays = activeDaysInSeason(daily, season);
      const beforeStage = seasonStageFrom(season.coinsEarned, activeDays);
      seasonResult = applySeasonCoins(season, walletResult.gain, { now: nowDate });
      seasonStage = seasonStageFrom(seasonResult.season.coinsEarned, activeDays);
      seasonEvolved = seasonStage.stageNumber > beforeStage.stageNumber;

      if (!result.alreadyAwarded) {
        store.put({
          key: "gamification",
          value: result.gamification,
          updatedAt: result.gamification.updatedAt,
        });
      }
      if (!walletResult.alreadyAwarded) {
        store.put({
          key: "wallet",
          value: walletResult.wallet,
          updatedAt: walletResult.wallet.updatedAt,
        });
      }
      if (seasonResult.gain > 0) {
        store.put({
          key: "season",
          value: seasonResult.season,
          updatedAt: seasonResult.season.updatedAt,
        });
      }
    };

    gamificationRequest.onsuccess = () => {
      gamificationReady = true;
      apply();
    };
    walletRequest.onsuccess = () => {
      walletReady = true;
      apply();
    };
    statsRequest.onsuccess = () => {
      statsReady = true;
      apply();
    };
    seasonRequest.onsuccess = () => {
      seasonReady = true;
      apply();
    };

    tx.oncomplete = () =>
      resolve(
        result
          ? {
              ...result,
              wallet: walletResult?.wallet ?? null,
              coinsGain: walletResult?.gain ?? 0,
              coinsAlreadyAwarded: Boolean(walletResult?.alreadyAwarded),
              season: seasonResult?.season ?? null,
              seasonStage,
              seasonEvolved,
              seasonGain: seasonResult?.gain ?? 0,
            }
          : null
      );
    tx.onerror = () => reject(tx.error || new Error("Falha ao premiar a sessão."));
    tx.onabort = () => reject(tx.error || new Error("Premiação da sessão cancelada."));
  });
}

/** Resumo de progresso por material (usa o caminho do manifesto como chave). */
export async function getProgressSummary() {
  const records = await getAllProgress();
  const byPath = {};
  const byId = {};
  const byKey = {};
  for (const record of records) {
    byKey[record.key] = record;
    for (const map of [byPath, byId]) {
      const key = map === byPath ? record.materialPath : record.materialId;
      if (!key) continue;
      const item = map[key] || {
        answered: 0,
        seen: 0,
        correct: 0,
        wrong: 0,
        lastAnsweredAt: null,
      };
      item.answered += 1;
      item.seen += record.seen || 1;
      item.correct += record.correctCount || 0;
      item.wrong += record.wrongCount || 0;
      if (!item.lastAnsweredAt || record.lastAnsweredAt > item.lastAnsweredAt) {
        item.lastAnsweredAt = record.lastAnsweredAt;
      }
      map[key] = item;
    }
  }
  return { byPath, byId, byKey, records };
}

/**
 * Substitui o agendamento automático por uma escolha manual do estudante.
 * Mantém o nível de domínio e registra a alteração no próprio progresso.
 */
export async function applyReviewSchedule(materialId, questionId, schedule) {
  const db = await openDatabase();
  let saved = null;
  return new Promise((resolve, reject) => {
    const tx = db.transaction("progress", "readwrite");
    const store = tx.objectStore("progress");
    const request = store.get(progressKey(materialId, questionId));
    request.onsuccess = () => {
      const record = request.result;
      if (!record) {
        reject(new Error("Progresso da questão não encontrado para reagendar."));
        tx.abort();
        return;
      }
      record.dueAt = schedule.dueAt;
      record.lastIntervalMinutes = schedule.intervalMinutes;
      record.srsLevel = schedule.level ?? record.srsLevel;
      record.manualSchedule = Boolean(schedule.manual);
      record.srsUpdatedAt = new Date().toISOString();
      saved = record;
      store.put(record);
    };
    request.onerror = () => reject(request.error || new Error("Falha ao ler o progresso."));
    tx.oncomplete = () => resolve(saved);
    tx.onerror = () => reject(tx.error || new Error("Falha ao reagendar a revisão."));
    tx.onabort = () => reject(tx.error || new Error("Reagendamento cancelado."));
  });
}
