/**
 * gamification.js — XP e níveis do XLearn.
 *
 * Módulo puro: não acessa DOM nem IndexedDB. As regras são centralizadas aqui
 * para que respostas, sessões e (nas próximas etapas) conquistas usem a mesma
 * fonte de verdade.
 *
 * Regras atuais:
 *   - resposta errada: 2 XP de participação;
 *   - resposta correta: 10 XP + bônus por dificuldade (2/4/6);
 *   - sessão concluída: 25 XP + até 25 XP por aproveitamento + 25 XP se 100%.
 *
 * O nível cresce em faixas quadráticas: 0, 100, 400, 900, 1600... XP. Assim o
 * começo é rápido e a progressão fica mais exigente sem um teto artificial.
 */

export const PARTICIPATION_XP = 2;
export const CORRECT_BASE_XP = 10;
export const DIFFICULTY_XP = Object.freeze({ easy: 2, medium: 4, hard: 6 });
export const SESSION_BASE_XP = 25;
export const SESSION_ACCURACY_XP = 25;
export const PERFECT_SESSION_XP = 25;
export const XP_PER_LEVEL_STEP = 100;
export const MAX_AWARD_HISTORY = 200;

const LEVEL_TITLES = [
  "Iniciante",
  "Aprendiz",
  "Praticante",
  "Estudioso",
  "Avançado",
  "Especialista",
  "Mestre",
];

function nonNegative(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

/** Garante o formato completo mesmo com dados antigos ou corrompidos. */
export function normalizeGamification(raw = {}) {
  const achievements =
    raw && typeof raw.achievements === "object" && !Array.isArray(raw.achievements)
      ? { ...raw.achievements }
      : {};
  const awardedSessions =
    raw && typeof raw.awardedSessions === "object" && !Array.isArray(raw.awardedSessions)
      ? { ...raw.awardedSessions }
      : {};

  return {
    xp: nonNegative(raw?.xp),
    achievements,
    answered: nonNegative(raw?.answered),
    correct: nonNegative(raw?.correct),
    sessionsCompleted: nonNegative(raw?.sessionsCompleted),
    perfectSessions: nonNegative(raw?.perfectSessions),
    bestStreak: nonNegative(raw?.bestStreak),
    awardedSessions,
    updatedAt: typeof raw?.updatedAt === "string" ? raw.updatedAt : null,
  };
}

export function createGamification() {
  return normalizeGamification({});
}

/** XP de uma resposta individual. */
export function answerXp({ correct, difficulty } = {}) {
  if (!correct) return PARTICIPATION_XP;
  const bonus = DIFFICULTY_XP[difficulty] ?? DIFFICULTY_XP.medium;
  return CORRECT_BASE_XP + bonus;
}

/** Bônus de conclusão de sessão, proporcional ao aproveitamento. */
export function sessionXp({ correct = 0, total = 0 } = {}) {
  const questions = nonNegative(total);
  if (questions === 0) return 0;
  const hits = Math.min(nonNegative(correct), questions);
  const accuracy = hits / questions;
  const accuracyBonus = Math.round(SESSION_ACCURACY_XP * accuracy);
  const perfectBonus = hits === questions ? PERFECT_SESSION_XP : 0;
  return SESSION_BASE_XP + accuracyBonus + perfectBonus;
}

/** Converte XP em nível, faixa atual, próximo marco e progresso (0–1). */
export function levelFromXp(xp) {
  const value = nonNegative(xp);
  const level = Math.floor(Math.sqrt(value / XP_PER_LEVEL_STEP)) + 1;
  const currentFloor = XP_PER_LEVEL_STEP * (level - 1) ** 2;
  const nextFloor = XP_PER_LEVEL_STEP * level ** 2;
  const span = nextFloor - currentFloor;
  const into = value - currentFloor;
  const progress = span > 0 ? Math.min(1, Math.max(0, into / span)) : 0;

  return {
    level,
    title: LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)],
    xp: value,
    currentFloor,
    nextFloor,
    xpIntoLevel: into,
    xpToNext: Math.max(0, nextFloor - value),
    progress,
  };
}

/** XP recebido por uma resposta, já refletido no registro de gamificação. */
export function applyAnswerRewards(current, { correct, difficulty, now = new Date() } = {}) {
  const gamification = normalizeGamification(current);
  const xpGain = answerXp({ correct: Boolean(correct), difficulty });
  const next = {
    ...gamification,
    xp: gamification.xp + xpGain,
    answered: gamification.answered + 1,
    correct: gamification.correct + (correct ? 1 : 0),
    updatedAt: now instanceof Date ? now.toISOString() : new Date(now).toISOString(),
  };
  return { gamification: next, xpGain };
}

/**
 * Bônus de sessão pago uma única vez por `sessionId`.
 * Retorna `alreadyAwarded` quando a sessão já havia sido premiada.
 */
export function applySessionRewards(
  current,
  { sessionId, correct = 0, total = 0, now = new Date() } = {}
) {
  const gamification = normalizeGamification(current);
  if (!sessionId) {
    return { gamification, xpGain: 0, alreadyAwarded: false };
  }
  if (gamification.awardedSessions[sessionId]) {
    return { gamification, xpGain: 0, alreadyAwarded: true };
  }

  const timestamp = now instanceof Date ? now.toISOString() : new Date(now).toISOString();
  const xpGain = sessionXp({ correct, total });
  const perfect = total > 0 && correct >= total;
  const awardedSessions = {
    ...gamification.awardedSessions,
    [sessionId]: timestamp,
  };
  const recent = Object.entries(awardedSessions)
    .sort((a, b) => String(b[1]).localeCompare(String(a[1])))
    .slice(0, MAX_AWARD_HISTORY);
  const pruned = Object.fromEntries(recent);

  return {
    gamification: {
      ...gamification,
      xp: gamification.xp + xpGain,
      sessionsCompleted: gamification.sessionsCompleted + 1,
      perfectSessions: gamification.perfectSessions + (perfect ? 1 : 0),
      awardedSessions: pruned,
      updatedAt: timestamp,
    },
    xpGain,
    alreadyAwarded: false,
  };
}
