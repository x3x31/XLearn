/**
 * parser.js — interpretação de materiais Markdown do XLearn.
 *
 * Módulo puro (sem DOM e sem APIs de navegador) para poder ser usado tanto
 * pelo aplicativo quanto pelo gerador de manifesto em Node.
 *
 * Formato suportado (o mesmo dos arquivos reais em questoes/):
 *   ---
 *   chave: "valor"
 *   ---
 *   # Título
 *   ## Questão 0001
 *   ```json
 *   { ... }
 *   ```
 *
 * Nenhum HTML do arquivo é executado ou interpretado.
 */

const FRONTMATTER_RE = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/;
const JSON_BLOCK_RE = /```json[^\n]*\r?\n([\s\S]*?)```/gi;
const H1_RE = /^#[ \t]+(.+)$/m;
const QUESTION_HEADING_RE = /^##[ \t]+Quest[aã]o[ \t]+(\d+)[ \t]*$/gim;

function parseScalar(raw) {
  const value = raw.trim();
  if (value === "") return "";
  if (value === "null" || value === "~") return null;
  if (value === "true") return true;
  if (value === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value);
  if (value.startsWith('"') && value.endsWith('"')) {
    try {
      return JSON.parse(value);
    } catch {
      return value.slice(1, -1);
    }
  }
  if (value.startsWith("'") && value.endsWith("'")) {
    return value.slice(1, -1).replace(/''/g, "'");
  }
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(",").map((item) => parseScalar(item));
  }
  return value;
}

/**
 * Lê o cabeçalho YAML simples (chave: valor) usado pelos materiais.
 * @returns {{data: Record<string, unknown>, body: string, found: boolean}}
 */
export function parseFrontmatter(text) {
  const source = String(text ?? "");
  const match = FRONTMATTER_RE.exec(source);
  if (!match) return { data: {}, body: source, found: false };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf(":");
    if (separator <= 0) continue;
    const key = trimmed.slice(0, separator).trim();
    const raw = trimmed.slice(separator + 1);
    if (!key) continue;
    data[key] = parseScalar(raw);
  }
  return { data, body: source.slice(match[0].length), found: true };
}

function asString(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return "";
}

function humanizeFilename(path) {
  const base = String(path ?? "material")
    .split("/")
    .pop()
    .replace(/\.md$/i, "")
    .replace(/^ESTUDO[_-]?/i, "")
    .replace(/[_-]+/g, " ")
    .trim();
  return base || "Material de estudo";
}

/**
 * Normaliza uma questão bruta do JSON para o formato interno.
 * @returns {{question: object|null, warnings: object[]}}
 */
export function normalizeQuestion(raw, context = {}) {
  const warnings = [];
  const push = (code, message, level = "error") =>
    warnings.push({ level, code, message });

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    push("invalid-question", "O bloco JSON não contém um objeto de questão.");
    return { question: null, warnings };
  }

  const id = asString(raw.id);
  const text = asString(raw.question_text ?? raw.text ?? raw.statement);
  if (!id) push("missing-id", "Questão sem o campo obrigatório 'id'.");
  if (!text) push("missing-text", `Questão ${id || "(sem id)"} sem enunciado.`);

  if (!Array.isArray(raw.alternatives) || raw.alternatives.length < 2) {
    push("invalid-alternatives", `Questão ${id || "(sem id)"} precisa de pelo menos duas alternativas.`);
  }

  const alternatives = [];
  const seenAltIds = new Set();
  const rawAlternatives = Array.isArray(raw.alternatives) ? raw.alternatives : [];

  rawAlternatives.forEach((alt, index) => {
    if (!alt || typeof alt !== "object") {
      push("invalid-alternative", `Questão ${id || "(sem id)"}: alternativa ${index + 1} inválida.`);
      return;
    }
    const altId = asString(alt.id) || String.fromCharCode(65 + index);
    const altText = asString(alt.text);
    if (!altText) {
      push("empty-alternative", `Questão ${id || "(sem id)"}: alternativa ${altId} sem texto.`);
      return;
    }
    if (seenAltIds.has(altId)) {
      push("duplicate-alternative-id", `Questão ${id || "(sem id)"}: alternativa duplicada '${altId}'.`);
      return;
    }
    seenAltIds.add(altId);
    alternatives.push({
      id: altId,
      text: altText,
      explanation: asString(alt.explanation),
      isCorrect: alt.is_correct === true,
    });
  });

  const flagged = alternatives.filter((alt) => alt.isCorrect).map((alt) => alt.id);
  const answerKey = asString(raw.answer_key).toUpperCase();
  let correctId = "";

  if (answerKey && seenAltIds.has(answerKey)) {
    correctId = answerKey;
    if (flagged.length === 1 && flagged[0] !== answerKey) {
      push(
        "answer-key-mismatch",
        `Questão ${id || "(sem id)"}: answer_key '${answerKey}' diverge de is_correct '${flagged[0]}'. Prevalece answer_key.`,
        "warning"
      );
    }
    if (flagged.length > 1) {
      push(
        "multiple-correct",
        `Questão ${id || "(sem id)"}: mais de uma alternativa marcada como correta. Prevalece answer_key.`,
        "warning"
      );
    }
  } else if (answerKey) {
    push(
      "unknown-answer-key",
      `Questão ${id || "(sem id)"}: answer_key '${answerKey}' não corresponde a nenhuma alternativa.`,
    );
  } else if (flagged.length === 1) {
    correctId = flagged[0];
    push(
      "missing-answer-key",
      `Questão ${id || "(sem id)"}: answer_key ausente; usando is_correct '${correctId}'.`,
      "warning"
    );
  } else if (flagged.length > 1) {
    push("multiple-correct", `Questão ${id || "(sem id)"}: mais de uma alternativa correta.`);
  } else {
    push("no-correct", `Questão ${id || "(sem id)"}: nenhuma alternativa correta identificada.`);
  }

  if (warnings.some((warning) => warning.level === "error")) {
    return { question: null, warnings };
  }

  const explanationRaw =
    raw.explanation && typeof raw.explanation === "object" ? raw.explanation : {};
  const explanation = {
    resolution: asString(explanationRaw.resolution),
    theoreticalContent: asString(explanationRaw.theoretical_content),
    bankApproach: asString(explanationRaw.bank_approach),
    studyTip: asString(explanationRaw.study_tip),
    reviewSummary: asString(explanationRaw.review_summary),
  };

  const sourceRaw = raw.source && typeof raw.source === "object" ? raw.source : {};
  const source = {
    exam: asString(sourceRaw.exam) || null,
    year: sourceRaw.year ?? null,
    questionNumber: sourceRaw.question_number ?? null,
    page: sourceRaw.page ?? null,
  };

  const subject = asString(raw.subject) || context.subject || "Geral";
  const topic = asString(raw.topic) || "Geral";
  const subtopic = asString(raw.subtopic);

  return {
    question: {
      id,
      materialId: context.materialId || "",
      materialTitle: context.materialTitle || "",
      type: asString(raw.type) || "generated",
      source,
      subject,
      topic,
      subtopic,
      difficulty: asString(raw.difficulty) || "medium",
      cognitiveSkill: asString(raw.cognitive_skill) || "",
      text,
      alternatives: alternatives.map((alt) => ({
        ...alt,
        isCorrect: alt.id === correctId,
      })),
      correctId,
      answerKey: correctId,
      explanation,
      originalIndex: context.index ?? null,
    },
    warnings,
  };
}

/**
 * Interpreta um material completo.
 * @param {string} text conteúdo do arquivo Markdown
 * @param {{path?: string, materialId?: string}} options
 */
export function parseMaterial(text, options = {}) {
  const path = options.path || "questoes/material.md";
  const { data: frontmatter, body, found: hasFrontmatter } = parseFrontmatter(text);
  const titleMatch = H1_RE.exec(body);
  const title = asString(titleMatch?.[1]) || humanizeFilename(path);
  const materialId =
    asString(frontmatter.material_id) || options.materialId || humanizeFilename(path);

  const warnings = [];
  if (!hasFrontmatter) {
    warnings.push({
      level: "warning",
      code: "missing-frontmatter",
      message: "Arquivo sem frontmatter YAML; metadados derivados do nome do arquivo.",
    });
  }

  // Coleta os títulos "## Questão NNNN" para usar como pista de diagnóstico.
  const headings = [];
  let headingMatch;
  QUESTION_HEADING_RE.lastIndex = 0;
  while ((headingMatch = QUESTION_HEADING_RE.exec(body)) !== null) {
    headings.push(Number(headingMatch[1]));
  }

  const questions = [];
  const seenIds = new Set();
  const blocks = [...body.matchAll(JSON_BLOCK_RE)];
  if (blocks.length === 0) {
    warnings.push({
      level: "error",
      code: "no-question-blocks",
      message: "Nenhum bloco ```json encontrado no material.",
    });
  }

  blocks.forEach((block, index) => {
    let raw;
    try {
      raw = JSON.parse(block[1]);
    } catch (error) {
      warnings.push({
        level: "error",
        code: "invalid-json",
        message: `Bloco JSON ${index + 1} inválido: ${error.message}`,
      });
      return;
    }

    const { question, warnings: questionWarnings } = normalizeQuestion(raw, {
      materialId,
      materialTitle: title,
      subject: asString(frontmatter.subject),
      index: index + 1,
    });
    warnings.push(...questionWarnings);

    if (!question) return;
    if (seenIds.has(question.id)) {
      warnings.push({
        level: "error",
        code: "duplicate-question-id",
        message: `Questão duplicada '${question.id}' ignorada.`,
      });
      return;
    }
    seenIds.add(question.id);
    questions.push(question);
  });

  const declared = Number(frontmatter.total_questions);
  if (Number.isFinite(declared) && declared !== questions.length) {
    warnings.push({
      level: "warning",
      code: "question-count-mismatch",
      message: `O frontmatter declara ${declared} questões, mas foram carregadas ${questions.length}.`,
    });
  }
  if (headings.length && blocks.length && headings.length !== blocks.length) {
    warnings.push({
      level: "warning",
      code: "heading-count-mismatch",
      message: `Há ${headings.length} títulos "## Questão" e ${blocks.length} blocos JSON.`,
    });
  }

  const meta = {
    path,
    title,
    materialId,
    bank: asString(frontmatter.bank),
    subject: asString(frontmatter.subject),
    topic: asString(frontmatter.topic),
    language: asString(frontmatter.language) || "pt-BR",
    schemaVersion: asString(frontmatter.schema_version),
    createdAt: asString(frontmatter.created_at),
    declaredQuestions: Number.isFinite(declared) ? declared : null,
    questionCount: questions.length,
  };

  return {
    meta,
    questions,
    warnings,
    valid: questions.length > 0 && !warnings.some((warning) => warning.level === "error"),
  };
}

/** Fisher–Yates com função aleatória injetável (testável). */
export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/** PRNG determinístico (mulberry32) para ordem estável por sessão/questão. */
export function seededRandom(seed) {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(value) {
  let hash = 2166136261;
  const text = String(value);
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
