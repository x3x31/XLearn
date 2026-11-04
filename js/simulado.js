/**
 * simulado.js — regras dos simulados por assunto.
 *
 * Módulo puro: não acessa DOM, IndexedDB nem o fluxo normal de sessões.
 * Simulados têm histórico próprio e nunca alimentam progresso, XP, conquistas,
 * SRS, ranking, estatísticas ou moedas.
 */

export const SIMULADO_VERSION = 1;

/** Identificador único de uma questão dentro de um simulado multi-material. */
export function simuladoQuestionKey(materialId, questionId) {
  return `${materialId}::${questionId}`;
}

function nonNegativeInteger(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.trunc(number) : 0;
}

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeSubjectRow(raw) {
  if (!raw || typeof raw !== "object") return null;
  const subject = text(raw.subject) || "Geral";
  const total = nonNegativeInteger(raw.total);
  const correct = Math.min(nonNegativeInteger(raw.correct), total);
  const answered = Math.min(Math.max(nonNegativeInteger(raw.answered), correct), total);
  return { subject, total, correct, answered };
}

function normalizeResult(raw) {
  if (!raw || typeof raw !== "object") return null;
  const id = text(raw.id);
  if (!id) return null;

  const subjects = Array.isArray(raw.subjects)
    ? raw.subjects.map(normalizeSubjectRow).filter(Boolean)
    : [];
  const subjectTotal = subjects.reduce((sum, item) => sum + item.total, 0);
  const subjectCorrect = subjects.reduce((sum, item) => sum + item.correct, 0);
  const subjectAnswered = subjects.reduce((sum, item) => sum + item.answered, 0);
  const total = Math.max(nonNegativeInteger(raw.total), subjectTotal);
  const answered = Math.min(Math.max(nonNegativeInteger(raw.answered), subjectAnswered), total);
  const correct = Math.min(Math.max(nonNegativeInteger(raw.correct), subjectCorrect), answered);

  return {
    id,
    startedAt: text(raw.startedAt) || null,
    finishedAt: text(raw.finishedAt) || null,
    durationMs: nonNegativeInteger(raw.durationMs),
    total,
    answered,
    correct,
    wrong: Math.max(0, answered - correct),
    unanswered: Math.max(0, total - answered),
    subjects,
  };
}

function sortResults(sessions) {
  return [...sessions].sort((a, b) =>
    String(b.finishedAt || "").localeCompare(String(a.finishedAt || ""))
  );
}

/** Normaliza o histórico, aceitando também o formato antigo em array. */
export function createSimuladoHistory(raw = {}) {
  const sessions = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.sessions)
      ? raw.sessions
      : [];
  const seen = new Set();
  const cleaned = [];
  for (const item of sessions) {
    const result = normalizeResult(item);
    if (!result || seen.has(result.id)) continue;
    seen.add(result.id);
    cleaned.push(result);
  }
  return { version: SIMULADO_VERSION, sessions: sortResults(cleaned) };
}

/** Calcula o resultado de um simulado a partir das questões efetivamente usadas. */
export function summarizeSimulado(session, questions = []) {
  const byId = new Map(
    (Array.isArray(questions) ? questions : [])
      .filter((question) => question && typeof question.id === "string")
      .map((question) => [question.id, question])
  );
  const ids = Array.isArray(session?.questionIds) ? session.questionIds : [];
  const answers = session?.answers && typeof session.answers === "object" ? session.answers : {};
  const bySubject = new Map();
  let correct = 0;
  let answered = 0;

  for (const id of ids) {
    const question = byId.get(id);
    if (!question) continue;
    const subject = text(question.subject) || "Geral";
    const row = bySubject.get(subject) || { subject, total: 0, correct: 0, answered: 0 };
    row.total += 1;
    const answer = answers[id];
    if (answer) {
      row.answered += 1;
      answered += 1;
      if (answer.correct) {
        row.correct += 1;
        correct += 1;
      }
    }
    bySubject.set(subject, row);
  }

  const total = ids.length;
  const subjects = [...bySubject.values()].sort((a, b) =>
    a.subject.localeCompare(b.subject, "pt-BR")
  );
  return {
    id: text(session?.id) || "",
    startedAt: text(session?.startedAt) || null,
    finishedAt: text(session?.finishedAt) || null,
    durationMs: Math.max(0, Number(session?.durationMs) || 0),
    total,
    answered,
    correct,
    wrong: Math.max(0, answered - correct),
    unanswered: Math.max(0, total - answered),
    subjects,
  };
}

/** Acrescenta um resultado ao histórico de forma idempotente (mesmo id não duplica). */
export function appendSimuladoResult(history, result) {
  const base = createSimuladoHistory(history);
  const normalized = normalizeResult(result);
  if (!normalized || base.sessions.some((item) => item.id === normalized.id)) return base;
  return {
    version: SIMULADO_VERSION,
    sessions: sortResults([normalized, ...base.sessions]),
  };
}

/** Agrega o histórico separado por assunto, para exibição na tela de simulados. */
export function aggregateSimuladoHistory(history) {
  const normalized = createSimuladoHistory(history);
  const bySubject = new Map();
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;

  for (const session of normalized.sessions) {
    totalQuestions += session.total;
    totalAnswered += session.answered;
    totalCorrect += session.correct;
    for (const row of session.subjects) {
      const current = bySubject.get(row.subject) || {
        subject: row.subject,
        total: 0,
        answered: 0,
        correct: 0,
      };
      current.total += row.total;
      current.answered += row.answered;
      current.correct += row.correct;
      bySubject.set(row.subject, current);
    }
  }

  return {
    sessions: normalized.sessions,
    totalSessions: normalized.sessions.length,
    totalQuestions,
    totalAnswered,
    totalCorrect,
    accuracy: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
    subjects: [...bySubject.values()]
      .map((item) => ({
        ...item,
        accuracy: item.total > 0 ? Math.round((item.correct / item.total) * 100) : 0,
      }))
      .sort((a, b) => a.subject.localeCompare(b.subject, "pt-BR")),
  };
}

/** Percentual inteiro de acertos, sem divisão por zero. */
export function simuladoAccuracy(correct, total) {
  const safeTotal = nonNegativeInteger(total);
  if (safeTotal === 0) return 0;
  return Math.round((nonNegativeInteger(correct) / safeTotal) * 100);
}
