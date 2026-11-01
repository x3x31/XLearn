/**
 * srs.js — repetição espaçada do XLearn.
 *
 * Módulo puro (sem DOM e sem IndexedDB). O algoritmo é intencionalmente
 * simples e adaptativo:
 *   - acerto: sobe um nível e agenda 1, 3, 7, 14 ou 30 dias;
 *   - erro: desce um nível e agenda uma revisão curta (10 minutos);
 *   - o estudante pode substituir o intervalo automático após um acerto.
 *
 * Não há alegação de validação científica. Os intervalos são configuráveis
 * e o histórico de cada questão é mantido em IndexedDB.
 */

export const SHORT_REVIEW_MINUTES = 10;
export const MINUTE_MS = 60 * 1000;
export const DAY_MS = 24 * 60 * MINUTE_MS;
export const DEFAULT_INTERVALS = [1, 3, 7, 14, 30];

export function normalizeIntervals(intervals) {
  const values = Array.isArray(intervals)
    ? intervals.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  return values.length === DEFAULT_INTERVALS.length ? values : [...DEFAULT_INTERVALS];
}

export function clampLevel(level) {
  const value = Number(level);
  if (!Number.isFinite(value)) return 0;
  return Math.min(DEFAULT_INTERVALS.length, Math.max(0, Math.trunc(value)));
}

/**
 * Calcula o próximo agendamento automático.
 * @param {{level?: number, correct: boolean, intervals?: number[], enabled?: boolean, now?: Date}} input
 */
export function computeSchedule({
  level = 0,
  correct,
  intervals = DEFAULT_INTERVALS,
  enabled = true,
  now = new Date(),
}) {
  const validIntervals = normalizeIntervals(intervals);
  const currentLevel = clampLevel(level);
  const time = now instanceof Date ? now : new Date(now);

  if (!correct) {
    const nextLevel = Math.max(0, currentLevel - 1);
    if (!enabled) {
      return { level: nextLevel, dueAt: null, intervalMinutes: null, automatic: false };
    }
    return {
      level: nextLevel,
      dueAt: new Date(time.getTime() + SHORT_REVIEW_MINUTES * MINUTE_MS).toISOString(),
      intervalMinutes: SHORT_REVIEW_MINUTES,
      automatic: true,
      short: true,
    };
  }

  const nextLevel = Math.min(validIntervals.length, currentLevel + 1);
  if (!enabled) {
    return { level: nextLevel, dueAt: null, intervalMinutes: null, automatic: false };
  }
  const days = validIntervals[nextLevel - 1];
  return {
    level: nextLevel,
    dueAt: new Date(time.getTime() + days * DAY_MS).toISOString(),
    intervalMinutes: days * 24 * 60,
    automatic: true,
    short: false,
  };
}

/** Cria um agendamento manual (usado após acertos). */
export function manualSchedule({ level = 0, minutes, now = new Date() }) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return null;
  const time = now instanceof Date ? now : new Date(now);
  return {
    level: clampLevel(level),
    dueAt: new Date(time.getTime() + value * MINUTE_MS).toISOString(),
    intervalMinutes: value,
    automatic: false,
    manual: true,
  };
}

export function isDue(record, now = new Date()) {
  if (!record?.dueAt) return false;
  const due = new Date(record.dueAt);
  return Number.isFinite(due.getTime()) && due.getTime() <= now.getTime();
}

export function formatIntervalMinutes(minutes) {
  const value = Number(minutes);
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value < 60) return `${value} min`;
  if (value < 1440) {
    const hours = value / 60;
    return `${Number.isInteger(hours) ? hours : hours.toFixed(1)} h`;
  }
  const days = value / 1440;
  return `${Number.isInteger(days) ? days : days.toFixed(1)} ${days === 1 ? "dia" : "dias"}`;
}

export function formatDueLabel(dueAt, now = new Date()) {
  if (!dueAt) return "sem revisão agendada";
  const due = new Date(dueAt);
  if (!Number.isFinite(due.getTime())) return "data inválida";
  const diff = due.getTime() - now.getTime();
  const absolute = Math.abs(diff);

  if (diff <= 0) {
    if (absolute < MINUTE_MS) return "agora";
    if (absolute < 60 * MINUTE_MS) return `há ${Math.ceil(absolute / MINUTE_MS)} min`;
    if (absolute < DAY_MS) return `há ${Math.ceil(absolute / (60 * MINUTE_MS))} h`;
    return `há ${Math.ceil(absolute / DAY_MS)} d`;
  }

  if (diff < 60 * MINUTE_MS) return `em ${Math.max(1, Math.ceil(diff / MINUTE_MS))} min`;
  if (diff < DAY_MS) return `em ${Math.ceil(diff / (60 * MINUTE_MS))} h`;

  const startToday = new Date(now);
  startToday.setHours(0, 0, 0, 0);
  const startDue = new Date(due);
  startDue.setHours(0, 0, 0, 0);
  const dayDiff = Math.round((startDue.getTime() - startToday.getTime()) / DAY_MS);
  if (dayDiff === 1) return "amanhã";
  if (dayDiff < 7) return `em ${dayDiff} dias`;
  return new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "2-digit" }).format(due);
}

/**
 * Agrupa o progresso com revisão em fila por material.
 * Questões vencidas vêm primeiro; futuras ficam visíveis para planejamento.
 */
export function buildReviewQueue(records = [], now = new Date()) {
  const groups = new Map();
  let overdueCount = 0;
  let upcomingCount = 0;

  for (const record of records) {
    if (!record?.dueAt) continue;
    const due = new Date(record.dueAt);
    if (!Number.isFinite(due.getTime())) continue;

    const key = record.materialPath || record.materialId || "material";
    let group = groups.get(key);
    if (!group) {
      group = {
        key,
        materialPath: record.materialPath || key,
        materialId: record.materialId || "",
        materialTitle: record.materialTitle || "Material de estudo",
        subject: record.subject || "Geral",
        overdue: [],
        upcoming: [],
        nextDueAt: record.dueAt,
      };
      groups.set(key, group);
    }

    const item = {
      questionId: record.questionId,
      topic: record.topic || "",
      dueAt: record.dueAt,
      srsLevel: record.srsLevel ?? 0,
      intervalMinutes: record.lastIntervalMinutes ?? null,
      seen: record.seen || 0,
      correctCount: record.correctCount || 0,
      wrongCount: record.wrongCount || 0,
      lastResult: record.lastResult ?? null,
      materialId: record.materialId,
      materialPath: record.materialPath,
    };

    if (due.getTime() <= now.getTime()) {
      group.overdue.push(item);
      overdueCount += 1;
    } else {
      group.upcoming.push(item);
      upcomingCount += 1;
      if (!group.nextDueAt || due < new Date(group.nextDueAt)) group.nextDueAt = record.dueAt;
    }
  }

  for (const group of groups.values()) {
    group.overdue.sort((a, b) => String(a.dueAt).localeCompare(String(b.dueAt)));
    group.upcoming.sort((a, b) => String(a.dueAt).localeCompare(String(b.dueAt)));
    group.nextDueAt = group.overdue[0]?.dueAt || group.upcoming[0]?.dueAt || null;
  }

  const list = [...groups.values()].sort((a, b) => {
    if (a.overdue.length !== b.overdue.length) return b.overdue.length - a.overdue.length;
    return String(a.nextDueAt).localeCompare(String(b.nextDueAt));
  });

  return {
    groups: list,
    counts: { overdue: overdueCount, upcoming: upcomingCount },
  };
}
