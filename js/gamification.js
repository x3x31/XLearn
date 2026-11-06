/**
 * gamification.js — XP interno, níveis e conquistas do XLearn.
 *
 * Módulo puro: não acessa DOM nem IndexedDB. As regras são centralizadas aqui
 * para que respostas, sessões e conquistas usem a mesma fonte de verdade.
 *
 * Regras atuais:
 *   - resposta errada: 2 XP de participação;
 *   - resposta correta: 10 XP + bônus por dificuldade (2/4/6);
 *   - sessão concluída: 25 XP + até 25 XP por aproveitamento + 25 XP se 100%.
 *
 * O XP e os níveis continuam sendo calculados e gravados para manter o
 * histórico interno, mas não são exibidos na interface nem governam a
 * evolução do personagem. A progressão visível pertence a `season.js`.
 */

import { SEASON_STAGES } from "./season.js";

export const PARTICIPATION_XP = 2;
export const CORRECT_BASE_XP = 10;
export const DIFFICULTY_XP = Object.freeze({ easy: 2, medium: 4, hard: 6 });
export const SESSION_BASE_XP = 25;
export const SESSION_ACCURACY_XP = 25;
export const PERFECT_SESSION_XP = 25;
export const XP_PER_LEVEL_STEP = 100;
export const MAX_AWARD_HISTORY = 200;

/**
 * Conquistas verificáveis a partir dos contadores persistidos.
 * `check` recebe o contexto consolidado; a recompensa é paga uma única vez.
 */
export const ACHIEVEMENTS = Object.freeze([
  {
    id: "primeira-resposta",
    title: "Primeiro passo",
    description: "Responda sua primeira questão.",
    icon: "check",
    xp: 10,
    coins: 5,
    check: (context) => context.answered >= 1,
  },
  {
    id: "primeiro-acerto",
    title: "Primeiro acerto",
    description: "Acerte pelo menos uma questão.",
    icon: "target",
    xp: 10,
    coins: 5,
    check: (context) => context.correct >= 1,
  },
  {
    id: "dez-questoes",
    title: "Ritmo de estudo",
    description: "Responda 10 questões.",
    icon: "book",
    xp: 15,
    coins: 10,
    check: (context) => context.answered >= 10,
  },
  {
    id: "cinquenta-questoes",
    title: "Meio caminho",
    description: "Responda 50 questões.",
    icon: "layers",
    xp: 25,
    coins: 20,
    check: (context) => context.answered >= 50,
  },
  {
    id: "cem-questoes",
    title: "Centurião",
    description: "Responda 100 questões.",
    icon: "chart",
    xp: 50,
    coins: 30,
    check: (context) => context.answered >= 100,
  },
  {
    id: "primeira-sessao",
    title: "Sessão completa",
    description: "Conclua uma sessão de estudo.",
    icon: "play",
    xp: 15,
    coins: 10,
    check: (context) => context.sessionsCompleted >= 1,
  },
  {
    id: "cinco-sessoes",
    title: "Constância",
    description: "Conclua 5 sessões de estudo.",
    icon: "flame",
    xp: 30,
    coins: 20,
    check: (context) => context.sessionsCompleted >= 5,
  },
  {
    id: "sessao-perfeita",
    title: "Gabarito perfeito",
    description: "Conclua uma sessão acertando todas as questões.",
    icon: "sparkles",
    xp: 25,
    coins: 15,
    check: (context) => context.perfectSessions >= 1,
  },
  {
    id: "primeira-evolucao",
    title: "Primeira evolução",
    description: "Alcance o estágio 2 da temporada.",
    icon: "chart",
    xp: 25,
    coins: 15,
    check: (context) => (context.seasonStage || 0) >= 2,
  },
  {
    id: "mestre-temporada",
    title: "Mestre da temporada",
    description: "Alcance o estágio máximo da temporada.",
    icon: "sparkles",
    xp: 50,
    coins: 25,
    check: (context) => (context.seasonStage || 0) >= SEASON_STAGES.length,
  },
  {
    id: "meta-diaria",
    title: "Meta do dia",
    description: "Bata a meta diária configurada.",
    icon: "target",
    xp: 20,
    coins: 10,
    check: (context) => Boolean(context.goalReached),
  },
  {
    id: "sequencia-3",
    title: "Três dias seguidos",
    description: "Estude por 3 dias consecutivos.",
    icon: "flame",
    xp: 25,
    coins: 15,
    check: (context) => context.bestStreak >= 3,
  },
  {
    id: "sequencia-7",
    title: "Semana completa",
    description: "Estude por 7 dias consecutivos.",
    icon: "flame",
    xp: 50,
    coins: 30,
    check: (context) => context.bestStreak >= 7,
  },
]);

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

export function localDayKey(date = new Date()) {
  const time = date instanceof Date ? date : new Date(date);
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDayKey(key) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(key || ""));
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isFinite(date.getTime()) ? date : null;
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function dayHasStudy(daily, key) {
  return (daily?.[key]?.answered || 0) > 0;
}

/**
 * Calcula a sequência atual e o recorde a partir de `stats.daily`.
 * A sequência continua válida no dia seguinte se o último dia com estudo foi
 * ontem; ela só zera quando um dia inteiro passa sem respostas.
 */
export function computeStreak(daily = {}, now = new Date()) {
  const todayKey = localDayKey(now);
  const yesterdayKey = localDayKey(addDays(now, -1));

  let cursor = dayHasStudy(daily, todayKey)
    ? new Date(now)
    : dayHasStudy(daily, yesterdayKey)
      ? addDays(now, -1)
      : null;

  let current = 0;
  while (cursor && dayHasStudy(daily, localDayKey(cursor))) {
    current += 1;
    cursor = addDays(cursor, -1);
  }

  const activeKeys = Object.keys(daily || {})
    .filter((key) => dayHasStudy(daily, key) && parseDayKey(key))
    .sort();
  let best = 0;
  let run = 0;
  let previous = null;
  for (const key of activeKeys) {
    if (previous && localDayKey(addDays(parseDayKey(previous), 1)) === key) {
      run += 1;
    } else {
      run = 1;
    }
    if (run > best) best = run;
    previous = key;
  }

  return { current, best, todayKey, studiedToday: dayHasStudy(daily, todayKey) };
}

/** Progresso da meta diária para hoje. */
export function dailyProgress(stats = {}, goal = 20, now = new Date()) {
  const daily = stats?.daily && typeof stats.daily === "object" ? stats.daily : stats || {};
  const target = Math.max(1, nonNegative(goal) || 20);
  const todayKey = localDayKey(now);
  const today = daily[todayKey] || { answered: 0, correct: 0 };
  const answered = nonNegative(today.answered);
  const correct = Math.min(nonNegative(today.correct), answered);
  const percent = Math.min(100, Math.round((answered / target) * 100));

  return {
    todayKey,
    answered,
    correct,
    target,
    remaining: Math.max(0, target - answered),
    percent,
    reached: answered >= target,
  };
}

/**
 * Desbloqueia conquistas pendentes e soma suas recompensas internas de XP.
 * O laço mantém a reconciliação aberta para novas conquistas que dependam do
 * estado atualizado, sem pagar moedas automaticamente.
 */
function reconcileAchievements(gamification, context, now) {
  const achievements = { ...gamification.achievements };
  const unlockedAt = now instanceof Date ? now.toISOString() : new Date(now).toISOString();
  const newAchievements = [];
  let xp = gamification.xp;
  let changed = true;

  while (changed) {
    changed = false;
    for (const achievement of ACHIEVEMENTS) {
      if (achievements[achievement.id]) continue;
      if (achievement.check({ ...context, xp })) {
        achievements[achievement.id] = unlockedAt;
        xp += achievement.xp;
        newAchievements.push({ ...achievement, unlockedAt });
        changed = true;
      }
    }
  }

  return {
    gamification: { ...gamification, xp, achievements },
    newAchievements,
  };
}

function gamificationContext(gamification, extra = {}) {
  return {
    answered: gamification.answered,
    correct: gamification.correct,
    sessionsCompleted: gamification.sessionsCompleted,
    perfectSessions: gamification.perfectSessions,
    bestStreak: gamification.bestStreak,
    ...extra,
  };
}

/** Lista todas as conquistas com o estado de desbloqueio atual. */
export function listAchievements(gamification = {}) {
  const normalized = normalizeGamification(gamification);
  return ACHIEVEMENTS.map((achievement) => ({
    ...achievement,
    unlockedAt: normalized.achievements[achievement.id] || null,
  }));
}

/**
 * Reconcilia as conquistas depois de o ledger da temporada ser atualizado.
 * Chamar em respostas, sessões e coletas garante que “Primeira evolução” e
 * “Mestre da temporada” sejam desbloqueadas no mesmo evento que muda o estágio.
 * O XP interno pode aumentar, mas as moedas continuam exigindo coleta manual.
 */
export function applySeasonAchievements(
  current,
  { seasonStage = 0, now = new Date() } = {}
) {
  const gamification = normalizeGamification(current);
  if (!seasonStage) {
    return { gamification, newAchievements: [] };
  }
  return reconcileAchievements(
    gamification,
    gamificationContext(gamification, { seasonStage }),
    now
  );
}

/** XP recebido por uma resposta, já refletido no registro de gamificação. */
export function applyAnswerRewards(
  current,
  { correct, difficulty, daily = {}, goal = 20, now = new Date() } = {}
) {
  const gamification = normalizeGamification(current);
  const xpGain = answerXp({ correct: Boolean(correct), difficulty });
  const streak = computeStreak(daily, now);
  const goalProgress = dailyProgress({ daily }, goal, now);
  const withAnswer = {
    ...gamification,
    xp: gamification.xp + xpGain,
    answered: gamification.answered + 1,
    correct: gamification.correct + (correct ? 1 : 0),
    bestStreak: Math.max(gamification.bestStreak, streak.current, streak.best),
    updatedAt: now instanceof Date ? now.toISOString() : new Date(now).toISOString(),
  };
  const result = reconcileAchievements(
    withAnswer,
    gamificationContext(withAnswer, {
      goalReached: goalProgress.reached,
      bestStreak: withAnswer.bestStreak,
    }),
    now
  );
  return {
    gamification: result.gamification,
    xpGain: result.gamification.xp - gamification.xp,
    answerXp: xpGain,
    newAchievements: result.newAchievements,
    streak,
    goal: goalProgress,
  };
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
  const baseXp = sessionXp({ correct, total });
  const perfect = total > 0 && correct >= total;
  const awardedSessions = {
    ...gamification.awardedSessions,
    [sessionId]: timestamp,
  };
  const recent = Object.entries(awardedSessions)
    .sort((a, b) => String(b[1]).localeCompare(String(a[1])))
    .slice(0, MAX_AWARD_HISTORY);
  const pruned = Object.fromEntries(recent);

  const withSession = {
    ...gamification,
    xp: gamification.xp + baseXp,
    sessionsCompleted: gamification.sessionsCompleted + 1,
    perfectSessions: gamification.perfectSessions + (perfect ? 1 : 0),
    awardedSessions: pruned,
    updatedAt: timestamp,
  };
  const result = reconcileAchievements(withSession, gamificationContext(withSession), now);

  return {
    gamification: result.gamification,
    xpGain: result.gamification.xp - gamification.xp,
    baseXp,
    alreadyAwarded: false,
    newAchievements: result.newAchievements,
  };
}
