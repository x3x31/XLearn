/**
 * coins.js — moedas e evolução do personagem estudioso.
 *
 * Módulo puro: não acessa DOM nem IndexedDB. A carteira guarda o saldo atual,
 * o total histórico de moedas ganhas (usado para evoluir o personagem) e os
 * registros que impedem pagamentos duplicados.
 *
 * Regras atuais:
 *   - resposta correta: 2 moedas;
 *   - sessão concluída: 10 moedas + 5 se todas as questões estiverem corretas;
 *   - meta diária atingida: 15 moedas, uma vez por dia;
 *   - conquistas: recompensas próprias, coletadas manualmente em REQ-033.
 *
 * O personagem evolui pelo total de moedas ganhas, não pelo saldo: assim uma
 * futura loja não fará o estudante regredir ao gastar moedas.
 */

export const COIN_RULES = Object.freeze({
  correctAnswer: 2,
  sessionBase: 10,
  sessionPerfectBonus: 5,
  dailyGoal: 15,
});

export const MAX_WALLET_HISTORY = 200;

/** Estágios do personagem, do mais simples ao mestre dos estudos. */
export const CHARACTER_STAGES = Object.freeze([
  {
    id: "curioso",
    name: "Curioso",
    minCoins: 0,
    image: "assets/characters/curioso.svg",
    description: "Todo grande estudo começa com uma pergunta.",
  },
  {
    id: "estudante",
    name: "Estudante",
    minCoins: 60,
    image: "assets/characters/estudante.svg",
    description: "Caderno na mão e ritmo constante.",
  },
  {
    id: "focado",
    name: "Focado",
    minCoins: 180,
    image: "assets/characters/focado.svg",
    description: "Concentração de quem já conhece o próprio método.",
  },
  {
    id: "veterano",
    name: "Veterano",
    minCoins: 400,
    image: "assets/characters/veterano.svg",
    description: "Experiência acumulada questão após questão.",
  },
  {
    id: "mestre",
    name: "Mestre dos estudos",
    minCoins: 800,
    image: "assets/characters/mestre.svg",
    description: "Constância, domínio e vontade de ensinar.",
  },
]);

function nonNegative(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

function timestamp(now) {
  return now instanceof Date ? now.toISOString() : new Date(now).toISOString();
}

function pruneHistory(record, limit = MAX_WALLET_HISTORY) {
  const entries = Object.entries(record || {})
    .filter(([, value]) => typeof value === "string" && !Number.isNaN(Date.parse(value)))
    .sort((a, b) => b[1].localeCompare(a[1]))
    .slice(0, limit);
  return Object.fromEntries(entries);
}

/** Garante o formato completo mesmo com dados antigos ou corrompidos. */
export function normalizeWallet(raw = {}) {
  return {
    balance: nonNegative(raw?.balance),
    earned: nonNegative(raw?.earned),
    spent: nonNegative(raw?.spent),
    awardedSessions: pruneHistory(raw?.awardedSessions),
    goalDays: pruneHistory(raw?.goalDays),
    claimedAchievements: pruneHistory(raw?.claimedAchievements),
    updatedAt: typeof raw?.updatedAt === "string" ? raw.updatedAt : null,
  };
}

export function createWallet() {
  return normalizeWallet({});
}

/** Moedas de uma resposta individual. */
export function answerCoins({ correct } = {}) {
  return correct ? COIN_RULES.correctAnswer : 0;
}

/** Moedas de conclusão de sessão. */
export function sessionCoins({ correct = 0, total = 0 } = {}) {
  const questions = nonNegative(total);
  if (questions === 0) return 0;
  const hits = Math.min(nonNegative(correct), questions);
  return COIN_RULES.sessionBase + (hits === questions ? COIN_RULES.sessionPerfectBonus : 0);
}

function addToWallet(wallet, amount, now) {
  const gain = nonNegative(amount);
  if (gain === 0) return wallet;
  return {
    ...wallet,
    balance: wallet.balance + gain,
    earned: wallet.earned + gain,
    updatedAt: timestamp(now),
  };
}

/**
 * Aplica moedas de uma resposta e, se for o caso, da meta diária.
 * A meta é paga uma única vez por chave de dia local.
 */
export function applyAnswerCoins(
  current,
  { correct, goalReached = false, dayKey = "", now = new Date() } = {}
) {
  const wallet = normalizeWallet(current);
  const answerGain = answerCoins({ correct: Boolean(correct) });
  const goalAlreadyPaid = Boolean(dayKey && wallet.goalDays[dayKey]);
  const goalGain = goalReached && !goalAlreadyPaid ? COIN_RULES.dailyGoal : 0;
  const goalDays =
    goalGain > 0
      ? pruneHistory({ ...wallet.goalDays, [dayKey]: timestamp(now) })
      : wallet.goalDays;
  const next = addToWallet(
    { ...wallet, goalDays },
    answerGain + goalGain,
    now
  );

  return {
    wallet: next,
    gain: answerGain + goalGain,
    answerGain,
    goalGain,
    goalAwarded: goalGain > 0,
  };
}

/**
 * Paga a conclusão de sessão uma única vez por `sessionId`.
 */
export function applySessionCoins(
  current,
  { sessionId, correct = 0, total = 0, now = new Date() } = {}
) {
  const wallet = normalizeWallet(current);
  if (!sessionId) {
    return { wallet, gain: 0, alreadyAwarded: false };
  }
  if (wallet.awardedSessions[sessionId]) {
    return { wallet, gain: 0, alreadyAwarded: true };
  }

  const gain = sessionCoins({ correct, total });
  const awardedSessions = pruneHistory({
    ...wallet.awardedSessions,
    [sessionId]: timestamp(now),
  });
  return {
    wallet: addToWallet({ ...wallet, awardedSessions }, gain, now),
    gain,
    alreadyAwarded: false,
  };
}

/**
 * Coleta a recompensa de uma conquista. O clique do usuário chama esta função
 * uma única vez; chamadas repetidas retornam `alreadyClaimed` sem somar nada.
 */
export function claimAchievementCoins(
  current,
  { achievementId, amount, now = new Date() } = {}
) {
  const wallet = normalizeWallet(current);
  if (!achievementId) {
    return { wallet, gain: 0, alreadyClaimed: false, invalid: true };
  }
  if (wallet.claimedAchievements[achievementId]) {
    return { wallet, gain: 0, alreadyClaimed: true };
  }

  const gain = nonNegative(amount);
  const claimedAchievements = {
    ...wallet.claimedAchievements,
    [achievementId]: timestamp(now),
  };
  return {
    wallet: addToWallet({ ...wallet, claimedAchievements }, gain, now),
    gain,
    alreadyClaimed: false,
  };
}

/** Converte o total histórico de moedas no estágio atual do personagem. */
export function characterFromCoins(totalCoins) {
  const total = nonNegative(totalCoins);
  let index = 0;
  for (let cursor = 0; cursor < CHARACTER_STAGES.length; cursor += 1) {
    if (total >= CHARACTER_STAGES[cursor].minCoins) index = cursor;
  }

  const stage = CHARACTER_STAGES[index];
  const nextStage = CHARACTER_STAGES[index + 1] || null;
  const span = nextStage ? nextStage.minCoins - stage.minCoins : 0;
  const progress = nextStage
    ? Math.min(1, Math.max(0, (total - stage.minCoins) / span))
    : 1;

  return {
    stage,
    stageNumber: index + 1,
    totalStages: CHARACTER_STAGES.length,
    nextStage,
    progress,
    coinsToNext: nextStage ? Math.max(0, nextStage.minCoins - total) : 0,
    isMax: !nextStage,
  };
}
