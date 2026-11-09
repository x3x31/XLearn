# 06 — Conteúdo e parser

O XLearn não mantém catálogo de provas no código. Todo material vem de arquivos Markdown padronizados em `questoes/`, descobertos por um gerador que produz `questoes/manifest.json`. O parser é puro — sem DOM e sem APIs de navegador — para funcionar tanto no app quanto no Node.

## 1. Pipeline de conteúdo

```text
questoes/*.md
     │
     ▼
scripts/build-manifest.mjs ──► js/parser.js (parseMaterial)
     │
     ├── valida frontmatter, blocos JSON e questões
     ├── calcula contagem, tamanho e sha256
     └── grava questoes/manifest.json
                     │
                     ▼
            js/questions.js (fetch + cache)
                     │
                     ▼
              js/app.js (catálogo e sessões)
```

### 1.1 Descoberta de arquivos

`build-manifest.mjs` percorre `questoes/` recursivamente.

| Regra | Valor |
|---|---|
| Extensão aceita | `.md` (sem diferenciar maiúsculas) |
| Ignorados | diretórios `.git`, `node_modules`, `outros`; arquivos `manifest.json` e `README.md` |
| Arquivos ocultos | ignorados |
| Ordenação | caminho POSIX em ordem alfabética |
| Saída | `questoes/manifest.json` |

Qualquer `.md` válido em subdiretório de `questoes/` também entra no manifesto, com caminho relativo à raiz do repositório.

### 1.2 Comandos

```bash
node scripts/build-manifest.mjs          # regenera o manifesto
node scripts/build-manifest.mjs --check  # valida sem gravar
npm run check                            # atalho para --check
```

`--check` falha com código de saída diferente de zero quando há material inválido ou erro de parsing. Avisos não falham a validação.

## 2. Formato do material Markdown

### 2.1 Estrutura

````markdown
---
schema_version: "1.0"
material_id: "MAT-BD-COMPERVE-001"
bank: "COMPERVE"
subject: "Banco de Dados"
topic: "Conceitos, modelos, projeto conceitual, lógico e físico, linguagens de consulta, bancos distribuídos, SGBDs e SQL"
requested_questions: 50
original_questions: 0
generated_questions: 50
total_questions: 50
created_at: "2026-11-01"
language: "pt-BR"
---

# Banco de Dados — 50 questões inéditas no estilo COMPERVE

Texto introdutório livre, sem efeito no parser.

## Questões

## Questão 0001

```json
{ ...questão... }
```

## Questão 0002

```json
{ ...questão... }
```
````

### 2.2 Frontmatter

O frontmatter é delimitado por `---` na primeira linha (BOM opcional) e por outro `---`. O parser aceita um subconjunto simples de YAML: `chave: valor`, uma chave por linha.

| Chave | Obrigatória | Uso |
|---|---|---|
| `material_id` | Recomendada | Identificador do material; fallback para o nome do arquivo |
| `subject` | Recomendada | Disciplina padrão das questões e agrupamento de simulados |
| `topic` | Opcional | Assunto geral exibido no catálogo |
| `bank` | Opcional | Banca exibida no cartão da prova |
| `language` | Opcional | Padrão `pt-BR` |
| `schema_version` | Opcional | Versão do formato; não bloqueia o parsing |
| `created_at` | Opcional | Data do material |
| `total_questions` | Opcional | Usada para detectar divergência de contagem |
| `requested_questions`, `original_questions`, `generated_questions` | Opcionais | Metadados editoriais preservados no arquivo, não usados pelo app |

Valores escalares aceitos:

- `null` e `~` → `null`;
- `true` / `false` → booleanos;
- inteiros e decimais → número;
- `"..."` → string JSON;
- `'...'` → string simples com `''` convertido em `'`;
- `[a, b, c]` → array por vírgulas;
- demais valores → string.

Linhas vazias e iniciadas por `#` são ignoradas. Linhas sem `:` válido também são ignoradas.

### 2.3 Título

- O `h1` (`# Título`) do corpo é usado como título.
- Sem `h1`, o título é derivado do nome do arquivo: remove `.md`, prefixo `ESTUDO_`/`ESTUDO-` e troca `_`/`-` por espaço.

### 2.4 Blocos de questão

- O parser coleta todos os blocos ```` ```json ```` do corpo, independentemente do título `## Questão NNNN`.
- Títulos `## Questão NNNN` servem apenas para diagnóstico de contagem.
- Cada bloco deve conter **um objeto JSON** de questão.
- O JSON é lido com `JSON.parse`; nunca é executado.
- Blocos inválidos geram erro e não entram no material.
- Questões fora de blocos `json` não são lidas.

## 3. Esquema da questão

```json
{
  "id": "MAT-BD-COMPERVE-001-Q0001",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "Dados, informação e conhecimento",
  "difficulty": "easy",
  "cognitive_skill": "comprehension",
  "question_text": "Enunciado da questão.",
  "alternatives": [
    {
      "id": "A",
      "text": "Alternativa A.",
      "is_correct": false,
      "explanation": "Comentário da alternativa."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Resolução comentada.",
    "theoretical_content": "Fundamentação teórica."
  }
}
```

### 3.1 Campos

| Campo | Tipo | Obrigatório | Normalização |
|---|---|---|---|
| `id` | string | Sim | Aparado; vazio gera erro |
| `question_text` | string | Sim | Aceita também `text` ou `statement`; vazio gera erro |
| `alternatives` | array | Sim | Pelo menos 2 itens válidos |
| `alternatives[].id` | string | Não | Fallback `A`, `B`, `C`… pela posição |
| `alternatives[].text` | string | Sim | Alternativa vazia é descartada |
| `alternatives[].is_correct` | boolean | Não | Só `true` marca correta; usado como fallback do gabarito |
| `alternatives[].explanation` | string | Não | Comentário individual da alternativa |
| `answer_key` | string | Recomendado | Convertido para maiúsculas; prevalece sobre `is_correct` |
| `explanation.resolution` | string | Não | Exibida no feedback |
| `explanation.theoretical_content` | string | Não | Exibida como fundamentação |
| `type` | string | Não | Padrão `generated` |
| `source` | objeto | Não | `exam`, `year`, `question_number`, `page` normalizados |
| `subject` | string | Não | Fallback para o `subject` do frontmatter; depois `Geral` |
| `topic` | string | Não | Padrão `Geral` |
| `subtopic` | string | Não | Pode ser vazio |
| `difficulty` | string | Não | Padrão `medium`; os valores usados no projeto são `easy`, `medium` e `hard` |
| `cognitive_skill` | string | Não | Pode ser vazio |

### 3.2 Campos legados ignorados

Desde REQ-039, o parser não lê nem a interface exibe:

- `explanation.bank_approach`;
- `explanation.study_tip`;
- `explanation.review_summary`.

Esses campos podem continuar nos arquivos por compatibilidade editorial, mas não têm efeito no app.

## 4. Normalização da questão

`normalizeQuestion(raw, contexto)` produz `{ question, warnings }`.

### 4.1 Ordem das operações

1. Valida que o bloco é objeto (não array, não nulo).
2. Lê `id` e enunciado.
3. Valida `alternatives` como array com pelo menos dois itens.
4. Normaliza cada alternativa, descartando inválidas e vazias.
5. Detecta IDs de alternativa duplicados.
6. Resolve o gabarito (`correctId`).
7. Se houver qualquer erro, retorna `question: null`.
8. Normaliza explicação, origem e metadados.
9. Marca `isCorrect` em todas as alternativas conforme `correctId`.
10. Define `answerKey` igual a `correctId`.

### 4.2 Resolução do gabarito

Prioridade:

1. **`answer_key` válido** — existe entre os IDs de alternativa. É o gabarito, mesmo que `is_correct` divirja.
   - Se `is_correct` aponta para outra alternativa, gera aviso `answer-key-mismatch`.
   - Se mais de uma alternativa tem `is_correct: true`, gera aviso `multiple-correct`.
2. **`answer_key` presente e inválido** — erro `unknown-answer-key`; a questão é descartada.
3. **Sem `answer_key` e exatamente uma alternativa com `is_correct: true`** — usa essa alternativa e gera aviso `missing-answer-key`.
4. **Sem `answer_key` e mais de uma correta** — erro `multiple-correct`.
5. **Nenhuma correta identificada** — erro `no-correct`.

O gabarito é sempre o **ID da alternativa**, nunca a posição visual.

### 4.3 Forma normalizada

```js
{
  id: "MAT-BD-COMPERVE-001-Q0001",
  materialId: "MAT-BD-COMPERVE-001",
  materialTitle: "Banco de Dados — 50 questões inéditas no estilo COMPERVE",
  type: "generated",
  source: { exam: null, year: null, questionNumber: null, page: null },
  subject: "Banco de Dados",
  topic: "Conceitos fundamentais",
  subtopic: "Dados, informação e conhecimento",
  difficulty: "easy",
  cognitiveSkill: "comprehension",
  text: "Enunciado da questão.",
  alternatives: [
    { id: "A", text: "...", explanation: "...", isCorrect: false },
    { id: "B", text: "...", explanation: "...", isCorrect: true }
  ],
  correctId: "B",
  answerKey: "B",
  explanation: {
    resolution: "Resolução comentada.",
    theoreticalContent: "Fundamentação teórica."
  },
  originalIndex: 1
}
```

## 5. Diagnósticos do parser

### 5.1 Erros (invalidam a questão ou o material)

| Código | Causa |
|---|---|
| `invalid-question` | Bloco JSON não é objeto |
| `missing-id` | Questão sem `id` |
| `missing-text` | Questão sem enunciado |
| `invalid-alternatives` | Menos de duas alternativas |
| `invalid-alternative` | Item de alternativa não é objeto |
| `empty-alternative` | Alternativa sem texto |
| `duplicate-alternative-id` | IDs de alternativa repetidos |
| `unknown-answer-key` | `answer_key` não corresponde a nenhuma alternativa |
| `multiple-correct` | Mais de uma correta sem `answer_key` válido |
| `no-correct` | Nenhuma correta identificada |
| `invalid-json` | Bloco JSON malformado |
| `no-question-blocks` | Material sem blocos `json` |
| `duplicate-question-id` | `id` repetido no mesmo material |

### 5.2 Avisos (não invalidam)

| Código | Causa |
|---|---|
| `missing-frontmatter` | Arquivo sem frontmatter; metadados derivados do nome |
| `answer-key-mismatch` | `answer_key` diverge de `is_correct`; prevalece `answer_key` |
| `multiple-correct` | Mais de uma correta, mas `answer_key` válido resolve |
| `missing-answer-key` | Sem `answer_key`, mas uma única correta via `is_correct` |
| `question-count-mismatch` | `total_questions` difere da quantidade carregada |
| `heading-count-mismatch` | Títulos `## Questão` diferem da quantidade de blocos |
| `duplicate-material-id` | Mesmo `material_id` usado por mais de um arquivo (gerado no manifesto) |

### 5.3 Validade do material

```js
valid = questions.length > 0 && !warnings.some(w => w.level === "error");
```

- Material inválido não entra no catálogo (`state.entries`) e é contado em `manifest.summary.invalidMaterials`.
- Um material inválido **não impede** o carregamento dos demais.
- A home mostra aviso quando há materiais inválidos no manifesto.

## 6. Manifesto

### 6.1 Estrutura

```json
{
  "schemaVersion": 1,
  "generator": "scripts/build-manifest.mjs",
  "generatedAt": "2026-11-02T09:00:00.000Z",
  "summary": {
    "materials": 10,
    "validMaterials": 10,
    "invalidMaterials": 0,
    "questions": 1250,
    "errors": 0,
    "warnings": 0
  },
  "files": [
    {
      "path": "questoes/ESTUDO_BANCO_DE_DADOS_COMPERVE_50_QUESTOES.md",
      "file": "ESTUDO_BANCO_DE_DADOS_COMPERVE_50_QUESTOES.md",
      "title": "Banco de Dados — 50 questões inéditas no estilo COMPERVE",
      "materialId": "MAT-BD-COMPERVE-001",
      "bank": "COMPERVE",
      "subject": "Banco de Dados",
      "topic": "Conceitos, modelos, projeto conceitual, lógico e físico, linguagens de consulta, bancos distribuídos, SGBDs e SQL",
      "language": "pt-BR",
      "questionCount": 50,
      "declaredQuestions": 50,
      "sizeBytes": 220419,
      "sha256": "a5a8f7...",
      "valid": true,
      "errors": [],
      "warnings": []
    }
  ]
}
```

- `sha256` identifica o conteúdo de cada arquivo.
- `questionCount` é a quantidade efetivamente parseada.
- `declaredQuestions` vem de `total_questions` quando presente.
- O manifesto é a única fonte de descoberta de provas.

### 6.2 Estado atual

| Métrica | Valor |
|---|---|
| Materiais | 10 |
| Materiais válidos | 10 |
| Materiais inválidos | 0 |
| Questões | 1.250 |
| Erros | 0 |
| Avisos | 0 no `npm run check` atual |

A contagem é validada por `npm run check`, que deve terminar sem erro.

## 7. Carregamento no app

`js/questions.js`:

1. `loadManifest({ force })` busca `questoes/manifest.json` com `cache: "no-cache"`; `force` usa `reload`.
2. `assertManifest` valida `files`, caminho `.md` e duplicatas de caminho.
3. O manifesto é cacheado em memória.
4. `loadMaterial(entry)` busca o Markdown, chama `parseMaterial` e guarda o resultado em `materialCache`.
5. `loadMaterial` rejeita material inválido com mensagem clara.
6. O cache em memória evita `fetch` repetido na mesma sessão de página; recarregar o app busca novamente.

O service worker usa rede primeiro para manifesto e materiais, com fallback para a cache de runtime. Isso permite abrir materiais já acessados sem rede.

## 8. Embaralhamento e estabilidade

### 8.1 Alternativas

- O app usa Fisher–Yates (`shuffle`) com PRNG determinístico (`seededRandom` + `hashString`).
- A semente é `sessionId::questionId`.
- A ordem é persistida em `session.orders[questionId]`.
- Ao retomar a sessão, a ordem persistida é reutilizada.
- A correção compara `selectedId` com `question.correctId`, nunca o índice.
- Alternativas são exibidas com seus identificadores originais e mantêm o gabarito.

### 8.2 Questões

- A ordem do pool depende de `settings.questionOrder`:
  - `shuffle`: questões embaralhadas;
  - `sequential`: ordem do material.
- O tamanho é limitado por `settings.sessionSize` e pela quantidade disponível.
- Visitante recebe sempre a primeira questão do material e uma sessão de tamanho 1.
- A sessão persistida guarda `questionIds`, garantindo retomada fiel.

## 9. Segurança do conteúdo

1. O parser não usa `eval`, `Function` ou interpretação de HTML.
2. Textos de materiais são inseridos com `textContent`/nós de texto.
3. `innerHTML` é reservado a ícones SVG constantes definidos no código.
4. Markdown do corpo não é renderizado como HTML: apenas os blocos JSON são lidos.
5. Links, imagens e scripts eventualmente presentes no Markdown são ignorados.
6. JSON malformado é rejeitado sem executar nada.
7. O app nunca confia no `questionCount` declarado para dimensionar estruturas; usa as questões efetivamente parseadas.

## 10. Como adicionar um material

1. Criar `questoes/NOME.md` com frontmatter e blocos JSON no formato acima.
2. Garantir `id` único por questão e `material_id` único por arquivo.
3. Preferir `answer_key` válido e apenas uma alternativa com `is_correct: true`.
4. Manter pelo menos duas alternativas por questão (o padrão editorial é quatro).
5. Executar `npm run check`.
6. Se não houver erros, executar `node scripts/build-manifest.mjs` para gravar o manifesto.
7. Revisar o relatório do gerador e commitar o material e o manifesto juntos.
8. Se o novo material precisar funcionar offline na primeira instalação, avaliar se ele entra no app shell; hoje o shell inclui apenas o manifesto, e materiais são cacheados no primeiro acesso.

## 11. Critérios de aceitação de conteúdo

1. Nenhuma prova é cadastrada manualmente no código.
2. Todo material exibido veio do manifesto e foi validado pelo parser.
3. A correção usa o ID da alternativa, não a posição.
4. `answer_key` prevalece sobre `is_correct`, com aviso quando divergem.
5. Questões sem gabarito inequívoco são rejeitadas.
6. Material inválido não derruba os demais.
7. Textos de materiais nunca são interpretados como HTML.
8. A ordem das alternativas é estável durante a sessão e após retomada.
9. `npm run check` valida 10 materiais e 1.250 questões sem erro.
10. Campos legados de explicação não aparecem na interface.
