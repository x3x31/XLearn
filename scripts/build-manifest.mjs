#!/usr/bin/env node
/**
 * build-manifest.mjs — descobre os materiais em questoes/ e gera o manifesto.
 *
 * Uso:
 *   node scripts/build-manifest.mjs          # grava questoes/manifest.json
 *   node scripts/build-manifest.mjs --check  # valida sem gravar; falha se houver erro
 *
 * O manifesto é a única fonte de descoberta de provas do aplicativo.
 * Nenhuma prova é cadastrada manualmente no código.
 */

import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseMaterial } from "../js/parser.js";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(SCRIPT_DIR, "..");
const QUESTIONS_DIR = path.join(ROOT, "questoes");
const MANIFEST_PATH = path.join(QUESTIONS_DIR, "manifest.json");
const CHECK_ONLY = process.argv.includes("--check");

const IGNORED_DIRS = new Set([".git", "node_modules", "outros"]);
const IGNORED_FILES = new Set(["manifest.json", "README.md"]);

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      files.push(...(await findMarkdownFiles(absolute)));
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name)) continue;
      if (!entry.name.toLowerCase().endsWith(".md")) continue;
      files.push(absolute);
    }
  }
  return files;
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function summarizeWarnings(warnings) {
  return warnings.map(({ level, code, message }) => ({ level, code, message }));
}

async function build() {
  const absoluteFiles = await findMarkdownFiles(QUESTIONS_DIR);
  absoluteFiles.sort((a, b) => toPosix(a).localeCompare(toPosix(b)));

  const files = [];
  const seenMaterialIds = new Map();
  let totalQuestions = 0;
  let invalidCount = 0;
  let errorCount = 0;
  let warningCount = 0;

  for (const absolute of absoluteFiles) {
    const relative = toPosix(path.relative(ROOT, absolute));
    const buffer = await readFile(absolute);
    const text = buffer.toString("utf8");
    const parsed = parseMaterial(text, { path: relative });
    const errors = parsed.warnings.filter((item) => item.level === "error");
    const warnings = parsed.warnings.filter((item) => item.level !== "error");
    const valid = parsed.valid && errors.length === 0;

    if (!valid) invalidCount += 1;
    errorCount += errors.length;
    warningCount += warnings.length;

    if (parsed.meta.materialId) {
      const existing = seenMaterialIds.get(parsed.meta.materialId);
      if (existing) {
        parsed.warnings.push({
          level: "warning",
          code: "duplicate-material-id",
          message: `material_id '${parsed.meta.materialId}' também usado por ${existing}.`,
        });
        warningCount += 1;
      } else {
        seenMaterialIds.set(parsed.meta.materialId, relative);
      }
    }

    totalQuestions += parsed.questions.length;

    files.push({
      path: relative,
      file: path.posix.basename(relative),
      title: parsed.meta.title,
      materialId: parsed.meta.materialId || null,
      bank: parsed.meta.bank || null,
      subject: parsed.meta.subject || null,
      topic: parsed.meta.topic || null,
      language: parsed.meta.language,
      questionCount: parsed.questions.length,
      declaredQuestions: parsed.meta.declaredQuestions,
      sizeBytes: buffer.byteLength,
      sha256: sha256(buffer),
      valid,
      errors: summarizeWarnings(errors),
      warnings: summarizeWarnings(warnings),
    });
  }

  const manifest = {
    schemaVersion: 1,
    generator: "scripts/build-manifest.mjs",
    generatedAt: new Date().toISOString(),
    summary: {
      materials: files.length,
      validMaterials: files.length - invalidCount,
      invalidMaterials: invalidCount,
      questions: totalQuestions,
      errors: errorCount,
      warnings: warningCount,
    },
    files,
  };

  const json = `${JSON.stringify(manifest, null, 2)}\n`;

  if (!CHECK_ONLY) {
    await writeFile(MANIFEST_PATH, json, "utf8");
  }

  // Relatório legível para o desenvolvedor.
  console.log(`XLearn — manifesto de questões`);
  console.log(`Materiais encontrados: ${files.length}`);
  console.log(`Questões carregadas:  ${totalQuestions}`);
  console.log(`Materiais inválidos:  ${invalidCount}`);
  console.log(`Avisos: ${warningCount} | Erros: ${errorCount}`);
  for (const file of files) {
    const status = file.valid ? "OK " : "ERRO";
    console.log(`  [${status}] ${file.path} — ${file.questionCount} questão(ões)`);
    for (const issue of [...file.errors, ...file.warnings]) {
      console.log(`         ${issue.level === "error" ? "✖" : "⚠"} ${issue.code}: ${issue.message}`);
    }
  }
  console.log(CHECK_ONLY ? "Modo --check: manifesto não foi gravado." : `Manifesto gravado em ${toPosix(path.relative(ROOT, MANIFEST_PATH))}.`);

  if (files.length === 0 || totalQuestions === 0) {
    console.error("Nenhum material válido encontrado em questoes/.");
    process.exitCode = 1;
  }
  if (CHECK_ONLY && (invalidCount > 0 || errorCount > 0)) {
    process.exitCode = 1;
  }
}

build().catch((error) => {
  console.error("Falha ao gerar o manifesto:", error);
  process.exitCode = 1;
});
