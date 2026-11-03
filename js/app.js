/**
 * app.js — interface do XLearn.
 *
 * Fluxo atual: carregar manifesto → selecionar prova → sessão com alternativas
 * embaralhadas → confirmação única → feedback → resumo.
 * A persistência em IndexedDB e as demais telas entram nos próximos requisitos.
 */

import { loadManifest, loadMaterial } from "./questions.js";
import { shuffle, seededRandom, hashString } from "./parser.js";
import { getSettings, applyVisualSettings, normalizeSettings, setSettings, MANUAL_INTERVALS } from "./settings.js";
import {
  applyReviewSchedule,
  awardSessionCompletion,
  clearProgressData,
  exportDatabase,
  getActiveSession,
  getGamification,
  getProgressSummary,
  getSettingsRecord,
  getStats,
  getWallet,
  importDatabase,
  listAttempts,
  recordAnswer,
  saveSession,
  saveSettingsRecord,
} from "./db.js";
import {
  computeStreak,
  createGamification,
  dailyProgress,
  levelFromXp,
  listAchievements,
} from "./gamification.js";
import {
  COIN_RULES,
  characterFromCoins,
  createWallet,
} from "./coins.js";
import {
  buildReviewQueue,
  computeSchedule,
  formatDueLabel,
  formatIntervalMinutes,
  manualSchedule,
} from "./srs.js";
import { buildRanking, RANKING_DISCLOSURE } from "./ranking.js";
import { createBackup, validateBackup } from "./backup.js";
import { clearAppCaches } from "./storage.js";
import { installSoundUnlock, playSound, unlockAudio } from "./sound.js";
import {
  TIMER_MAX_MINUTES,
  TIMER_MIN_MINUTES,
  createTimer,
  expireTimer,
  formatTimerAria,
  formatTimerClock,
  isTimerExpired,
  isTimerWarning,
  normalizeTimer,
  pauseTimer,
  remainingTimerSeconds,
  resumeTimer,
  usesExamTimer,
} from "./timer.js";

const app = document.getElementById("app");

const state = {
  manifest: null,
  entries: [],
  loading: true,
  error: null,
  session: null,
  sessionMaterial: null,
  progress: { byPath: {}, byId: {}, byKey: {}, records: [] },
  reviewQueue: { groups: [], counts: { overdue: 0, upcoming: 0 } },
  gamification: createGamification(),
  wallet: createWallet(),
  stats: { answered: 0, correct: 0, daily: {}, byMaterial: {} },
  recentAttempts: [],
  pendingImport: null,
  pendingReset: false,
  lastAnswerSave: null,
  scheduling: null,
  timerInterval: null,
  finishingSession: false,
  storageWarned: false,
  route: "inicio",
};

const ROUTES = new Set(["inicio", "estudar", "sessao", "resumo", "revisoes", "progresso", "config"]);

const ICONS = {
  logo: '<path d="M8 7h4l3 5 3-5h4l-5 8 5 8h-4l-3-5-3 5H8l5-8z" fill="currentColor" stroke="none"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  arrowLeft: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  sparkles: '<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  flame: '<path d="M12 3c1 3.5-1.5 5-1.5 7.5A2.5 2.5 0 0 0 13 13c2 0 3-1.5 3-3 2 2 3 4 3 6a7 7 0 0 1-14 0c0-4 3-6 7-13z"/>',
  chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  award: '<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 21l5-3 5 3-1.5-8.5"/>',
  trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 3"/><path d="M16 6h3a3 3 0 0 1-3 3"/><path d="M12 12v4"/><path d="M9 20h6"/><path d="M10 16h4l1 4H9z"/>',
  download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  upload: '<path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/>',
  trash: '<path d="M4 7h16"/><path d="M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13"/><path d="M9 7V4h6v3"/>',
  lock: '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  wifiOff: '<path d="M2 2l20 20"/><path d="M8.5 8.5A10 10 0 0 1 21 9"/><path d="M5 12.5a10 10 0 0 1 4-2.4"/><path d="M8.5 16a5 5 0 0 1 6-1"/><path d="M12 20h.01"/>',
  volume: '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="M15 8.5a5 5 0 0 1 0 7"/><path d="M17.8 5.7a9 9 0 0 1 0 12.6"/>',
  volumeOff: '<path d="M11 5 6.5 9H3v6h3.5L11 19z"/><path d="m16 9 5 6M21 9l-5 6"/>',
  coin: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.5 9.5h4a1.8 1.8 0 0 1 0 3.6h-3a1.8 1.8 0 0 0 0 3.6h4"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/>',
};

/* Helpers ----------------------------------------------------------------- */

function h(tag, props = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (value === null || value === undefined || value === false) continue;
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else if (key === "dataset") Object.assign(node.dataset, value);
    else if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "html") {
      // Usado somente com strings constantes definidas neste arquivo.
      node.innerHTML = value;
    } else if (value === true) {
      node.setAttribute(key, "");
    } else {
      node.setAttribute(key, String(value));
    }
  }
  for (const child of children.flat(Infinity)) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return node;
}

function icon(name) {
  const span = h("span", { class: "icon-slot", "aria-hidden": "true" });
  span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  return span;
}

function makeId() {
  return globalThis.crypto?.randomUUID?.() ||
    `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function plural(value, singular, pluralForm) {
  return `${value} ${value === 1 ? singular : pluralForm}`;
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return minutes > 0 ? `${minutes} min ${String(seconds).padStart(2, "0")} s` : `${seconds} s`;
}

function formatDateTime(iso) {
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function difficultyLabel(value) {
  return { easy: "Fácil", medium: "Média", hard: "Difícil" }[value] || "Não informada";
}

function truncate(text, length = 130) {
  const normalized = String(text ?? "").replace(/\s+/g, " ").trim();
  return normalized.length > length ? `${normalized.slice(0, length - 1)}…` : normalized;
}

function currentRoute() {
  const raw = location.hash.replace(/^#\/?/, "").trim();
  return ROUTES.has(raw) ? raw : "inicio";
}

function navigate(route) {
  const target = `#/${route}`;
  if (location.hash === target) {
    state.route = route;
    render({ focus: true });
  } else {
    location.hash = target;
  }
}

function showLoadingOverlay(message = "Carregando…") {
  const overlay = h(
    "div",
    { class: "loading-overlay", role: "status", "aria-live": "polite" },
    h("span", { class: "spinner", "aria-hidden": "true" }),
    h("p", { text: message })
  );
  overlay.id = "loading-overlay";
  document.getElementById("loading-overlay")?.remove();
  document.body.append(overlay);
}

function hideLoadingOverlay() {
  document.getElementById("loading-overlay")?.remove();
}

function toast(message, variant = "info") {
  const existing = document.querySelector(".toast");
  existing?.remove();
  const node = h("div", {
    class: `toast toast--${variant}`,
    role: variant === "error" ? "alert" : "status",
    "aria-live": variant === "error" ? "assertive" : "polite",
    text: message,
  });
  document.body.append(node);
  window.setTimeout(() => node.remove(), 4200);
}

function announceAchievements(achievements, extras = []) {
  const messages = [];
  if (Array.isArray(achievements) && achievements.length > 0) {
    playSound("achievement");
    const titles = achievements.map((achievement) => achievement.title).join(", ");
    messages.push(`Conquista desbloqueada: ${titles}`);
  }
  messages.push(...extras.filter(Boolean));
  if (messages.length === 0) return;
  toast(`${messages.join(" · ")}.`, "success");
}

/** Atualiza o botão de som do topo conforme as preferências atuais. */
function updateSoundToggle() {
  const button = document.querySelector('[data-role="sound-toggle"]');
  if (!button) return;
  const enabled = getSettings().soundEnabled;
  button.setAttribute("aria-pressed", String(enabled));
  button.setAttribute("aria-label", enabled ? "Desativar sons" : "Ativar sons");
  button.setAttribute("title", enabled ? "Sons ativados" : "Sons desativados");
  button.dataset.state = enabled ? "on" : "off";
  button.replaceChildren(icon(enabled ? "volume" : "volumeOff"));
}

async function toggleSound() {
  const enabled = !getSettings().soundEnabled;
  const next = { ...getSettings(), soundEnabled: enabled };
  setSettings(next);
  try {
    await saveSettingsRecord(next);
  } catch (error) {
    warnStorageOnce(error);
  }
  updateSoundToggle();
  if (enabled) {
    unlockAudio();
    playSound("coin", { force: true });
  }
  toast(enabled ? "Sons ativados." : "Sons desativados.", enabled ? "success" : "info");
}

/**
 * Reação lúdica à resposta: som sempre que habilitado e uma pequena explosão
 * visual quando as animações estão ativas. O conteúdo acessível já foi
 * renderizado; os efeitos são decorativos e ficam ocultos de leitores de tela.
 */
function playAnswerEffects(correct) {
  playSound(correct ? "correct" : "wrong");
  if (!getSettings().animations) return;
  const feedback = document.querySelector(".feedback");
  if (!feedback) return;
  feedback.classList.add(correct ? "feedback--celebrate" : "feedback--shake");
  if (correct) {
    const burst = h("span", { class: "answer-burst", "aria-hidden": "true" });
    for (let index = 0; index < 8; index += 1) {
      burst.append(h("span", { class: "answer-burst__spark", style: `--i:${index}` }));
    }
    feedback.append(burst);
    window.setTimeout(() => burst.remove(), 1200);
  }
  window.setTimeout(() => {
    feedback.classList.remove("feedback--celebrate", "feedback--shake");
  }, 800);
}

/* Boot / shell ------------------------------------------------------------ */

function buildShell() {
  const topbar = h(
    "header",
    { class: "topbar" },
    h(
      "div",
      { class: "topbar__inner" },
      h(
        "a",
        { class: "brand", href: "#/inicio", "aria-label": "XLearn — início" },
        h("span", { class: "brand__mark", html: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS.logo}</svg>` }),
        h("span", {}, "XLearn", h("small", { text: "aprender praticando" }))
      ),
      h(
        "div",
        { class: "topbar__actions" },
        h(
          "span",
          {
            class: "connection-status",
            "data-role": "connection-status",
            "data-state": "online",
            role: "status",
            "aria-live": "polite",
            "aria-label": "Conectado à internet",
          },
          h("span", { class: "dot", "aria-hidden": "true" }),
          h("span", { "data-role": "connection-label", text: "Online" })
        ),
        h(
          "span",
          { class: "topbar__badge", "data-role": "topbar-badge" },
          h("span", { class: "dot", "aria-hidden": "true" }),
          h("span", { text: "Estudo local" })
        ),
        h(
          "button",
          {
            class: "icon-btn sound-toggle",
            type: "button",
            "data-role": "sound-toggle",
            "data-state": "on",
            onclick: toggleSound,
          },
          icon("volume")
        ),
        h(
          "a",
          {
            class: "icon-btn",
            href: "#/config",
            "data-role": "settings-link",
            "aria-label": "Configurações",
            title: "Configurações",
          },
          icon("settings")
        )
      )
    )
  );

  const offlineBanner = h(
    "div",
    {
      class: "offline-banner",
      "data-role": "offline-banner",
      role: "status",
      "aria-live": "polite",
      hidden: true,
    },
    h(
      "div",
      { class: "offline-banner__inner" },
      icon("wifiOff"),
      h(
        "p",
        {},
        h("strong", { text: "Você está offline. " }),
        "Respostas e dados salvos continuam funcionando; materiais ainda não acessados podem não carregar."
      )
    )
  );
  const main = h("main", { class: "view", id: "main", tabindex: "-1" });
  const nav = h("nav", { class: "bottom-nav", "aria-label": "Navegação principal" });

  app.replaceChildren(h("div", { class: "app-shell" }, topbar, offlineBanner, main, nav));
}

function isOnline() {
  return typeof navigator === "undefined" || navigator.onLine !== false;
}

function updateConnectionStatus({ announce = false } = {}) {
  const online = isOnline();
  const status = document.querySelector('[data-role="connection-status"]');
  if (status) {
    status.dataset.state = online ? "online" : "offline";
    status.setAttribute("aria-label", online ? "Conectado à internet" : "Sem conexão com a internet");
    const label = status.querySelector('[data-role="connection-label"]');
    if (label) label.textContent = online ? "Online" : "Offline";
  }
  const banner = document.querySelector('[data-role="offline-banner"]');
  if (banner) banner.hidden = online;
  if (announce && online) {
    toast("Conexão restaurada. Seus dados continuam salvos neste dispositivo.", "success");
  }
}

function updateNav() {
  const nav = document.querySelector(".bottom-nav");
  if (!nav) return;
  const items = [
    { route: "inicio", label: "Início", icon: "home" },
    { route: "estudar", label: "Provas", icon: "book" },
    {
      route: "revisoes",
      label: "Revisões",
      icon: "clock",
      badge: state.reviewQueue?.counts?.overdue || 0,
    },
    { route: "progresso", label: "Progresso", icon: "chart" },
  ];
  if (state.session && !state.session.finishedAt) {
    items.push({ route: "sessao", label: "Sessão", icon: "play" });
  }
  nav.replaceChildren(
    ...items.map((item) =>
      h(
        "a",
        {
          class: "nav-item",
          href: `#/${item.route}`,
          "aria-current": state.route === item.route ? "page" : null,
          "aria-label": item.badge
            ? `${item.label} (${item.badge} vencidas)`
            : item.label,
        },
        icon(item.icon),
        h(
          "span",
          { class: "nav-item__label" },
          h("span", { text: item.label }),
          item.badge
            ? h("span", { class: "nav-item__badge", text: String(item.badge) })
            : null
        )
      )
    )
  );
}

function updateBadge() {
  const badge = document.querySelector('[data-role="topbar-badge"] span:last-child');
  if (!badge) return;
  if (state.manifest?.summary) {
    badge.textContent = `${state.manifest.summary.questions} questões`;
  } else {
    badge.textContent = "Estudo local";
  }
}

async function loadCatalog({ force = false, quiet = false } = {}) {
  state.loading = true;
  state.error = null;
  if (!quiet) render();
  try {
    const manifest = await loadManifest({ force });
    state.manifest = manifest;
    state.entries = manifest.files.filter((entry) => entry.valid && entry.questionCount > 0);
    if (state.entries.length === 0) {
      state.error = "Nenhum material válido foi encontrado no manifesto.";
    }
  } catch (error) {
    state.error = error.message;
  } finally {
    state.loading = false;
    if (!quiet) render();
  }
}

function warnStorageOnce(error) {
  if (state.storageWarned) return;
  state.storageWarned = true;
  console.warn("XLearn: falha de persistência local.", error);
  toast(
    "Não foi possível salvar no armazenamento local. O estudo continua, mas o progresso pode não persistir.",
    "error"
  );
}

async function persistSession(session) {
  try {
    await saveSession(session);
  } catch (error) {
    warnStorageOnce(error);
  }
}

/* Timer da prova ---------------------------------------------------------- */

function stopTimerTicker() {
  if (state.timerInterval !== null) {
    window.clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function syncTimerDisplay() {
  const session = state.session;
  const node = document.querySelector('[data-role="session-timer"]');
  if (!node || !session?.timer?.enabled) return;
  const timer = session.timer;
  const remaining = remainingTimerSeconds(timer);
  const expired = Boolean(timer.expiredAt);
  const paused = timer.paused && !expired;
  node.classList.toggle("is-warning", isTimerWarning(remaining));
  node.classList.toggle("is-paused", paused);
  node.classList.toggle("is-expired", expired);
  const clock = node.querySelector(".quiz-timer__clock");
  if (clock) clock.textContent = formatTimerClock(remaining);
  node.setAttribute("aria-label", formatTimerAria(remaining, { paused, expired }));
}

function tickTimer() {
  const session = state.session;
  if (!session || session.finishedAt || !session.timer?.enabled) {
    stopTimerTicker();
    return;
  }
  if (session.timer.expiredAt) {
    syncTimerDisplay();
    return;
  }
  if (session.timer.paused) {
    syncTimerDisplay();
    return;
  }
  syncTimerDisplay();
  if (isTimerExpired(session.timer)) handleTimerExpired();
}

function startTimerTicker() {
  stopTimerTicker();
  const session = state.session;
  if (!session || session.finishedAt || !session.timer?.enabled || session.timer.expiredAt) {
    return;
  }
  state.timerInterval = window.setInterval(tickTimer, 1000);
  tickTimer();
}

function ensureTimerTicker() {
  const session = state.session;
  if (!session || session.finishedAt || !session.timer?.enabled || session.timer.expiredAt) {
    stopTimerTicker();
    return;
  }
  if (state.timerInterval === null) startTimerTicker();
}

async function handleTimerExpired() {
  const session = state.session;
  if (!session || session.finishedAt || session.timer?.expiredAt) return;
  session.timer = expireTimer(session.timer);
  syncTimerDisplay();
  toast("O tempo da prova acabou. A sessão foi encerrada automaticamente.", "info");
  await finishSession({ expired: true });
}

function handleTimerVisibility() {
  const session = state.session;
  if (!session || session.finishedAt || !session.timer?.enabled || session.timer.expiredAt) return;
  if (document.hidden) {
    if (!session.timer.paused) {
      session.timer = pauseTimer(session.timer);
      session.updatedAt = new Date().toISOString();
      stopTimerTicker();
      syncTimerDisplay();
      persistSession(session);
    }
    return;
  }
  if (session.timer.paused) {
    session.timer = resumeTimer(session.timer);
    session.updatedAt = new Date().toISOString();
    persistSession(session);
  }
  startTimerTicker();
}

async function loadPersistedSettings() {
  try {
    const stored = await getSettingsRecord();
    if (stored && typeof stored === "object") setSettings(normalizeSettings(stored));
  } catch (error) {
    warnStorageOnce(error);
  }
}

async function refreshProgress() {
  try {
    const [progress, gamification, stats, recentAttempts, wallet] = await Promise.all([
      getProgressSummary(),
      getGamification(),
      getStats(),
      listAttempts(10),
      getWallet(),
    ]);
    state.progress = progress;
    state.gamification = gamification;
    state.stats = stats;
    state.recentAttempts = recentAttempts;
    state.wallet = wallet;
    state.reviewQueue = buildReviewQueue(state.progress.records || []);
  } catch (error) {
    warnStorageOnce(error);
    state.progress = { byPath: {}, byId: {}, byKey: {}, records: [] };
    state.gamification = createGamification();
    state.stats = { answered: 0, correct: 0, daily: {}, byMaterial: {} };
    state.recentAttempts = [];
    state.wallet = createWallet();
    state.reviewQueue = { groups: [], counts: { overdue: 0, upcoming: 0 } };
  }
  updateNav();
}

async function restoreActiveSession() {
  try {
    const active = await getActiveSession();
    if (!active || !Array.isArray(active.questionIds) || active.questionIds.length === 0) return;

    const entry =
      state.entries.find((item) => item.path === active.materialPath) ||
      state.entries.find((item) => item.materialId === active.materialId);
    if (!entry) return;

    const material = await loadMaterial(entry);
    const validIds = new Set(material.questions.map((question) => question.id));
    if (!active.questionIds.every((id) => validIds.has(id))) return;

    active.answers = active.answers && typeof active.answers === "object" ? active.answers : {};
    active.orders = active.orders && typeof active.orders === "object" ? active.orders : {};
    active.pending = null;
    if (!Number.isInteger(active.index) || active.index < 0) active.index = 0;
    active.timer = normalizeTimer(active.timer);
    if (active.timer.enabled && !active.timer.expiredAt && active.timer.paused && !document.hidden) {
      active.timer = resumeTimer(active.timer);
    }

    state.session = active;
    state.sessionMaterial = material;

    const answeredCount = Object.keys(active.answers).length;
    if (answeredCount >= active.questionIds.length && !active.finishedAt) {
      active.finishedAt = new Date().toISOString();
      active.updatedAt = active.finishedAt;
      await persistSession(active);
      try {
        await awardSessionCompletion(active);
      } catch (error) {
        warnStorageOnce(error);
      }
      if (currentRoute() === "sessao") navigate("resumo");
    }
  } catch (error) {
    warnStorageOnce(error);
  }
}

async function initialize() {
  await loadPersistedSettings();
  applyVisualSettings(getSettings());
  const colorScheme = window.matchMedia?.("(prefers-color-scheme: light)");
  colorScheme?.addEventListener?.("change", () => {
    if (getSettings().theme === "system") applyVisualSettings(getSettings());
  });
  await loadCatalog({ quiet: true });
  await restoreActiveSession();
  await refreshProgress();
  render();
}

function boot() {
  buildShell();
  installSoundUnlock();
  updateConnectionStatus();
  document.querySelector(".skip-link")?.addEventListener("click", (event) => {
    event.preventDefault();
    const main = document.getElementById("main");
    if (!main) return;
    main.focus({ preventScroll: true });
    main.scrollIntoView?.({ block: "start", behavior: "auto" });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (state.pendingReset) {
      event.preventDefault();
      cancelProgressReset();
    } else if (state.pendingImport) {
      event.preventDefault();
      cancelPendingImport();
    }
  });
  window.addEventListener("offline", () => updateConnectionStatus());
  window.addEventListener("online", () => updateConnectionStatus({ announce: true }));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateConnectionStatus();
    handleTimerVisibility();
  });
  state.route = currentRoute();
  window.addEventListener("hashchange", () => {
    state.route = currentRoute();
    render({ focus: true });
  });
  render();
  initialize();
}

/* Router ------------------------------------------------------------------ */

function render({ focus = false } = {}) {
  const main = document.getElementById("main");
  if (!main) return;
  state.route = currentRoute();

  let content;
  switch (state.route) {
    case "estudar":
      content = renderStudy();
      break;
    case "sessao":
      content = renderQuiz();
      break;
    case "resumo":
      content = renderSummary();
      break;
    case "revisoes":
      content = renderReviews();
      break;
    case "progresso":
      content = renderProgress();
      break;
    case "config":
      content = renderSettings();
      break;
    default:
      content = renderHome();
  }

  main.replaceChildren(...content);
  ensureTimerTicker();
  syncTimerDisplay();
  updateNav();
  updateBadge();
  updateSoundToggle();
  const settingsLink = document.querySelector('[data-role="settings-link"]');
  if (settingsLink) {
    if (state.route === "config") settingsLink.setAttribute("aria-current", "page");
    else settingsLink.removeAttribute("aria-current");
  }
  if (focus) {
    window.scrollTo({ top: 0, behavior: "auto" });
    const target =
      state.route === "sessao" ? document.getElementById("question-text") : null;
    (target || main).focus({ preventScroll: true });
  }
}

/* Home / study ------------------------------------------------------------ */

function renderHome() {
  if (state.loading) {
    return [
      h("div", { class: "skeleton skeleton--hero" }),
      h("div", { class: "skeleton skeleton--row" }),
      h("div", { class: "skeleton skeleton--row" }),
    ];
  }

  if (state.error) {
    return [
      h(
        "section",
        { class: "card" },
        h("h1", { text: "Não foi possível carregar as provas" }),
        h("p", { class: "prose", style: "margin-top:10px", text: state.error }),
        h(
          "div",
          { class: "hero__actions" },
          h(
            "button",
            { class: "btn btn--primary", type: "button", onclick: () => loadCatalog({ force: true }) },
            icon("sparkles"),
            "Tentar novamente"
          )
        )
      ),
      h(
        "div",
        { class: "notice notice--info" },
        h("strong", { text: "Dica: " }),
        "o manifesto é gerado a partir da pasta questoes/. Execute ",
        h("code", { text: "npm run build:manifest" }),
        " e recarregue a página."
      ),
    ];
  }

  const summary = state.manifest.summary;
  const settings = getSettings();
  const active = state.session && !state.session.finishedAt ? state.session : null;
  const answered = active ? Object.keys(active.answers).length : 0;

  return [
    h(
      "section",
      { class: "hero", "aria-labelledby": "hero-title" },
      h("span", { class: "eyebrow" }, icon("sparkles"), "Seu painel de estudos"),
      h("h1", { id: "hero-title", text: "Aprenda praticando, no seu ritmo." }),
      h("p", {
        class: "lead",
        text: "Questões reais dos seus materiais, alternativas embaralhadas e explicações completas. Tudo salvo no seu dispositivo.",
      }),
      h(
        "div",
        { class: "hero__actions" },
        h(
          "a",
          { class: "btn btn--primary", href: "#/estudar" },
          icon("play"),
          "Escolher prova"
        ),
        active
          ? h(
              "a",
              { class: "btn btn--ghost", href: "#/sessao" },
              icon("arrowRight"),
              "Continuar sessão"
            )
          : null
      ),
      h(
        "div",
        { class: "hero__stats", "aria-label": "Resumo do acervo" },
        h("div", { class: "stat-mini" }, h("strong", { text: String(summary.materials) }), h("span", { text: "provas" })),
        h("div", { class: "stat-mini" }, h("strong", { text: String(summary.questions) }), h("span", { text: "questões" })),
        h("div", { class: "stat-mini" }, h("strong", { text: String(settings.sessionSize) }), h("span", { text: "por sessão" }))
      )
    ),

    renderLevelCard(),
    renderCharacterCard(),
    renderAchievementsCard(),
    renderHabitCard(),

    active
      ? h(
          "section",
          { class: "session-banner", "aria-label": "Sessão em andamento" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", { text: "Sessão em andamento" }),
            h("span", {
              text: `${active.materialTitle} · ${answered} de ${active.questionIds.length} respondidas`,
            })
          ),
          h(
            "a",
            { class: "btn btn--primary btn--sm", href: "#/sessao" },
            "Continuar",
            icon("arrowRight")
          )
        )
      : null,

    state.reviewQueue?.counts?.overdue > 0
      ? h(
          "section",
          { class: "session-banner session-banner--review", "aria-label": "Revisões vencidas" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", {
              text: `${plural(state.reviewQueue.counts.overdue, "revisão vencida", "revisões vencidas")}`,
            }),
            h("span", {
              text: `${plural(state.reviewQueue.counts.upcoming, "revisão futura", "revisões futuras")} na fila. Priorize o que já está atrasado.`,
            })
          ),
          h(
            "a",
            { class: "btn btn--primary btn--sm", href: "#/revisoes" },
            icon("clock"),
            "Revisar"
          )
        )
      : null,

    h(
      "section",
      { id: "provas", "aria-labelledby": "provas-title" },
      h(
        "div",
        { class: "section-head" },
        h("div", {}, h("h2", { id: "provas-title", text: "Escolha uma prova" }), h("p", { text: "Conteúdo carregado do manifesto de questões." })),
        h("span", { class: "chip chip--neutral", text: `${summary.validMaterials} válidas` })
      ),
      renderMaterialGrid()
    ),

    state.manifest.summary.invalidMaterials > 0
      ? h(
          "div",
          { class: "notice notice--warning", role: "status" },
          h("strong", { text: "Atenção: " }),
          `${summary.invalidMaterials} material(is) do manifesto foram ignorados por erro de formato.`
        )
      : null,

    h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Como funciona: " }),
      "a ordem das alternativas é sorteada em cada sessão, mas as letras A–D permanecem as originais do gabarito. A correção usa o identificador da alternativa, nunca a posição na tela."
    ),
  ];
}

function renderLevelCard() {
  const gamification = state.gamification || createGamification();
  const level = levelFromXp(gamification.xp);
  const accuracy =
    gamification.answered > 0
      ? Math.round((gamification.correct / gamification.answered) * 100)
      : 0;
  const percent = Math.round(level.progress * 100);

  return h(
    "section",
    { class: "card level-card", "aria-labelledby": "level-title" },
    h(
      "div",
      { class: "level-card__head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("sparkles"), "Seu progresso"),
        h("h2", { id: "level-title", text: `Nível ${level.level} · ${level.title}` }),
        h("p", { class: "small muted", text: `${gamification.xp} XP acumulados` })
      ),
      h("span", { class: "level-card__badge", text: String(level.level), "aria-label": `Nível ${level.level}` })
    ),
    h(
      "div",
      {
        class: "progress",
        role: "progressbar",
        "aria-label": "Progresso para o próximo nível",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": String(percent),
      },
      h("span", { class: "progress__bar", style: `width:${percent}%` })
    ),
    h("p", {
      class: "hint",
      text: `Faltam ${level.xpToNext} XP para o nível ${level.level + 1}.`,
    }),
    h(
      "div",
      { class: "level-card__stats" },
      h("div", {}, h("strong", { text: String(gamification.answered) }), h("span", { text: "respondidas" })),
      h("div", {}, h("strong", { text: `${accuracy}%` }), h("span", { text: "precisão" })),
      h("div", {}, h("strong", { text: String(gamification.sessionsCompleted) }), h("span", { text: "sessões" }))
    )
  );
}

function renderCharacterCard() {
  const wallet = state.wallet || createWallet();
  const character = characterFromCoins(wallet.earned);
  const percent = Math.round(character.progress * 100);
  const stage = character.stage;

  return h(
    "section",
    { class: "card character-card", "aria-labelledby": "character-title" },
    h(
      "div",
      { class: "character-card__art" },
      h("img", {
        src: new URL(`../${stage.image}`, import.meta.url).href,
        alt: `Ilustração do personagem ${stage.name}`,
        width: "160",
        height: "160",
        loading: "lazy",
        decoding: "async",
      })
    ),
    h(
      "div",
      { class: "character-card__body" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("sparkles"), "Personagem & moedas"),
          h("h2", { id: "character-title", text: stage.name })
        ),
        h(
          "span",
          { class: "chip chip--coin", "aria-label": `${wallet.balance} moedas disponíveis` },
          icon("coin"),
          h("span", { text: `${wallet.balance} moedas` })
        )
      ),
      h("p", { class: "small muted", text: stage.description }),
      h(
        "div",
        { class: "character-card__meta" },
        h("span", {
          class: "chip chip--neutral",
          text: `Estágio ${character.stageNumber} de ${character.totalStages}`,
        }),
        h("span", {
          class: "chip chip--neutral",
          text: `${wallet.earned} moedas acumuladas`,
        })
      ),
      h(
        "div",
        {
          class: "progress character-card__progress",
          role: "progressbar",
          "aria-label": "Evolução do personagem",
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-valuenow": String(percent),
          "aria-valuetext": character.nextStage
            ? `${stage.name}: ${percent}% para ${character.nextStage.name}`
            : `${stage.name}: estágio máximo`,
        },
        h("span", { class: "progress__bar", style: `width:${percent}%` })
      ),
      h("p", {
        class: "hint",
        text: character.nextStage
          ? `Faltam ${plural(character.coinsToNext, "moeda", "moedas")} para evoluir para ${character.nextStage.name}.`
          : "Estágio máximo alcançado. Continue estudando para manter o ritmo!",
      }),
      h("p", {
        class: "hint",
        text: `Ganhe ${COIN_RULES.correctAnswer} moedas por acerto, ${COIN_RULES.sessionBase} ao concluir uma sessão e ${COIN_RULES.dailyGoal} ao bater a meta diária.`,
      })
    )
  );
}

function renderAchievementsCard() {
  const all = listAchievements(state.gamification);
  const unlocked = all
    .filter((achievement) => achievement.unlockedAt)
    .sort((a, b) => String(b.unlockedAt).localeCompare(String(a.unlockedAt)));
  const visible = unlocked.length > 0 ? unlocked.slice(0, 3) : all.slice(0, 3);

  return h(
    "section",
    { class: "card achievements-card", "aria-labelledby": "achievements-title" },
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("award"), "Conquistas"),
        h("h2", { id: "achievements-title", text: `${unlocked.length} de ${all.length} desbloqueadas` })
      ),
      unlocked.length > 0
        ? h("span", { class: "chip chip--success", text: `+${unlocked.reduce((sum, item) => sum + item.xp, 0)} XP` })
        : h("span", { class: "chip chip--neutral", text: "comece agora" })
    ),
    h(
      "div",
      { class: "achievement-mini-grid" },
      ...visible.map((achievement) =>
        h(
          "article",
          { class: `achievement-mini${achievement.unlockedAt ? "" : " is-locked"}` },
          h(
            "span",
            { class: "achievement-mini__icon", "aria-hidden": "true" },
            icon(achievement.unlockedAt ? achievement.icon : "lock")
          ),
          h(
            "div",
            {},
            h("strong", { text: achievement.title }),
            h("span", { text: achievement.description }),
            h("small", {
              text: achievement.unlockedAt
                ? `Desbloqueada em ${formatDateTime(achievement.unlockedAt)}`
                : `Recompensa: ${achievement.xp} XP`,
            })
          )
        )
      )
    ),
    unlocked.length === 0
      ? h("p", { class: "hint", text: "Responda questões para desbloquear as primeiras conquistas." })
      : null
  );
}

function renderHabitCard() {
  const settings = getSettings();
  const goal = dailyProgress(state.stats, settings.dailyGoal);
  const streak = computeStreak(state.stats?.daily || {});
  const best = Math.max(streak.best, state.gamification?.bestStreak || 0);

  return h(
    "section",
    { class: "card habit-card", "aria-labelledby": "habit-title" },
    h(
      "div",
      { class: "habit-card__head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("flame"), "Ritmo diário"),
        h("h2", { id: "habit-title", text: `Meta: ${plural(goal.target, "questão hoje", "questões hoje")}` }),
        h("p", {
          class: "small muted",
          text: goal.reached
            ? "Meta de hoje concluída. Continue se quiser, o XP continua contando."
            : `Faltam ${plural(goal.remaining, "questão", "questões")} para bater a meta.`,
        })
      ),
      h("span", {
        class: `chip ${goal.reached ? "chip--success" : "chip--neutral"}`,
        text: `${goal.answered}/${goal.target}`,
      })
    ),
    h(
      "div",
      {
        class: "progress",
        role: "progressbar",
        "aria-label": "Progresso da meta diária",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": String(goal.percent),
      },
      h("span", { class: "progress__bar", style: `width:${goal.percent}%` })
    ),
    h(
      "div",
      { class: "habit-card__stats" },
      h(
        "div",
        {},
        h("strong", { text: `${streak.current} ${streak.current === 1 ? "dia" : "dias"}` }),
        h("span", { text: "sequência atual" })
      ),
      h(
        "div",
        {},
        h("strong", { text: `${best} ${best === 1 ? "dia" : "dias"}` }),
        h("span", { text: "recorde" })
      ),
      h(
        "div",
        {},
        h("strong", {
          text: streak.studiedToday ? "sim" : "ainda não",
        }),
        h("span", { text: "estudou hoje" })
      )
    )
  );
}

function renderStudy() {
  if (state.loading) return [h("div", { class: "skeleton skeleton--row" }), h("div", { class: "skeleton skeleton--row" })];
  if (state.error) return renderHome();
  return [
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("book"), "Acervo"),
        h("h1", { text: "Provas disponíveis" }),
        h("p", { text: `${plural(state.manifest.summary.materials, "material", "materiais")} · ${plural(state.manifest.summary.questions, "questão", "questões")}` })
      ),
      h(
        "button",
        { class: "icon-btn", type: "button", title: "Recarregar manifesto", "aria-label": "Recarregar manifesto", onclick: () => loadCatalog({ force: true }) },
        icon("sparkles")
      )
    ),
    ...renderMaterialGrid(),
  ];
}

function renderReviews() {
  const queue = state.reviewQueue || { groups: [], counts: { overdue: 0, upcoming: 0 } };
  const totalTracked = queue.counts.overdue + queue.counts.upcoming;

  const header = h(
    "div",
    { class: "section-head" },
    h(
      "div",
      {},
      h("span", { class: "eyebrow" }, icon("clock"), "Repetição espaçada"),
      h("h1", { text: "Fila de revisões" }),
      h("p", {
        text: "Questões vencidas aparecem primeiro. Revisar no momento certo ajuda a consolidar o conteúdo.",
      })
    ),
    h(
      "button",
      {
        class: "icon-btn",
        type: "button",
        title: "Atualizar fila",
        "aria-label": "Atualizar fila de revisões",
        onclick: async () => {
          await refreshProgress();
          render({ focus: true });
        },
      },
      icon("sparkles")
    )
  );

  if (totalTracked === 0) {
    return [
      header,
      h(
        "div",
        { class: "empty card" },
        h("h2", { text: "Nenhuma revisão agendada" }),
        h("p", {
          text: "Responda algumas questões para que o XLearn comece a programar revisões automáticas.",
        }),
        h(
          "div",
          { class: "hero__actions", style: "justify-content:center" },
          h("a", { class: "btn btn--primary", href: "#/estudar" }, icon("play"), "Estudar agora")
        )
      ),
      h(
        "div",
        { class: "notice notice--info" },
        h("strong", { text: "Como funciona: " }),
        "acertos avançam o intervalo (1, 3, 7, 14 e 30 dias) e erros programam uma revisão curta de 10 minutos. Os intervalos são configuráveis e o algoritmo não é apresentado como cientificamente validado."
      ),
    ];
  }

  const groups = queue.groups.map((group) => {
    const entry =
      state.entries.find((item) => item.path === group.materialPath) ||
      state.entries.find((item) => item.materialId === group.materialId) ||
      null;
    const limit = getSettings().sessionSize;
    const available = [...group.overdue, ...group.upcoming];
    const chosen = available.slice(0, Math.max(1, limit));
    const overdueLabel = plural(group.overdue.length, "vencida", "vencidas");
    const dueItems = [...group.overdue, ...group.upcoming].slice(0, 4);

    return h(
      "article",
      { class: "card review-card" },
      h(
        "div",
        { class: "review-card__head" },
        h(
          "div",
          {},
          h(
            "div",
            { class: "chip-row" },
            h("span", { class: "chip", text: group.subject || "Geral" }),
            group.overdue.length > 0
              ? h("span", { class: "chip chip--danger", text: overdueLabel })
              : h("span", { class: "chip chip--success", text: "em dia" })
          ),
          h("h2", { style: "margin-top:10px", text: group.materialTitle }),
          h("p", {
            class: "small muted",
            text:
              group.overdue.length > 0
                ? `${group.overdue.length} para revisar agora · próxima em ${formatDueLabel(group.nextDueAt)}`
                : `Próxima revisão ${formatDueLabel(group.nextDueAt)}`,
          })
        )
      ),
      h(
        "ul",
        { class: "review-list" },
        ...dueItems.map((item) => {
          const isOverdue = group.overdue.includes(item);
          return h(
            "li",
            { class: `review-item${isOverdue ? " is-overdue" : ""}` },
            h("span", { class: "review-item__dot", "aria-hidden": "true" }),
            h(
              "span",
              { class: "review-item__text" },
              h("strong", { text: item.topic || "Questão sem assunto" }),
              h("span", {
                text: `${isOverdue ? "Vencida" : "Agendada"} ${formatDueLabel(item.dueAt)} · nível ${item.srsLevel}/5`,
              })
            )
          );
        }),
        available.length > dueItems.length
          ? h("li", { class: "review-item review-item--more" }, `+${available.length - dueItems.length} outra(s) questão(ões)`)
          : null
      ),
      h(
        "div",
        { class: "review-card__footer" },
        h(
          "span",
          { class: "hint" },
          `Sessão de até ${chosen.length} ${chosen.length === 1 ? "questão" : "questões"}${group.overdue.length > chosen.length ? " · priorizando atrasadas" : ""}`
        ),
        h(
          "button",
          {
            class: "btn btn--primary btn--sm",
            type: "button",
            disabled: !entry,
            onclick: () => startReview(group, chosen),
          },
          icon("play"),
          group.overdue.length > 0 ? "Revisar vencidas" : "Revisar agora"
        )
      )
    );
  });

  return [
    header,
    h(
      "div",
      { class: "summary-stats" },
      h("div", { class: "summary-stat" }, h("strong", { text: String(queue.counts.overdue) }), h("span", { text: "vencidas" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(queue.counts.upcoming) }), h("span", { text: "futuras" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(queue.groups.length) }), h("span", { text: "provas" }))
    ),
    ...groups,
    h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Sobre o agendamento: " }),
      "os intervalos automáticos são 1, 3, 7, 14 e 30 dias após acertos consecutivos. Um erro reduz o nível e agenda nova revisão em 10 minutos. Após acertar, você pode escolher outro intervalo no feedback da questão."
    ),
  ];
}

function previewSound(form, name) {
  if (!form.elements.soundEnabled.checked) {
    toast("Ative os sons para ouvir os exemplos.", "info");
    return;
  }
  unlockAudio();
  const volume = Number(form.elements.soundVolume.value) / 100;
  playSound(name, {
    settings: { ...getSettings(), soundEnabled: true, soundVolume: Number.isFinite(volume) ? volume : 0.6 },
  });
}

function renderSettings() {
  const settings = getSettings();
  const form = h(
    "form",
    { class: "settings-form", id: "settings-form", autocomplete: "off" },
    h(
      "section",
      { class: "card", "aria-labelledby": "study-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("play"), "Sessão de estudo"),
          h("h2", { id: "study-settings-title", text: "Como você estuda" })
        ),
        h("span", { class: "chip chip--neutral", text: "vale para a próxima sessão" })
      ),
      h(
        "div",
        { class: "field-grid" },
        h(
          "label",
          { class: "field" },
          h("span", { text: "Questões por sessão" }),
          h("input", {
            type: "number",
            name: "sessionSize",
            min: "1",
            max: "100",
            step: "1",
            inputmode: "numeric",
            value: String(settings.sessionSize),
            required: true,
          }),
          h("small", { text: "Entre 1 e 100 questões." })
        ),
        h(
          "label",
          { class: "field" },
          h("span", { text: "Meta diária" }),
          h("input", {
            type: "number",
            name: "dailyGoal",
            min: "1",
            max: "500",
            step: "1",
            inputmode: "numeric",
            value: String(settings.dailyGoal),
            required: true,
          }),
          h("small", { text: "Quantidade de questões para concluir o dia." })
        ),
        h(
          "label",
          { class: "field" },
          h("span", { text: "Ordem das questões" }),
          h(
            "select",
            { name: "questionOrder" },
            h("option", {
              value: "shuffle",
              selected: settings.questionOrder === "shuffle",
              text: "Aleatória (recomendada)",
            }),
            h("option", {
              value: "sequential",
              selected: settings.questionOrder === "sequential",
              text: "Sequencial, como no material",
            })
          ),
          h("small", { text: "As alternativas continuam sempre embaralhadas." })
        )
      )
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "timer-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("clock"), "Cronômetro"),
          h("h2", { id: "timer-settings-title", text: "Tempo de prova" })
        ),
        h("span", {
          class: `chip ${settings.timerEnabled ? "chip--success" : "chip--neutral"}`,
          text: settings.timerEnabled ? "ativado" : "desativado",
        })
      ),
      h(
        "label",
        { class: "check-field" },
        h("input", { type: "checkbox", name: "timerEnabled", checked: settings.timerEnabled }),
        h(
          "span",
          {},
          h("strong", { text: "Ativar contagem regressiva" }),
          h("small", {
            text: "Vale para as próximas provas. Revisões e correções não usam cronômetro. Ao esconder a aba, o tempo é pausado e retomado ao voltar.",
          })
        )
      ),
      h(
        "label",
        { class: "field" },
        h("span", { text: "Duração da prova" }),
        h("input", {
          type: "number",
          name: "timerMinutes",
          min: String(TIMER_MIN_MINUTES),
          max: String(TIMER_MAX_MINUTES),
          step: "1",
          inputmode: "numeric",
          value: String(settings.timerMinutes),
          required: true,
        }),
        h("small", { text: `Entre ${TIMER_MIN_MINUTES} e ${TIMER_MAX_MINUTES} minutos. Ao chegar a zero, a sessão é encerrada e as questões sem resposta são marcadas.` })
      )
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "srs-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("clock"), "Repetição espaçada"),
          h("h2", { id: "srs-settings-title", text: "Quando revisar" })
        ),
        h("span", {
          class: `chip ${settings.srsEnabled ? "chip--success" : "chip--neutral"}`,
          text: settings.srsEnabled ? "ativa" : "desativada",
        })
      ),
      h(
        "label",
        { class: "check-field" },
        h("input", { type: "checkbox", name: "srsEnabled", checked: settings.srsEnabled }),
        h(
          "span",
          {},
          h("strong", { text: "Ativar revisões automáticas" }),
          h("small", {
            text: "Um erro agenda nova revisão em 10 minutos. Acertos seguem os intervalos abaixo.",
          })
        )
      ),
      h(
        "fieldset",
        { class: "fieldset" },
        h("legend", { text: "Intervalos após cada acerto (em dias)" }),
        h(
          "div",
          { class: "interval-grid" },
          ...settings.srsIntervals.map((days, index) =>
            h(
              "label",
              { class: "field field--compact" },
              h("span", { text: `${index + 1}º acerto` }),
              h("input", {
                type: "number",
                name: `srsInterval${index + 1}`,
                min: "1",
                max: "365",
                step: "1",
                inputmode: "numeric",
                value: String(days),
                required: true,
              })
            )
          )
        ),
        h("p", { class: "hint", text: "Os cinco valores devem ser dias inteiros e crescentes, até 365." })
      )
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "appearance-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("sparkles"), "Aparência"),
          h("h2", { id: "appearance-settings-title", text: "Tema e leitura" })
        ),
        h("span", { class: "chip chip--neutral", text: "aplicado ao salvar" })
      ),
      h(
        "div",
        { class: "field-grid" },
        h(
          "label",
          { class: "field" },
          h("span", { text: "Tema" }),
          h(
            "select",
            { name: "theme" },
            h("option", { value: "system", selected: settings.theme === "system", text: "Seguir o sistema" }),
            h("option", { value: "dark", selected: settings.theme === "dark", text: "Escuro" }),
            h("option", { value: "light", selected: settings.theme === "light", text: "Claro" })
          ),
          h("small", { text: "O tema do sistema acompanha a preferência do dispositivo." })
        ),
        h(
          "label",
          { class: "field" },
          h("span", { text: "Tamanho do texto" }),
          h("input", {
            type: "range",
            name: "fontSize",
            min: "14",
            max: "22",
            step: "1",
            value: String(settings.fontSize),
            "data-role": "font-size-range",
          }),
          h(
            "small",
            {},
            "De 14 a 22 px. Atual: ",
            h("output", { "data-role": "font-size-value", text: `${settings.fontSize} px` }),
            "."
          )
        )
      ),
      h(
        "label",
        { class: "check-field" },
        h("input", { type: "checkbox", name: "animations", checked: settings.animations }),
        h(
          "span",
          {},
          h("strong", { text: "Animações e transições" }),
          h("small", { text: "Desative para uma interface mais estática; o respeito à preferência do sistema continua ativo." })
        )
      )
    ),

    h(
      "section",
      { class: "card sound-settings-card", "aria-labelledby": "sound-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("volume"), "Som e ludicidade"),
          h("h2", { id: "sound-settings-title", text: "Efeitos sonoros" })
        ),
        h("span", {
          class: `chip ${settings.soundEnabled ? "chip--success" : "chip--neutral"}`,
          text: settings.soundEnabled ? "ligado" : "desligado",
        })
      ),
      h(
        "label",
        { class: "check-field" },
        h("input", { type: "checkbox", name: "soundEnabled", checked: settings.soundEnabled }),
        h(
          "span",
          {},
          h("strong", { text: "Sons animados" }),
          h("small", {
            text: "Acerto, erro, início e fim de prova, conquistas e moedas. Sem arquivos externos: o som é gerado pelo navegador.",
          })
        )
      ),
      h(
        "label",
        { class: "field" },
        h("span", { text: "Volume dos efeitos" }),
        h("input", {
          type: "range",
          name: "soundVolume",
          min: "0",
          max: "100",
          step: "5",
          value: String(Math.round(settings.soundVolume * 100)),
          "data-role": "sound-volume-range",
        }),
        h(
          "small",
          {},
          "De 0 a 100%. Atual: ",
          h("output", {
            "data-role": "sound-volume-value",
            text: `${Math.round(settings.soundVolume * 100)}%`,
          }),
          "."
        )
      ),
      h(
        "div",
        { class: "data-actions sound-previews", role: "group", "aria-label": "Ouvir exemplos de sons" },
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            "data-sound-preview": "correct",
            onclick: () => previewSound(form, "correct"),
          },
          icon("check"),
          "Acerto"
        ),
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            "data-sound-preview": "wrong",
            onclick: () => previewSound(form, "wrong"),
          },
          icon("x"),
          "Erro"
        ),
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            "data-sound-preview": "achievement",
            onclick: () => previewSound(form, "achievement"),
          },
          icon("award"),
          "Conquista"
        ),
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            "data-sound-preview": "coin",
            onclick: () => previewSound(form, "coin"),
          },
          icon("coin"),
          "Moeda"
        )
      ),
      h("p", {
        class: "hint",
        text: "O primeiro toque na página libera o áudio no navegador. O botão de alto-falante no topo alterna os sons rapidamente.",
      })
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "data-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("layers"), "Dados"),
          h("h2", { id: "data-settings-title", text: "Backup e restauração" })
        ),
        h("span", { class: "chip chip--neutral", text: "JSON versionado" })
      ),
      h("p", {
        class: "hint",
        text: "O backup inclui configurações, estatísticas, XP, conquistas, moedas, personagem, progresso das questões, sessões e tentativas deste dispositivo.",
      }),
      h(
        "div",
        { class: "data-actions" },
        h(
          "button",
          { class: "btn btn--ghost", type: "button", "data-role": "export-button", onclick: exportCurrentData },
          icon("download"),
          "Exportar backup"
        ),
        h(
          "button",
          {
            class: "btn btn--ghost",
            type: "button",
            "data-role": "import-button",
            onclick: () => form.querySelector('[data-role="import-file"]')?.click(),
          },
          icon("upload"),
          "Importar backup"
        ),
        h("input", {
          type: "file",
          accept: ".json,application/json",
          hidden: true,
          "data-role": "import-file",
          onchange: handleBackupFileChange,
        })
      ),
      h("p", { class: "hint", text: "A importação substitui todos os dados atuais depois da confirmação. Arquivos inválidos são rejeitados sem alterar nada." }),
      state.pendingImport
        ? h(
            "div",
            { class: "import-confirm", role: "region", "aria-labelledby": "import-confirm-title" },
            h("h3", {
              id: "import-confirm-title",
              tabindex: "-1",
              "aria-describedby": "import-confirm-desc",
              text: "Confirmar restauração",
            }),
            h("p", {
              id: "import-confirm-desc",
              text: `Arquivo: ${state.pendingImport.fileName}. O backup substituirá os dados atuais deste dispositivo.`,
            }),
            h(
              "ul",
              { class: "import-summary" },
              h("li", { text: plural(state.pendingImport.summary.attempts, "tentativa registrada", "tentativas registradas") }),
              h("li", { text: plural(state.pendingImport.summary.sessions, "sessão salva", "sessões salvas") }),
              h("li", {
                text: plural(state.pendingImport.summary.progress, "questão com progresso", "questões com progresso"),
              }),
              h("li", {
                text: `${state.pendingImport.summary.hasSettings ? "Configurações incluídas" : "Sem configurações"} · ${
                  state.pendingImport.summary.hasGamification ? "gamificação incluída" : "sem gamificação"
                } · ${state.pendingImport.summary.hasWallet ? "moedas incluídas" : "sem moedas"}`,
              })
            ),
            h(
              "div",
              { class: "settings-actions" },
              h(
                "button",
                { class: "btn btn--primary", type: "button", "data-role": "confirm-import", onclick: confirmPendingImport },
                icon("upload"),
                "Substituir dados"
              ),
              h(
                "button",
                {
                  class: "btn btn--ghost",
                  type: "button",
                  "data-role": "cancel-import",
                  onclick: cancelPendingImport,
                },
                "Cancelar"
              )
            )
          )
        : null
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "storage-settings-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("lock"), "Armazenamento local"),
          h("h2", { id: "storage-settings-title", text: "Cache e progresso" })
        ),
        h("span", { class: "chip chip--neutral", text: "somente este dispositivo" })
      ),
      h("p", {
        class: "hint",
        text: "As duas ações abaixo são independentes: limpar o cache não apaga respostas, e apagar o progresso não altera suas configurações de estudo e aparência.",
      }),
      h(
        "div",
        { class: "data-actions" },
        h(
          "button",
          { class: "btn btn--ghost", type: "button", "data-role": "clear-cache", onclick: clearCache },
          icon("layers"),
          "Limpar cache do app"
        ),
        h(
          "button",
          {
            class: "btn btn--danger",
            type: "button",
            "data-role": "reset-progress",
            onclick: requestProgressReset,
          },
          icon("trash"),
          "Apagar progresso"
        )
      ),
      h("p", {
        class: "hint",
        text: "Limpar o cache remove apenas arquivos baixados (HTML, CSS, JS e questões). Seu progresso, XP, moedas e histórico continuam salvos no navegador.",
      }),
      state.pendingReset
        ? h(
            "div",
            {
              class: "import-confirm import-confirm--danger",
              role: "region",
              "aria-labelledby": "reset-confirm-title",
            },
            h("h3", {
              id: "reset-confirm-title",
              tabindex: "-1",
              "aria-describedby": "reset-confirm-desc reset-confirm-hint",
              text: "Apagar todo o progresso?",
            }),
            h("p", {
              id: "reset-confirm-desc",
              text: "Serão apagados respostas, sessões, tentativas, XP, níveis, conquistas, moedas, evolução do personagem, meta diária e sequência. Esta ação não pode ser desfeita.",
            }),
            h("p", {
              id: "reset-confirm-hint",
              class: "hint",
              text: "Configurações de estudo e aparência são mantidas. Se quiser guardar o histórico, exporte um backup antes de continuar.",
            }),
            h(
              "div",
              { class: "settings-actions" },
              h(
                "button",
                {
                  class: "btn btn--danger",
                  type: "button",
                  "data-role": "confirm-reset",
                  onclick: confirmProgressReset,
                },
                icon("trash"),
                "Apagar definitivamente"
              ),
              h(
                "button",
                {
                  class: "btn btn--ghost",
                  type: "button",
                  "data-role": "cancel-reset",
                  onclick: cancelProgressReset,
                },
                "Cancelar"
              )
            )
          )
        : null
    ),

    h(
      "div",
      { class: "settings-actions" },
      h("button", { class: "btn btn--primary", type: "submit" }, icon("check"), "Salvar configurações"),
      h("a", { class: "btn btn--ghost", href: "#/inicio" }, "Voltar ao início")
    )
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    await saveSettingsFromForm(form);
  });
  form.elements.fontSize?.addEventListener("input", () => {
    const output = form.querySelector('[data-role="font-size-value"]');
    if (output) output.textContent = `${form.elements.fontSize.value} px`;
  });
  form.elements.soundVolume?.addEventListener("input", () => {
    const output = form.querySelector('[data-role="sound-volume-value"]');
    if (output) output.textContent = `${form.elements.soundVolume.value}%`;
  });

  return [
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("settings"), "Configurações"),
        h("h1", { text: "Ajustes de estudo" }),
        h("p", {
          text: "As mudanças são salvas neste dispositivo e passam a valer nas próximas sessões e respostas.",
        })
      ),
      h("span", { class: "chip chip--neutral", text: "100% local" })
    ),
    form,
    h(
      "p",
      { class: "hint" },
      "A meta diária e os intervalos alteram o cálculo de XP, conquistas e revisões. O histórico já registrado não é reescrito."
    ),
  ];
}

function readSettingsForm(form) {
  const fields = form.elements;
  const sessionSize = Number(fields.sessionSize.value);
  const dailyGoal = Number(fields.dailyGoal.value);
  const questionOrder = fields.questionOrder.value === "sequential" ? "sequential" : "shuffle";
  const srsEnabled = Boolean(fields.srsEnabled.checked);
  const srsIntervals = [1, 2, 3, 4, 5].map((index) => Number(fields[`srsInterval${index}`].value));
  const timerEnabled = Boolean(fields.timerEnabled.checked);
  const timerMinutes = Number(fields.timerMinutes.value);
  const fontSize = Number(fields.fontSize.value);
  const theme = ["dark", "light", "system"].includes(fields.theme.value) ? fields.theme.value : "system";
  const animations = Boolean(fields.animations.checked);
  const soundEnabled = Boolean(fields.soundEnabled.checked);
  const soundVolumePercent = Number(fields.soundVolume.value);

  if (!Number.isInteger(sessionSize) || sessionSize < 1 || sessionSize > 100) {
    throw new Error("O tamanho da sessão deve ser um número inteiro entre 1 e 100.");
  }
  if (!Number.isInteger(dailyGoal) || dailyGoal < 1 || dailyGoal > 500) {
    throw new Error("A meta diária deve ser um número inteiro entre 1 e 500.");
  }
  for (const days of srsIntervals) {
    if (!Number.isInteger(days) || days < 1 || days > 365) {
      throw new Error("Cada intervalo deve ser um número inteiro de dias entre 1 e 365.");
    }
  }
  for (let index = 1; index < srsIntervals.length; index += 1) {
    if (srsIntervals[index] <= srsIntervals[index - 1]) {
      throw new Error("Os intervalos de revisão devem ser crescentes.");
    }
  }
  if (!Number.isInteger(fontSize) || fontSize < 14 || fontSize > 22) {
    throw new Error("O tamanho do texto deve ser um número inteiro entre 14 e 22 px.");
  }
  if (!Number.isInteger(timerMinutes) || timerMinutes < TIMER_MIN_MINUTES || timerMinutes > TIMER_MAX_MINUTES) {
    throw new Error(`A duração da prova deve ser um número inteiro entre ${TIMER_MIN_MINUTES} e ${TIMER_MAX_MINUTES} minutos.`);
  }
  if (!Number.isInteger(soundVolumePercent) || soundVolumePercent < 0 || soundVolumePercent > 100) {
    throw new Error("O volume dos efeitos deve estar entre 0 e 100%.");
  }

  return {
    sessionSize,
    dailyGoal,
    questionOrder,
    srsEnabled,
    srsIntervals,
    timerEnabled,
    timerMinutes,
    fontSize,
    theme,
    animations,
    soundEnabled,
    soundVolume: soundVolumePercent / 100,
  };
}

async function saveSettingsFromForm(form) {
  let patch;
  try {
    patch = readSettingsForm(form);
  } catch (error) {
    toast(error.message, "error");
    return;
  }
  const next = normalizeSettings({ ...getSettings(), ...patch });
  setSettings(next);
  applyVisualSettings(next);
  updateSoundToggle();
  try {
    await saveSettingsRecord(next);
    toast("Configurações salvas neste dispositivo.", "success");
  } catch (error) {
    warnStorageOnce(error);
  }
  syncSettingsForm(form, next);
}

function syncSettingsForm(form, settings) {
  form.elements.sessionSize.value = String(settings.sessionSize);
  form.elements.dailyGoal.value = String(settings.dailyGoal);
  form.elements.questionOrder.value = settings.questionOrder;
  form.elements.srsEnabled.checked = settings.srsEnabled;
  form.elements.timerEnabled.checked = settings.timerEnabled;
  form.elements.timerMinutes.value = String(settings.timerMinutes);
  form.elements.theme.value = settings.theme;
  form.elements.fontSize.value = String(settings.fontSize);
  const fontSizeValue = form.querySelector('[data-role="font-size-value"]');
  if (fontSizeValue) fontSizeValue.textContent = `${settings.fontSize} px`;
  form.elements.animations.checked = settings.animations;
  form.elements.soundEnabled.checked = settings.soundEnabled;
  form.elements.soundVolume.value = String(Math.round(settings.soundVolume * 100));
  const soundVolumeValue = form.querySelector('[data-role="sound-volume-value"]');
  if (soundVolumeValue) {
    soundVolumeValue.textContent = `${Math.round(settings.soundVolume * 100)}%`;
  }
  settings.srsIntervals.forEach((days, index) => {
    const field = form.elements[`srsInterval${index + 1}`];
    if (field) field.value = String(days);
  });
}

async function exportCurrentData() {
  try {
    const data = await exportDatabase();
    const backup = createBackup(data);
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = h("a", {
      href: url,
      download: `xlearn-backup-${new Date().toISOString().slice(0, 10)}.json`,
    });
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast(
      `Backup gerado: ${plural(backup.summary.attempts, "tentativa", "tentativas")}, ${plural(
        backup.summary.sessions,
        "sessão",
        "sessões"
      )} e ${plural(backup.summary.progress, "questão com progresso", "questões com progresso")}.`,
      "success"
    );
  } catch (error) {
    toast(error.message || "Não foi possível exportar os dados locais.", "error");
  }
}

async function handleBackupFileChange(event) {
  const input = event.currentTarget;
  const file = input.files?.[0];
  input.value = "";
  if (!file) return;
  if (file.size > 25 * 1024 * 1024) {
    toast("O arquivo é muito grande para um backup do XLearn (limite de 25 MB).", "error");
    return;
  }
  try {
    const text = await file.text();
    let raw;
    try {
      raw = JSON.parse(text);
    } catch {
      throw new Error("O arquivo selecionado não contém JSON válido.");
    }
    const validation = validateBackup(raw);
    if (!validation.ok) throw new Error(validation.error);
    state.pendingImport = {
      backup: validation.backup,
      summary: validation.summary,
      fileName: file.name || "backup.json",
    };
    render({ focus: true });
    requestAnimationFrame(() => document.getElementById("import-confirm-title")?.focus());
  } catch (error) {
    toast(error.message || "Não foi possível ler o backup.", "error");
  }
}

async function confirmPendingImport() {
  const pending = state.pendingImport;
  if (!pending) return;
  state.pendingImport = null;
  showLoadingOverlay("Restaurando backup…");
  try {
    await importDatabase(pending.backup.data);
    stopTimerTicker();
    state.session = null;
    state.sessionMaterial = null;
    state.finishingSession = false;
    await loadPersistedSettings();
    applyVisualSettings(getSettings());
    await restoreActiveSession();
    await refreshProgress();
    toast("Backup restaurado neste dispositivo.", "success");
    navigate("inicio");
  } catch (error) {
    toast(error.message || "Não foi possível restaurar o backup.", "error");
  } finally {
    hideLoadingOverlay();
    render();
  }
}

async function clearCache() {
  try {
    const result = await clearAppCaches();
    if (!result.supported) {
      toast("Este navegador não expõe a Cache API; nenhum cache foi removido.", "info");
      return;
    }
    if (result.deleted.length === 0) {
      toast("Nenhum cache do app encontrado. Seu progresso continua intacto.", "info");
      return;
    }
    toast(
      `${plural(result.deleted.length, "cache do app removido", "caches do app removidos")}. Seu progresso foi mantido.`,
      "success"
    );
  } catch (error) {
    toast(error.message || "Não foi possível limpar o cache do app.", "error");
  }
}

function requestProgressReset() {
  state.pendingReset = true;
  render({ focus: true });
  requestAnimationFrame(() => document.getElementById("reset-confirm-title")?.focus());
}

function cancelProgressReset() {
  state.pendingReset = false;
  render();
  requestAnimationFrame(() => document.querySelector('[data-role="reset-progress"]')?.focus());
}

function cancelPendingImport() {
  state.pendingImport = null;
  render();
  requestAnimationFrame(() => document.querySelector('[data-role="import-button"]')?.focus());
}

async function confirmProgressReset() {
  state.pendingReset = false;
  state.pendingImport = null;
  showLoadingOverlay("Apagando progresso…");
  try {
    await clearProgressData();
    stopTimerTicker();
    state.session = null;
    state.sessionMaterial = null;
    state.lastAnswerSave = null;
    state.scheduling = null;
    state.finishingSession = false;
    await refreshProgress();
    toast("Progresso apagado. Suas configurações foram preservadas.", "success");
    navigate("inicio");
  } catch (error) {
    toast(error.message || "Não foi possível apagar o progresso local.", "error");
  } finally {
    hideLoadingOverlay();
    render();
  }
}

function renderRankingList(items, label) {
  return h(
    "ol",
    { class: "ranking-list", "aria-label": label },
    ...items.map((item) =>
      h(
        "li",
        { class: `ranking-row${item.position <= 3 ? " is-podium" : ""}` },
        h("span", {
          class: "ranking-row__position",
          text: `${item.position}º`,
          "aria-label": `${item.position}º lugar`,
        }),
        h(
          "div",
          { class: "ranking-row__body" },
          h("strong", { text: item.title }),
          h("span", {
            text: `${item.subtitle ? `${item.subtitle} · ` : ""}${plural(item.answered, "questão", "questões")} · ${item.accuracy}% de acerto`,
          })
        ),
        h(
          "span",
          { class: "ranking-row__score" },
          h("strong", { text: `${item.score}%` }),
          h("small", { text: "índice" })
        )
      )
    )
  );
}

function renderProgress() {
  const stats = state.stats || { answered: 0, correct: 0, daily: {}, byMaterial: {} };
  const gamification = state.gamification || createGamification();
  const accuracy = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0;
  const ranking = buildRanking(state.entries, stats);
  const achievements = listAchievements(gamification);
  const unlocked = achievements
    .filter((item) => item.unlockedAt)
    .sort((a, b) => String(b.unlockedAt).localeCompare(String(a.unlockedAt)));
  const locked = achievements.filter((item) => !item.unlockedAt);
  const orderedAchievements = [...unlocked, ...locked];
  const attempts = state.recentAttempts || [];

  return [
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("chart"), "Estatísticas"),
        h("h1", { text: "Seu progresso" }),
        h("p", {
          text: "Totais, desempenho por disciplina e tentativas recentes calculados apenas com os dados deste dispositivo.",
        })
      ),
      h(
        "button",
        {
          class: "icon-btn",
          type: "button",
          title: "Atualizar estatísticas",
          "aria-label": "Atualizar estatísticas",
          onclick: async () => {
            await refreshProgress();
            render({ focus: true });
          },
        },
        icon("sparkles")
      )
    ),

    h(
      "div",
      { class: "summary-stats summary-stats--four", "aria-label": "Totais de estudo" },
      h("div", { class: "summary-stat" }, h("strong", { text: String(stats.answered) }), h("span", { text: "respondidas" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(stats.correct) }), h("span", { text: "acertos" })),
      h("div", { class: "summary-stat" }, h("strong", { text: `${accuracy}%` }), h("span", { text: "precisão" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(gamification.sessionsCompleted) }), h("span", { text: "sessões" }))
    ),

    renderLevelCard(),
    renderHabitCard(),

    h(
      "section",
      { class: "card ranking-card", "aria-labelledby": "ranking-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("trophy"), "Ranking local"),
          h("h2", { id: "ranking-title", text: "Seu desempenho por posição" })
        ),
        h("span", { class: "chip chip--neutral", text: "somente este dispositivo" })
      ),
      h("p", { class: "hint", text: RANKING_DISCLOSURE }),
      ranking.subjects.length === 0
        ? h("p", {
            class: "hint",
            text: "Ainda não há respostas para montar o ranking. Estude uma questão para ver provas e disciplinas classificadas.",
          })
        : [
            h("h3", { class: "ranking-group-title", text: "Disciplinas" }),
            renderRankingList(ranking.subjects, "Ranking local por disciplina"),
            h("h3", { class: "ranking-group-title", text: "Provas" }),
            renderRankingList(ranking.materials, "Ranking local por prova"),
          ]
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "all-achievements-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("award"), "Conquistas"),
          h("h2", { id: "all-achievements-title", text: `${unlocked.length} de ${achievements.length}` })
        ),
        h("span", { class: "chip chip--success", text: `${unlocked.reduce((sum, item) => sum + item.xp, 0)} XP recebidos` })
      ),
      h(
        "div",
        { class: "achievement-grid" },
        ...orderedAchievements.map((achievement) =>
          h(
            "article",
            { class: `achievement-mini${achievement.unlockedAt ? "" : " is-locked"}` },
            h(
              "span",
              { class: "achievement-mini__icon", "aria-hidden": "true" },
              icon(achievement.unlockedAt ? achievement.icon : "lock")
            ),
            h(
              "div",
              {},
              h("strong", { text: achievement.title }),
              h("span", { text: achievement.description }),
              h("small", {
                text: achievement.unlockedAt
                  ? `Desbloqueada em ${formatDateTime(achievement.unlockedAt)}`
                  : `Recompensa: ${achievement.xp} XP`,
              })
            )
          )
        )
      )
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "attempts-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("clock"), "Histórico"),
          h("h2", { id: "attempts-title", text: "Tentativas recentes" })
        ),
        h("span", { class: "chip chip--neutral", text: `${attempts.length} exibidas` })
      ),
      attempts.length === 0
        ? h("p", { class: "hint", text: "Nenhuma tentativa registrada ainda. Responda uma questão para começar o histórico." })
        : h(
            "ul",
            { class: "attempt-list" },
            ...attempts.map((attempt) =>
              h(
                "li",
                { class: `attempt-item ${attempt.correct ? "is-correct" : "is-wrong"}` },
                h(
                  "span",
                  { class: "attempt-item__icon", "aria-hidden": "true" },
                  icon(attempt.correct ? "check" : "x")
                ),
                h(
                  "div",
                  { class: "attempt-item__body" },
                  h("strong", { text: truncate(attempt.materialTitle || "Material", 80) }),
                  h("span", {
                    text: `${attempt.subject || "Geral"}${attempt.topic ? ` · ${attempt.topic}` : ""} · ${formatDateTime(attempt.answeredAt)}`,
                  }),
                  h("small", {
                    text: `Marcada: ${attempt.selectedId} · Gabarito: ${attempt.correctId}${
                      attempt.mode === "revisao" ? " · revisão" : ""
                    }`,
                  })
                )
              )
            )
          )
    ),

    h(
      "p",
      { class: "hint" },
      "Os números acima são cumulativos neste navegador. Limpar os dados do site remove o histórico e a gamificação."
    ),
  ];
}

function startReview(group, items) {
  const entry =
    state.entries.find((item) => item.path === group.materialPath) ||
    state.entries.find((item) => item.materialId === group.materialId);
  if (!entry) {
    toast("O material desta revisão não está mais disponível no manifesto.", "error");
    return;
  }
  const ids = items.map((item) => item.questionId);
  if (ids.length === 0) return;
  startSession(entry, {
    questionIds: ids,
    size: ids.length,
    mode: "revisao",
    preserveOrder: true,
  });
}
function renderMaterialGrid() {
  if (state.entries.length === 0) {
    return h(
      "div",
      { class: "empty card" },
      h("h2", { text: "Nenhuma prova disponível" }),
      h("p", { text: "Adicione arquivos .md em questoes/ e execute o gerador de manifesto." })
    );
  }
  return h(
    "div",
    { class: "material-grid" },
    ...state.entries.map((entry) => {
      const progress =
        state.progress?.byPath?.[entry.path] ||
        state.progress?.byId?.[entry.materialId] ||
        null;
      const answered = Math.min(progress?.answered || 0, entry.questionCount);
      const pct =
        progress && progress.seen > 0
          ? Math.round((progress.correct / progress.seen) * 100)
          : null;
      return h(
        "article",
        { class: "material-card" },
        h(
          "div",
          {},
          h(
            "div",
            { class: "chip-row" },
            h("span", { class: "chip", text: entry.subject || "Geral" }),
            entry.bank ? h("span", { class: "chip chip--neutral", text: entry.bank }) : null
          ),
          h("h3", { text: entry.title }),
          h("p", { class: "topic", text: entry.topic || "Material de estudo" })
        ),
        answered > 0
          ? h(
              "div",
              { class: "material-card__progress" },
              h(
                "div",
                { class: "progress", "aria-hidden": "true" },
                h("div", {
                  class: "progress__bar",
                  style: `--value:${Math.round((answered / entry.questionCount) * 100)}%`,
                })
              ),
              h("span", {
                class: "hint",
                text: `${answered} de ${entry.questionCount} respondidas${pct === null ? "" : ` · ${pct}% de acerto`}`,
              })
            )
          : null,
        h(
          "div",
          { class: "material-card__footer" },
          h(
            "span",
            { class: "material-card__meta" },
            icon("layers"),
            plural(entry.questionCount, "questão", "questões")
          ),
          h(
            "button",
            {
              class: "btn btn--primary btn--sm",
              type: "button",
              onclick: () => startSession(entry),
            },
            icon("play"),
            "Estudar"
          )
        )
      );
    })
  );
}

/* Session ----------------------------------------------------------------- */

async function startSession(entry, options = {}) {
  showLoadingOverlay("Preparando sua sessão…");
  try {
    const material = await loadMaterial(entry, { force: options.force });
    if (!material.valid || material.questions.length === 0) {
      throw new Error("Este material não possui questões válidas para estudar.");
    }

    const settings = getSettings();
    let pool = material.questions;
    if (Array.isArray(options.questionIds) && options.questionIds.length > 0) {
      const byId = new Map(material.questions.map((question) => [question.id, question]));
      pool = options.questionIds.map((id) => byId.get(id)).filter(Boolean);
    }
    if (pool.length === 0) throw new Error("Nenhuma questão disponível para esta sessão.");

    if (!options.preserveOrder && settings.questionOrder === "shuffle") {
      pool = shuffle(pool);
    }
    const requestedSize = Number.isFinite(options.size) ? options.size : settings.sessionSize;
    const size = Math.max(1, Math.min(requestedSize, pool.length));
    const questionIds = pool.slice(0, size).map((question) => question.id);
    const mode = options.mode || "material";

    state.session = {
      id: makeId(),
      materialId: entry.materialId || entry.path,
      materialPath: entry.path,
      materialTitle: entry.title,
      subject: entry.subject,
      mode,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      startedAt: Date.now(),
      questionIds,
      index: 0,
      answers: {},
      orders: {},
      pending: null,
      timer:
        usesExamTimer(mode) && settings.timerEnabled
          ? createTimer({ enabled: true, minutes: settings.timerMinutes })
          : createTimer({ enabled: false }),
      finishedAt: null,
    };
    state.sessionMaterial = material;
    await persistSession(state.session);
    playSound("sessionStart");
    navigate("sessao");
  } catch (error) {
    toast(error.message || "Não foi possível iniciar a sessão.", "error");
  } finally {
    hideLoadingOverlay();
  }
}

function currentQuestion() {
  const session = state.session;
  if (!session || !state.sessionMaterial) return null;
  const id = session.questionIds[session.index];
  return state.sessionMaterial.questions.find((question) => question.id === id) || null;
}

function alternativeOrder(session, question) {
  const saved = session.orders[question.id];
  if (Array.isArray(saved) && saved.length === question.alternatives.length) return saved;
  const random = seededRandom(hashString(`${session.id}::${question.id}`));
  const order = shuffle(
    question.alternatives.map((alternative) => alternative.id),
    random
  );
  session.orders[question.id] = order;
  return order;
}

function confirmAnswer(question) {
  const session = state.session;
  if (!session || session.finishedAt) return;
  if (session.answers[question.id]) return; // impede registro duplicado
  const selectedId =
    session.pending?.questionId === question.id ? session.pending.alternativeId : null;
  if (!selectedId) return;

  const correct = selectedId === question.correctId;
  const settings = getSettings();
  const previous =
    state.progress?.byKey?.[`${session.materialId}::${question.id}`] || null;
  const schedule = computeSchedule({
    level: previous?.srsLevel ?? 0,
    correct,
    intervals: settings.srsIntervals,
    enabled: settings.srsEnabled,
    now: new Date(),
  });

  session.answers[question.id] = {
    selectedId,
    correctId: question.correctId,
    correct,
    answeredAt: new Date().toISOString(),
    order: alternativeOrder(session, question),
    schedule,
    autoSchedule: schedule,
  };
  session.pending = null;
  session.updatedAt = new Date().toISOString();
  render();
  requestAnimationFrame(() => {
    const feedback = document.querySelector(".feedback");
    feedback?.setAttribute("tabindex", "-1");
    feedback?.focus({ preventScroll: false });
    playAnswerEffects(correct);
  });

  state.lastAnswerSave = recordAnswer({
    session,
    question,
    answer: session.answers[question.id],
    schedule,
    dailyGoal: settings.dailyGoal,
  })
    .then(async (result) => {
      await refreshProgress();
      if (state.route === "inicio" || state.route === "estudar") render();
      const extras = [];
      if (result?.goalCoinAwarded) {
        playSound("coin");
        extras.push(`+${COIN_RULES.dailyGoal} moedas pela meta diária`);
      }
      announceAchievements(result?.newAchievements, extras);
      return result;
    })
    .catch((error) => {
      warnStorageOnce(error);
      return null;
    });
}

async function scheduleReview(question, minutes) {
  const session = state.session;
  const answer = session?.answers?.[question.id];
  if (!session || !answer) return;

  const target =
    minutes === "auto"
      ? answer.autoSchedule
      : manualSchedule({
          level: answer.autoSchedule?.level ?? 0,
          minutes,
          now: new Date(),
        });
  if (!target) return;

  state.scheduling = { questionId: question.id, minutes };
  render();

  try {
    if (state.lastAnswerSave) await state.lastAnswerSave;
    await applyReviewSchedule(session.materialId, question.id, target);
    answer.schedule = target;
    session.updatedAt = new Date().toISOString();
    await persistSession(session);
    await refreshProgress();
    toast(`Revisão agendada: ${formatDueLabel(target.dueAt)}.`, "success");
  } catch (error) {
    warnStorageOnce(error);
  } finally {
    state.scheduling = null;
    render();
    requestAnimationFrame(() =>
      document.querySelector(`[data-schedule-minutes="${minutes}"]`)?.focus()
    );
  }
}

async function finishSession({ expired = false } = {}) {
  const session = state.session;
  if (!session || session.finishedAt || state.finishingSession) return;
  state.finishingSession = true;
  stopTimerTicker();
  session.pending = null;
  try {
    if (state.lastAnswerSave) await state.lastAnswerSave;
  } catch (error) {
    warnStorageOnce(error);
  }
  if (session.timer?.enabled) {
    session.timer = expired ? expireTimer(session.timer) : pauseTimer(session.timer);
  }
  session.finishedAt = new Date().toISOString();
  session.updatedAt = session.finishedAt;
  await persistSession(session);
  state.finishingSession = false;
  playSound("sessionEnd");
  try {
    const award = await awardSessionCompletion(session);
    if (award?.newAchievements?.length > 0) playSound("achievement");
    if (award?.coinsGain > 0) playSound("coin");
    const parts = [];
    if (award?.xpGain > 0) parts.push(`Sessão concluída: +${award.xpGain} XP`);
    if (award?.coinsGain > 0) parts.push(`+${award.coinsGain} moedas`);
    if (award?.newAchievements?.length > 0) {
      parts.push(`conquistas: ${award.newAchievements.map((item) => item.title).join(", ")}`);
    }
    if (parts.length > 0) toast(`${parts.join(" · ")}.`, "success");
  } catch (error) {
    warnStorageOnce(error);
  }
  await refreshProgress();
  navigate("resumo");
}

async function goToNextQuestion() {
  const session = state.session;
  if (!session) return;
  if (session.index + 1 >= session.questionIds.length) {
    await finishSession();
    return;
  }
  session.index += 1;
  session.pending = null;
  session.updatedAt = new Date().toISOString();
  render();
  persistSession(session);
  window.scrollTo({ top: 0, behavior: "auto" });
  requestAnimationFrame(() =>
    document.getElementById("question-text")?.focus({ preventScroll: true })
  );
}

function renderTimerChip(session) {
  const timer = session.timer;
  if (!timer?.enabled) return null;
  const remaining = remainingTimerSeconds(timer);
  const expired = Boolean(timer.expiredAt);
  const paused = timer.paused && !expired;
  const classes = ["quiz-timer"];
  if (isTimerWarning(remaining)) classes.push("is-warning");
  if (paused) classes.push("is-paused");
  if (expired) classes.push("is-expired");
  return h(
    "span",
    {
      class: classes.join(" "),
      "data-role": "session-timer",
      role: "timer",
      "aria-live": "off",
      "aria-label": formatTimerAria(remaining, { paused, expired }),
    },
    icon("clock"),
    h("span", { class: "quiz-timer__clock", text: formatTimerClock(remaining) })
  );
}

function renderQuiz() {
  const session = state.session;
  if (!session) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Nenhuma sessão ativa" }),
        h("p", { text: "Escolha uma prova para começar a responder." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Ver provas"))
      ),
    ];
  }

  const question = currentQuestion();
  if (!question) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Sessão sem questões" }),
        h("p", { text: "Não foi possível localizar a questão atual." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Escolher prova"))
      ),
    ];
  }

  const total = session.questionIds.length;
  const answered = session.answers[question.id] || null;
  const done = session.index + (answered ? 1 : 0);
  const progress = Math.round((done / total) * 100);
  const order = alternativeOrder(session, question);
  const alternativesById = new Map(
    question.alternatives.map((alternative) => [alternative.id, alternative])
  );
  const selectedId = answered?.selectedId || session.pending?.alternativeId || null;

  const altButtons = order.map((alternativeId) => {
    const alternative = alternativesById.get(alternativeId);
    if (!alternative) return null;
    let className = "alt";
    if (answered) {
      if (alternative.id === question.correctId) className += " is-correct";
      else if (alternative.id === answered.selectedId) className += " is-wrong";
    }
    const status = !answered
      ? ""
      : alternative.id === question.correctId
        ? " — resposta correta."
        : alternative.id === answered.selectedId
          ? " — sua resposta, incorreta."
          : "";
    return h(
      "button",
      {
        class: className,
        type: "button",
        "aria-pressed": String(selectedId === alternative.id),
        disabled: Boolean(answered),
        onclick: (event) => selectAlternative(event.currentTarget, question, alternative.id),
      },
      h("span", { class: "alt__letter", "aria-hidden": "true", text: alternative.id }),
      h(
        "span",
        { class: "alt__text" },
        h("span", { class: "sr-only", text: `Alternativa ${alternative.id}: ` }),
        alternative.text,
        status ? h("span", { class: "sr-only", text: status }) : null
      )
    );
  });

  const confirmButton = h(
    "button",
    {
      class: "btn btn--primary",
      type: "button",
      disabled: Boolean(answered) || !selectedId,
      onclick: () => confirmAnswer(question),
    },
    icon("check"),
    answered ? "Resposta registrada" : "Confirmar resposta"
  );

  const content = [
    h(
      "div",
      { class: "quiz-head" },
      h(
        "div",
        { class: "inline" },
        h(
          "a",
          { class: "icon-btn", href: "#/inicio", "aria-label": "Voltar ao início", title: "Voltar ao início" },
          icon("arrowLeft")
        ),
        h(
          "div",
          { class: "quiz-head__title" },
          h("strong", { text: session.materialTitle }),
          h("span", {
            text: `${question.subject || "Geral"}${question.topic ? ` · ${question.topic}` : ""}`,
          })
        )
      ),
      h("div", { class: "quiz-head__meta" }, renderTimerChip(session), h("span", { class: "quiz-head__count", text: `${session.index + 1} / ${total}` }))
    ),
    h(
      "div",
      {
        class: "progress",
        role: "progressbar",
        "aria-label": "Progresso da sessão",
        "aria-valuemin": "0",
        "aria-valuemax": String(total),
        "aria-valuenow": String(done),
        "aria-valuetext": `${done} de ${total} questões respondidas`,
      },
      h("div", { class: "progress__bar", style: `--value:${progress}%` })
    ),
    h(
      "section",
      { class: "question-card", "aria-labelledby": "question-text" },
      h(
        "div",
        { class: "question-meta" },
        h("span", { class: "chip", text: question.subject || "Geral" }),
        question.difficulty
          ? h("span", { class: "chip chip--neutral", text: difficultyLabel(question.difficulty) })
          : null,
        question.subtopic ? h("span", { class: "chip chip--neutral", text: question.subtopic }) : null
      ),
      h("h1", {
        id: "question-text",
        class: "question-text",
        tabindex: "-1",
        style: "font-size:1.06rem",
        text: question.text,
      }),
      h("p", {
        class: "hint",
        text: "A ordem foi embaralhada. As letras A–D correspondem às alternativas originais do gabarito.",
      }),
      h("div", { class: "alternatives", role: "group", "aria-label": "Alternativas" }, ...altButtons),
      h(
        "div",
        { class: "answer-bar" },
        confirmButton,
        answered
          ? h(
              "button",
              {
                class: "btn btn--ghost",
                type: "button",
                onclick: goToNextQuestion,
              },
              session.index + 1 >= total ? "Ver resumo" : "Próxima questão",
              icon("arrowRight")
            )
          : null
      )
    ),
  ];

  if (answered) {
    content.push(renderFeedback(question, answered));
  }

  return content;
}

function selectAlternative(button, question, alternativeId) {
  const session = state.session;
  if (!session || session.answers[question.id]) return;
  session.pending = { questionId: question.id, alternativeId };
  const group = button.closest(".alternatives");
  group?.querySelectorAll(".alt").forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  const confirm = document.querySelector(".answer-bar .btn--primary");
  if (confirm) confirm.disabled = false;
}

function renderScheduleBlock(question, answer) {
  const settings = getSettings();
  if (!settings.srsEnabled) {
    return h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Repetição espaçada desativada: " }),
      "a resposta foi registrada, mas nenhuma revisão foi agendada."
    );
  }

  const schedule = answer.schedule || answer.autoSchedule || null;
  const saving = state.scheduling?.questionId === question.id;
  const autoMinutes = answer.autoSchedule?.intervalMinutes;
  const manualSelected = Boolean(schedule?.manual);
  const dueText = schedule?.dueAt ? formatDueLabel(schedule.dueAt) : "sem data";

  return h(
    "div",
    { class: "schedule" },
    h(
      "div",
      { class: "schedule__head" },
      h("span", { class: "eyebrow" }, icon("clock"), "Repetição espaçada"),
      h("strong", {
        text: answer.correct ? "Quando deseja revisar?" : "Revisão curta programada",
      }),
      h("span", {
        class: "hint",
        text: schedule?.dueAt
          ? `Próxima revisão ${dueText}${schedule.level != null ? ` · nível ${schedule.level}/5` : ""}`
          : "Nenhuma revisão agendada.",
      })
    ),
    answer.correct
      ? h(
          "div",
          { class: "schedule-options", role: "group", "aria-label": "Escolher intervalo de revisão" },
          h(
            "button",
            {
              class: `schedule-btn${manualSelected ? "" : " is-selected"}`,
              type: "button",
              disabled: saving,
              "aria-pressed": String(!manualSelected),
              "data-schedule-minutes": "auto",
              onclick: () => scheduleReview(question, "auto"),
            },
            h("span", { text: "Automático" }),
            h("small", {
              text: autoMinutes ? formatIntervalMinutes(autoMinutes) : "desativado",
            })
          ),
          ...MANUAL_INTERVALS.map((option) =>
            h(
              "button",
              {
                class: `schedule-btn${
                  manualSelected && schedule?.intervalMinutes === option.minutes
                    ? " is-selected"
                    : ""
                }`,
                type: "button",
                disabled: saving,
                "aria-pressed": String(
                  manualSelected && schedule?.intervalMinutes === option.minutes
                ),
                "data-schedule-minutes": String(option.minutes),
                onclick: () => scheduleReview(question, option.minutes),
              },
              h("span", { text: option.label }),
              h("small", { text: "manual" })
            )
          )
        )
      : h(
          "p",
          { class: "hint" },
          `Uma nova revisão foi agendada ${dueText} para reforçar o conteúdo.`
        ),
    saving ? h("p", { class: "hint", role: "status", text: "Salvando agendamento…" }) : null
  );
}

function renderFeedback(question, answer) {
  const alternative = question.alternatives.find((item) => item.id === answer.selectedId);
  const correctAlternative = question.alternatives.find((item) => item.id === question.correctId);
  const explanation = question.explanation || {};
  const correct = answer.correct;

  const altExplanations = question.alternatives.map((item) =>
    h(
      "div",
      { class: `alt-explain${item.id === question.correctId ? " is-correct" : ""}` },
      h("span", { class: "alt-explain__letter", text: item.id }),
      h(
        "div",
        {},
        h(
          "strong",
          { style: "font-size:.82rem", text: `${item.id === question.correctId ? "Correta" : "Incorreta"} — ${truncate(item.text, 90)}` }
        ),
        h("p", { class: "prose", style: "margin-top:4px", text: item.explanation || "Sem comentário individual para esta alternativa." })
      )
    )
  );

  return h(
    "section",
    {
      class: `feedback ${correct ? "feedback--correct" : "feedback--wrong"}`,
      "aria-labelledby": "feedback-title",
    },
    h(
      "div",
      { class: "feedback__head" },
      h("span", { class: "feedback__icon" }, icon(correct ? "check" : "x")),
      h(
        "div",
        {},
        h("strong", { id: "feedback-title", text: correct ? "Resposta correta!" : "Resposta incorreta" }),
        h("span", {
          text: correct
            ? `Você marcou ${answer.selectedId}. Gabarito confirmado.`
            : `Você marcou ${alternative?.id || answer.selectedId}. A resposta correta é ${question.correctId}.`,
        })
      )
    ),
    h(
      "div",
      { class: "feedback__body" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("target"), "Resolução"),
        h("p", { class: "prose", style: "margin-top:6px", text: explanation.resolution || correctAlternative?.explanation || "Consulte o comentário das alternativas." })
      ),
      renderScheduleBlock(question, answer),
      explanation.theoreticalContent
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("book"), "Aula completa"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.theoreticalContent }))
          )
        : null,
      explanation.bankApproach
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("target"), "Como a banca cobra"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.bankApproach }))
          )
        : null,
      explanation.studyTip
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("sparkles"), "Dica de estudo"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.studyTip }))
          )
        : null,
      explanation.reviewSummary
        ? h(
            "details",
            { class: "details" },
            h("summary", {}, icon("layers"), "Resumo para revisão"),
            h("div", { class: "details__content" }, h("p", { class: "prose", text: explanation.reviewSummary }))
          )
        : null,
      h(
        "details",
        { class: "details" },
        h("summary", {}, icon("layers"), "Comentário de cada alternativa"),
        h("div", { class: "details__content" }, ...altExplanations)
      ),
      h(
        "p",
        { class: "hint" },
        "Esta resposta, a ordem das alternativas e o progresso da questão foram salvos neste dispositivo."
      )
    )
  );
}

/* Summary ----------------------------------------------------------------- */

function renderSummary() {
  const session = state.session;
  if (!session) {
    return [
      h(
        "div",
        { class: "empty card" },
        h("h1", { text: "Nenhum resumo disponível" }),
        h("p", { text: "Conclua uma sessão para ver o resultado." }),
        h("div", { class: "hero__actions", style: "justify-content:center" }, h("a", { class: "btn btn--primary", href: "#/estudar" }, "Escolher prova"))
      ),
    ];
  }

  const questions = state.sessionMaterial?.questions || [];
  const byId = new Map(questions.map((question) => [question.id, question]));
  const results = session.questionIds.map((id) => {
    const question = byId.get(id);
    const answer = session.answers[id] || null;
    return { question, answer };
  });
  const answeredResults = results.filter((item) => item.answer);
  const correctCount = answeredResults.filter((item) => item.answer.correct).length;
  const wrongResults = results.filter((item) => item.answer && !item.answer.correct);
  const unansweredResults = results.filter((item) => !item.answer);
  const expired = Boolean(session.timer?.expiredAt);
  const total = session.questionIds.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const duration = formatDuration(Date.now() - session.startedAt);
  const entry = state.entries.find((item) => item.path === session.materialPath) || null;

  return [
    h(
      "section",
      { class: "summary-hero" },
      h(
        "div",
        { class: "score-ring", style: `--pct:${pct}`, role: "img", "aria-label": `Aproveitamento: ${pct}%` },
        h(
          "div",
          { class: "score-ring__value" },
          h("strong", { text: `${pct}%` }),
          h("span", { text: "acertos" })
        )
      ),
      h(
        "div",
        { class: "summary-hero__text" },
        h("span", { class: "eyebrow" }, icon(expired ? "clock" : "sparkles"), expired ? "Tempo esgotado" : "Sessão concluída"),
        h("h1", {
          text: expired
            ? "A prova terminou"
            : correctCount === total
              ? "Excelente trabalho!"
              : "Sessão finalizada",
        }),
        h("p", { text: session.materialTitle }),
        h("p", {
          class: "small muted",
          text: `${plural(correctCount, "acerto", "acertos")} em ${plural(total, "questão", "questões")} · ${duration}`,
        })
      )
    ),

    expired
      ? h(
          "div",
          { class: "notice notice--info" },
          h("strong", { text: "Tempo esgotado: " }),
          "o cronômetro chegou a zero e a sessão foi encerrada automaticamente. As questões sem resposta foram marcadas abaixo."
        )
      : null,

    h(
      "div",
      { class: `summary-stats${unansweredResults.length > 0 ? " summary-stats--four" : ""}` },
      h("div", { class: "summary-stat" }, h("strong", { text: String(correctCount) }), h("span", { text: "acertos" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(wrongResults.length) }), h("span", { text: "erros" })),
      unansweredResults.length > 0
        ? h("div", { class: "summary-stat" }, h("strong", { text: String(unansweredResults.length) }), h("span", { text: "não respondidas" }))
        : null,
      h("div", { class: "summary-stat" }, h("strong", { text: String(total) }), h("span", { text: "questões" }))
    ),

    h(
      "div",
      { class: "hero__actions" },
      wrongResults.length > 0 && entry
        ? h(
            "button",
            {
              class: "btn btn--primary",
              type: "button",
              onclick: () =>
                startSession(entry, {
                  questionIds: wrongResults.map((item) => item.question.id),
                  size: wrongResults.length,
                  mode: "correcao",
                }),
            },
            icon("x"),
            `Revisar ${plural(wrongResults.length, "erro", "erros")}`
          )
        : null,
      entry
        ? h(
            "button",
            { class: "btn btn--ghost", type: "button", onclick: () => startSession(entry) },
            icon("play"),
            "Nova sessão"
          )
        : null,
      h("a", { class: "btn btn--ghost", href: "#/estudar" }, icon("book"), "Outra prova")
    ),

    h(
      "section",
      { class: "card" },
      h("h2", { text: "Resultado por questão" }),
      h(
        "div",
        { class: "result-list" },
        ...results.map(({ question, answer }) => {
          if (!question) return null;
          const isCorrect = Boolean(answer?.correct);
          const unanswered = !answer;
          const modifier = unanswered ? "is-unanswered" : isCorrect ? "is-correct" : "is-wrong";
          return h(
            "div",
            { class: `result-item ${modifier}` },
            h("span", { class: "result-item__icon" }, icon(unanswered ? "clock" : isCorrect ? "check" : "x")),
            h(
              "div",
              {},
              h("strong", { text: truncate(question.text, 120) }),
              h("span", {
                text: answer
                  ? `Marcada: ${answer.selectedId} · Gabarito: ${question.correctId}`
                  : expired
                    ? "Não respondida — tempo esgotado"
                    : "Não respondida",
              })
            )
          );
        })
      )
    ),

    h(
      "p",
      { class: "hint" },
      `Sessão iniciada em ${formatDateTime(session.createdAt)}. Respostas e histórico salvos localmente neste dispositivo.`
    ),
  ];
}

/* PWA: registro do service worker com escopo relativo -------------------- */
const SW_URL = new URL("./service-worker.js", document.baseURI);

function registerServiceWorker() {
  if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
  const start = async () => {
    try {
      const registration = await navigator.serviceWorker.register(SW_URL, { scope: "./" });
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            toast("Nova versão do XLearn disponível. Atualize a página para aplicar.", "info");
          }
        });
      });
    } catch (error) {
      console.warn("Não foi possível registrar o service worker:", error);
    }
  };
  if (document.readyState === "complete") start();
  else window.addEventListener("load", start, { once: true });
}

/* Start ------------------------------------------------------------------- */

registerServiceWorker();
boot();
