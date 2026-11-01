/**
 * settings.js — preferências do XLearn.
 *
 * Os valores padrão ficam centralizados aqui. O app carrega e grava o objeto
 * completo no store meta do IndexedDB; esta instância mantém o estado em memória.
 */

export const MANUAL_INTERVALS = [
  { minutes: 10, label: "10 minutos" },
  { minutes: 60, label: "1 hora" },
  { minutes: 1440, label: "1 dia" },
  { minutes: 4320, label: "3 dias" },
  { minutes: 10080, label: "7 dias" },
  { minutes: 20160, label: "14 dias" },
  { minutes: 43200, label: "30 dias" },
];

export const DEFAULT_SETTINGS = Object.freeze({
  sessionSize: 10,
  questionOrder: "shuffle", // shuffle | sequential
  shuffleAlternatives: true, // obrigatório pelo projeto; não é exposto como opção desativável
  srsEnabled: true,
  srsIntervals: [1, 3, 7, 14, 30], // dias
  dailyGoal: 20,
  theme: "system", // system | dark | light
  fontSize: 16, // px
  animations: true,
  gamification: true,
  showExplanations: true,
});

let currentSettings = { ...DEFAULT_SETTINGS };

export function getSettings() {
  return currentSettings;
}

export function setSettings(patch = {}) {
  currentSettings = { ...currentSettings, ...patch };
  return currentSettings;
}

export function resetSettings() {
  currentSettings = { ...DEFAULT_SETTINGS };
  return currentSettings;
}

/** Aplica preferências visuais ao documento. */
export function applyVisualSettings(settings = currentSettings) {
  const root = document.documentElement;
  const resolvedTheme =
    settings.theme === "system"
      ? window.matchMedia?.("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark"
      : settings.theme;
  root.dataset.theme = resolvedTheme;
  root.dataset.animations = settings.animations ? "on" : "off";
  root.style.setProperty("--font-size", `${settings.fontSize}px`);
  const themeColor = resolvedTheme === "light" ? "#f4f6fc" : "#070b18";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);
}

export function normalizeSettings(raw = {}) {
  const settings = { ...DEFAULT_SETTINGS, ...raw };
  settings.sessionSize = clamp(Number(settings.sessionSize) || 10, 1, 100);
  settings.dailyGoal = clamp(Number(settings.dailyGoal) || 20, 1, 500);
  settings.fontSize = clamp(Number(settings.fontSize) || 16, 14, 22);
  settings.questionOrder = settings.questionOrder === "sequential" ? "sequential" : "shuffle";
  settings.theme = ["dark", "light", "system"].includes(settings.theme)
    ? settings.theme
    : "system";
  settings.animations = settings.animations !== false;
  settings.gamification = settings.gamification !== false;
  settings.showExplanations = settings.showExplanations !== false;
  settings.srsEnabled = settings.srsEnabled !== false;
  settings.srsIntervals = Array.isArray(settings.srsIntervals)
    ? settings.srsIntervals.map(Number).filter((value) => value > 0)
    : [...DEFAULT_SETTINGS.srsIntervals];
  if (settings.srsIntervals.length !== 5) settings.srsIntervals = [...DEFAULT_SETTINGS.srsIntervals];
  return settings;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
