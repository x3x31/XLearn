# PROJECT_STATUS — XLearn

> Documento oficial de especificação, evolução, decisões técnicas e pendências do XLearn.
> Deve ser atualizado antes de cada commit de requisito.

---

## A. Identificação do projeto

| Campo | Informação |
|---|---|
| **Nome** | XLearn |
| **Objetivo** | Aplicativo educacional de questões com repetição espaçada e gamificação, executado inteiramente no navegador. |
| **Descrição** | PWA instalável, responsivo e offline-first para estudar a partir de arquivos Markdown padronizados. Permite selecionar provas, responder questões com alternativas embaralhadas, receber feedback e explicações, retomar sessões, agendar revisões, acumular XP e acompanhar estatísticas locais. |
| **Tecnologias** | HTML5, CSS3, JavaScript puro (ES Modules), IndexedDB, localStorage, Cache API, Service Worker, Web App Manifest. |
| **Ambiente de execução** | Navegador moderno (Chrome/Edge/Firefox/Safari atuais), prioritariamente Android. Hospedagem estática. |
| **Estratégia de publicação** | GitHub Pages a partir da branch `main`, com caminhos relativos compatíveis com subdiretórios. |
| **Repositório remoto** | `https://github.com/x3x31/XLearn.git` |
| **Versão atual** | `0.2.0` |
| **Data da última atualização** | 2026-11-01 |

---

## B. Visão geral do sistema

O XLearn lê os materiais da pasta `questoes/`, gera um manifesto JSON com os arquivos disponíveis e apresenta uma experiência de estudo composta por:

1. **Dashboard** com meta diária, XP, nível, sequência, sessão em andamento e revisões vencidas.
2. **Seleção de prova** com metadados reais do material (disciplina, assunto, quantidade de questões).
3. **Tela de resolução** com alternativas embaralhadas por Fisher–Yates, confirmação da resposta, feedback imediato, gabarito e explicação didática.
4. **Persistência local** em IndexedDB de sessões, respostas, progresso e histórico, permitindo retomar sessões interrompidas.
5. **Repetição espaçada** com intervalos automáticos (1, 3, 7, 14 e 30 dias), redução do domínio no erro, escolha manual de intervalo e fila de revisões.
6. **Gamificação** com XP, níveis, conquistas, meta diária, sequência de estudos, estatísticas e ranking local baseado apenas em dados reais do dispositivo.
7. **Configurações** que alteram efetivamente o comportamento: tamanho da sessão, ordem das questões, intervalos de revisão, meta diária, tema, fonte, animações, exportação/importação e exclusão de dados.
8. **PWA offline** com manifesto, service worker, cache de recursos e das provas já acessadas, além de indicador de conexão.

A interface é em português brasileiro e prioriza telas pequenas, com navegação inferior em dispositivos móveis e layout expandido em telas maiores.

---

## C. Especificações funcionais

Estados permitidos: `PENDENTE`, `EM DESENVOLVIMENTO`, `IMPLEMENTADO`, `VALIDADO`, `BLOQUEADO`.

### Fase 1 — Base funcional

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-001 | Manifesto e descoberta de provas | Gerar `questoes/manifest.json` a partir dos `.md` encontrados, com metadados, contagem, hash e diagnóstico. | Alta | IMPLEMENTADO |
| REQ-002 | Interpretador de questões | Interpretar frontmatter e blocos JSON, validar estrutura e normalizar questões sem `eval` nem HTML arbitrário. | Alta | IMPLEMENTADO |
| REQ-003 | Carregamento e validação | Carregar manifesto e materiais via `fetch`, tratar falhas por arquivo e continuar os demais. | Alta | IMPLEMENTADO |
| REQ-004 | Seleção de provas | Listar provas reais do manifesto e permitir iniciar sessão. | Alta | PENDENTE |
| REQ-005 | Exibição de questões | Exibir enunciado, progresso da sessão e alternativas em ordem estável durante a resposta. | Alta | PENDENTE |
| REQ-006 | Embaralhamento de alternativas | Embaralhar com Fisher–Yates, preservando identificadores e o gabarito original; ordem persistida por sessão. | Alta | PENDENTE |
| REQ-007 | Correção e feedback | Corrigir pelo identificador da alternativa, impedir dupla resposta e exibir gabarito e explicação. | Alta | PENDENTE |

### Fase 2 — Persistência e continuidade

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-008 | Persistência IndexedDB | Armazenar configurações, estatísticas, progresso, sessões e tentativas. | Alta | PENDENTE |
| REQ-009 | Retomada de sessão | Persistir a sessão ativa e permitir continuar exatamente de onde parou. | Alta | PENDENTE |
| REQ-010 | Histórico e progresso | Registrar tentativas, acertos, erros, domínio e progresso por prova. | Média | PENDENTE |

### Fase 3 — Repetição espaçada

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-011 | Agendamento automático | Aplicar intervalos 1/3/7/14/30 dias e reduzir domínio no erro. | Alta | PENDENTE |
| REQ-012 | Intervalo manual | Permitir escolher 10 min, 1 h, 1, 3, 7, 14, 30 dias ou automático após acerto. | Média | PENDENTE |
| REQ-013 | Fila de revisões | Listar revisões vencidas e futuras, priorizando atrasadas. | Alta | PENDENTE |

### Fase 4 — Gamificação

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-014 | XP e níveis | Centralizar pontuação, bônus de sessão e progressão de níveis. | Média | PENDENTE |
| REQ-015 | Conquistas | Desbloquear conquistas reais com base no histórico, sem duplicar recompensa. | Média | PENDENTE |
| REQ-016 | Meta diária e sequência | Acompanhar meta configurável e dias consecutivos de estudo. | Média | PENDENTE |
| REQ-017 | Estatísticas | Exibir totais, precisão, desempenho por disciplina e tentativas recentes. | Média | PENDENTE |
| REQ-018 | Ranking local | Classificar provas/disciplinas por desempenho real do dispositivo, deixando claro que não é global. | Baixa | PENDENTE |

### Fase 5 — Configurações e dados

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-019 | Configurações de estudo | Ajustar meta diária, tamanho e ordem da sessão, repetição espaçada e intervalos. | Alta | PENDENTE |
| REQ-020 | Preferências de interface | Tema claro/escuro/sistema, tamanho do texto e animações. | Média | PENDENTE |
| REQ-021 | Exportação e importação | Exportar JSON, validar backup e restaurar dados com confirmação. | Alta | PENDENTE |
| REQ-022 | Gerenciamento de dados | Limpar cache sem apagar progresso e excluir progresso separadamente. | Média | PENDENTE |

### Fase 6 — PWA e offline

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-023 | Manifesto PWA | Manifesto, ícones e instalação em Android. | Alta | PENDENTE |
| REQ-024 | Service worker e cache | Cache do app shell, manifesto e materiais acessados; atualização controlada. | Alta | PENDENTE |
| REQ-025 | Indicador de conexão | Avisar estado online/offline e contingência. | Média | PENDENTE |

### Fase 7 — Qualidade

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-026 | Acessibilidade e responsividade | Navegação por teclado, foco, contraste, `aria-live`, alvos de toque e layout adaptativo. | Média | PENDENTE |
| REQ-027 | Testes abrangentes finais | Campanha completa ao término das funcionalidades, com correções documentadas. | Alta | PENDENTE |
| REQ-028 | Documentação de uso | README com execução, inclusão de provas, publicação, instalação e limitações. | Média | PENDENTE |

### Critérios de aceitação gerais

- Nenhuma prova deve ser cadastrada manualmente no código: a fonte é o manifesto gerado.
- O gabarito nunca pode depender da posição visual da alternativa.
- Alternativas devem permanecer estáveis durante a resposta e após retomar a sessão.
- Nenhuma resposta pode ser registrada duas vezes por cliques repetidos.
- Configurações exibidas devem alterar o comportamento real.
- Dados de ranking devem ser reais e locais; não criar estudantes fictícios.
- O aplicativo deve continuar funcionando para os materiais válidos quando um arquivo estiver malformado.
- A progressão deve ocorrer em commits funcionais independentes, com push após cada entrega.

---

## D. Arquitetura atual

Estado inicial do repositório (antes da implementação):

```
XLearn/
├── README.md                 # vazio no estado inicial
├── outros/
│   ├── ESTILO_DA_BANCA.md    # referência de estilo (não é prova)
│   ├── GERAÇÃO_ESTUDO.md     # protocolo de geração dos materiais
│   ├── Legislação.zip        # fontes normativas
│   ├── provas_comperve.zip   # provas originais
│   └── pedir.txt
├── questoes/
│   ├── ESTUDO_BANCO_DE_DADOS_COMPERVE_50_QUESTOES.md
│   └── ESTUDO_LEGISLACAO_COMPERVE_100_QUESTOES.md
└── .git/
```

Arquitetura após REQ-001 a REQ-003:

```
XLearn/
├── index.html                # (planejado) shell da SPA
├── manifest.webmanifest      # (planejado) manifesto PWA
├── service-worker.js         # (planejado) cache e offline
├── package.json              # scripts de desenvolvimento; sem dependências de execução
├── css/styles.css            # (planejado) temas, layout e componentes
├── js/
│   ├── app.js                # (planejado) rotas, estado de UI e telas
│   ├── db.js                 # (planejado) IndexedDB e operações de dados
│   ├── parser.js             # IMPLEMENTADO: frontmatter + JSON + normalização (puro)
│   ├── questions.js          # IMPLEMENTADO: manifesto, fetch e cache em memória
│   ├── srs.js                # (planejado) repetição espaçada (puro)
│   ├── gamification.js       # (planejado) XP, níveis, conquistas (puro)
│   └── settings.js           # (planejado) defaults e aplicação de preferências
├── scripts/
│   └── build-manifest.mjs    # IMPLEMENTADO: geração e validação do manifesto
├── icons/                    # (planejado) ícones PWA
├── questoes/
│   ├── manifest.json         # IMPLEMENTADO: gerado, não editar à mão
│   └── *.md                  # materiais originais preservados
├── README.md                 # (planejado) documentação de uso
└── PROJECT_STATUS.md
```

Responsabilidades: `parser.js`, `srs.js` e `gamification.js` são módulos puros, sem DOM, testáveis no Node. `db.js` concentrará o acesso ao IndexedDB. `app.js` não acessará IndexedDB diretamente. A ordem das alternativas será gerada no início de cada apresentação e persistida na sessão. `questions.js` resolve os caminhos do manifesto a partir da URL do próprio módulo, o que mantém compatibilidade com subdiretórios do GitHub Pages.

---

## E. Especificação dos arquivos de questões

### E.1. Estrutura observada

Os dois arquivos atuais seguem o protocolo de `outros/GERAÇÃO_ESTUDO.md`:

1. **Frontmatter YAML** delimitado por `---` no início, com pares `chave: "valor"` ou números.
2. **Título e texto introdutório em Markdown** (não interpretados como questões).
3. **Uma seção por questão**, no formato `## Questão NNNN`.
4. **Um bloco cercado por ```json ... ```** por questão, contendo um objeto JSON completo.
5. Em `ESTUDO_LEGISLACAO_COMPERVE_100_QUESTOES.md`, ao final há **tabela de gabarito consolidado**, distribuição por documento e nota de atualização. Esses trechos não são questões.

### E.2. Frontmatter observado

Campos reais: `schema_version`, `material_id`, `bank`, `subject`, `topic`, `requested_questions`, `original_questions`, `generated_questions`, `total_questions`, `created_at`, `language`.

### E.3. Esquema real de cada questão

```json
{
  "id": "MAT-...-Q0001",
  "type": "generated",
  "source": { "exam": null, "year": null, "question_number": null, "page": null },
  "subject": "Banco de Dados",
  "topic": "Conceitos fundamentais",
  "subtopic": "Dados, informação e conhecimento",
  "difficulty": "easy",
  "cognitive_skill": "comprehension",
  "question_text": "Enunciado...",
  "alternatives": [
    { "id": "A", "text": "...", "is_correct": false, "explanation": "..." }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "...",
    "theoretical_content": "...",
    "bank_approach": "...",
    "study_tip": "...",
    "review_summary": "..."
  }
}
```

### E.4. Fatos verificados no corpus

- 2 arquivos, 150 questões no total (50 + 100), todas com JSON válido.
- Todas as questões têm exatamente 4 alternativas, com identificadores `A`–`D` únicos.
- Em todas, exatamente uma alternativa tem `is_correct: true` e ela coincide com `answer_key`.
- `question_text` não contém quebras de linha nem referências a letras de alternativas.
- `difficulty` observado: `easy`, `medium`, `hard`.
- `cognitive_skill` observado: `comprehension`, `application`, `analysis`, `memorization`.
- Todo material é `type: "generated"`; campos de origem estão nulos.
- Não há imagens, tabelas ou HTML dentro dos enunciados.

### E.5. Estratégia de interpretação

- Frontmatter: parser simples de `chave: valor`, sem dependências, com suporte a strings entre aspas, números, booleanos e `null`.
- Questões: extrair todos os blocos ```json e fazer `JSON.parse` individual; um bloco inválido gera aviso e não impede os demais.
- Normalização: validar campos obrigatórios, alternativas e gabarito; usar `answer_key` como referência e sinalizar divergência de `is_correct`.
- Renderização: apenas `textContent`/`createTextNode`, com quebras de linha preservadas por CSS. Nenhum HTML do arquivo é interpretado.
- O `## Questão NNNN` serve como contexto textual; o identificador canônico é o campo `id` do JSON.

### E.6. Limitações identificadas

- O formato depende de blocos JSON; não há suporte a questões apenas em Markdown puro. Isso é adequado ao corpus atual e está documentado.
- Metadados de origem são nulos nos materiais atuais.
- Arquivos fora do padrão são rejeitados com aviso, mas não interrompem o carregamento.
- A tabela de gabarito consolidado é ignorada (o gabarito canônico está em cada questão).

---

## F. Decisões técnicas

| Decisão | Escolha | Motivação |
|---|---|---|
| Descoberta de provas | Script Node `scripts/build-manifest.mjs` gera `questoes/manifest.json` com caminhos relativos, título, metadados, contagem, SHA-256 e diagnóstico. | GitHub Pages não lista diretórios; o manifesto evita catálogo fixo e permite detectar arquivos inválidos. |
| Execução do gerador | `node scripts/build-manifest.mjs`; documentado para ser executado ao adicionar provas. | Ambiente Node já disponível no desenvolvimento; não gera dependência no app final. |
| Estrutura da questão | Objeto normalizado com `id`, `materialId`, `text`, alternativas com `id` estável, `correctId` e explicações. | Desacopla apresentação de dados e mantém o gabarito independente da posição. |
| Shuffle | Fisher–Yates com PRNG semeado por `sessionId + questionId`; ordem também persistida na sessão. | Ordem aleatória e estável durante a resposta e após retomada. |
| Correção | Comparação com `correctId`/`answer_key`, nunca com índice visual. | Garante gabarito correto em qualquer ordem. |
| Persistência | IndexedDB (`xlearn`) com stores `meta`, `progress`, `sessions`, `attempts`. localStorage apenas para preferência de tema inicial, se necessário. | Requisito do projeto; maior capacidade e consultas por chave. |
| SRS | Níveis 0–5; acerto avança e usa intervalos 1/3/7/14/30 dias; erro reduz nível e agenda 10 minutos. Intervalos configuráveis. | Simples, auditável e explicitamente não apresentado como validado cientificamente. |
| XP | Centralizado em módulo puro, com bônus por dificuldade, sessão concluída e meta diária; conquistas pagam uma única vez. | Evita duplicação e mantém critérios consistentes. |
| Ranking | Ranking local por material, calculado do progresso real; texto explica que não é global. | Atende ao requisito sem inventar estudantes. |
| Cache | App shell em cache na instalação; materiais em cache após o primeiro acesso; navegação com fallback para `index.html`. | Compatível com offline e subdiretórios do GitHub Pages. |
| Versionamento | Um commit funcional por requisito, Conventional Commits, push após cada entrega; hash registrado no commit seguinte. | Rastreabilidade e histórico incremental. |
| Entrega conjunta REQ-004..007 | Seleção, exibição, embaralhamento e correção entregues juntos. | São inseparáveis para que exista um fluxo utilizável; um commit intermediário sem correção ou sem shuffle seria uma funcionalidade parcial, o que o projeto proíbe. |

---

## G. Histórico de evolução

| Versão | Requisito | Implementação | Commit | Data |
|---|---|---|---|---|
| 0.1.0 | — | Inspeção inicial e criação do `PROJECT_STATUS.md` | `cacae51` | 2026-11-01 |
| 0.2.0 | REQ-001, REQ-002, REQ-003 | Gerador de manifesto, manifesto real com 2 materiais/150 questões, parser puro, normalização, validação e carregador via fetch | _a preencher após o commit_ | 2026-11-01 |

---

## H. Funcionalidades implementadas

- **REQ-001 — Manifesto:** `scripts/build-manifest.mjs` varre `questoes/` recursivamente, ignora `manifest.json`/`README.md`, interpreta cada material, calcula SHA-256 e metadados, detecta IDs duplicados e gera `questoes/manifest.json`. Modo `--check` valida sem gravar. `npm run build:manifest` e `npm run check` disponíveis.
- **REQ-002 — Interpretador:** `js/parser.js` lê frontmatter YAML simples e blocos ```json, normaliza questões, valida alternativas, gabarito e campos obrigatórios, e reporta diagnósticos sem interromper o material. Inclui `shuffle` Fisher–Yates, PRNG semeado e hash de string.
- **REQ-003 — Carregamento:** `js/questions.js` carrega o manifesto, valida caminhos e duplicatas, resolve URLs relativas à raiz do projeto, mantém cache em memória e continua carregando os demais materiais quando um falha.

---

## I. Funcionalidades pendentes

Todas as funcionalidades listadas na seção C estão pendentes, exceto REQ-001 a REQ-003. Prioridade imediata: REQ-004 a REQ-007 (seleção, exibição, embaralhamento, correção e feedback).

Dependências principais:

- REQ-004 a REQ-007 dependem de REQ-001 a REQ-003.
- REQ-009 depende de REQ-008.
- REQ-012 e REQ-013 dependem de REQ-011.
- REQ-015 a REQ-018 dependem de REQ-008 e do registro de tentativas.
- REQ-021 e REQ-022 dependem do modelo de dados.
- REQ-024 depende de REQ-023.
- REQ-027 depende de todas as anteriores.

---

## J. Problemas conhecidos

| Problema | Impacto | Situação |
|---|---|---|
| `README.md` vazio no estado inicial | Falta de instruções de uso | Será resolvido em REQ-028. |
| Materiais fora do padrão JSON não são suportados | Provas em Markdown puro não carregam | Limitação documentada; corpus atual está dentro do padrão. |
| Manifesto precisa ser regenerado ao adicionar provas | Esquecimento pode ocultar material | O gerador detecta e o README orientará; a validação acusa no console. |
| Ranking local tem um único perfil de dispositivo | Não representa ranking global | Comunicado na interface; usa apenas dados reais. |

---

## K. Testes

### Verificações durante o desenvolvimento

- Estrutura do repositório e estado do Git inspecionados.
- 2 arquivos Markdown encontrados, 150 blocos JSON analisados: 100% válidos, IDs únicos, 4 alternativas por questão, gabarito consistente com `is_correct`.
- `git status` limpo antes do início; branch `main` sincronizada com `origin/main`.
- Gerador executado com sucesso: 2 materiais válidos, 150 questões, 0 erros e 0 avisos; `questoes/manifest.json` criado.
- Parser reexecutado em Node sobre os dois materiais: 50 e 100 questões válidas.
- Shuffle semeado testado nas duas provas: 4 alternativas preservadas, gabarito presente e identificadores únicos.
- Importação cruzada entre `js/parser.js` (navegador) e `scripts/build-manifest.mjs` (Node) executada sem erro.

### Testes finais pendentes

- Carregar todas as provas e validar metadados.
- Verificar embaralhamento e correção em todas as questões.
- Testar persistência, recarga e retomada de sessão.
- Testar SRS automático e manual, fila e priorização de atrasadas.
- Testar XP, níveis, conquistas, meta, sequência, ranking e estatísticas.
- Testar cada configuração e seu efeito real.
- Testar exportação, importação inválida e exclusão de dados.
- Testar offline, instalação PWA, atualização do service worker e GitHub Pages em subdiretório.
- Testar responsividade, teclado, leitor de tela e contraste.
- Testar arquivo de prova malformado sem interromper os demais.

---

## L. Próxima tarefa recomendada

**REQ-004 a REQ-007 — fluxo mínimo de estudo.**

Motivo: o manifesto, o parser e o carregador já estão prontos. A próxima entrega deve tornar o aplicativo utilizável: shell da SPA, dashboard/seleção de provas, tela de resolução, embaralhamento Fisher–Yates por sessão, confirmação única e feedback com gabarito/explicação. Esses quatro requisitos são tecnicamente inseparáveis para um fluxo utilizável e serão documentados em um único commit funcional, com a justificativa registrada. Persistência virá em seguida (REQ-008 e REQ-009).
