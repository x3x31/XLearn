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
  applySeasonAchievements,
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

/**
 * Escopo local dos dados de estudo.
 *
 * O IndexedDB é único por dispositivo, mas os dados de estudo pertencem a
 * quem está usando o app. Cada conta recebe o próprio escopo; o modo visitante
 * usa `guest`. Configurações, sessão do Supabase e cache do ranking continuam
 * globais e não entram no escopo.
 */
const GUEST_SCOPE = "guest";
const SCOPED_META_KEYS = new Set([
  "stats",
  "gamification",
  "wallet",
  "season",
  "simuladoSession",
  "simulados",
]);
const SCOPE_MIGRATION_KEY = "storageScopedOnce";
const SCOPED_META_RE = /^(guest|u:[^:]+)::(.+)$/;
const SCOPED_PROGRESS_RE = /^(guest|u:[^:]+)::(.+)$/;
let storageScope = GUEST_SCOPE;

function normalizeScope(scope) {
  return typeof scope === "string" && scope.trim() ? scope.trim() : GUEST_SCOPE;
}

/** Escopo de estudo de uma conta; sem `userId`, devolve o escopo visitante. */
export function scopeForUser(userId) {
  const id = typeof userId === "string" ? userId.trim() : "";
  return id ? `u:${id}` : GUEST_SCOPE;
}

/** Define o escopo ativo sem executar migração (uso interno e testes). */
export function setStorageScope(scope) {
  storageScope = normalizeScope(scope);
  return storageScope;
}

export function getStorageScope() {
  return storageScope;
}

function scopePrefix(scope = storageScope) {
  return `${normalizeScope(scope)}::`;
}

function scopeMetaKey(key, scope = storageScope) {
  return SCOPED_META_KEYS.has(key) ? `${scopePrefix(scope)}${key}` : key;
}

function parseScopedMetaKey(key) {
  if (typeof key !== "string") return null;
  const match = SCOPED_META_RE.exec(key);
  if (!match || !SCOPED_META_KEYS.has(match[2])) return null;
  return { scope: match[1], key: match[2] };
}

function progressScope(key) {
  if (typeof key !== "string") return null;
  const match = SCOPED_PROGRESS_RE.exec(key);
  return match ? match[1] : null;
}

function canonicalProgressKey(key) {
  if (typeof key !== "string") return key;
  const scope = progressScope(key);
  return scope ? key.slice(scope.length + 2) : key;
}

function scopedProgressKey(key, scope = storageScope) {
  return `${scopePrefix(scope)}${canonicalProgressKey(key)}`;
}

function canonicalSessionId(id) {
  if (typeof id !== "string") return id;
  const scope = progressScope(id);
  return scope ? id.slice(scope.length + 2) : id;
}

function scopedSessionId(id, scope = storageScope) {
  return `${scopePrefix(scope)}${canonicalSessionId(id)}`;
}

function belongsToScope(record, scope = storageScope) {
  if (!record || typeof record !== "object") return false;
  if (record.scope) return record.scope === scope;
  if (typeof record.key === "string") {
    const keyScope = progressScope(record.key);
    if (keyScope) return keyScope === scope;
  }
  return false;
}

/** Remove o marcador interno de escopo de um registro exportável. */
function stripScope(record) {
  const { scope: _scope, ...rest } = record;
  return rest;
}

/** Chave de progresso já isolada pelo escopo ativo. */
export function progressKey(materialId, questionId) {
  return `${scopePrefix()}${materialId}::${questionId}`;
}

/**
 * Ativa o escopo de estudo e migra uma única vez os dados gravados antes do
 * isolamento por conta. A migração atribui os registros antigos ao primeiro
 * escopo usado depois da atualização.
 */
export async function activateStorageScope(scope) {
  setStorageScope(scope);
  const db = await openDatabase();
  const marker = await readStore("meta", SCOPE_MIGRATION_KEY);
  if (marker?.value) return storageScope;

  return new Promise((resolve, reject) => {
    const tx = db.transaction(["meta", "progress", "sessions", "attempts"], "readwrite");
    const metaStore = tx.objectStore("meta");
    const progressStore = tx.objectStore("progress");
    const sessionsStore = tx.objectStore("sessions");
    const attemptsStore = tx.objectStore("attempts");

    const migrateMeta = metaStore.openCursor();
    migrateMeta.onsuccess = () => {
      const cursor = migrateMeta.result;
      if (!cursor) return;
      const record = cursor.value;
      if (SCOPED_META_KEYS.has(record?.key)) {
        metaStore.put({ ...record, key: scopeMetaKey(record.key) });
        cursor.delete();
      }
      cursor.continue();
    };

    const migrateProgress = progressStore.openCursor();
    migrateProgress.onsuccess = () => {
      const cursor = migrateProgress.result;
      if (!cursor) return;
      const record = cursor.value;
      const storedKey = scopedProgressKey(record?.key);
      const next = { ...record, key: storedKey, scope: storageScope };
      if (storedKey !== record?.key) {
        progressStore.put(next);
        cursor.delete();
      } else if (record?.scope !== storageScope) {
        progressStore.put(next);
      }
      cursor.continue();
    };

    const migrateSessions = sessionsStore.openCursor();
    migrateSessions.onsuccess = () => {
      const cursor = migrateSessions.result;
      if (!cursor) return;
      const record = cursor.value;
      const storedId = scopedSessionId(record?.id);
      const next = { ...record, id: storedId, scope: storageScope };
      if (storedId !== record?.id) {
        sessionsStore.put(next);
        cursor.delete();
      } else if (record?.scope !== storageScope) {
        sessionsStore.put(next);
      }
      cursor.continue();
    };

    const migrateAttempts = attemptsStore.openCursor();
    migrateAttempts.onsuccess = () => {
      const cursor = migrateAttempts.result;
      if (!cursor) return;
      const record = cursor.value;
      const storedKey = scopedProgressKey(record?.key);
      const storedSessionId = scopedSessionId(record?.sessionId);
      const next = {
        ...record,
        key: storedKey,
        sessionId: storedSessionId,
        scope: storageScope,
      };
      if (storedKey !== record?.key) {
        attemptsStore.put(next);
        cursor.delete();
      } else if (
        record?.scope !== storageScope ||
        record?.sessionId !== storedSessionId
      ) {
        attemptsStore.put(next);
      }
      cursor.continue();
    };

    metaStore.put({
      key: SCOPE_MIGRATION_KEY,
      value: true,
      updatedAt: new Date().toISOString(),
    });

    tx.oncomplete = () => resolve(storageScope);
    tx.onerror = () => reject(tx.error || new Error("Falha ao isolar os dados locais."));
    tx.onabort = () => reject(tx.error || new Error("Isolamento dos dados cancelado."));
  });
}

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

/**
 * Chaves de `meta` que nunca entram no backup nem são restauradas de um
 * arquivo antigo. `cloudAuth` contém tokens de sessão do Supabase; o perfil e o
 * cache do ranking pertencem à conta e podem conter dados de outras pessoas.
 * `storageScopedOnce` é um marcador local de migração e também fica de fora.
 */
const PRIVATE_META_KEYS = new Set(["cloudAuth", "cloudProfile", "cloudRank"]);
const LOCAL_META_KEYS = new Set([SCOPE_MIGRATION_KEY]);

function isExcludedMetaKey(store, key) {
  return store === "meta" && (PRIVATE_META_KEYS.has(key) || LOCAL_META_KEYS.has(key));
}

/** Lê os quatro stores em uma única transação e devolve só o escopo ativo. */
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
    tx.oncomplete = () => {
      const scope = storageScope;
      data.meta = (data.meta || []).flatMap((record) => {
        if (!record || typeof record.key !== "string") return [];
        const parsed = parseScopedMetaKey(record.key);
        if (parsed) {
          if (parsed.scope !== scope) return [];
          return [{ ...record, key: parsed.key }];
        }
        if (isExcludedMetaKey("meta", record.key)) return [];
        return [record];
      });
      data.progress = (data.progress || []).flatMap((record) => {
        if (!belongsToScope(record, scope)) return [];
        return [{ ...stripScope(record), key: canonicalProgressKey(record.key) }];
      });
      data.sessions = (data.sessions || [])
        .filter((record) => belongsToScope(record, scope))
        .map((record) => ({
          ...stripScope(record),
          id: canonicalSessionId(record.id),
        }));
      data.attempts = (data.attempts || [])
        .filter((record) => belongsToScope(record, scope))
        .map((record) => ({
          ...stripScope(record),
          key: canonicalProgressKey(record.key),
          sessionId: canonicalSessionId(record.sessionId),
        }));
      resolve(data);
    };
    tx.onerror = () => reject(tx.error || new Error("Falha ao exportar os dados locais."));
    tx.onabort = () => reject(tx.error || new Error("Exportação cancelada."));
  });
}

/**
 * Substitui apenas os dados de estudo do escopo ativo. Registros de outras
 * contas permanecem intactos, e as chaves do backup são canonizadas para que o
 * arquivo possa ser restaurado em qualquer conta sem expor o escopo de origem.
 * Configurações globais são restauradas; sessão e cache da conta são mantidos.
 */
export async function importDatabase(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Dados de importação ausentes.");
  }

  const scope = storageScope;
  const clean = { meta: [], progress: [], sessions: [], attempts: [] };
  for (const store of BACKUP_STORES) {
    const records = data[store];
    if (!Array.isArray(records)) {
      throw new Error(`O backup não contém a lista "${store}".`);
    }
    const keyField = BACKUP_KEY_FIELDS[store];
    const seen = new Set();
    for (const record of records) {
      if (!record || typeof record !== "object" || typeof record[keyField] !== "string") {
        throw new Error(`Registro inválido em "${store}".`);
      }

      if (store === "meta") {
        if (isExcludedMetaKey("meta", record.key)) continue;
        const parsed = parseScopedMetaKey(record.key);
        const canonical = parsed ? parsed.key : record.key;
        const storedKey = SCOPED_META_KEYS.has(canonical) ? scopeMetaKey(canonical) : canonical;
        if (seen.has(storedKey)) {
          throw new Error(`O backup tem chaves duplicadas em "${store}".`);
        }
        seen.add(storedKey);
        clean.meta.push({ ...record, key: storedKey });
        continue;
      }

      if (store === "progress") {
        const canonical = canonicalProgressKey(record.key);
        if (typeof canonical !== "string" || canonical.length === 0) {
          throw new Error('O backup tem um progresso sem chave válida.');
        }
        const storedKey = scopedProgressKey(canonical, scope);
        if (seen.has(storedKey)) {
          throw new Error(`O backup tem chaves duplicadas em "${store}".`);
        }
        seen.add(storedKey);
        clean.progress.push({ ...record, key: storedKey, scope });
        continue;
      }

      if (store === "sessions") {
        const storedId = scopedSessionId(record.id, scope);
        if (seen.has(storedId)) {
          throw new Error(`O backup tem chaves duplicadas em "${store}".`);
        }
        seen.add(storedId);
        clean.sessions.push({ ...record, id: storedId, scope });
        continue;
      }

      if (store === "attempts") {
        const storedKey = scopedProgressKey(record.key, scope);
        const storedSessionId = scopedSessionId(record.sessionId, scope);
        if (seen.has(storedKey)) {
          throw new Error(`O backup tem chaves duplicadas em "${store}".`);
        }
        seen.add(storedKey);
        clean.attempts.push({
          ...record,
          key: storedKey,
          sessionId: storedSessionId,
          scope,
        });
        continue;
      }
    }
  }

  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORES, "readwrite");
    const stores = {
      meta: tx.objectStore("meta"),
      progress: tx.objectStore("progress"),
      sessions: tx.objectStore("sessions"),
      attempts: tx.objectStore("attempts"),
    };

    const deleteMatching = (storeName, predicate, write) => {
      const request = stores[storeName].openCursor();
      request.onsuccess = () => {
        const cursor = request.result;
        if (!cursor) {
          write();
          return;
        }
        if (predicate(cursor.value)) cursor.delete();
        cursor.continue();
      };
      request.onerror = () => {
        /* A transação aborta e o erro é tratado por tx.onerror. */
      };
    };

    deleteMatching(
      "meta",
      (record) => {
        if (!record || typeof record.key !== "string") return false;
        const parsed = parseScopedMetaKey(record.key);
        if (parsed) return parsed.scope === scope;
        return !isExcludedMetaKey("meta", record.key);
      },
      () => {
        for (const record of clean.meta) stores.meta.put(record);
      }
    );

    deleteMatching(
      "progress",
      (record) => belongsToScope(record, scope),
      () => {
        for (const record of clean.progress) stores.progress.put(record);
      }
    );

    for (const store of ["sessions", "attempts"]) {
      deleteMatching(
        store,
        (record) => record?.scope === scope,
        () => {
          for (const record of clean[store]) stores[store].put(record);
        }
      );
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
 * Apaga o progresso de estudo do escopo ativo e tudo que deriva dele: questões,
 * sessões, tentativas, estatísticas diárias e gamificação (XP, conquistas,
 * sequência). As configurações globais e os dados de outras contas são
 * preservados.
 */
export async function clearProgressData() {
  const db = await openDatabase();
  const scope = storageScope;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BACKUP_STORES, "readwrite");
    try {
      for (const storeName of ["progress", "sessions", "attempts"]) {
        const store = tx.objectStore(storeName);
        const request = store.openCursor();
        request.onsuccess = () => {
          const cursor = request.result;
          if (!cursor) return;
          const record = cursor.value;
          const inScope =
            storeName === "progress"
              ? belongsToScope(record, scope)
              : record?.scope === scope;
          if (inScope) cursor.delete();
          cursor.continue();
        };
      }
      const meta = tx.objectStore("meta");
      for (const key of SCOPED_META_KEYS) meta.delete(scopeMetaKey(key, scope));
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

/** Lê um valor do store meta. Chaves de estudo são isoladas pelo escopo ativo. */
export async function getMeta(key) {
  const record = await readStore("meta", scopeMetaKey(key));
  return record?.value ?? null;
}

/** Grava um valor no store meta. Chaves de estudo são isoladas pelo escopo ativo. */
export async function setMeta(key, value) {
  const db = await openDatabase();
  const storedKey = scopeMetaKey(key);
  return new Promise((resolve, reject) => {
    const tx = db.transaction("meta", "readwrite");
    tx.objectStore("meta").put({ key: storedKey, value, updatedAt: new Date().toISOString() });
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
    const gamificationRequest = store.get(scopeMetaKey("gamification"));
    const walletRequest = store.get(scopeMetaKey("wallet"));
    const statsRequest = store.get(scopeMetaKey("stats"));
    const seasonRequest = store.get(scopeMetaKey("season"));
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
      const seasonRewards = applySeasonAchievements(gamification, {
        seasonStage: seasonStage.stageNumber,
        now: nowDate,
      });

      result = {
        ...claim,
        notUnlocked: false,
        achievement,
        gamification: seasonRewards.gamification,
        newAchievements: seasonRewards.newAchievements,
        season: seasonResult.season,
        seasonStage,
        seasonEvolved: seasonStage.stageNumber > beforeStage.stageNumber,
        seasonGain: seasonResult.gain,
      };
      if (!claim.alreadyClaimed) {
        store.put({
          key: scopeMetaKey("wallet"),
          value: claim.wallet,
          updatedAt: claim.wallet.updatedAt,
        });
      }
      if (seasonResult.gain > 0) {
        store.put({
          key: scopeMetaKey("season"),
          value: seasonResult.season,
          updatedAt: seasonResult.season.updatedAt,
        });
      }
      if (seasonRewards.newAchievements.length > 0) {
        store.put({
          key: scopeMetaKey("gamification"),
          value: seasonRewards.gamification,
          updatedAt: seasonRewards.gamification.updatedAt,
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

export async function getProgress(materialId, questionId) {
  return readStore("progress", progressKey(materialId, questionId));
}

export async function getAllProgress() {
  const records = await readAll("progress");
  return records.filter((record) => belongsToScope(record));
}

export async function saveProgress(record) {
  if (!record || typeof record !== "object") {
    throw new Error("Registro de progresso inválido.");
  }
  const stored = {
    ...record,
    key: scopedProgressKey(record.key),
    scope: storageScope,
  };
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("progress", "readwrite");
    tx.objectStore("progress").put(stored);
    tx.oncomplete = () => resolve(stored);
    tx.onerror = () => reject(tx.error || new Error("Falha ao salvar progresso."));
    tx.onabort = () => reject(tx.error || new Error("Operação cancelada."));
  });
}

/** Salva a sessão; o identificador e o status ficam isolados pelo escopo. */
export async function saveSession(session) {
  const record = structuredClone(session);
  record.id = scopedSessionId(record.id);
  record.status = record.finishedAt ? "completed" : "active";
  record.scope = storageScope;
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
  const record = await readStore("sessions", scopedSessionId(id));
  return record?.scope === storageScope ? record : null;
}

/** Retorna a sessão ativa mais recente do escopo, ou null. */
export async function getActiveSession() {
  const db = await openDatabase();
  const tx = db.transaction("sessions", "readonly");
  const index = tx.objectStore("sessions").index("status");
  const sessions = await requestToPromise(index.getAll("active"));
  const own = sessions.filter((session) => session?.scope === storageScope);
  if (!own.length) return null;
  own.sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
  return own[0];
}

export async function listSessions(limit = 20) {
  const sessions = await readAll("sessions");
  return sessions
    .filter((session) => session?.scope === storageScope)
    .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)))
    .slice(0, limit);
}

export async function listAttempts(limit = 100) {
  const attempts = await readAll("attempts");
  return attempts
    .filter((attempt) => attempt?.scope === storageScope)
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
  sessionSnapshot.id = scopedSessionId(sessionSnapshot.id);
  sessionSnapshot.status = sessionSnapshot.finishedAt ? "completed" : "active";
  sessionSnapshot.scope = storageScope;
  const attemptKey = `${sessionSnapshot.id}::${question.id}`;
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
        key: scopeMetaKey("gamification"),
        value: result.gamification,
        updatedAt: result.gamification.updatedAt,
      });
      applySeason();
    };

    const applySeason = () => {
      if (
        seasonApplied ||
        !gamificationReady ||
        !savedGamification ||
        !walletApplied ||
        !seasonReady ||
        !statsSnapshot
      ) {
        return;
      }
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
          key: scopeMetaKey("season"),
          value: result.season,
          updatedAt: result.season.updatedAt,
        });
      }

      const seasonRewards = applySeasonAchievements(savedGamification, {
        seasonStage: seasonStage.stageNumber,
        now,
      });
      if (seasonRewards.newAchievements.length > 0) {
        savedGamification = seasonRewards.gamification;
        newAchievements = [...newAchievements, ...seasonRewards.newAchievements];
        metaStore.put({
          key: scopeMetaKey("gamification"),
          value: savedGamification,
          updatedAt: savedGamification.updatedAt,
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
          key: scopeMetaKey("wallet"),
          value: result.wallet,
          updatedAt: result.wallet.updatedAt,
        });
      }
      applySeason();
    };

    sessionsStore.put(sessionSnapshot);

    const attempt = {
      key: attemptKey,
      scope: storageScope,
      sessionId: sessionSnapshot.id,
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
        sessionId: sessionSnapshot.id,
        srsLevel: schedule?.level ?? previous?.srsLevel ?? 0,
        dueAt: schedule?.dueAt ?? previous?.dueAt ?? null,
      });

      const record = {
        key: pKey,
        scope: storageScope,
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

    const statsRequest = metaStore.get(scopeMetaKey("stats"));
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
        key: scopeMetaKey("stats"),
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

    const gamificationRequest = metaStore.get(scopeMetaKey("gamification"));
    gamificationRequest.onsuccess = () => {
      gamificationSnapshot = gamificationRequest.result?.value ?? null;
      gamificationReady = true;
      applyGamification();
    };

    const walletRequest = metaStore.get(scopeMetaKey("wallet"));
    walletRequest.onsuccess = () => {
      walletSnapshot = walletRequest.result?.value ?? null;
      walletReady = true;
      applyWallet();
    };

    const seasonRequest = metaStore.get(scopeMetaKey("season"));
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
    const gamificationRequest = store.get(scopeMetaKey("gamification"));
    const walletRequest = store.get(scopeMetaKey("wallet"));
    const statsRequest = store.get(scopeMetaKey("stats"));
    const seasonRequest = store.get(scopeMetaKey("season"));
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

      const seasonRewards = applySeasonAchievements(result.gamification, {
        seasonStage: seasonStage.stageNumber,
        now: nowDate,
      });
      result = {
        ...result,
        gamification: seasonRewards.gamification,
        newAchievements: [
          ...(result.newAchievements || []),
          ...seasonRewards.newAchievements,
        ],
      };

      if (!result.alreadyAwarded || seasonRewards.newAchievements.length > 0) {
        store.put({
          key: scopeMetaKey("gamification"),
          value: result.gamification,
          updatedAt: result.gamification.updatedAt,
        });
      }
      if (!walletResult.alreadyAwarded) {
        store.put({
          key: scopeMetaKey("wallet"),
          value: walletResult.wallet,
          updatedAt: walletResult.wallet.updatedAt,
        });
      }
      if (seasonResult.gain > 0) {
        store.put({
          key: scopeMetaKey("season"),
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
