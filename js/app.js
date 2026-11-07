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
  claimAchievementReward,
  clearProgressData,
  clearSimuladoSession,
  exportDatabase,
  getActiveSession,
  getGamification,
  getProgressSummary,
  getSeason,
  getSettingsRecord,
  getSimuladoHistory,
  getSimuladoSession,
  getStats,
  getWallet,
  importDatabase,
  listAttempts,
  recordAnswer,
  saveSession,
  saveSettingsRecord,
  saveSimuladoHistory,
  saveSimuladoSession,
} from "./db.js";
import {
  computeStreak,
  createGamification,
  dailyProgress,
  listAchievements,
} from "./gamification.js";
import { COIN_RULES, createWallet } from "./coins.js";
import { createSeason, summarizeSeason } from "./season.js";
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
import {
  aggregateSimuladoHistory,
  appendSimuladoResult,
  createSimuladoHistory,
  simuladoAccuracy,
  simuladoQuestionKey,
  summarizeSimulado,
} from "./simulado.js";

const app = document.getElementById("app");

const state = {
  manifest: null,
  entries: [],
  loading: true,
  error: null,
  session: null,
  sessionMaterial: null,
  normalSession: null,
  simuladoSession: null,
  simuladoHistory: createSimuladoHistory(),
  simuladoDraft: {},
  claimingAchievement: null,
  progress: { byPath: {}, byId: {}, byKey: {}, records: [] },
  reviewQueue: { groups: [], counts: { overdue: 0, upcoming: 0 } },
  gamification: createGamification(),
  wallet: createWallet(),
  season: createSeason(),
  stats: { answered: 0, correct: 0, daily: {}, byMaterial: {} },
  recentAttempts: [],
  pendingImport: null,
  pendingReset: false,
  lastAnswerSave: null,
  scheduling: null,
  timerInterval: null,
  feedbackModalOpen: false,
  feedbackModal: null,
  feedbackModalPausedTimer: false,
  finishingSession: false,
  storageWarned: false,
  route: "inicio",
};

const ROUTES = new Set(["inicio", "estudar", "simulado", "sessao", "resumo", "revisoes", "progresso", "config"]);

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
  eye: '<path d="M2.5 12S6 6 12 6s9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z"/><circle cx="12" cy="12" r="2.6"/>',
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

function formatSeasonDay(key) {
  const parts = String(key || "").split("-");
  return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : String(key || "");
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
  const target = document.querySelector('[data-role="feedback-open"]');
  if (!target) return;
  const effect = correct ? "is-celebrate" : "is-shake";
  target.classList.add(effect);
  window.setTimeout(() => target.classList.remove(effect), 800);
}

/* Conquistas: coleta manual de moedas ------------------------------------- */

function achievementClaim(achievement) {
  const claimedAt = state.wallet?.claimedAchievements?.[achievement.id] || null;
  return {
    claimedAt,
    collectible: Boolean(achievement.unlockedAt && !claimedAt),
  };
}

function pendingAchievementCoins(achievements) {
  return achievements.reduce((sum, achievement) => {
    const { collectible } = achievementClaim(achievement);
    return sum + (collectible ? achievement.coins : 0);
  }, 0);
}

function renderAchievementItem(achievement) {
  const { claimedAt, collectible } = achievementClaim(achievement);
  const classes = `achievement-mini${achievement.unlockedAt ? "" : " is-locked"}${
    collectible ? " achievement-mini--collectible" : ""
  }${claimedAt ? " achievement-mini--claimed" : ""}`;
  const details = [
    h(
      "span",
      { class: "achievement-mini__icon", "aria-hidden": "true" },
      icon(achievement.unlockedAt ? achievement.icon : "lock")
    ),
    h(
      "div",
      { class: "achievement-mini__body" },
      h("strong", { text: achievement.title }),
      h("span", { text: achievement.description }),
      h("small", {
        text: !achievement.unlockedAt
          ? `Recompensa: ${plural(achievement.coins, "moeda", "moedas")}`
          : claimedAt
            ? `Moedas coletadas em ${formatDateTime(claimedAt)}`
            : `Clique para coletar ${plural(achievement.coins, "moeda", "moedas")}`,
      })
    ),
    achievement.unlockedAt
      ? h(
          "span",
          {
            class: `achievement-mini__reward${claimedAt ? " is-claimed" : ""}`,
            "aria-hidden": "true",
          },
          icon("coin"),
          claimedAt ? "coletado" : `+${achievement.coins}`
        )
      : null,
  ];

  if (!collectible) {
    return h(
      "article",
      {
        class: classes,
        "data-achievement": achievement.id,
        tabindex: "-1",
      },
      ...details
    );
  }

  return h(
    "button",
    {
      class: classes,
      type: "button",
      "data-achievement": achievement.id,
      "aria-label": `Coletar ${plural(achievement.coins, "moeda", "moedas")} da conquista ${achievement.title}`,
      onclick: (event) => collectAchievement(event.currentTarget, achievement),
    },
    ...details
  );
}

function playCoinCascade(amount) {
  if (!getSettings().animations) return false;
  const count = Math.max(6, Math.min(14, Math.ceil(amount / 2)));
  const spacing = 26;
  const layer = h("div", { class: "coin-cascade", "aria-hidden": "true" });
  for (let index = 0; index < count; index += 1) {
    const x = Math.round((index - (count - 1) / 2) * spacing);
    const drift = ((index % 5) - 2) * 11;
    const delay = (index % 4) * 70 + Math.floor(index / 4) * 45;
    layer.append(
      h("span", {
        class: "coin-cascade__coin",
        style: `--x:${x}px;--drift:${drift}px;--delay:${delay}ms`,
      }, icon("coin"))
    );
  }
  document.body.append(layer);
  window.setTimeout(() => layer.remove(), 1500);
  return true;
}

async function collectAchievement(button, achievement) {
  if (state.claimingAchievement) return;
  state.claimingAchievement = achievement.id;
  if (button) {
    button.disabled = true;
    button.classList.add("is-collecting");
  }
  try {
    const result = await claimAchievementReward(achievement.id);
    if (result?.notUnlocked) {
      await refreshProgress();
      render();
      toast("Esta conquista ainda não foi desbloqueada.", "info");
      return;
    }
    await refreshProgress();
    let cascade = false;
    if (result?.gain > 0) {
      playSound("coin");
      cascade = playCoinCascade(result.gain);
      const evolved = result.seasonEvolved && result.seasonStage
        ? ` Personagem evoluiu para ${result.seasonStage.stage.name}.`
        : "";
      const unlocked = result.newAchievements?.length
        ? ` Conquista desbloqueada: ${result.newAchievements.map((item) => item.title).join(", ")}.`
        : "";
      toast(
        `+${plural(result.gain, "moeda coletada", "moedas coletadas")} da conquista “${achievement.title}”.${evolved}${unlocked}`,
        "success"
      );
    } else if (result?.alreadyClaimed) {
      toast("Essa recompensa já foi coletada.", "info");
    }
    if (cascade) {
      await new Promise((resolve) => window.setTimeout(resolve, 1300));
    }
    render();
    const target = document.querySelector(`[data-achievement="${achievement.id}"]`);
    const fallback =
      document.querySelector('[data-role="home-achievements"] [data-achievement]') ||
      document.querySelector('[data-role="home-achievements"]') ||
      document.getElementById("main");
    (target || fallback)?.focus?.({ preventScroll: true });
  } catch (error) {
    warnStorageOnce(error);
  } finally {
    state.claimingAchievement = null;
  }
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
    { route: "simulado", label: "Simulado", icon: "target" },
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
  if (state.feedbackModalOpen) return;
  if (session.timer.paused) {
    session.timer = resumeTimer(session.timer);
    session.updatedAt = new Date().toISOString();
    persistSession(session);
  }
  startTimerTicker();
}

function pauseTimerForFeedback() {
  const session = state.session;
  state.feedbackModalPausedTimer = false;
  if (!session?.timer?.enabled || session.finishedAt || session.timer.expiredAt) return;
  if (!session.timer.paused) {
    session.timer = pauseTimer(session.timer);
    session.updatedAt = new Date().toISOString();
    state.feedbackModalPausedTimer = true;
    persistSession(session);
  }
  stopTimerTicker();
  syncTimerDisplay();
}

function resumeTimerAfterFeedback() {
  const pausedByModal = state.feedbackModalPausedTimer;
  state.feedbackModalPausedTimer = false;
  const session = state.session;
  if (!pausedByModal || !session?.timer?.enabled || session.finishedAt || session.timer.expiredAt) {
    return;
  }
  if (document.hidden || !session.timer.paused) return;
  session.timer = resumeTimer(session.timer);
  session.updatedAt = new Date().toISOString();
  persistSession(session);
  startTimerTicker();
  syncTimerDisplay();
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
    const [progress, gamification, stats, recentAttempts, wallet, season] = await Promise.all([
      getProgressSummary(),
      getGamification(),
      getStats(),
      listAttempts(10),
      getWallet(),
      getSeason(),
    ]);
    state.progress = progress;
    state.gamification = gamification;
    state.stats = stats;
    state.recentAttempts = recentAttempts;
    state.wallet = wallet;
    state.season = season;
    state.reviewQueue = buildReviewQueue(state.progress.records || []);
  } catch (error) {
    warnStorageOnce(error);
    state.progress = { byPath: {}, byId: {}, byKey: {}, records: [] };
    state.gamification = createGamification();
    state.stats = { answered: 0, correct: 0, daily: {}, byMaterial: {} };
    state.recentAttempts = [];
    state.wallet = createWallet();
    state.season = createSeason();
    state.reviewQueue = { groups: [], counts: { overdue: 0, upcoming: 0 } };
  }
  updateNav();
}

async function restoreActiveSession() {
  await restoreNormalSession();
  await restoreSimuladoState();
}

async function restoreNormalSession() {
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

    state.normalSession = active;
    if (!state.session) {
      state.session = active;
      state.sessionMaterial = material;
    }

    const answeredCount = Object.keys(active.answers).length;
    if (answeredCount >= active.questionIds.length && !active.finishedAt) {
      active.finishedAt = new Date().toISOString();
      active.updatedAt = active.finishedAt;
      await persistSession(active);
      state.normalSession = null;
      try {
        await awardSessionCompletion(active);
      } catch (error) {
        warnStorageOnce(error);
      }
      if (currentRoute() === "sessao" && state.session === active) navigate("resumo");
    }
  } catch (error) {
    warnStorageOnce(error);
  }
}

async function restoreSimuladoState() {
  try {
    state.simuladoHistory = createSimuladoHistory(await getSimuladoHistory());
  } catch (error) {
    warnStorageOnce(error);
    state.simuladoHistory = createSimuladoHistory();
  }

  try {
    const active = await getSimuladoSession();
    if (!active || !Array.isArray(active.questionIds) || active.questionIds.length === 0) return;
    const material = await hydrateSimuladoMaterial(active);
    if (!material) return;

    active.answers = active.answers && typeof active.answers === "object" ? active.answers : {};
    active.orders = active.orders && typeof active.orders === "object" ? active.orders : {};
    active.pending = null;
    if (!Number.isInteger(active.index) || active.index < 0) active.index = 0;
    active.timer = createTimer({ enabled: false });
    active.mode = "simulado";

    state.simuladoSession = active;
    if (!state.session) {
      state.session = active;
      state.sessionMaterial = material;
    }

    const answeredCount = Object.keys(active.answers).length;
    if (answeredCount >= active.questionIds.length && !active.finishedAt) {
      active.finishedAt = new Date().toISOString();
      active.updatedAt = active.finishedAt;
      active.durationMs = Math.max(0, Date.now() - active.startedAt);
      await recordSimuladoCompletion(active, material);
      state.simuladoSession = null;
      if (currentRoute() === "sessao" && state.session === active) navigate("resumo");
    }
  } catch (error) {
    warnStorageOnce(error);
  }
}

async function refreshSimuladoHistory() {
  try {
    state.simuladoHistory = createSimuladoHistory(await getSimuladoHistory());
  } catch (error) {
    warnStorageOnce(error);
    state.simuladoHistory = createSimuladoHistory();
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
    if (state.feedbackModalOpen) {
      event.preventDefault();
      closeFeedbackModal();
    } else if (state.pendingReset) {
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
    if (state.feedbackModalOpen) closeFeedbackModal({ restoreFocus: false });
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
  if (state.feedbackModalOpen && state.route !== "sessao") {
    closeFeedbackModal({ restoreFocus: false });
  }

  let content;
  switch (state.route) {
    case "estudar":
      content = renderStudy();
      break;
    case "simulado":
      content = renderSimulado();
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

  const nodes = content.filter((node) => node !== null && node !== undefined && node !== false);
  main.replaceChildren(...nodes);
  if (state.feedbackModalOpen) refreshFeedbackModal();
  ensureTimerTicker();
  syncTimerDisplay();
  if (state.route === "simulado") syncSimuladoTotal(document.getElementById("simulado-form"));
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
  const normalActive =
    state.normalSession && !state.normalSession.finishedAt ? state.normalSession : null;
  const simuladoActive =
    state.simuladoSession && !state.simuladoSession.finishedAt ? state.simuladoSession : null;
  const currentActive = state.session && !state.session.finishedAt ? state.session : null;

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
        h(
          "a",
          { class: "btn btn--ghost", href: "#/simulado" },
          icon("target"),
          "Criar simulado"
        ),
        currentActive
          ? h(
              "a",
              { class: "btn btn--ghost", href: "#/sessao" },
              icon("arrowRight"),
              "Continuar sessão"
            )
          : null
      )
    ),

    renderQuickStats(),

    renderHomeAchievements(),

    normalActive
      ? h(
          "section",
          { class: "session-banner", "aria-label": "Sessão em andamento" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", { text: "Sessão em andamento" }),
            h("span", {
              text: `${normalActive.materialTitle} · ${Object.keys(normalActive.answers || {}).length} de ${normalActive.questionIds.length} respondidas`,
            })
          ),
          h(
            "button",
            {
              class: "btn btn--primary btn--sm",
              type: "button",
              "data-role": "resume-normal",
              onclick: () => resumeNormalSession(),
            },
            "Continuar",
            icon("arrowRight")
          )
        )
      : null,

    simuladoActive
      ? h(
          "section",
          { class: "session-banner session-banner--simulado", "aria-label": "Simulado em andamento" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", { text: "Simulado em andamento" }),
            h("span", {
              text: `${Object.keys(simuladoActive.answers || {}).length} de ${simuladoActive.questionIds.length} respondidas · histórico separado`,
            })
          ),
          h(
            "button",
            {
              class: "btn btn--primary btn--sm",
              type: "button",
              "data-role": "resume-simulado",
              onclick: () => resumeSimuladoSession(),
            },
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

    state.manifest.summary.invalidMaterials > 0
      ? h(
          "div",
          { class: "notice notice--warning", role: "status" },
          h("strong", { text: "Atenção: " }),
          `${summary.invalidMaterials} material(is) do manifesto foram ignorados por erro de formato.`
        )
      : null,
  ];
}

function renderQuickStats() {
  const gamification = state.gamification || createGamification();
  const wallet = state.wallet || createWallet();
  const settings = getSettings();
  const season = summarizeSeason(state.season, state.stats?.daily || {});
  const status = season.status;
  const seasonLabel = status.isActive
    ? status.daysRemaining > 0
      ? `${plural(status.daysRemaining, "dia restante", "dias restantes")}`
      : "último dia"
    : status.hasEnded
      ? "personagem congelado"
      : "em breve";
  const goal = dailyProgress(state.stats || {}, settings.dailyGoal);
  const streak = computeStreak(state.stats?.daily || {});
  const achievements = listAchievements(gamification);
  const unlocked = achievements.filter((item) => item.unlockedAt);
  const pendingCoins = pendingAchievementCoins(unlocked);

  const items = [
    {
      icon: "target",
      value: `Estágio ${season.stageNumber}`,
      label: `${season.stage.name} · ${seasonLabel}`,
    },
    {
      icon: "coin",
      value: `${wallet.balance} moedas`,
      label: `${plural(season.season.coinsEarned, "moeda na temporada", "moedas na temporada")}`,
    },
    {
      icon: "flame",
      value: `${goal.answered}/${goal.target}`,
      label: `${goal.reached ? "meta concluída" : "meta de hoje"} · ${plural(
        streak.current,
        "dia",
        "dias"
      )} de sequência`,
    },
    {
      icon: "award",
      value: `${unlocked.length}/${achievements.length}`,
      label:
        pendingCoins > 0
          ? plural(pendingCoins, "moeda a coletar", "moedas a coletar")
          : "conquistas desbloqueadas",
    },
  ];

  return h(
    "section",
    { class: "card quick-panel", "aria-labelledby": "quick-title" },
    h(
      "div",
      { class: "section-head quick-panel__head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("chart"), "Visão rápida"),
        h("h2", { id: "quick-title", text: "Seu ritmo de estudo" })
      ),
      h(
        "a",
        { class: "quick-panel__link", href: "#/progresso" },
        "Ver progresso",
        icon("arrowRight")
      )
    ),
    h(
      "div",
      { class: "quick-grid" },
      ...items.map((item) =>
        h(
          "a",
          {
            class: "quick-item",
            href: "#/progresso",
            "aria-label": `${item.value}. ${item.label}. Abrir progresso.`,
          },
          h("span", { class: "quick-item__icon", "aria-hidden": "true" }, icon(item.icon)),
          h("strong", { class: "quick-item__value", text: item.value }),
          h("span", { class: "quick-item__label", text: item.label })
        )
      )
    )
  );
}

function renderHomeAchievements() {
  const gamification = state.gamification || createGamification();
  const pending = listAchievements(gamification).filter(
    (achievement) => achievementClaim(achievement).collectible
  );
  if (pending.length === 0) return null;
  const pendingCoins = pendingAchievementCoins(pending);

  return h(
    "section",
    {
      class: "card home-achievements",
      "aria-labelledby": "home-achievements-title",
      "data-role": "home-achievements",
      tabindex: "-1",
    },
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("award"), "Recompensas pendentes"),
        h("h2", { id: "home-achievements-title", text: "Conquistas para coletar" }),
        h("p", {
          class: "hint",
          text: "Toque em uma conquista para receber as moedas.",
        })
      ),
      h("span", {
        class: "chip chip--coin",
        text: plural(pendingCoins, "moeda pendente", "moedas pendentes"),
      })
    ),
    h(
      "div",
      { class: "achievement-grid" },
      ...pending.map((achievement) => renderAchievementItem(achievement))
    )
  );
}

function renderSeasonBar({ label, value, percent, ariaLabel, ariaText }) {
  return h(
    "div",
    { class: "season-bar" },
    h(
      "div",
      { class: "season-bar__head" },
      h("span", { text: label }),
      h("strong", { text: value })
    ),
    h(
      "div",
      {
        class: "progress",
        role: "progressbar",
        "aria-label": ariaLabel,
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": String(percent),
        "aria-valuetext": ariaText,
      },
      h("span", { class: "progress__bar", style: `width:${percent}%` })
    )
  );
}

function renderSeasonCard() {
  const wallet = state.wallet || createWallet();
  const summary = summarizeSeason(state.season, state.stats?.daily || {});
  const { season, status, stage, nextStage } = summary;
  const coinPercent = Math.round(summary.coinProgress * 100);
  const dayPercent = Math.round(summary.dayProgress * 100);
  const statusLabel = status.isActive
    ? status.daysRemaining > 0
      ? plural(status.daysRemaining, "dia restante", "dias restantes")
      : "último dia"
    : status.hasEnded
      ? "encerrada"
      : "em breve";

  return h(
    "section",
    { class: "card character-card season-card", "aria-labelledby": "season-title" },
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
          h("span", { class: "eyebrow" }, icon("sparkles"), `${season.name} · personagem`),
          h("h2", { id: "season-title", text: stage.name }),
          h("p", { class: "small muted", text: stage.description })
        ),
        h("span", {
          class: `chip ${status.isActive ? "chip--success" : "chip--neutral"}`,
          text: statusLabel,
        })
      ),
      h(
        "div",
        { class: "character-card__meta" },
        h("span", {
          class: "chip chip--neutral",
          text: `Estágio ${summary.stageNumber} de ${summary.totalStages}`,
        }),
        h(
          "span",
          { class: "chip chip--coin", "aria-label": `${wallet.balance} moedas disponíveis` },
          icon("coin"),
          h("span", { text: `${wallet.balance} moedas` })
        ),
        h("span", {
          class: "chip chip--neutral",
          text: `${formatSeasonDay(season.startsAt)} a ${formatSeasonDay(season.endsAt)}`,
        })
      ),
      h(
        "div",
        { class: "season-card__bars" },
        renderSeasonBar({
          label: "Moedas na temporada",
          value: nextStage
            ? `${season.coinsEarned} / ${nextStage.minCoins}`
            : String(season.coinsEarned),
          percent: coinPercent,
          ariaLabel: "Moedas acumuladas na temporada",
          ariaText: nextStage
            ? `${season.coinsEarned} de ${nextStage.minCoins} moedas para o próximo estágio`
            : `${season.coinsEarned} moedas na temporada`,
        }),
        renderSeasonBar({
          label: "Dias ativos",
          value: nextStage
            ? `${summary.activeDays} / ${nextStage.minActiveDays}`
            : String(summary.activeDays),
          percent: dayPercent,
          ariaLabel: "Dias ativos na temporada",
          ariaText: nextStage
            ? `${summary.activeDays} de ${nextStage.minActiveDays} dias ativos para o próximo estágio`
            : `${summary.activeDays} dias ativos na temporada`,
        })
      ),
      h("p", {
        class: "hint",
        text: nextStage
          ? `Faltam ${plural(summary.missingCoins, "moeda", "moedas")} e ${plural(
              summary.missingDays,
              "dia ativo",
              "dias ativos"
            )} para evoluir para ${nextStage.name}.`
          : "Estágio máximo da temporada alcançado. Continue estudando para manter o ritmo!",
      }),
      status.hasEnded
        ? h("p", {
            class: "hint season-card__frozen",
            text: `A temporada terminou em ${formatSeasonDay(
              season.endsAt
            )}. O personagem está congelado até uma nova temporada ser definida.`,
          })
        : h("p", {
            class: "hint",
            text: `Moedas e dias ativos contam apenas dentro da temporada, até ${formatSeasonDay(
              season.endsAt
            )}.`,
          }),
      h("p", {
        class: "hint",
        text: `Ganhe ${COIN_RULES.correctAnswer} moedas por acerto, ${COIN_RULES.sessionBase} ao concluir uma sessão e ${COIN_RULES.dailyGoal} ao bater a meta diária.`,
      })
    )
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
            ? "Meta de hoje concluída. Continue se quiser, as moedas continuam contando."
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
    renderMaterialGrid(),
  ];
}

function simuladoSubjectGroups() {
  const map = new Map();
  for (const entry of state.entries) {
    const subject = entry.subject || "Geral";
    const group = map.get(subject) || { subject, entries: [], available: 0 };
    group.entries.push(entry);
    group.available += Math.max(0, Number(entry.questionCount) || 0);
    map.set(subject, group);
  }
  return [...map.values()].sort((a, b) => a.subject.localeCompare(b.subject, "pt-BR"));
}

function simuladoDraftValue(subject, available) {
  const raw = Number(state.simuladoDraft?.[subject]) || 0;
  return Math.max(0, Math.min(available, Math.round(raw)));
}

function syncSimuladoTotal(form) {
  if (!form) return 0;
  const total = [...form.querySelectorAll("[data-subject]")].reduce(
    (sum, input) => sum + Math.max(0, Math.round(Number(input.value) || 0)),
    0
  );
  const status = form.querySelector('[data-role="simulado-total"]');
  if (status) {
    status.textContent =
      total === 0
        ? "Escolha pelo menos uma questão para montar o simulado."
        : `Total: ${plural(total, "questão", "questões")} no simulado.`;
    status.dataset.empty = total === 0 ? "true" : "false";
  }
  const start = form.querySelector('[data-role="start-simulado"]');
  if (start) start.disabled = total === 0;
  return total;
}

function updateSimuladoDraft(input) {
  if (!input) return;
  const max = Math.max(0, Number(input.dataset.max) || 0);
  const value = Math.max(0, Math.min(max, Math.round(Number(input.value) || 0)));
  if (String(value) !== input.value) input.value = String(value);
  state.simuladoDraft[input.dataset.subject] = value;
  syncSimuladoTotal(input.closest("form"));
}

function fillSimuladoPreset(form, amount) {
  if (!form) return;
  for (const input of form.querySelectorAll("[data-subject]")) {
    const max = Math.max(0, Number(input.dataset.max) || 0);
    input.value = String(Math.min(amount, max));
    state.simuladoDraft[input.dataset.subject] = Math.min(amount, max);
  }
  syncSimuladoTotal(form);
}

function readSimuladoPlan(form) {
  if (!form) return [];
  return [...form.querySelectorAll("[data-subject]")]
    .map((input) => {
      const max = Math.max(0, Number(input.dataset.max) || 0);
      const count = Math.max(0, Math.min(max, Math.round(Number(input.value) || 0)));
      return { subject: input.dataset.subject, count, available: max };
    })
    .filter((item) => item.count > 0);
}

function renderSimuladoHistory(aggregate) {
  if (!aggregate || aggregate.totalSessions === 0) {
    return h(
      "div",
      { class: "empty card" },
      h("h2", { text: "Nenhum simulado concluído" }),
      h("p", {
        text: "Monte seu primeiro simulado acima. O histórico por assunto aparecerá aqui, separado das estatísticas normais.",
      })
    );
  }

  return h(
    "section",
    { class: "card simulado-history", "aria-labelledby": "simulado-history-title" },
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("chart"), "Histórico separado"),
        h("h2", { id: "simulado-history-title", text: "Seus simulados por assunto" })
      ),
      h("span", {
        class: "chip chip--neutral",
        text: `${plural(aggregate.totalSessions, "simulado", "simulados")}`,
      })
    ),
    h(
      "div",
      { class: "summary-stats summary-stats--four" },
      h("div", { class: "summary-stat" }, h("strong", { text: String(aggregate.totalSessions) }), h("span", { text: "simulados" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(aggregate.totalQuestions) }), h("span", { text: "questões" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(aggregate.totalCorrect) }), h("span", { text: "acertos" })),
      h("div", { class: "summary-stat" }, h("strong", { text: `${aggregate.accuracy}%` }), h("span", { text: "aproveitamento" }))
    ),
    h(
      "div",
      { class: "simulado-table-wrap" },
      h(
        "table",
        { class: "simulado-table" },
        h(
          "caption",
          { class: "sr-only" },
          "Totais de questões e acertos por assunto nos simulados"
        ),
        h(
          "thead",
          {},
          h(
            "tr",
            {},
            h("th", { scope: "col", text: "Assunto" }),
            h("th", { scope: "col", text: "Questões" }),
            h("th", { scope: "col", text: "Acertos" }),
            h("th", { scope: "col", text: "Aproveitamento" })
          )
        ),
        h(
          "tbody",
          {},
          ...aggregate.subjects.map((row) =>
            h(
              "tr",
              {},
              h("th", { scope: "row", text: row.subject }),
              h("td", { text: String(row.total) }),
              h("td", { text: String(row.correct) }),
              h("td", { text: `${row.accuracy}%` })
            )
          )
        )
      )
    ),
    h(
      "ol",
      { class: "simulado-history-list", "aria-label": "Simulados recentes" },
      ...aggregate.sessions.slice(0, 8).map((session) =>
        h(
          "li",
          { class: "simulado-history-item" },
          h(
            "div",
            {},
            h("strong", {
              text: session.finishedAt ? formatDateTime(session.finishedAt) : "Simulado concluído",
            }),
            h("span", {
              text: `${plural(session.total, "questão", "questões")} · ${plural(session.correct, "acerto", "acertos")} · ${simuladoAccuracy(session.correct, session.total)}%`,
            })
          ),
          h(
            "div",
            { class: "chip-row" },
            ...session.subjects.slice(0, 4).map((row) =>
              h("span", {
                class: "chip chip--neutral",
                text: `${row.subject}: ${row.correct}/${row.total}`,
              })
            )
          )
        )
      )
    ),
    aggregate.sessions.length > 8
      ? h("p", {
          class: "hint",
          text: `Mostrando os 8 simulados mais recentes de ${aggregate.totalSessions}.`,
        })
      : null,
    h("p", {
      class: "hint",
      text: "Este histórico é independente: simulados não alteram progresso, conquistas, revisões, ranking, estatísticas nem moedas.",
    })
  );
}

function renderSimulado() {
  if (state.loading) {
    return [h("div", { class: "skeleton skeleton--row" }), h("div", { class: "skeleton skeleton--row" })];
  }
  if (state.error) return renderHome();

  const groups = simuladoSubjectGroups();
  const aggregate = aggregateSimuladoHistory(state.simuladoHistory);
  const active =
    state.simuladoSession && !state.simuladoSession.finishedAt ? state.simuladoSession : null;

  const form = h(
    "form",
    {
      class: "simulado-form",
      id: "simulado-form",
      autocomplete: "off",
      onsubmit: startSimulado,
    },
    h(
      "section",
      { class: "card", "aria-labelledby": "simulado-builder-title" },
      h(
        "div",
        { class: "section-head" },
        h(
          "div",
          {},
          h("span", { class: "eyebrow" }, icon("target"), "Monte do seu jeito"),
          h("h2", { id: "simulado-builder-title", text: "Questões por assunto" })
        ),
        h("span", {
          class: "chip chip--neutral",
          text: `${plural(groups.length, "assunto", "assuntos")}`,
        })
      ),
      h("p", {
        class: "hint",
        text: "Defina quantas questões quer de cada assunto. O simulado embaralha as questões escolhidas e não interfere no seu progresso normal.",
      }),
      h(
        "div",
        { class: "simulado-subject-list" },
        ...groups.map((group) =>
          h(
            "label",
            { class: "simulado-subject", "data-available": String(group.available) },
            h(
              "span",
              { class: "simulado-subject__text" },
              h("strong", { text: group.subject }),
              h("span", {
                text: `${plural(group.available, "questão disponível", "questões disponíveis")} em ${plural(group.entries.length, "prova", "provas")}`,
              })
            ),
            h("input", {
              type: "number",
              inputmode: "numeric",
              min: "0",
              max: String(group.available),
              step: "1",
              value: String(simuladoDraftValue(group.subject, group.available)),
              "data-subject": group.subject,
              "data-max": String(group.available),
              "aria-label": `Quantidade de questões de ${group.subject}`,
              oninput: (event) => updateSimuladoDraft(event.currentTarget),
            })
          )
        )
      ),
      h("p", {
        class: "simulado-total",
        role: "status",
        "aria-live": "polite",
        "data-role": "simulado-total",
        "data-empty": "true",
        text: "Escolha pelo menos uma questão para montar o simulado.",
      }),
      h(
        "div",
        { class: "simulado-actions" },
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            onclick: (event) => fillSimuladoPreset(event.currentTarget.closest("form"), 10),
          },
          icon("sparkles"),
          "10 por assunto"
        ),
        h(
          "button",
          {
            class: "btn btn--ghost btn--sm",
            type: "button",
            onclick: (event) => fillSimuladoPreset(event.currentTarget.closest("form"), 0),
          },
          "Limpar"
        ),
        h(
          "button",
          {
            class: "btn btn--primary",
            type: "submit",
            "data-role": "start-simulado",
            disabled: true,
          },
          icon("play"),
          "Iniciar simulado"
        )
      ),
      active
        ? h("p", {
            class: "hint",
            text: "Você tem um simulado em andamento. Iniciar outro substitui o rascunho atual; o histórico já concluído é preservado.",
          })
        : null
    )
  );

  return [
    h(
      "div",
      { class: "section-head" },
      h(
        "div",
        {},
        h("span", { class: "eyebrow" }, icon("target"), "Simulados"),
        h("h1", { text: "Simulado por assunto" }),
        h("p", {
          text: "Uma prova sob medida, com questões dos seus materiais e resultado separado por assunto.",
        })
      )
    ),
    active
      ? h(
          "section",
          { class: "session-banner session-banner--simulado", "aria-label": "Simulado em andamento" },
          h(
            "div",
            { class: "session-banner__text" },
            h("strong", { text: "Simulado em andamento" }),
            h("span", {
              text: `${Object.keys(active.answers || {}).length} de ${active.questionIds.length} respondidas`,
            })
          ),
          h(
            "button",
            {
              class: "btn btn--primary btn--sm",
              type: "button",
              onclick: () => resumeSimuladoSession(),
            },
            "Continuar",
            icon("arrowRight")
          )
        )
      : null,
    h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Histórico separado: " }),
      "simulados não contam para moedas, conquistas, SRS, ranking nem estatísticas. Apenas o total de questões e acertos por assunto é guardado."
    ),
    form,
    renderSimuladoHistory(aggregate),
  ];
}

async function startSimulado(event) {
  event?.preventDefault();
  const form = document.getElementById("simulado-form");
  const plan = readSimuladoPlan(form);
  if (plan.length === 0) {
    toast("Escolha pelo menos uma questão para iniciar o simulado.", "info");
    return;
  }

  showLoadingOverlay("Montando o simulado…");
  try {
    if (state.lastAnswerSave) await state.lastAnswerSave;
    const groups = simuladoSubjectGroups();
    const selected = [];
    const sources = new Map();

    for (const item of plan) {
      const group = groups.find((entry) => entry.subject === item.subject);
      if (!group) throw new Error(`O assunto "${item.subject}" não está mais disponível.`);

      const pool = [];
      for (const entry of group.entries) {
        try {
          const material = await loadMaterial(entry);
          for (const question of material.questions) pool.push({ entry, question });
        } catch {
          // Um material indisponível não impede os demais assuntos.
        }
      }
      if (pool.length < item.count) {
        throw new Error(
          `O assunto "${item.subject}" tem apenas ${plural(pool.length, "questão disponível", "questões disponíveis")}.`
        );
      }

      for (const picked of shuffle(pool).slice(0, item.count)) {
        const { entry, question } = picked;
        const sourceId = entry.materialId || entry.path;
        selected.push({
          ...question,
          id: simuladoQuestionKey(sourceId, question.id),
          originalId: question.id,
          materialId: sourceId,
          materialPath: entry.path,
          materialTitle: entry.title,
        });
        sources.set(entry.path, {
          materialId: sourceId,
          materialPath: entry.path,
          materialTitle: entry.title,
          subject: entry.subject || "Geral",
        });
      }
    }

    const questions = shuffle(selected);
    const now = new Date().toISOString();
    const session = {
      id: makeId(),
      mode: "simulado",
      materialId: "simulado",
      materialPath: null,
      materialTitle: "Simulado por assunto",
      subject: null,
      createdAt: now,
      updatedAt: now,
      startedAt: Date.now(),
      questionIds: questions.map((question) => question.id),
      index: 0,
      answers: {},
      orders: {},
      pending: null,
      timer: createTimer({ enabled: false }),
      sources: [...sources.values()],
      targetSubjects: plan.map((item) => ({ subject: item.subject, count: item.count })),
      finishedAt: null,
    };

    state.session = session;
    state.sessionMaterial = { questions };
    state.simuladoSession = session;
    await saveSimuladoSession(session);
    playSound("sessionStart");
    navigate("sessao");
  } catch (error) {
    toast(error.message || "Não foi possível montar o simulado.", "error");
  } finally {
    hideLoadingOverlay();
  }
}

async function hydrateSimuladoMaterial(session) {
  if (!session || !Array.isArray(session.questionIds) || !Array.isArray(session.sources)) {
    return null;
  }
  const wanted = new Set(session.questionIds);
  const questions = [];
  for (const source of session.sources) {
    const entry =
      state.entries.find((item) => item.path === source.materialPath) ||
      state.entries.find((item) => (item.materialId || item.path) === source.materialId);
    if (!entry) return null;
    const material = await loadMaterial(entry);
    for (const question of material.questions) {
      const id = simuladoQuestionKey(source.materialId, question.id);
      if (!wanted.has(id)) continue;
      questions.push({
        ...question,
        id,
        originalId: question.id,
        materialId: source.materialId,
        materialPath: source.materialPath,
        materialTitle: source.materialTitle,
      });
    }
  }
  return questions.length === wanted.size ? { questions } : null;
}

async function persistSimulado(session) {
  try {
    await saveSimuladoSession(session);
  } catch (error) {
    warnStorageOnce(error);
  }
}

async function recordSimuladoCompletion(session, material) {
  const questions = material?.questions || state.sessionMaterial?.questions || [];
  const summary = summarizeSimulado(session, questions);
  summary.durationMs = Math.max(
    0,
    Number(session.durationMs) || (session.startedAt ? Date.now() - session.startedAt : 0)
  );
  const next = appendSimuladoResult(state.simuladoHistory, summary);
  state.simuladoHistory = next;
  let saved = false;
  try {
    await saveSimuladoHistory(next);
    saved = true;
  } catch (error) {
    warnStorageOnce(error);
  }
  if (saved) {
    try {
      await clearSimuladoSession();
    } catch (error) {
      warnStorageOnce(error);
    }
  }
}

async function resumeNormalSession() {
  try {
    const active = state.normalSession || (await getActiveSession());
    if (!active || active.finishedAt) {
      toast("Nenhuma sessão normal em andamento.", "info");
      return;
    }
    const entry =
      state.entries.find((item) => item.path === active.materialPath) ||
      state.entries.find((item) => item.materialId === active.materialId);
    if (!entry) {
      toast("O material desta sessão não está mais disponível.", "error");
      return;
    }
    if (state.lastAnswerSave) await state.lastAnswerSave;
    const material = await loadMaterial(entry);
    const validIds = new Set(material.questions.map((question) => question.id));
    if (!active.questionIds.every((id) => validIds.has(id))) {
      toast("A sessão não pôde ser retomada com o material atual.", "error");
      return;
    }
    state.normalSession = active;
    state.session = active;
    state.sessionMaterial = material;
    navigate("sessao");
  } catch (error) {
    toast(error.message || "Não foi possível retomar a sessão.", "error");
  }
}

async function resumeSimuladoSession() {
  try {
    const active = state.simuladoSession;
    if (!active || active.finishedAt) {
      toast("Nenhum simulado em andamento.", "info");
      return;
    }
    if (state.lastAnswerSave) await state.lastAnswerSave;
    const material = await hydrateSimuladoMaterial(active);
    if (!material) {
      toast("O simulado não pôde ser retomado porque um material mudou.", "error");
      return;
    }
    state.session = active;
    state.sessionMaterial = material;
    navigate("sessao");
  } catch (error) {
    toast(error.message || "Não foi possível retomar o simulado.", "error");
  }
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
                text: `${isOverdue ? "Vencida" : "Agendada"} ${formatDueLabel(item.dueAt)} · domínio ${item.srsLevel}/5`,
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
      "os intervalos automáticos são 1, 3, 7, 14 e 30 dias após acertos consecutivos. Um erro reduz o domínio e agenda nova revisão em 10 minutos. Após acertar, você pode escolher outro intervalo no feedback da questão."
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
        text: "O backup inclui configurações, estatísticas, temporada, conquistas, moedas, personagem, progresso das questões, sessões e tentativas deste dispositivo.",
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
              h("li", { text: plural(state.pendingImport.summary.simulados || 0, "simulado no histórico", "simulados no histórico") }),
              h("li", {
                text: plural(state.pendingImport.summary.progress, "questão com progresso", "questões com progresso"),
              }),
              h("li", {
                text: `${state.pendingImport.summary.hasSettings ? "Configurações incluídas" : "Sem configurações"} · ${
                  state.pendingImport.summary.hasGamification ? "gamificação incluída" : "sem gamificação"
                } · ${state.pendingImport.summary.hasWallet ? "moedas incluídas" : "sem moedas"} · ${
                  state.pendingImport.summary.hasSimuladoHistory ? "simulados incluídos" : "sem simulados"
                }`,
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
        text: "Limpar o cache remove apenas arquivos baixados (HTML, CSS, JS e questões). Seu progresso, moedas e histórico continuam salvos no navegador.",
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
              text: "Serão apagados respostas, sessões, tentativas, estatísticas, temporada, conquistas, moedas, evolução do personagem, histórico de simulados, meta diária e sequência. Esta ação não pode ser desfeita.",
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
      "A meta diária e os intervalos alteram conquistas, revisões e moedas. O histórico já registrado não é reescrito."
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
      )}, ${plural(backup.summary.simulados, "simulado", "simulados")} e ${plural(
        backup.summary.progress,
        "questão com progresso",
        "questões com progresso"
      )}.`,
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
    state.normalSession = null;
    state.simuladoSession = null;
    state.simuladoHistory = createSimuladoHistory();
    state.simuladoDraft = {};
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
    state.normalSession = null;
    state.simuladoSession = null;
    state.simuladoHistory = createSimuladoHistory();
    state.simuladoDraft = {};
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
  const pendingCoins = pendingAchievementCoins(unlocked);

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

    renderSeasonCard(),
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
        h("span", {
          class: pendingCoins > 0 ? "chip chip--coin" : "chip chip--success",
          text:
            pendingCoins > 0
              ? `${pendingCoins} moedas a coletar`
              : unlocked.length > 0
                ? "recompensas coletadas"
                : "sem pendências",
        })
      ),
      h(
        "div",
        { class: "achievement-grid" },
        ...orderedAchievements.map((achievement) => renderAchievementItem(achievement))
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
    state.normalSession = state.session;
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
  const isSimulado = session.mode === "simulado";
  let schedule = null;
  if (!isSimulado) {
    const previous =
      state.progress?.byKey?.[`${session.materialId}::${question.id}`] || null;
    schedule = computeSchedule({
      level: previous?.srsLevel ?? 0,
      correct,
      intervals: settings.srsIntervals,
      enabled: settings.srsEnabled,
      now: new Date(),
    });
  }

  session.answers[question.id] = {
    selectedId,
    correctId: question.correctId,
    correct,
    answeredAt: new Date().toISOString(),
    order: alternativeOrder(session, question),
    ...(schedule ? { schedule, autoSchedule: schedule } : {}),
  };
  session.pending = null;
  session.updatedAt = new Date().toISOString();
  render();
  requestAnimationFrame(() => {
    const feedbackButton = document.querySelector('[data-role="feedback-open"]');
    feedbackButton?.focus({ preventScroll: false });
    playAnswerEffects(correct);
  });

  if (isSimulado) {
    state.lastAnswerSave = persistSimulado(session).catch((error) => {
      warnStorageOnce(error);
      return null;
    });
    return;
  }

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
      if (result?.seasonEvolved && result.seasonStage) {
        extras.push(`Personagem evoluiu para ${result.seasonStage.stage.name}`);
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
  if (session.mode === "simulado") {
    session.finishedAt = new Date().toISOString();
    session.updatedAt = session.finishedAt;
    session.durationMs = Math.max(0, Date.now() - session.startedAt);
    state.simuladoSession = null;
    state.finishingSession = false;
    playSound("sessionEnd");
    await recordSimuladoCompletion(session, state.sessionMaterial);
    navigate("resumo");
    return;
  }
  if (session.timer?.enabled) {
    session.timer = expired ? expireTimer(session.timer) : pauseTimer(session.timer);
  }
  session.finishedAt = new Date().toISOString();
  session.updatedAt = session.finishedAt;
  await persistSession(session);
  state.finishingSession = false;
  if (state.normalSession?.id === session.id) state.normalSession = null;
  playSound("sessionEnd");
  try {
    const award = await awardSessionCompletion(session);
    if (award?.newAchievements?.length > 0) playSound("achievement");
    if (award?.coinsGain > 0) playSound("coin");
    const parts = [];
    if (award?.coinsGain > 0) parts.push(`+${award.coinsGain} moedas`);
    if (award?.newAchievements?.length > 0) {
      parts.push(`conquistas: ${award.newAchievements.map((item) => item.title).join(", ")}`);
    }
    if (award?.seasonEvolved && award.seasonStage) {
      parts.push(`personagem evoluiu para ${award.seasonStage.stage.name}`);
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
  if (session.mode === "simulado") {
    persistSimulado(session);
  } else {
    persistSession(session);
  }
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
  const isSimulado = session.mode === "simulado";
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
          {
            class: "icon-btn",
            href: isSimulado ? "#/simulado" : "#/inicio",
            "aria-label": isSimulado ? "Voltar aos simulados" : "Voltar ao início",
            title: isSimulado ? "Voltar aos simulados" : "Voltar ao início",
          },
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
        "aria-label": isSimulado ? "Progresso do simulado" : "Progresso da sessão",
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
        isSimulado ? h("span", { class: "chip chip--simulado", text: "Simulado" }) : null,
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
    content.push(
      h(
        "div",
        { class: "feedback-cta" },
        h(
          "div",
          { class: "feedback-cta__text" },
          h("strong", { text: "Resposta registrada" }),
          h("p", {
            class: "hint",
            text: session.timer?.enabled
              ? "Abra o feedback para ver a resolução. O cronômetro pausa enquanto a janela estiver aberta."
              : "Abra o feedback para ver a resolução e os comentários das alternativas.",
          })
        ),
        h(
          "button",
          {
            class: "btn feedback-cta__button",
            type: "button",
            "data-role": "feedback-open",
            "aria-haspopup": "dialog",
            onclick: (event) => openFeedbackModal(question, answered, event.currentTarget),
          },
          icon("eye"),
          "Mostrar feedback"
        )
      )
    );
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
          ? `Próxima revisão ${dueText}${schedule.level != null ? ` · domínio ${schedule.level}/5` : ""}`
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
  const isSimulado = state.session?.mode === "simulado";

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
      isSimulado ? null : renderScheduleBlock(question, answer),
      isSimulado
        ? h(
            "div",
            { class: "notice notice--info" },
            h("strong", { text: "Simulado: " }),
            "esta resposta fica apenas no histórico separado por assunto. Progresso, SRS, conquistas, ranking, estatísticas e moedas não são alterados."
          )
        : null,
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
        isSimulado
          ? "Resposta, ordem das alternativas e andamento deste simulado foram salvos neste dispositivo, separados do seu progresso normal."
          : "Esta resposta, a ordem das alternativas e o progresso da questão foram salvos neste dispositivo."
      )
    )
  );
}

/* Feedback em modal ------------------------------------------------------- */

function feedbackContext() {
  const session = state.session;
  const question = currentQuestion();
  const answer = question && session?.answers ? session.answers[question.id] : null;
  return question && answer ? { question, answer } : null;
}

function setFeedbackBackgroundInert(inert) {
  document.querySelectorAll("#main, .topbar, .bottom-nav").forEach((node) => {
    if (inert) node.setAttribute("inert", "");
    else node.removeAttribute("inert");
  });
}

function feedbackTimerHint() {
  const timer = state.session?.timer;
  if (!timer?.enabled) return "Esta prova está sem cronômetro.";
  if (timer.expiredAt) return "O tempo da prova já havia acabado.";
  return "Cronômetro pausado enquanto esta janela estiver aberta.";
}

function refreshFeedbackModal() {
  if (!state.feedbackModalOpen) return;
  const overlay = document.querySelector('[data-role="feedback-modal"]');
  const body = overlay?.querySelector('[data-role="feedback-modal-body"]');
  if (!overlay || !body) return;
  const context = feedbackContext();
  if (!context) {
    closeFeedbackModal({ restoreFocus: false });
    return;
  }
  body.replaceChildren(renderFeedback(context.question, context.answer));
  const hint = overlay.querySelector('[data-role="feedback-modal-timer-text"]');
  if (hint) hint.textContent = feedbackTimerHint();
}

function playFeedbackModalEffects(correct) {
  if (!getSettings().animations) return;
  const feedback = document.querySelector('[data-role="feedback-modal"] .feedback');
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
  }, 900);
}

function handleFeedbackModalKeydown(event) {
  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    closeFeedbackModal();
    return;
  }
  if (event.key !== "Tab") return;
  const overlay = event.currentTarget;
  const focusables = Array.from(
    overlay.querySelectorAll(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, [tabindex]:not([tabindex="-1"])'
    )
  );
  if (focusables.length === 0) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (event.shiftKey) {
    if (
      document.activeElement === first ||
      document.activeElement === overlay.firstElementChild ||
      !overlay.contains(document.activeElement)
    ) {
      event.preventDefault();
      last.focus();
    }
  } else if (document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function openFeedbackModal(question, answer, trigger) {
  const context = feedbackContext();
  if (!context) return;
  if (state.feedbackModalOpen) {
    state.feedbackModal = { trigger: trigger || state.feedbackModal?.trigger || null };
    refreshFeedbackModal();
    return;
  }

  state.feedbackModalOpen = true;
  state.feedbackModal = { trigger: trigger || null };
  pauseTimerForFeedback();
  setFeedbackBackgroundInert(true);
  document.body.classList.add("has-modal");

  const dialog = h(
    "div",
    {
      class: "feedback-modal",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "feedback-modal-heading feedback-title",
      tabindex: "-1",
    },
    h(
      "div",
      { class: "feedback-modal__bar" },
      h(
        "span",
        { class: "eyebrow", id: "feedback-modal-heading" },
        icon("eye"),
        "Feedback da questão"
      ),
      h(
        "div",
        { class: "feedback-modal__actions" },
        h(
          "span",
          { class: "feedback-modal__timer" },
          icon("clock"),
          h("span", {
            "data-role": "feedback-modal-timer-text",
            text: feedbackTimerHint(),
          })
        ),
        h(
          "button",
          {
            class: "icon-btn feedback-modal__close",
            type: "button",
            "aria-label": "Fechar feedback",
            title: "Fechar feedback (Esc)",
            onclick: () => closeFeedbackModal(),
          },
          icon("x")
        )
      )
    ),
    h(
      "div",
      { class: "feedback-modal__body", "data-role": "feedback-modal-body" },
      renderFeedback(context.question, context.answer)
    )
  );

  const overlay = h(
    "div",
    { class: "feedback-modal-backdrop", "data-role": "feedback-modal" },
    dialog
  );
  overlay.addEventListener("keydown", handleFeedbackModalKeydown);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeFeedbackModal();
  });
  document.body.append(overlay);
  requestAnimationFrame(() => dialog.focus({ preventScroll: true }));
  playFeedbackModalEffects(context.answer.correct);
}

function closeFeedbackModal({ restoreFocus = true } = {}) {
  if (!state.feedbackModalOpen) return;
  const trigger = state.feedbackModal?.trigger || null;
  document.querySelector('[data-role="feedback-modal"]')?.remove();
  document.body.classList.remove("has-modal");
  setFeedbackBackgroundInert(false);
  state.feedbackModalOpen = false;
  state.feedbackModal = null;
  resumeTimerAfterFeedback();
  if (restoreFocus) {
    const fallback = document.querySelector('[data-role="feedback-open"]');
    (trigger?.isConnected ? trigger : fallback)?.focus({ preventScroll: true });
  }
}

/* Summary ----------------------------------------------------------------- */

function renderSimuladoSubjectTable(subjects) {
  return h(
    "div",
    { class: "simulado-table-wrap" },
    h(
      "table",
      { class: "simulado-table" },
      h("caption", { class: "sr-only" }, "Resultado deste simulado por assunto"),
      h(
        "thead",
        {},
        h(
          "tr",
          {},
          h("th", { scope: "col", text: "Assunto" }),
          h("th", { scope: "col", text: "Questões" }),
          h("th", { scope: "col", text: "Acertos" }),
          h("th", { scope: "col", text: "Aproveitamento" })
        )
      ),
      h(
        "tbody",
        {},
        ...subjects.map((row) =>
          h(
            "tr",
            {},
            h("th", { scope: "row", text: row.subject }),
            h("td", { text: String(row.total) }),
            h("td", { text: String(row.correct) }),
            h("td", { text: `${simuladoAccuracy(row.correct, row.total)}%` })
          )
        )
      )
    )
  );
}

function renderSimuladoSummary() {
  const session = state.session;
  const questions = state.sessionMaterial?.questions || [];
  const summary = summarizeSimulado(session, questions);
  const pct = simuladoAccuracy(summary.correct, summary.total);
  const duration = formatDuration(
    summary.durationMs || (session.startedAt ? Date.now() - session.startedAt : 0)
  );

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
        h("span", { class: "eyebrow" }, icon("target"), "Simulado concluído"),
        h("h1", {
          text: pct === 100 ? "Simulado perfeito!" : "Resultado do simulado",
        }),
        h("p", { text: session.materialTitle }),
        h("p", {
          class: "small muted",
          text: `${plural(summary.correct, "acerto", "acertos")} em ${plural(summary.total, "questão", "questões")} · ${duration}`,
        })
      )
    ),

    h(
      "div",
      { class: "notice notice--info" },
      h("strong", { text: "Histórico separado: " }),
      "este resultado não alterou moedas, conquistas, SRS, ranking nem estatísticas. Ele foi salvo apenas no histórico de simulados."
    ),

    h(
      "div",
      { class: `summary-stats${summary.unanswered > 0 ? " summary-stats--four" : ""}` },
      h("div", { class: "summary-stat" }, h("strong", { text: String(summary.correct) }), h("span", { text: "acertos" })),
      h("div", { class: "summary-stat" }, h("strong", { text: String(summary.wrong) }), h("span", { text: "erros" })),
      summary.unanswered > 0
        ? h("div", { class: "summary-stat" }, h("strong", { text: String(summary.unanswered) }), h("span", { text: "não respondidas" }))
        : null,
      h("div", { class: "summary-stat" }, h("strong", { text: String(summary.total) }), h("span", { text: "questões" }))
    ),

    h(
      "div",
      { class: "hero__actions" },
      h("a", { class: "btn btn--primary", href: "#/simulado" }, icon("target"), "Novo simulado"),
      h("a", { class: "btn btn--ghost", href: "#/inicio" }, icon("home"), "Voltar ao início")
    ),

    h(
      "section",
      { class: "card", "aria-labelledby": "simulado-summary-subjects" },
      h("h2", { id: "simulado-summary-subjects", text: "Resultado por assunto" }),
      renderSimuladoSubjectTable(summary.subjects)
    ),

    h(
      "p",
      { class: "hint" },
      `Simulado iniciado em ${formatDateTime(session.createdAt)}. Histórico por assunto salvo localmente neste dispositivo.`
    ),
  ];
}

function renderSummary() {
  if (state.session?.mode === "simulado") return renderSimuladoSummary();
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
