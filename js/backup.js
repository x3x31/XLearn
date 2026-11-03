/**
 * backup.js — formato e validação do backup local do XLearn.
 *
 * O backup é um JSON versionado com os quatro stores do IndexedDB. A validação
 * é feita antes de qualquer escrita para que um arquivo inválido não altere os
 * dados existentes. Não há execução de código nem interpretação de HTML.
 */

export const BACKUP_FORMAT = "xlearn-backup";
export const BACKUP_VERSION = 1;
export const BACKUP_STORES = ["meta", "progress", "sessions", "attempts"];

const KEY_FIELDS = {
  meta: "key",
  progress: "key",
  sessions: "id",
  attempts: "key",
};

function count(store, data) {
  return Array.isArray(data?.[store]) ? data[store].length : 0;
}

/** Cria o envelope exportável a partir dos registros brutos do IndexedDB. */
export function createBackup(data, now = new Date()) {
  const source = data && typeof data === "object" ? data : {};
  return {
    app: "XLearn",
    format: BACKUP_FORMAT,
    schemaVersion: BACKUP_VERSION,
    exportedAt: (now instanceof Date ? now : new Date(now)).toISOString(),
    summary: {
      progress: count("progress", source),
      sessions: count("sessions", source),
      attempts: count("attempts", source),
      hasSettings: (source.meta || []).some((record) => record?.key === "settings"),
      hasGamification: (source.meta || []).some((record) => record?.key === "gamification"),
      hasWallet: (source.meta || []).some((record) => record?.key === "wallet"),
    },
    data: {
      meta: Array.isArray(source.meta) ? source.meta : [],
      progress: Array.isArray(source.progress) ? source.progress : [],
      sessions: Array.isArray(source.sessions) ? source.sessions : [],
      attempts: Array.isArray(source.attempts) ? source.attempts : [],
    },
  };
}

function validateStore(store, records) {
  if (!Array.isArray(records)) {
    return `O backup não contém a lista "${store}".`;
  }
  const keyField = KEY_FIELDS[store];
  const seen = new Set();
  for (const record of records) {
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      return `Há um registro inválido em "${store}".`;
    }
    const key = record[keyField];
    if (typeof key !== "string" || key.length === 0) {
      return `Há um registro sem "${keyField}" em "${store}".`;
    }
    if (seen.has(key)) {
      return `O backup tem chaves duplicadas em "${store}".`;
    }
    seen.add(key);
  }
  return null;
}

/**
 * Valida o envelope e os registros. Retorna `{ ok, error }` ou
 * `{ ok: true, backup, summary }` sem lançar exceções.
 */
export function validateBackup(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, error: "O arquivo não contém um objeto de backup válido." };
  }
  if (raw.format !== BACKUP_FORMAT || raw.app !== "XLearn") {
    return { ok: false, error: "Este arquivo não é um backup do XLearn." };
  }
  if (raw.schemaVersion !== BACKUP_VERSION) {
    return { ok: false, error: "A versão do backup não é compatível com esta versão do XLearn." };
  }
  if (!raw.data || typeof raw.data !== "object" || Array.isArray(raw.data)) {
    return { ok: false, error: "O backup não contém o bloco de dados esperado." };
  }
  for (const store of BACKUP_STORES) {
    const problem = validateStore(store, raw.data[store]);
    if (problem) return { ok: false, error: problem };
  }

  const backup = createBackup(raw.data, new Date(raw.exportedAt || Date.now()));
  return {
    ok: true,
    backup,
    summary: {
      progress: backup.data.progress.length,
      sessions: backup.data.sessions.length,
      attempts: backup.data.attempts.length,
      hasSettings: backup.summary.hasSettings,
      hasGamification: backup.summary.hasGamification,
      hasWallet: backup.summary.hasWallet,
      exportedAt: raw.exportedAt || null,
    },
  };
}
