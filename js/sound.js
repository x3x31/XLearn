/**
 * sound.js — efeitos sonoros do XLearn gerados com Web Audio.
 *
 * Não há arquivos de áudio nem dependências externas: cada efeito é uma
 * sequência curta de osciladores com envelope de volume. O contexto só é
 * criado depois de um gesto do usuário, como exigem os navegadores móveis.
 *
 * Os sons respeitam `soundEnabled` e `soundVolume` das configurações. Em
 * ambientes sem Web Audio (ou em testes de DOM) as chamadas são ignoradas.
 */

import { getSettings } from "./settings.js";

const AudioContextClass =
  globalThis.AudioContext || globalThis.webkitAudioContext || null;

let audioContext = null;
let unlockInstalled = false;

/**
 * Padrões em notação simples. `at` é o deslocamento em segundos a partir do
 * início do efeito, `dur` a duração e `gain` o volume relativo da nota.
 */
const PATTERNS = Object.freeze({
  // Dó–Mi–Sol ascendente e curto.
  correct: [
    { freq: 659.25, at: 0, dur: 0.11, type: "sine", gain: 0.5 },
    { freq: 783.99, at: 0.1, dur: 0.12, type: "sine", gain: 0.55 },
    { freq: 1046.5, at: 0.2, dur: 0.2, type: "sine", gain: 0.5 },
  ],
  // Duas notas graves e levemente ásperas.
  wrong: [
    { freq: 220, at: 0, dur: 0.16, type: "triangle", gain: 0.55 },
    { freq: 164.81, at: 0.14, dur: 0.26, type: "triangle", gain: 0.5 },
  ],
  // Fanfarra curta de início.
  sessionStart: [
    { freq: 392, at: 0, dur: 0.1, type: "sine", gain: 0.38 },
    { freq: 523.25, at: 0.09, dur: 0.12, type: "sine", gain: 0.42 },
    { freq: 659.25, at: 0.18, dur: 0.18, type: "sine", gain: 0.42 },
  ],
  // Acorde ascendente de encerramento.
  sessionEnd: [
    { freq: 523.25, at: 0, dur: 0.12, type: "sine", gain: 0.38 },
    { freq: 659.25, at: 0.11, dur: 0.12, type: "sine", gain: 0.42 },
    { freq: 783.99, at: 0.22, dur: 0.14, type: "sine", gain: 0.42 },
    { freq: 1046.5, at: 0.34, dur: 0.28, type: "sine", gain: 0.4 },
  ],
  // Brilho de conquista, com notas agudas sobrepostas.
  achievement: [
    { freq: 783.99, at: 0, dur: 0.12, type: "sine", gain: 0.36 },
    { freq: 1046.5, at: 0.09, dur: 0.14, type: "triangle", gain: 0.32 },
    { freq: 1318.51, at: 0.18, dur: 0.2, type: "sine", gain: 0.3 },
    { freq: 1567.98, at: 0.28, dur: 0.26, type: "sine", gain: 0.22 },
  ],
  // Moedinha: duas notas rápidas e brilhantes.
  coin: [
    { freq: 987.77, at: 0, dur: 0.06, type: "square", gain: 0.24 },
    { freq: 1318.51, at: 0.055, dur: 0.16, type: "square", gain: 0.2 },
  ],
  // Toque neutro para prévia nas configurações.
  preview: [
    { freq: 587.33, at: 0, dur: 0.09, type: "sine", gain: 0.38 },
    { freq: 880, at: 0.08, dur: 0.16, type: "sine", gain: 0.34 },
  ],
});

export const SOUND_NAMES = Object.freeze(Object.keys(PATTERNS));

function clampVolume(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0.6;
  return Math.min(1, Math.max(0, number));
}

function ensureContext() {
  if (audioContext) return audioContext;
  if (!AudioContextClass) return null;
  try {
    audioContext = new AudioContextClass();
  } catch {
    audioContext = null;
  }
  return audioContext;
}

/** Cria/retoma o contexto de áudio após um gesto do usuário. */
export function unlockAudio() {
  const context = ensureContext();
  if (!context) return false;
  if (context.state === "suspended") {
    context.resume?.().catch?.(() => {});
  }
  return true;
}

/**
 * Instala ouvintes únicos para desbloquear o áudio no primeiro toque/tecla.
 * Pode ser chamado mais de uma vez sem duplicar ouvintes.
 */
export function installSoundUnlock(target = globalThis.document) {
  if (unlockInstalled || !target?.addEventListener) return;
  unlockInstalled = true;
  const unlock = () => {
    if (getSettings().soundEnabled !== false) unlockAudio();
    target.removeEventListener("pointerdown", unlock, true);
    target.removeEventListener("keydown", unlock, true);
  };
  target.addEventListener("pointerdown", unlock, true);
  target.addEventListener("keydown", unlock, true);
}

function playTone(context, note, startAt, volume) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const peak = Math.max(0.0001, note.gain * volume);
  const end = startAt + note.dur;

  oscillator.type = note.type || "sine";
  oscillator.frequency.setValueAtTime(note.freq, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(peak, startAt + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(end + 0.02);
}

/**
 * Toca um efeito pelo nome. Retorna `true` quando o áudio foi agendado.
 * `force` permite ouvir a prévia mesmo com o som desativado.
 */
export function playSound(name, { force = false, settings = getSettings() } = {}) {
  if (!force && settings?.soundEnabled === false) return false;
  const pattern = PATTERNS[name];
  if (!pattern) return false;

  const context = ensureContext();
  if (!context) return false;
  if (context.state === "suspended") {
    context.resume?.().catch?.(() => {});
  }

  try {
    const volume = clampVolume(settings?.soundVolume ?? 0.6);
    if (volume <= 0) return false;
    const now = context.currentTime + 0.01;
    for (const note of pattern) playTone(context, note, now + note.at, volume);
    return true;
  } catch {
    return false;
  }
}

/** Exposto para testes: libera o contexto simulado entre execuções. */
export function resetSoundForTests() {
  audioContext = null;
  unlockInstalled = false;
}
