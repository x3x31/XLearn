/**
 * ranking.js — ranking local calculado apenas com dados do dispositivo.
 *
 * Não existe comparação entre estudantes nem dados fictícios. Para evitar que
 * uma única resposta correta lidere por acaso, a posição usa o limite inferior
 * do intervalo de confiança de 95% para uma proporção (método de Wilson), que
 * combina precisão e volume de respostas.
 */

const Z_95 = 1.96;

/**
 * Limite inferior do intervalo de confiança de Wilson para uma proporção.
 * Retorna um valor entre 0 e 1; amostras pequenas recebem pontuação menor.
 */
export function wilsonLowerBound(correct, answered, z = Z_95) {
  const total = Number(answered) || 0;
  if (total <= 0) return 0;
  const hits = Math.max(0, Math.min(Number(correct) || 0, total));
  const proportion = hits / total;
  const z2 = z * z;
  const denominator = 1 + z2 / total;
  const centre = proportion + z2 / (2 * total);
  const margin = z * Math.sqrt((proportion * (1 - proportion) + z2 / (4 * total)) / total);
  return Math.max(0, Math.min(1, (centre - margin) / denominator));
}

function toNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function summarize(item, totals) {
  const answered = toNumber(totals.answered);
  const correct = Math.min(toNumber(totals.correct), answered);
  return {
    id: item.id,
    title: item.title,
    subtitle: item.subtitle || "",
    answered,
    correct,
    accuracy: answered > 0 ? Math.round((correct / answered) * 100) : 0,
    score: Math.round(wilsonLowerBound(correct, answered) * 100),
  };
}

function sortRanking(items) {
  return items
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.answered - a.answered ||
        b.accuracy - a.accuracy ||
        a.title.localeCompare(b.title, "pt-BR")
    )
    .map((item, index) => ({ ...item, position: index + 1 }));
}

/**
 * Constrói o ranking de provas e disciplinas a partir do manifesto e das
 * estatísticas agregadas (`stats.byMaterial` é indexado pelo caminho do
 * material). Itens sem nenhuma resposta são omitidos.
 */
export function buildRanking(entries = [], stats = {}) {
  const byMaterial = stats?.byMaterial || {};
  const materialItems = [];
  const subjectMap = new Map();

  for (const entry of entries) {
    const totals = byMaterial[entry.path] || byMaterial[entry.materialId];
    const answered = toNumber(totals?.answered);
    if (answered <= 0) continue;

    const subject = entry.subject || "Geral";
    materialItems.push(
      summarize(
        {
          id: entry.materialId || entry.path,
          title: entry.title || entry.file || entry.path,
          subtitle: subject,
        },
        totals
      )
    );

    const current = subjectMap.get(subject) || { id: subject, title: subject, answered: 0, correct: 0 };
    current.answered += answered;
    current.correct += Math.min(toNumber(totals.correct), answered);
    subjectMap.set(subject, current);
  }

  return {
    materials: sortRanking(materialItems),
    subjects: sortRanking([...subjectMap.values()].map((item) => summarize(item, item))),
  };
}

/** Texto curto que explica a origem e o critério do ranking. */
export const RANKING_DISCLOSURE =
  "Ranking apenas deste dispositivo, sem comparação com outros estudantes. O índice usa o limite inferior de confiança de 95% (Wilson), equilibrando precisão e quantidade de respostas.";
