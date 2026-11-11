/**
 * cloud.js — conta, sessão e ranking da temporada via Supabase REST.
 *
 * Não usa SDK nem dependência de execução: as chamadas são feitas com `fetch`
 * para os endpoints GoTrue (autenticação) e PostgREST (pontuação). O módulo é
 * independente do DOM e recebe `fetchImpl`/`now` nos testes.
 *
 * A segurança dos dados públicos depende das políticas RLS de
 * `supabase/schema.sql`. A publishable key é pública por definição.
 */

import { CLOUD_CONFIG, isCloudConfigured } from "./cloud-config.js";

export const SESSION_EXPIRY_SKEW_MS = 60 * 1000;
export const DEFAULT_REQUEST_TIMEOUT_MS = 15 * 1000;

const NICKNAME_MIN = 2;
const NICKNAME_MAX = 24;
const PASSWORD_MIN = 6;
const LEVELS = new Set(["curioso", "estudante", "focado", "veterano", "mestre"]);

export class CloudError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = "CloudError";
    this.status = Number(options.status) || 0;
    this.code = options.code || "";
    this.rawMessage = options.rawMessage || "";
    this.network = Boolean(options.network);
    this.timeout = Boolean(options.timeout);
    this.credentials = Boolean(options.credentials);
    this.emailNotConfirmed = Boolean(options.emailNotConfirmed);
    this.userExists = Boolean(options.userExists);
    this.tableMissing = Boolean(options.tableMissing);
    this.authInvalid = Boolean(options.authInvalid);
    this.tooManyRequests = Boolean(options.tooManyRequests);
  }
}

function nowMilliseconds(now) {
  if (typeof now === "function") {
    const value = now();
    return value instanceof Date ? value.getTime() : Number(value) || Date.now();
  }
  if (now instanceof Date) return now.getTime();
  return Number.isFinite(Number(now)) ? Number(now) : Date.now();
}

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

/** Remove caracteres de controle e normaliza espaços do apelido. */
export function normalizeNickname(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, NICKNAME_MAX);
}

export function validateNickname(value) {
  const nickname = normalizeNickname(value);
  if (nickname.length < NICKNAME_MIN) {
    throw new CloudError(`O apelido deve ter pelo menos ${NICKNAME_MIN} caracteres.`, {
      code: "invalid_nickname",
    });
  }
  if (nickname.length > NICKNAME_MAX) {
    throw new CloudError(`O apelido deve ter no máximo ${NICKNAME_MAX} caracteres.`, {
      code: "invalid_nickname",
    });
  }
  return nickname;
}

export function validateEmail(value) {
  const email = text(value).toLowerCase();
  if (
    email.length < 5 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)
  ) {
    throw new CloudError("Informe um e-mail válido.", { code: "invalid_email" });
  }
  return email;
}

export function validatePassword(value) {
  const password = typeof value === "string" ? value : "";
  if (password.length < PASSWORD_MIN) {
    throw new CloudError(`A senha deve ter pelo menos ${PASSWORD_MIN} caracteres.`, {
      code: "invalid_password",
    });
  }
  if (password.length > 72) {
    throw new CloudError("A senha deve ter no máximo 72 caracteres.", {
      code: "invalid_password",
    });
  }
  if (!password.trim()) {
    throw new CloudError("A senha não pode conter apenas espaços.", {
      code: "invalid_password",
    });
  }
  return password;
}

function safeLevelNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < 1) return 1;
  return Math.min(99, Math.trunc(number));
}

function nonNegativeInteger(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

function normalizeLevelName(value, levelNumber = 1) {
  const name = text(value);
  if (name) return name.slice(0, 40);
  return ["Curioso", "Estudante", "Focado", "Veterano", "Mestre dos estudos"][
    Math.min(4, Math.max(0, safeLevelNumber(levelNumber) - 1))
  ];
}

/** Converte o payload do GoTrue em uma sessão persistível. */
export function sessionFromAuthPayload(payload, fallback = {}) {
  if (!payload || typeof payload !== "object") return null;
  const container =
    payload.session && typeof payload.session === "object" ? payload.session : payload;
  const accessToken = text(container.access_token || payload.access_token);
  if (!accessToken) return null;

  const user = payload.user || container.user || fallback.user || {};
  const metadata = user.user_metadata || user.raw_user_meta_data || {};
  const fallbackNickname =
    text(fallback.nickname) ||
    normalizeNickname(metadata.nickname) ||
    normalizeNickname(user.nickname) ||
    normalizeNickname(String(user.email || fallback.email || "").split("@")[0]) ||
    "Estudante";

  const now = nowMilliseconds(fallback.now);
  let expiresAt = Number(container.expires_at ?? payload.expires_at);
  if (!Number.isFinite(expiresAt) || expiresAt <= 0) {
    const expiresIn = Number(container.expires_in ?? payload.expires_in) || 3600;
    expiresAt = now + expiresIn * 1000;
  } else if (expiresAt < 1e12) {
    expiresAt *= 1000;
  }

  return {
    accessToken,
    refreshToken: text(
      container.refresh_token || payload.refresh_token || fallback.refreshToken
    ),
    tokenType: text(container.token_type || payload.token_type) || "bearer",
    expiresAt,
    userId: text(user.id || container.user_id || payload.user_id || fallback.userId),
    email: text(user.email || fallback.email).toLowerCase(),
    nickname: fallbackNickname,
    seasonId: text(fallback.seasonId) || null,
    createdAt: text(fallback.createdAt) || new Date(now).toISOString(),
  };
}

export function sessionNeedsRefresh(
  session,
  now = Date.now(),
  skew = SESSION_EXPIRY_SKEW_MS
) {
  if (!session || !session.refreshToken && !session.accessToken) return true;
  const expiresAt = Number(session.expiresAt);
  if (!Number.isFinite(expiresAt) || expiresAt <= 0) return true;
  return expiresAt - Math.max(0, Number(skew) || 0) <= nowMilliseconds(now);
}

function rawMessageFrom(payload) {
  if (typeof payload === "string") return payload;
  if (!payload || typeof payload !== "object") return "";
  return text(
    payload.msg ||
      payload.message ||
      payload.error_description ||
      payload.error ||
      payload.details ||
      payload.hint
  );
}

function codeFrom(payload) {
  return text(payload && typeof payload === "object" ? payload.code : "");
}

function isTableMissingError(status, code, raw) {
  return (
    code === "PGRST205" ||
    code === "42P01" ||
    status === 404 && /relation|table|schema cache|not find/i.test(raw) ||
    /could not find the table|schema cache|relation .* does not exist/i.test(raw)
  );
}

function errorFromResponse(response, payload) {
  const status = response.status;
  const code = codeFrom(payload);
  const raw = rawMessageFrom(payload);
  const lower = raw.toLowerCase();
  const credentials =
    code === "invalid_credentials" ||
    code === "invalid_grant" ||
    /invalid login credentials|invalid grant|invalid credentials/.test(lower);
  const emailNotConfirmed = /email not confirmed|email.*not.*confirmed/.test(lower);
  const userExists = /already registered|already exists|user already/.test(lower);
  const tableMissing = isTableMissingError(status, code, raw);
  const tooManyRequests =
    status === 429 || /rate limit|too many requests|after \d+ seconds/.test(lower);

  let message = "Não foi possível concluir a operação.";
  if (credentials) message = "E-mail ou senha incorretos.";
  else if (emailNotConfirmed)
    message = "Confirme seu e-mail antes de entrar. Verifique também se a confirmação de e-mail está desativada no Supabase.";
  else if (userExists) message = "Este e-mail já está cadastrado. Verifique a senha.";
  else if (tableMissing)
    message = "O ranking ainda não foi configurado no servidor. Execute supabase/schema.sql no Supabase.";
  else if (tooManyRequests)
    message = "Muitas tentativas em pouco tempo. Aguarde alguns instantes e tente novamente.";
  else if (/password should be at least|password.*characters/.test(lower))
    message = `A senha deve ter pelo menos ${PASSWORD_MIN} caracteres.`;
  else if (/unable to validate email|invalid email|email address.*invalid/.test(lower))
    message = "Informe um e-mail válido.";
  else if (/signups not allowed|signup.*disabled/.test(lower))
    message = "O cadastro está desativado no servidor.";
  else if (/jwt expired|invalid jwt|token has expired/.test(lower))
    message = "Sua sessão expirou. Entre novamente.";
  else if (/row-level security|permission denied|not authorized/.test(lower))
    message = "Sem permissão para salvar a pontuação. Verifique as políticas RLS do Supabase.";
  else if (status >= 500) message = "O servidor está indisponível no momento. Tente novamente mais tarde.";

  return new CloudError(message, {
    status,
    code,
    rawMessage: raw,
    credentials,
    emailNotConfirmed,
    userExists,
    tableMissing,
    tooManyRequests,
    authInvalid: status === 401 || status === 403 || credentials || /jwt expired/.test(lower),
  });
}

function networkError(cause) {
  return new CloudError(
    "Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente.",
    { code: "network", network: true, rawMessage: cause?.message || "" }
  );
}

function timeoutError() {
  return new CloudError("O servidor demorou para responder. Tente novamente.", {
    code: "timeout",
    network: true,
    timeout: true,
  });
}

function normalizeLeaderboardRow(row) {
  if (!row || typeof row !== "object") return null;
  const position = Number(row.position);
  const levelNumber = safeLevelNumber(row.level_number);
  return {
    position: Number.isFinite(position) && position > 0 ? Math.trunc(position) : 0,
    userId: text(row.user_id),
    seasonId: text(row.season_id),
    nickname: normalizeNickname(row.nickname) || "Estudante",
    levelNumber,
    levelName: normalizeLevelName(row.level_name, levelNumber),
    coins: nonNegativeInteger(row.coins),
    activeDays: nonNegativeInteger(row.active_days),
    updatedAt: text(row.updated_at) || null,
  };
}

function normalizeLeaderboard(rows) {
  return Array.isArray(rows)
    ? rows.map(normalizeLeaderboardRow).filter(Boolean)
    : [];
}

/** Normaliza a pontuação enviada; o `user_id` vem sempre da sessão. */
export function normalizeScore(score, session) {
  const nickname = normalizeNickname(score?.nickname || session?.nickname) || "Estudante";
  const seasonId = text(score?.seasonId);
  if (!seasonId) {
    throw new CloudError("Temporada inválida para sincronização.", {
      code: "invalid_season",
    });
  }
  const levelNumber = safeLevelNumber(score?.levelNumber);
  const levelName = normalizeLevelName(score?.levelName, levelNumber);
  return {
    user_id: text(session?.userId),
    season_id: seasonId,
    nickname,
    level_number: levelNumber,
    level_name: levelName,
    coins: nonNegativeInteger(score?.coins),
    active_days: nonNegativeInteger(score?.activeDays),
  };
}

export function createCloudClient(options = {}) {
  const config = options.config || CLOUD_CONFIG;
  const fetchImpl =
    options.fetchImpl ||
    (typeof fetch === "function" ? fetch.bind(globalThis) : null);
  const timeoutMs = Number.isFinite(options.timeoutMs)
    ? Math.max(1000, options.timeoutMs)
    : DEFAULT_REQUEST_TIMEOUT_MS;
  const now = options.now || Date.now;

  if (!fetchImpl) {
    throw new CloudError("Este navegador não oferece suporte à conexão com o ranking.", {
      code: "no_fetch",
    });
  }
  if (!isCloudConfigured(config)) {
    throw new CloudError("O ranking global ainda não está configurado.", {
      code: "not_configured",
    });
  }

  const baseUrl = config.url.replace(/\/+$/, "");
  const publishableKey = config.publishableKey;

  async function request(path, requestOptions = {}) {
    const {
      method = "GET",
      body,
      token,
      headers = {},
      prefer,
    } = requestOptions;
    const controller =
      typeof AbortController === "function" ? new AbortController() : null;
    const timer = controller
      ? setTimeout(() => controller.abort(), timeoutMs)
      : null;
    const requestHeaders = {
      apikey: publishableKey,
      Authorization: `Bearer ${token || publishableKey}`,
      ...headers,
    };
    if (body !== undefined) requestHeaders["Content-Type"] = "application/json";
    if (prefer) requestHeaders.Prefer = prefer;

    let response;
    try {
      response = await fetchImpl(`${baseUrl}${path}`, {
        method,
        headers: requestHeaders,
        body: body === undefined ? undefined : JSON.stringify(body),
        cache: "no-store",
        signal: controller?.signal,
      });
    } catch (error) {
      if (error?.name === "AbortError") throw timeoutError();
      throw networkError(error);
    } finally {
      if (timer) clearTimeout(timer);
    }

    let payload = null;
    const rawText = await response.text();
    if (rawText) {
      try {
        payload = JSON.parse(rawText);
      } catch {
        payload = rawText;
      }
    }
    if (!response.ok) throw errorFromResponse(response, payload);
    return payload;
  }

  async function signIn({ email, password } = {}) {
    const credentials = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    const payload = await request("/auth/v1/token?grant_type=password", {
      method: "POST",
      body: credentials,
    });
    const session = sessionFromAuthPayload(payload, {
      email: credentials.email,
      now: nowMilliseconds(now),
    });
    if (!session) {
      throw new CloudError("O servidor não retornou uma sessão válida.", {
        code: "missing_session",
        authInvalid: true,
      });
    }
    return session;
  }

  async function signUp({ email, password, nickname } = {}) {
    const credentials = {
      email: validateEmail(email),
      password: validatePassword(password),
      nickname: validateNickname(nickname),
    };
    const payload = await request("/auth/v1/signup", {
      method: "POST",
      body: {
        email: credentials.email,
        password: credentials.password,
        data: { nickname: credentials.nickname },
      },
    });
    const session = sessionFromAuthPayload(payload, {
      email: credentials.email,
      nickname: credentials.nickname,
      now: nowMilliseconds(now),
    });
    return {
      session,
      user: payload && typeof payload === "object" ? payload.user || null : null,
      needsConfirmation: !session,
    };
  }

  async function refresh(session) {
    if (!session || !text(session.refreshToken)) {
      throw new CloudError("Sua sessão expirou. Entre novamente.", {
        code: "missing_refresh_token",
        authInvalid: true,
      });
    }
    const payload = await request("/auth/v1/token?grant_type=refresh_token", {
      method: "POST",
      body: { refresh_token: session.refreshToken },
    });
    const refreshed = sessionFromAuthPayload(payload, {
      ...session,
      now: nowMilliseconds(now),
    });
    if (!refreshed) {
      throw new CloudError("Sua sessão expirou. Entre novamente.", {
        code: "missing_session",
        authInvalid: true,
      });
    }
    return refreshed;
  }

  async function updateNickname(session, nickname) {
    const clean = validateNickname(nickname);
    if (!session?.accessToken) throw new CloudError("Sessão ausente.", { authInvalid: true });
    const user = await request("/auth/v1/user", {
      method: "PUT",
      token: session.accessToken,
      body: { data: { nickname: clean } },
    });
    const metadata = user?.user_metadata || {};
    return {
      ...session,
      nickname: normalizeNickname(metadata.nickname) || clean,
      email: text(user?.email) || session.email,
    };
  }

  async function signOut(session) {
    if (!session?.accessToken) return true;
    try {
      await request("/auth/v1/logout", {
        method: "POST",
        token: session.accessToken,
      });
      return true;
    } catch (error) {
      // O logout local deve acontecer mesmo se o servidor estiver offline.
      if (error instanceof CloudError && error.network) return false;
      if (error instanceof CloudError && error.authInvalid) return true;
      throw error;
    }
  }

  async function saveScore(session, score) {
    if (!session?.accessToken || !session?.userId) {
      throw new CloudError("Entre na sua conta para sincronizar a pontuação.", {
        code: "missing_session",
        authInvalid: true,
      });
    }
    const row = normalizeScore(score, session);
    if (!row.user_id || row.user_id !== text(session.userId)) {
      throw new CloudError("A pontuação não pertence à conta conectada.", {
        code: "identity_mismatch",
      });
    }
    const query = new URLSearchParams({ on_conflict: "user_id,season_id" });
    const payload = await request(`/rest/v1/season_scores?${query}`, {
      method: "POST",
      token: session.accessToken,
      body: [row],
      prefer: "resolution=merge-duplicates,return=representation",
    });
    return Array.isArray(payload) && payload[0]
      ? normalizeLeaderboardRow(payload[0])
      : null;
  }

  async function deleteScore(session, seasonId) {
    if (!session?.accessToken || !session?.userId) {
      throw new CloudError("Entre na sua conta para remover a pontuação.", {
        code: "missing_session",
        authInvalid: true,
      });
    }
    const season = text(seasonId);
    if (!season) throw new CloudError("Temporada inválida.", { code: "invalid_season" });
    const query = new URLSearchParams({
      user_id: `eq.${text(session.userId)}`,
      season_id: `eq.${season}`,
    });
    const payload = await request(`/rest/v1/season_scores?${query}`, {
      method: "DELETE",
      token: session.accessToken,
      prefer: "return=representation",
    });
    return Array.isArray(payload) ? payload.length : 0;
  }

  async function fetchLeaderboard(seasonId, listOptions = {}) {
    const season = text(seasonId);
    if (!season) throw new CloudError("Temporada inválida.", { code: "invalid_season" });
    const limit = Math.min(50, Math.max(1, Number(listOptions.limit) || 5));
    const query = new URLSearchParams({
      season_id: `eq.${season}`,
      select:
        "position,user_id,season_id,nickname,level_number,level_name,coins,active_days,updated_at",
      order: "position.asc",
      limit: String(limit),
    });
    const payload = await request(`/rest/v1/season_leaderboard?${query}`, {
      token: listOptions.session?.accessToken,
    });
    return normalizeLeaderboard(payload).slice(0, limit);
  }

  async function fetchOwnRank(seasonId, userId, listOptions = {}) {
    const season = text(seasonId);
    const id = text(userId);
    if (!season || !id) return null;
    const query = new URLSearchParams({
      season_id: `eq.${season}`,
      user_id: `eq.${id}`,
      select:
        "position,user_id,season_id,nickname,level_number,level_name,coins,active_days,updated_at",
      limit: "1",
    });
    const payload = await request(`/rest/v1/season_leaderboard?${query}`, {
      token: listOptions.session?.accessToken,
    });
    return normalizeLeaderboard(payload)[0] || null;
  }

  return Object.freeze({
    signIn,
    signUp,
    refresh,
    updateNickname,
    signOut,
    saveScore,
    deleteScore,
    fetchLeaderboard,
    fetchOwnRank,
  });
}

export function describeCloudError(error, fallback = "Não foi possível concluir a operação.") {
  if (error instanceof CloudError && error.message) return error.message;
  return fallback;
}

export { normalizeLeaderboardRow, LEVELS };
