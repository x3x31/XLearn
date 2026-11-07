/**
 * season.js — temporada e evolução do personagem.
 *
 * Módulo puro: não acessa DOM nem IndexedDB. A Temporada 1 começa em
 * 05/11/2026 e termina em 04/12/2026. A evolução exige, ao mesmo tempo,
 * moedas acumuladas na temporada e dias ativos; cada estágio acrescenta
 * três dias ativos ao requisito anterior.
 *
 * O ledger de moedas da temporada é separado de `wallet.earned`: assim os
 * ganhos posteriores ao término não alteram o personagem congelado.
 */

const DAY_MS = 24 * 60 * 60 * 1000;

export const SEASON_STAGE_ACTIVE_DAY_STEP = 3;

/** Estágios do personagem, com os dois requisitos simultâneos. */
export const SEASON_STAGES = Object.freeze([
  {
    id: "curioso",
    name: "Curioso",
    minCoins: 0,
    minActiveDays: 0,
    image: "assets/characters/curioso.svg",
    description: "Todo grande estudo começa com uma pergunta.",
  },
  {
    id: "estudante",
    name: "Estudante",
    minCoins: 300,
    minActiveDays: 3,
    image: "assets/characters/estudante.svg",
    description: "Caderno na mão e ritmo constante.",
  },
  {
    id: "focado",
    name: "Focado",
    minCoins: 600,
    minActiveDays: 6,
    image: "assets/characters/focado.svg",
    description: "Concentração de quem já conhece o próprio método.",
  },
  {
    id: "veterano",
    name: "Veterano",
    minCoins: 1000,
    minActiveDays: 9,
    image: "assets/characters/veterano.svg",
    description: "Experiência acumulada questão após questão.",
  },
  {
    id: "mestre",
    name: "Mestre dos estudos",
    minCoins: 1500,
    minActiveDays: 12,
    image: "assets/characters/mestre.svg",
    description: "Constância, domínio e vontade de ensinar.",
  },
]);

/** Temporada 1 — período oficial desta entrega. */
export const SEASON_1 = Object.freeze({
  id: "2026-1",
  name: "Temporada 1",
  startsAt: "2026-11-05",
  endsAt: "2026-12-04",
});

export const SEASONS = Object.freeze([SEASON_1]);

function nonNegative(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

function timestamp(now) {
  return now instanceof Date ? now.toISOString() : new Date(now).toISOString();
}

function parseDayKey(key) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(key || ""));
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  const date = new Date(year, month, day);
  if (
    !Number.isFinite(date.getTime()) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    return null;
  }
  return date;
}

function utcDayNumber(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / DAY_MS);
}

export function localDayKey(date = new Date()) {
  const time = date instanceof Date ? date : new Date(date);
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const day = String(time.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isSeasonConfig(season) {
  if (!season || typeof season !== "object") return false;
  const start = parseDayKey(season.startsAt);
  const end = parseDayKey(season.endsAt);
  return Boolean(start && end && start.getTime() <= end.getTime());
}

/** Temporada ativa na data informada, ou a mais recente encerrada. */
export function currentSeasonConfig(now = new Date()) {
  const today = localDayKey(now);
  const active = SEASONS.find(
    (season) => today >= season.startsAt && today <= season.endsAt
  );
  if (active) return active;
  const ended = SEASONS.filter((season) => today > season.endsAt).sort((a, b) =>
    b.endsAt.localeCompare(a.endsAt)
  );
  return ended[0] || SEASONS[0];
}

export function createSeason(now = new Date()) {
  const config = currentSeasonConfig(now);
  return {
    id: config.id,
    name: config.name,
    startsAt: config.startsAt,
    endsAt: config.endsAt,
    coinsEarned: 0,
    createdAt: timestamp(now),
    updatedAt: timestamp(now),
  };
}

/**
 * Mantém o registro existente (inclusive congelado) e só troca de temporada
 * quando uma nova temporada configurada já começou. Dados corrompidos são
 * substituídos por um registro vazio da temporada atual.
 */
export function normalizeSeason(raw = null, now = new Date()) {
  const active = SEASONS.find((season) => {
    const today = localDayKey(now);
    return today >= season.startsAt && today <= season.endsAt;
  });

  if (raw && isSeasonConfig(raw) && typeof raw.id === "string" && raw.id) {
    if (!active || raw.id === active.id) {
      return {
        id: raw.id,
        name: typeof raw.name === "string" && raw.name ? raw.name : `Temporada ${raw.id}`,
        startsAt: raw.startsAt,
        endsAt: raw.endsAt,
        coinsEarned: nonNegative(raw.coinsEarned),
        createdAt: typeof raw.createdAt === "string" ? raw.createdAt : null,
        updatedAt: typeof raw.updatedAt === "string" ? raw.updatedAt : null,
      };
    }
  }

  return createSeason(now);
}

export function isWithinSeason(season, now = new Date()) {
  if (!isSeasonConfig(season)) return false;
  const today = localDayKey(now);
  return today >= season.startsAt && today <= season.endsAt;
}

/** Dados do período: estado, dia atual, total de dias e dias restantes. */
export function seasonStatus(season, now = new Date()) {
  if (!isSeasonConfig(season)) {
    return {
      state: "ended",
      isActive: false,
      hasStarted: false,
      hasEnded: true,
      dayNumber: null,
      totalDays: 0,
      daysRemaining: 0,
      daysUntilStart: 0,
    };
  }

  const today = localDayKey(now);
  const isActive = today >= season.startsAt && today <= season.endsAt;
  const hasStarted = today >= season.startsAt;
  const hasEnded = today > season.endsAt;
  const start = parseDayKey(season.startsAt);
  const end = parseDayKey(season.endsAt);
  const totalDays = Math.max(1, utcDayNumber(end) - utcDayNumber(start) + 1);
  const todayNumber = utcDayNumber(parseDayKey(today) || new Date(now));
  const endNumber = utcDayNumber(end);
  const startNumber = utcDayNumber(start);

  return {
    state: isActive ? "active" : hasEnded ? "ended" : "upcoming",
    isActive,
    hasStarted,
    hasEnded,
    dayNumber: isActive
      ? Math.min(totalDays, Math.max(1, todayNumber - startNumber + 1))
      : hasEnded
        ? totalDays
        : null,
    totalDays,
    daysRemaining: hasEnded ? 0 : Math.max(0, endNumber - todayNumber),
    daysUntilStart: hasStarted ? 0 : Math.max(0, startNumber - todayNumber),
  };
}

/**
 * Dias ativos dentro da temporada: dias com pelo menos uma questão respondida.
 * A comparação das chaves `AAAA-MM-DD` evita depender do fuso ou de horário.
 */
export function activeDaysInSeason(daily = {}, season) {
  if (!isSeasonConfig(season)) return 0;
  return Object.keys(daily || {}).filter((key) => {
    if (key < season.startsAt || key > season.endsAt) return false;
    return (daily[key]?.answered || 0) > 0;
  }).length;
}

/**
 * Maior estágio que atende simultaneamente às moedas e aos dias ativos.
 * O progresso é limitado pelo requisito mais atrasado.
 */
export function seasonStageFrom(coinsEarned, activeDays) {
  const coins = nonNegative(coinsEarned);
  const days = nonNegative(activeDays);
  let index = 0;
  for (let cursor = 0; cursor < SEASON_STAGES.length; cursor += 1) {
    const stage = SEASON_STAGES[cursor];
    if (coins >= stage.minCoins && days >= stage.minActiveDays) index = cursor;
  }

  const stage = SEASON_STAGES[index];
  const nextStage = SEASON_STAGES[index + 1] || null;
  const missingCoins = nextStage ? Math.max(0, nextStage.minCoins - coins) : 0;
  const missingDays = nextStage ? Math.max(0, nextStage.minActiveDays - days) : 0;
  const coinSpan = nextStage ? nextStage.minCoins - stage.minCoins : 0;
  const daySpan = nextStage ? nextStage.minActiveDays - stage.minActiveDays : 0;
  const coinProgress = nextStage && coinSpan > 0
    ? Math.min(1, Math.max(0, (coins - stage.minCoins) / coinSpan))
    : nextStage
      ? 1
      : 1;
  const dayProgress = nextStage && daySpan > 0
    ? Math.min(1, Math.max(0, (days - stage.minActiveDays) / daySpan))
    : nextStage
      ? 1
      : 1;

  return {
    stage,
    stageNumber: index + 1,
    totalStages: SEASON_STAGES.length,
    nextStage,
    coinsEarned: coins,
    activeDays: days,
    missingCoins,
    missingDays,
    coinProgress,
    dayProgress,
    progress: nextStage ? Math.min(coinProgress, dayProgress) : 1,
    blockedBy:
      !nextStage
        ? null
        : missingCoins > 0 && missingDays > 0
          ? "both"
          : missingCoins > 0
            ? "coins"
            : missingDays > 0
              ? "days"
              : null,
    isMax: !nextStage,
  };
}

/** Consolida temporada, período e estágio para a interface e as conquistas. */
export function summarizeSeason(season, daily = {}, now = new Date()) {
  const normalized = normalizeSeason(season, now);
  const activeDays = activeDaysInSeason(daily, normalized);
  return {
    season: normalized,
    status: seasonStatus(normalized, now),
    activeDays,
    ...seasonStageFrom(normalized.coinsEarned, activeDays),
  };
}

/**
 * Soma moedas ao ledger somente enquanto a temporada está vigente.
 * Retorna `gain: 0` depois do término, preservando o personagem congelado.
 */
export function applySeasonCoins(current, amount, { now = new Date() } = {}) {
  const season = normalizeSeason(current, now);
  const gain = nonNegative(amount);
  if (gain === 0 || !isWithinSeason(season, now)) {
    return { season, gain: 0, active: isWithinSeason(season, now) };
  }
  return {
    season: {
      ...season,
      coinsEarned: season.coinsEarned + gain,
      updatedAt: timestamp(now),
    },
    gain,
    active: true,
  };
}
