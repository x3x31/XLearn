/**
 * timer.js — cronômetro regressivo das provas.
 *
 * Módulo puro: não acessa DOM, IndexedDB nem timers do navegador. O relógio
 * usa um instante-limite (`deadlineAt`) enquanto corre, o que mantém o tempo
 * correto mesmo que a aba fique algum tempo sem renderizar. Ao ocultar a aba,
 * o app pausa o relógio e guarda os segundos restantes; ao voltar, cria um novo
 * limite a partir do que restou.
 */

export const TIMER_MIN_MINUTES = 5;
export const TIMER_MAX_MINUTES = 120;
export const TIMER_DEFAULT_MINUTES = 30;
export const TIMER_WARNING_SECONDS = 60;

/** O cronômetro vale apenas para provas normais, nunca para revisões/correções. */
export function usesExamTimer(mode) {
  return mode === "material";
}

function nonNegativeInteger(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

function iso(now) {
  const date = now instanceof Date ? now : new Date(now);
  return date.toISOString();
}

function parseDate(value) {
  if (typeof value !== "string") return null;
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : time;
}

/** Cria o cronômetro de uma sessão nova. Desligado por padrão. */
export function createTimer({
  enabled = false,
  minutes = TIMER_DEFAULT_MINUTES,
  now = Date.now(),
} = {}) {
  const durationMinutes = Math.min(
    TIMER_MAX_MINUTES,
    Math.max(TIMER_MIN_MINUTES, Math.round(Number(minutes) || TIMER_DEFAULT_MINUTES))
  );
  const durationSeconds = durationMinutes * 60;
  const time = now instanceof Date ? now.getTime() : Number(now);
  return {
    enabled: Boolean(enabled),
    durationSeconds: enabled ? durationSeconds : 0,
    remainingSeconds: enabled ? durationSeconds : 0,
    deadlineAt: enabled ? iso(time + durationSeconds * 1000) : null,
    paused: !enabled,
    updatedAt: iso(now),
  };
}

/** Normaliza cronômetros salvos, inclusive sessões anteriores ao recurso. */
export function normalizeTimer(raw, now = Date.now()) {
  if (!raw || typeof raw !== "object" || raw.enabled !== true) {
    return createTimer({ enabled: false, now });
  }
  const durationSeconds =
    nonNegativeInteger(raw.durationSeconds) || TIMER_DEFAULT_MINUTES * 60;
  const rawRemaining = Number(raw.remainingSeconds);
  const remainingSeconds =
    Number.isFinite(rawRemaining) && rawRemaining >= 0
      ? Math.min(durationSeconds, Math.trunc(rawRemaining))
      : durationSeconds;
  const deadline = parseDate(raw.deadlineAt);
  const expiredTime = parseDate(raw.expiredAt);
  const expiredAt = expiredTime === null ? null : iso(expiredTime);
  const paused = Boolean(raw.paused) || deadline === null || Boolean(expiredAt);
  return {
    enabled: true,
    durationSeconds,
    remainingSeconds: expiredAt ? 0 : remainingSeconds,
    deadlineAt: paused ? null : iso(deadline),
    paused,
    ...(expiredAt ? { expiredAt } : {}),
    updatedAt: parseDate(raw.updatedAt) ? raw.updatedAt : iso(now),
  };
}

/** Segundos restantes, arredondados para cima para o relógio não adiantar. */
export function remainingTimerSeconds(timer, now = Date.now()) {
  if (!timer || timer.enabled !== true) return 0;
  if (timer.paused) return nonNegativeInteger(timer.remainingSeconds);
  const deadline = parseDate(timer.deadlineAt);
  if (deadline === null) return nonNegativeInteger(timer.remainingSeconds);
  return Math.max(0, Math.ceil((deadline - (now instanceof Date ? now.getTime() : Number(now))) / 1000));
}

export function isTimerExpired(timer, now = Date.now()) {
  return Boolean(timer?.enabled) && remainingTimerSeconds(timer, now) <= 0;
}

/** Congela os segundos restantes e remove o instante-limite. */
export function pauseTimer(timer, now = Date.now()) {
  if (!timer || timer.enabled !== true) return timer;
  return {
    ...timer,
    remainingSeconds: remainingTimerSeconds(timer, now),
    deadlineAt: null,
    paused: true,
    updatedAt: iso(now),
  };
}

/** Retoma a contagem a partir dos segundos congelados. */
export function resumeTimer(timer, now = Date.now()) {
  if (!timer || timer.enabled !== true) return timer;
  const remaining = remainingTimerSeconds(timer, now);
  const time = now instanceof Date ? now.getTime() : Number(now);
  return {
    ...timer,
    remainingSeconds: remaining,
    deadlineAt: new Date(time + remaining * 1000).toISOString(),
    paused: false,
    updatedAt: iso(now),
  };
}

/** Marca o cronômetro como encerrado, preservando a duração original. */
export function expireTimer(timer, now = Date.now()) {
  if (!timer || timer.enabled !== true) return timer;
  return {
    ...timer,
    remainingSeconds: 0,
    deadlineAt: null,
    paused: true,
    expiredAt: iso(now),
    updatedAt: iso(now),
  };
}

/** Formato MM:SS, sem depender de locale. */
export function formatTimerClock(seconds) {
  const safe = nonNegativeInteger(seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

export function formatTimerAria(seconds, { paused = false, expired = false } = {}) {
  if (expired) return "Tempo esgotado";
  const safe = nonNegativeInteger(seconds);
  const minutes = Math.floor(safe / 60);
  const remainder = safe % 60;
  const parts = [];
  if (minutes > 0) parts.push(`${minutes} ${minutes === 1 ? "minuto" : "minutos"}`);
  if (remainder > 0 || parts.length === 0) {
    parts.push(`${remainder} ${remainder === 1 ? "segundo" : "segundos"}`);
  }
  return `${paused ? "Tempo restante pausado" : "Tempo restante"}: ${parts.join(" e ")}`;
}

export function isTimerWarning(seconds) {
  return nonNegativeInteger(seconds) > 0 && nonNegativeInteger(seconds) <= TIMER_WARNING_SECONDS;
}
