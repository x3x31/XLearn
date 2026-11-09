# PROJECT_STATUS — XLearn

> Documento oficial de especificação, evolução, decisões técnicas e pendências do XLearn.
> Deve ser atualizado antes de cada commit de requisito.

---

## A. Identificação do projeto

| Campo | Informação |
|---|---|
| **Nome** | XLearn |
| **Objetivo** | Aplicativo educacional de questões com repetição espaçada e gamificação, executado inteiramente no navegador. |
| **Descrição** | PWA instalável, responsivo e offline-first para estudar a partir de arquivos Markdown padronizados. Permite selecionar provas, responder questões com alternativas embaralhadas, receber feedback e explicações, retomar sessões, agendar revisões, criar simulados por assunto, usar cronômetro opcional, acumular moedas, evoluir um personagem e acompanhar estatísticas locais. |
| **Tecnologias** | HTML5, CSS3, JavaScript puro (ES Modules), IndexedDB, Cache API, Service Worker, Web App Manifest e Web Audio. |
| **Ambiente de execução** | Navegador moderno (Chrome/Edge/Firefox/Safari atuais), prioritariamente Android. Hospedagem estática. |
| **Estratégia de publicação** | GitHub Pages a partir da branch `main`, com caminhos relativos compatíveis com subdiretórios. |
| **Repositório remoto** | `https://github.com/x3x31/XLearn.git` |
| **Versão atual** | `0.43.0` (REQ-047 implementado) |
| **Data da última atualização** | 2026-11-08 |

---

## B. Visão geral do sistema

O XLearn lê os materiais da pasta `questoes/`, gera um manifesto JSON com os arquivos disponíveis e apresenta uma experiência de estudo composta por:

1. **Dashboard** com visão rápida da temporada, personagem, carteira de moedas, meta diária, sequência, conquistas coletáveis e o ranking global da Temporada 1 (top 5 e posição do próprio usuário), além de atalhos para o progresso, sessões em andamento e revisões vencidas.
2. **Seleção de prova** com metadados reais do material (disciplina, assunto, quantidade de questões).
3. **Tela de resolução** com alternativas embaralhadas por Fisher–Yates, confirmação da resposta, botão “Mostrar feedback” para respostas certas e erradas, gabarito, explicação didática em janela modal e cronômetro opcional de 5–120 minutos em um cabeçalho fixo com o contador de questões, pausado enquanto o feedback está aberto.
4. **Persistência local** em IndexedDB de sessões, respostas, progresso, histórico, carteira e simulados, permitindo retomar sessões interrompidas.
5. **Repetição espaçada** com intervalos automáticos (1, 3, 7, 14 e 30 dias), redução do domínio no erro, escolha manual de intervalo e fila de revisões.
6. **Gamificação** com temporada, evolução do personagem por moedas acumuladas e dias ativos, conquistas com recompensas em moedas, meta diária, sequência de estudos, estatísticas, ranking local por prova/disciplina e ranking global da temporada com conta Supabase. O XP continua sendo calculado e gravado internamente, mas não é exibido nem influencia a evolução.
7. **Simulados por assunto** que montam uma prova a partir das disciplinas do acervo, com resumo próprio e histórico separado do estudo normal; o cronômetro de prova fica desligado nesse modo.
8. **Configurações** que alteram efetivamente o comportamento: tamanho da sessão, ordem das questões, intervalos de revisão, meta diária, cronômetro de prova, tema, fonte, animações, som, exportação/importação e exclusão de dados.
9. **PWA offline** com manifesto, service worker, cache de recursos e das provas já acessadas, além de indicador de conexão.
10. **Conta e ranking da temporada** com cadastro/login por apelido, e-mail e senha via Supabase Auth, sessão persistida em IndexedDB, envio do nível e das moedas da temporada e ranking público por moedas. Sem conexão, o estudo continua normalmente e a sincronização ocorre quando a rede volta.

A interface é em português brasileiro e prioriza telas pequenas, com navegação inferior em dispositivos móveis e layout expandido em telas maiores.

---

## C. Especificações funcionais

Legenda dos estados possíveis: `PENDENTE`, `EM DESENVOLVIMENTO`, `IMPLEMENTADO`, `VALIDADO`, `BLOQUEADO`. Os requisitos REQ-001 a REQ-047 estão `IMPLEMENTADO`, conforme a coluna Status abaixo.

### Fase 1 — Base funcional

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-001 | Manifesto e descoberta de provas | Gerar `questoes/manifest.json` a partir dos `.md` encontrados, com metadados, contagem, hash e diagnóstico. | Alta | IMPLEMENTADO |
| REQ-002 | Interpretador de questões | Interpretar frontmatter e blocos JSON, validar estrutura e normalizar questões sem `eval` nem HTML arbitrário. | Alta | IMPLEMENTADO |
| REQ-003 | Carregamento e validação | Carregar manifesto e materiais via `fetch`, tratar falhas por arquivo e continuar os demais. | Alta | IMPLEMENTADO |
| REQ-004 | Seleção de provas | Listar provas reais do manifesto e permitir iniciar sessão. | Alta | IMPLEMENTADO |
| REQ-005 | Exibição de questões | Exibir enunciado, progresso da sessão e alternativas em ordem estável durante a resposta. | Alta | IMPLEMENTADO |
| REQ-006 | Embaralhamento de alternativas | Embaralhar com Fisher–Yates, preservando identificadores e o gabarito original; ordem persistida por sessão. | Alta | IMPLEMENTADO |
| REQ-007 | Correção e feedback | Corrigir pelo identificador da alternativa, impedir dupla resposta e exibir gabarito e explicação. | Alta | IMPLEMENTADO |

### Fase 2 — Persistência e continuidade

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-008 | Persistência IndexedDB | Armazenar configurações, estatísticas, progresso, sessões e tentativas. | Alta | IMPLEMENTADO |
| REQ-009 | Retomada de sessão | Persistir a sessão ativa e permitir continuar exatamente de onde parou. | Alta | IMPLEMENTADO |
| REQ-010 | Histórico e progresso | Registrar tentativas, acertos, erros, domínio e progresso por prova. | Média | IMPLEMENTADO |

### Fase 3 — Repetição espaçada

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-011 | Agendamento automático | Aplicar intervalos 1/3/7/14/30 dias e reduzir domínio no erro. | Alta | IMPLEMENTADO |
| REQ-012 | Intervalo manual | Permitir escolher 10 min, 1 h, 1, 3, 7, 14, 30 dias ou automático após acerto. | Média | IMPLEMENTADO |
| REQ-013 | Fila de revisões | Listar revisões vencidas e futuras, priorizando atrasadas. | Alta | IMPLEMENTADO |

### Fase 4 — Gamificação

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-014 | XP e níveis | Centralizar pontuação, bônus de sessão e progressão de níveis. | Média | IMPLEMENTADO |
| REQ-015 | Conquistas | Desbloquear conquistas reais com base no histórico, sem duplicar recompensa. | Média | IMPLEMENTADO |
| REQ-016 | Meta diária e sequência | Acompanhar meta configurável e dias consecutivos de estudo. | Média | IMPLEMENTADO |
| REQ-017 | Estatísticas | Exibir totais, precisão, desempenho por disciplina e tentativas recentes. | Média | IMPLEMENTADO |
| REQ-018 | Ranking local | Classificar provas/disciplinas por desempenho real do dispositivo, deixando claro que não é global. | Baixa | IMPLEMENTADO |

### Fase 5 — Configurações e dados

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-019 | Configurações de estudo | Ajustar meta diária, tamanho e ordem da sessão, repetição espaçada e intervalos. | Alta | IMPLEMENTADO |
| REQ-020 | Preferências de interface | Tema claro/escuro/sistema, tamanho do texto e animações. | Média | IMPLEMENTADO |
| REQ-021 | Exportação e importação | Exportar JSON, validar backup e restaurar dados com confirmação. | Alta | IMPLEMENTADO |
| REQ-022 | Gerenciamento de dados | Limpar cache sem apagar progresso e excluir progresso separadamente. | Média | IMPLEMENTADO |

### Fase 6 — PWA e offline

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-023 | Manifesto PWA | Manifesto, ícones e instalação em Android. | Alta | IMPLEMENTADO |
| REQ-024 | Service worker e cache | Cache do app shell, manifesto e materiais acessados; atualização controlada. | Alta | IMPLEMENTADO |
| REQ-025 | Indicador de conexão | Avisar estado online/offline e contingência. | Média | IMPLEMENTADO |

### Fase 7 — Qualidade

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-026 | Acessibilidade e responsividade | Navegação por teclado, foco, contraste, `aria-live`, alvos de toque e layout adaptativo. | Média | IMPLEMENTADO |
| REQ-027 | Testes abrangentes finais | Campanha completa ao término das funcionalidades, com correções documentadas. | Alta | IMPLEMENTADO |
| REQ-028 | Documentação de uso | README com execução, inclusão de provas, publicação, instalação e limitações. | Média | IMPLEMENTADO |

### Fase 8 — Ludicidade, moedas, personagens, simulados

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-029 | Sons e feedback lúdico | Sons animados para resposta correta/errada, início e fim da prova, e ao atingir conquistas. Alternância configurável em ajustes (som ligado/desligado), sem dependências externas, gerados via Web Audio com primeiro toque, respeitando animações reduzidas. Feedback visual lúdico sem quebrar acessibilidade. | Alta | IMPLEMENTADO |
| REQ-030 | Moedas e evolução de personagens | Sistema de moedas e evolução de personagem estudioso com imagens de personagens (SVG) em estágios. Ganho de moedas em respostas corretas, conclusão de sessão, meta e conquistas; saldo persistido no IndexedDB. Cartão "Personagem & Moedas" na tela de progresso com personagem atual, estágio, moedas e barra de evolução, resumido na visão rápida do dashboard. | Alta | IMPLEMENTADO |
| REQ-031 | Contagem regressiva nas provas | Cronômetro regressivo configurável por sessão de prova (desligado por padrão; 5–120 minutos). Persiste tempo restante ao recarregar/retomar, finaliza a sessão automaticamente ao zerar marcando não respondidas, não aplicado a revisões nem a simulados. Exibido discretamente com acessibilidade e pausa visual ao ficar oculto. | Alta | IMPLEMENTADO |
| REQ-032 | Simulados por assunto | Rota `#/simulado` para criar simulados configurando quantas questões de cada assunto (agregados dos materiais válidos). Não afeta progresso, sessões normais, XP, conquistas, SRS, ranking, estatísticas nem moedas. Apenas registra histórico separado por assunto com total de questões e acertos. Reaproveita fluxo de quiz; resumo distinto e sem cronômetro de prova. | Alta | IMPLEMENTADO |
| REQ-033 | Coleta de moedas de conquistas | Animação de moedas nas conquistas desbloqueadas: o usuário deve clicar na conquista para "coletar" as moedas, com animação em cascata e som de moedas. Recompensa única, idempotente, gravada em transação, atualiza saldo e não concede automaticamente. | Alta | IMPLEMENTADO |

### Fase 9 — Temporada e evolução por constância

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-034 | Temporada 1 e evolução do personagem | Definir a Temporada 1 de 05/11/2026 a 04/12/2026 e evoluir o personagem pelo mínimo acumulado de moedas na temporada e pelo total de dias ativos, com +3 dias ativos por estágio. Faixas confirmadas: 300/600/1000/1500 moedas e 3/6/9/12 dias. O estágio é o maior que atende simultaneamente aos dois critérios, nunca regride dentro da temporada e congela ao término até que uma nova temporada seja definida. A tela de progresso e a visão rápida do dashboard exibem temporada, estágio, moedas da temporada, dias ativos, dias restantes e o que falta para evoluir. | Alta | IMPLEMENTADO |
| REQ-035 | XP interno e conquistas de temporada | Manter o cálculo e a gravação do XP como dado interno, removendo o XP e os níveis de toda a interface e de qualquer influência na evolução. Substituir as conquistas `nivel-3` e `nivel-5` por “Primeira evolução” (atingir o estágio 2) e “Mestre da temporada” (atingir o estágio máximo), mantendo recompensas em moedas coletadas manualmente. | Alta | IMPLEMENTADO |
| REQ-036 | Feedback em modal com pausa do cronômetro | Exibir, após qualquer resposta (certa ou errada), um botão “Mostrar feedback” que abre a resolução em uma janela modal acessível (`role="dialog"`, `aria-modal`, foco preso, `Escape` e retorno de foco). O cronômetro da prova pausa ao abrir a modal e só retoma ao fechá-la, preservando o estado da sessão. O feedback deixa de ser renderizado inline. | Alta | IMPLEMENTADO |
| REQ-037 | Conquistas pendentes na home e cascata centralizada | Exibir na tela inicial uma seção com as conquistas já desbloqueadas, mas ainda não coletadas, com a recompensa em moedas e o botão “Clique para coletar”. A seção permanece visível durante a animação da coleta e desaparece quando não houver mais pendências. A cascata de moedas passa a ser exibida centralizada na viewport, independentemente da posição do cartão de origem. | Média | IMPLEMENTADO |
| REQ-038 | Cabeçalho fixo da prova | Manter o cabeçalho da tela de resolução fixo no topo enquanto o conteúdo da questão rola, preservando a visibilidade do cronômetro, do contador de questões e do título da prova. O cabeçalho deve respeitar o topo já fixo do app, manter fundo legível e não cobrir o enunciado nem a navegação inferior. | Média | IMPLEMENTADO |
| REQ-039 | Feedback sem campos legados | Deixar de ler, normalizar e exibir os campos `bank_approach`, `study_tip` e `review_summary` das explicações. O feedback passa a mostrar apenas a resolução, o conteúdo teórico e os comentários das alternativas. Materiais antigos que ainda contenham esses campos continuam válidos, mas os textos são ignorados. | Média | IMPLEMENTADO |
| REQ-040 | Ajuste das moedas de evolução | Elevar as faixas de moedas da Temporada 1 para 300/600/1000/1500 nos estágios Estudante, Focado, Veterano e Mestre dos estudos, mantendo 0 no Curioso e os mesmos requisitos de dias ativos (0/3/6/9/12). A evolução continua exigindo os dois critérios simultâneos e o congelamento após o término permanece inalterado. | Alta | IMPLEMENTADO |

### Fase 10 — Conta Supabase e ranking global da temporada

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-041 | Conta Supabase e sessão sazonal | Solicitar cadastro/login ao iniciar a primeira prova de uma sessão normal, pedindo apelido, e-mail e senha. O cadastro é automático quando o e-mail ainda não existe, e a sessão é persistida em IndexedDB com tokens de acesso/renovação durante a Temporada 1. Sem internet, o estudo continua e o login pode ser feito depois. Simulados permanecem isolados e não exigem conta. | Alta | IMPLEMENTADO |
| REQ-042 | Sincronização de nível e moedas | Enviar ao Supabase o apelido, o estágio (número e nome) e as moedas acumuladas na temporada, além dos dias ativos, sempre que o progresso mudar (respostas, conclusão de sessão, coleta de conquista e acesso à home). A gravação usa UPSERT por `user_id`/`season_id`, é limitada ao próprio usuário por RLS, tolera falhas de rede e reenvia quando a conexão volta. | Alta | IMPLEMENTADO |
| REQ-043 | Ranking da temporada na home | Exibir na tela inicial os cinco primeiros usuários ativos da Temporada 1 com posição, apelido, nível e moedas; quando o usuário estiver fora do top 5, mostrar também a posição dele. O ranking é atualizado a cada acesso à home, tem cache local para consulta offline e informa quando está desatualizado ou indisponível. | Alta | IMPLEMENTADO |

### Fase 11 — Identidade na barra superior

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-044 | Apelido, logout e status de visitante no topo | Exibir o apelido no lugar de “aprender praticando” quando houver sessão conectada. Mostrar um botão de sair ao lado do botão de configuração apenas para usuários logados. Remover da barra superior a contagem de questões. O indicador de conexão passa a exibir “Online”, “Offline” ou “Visitante”, sendo “Visitante” o estado de quem não criou conta ou saiu dela. | Alta | IMPLEMENTADO |

### Fase 12 — Conta e acesso do visitante

| ID | Nome | Descrição | Prioridade | Status |
|---|---|---|---|---|
| REQ-045 | Login e cadastro em fluxos separados | Separar a modal de conta em dois modos explícitos: “Entrar”, com apenas e-mail e senha, e “Criar conta”, com apelido, e-mail e senha. O modo de login nunca cria conta automaticamente; credenciais inválidas orientam a usar “Criar conta”. No modo de cadastro, um e-mail já existente orienta a usar “Entrar”. As abas devem ser acessíveis e o campo de apelido deve ficar oculto no modo de login. | Alta | IMPLEMENTADO |
| REQ-046 | Rolagem ao apagar progresso | Ao clicar em “Apagar progresso” nas Configurações, manter a posição de rolagem atual ou levar o foco e a rolagem até a confirmação “Apagar todo o progresso”, sem saltar para o topo da página. | Média | IMPLEMENTADO |
| REQ-047 | Restrições do visitante | Ocultar as opções Configuração, Progresso, Simulado e Revisão para quem não tem conta e bloquear o acesso direto a essas rotas. Permitir que o visitante responda somente a primeira questão de cada prova; ao tentar avançar para a segunda questão ou abrir o feedback, solicitar a criação de conta. | Alta | IMPLEMENTADO |

### Critérios de aceitação gerais

- Nenhuma prova deve ser cadastrada manualmente no código: a fonte é o manifesto gerado.
- O gabarito nunca pode depender da posição visual da alternativa.
- Alternativas devem permanecer estáveis durante a resposta e após retomar a sessão.
- Nenhuma resposta pode ser registrada duas vezes por cliques repetidos.
- Configurações exibidas devem alterar o comportamento real.
- Dados de ranking devem ser reais e locais; não criar estudantes fictícios.
- O aplicativo deve continuar funcionando para os materiais válidos quando um arquivo estiver malformado.
- O estudo nunca pode ser bloqueado por falta de internet ou por indisponibilidade do Supabase.
- O ranking global só pode expor apelido, nível e moedas; e-mail e tokens jamais aparecem para outros usuários.
- Cada usuário autenticado só pode gravar a própria pontuação, mesmo que a chave pública seja conhecida.
- A progressão deve ocorrer em commits funcionais independentes, com push após cada entrega.

---

## D. Arquitetura

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

Arquitetura atual (estado final, após REQ-033, REQ-027 e REQ-028):

```
XLearn/
├── index.html                # IMPLEMENTADO: shell da SPA e fallback noscript
├── manifest.webmanifest      # IMPLEMENTADO: nome, cores, escopo e ícones de instalação
├── .nojekyll                 # IMPLEMENTADO: evita conversão Jekyll dos .md no GitHub Pages
├── service-worker.js         # IMPLEMENTADO: app shell, runtime e atualização versionada
├── package.json              # scripts de desenvolvimento; sem dependências de execução
├── css/styles.css            # IMPLEMENTADO: temas, layout, componentes, modal de conta, ranking e ajustes de acessibilidade
├── js/
│   ├── app.js                # IMPLEMENTADO: rotas, estado de UI, dashboard, temporada/personagem/moedas, conta e ranking global, quiz, simulados por assunto, resumo, revisões, estatísticas, configurações, backup, limpeza, PWA, conexão e foco acessível
│   ├── db.js                 # IMPLEMENTADO: IndexedDB, progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira de moedas, simulado ativo/histórico, reagendamento, backup e exclusão
│   ├── cloud.js              # NOVO: cliente REST do Supabase Auth/PostgREST, validação, sessão, erros e normalização do ranking (sem DOM)
│   ├── cloud-config.js       # NOVO: URL e chave publishable do projeto Supabase
│   ├── parser.js             # IMPLEMENTADO: frontmatter + JSON + normalização (puro)
│   ├── questions.js          # IMPLEMENTADO: manifesto, fetch e cache em memória
│   ├── settings.js           # IMPLEMENTADO: defaults, normalização, cronômetro, intervalos manuais e aplicação visual
│   ├── srs.js                # IMPLEMENTADO: repetição espaçada e fila de revisões (puro)
│   ├── gamification.js       # IMPLEMENTADO: XP interno, conquistas com recompensas em moedas, meta e sequência (puro)
│   ├── coins.js              # IMPLEMENTADO: carteira, economia de moedas e coleta de conquistas (puro)
│   ├── season.js             # IMPLEMENTADO: configuração da temporada, ledger de moedas, dias ativos e estágios do personagem (puro)
│   ├── timer.js              # IMPLEMENTADO: cronômetro regressivo, pausa/retomada e formatação acessível (puro)
│   ├── simulado.js           # IMPLEMENTADO: resumo, histórico idempotente e agregação por assunto dos simulados (puro)
│   ├── sound.js              # IMPLEMENTADO: efeitos sonoros via Web Audio e desbloqueio no primeiro gesto
│   ├── ranking.js            # IMPLEMENTADO: ranking local por prova/disciplina com Wilson (puro)
│   ├── backup.js             # IMPLEMENTADO: envelope versionado, validação e exportação/importação (puro)
│   └── storage.js            # IMPLEMENTADO: limpeza seletiva dos caches do app (puro)
├── scripts/
│   ├── build-manifest.mjs    # IMPLEMENTADO: geração e validação do manifesto
│   └── build-icons.mjs       # IMPLEMENTADO: geração dos PNGs sem dependências
├── icons/                    # IMPLEMENTADO: PNG 192/512, maskable 512 e Apple Touch 180
├── assets/characters/        # IMPLEMENTADO: cinco ilustrações SVG dos estágios do personagem
├── questoes/
│   ├── manifest.json         # IMPLEMENTADO: gerado, não editar à mão
│   └── *.md                  # 10 materiais de estudo preservados
├── supabase/
│   └── schema.sql            # NOVO: tabela, view, índices, grants, RLS e políticas do ranking
├── outros/                   # referências e fontes originais (não usadas em runtime)
├── README.md                 # IMPLEMENTADO: documentação de uso, materiais, publicação e limitações
└── PROJECT_STATUS.md
```

Responsabilidades: `parser.js`, `srs.js`, `gamification.js`, `coins.js`, `season.js`, `timer.js`, `simulado.js`, `ranking.js`, `backup.js`, `storage.js`, `cloud.js` e `cloud-config.js` não acessam o DOM. `cloud.js` concentra o protocolo REST do Supabase e é testável no Node com `fetch` simulado; `db.js` concentra o acesso ao IndexedDB. `app.js` não acessa IndexedDB diretamente nem usa SDK do Supabase. A ordem das alternativas é gerada no início de cada apresentação e persistida na sessão. `questions.js` resolve os caminhos do manifesto a partir da URL do próprio módulo, o que mantém compatibilidade com subdiretórios do GitHub Pages.

---

## E. Especificação dos arquivos de questões

### E.1. Estrutura observada

Os dez arquivos atuais seguem o protocolo de `outros/GERAÇÃO_ESTUDO.md`:

1. **Frontmatter YAML** delimitado por `---` no início, com pares `chave: "valor"` ou números.
2. **Título e texto introdutório em Markdown** (não interpretados como questões).
3. **Uma seção por questão**, no formato `## Questão NNNN`.
4. **Um bloco cercado por ```json ... ```** por questão, contendo um objeto JSON completo.
5. Ao final de cada material há **tabela de gabarito consolidado**, distribuição por documento ou nota de atualização. Esses trechos não são questões.

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
    "theoretical_content": "..."
  }
}
```

### E.4. Fatos verificados no corpus

- 10 arquivos, 1.250 questões no total, todas com JSON válido.
- Todas as questões têm exatamente 4 alternativas, com identificadores `A`–`D` únicos.
- Em todas, exatamente uma alternativa tem `is_correct: true` e ela coincide com `answer_key`.
- 93 enunciados contêm quebras de linha; 1 contém referência a letra de alternativa. A renderização preserva as quebras por CSS.
- `difficulty` observado: `easy` (194), `medium` (908) e `hard` (148).
- `cognitive_skill` observado: `comprehension` (326), `application` (559), `analysis` (306), `memorization` (40) e `recall` (19).
- 59 questões são `type: "original"` e 1.191 são `type: "generated"`.
- As 59 questões originais preservam metadados de origem; as 1.191 geradas têm campos de origem nulos.
- Não há imagens, tabelas nem HTML interpretável dentro dos enunciados; a notação `<<include>>` em uma questão é texto literal, exibido sem interpretação.
- O corpus atual ainda contém `bank_approach`, `study_tip` e `review_summary` em algumas questões; a partir de REQ-039 esses campos são ignorados pelo parser e não aparecem no feedback.

### E.5. Estratégia de interpretação

- Frontmatter: parser simples de `chave: valor`, sem dependências, com suporte a strings entre aspas, números, booleanos e `null`.
- Questões: extrair todos os blocos ```json e fazer `JSON.parse` individual; um bloco inválido gera aviso e não impede os demais.
- Normalização: validar campos obrigatórios, alternativas e gabarito; usar `answer_key` como referência e sinalizar divergência de `is_correct`. A explicação normalizada mantém apenas `resolution` e `theoretical_content`; os campos legados `bank_approach`, `study_tip` e `review_summary` são descartados mesmo quando presentes no JSON.
- Renderização: apenas `textContent`/`createTextNode`, com quebras de linha preservadas por CSS. Nenhum HTML do arquivo é interpretado.
- O `## Questão NNNN` serve como contexto textual; o identificador canônico é o campo `id` do JSON.

### E.6. Limitações identificadas

- O formato depende de blocos JSON; não há suporte a questões apenas em Markdown puro. Isso é adequado ao corpus atual e está documentado.
- As 1.191 questões geradas têm metadados de origem nulos; as 59 originais preservam exame, ano e número da questão quando disponíveis.
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
| Rótulos das alternativas | As letras originais A–D acompanham o texto mesmo fora de ordem. | As explicações dos materiais citam letras; remapear rótulos tornaria os comentários incorretos. A posição visual nunca é usada na correção. |
| Navegação | SPA com rotas em hash (`#/inicio`, `#/estudar`, `#/simulado`, `#/sessao`, `#/resumo`, `#/revisoes`, `#/progresso`, `#/config`). | Compatível com GitHub Pages sem regras de servidor; configurações acessíveis pelo ícone no topo. |
| Renderização segura | Todo texto dinâmico usa `textContent`/nós de texto; `innerHTML` só com ícones constantes. | Evita XSS mesmo que um arquivo de questão contenha HTML. |
| Sessão persistida | Objeto completo em `sessions`, incluindo índice, respostas e ordem das alternativas; restauração automática da sessão ativa. | Garante continuidade mesmo após fechar o navegador, sem reembaralhar. |
| Persistência | IndexedDB (`xlearn`) com stores `meta`, `progress`, `sessions`, `attempts`; toda a persistência do app usa IndexedDB. | Requisito do projeto; maior capacidade e consultas por chave. |
| SRS | Níveis 0–5; acerto avança e usa intervalos 1/3/7/14/30 dias; erro reduz nível e agenda 10 minutos. Intervalos configuráveis. | Simples, auditável e explicitamente não apresentado como validado cientificamente. |
| Escolha manual de revisão | Após um acerto, o feedback oferece automático ou 10 min, 1 h, 1, 3, 7, 14 e 30 dias; a escolha substitui `dueAt` e grava `manualSchedule`. Retornar ao automático restaura o intervalo original e remove a marcação manual. | Dá controle ao estudante sem alterar o nível de domínio já conquistado. |
| Fila de revisões | Agrupa o progresso por material, separa vencidas e futuras, ordena vencidas por data e oferece sessão apenas com as questões da fila (limite = tamanho configurado de sessão). | Prioriza o que está atrasado e transforma o agendamento em ação de estudo. |
| XP | Centralizado em `gamification.js` (puro): 2 XP por participação no erro; 10 XP + 2/4/6 por dificuldade no acerto; bônus de sessão de 25 XP + até 25 por aproveitamento + 25 se perfeita. Níveis em faixas quadráticas de 100 XP. A partir de REQ-035 o cálculo continua sendo gravado, mas o XP e os níveis deixam de aparecer na interface e de influenciar a evolução do personagem. | Mantém o histórico interno consistente sem expor uma métrica que não governa mais a progressão visível. |
| Conquistas | Lista declarativa com critérios verificáveis sobre respostas, acertos, sessões, sessões perfeitas, meta, sequência e estágio da temporada. As antigas conquistas de nível 3/5 são substituídas por “Primeira evolução” e “Mestre da temporada”. O desbloqueio e a recompensa de XP interno são resolvidos em laço, uma única vez, na mesma transação da resposta, da sessão ou da coleta. | Critérios auditáveis, sem dados fictícios e sem risco de pagamento duplicado. |
| Temporada e evolução | `season.js` (puro) define a Temporada 1 (`2026-1`, 05/11/2026 a 04/12/2026) e os cinco estágios do personagem com dois requisitos simultâneos: moedas acumuladas na temporada e dias ativos. Faixas: 0/0, 300/3, 600/6, 1000/9 e 1500/12. O ledger `meta/season` guarda `coinsEarned` e só recebe moedas enquanto a temporada está vigente; os dias ativos são derivados de `stats.daily` dentro do intervalo da temporada. O estágio é o maior que atende aos dois critérios, avança apenas e congela após `endsAt` até uma nova temporada ser configurada. | A progressão reflete constância real, não apenas volume de respostas, e permanece estável quando o jogador gasta moedas. Derivar dias ativos das estatísticas evita um segundo contador divergente. |
| Moedas da temporada | O total da temporada é um ledger separado de `wallet.earned`, porque a carteira é cumulativa e incluiria ganhos posteriores ao fim da temporada. Respostas, meta diária, conclusão de sessão e coleta de conquistas incrementam `meta/season.coinsEarned` na mesma transação do pagamento. | Mantém a evolução fiel ao intervalo da temporada e à regra de congelamento, sem alterar a economia da carteira. |
| Meta e sequência | Calculadas de `stats.daily` em módulo puro, usando a chave de dia local. A sequência continua válida no dia seguinte ao último estudo e quebra após um dia inteiro sem respostas; o recorde é persistido na gamificação. Meta configurável define o percentual e a conquista diária. | Reflete o uso real no fuso do dispositivo, sem depender de servidor nem inventar dias. |
| Tela de estatísticas | Rota `#/progresso` lê `getStats`, `getProgressSummary`, `getGamification` e as 10 tentativas mais recentes. Os totais vêm de estatísticas agregadas; o desempenho por disciplina agrupa os materiais pelo campo `subject`; as conquistas são ordenadas por desbloqueio e o histórico mostra marcada, gabarito, assunto, data e se foi revisão. | Uma única tela auditável, sem recalcular regras no DOM nem inventar métricas; o estado vazio é explícito e os dados continuam locais. |
| Configurações de estudo | Rota `#/config` com formulário único para tamanho da sessão (1–100), meta diária (1–500), ordem das questões (aleatória/sequencial), ativação do SRS e cinco intervalos crescentes em dias (1–365). A validação ocorre antes de gravar; o objeto normalizado é salvo em `meta/settings` e aplicado em memória. | Controles simples e auditáveis, com efeito imediato na próxima sessão/resposta e sem alterar retroativamente o histórico. Intervalos inválidos são rejeitados com mensagem clara. |
| Aparência | Tema `system`/`dark`/`light`, fonte de 14–22 px e animações ligadas/desligadas no mesmo formulário. Ao salvar, `applyVisualSettings` grava `data-theme`, `data-animations` e `--font-size`, atualiza `theme-color` e a preferência do sistema é observada para reaplicar o tema quando ela mudar. | Aplicação imediata sem recarregar, persistência no mesmo objeto de configurações e respeito à preferência do dispositivo. |
| Ranking | `js/ranking.js` (puro) classifica provas e disciplinas pelo limite inferior do intervalo de confiança de 95% (Wilson), combinando precisão e volume; itens sem respostas são omitidos e a interface informa que é local. | Evita que uma única resposta correta lidere e atende ao requisito sem inventar estudantes ou perfis. |
| Backup | `js/backup.js` (puro) cria um envelope `xlearn-backup` versão 1 com `app`, `schemaVersion`, `exportedAt`, resumo (incluindo a presença da carteira, do histórico de simulados e de simulado ativo) e os quatro stores; como a carteira e os simulados vivem em `meta`, eles são exportados e restaurados junto dos demais dados. `validateBackup` confere formato, versão, presença das listas, objeto de cada registro e chaves únicas antes de qualquer escrita. `exportDatabase` lê os quatro stores em uma transação; `importDatabase` valida de novo e substitui todos em uma única transação `readwrite`. | Formato identificável e versionado, com restauração atômica e rejeição de arquivos inválidos sem tocar nos dados existentes. |
| Limpeza de dados | `js/storage.js` (puro) remove somente caches cujo nome é `xlearn`, começa com `xlearn-` ou `xlearn:`; sem Cache API, retorna `supported: false`. `clearProgressData` limpa `progress`, `sessions` e `attempts` e apaga `stats`/`season`/`gamification`/`wallet`/`simuladoSession`/`simulados` de `meta` na mesma transação, preservando `meta/settings`. As duas ações ficam em cartão próprio de `#/config`, com confirmação inline para a exclusão. | Separa cache de progresso de forma explícita, não interfere em outros apps do mesmo domínio e reinicia estatísticas, temporada, moedas e personagem junto com as respostas para não deixar totais incoerentes. |
| PWA instalável | `manifest.webmanifest` na raiz declara nome, `lang`, `start_url`/`scope` relativos (`./`), `display: standalone`, cores e três ícones PNG (192, 512 any e 512 maskable), além de Apple Touch 180. `scripts/build-icons.mjs` gera os PNGs sem dependências, com rasterização 4x e margem de segurança no maskable. `index.html` vincula manifesto, ícone Apple e metas móveis. | Instalação em navegadores compatíveis, ícones nítidos e caminhos que funcionam tanto na raiz quanto em subdiretório do GitHub Pages. |
| Offline | `service-worker.js` usa caches versionadas no formato `xlearn-shell-vN`/`xlearn-runtime-vN`. No install, pré-cacheia o app shell e `questoes/manifest.json`; no activate, remove versões antigas com prefixo `xlearn-` e assume as páginas. Navegação usa rede primeiro com fallback do `index.html`; manifesto/materiais usam rede primeiro com cache de runtime; demais estáticos usam cache primeiro. O app registra o worker em `document.baseURI` com escopo `./` e avisa quando uma nova versão está instalada, sem recarregar à força. | Funciona em subdiretório, mantém o shell consistente por versão, preserva o progresso em IndexedDB e permite atualizar sem interromper uma questão em andamento. Os nomes de cache continuam compatíveis com a limpeza manual. |
| Cache | App shell em cache na instalação; materiais em cache após o primeiro acesso; navegação com fallback para `index.html`. | Compatível com offline e subdiretórios do GitHub Pages. |
| Moedas e personagem | `js/coins.js` (puro) concentra a economia: 2 moedas por acerto, 10 por sessão concluída + 5 se perfeita, 15 pela meta diária uma vez por dia e recompensas de conquistas coletadas manualmente. A carteira em `meta/wallet` guarda saldo, total acumulado (`earned`), gasto, sessões pagas, dias de meta e conquistas coletadas. A evolução do personagem passa a usar o ledger da temporada (`meta/season`) e os dias ativos, com cinco SVGs reais; `wallet.earned` continua sendo o total histórico da carteira. | Moedas e evolução persistem localmente e continuam corretas após recarregar; separar o ledger da temporada evita que ganhos fora do período alterem o personagem congelado. Os pagamentos usam chaves idempotentes por sessão/dia para não duplicar recompensas. |
| Som | `js/sound.js` (Web Audio, sem arquivos) sintetiza efeitos curtos e mantém um único `AudioContext`, criado apenas após gesto do usuário. Preferências `soundEnabled` e `soundVolume` integram `meta/settings`; o botão do topo e as prévias usam a mesma fonte. Feedback visual usa classes decorativas com `aria-hidden` e é neutralizado por `data-animations="off"`/`prefers-reduced-motion`. | Atende ao requisito lúdico sem dependências, sem autoplay bloqueado e sem alterar o conteúdo acessível ou o gabarito. |
| Cronômetro da prova | `js/timer.js` (puro) cria um cronômetro desligado por padrão, com duração de 5–120 minutos e padrão de 30. Enquanto corre, guarda `deadlineAt`; ao pausar, congela `remainingSeconds`; ao retomar, recria o limite. A sessão persiste o objeto `timer`, o app atualiza um único nó com `role="timer"` a cada segundo, entra em estado de alerta no último minuto e pausa/retoma ao ocultar/mostrar a aba. Ao zerar, aguarda a gravação da última resposta, encerra a sessão, premia a conclusão e abre o resumo com as não respondidas destacadas. | O instante-limite mantém o tempo correto mesmo com atraso de renderização; a pausa ao ocultar evita punir quem troca de aba. O cronômetro é aplicado só a `mode: "material"`, nunca a revisões, correções ou simulados. |
| Simulados por assunto | A rota `#/simulado` agrupa os materiais válidos por `subject`, aceita uma quantidade por assunto e monta a sessão com IDs compostos `materialId::questionId` para evitar colisão. O simulado ativo vive em `meta/simuladoSession` com `mode: "simulado"`; a conclusão grava apenas um resumo compacto em `meta/simulados` (datas, duração, totais e acertos por assunto). Nenhum caminho de gravação normal é chamado: sem `progress`, `attempts`, `sessions`, `stats`, gamificação, carteira ou SRS. O quiz reaproveita embaralhamento e correção, mas o resumo é próprio e o cronômetro de prova fica desligado. | Mantém o simulado isolado por definição, permite retomar simulado e sessão normal de forma independente e preserva a precisão dos totais por assunto sem inflar ranking ou estatísticas. |
| Coleta de conquistas | As conquistas desbloqueadas viram botões “Clique para coletar”. `claimAchievementReward` usa o valor canônico de `ACHIEVEMENTS` e executa, em uma única transação `readwrite` no store `meta`, a leitura da gamificação e da carteira, a verificação de desbloqueio e o registro em `claimedAchievements`. A interface só anima e toca o som de moedas quando o retorno tem ganho; chamadas repetidas retornam `alreadyClaimed` sem alterar o saldo. | Impede concessão automática, adulteração do valor pelo DOM e pagamento duplicado por cliques repetidos ou abas concorrentes; a cascata e o som comemoram somente a coleta efetiva. |
| Conquistas pendentes na home | `renderHomeAchievements()` filtra `listAchievements` por `achievementClaim(...).collectible` e insere a seção logo após a visão rápida, com a mesma grade e o mesmo botão acessível da tela de progresso. Ao coletar, `collectAchievement` mantém a seção renderizada durante os 1300 ms da cascata, aguarda a animação e só então chama `render()`; sem pendências, a seção deixa de existir e o foco vai para a próxima conquista, para a própria seção ou para o conteúdo da home. A cascata usa uma camada `position: fixed` no centro da viewport (`top/left: 50%`) e distribui as moedas por `--x`, `--drift` e `--delay`. | Torna as recompensas visíveis sem exigir que o estudante abra a tela de progresso e evita que o item desapareça antes da comemoração. O centro fixo impede que a animação seja cortada ou deslocada em telas pequenas e mantém a comemoração independente do layout do cartão. |
| Cabeçalho fixo da prova | A `.quiz-head` de `renderQuiz` usa `position: sticky` com `top: var(--topbar-height)`, `z-index: 30`, fundo translúcido com `backdrop-filter`, borda inferior e margens negativas equivalentes ao padding do conteúdo (16 px no mobile e 24 px em telas maiores). O bloco contém o título, o contador de progresso e o cronômetro, que continuam acessíveis durante a rolagem. | Mantém o tempo e o avanço visíveis sem criar uma segunda barra fixa, sem cobrir o topo do app e sem exigir posicionamento absoluto que quebraria o fluxo do documento ou a rolagem em telas pequenas. |
| Campos de explicação | `normalizeQuestion` monta `explanation` apenas com `resolution` e `theoreticalContent`; `bank_approach`, `study_tip` e `review_summary` não são lidos. `renderFeedback` exibe a resolução, o bloco opcional “Aula completa” e o comentário de cada alternativa, sem seções de banca, dica ou resumo. | Alinha o app ao novo formato de geração dos estudos, reduz o payload em memória e evita depender de campos que deixarão de existir. Materiais antigos continuam carregando porque os campos extras são simplesmente ignorados. |
| Conta Supabase | `js/cloud.js` fala diretamente com GoTrue (`/auth/v1/signup`, `/auth/v1/token`, `/auth/v1/user`, `/auth/v1/logout`) e PostgREST (`/rest/v1/season_scores`, `/rest/v1/season_leaderboard`) via `fetch`, sem SDK ou dependência de runtime. O cadastro tenta entrar primeiro e cria a conta se as credenciais não existirem; apelido, e-mail e senha são validados no cliente e no servidor. A sessão (access token, refresh token, validade, `user_id` e apelido) fica em `meta/cloudAuth`; a senha nunca é armazenada. Tokens são renovados antes de expirar e erros de autenticação limpam a sessão local. | Mantém o projeto em JavaScript puro, reduz o shell e deixa o fluxo testável com `fetch` simulado. A renovação evita interromper o estudo e a sessão persistida atende à temporada inteira. |
| Ranking da temporada | `supabase/schema.sql` cria `season_scores` com PK `(user_id, season_id)`, apelido, nível, moedas, dias ativos e `updated_at`, além da view `season_leaderboard` com `row_number()` por moedas, dias ativos e antiguidade. RLS permite leitura pública e escrita apenas de `auth.uid() = user_id`; o e-mail permanece em `auth.users`. O app consulta o top 5 e a linha do próprio usuário, destaca “Você” quando aparecer no top 5 e mostra a posição separada quando estiver fora. | Ranking auditável, sem perfis fictícios e sem expor e-mail. A view concentra a ordenação para que todos os clientes vejam a mesma posição. |
| Sincronização e offline | O placar é montado a partir de `summarizeSeason` (estágio, moedas da temporada e dias ativos) e enviado com `POST` + `Prefer: resolution=merge-duplicates`. O envio é agendado após respostas, conclusão de sessão, coleta de conquistas e boot, com debounce; ao abrir a home, o app tenta sincronizar e então atualiza o ranking. Falhas de rede não bloqueiam o estudo, mantêm o placar local e são reenviadas quando `online` volta. O ranking consultado é cacheado em `meta/cloudRank` para exibição offline. | O ranking reflete o mesmo ledger local já usado pelo personagem, sem criar uma segunda contabilidade. Cache e debounce evitam chamadas excessivas e permitem estudar sem internet. |
| Privacidade e segurança do ranking | A chave publishable é pública e fica em `js/cloud-config.js`; a proteção depende de RLS. A view expõe somente `user_id`, apelido, nível, moedas, dias ativos e datas; nenhum e-mail é retornado. O backup exporta `meta` sem `cloudAuth`, para não vazar tokens, e importações não restauram sessões antigas. | A chave pública é necessária no cliente; limitar a escrita ao próprio UUID e omitir e-mail/tokens reduz o impacto de vazamento. |
| Versionamento | Um commit funcional por requisito, Conventional Commits, push após cada entrega; hash registrado no commit seguinte. | Rastreabilidade e histórico incremental. |
| Entrega conjunta REQ-004..007 | Seleção, exibição, embaralhamento e correção entregues juntos. | São inseparáveis para que exista um fluxo utilizável; um commit intermediário sem correção ou sem shuffle seria uma funcionalidade parcial, o que o projeto proíbe. |
| Entrega conjunta REQ-011..013 | Agendamento automático, escolha manual e fila de revisões entregues juntos. | O agendamento só tem efeito observável na fila; a escolha manual precisa do agendamento para existir. Separar produziria estados inutilizáveis. |

---

## G. Histórico de evolução

| Versão | Requisito | Implementação | Commit | Data |
|---|---|---|---|---|
| 0.1.0 | — | Inspeção inicial e criação do `PROJECT_STATUS.md` | `cacae51` | 2026-11-01 |
| 0.2.0 | REQ-001, REQ-002, REQ-003 | Gerador de manifesto, manifesto real com 2 materiais/150 questões, parser puro, normalização, validação e carregador via fetch | `c18edd1` | 2026-11-01 |
| 0.3.0 | REQ-004, REQ-005, REQ-006, REQ-007 | Shell responsivo, dashboard, seleção de provas, sessão com embaralhamento determinístico, confirmação única, feedback completo e resumo | `7912bed` | 2026-11-01 |
| 0.4.0 | REQ-008, REQ-009, REQ-010 | IndexedDB com meta/progress/sessions/attempts, gravação atômica das respostas, restauração da sessão ativa, histórico e progresso por prova | `ed4f216` | 2026-11-01 |
| 0.5.0 | REQ-011, REQ-012, REQ-013 | Módulo `srs.js`, agendamento automático 1/3/7/14/30 dias, revisão curta de 10 min no erro, escolha manual após acerto, fila vencidas/futuras, selo na navegação e sessão só de revisões | `e175e96` | 2026-11-01 |
| 0.6.0 | REQ-014 | Módulo `gamification.js`, XP por resposta e dificuldade, bônus de sessão pago uma única vez, níveis em faixas quadráticas e card de progresso no dashboard | `d5736f7` | 2026-11-01 |
| 0.7.0 | REQ-015 | Conquistas declarativas (primeira resposta, primeiro acerto, volume, sessões, sessão perfeita e níveis 3/5), recompensa de XP única, anúncio por toast e card de conquistas no dashboard | `f82aac5` | 2026-11-01 |
| 0.8.0 | REQ-016 | Meta diária configurável, progresso do dia, sequência atual, recorde de dias consecutivos, conquistas de meta e sequências de 3/7 dias e card de ritmo no dashboard | `1e7ef43` | 2026-11-01 |
| 0.9.0 | REQ-017 | Tela de progresso com totais, precisão, nível, meta/sequência, desempenho por disciplina, grade completa de conquistas, tentativas recentes e estados vazios | `944c71b` | 2026-11-01 |
| 0.10.0 | REQ-018 | Ranking local por prova e disciplina com índice de Wilson, exclusão de itens sem respostas, destaque do pódio e aviso explícito de que não é global | `ec6f46e` | 2026-11-01 |
| 0.11.0 | REQ-019 | Tela de configurações de estudo com validação e persistência de tamanho/meta/ordem, ativação do SRS e cinco intervalos crescentes | `b9c3bc3` | 2026-11-01 |
| 0.12.0 | REQ-020 | Tema claro/escuro/sistema, tamanho do texto de 14–22 px, animações configuráveis, aplicação imediata, `theme-color` sincronizado e observação da preferência do sistema | `8736881` + `8215f0b` | 2026-11-01 |
| 0.13.0 | REQ-021 | Exportação JSON versionada, validação de formato/versão/registros, resumo antes de restaurar, confirmação explícita, substituição atômica dos quatro stores e recarga do estado da interface | `a3956c1` | 2026-11-01 |
| 0.14.0 | REQ-022 | Limpeza seletiva dos caches do app sem tocar no IndexedDB e exclusão separada de progresso/sessões/tentativas/estatísticas/gamificação com confirmação e preservação das configurações | `fc093ef` | 2026-11-01 |
| 0.15.0 | REQ-023 | Manifesto web instalável com escopo relativo, ícones PNG 192/512, maskable com margem segura, Apple Touch opaco, geração sem dependências e vínculo no HTML | `3bdbd60` | 2026-11-01 |
| 0.16.0 | REQ-024 | Service worker com app shell pré-cacheado, manifesto e materiais acessados em runtime, fallback offline, limpeza de versões antigas, escopo relativo e aviso de atualização sem recarregar forçado | `695046a` | 2026-11-01 |
| 0.16.1 | — | Correção de publicação: `.nojekyll` impede o Jekyll de converter os materiais Markdown, que respondiam 404 no GitHub Pages | `facf70d` | 2026-11-02 |
| 0.17.0 | REQ-025 | Indicador online/offline no topo, aviso de contingência com o que continua disponível, anúncio acessível, reconexão com toast e resposta salva localmente enquanto offline | `eeff2aa` | 2026-11-02 |
| 0.18.0 | REQ-026 | Link de pular desacoplado do roteador, foco após avançar/agendar/cancelar, progresso do quiz como `progressbar`, letras e gabarito anunciados nas alternativas, contraste corrigido nos dois temas, alvos de toque de 44 px e ajuste para 320 px | `0cd60c1` | 2026-11-02 |
| 0.19.0 | — | Planejamento da fase 8: sons, moedas, personagem, cronômetro e simulados adicionados à especificação | `c1611ab` | 2026-11-02 |
| 0.20.0 | REQ-029 | Módulo `sound.js` com efeitos de acerto, erro, início/fim de prova, conquista e moeda gerados via Web Audio; volume e alternância persistidos; botão de som no topo, prévias em `#/config`, primeiro gesto libera o áudio e feedback visual lúdico respeitando animações reduzidas | `02b1f12` | 2026-11-02 |
| 0.21.0 | REQ-030 | Módulo `coins.js` com carteira persistida em `meta/wallet`, moedas por acerto/sessão/meta, estágios do personagem por total acumulado, cinco SVGs reais, recompensas de conquistas preparadas para coleta e cartão “Personagem & Moedas” no dashboard | `3353195` | 2026-11-03 |
| 0.22.0 | REQ-031 | Módulo `timer.js` com cronômetro regressivo de 5–120 minutos, persistência de `deadlineAt`/`remainingSeconds`, pausa automática ao ocultar a aba, alerta no último minuto, encerramento automático com resumo marcando não respondidas e exclusão de revisões/correções | `369fb6f` | 2026-11-03 |
| 0.23.0 | REQ-032 | Módulo `simulado.js` puro, rota `#/simulado`, construtor por assunto com total em tempo real, sessão ativa separada em `meta/simuladoSession`, histórico idempotente em `meta/simulados`, resumo por assunto e isolamento de progresso/XP/conquistas/SRS/ranking/estatísticas/moedas | `2c67248` | 2026-11-04 |
| 0.24.0 | REQ-033 | Coleta manual de moedas das conquistas desbloqueadas com botão acessível, valor canônico, transação atômica e idempotente, cascata decorativa de moedas, som de moeda, saldo/pendências atualizados no dashboard e no progresso | `0464c32` | 2026-11-04 |
| 0.25.0 | REQ-027 | Campanha final de testes em 12 suítes temporárias (unitárias, DOM/IndexedDB, PWA/estática e regressões), cobrindo 10 materiais/1250 questões; correção da rota `#/estudar`, que quebrava ao aplicar spread em um único elemento | `8f7219a` | 2026-11-04 |
| 0.26.0 | REQ-028 | README completo com visão geral, funcionalidades, requisitos, execução local, publicação no GitHub Pages, instalação PWA, uso, formato das provas, backup/privacidade, estrutura, validação e limitações | `fb1fe7b` | 2026-11-05 |
| 0.26.1 | — | Correção do dashboard: a renderização filtra entradas nulas antes de `replaceChildren`, eliminando o texto “null” exibido antes da seção de provas; service worker elevado para `v9` | `29079d7` | 2026-11-05 |
| 0.27.0 | — | Dashboard simplificado: visão rápida com quatro atalhos para o progresso, remoção das estatísticas do hero, da grade de provas e do aviso “Como funciona”; cartão do personagem movido para `#/progresso`; service worker elevado para `v10` | `58bc65f` | 2026-11-05 |
| 0.28.0 | REQ-034, REQ-035 | Planejamento da Temporada 1 (05/11 a 04/12/2026): evolução por moedas acumuladas + dias ativos (faixas iniciais 60/150/270/400, ajustadas depois por REQ-040 para 300/600/1000/1500 e 3/6/9/12), congelamento ao término, XP interno fora da interface e substituição das conquistas de nível por conquistas de temporada | `—` | 2026-11-05 |
| 0.29.0 | REQ-034 | Temporada 1 (05/11 a 04/12/2026) com `season.js` puro, ledger `meta/season` incrementado nas respostas, sessões e coletas, dias ativos derivados de `stats.daily`, cinco estágios com dois requisitos simultâneos, congelamento ao término, card de temporada com duas barras e limpeza junto do progresso | `05078e8` | 2026-11-05 |
| 0.30.0 | REQ-035 | XP e níveis restritos ao armazenamento interno, remoção de XP/níveis da interface, conquistas `primeira-evolucao` e `mestre-temporada` no lugar de `nivel-3`/`nivel-5`, reconciliação pós-ledger em respostas, sessões e coletas, service worker `v12` e textos de SRS como “domínio” | `d41e913` | 2026-11-05 |
| 0.30.1 | — | Correção do posicionamento dos toasts: a animação de entrada sobrescrevia o `translateX(-50%)`, deslocando as mensagens para a direita; a animação `toast-rise` passou a preservar a centralização horizontal, com service worker `v13` | `ea4da69` | 2026-11-05 |
| 0.31.0 | REQ-036 | Feedback de respostas certas e erradas movido para janela modal acessível, aberta pelo botão “Mostrar feedback”, com pausa e retomada do cronômetro, persistência da sessão, foco preso, `Escape`, retorno de foco, toasts acima da modal e service worker `v14` | `9ffb950` | 2026-11-06 |
| 0.32.0 | REQ-037 | Seção de conquistas desbloqueadas e ainda não coletadas na tela inicial, removida após a animação da coleta, com cascata de moedas centralizada na viewport e foco preservado; service worker `v15` | `57a1d06` | 2026-11-06 |
| 0.33.0 | REQ-038 | Cabeçalho da prova fixo com `position: sticky` sob o topo do app, mantendo título, contador de questões e cronômetro visíveis durante a rolagem, com fundo translúcido, borda e ajuste de largura no mobile; service worker `v16` | `43aac93` | 2026-11-06 |
| 0.34.0 | REQ-039 | Remoção de `bank_approach`, `study_tip` e `review_summary` do parser e do feedback; explicação restrita a resolução, conteúdo teórico e comentários das alternativas; documentação do novo formato e service worker `v17` | `e0295a6` | 2026-11-06 |
| 0.35.0 | REQ-040 | Elevação das faixas de moedas da Temporada 1 para 300/600/1000/1500, mantendo 0 no Curioso e os dias ativos em 0/3/6/9/12; README, PROJECT_STATUS e service worker `v18` atualizados | `7044f75` | 2026-11-06 |
| 0.36.0 | REQ-041, REQ-042, REQ-043 | Planejamento da conta Supabase, da sessão sazonal e do ranking global da Temporada 1; criação de `supabase/schema.sql` (tabela, view, RLS e grants) e dos módulos `js/cloud-config.js` e `js/cloud.js`; integração de UI, sincronização e cache em andamento | `ba66293` | 2026-11-07 |
| 0.36.1 | REQ-041, REQ-042, REQ-043 | Entrega conjunta do código da fase 10 (commit manual do mantenedor): cliente Supabase, modal e sessão, sincronização, ranking na home, estilos, backup sem `cloudAuth`, schema/migration e service worker `v19` | `e1b2b88` | 2026-11-07 |
| 0.37.0 | REQ-041 | Validação e documentação da conta Supabase: cadastro/login por apelido, e-mail e senha, sessão em `meta/cloudAuth` renovada por refresh token, modal acessível com “Continuar offline”, gate na primeira prova normal, simulados fora do gate e exclusão de `cloudAuth` do backup; schema/migration aplicados no remoto, confirmação de e-mail desativada e service worker `v19` | `2af1a02` | 2026-11-07 |
| 0.38.0 | REQ-042 | Validação e documentação da sincronização de nível e moedas: placar derivado de `summarizeSeason`, UPSERT por `user_id`/`season_id`, debounce, reenvio ao reconectar, cartão de conta com status e sincronização manual, além de testes unitários e DOM do fluxo completo | `d3fe7dc` | 2026-11-07 |
| 0.39.0 | REQ-043 | Validação e documentação do ranking global na home: top 5 com posição, apelido, nível e moedas, posição do usuário fora do top 5, atualização a cada acesso, cache offline em `meta/cloudRank`, estados de carregamento/erro, estilos responsivos e testes DOM do fluxo completo | `60c2ba0` | 2026-11-07 |
| 0.40.0 | REQ-044 | Barra superior com identidade: apelido no lugar da assinatura quando logado, botão de sair ao lado das configurações apenas com sessão, remoção da contagem de questões e indicador de conexão com três estados (Online, Offline e Visitante); service worker `v20` | `299c38d` | 2026-11-07 |
| 0.41.0 | REQ-045 | Modal de conta dividida em abas acessíveis “Entrar” e “Criar conta”: login apenas com e-mail e senha, cadastro com apelido, e-mail e senha, campo de apelido oculto no login, sem criação automática de conta em credenciais inválidas, orientação cruzada entre os modos e `autocomplete` adequado ao cadastro; service worker `v21` | `e48c5d4` | 2026-11-08 |
| 0.42.0 | REQ-046 | “Apagar progresso” nas Configurações deixa de saltar para o topo: a posição de rolagem é preservada, o foco vai para “Apagar todo o progresso” com `preventScroll` e o bloco é revelado com `scrollIntoView({ block: "nearest" })`; service worker `v22` | `9606e5b` | 2026-11-08 |
| 0.43.0 | REQ-047 | Restrições do visitante: menu inferior e atalhos sem Configurações, Progresso, Simulado e Revisões, botão de configurações oculto, rotas diretas substituídas por uma área de conta, primeira questão de cada prova como limite do visitante, avanço e feedback redirecionados para o cadastro e resumo sem gabarito para quem não tem conta; service worker `v23` | `c3038cf` | 2026-11-08 |

---

## H. Funcionalidades implementadas

- **REQ-001 — Manifesto:** `scripts/build-manifest.mjs` varre `questoes/` recursivamente, ignora `manifest.json`/`README.md`, interpreta cada material, calcula SHA-256 e metadados, detecta IDs duplicados e gera `questoes/manifest.json`. Modo `--check` valida sem gravar. `npm run build:manifest` e `npm run check` disponíveis.
- **REQ-002 — Interpretador:** `js/parser.js` lê frontmatter YAML simples e blocos ```json, normaliza questões, valida alternativas, gabarito e campos obrigatórios, e reporta diagnósticos sem interromper o material. Inclui `shuffle` Fisher–Yates, PRNG semeado e hash de string.
- **REQ-003 — Carregamento:** `js/questions.js` carrega o manifesto, valida caminhos e duplicatas, resolve URLs relativas à raiz do projeto, mantém cache em memória e continua carregando os demais materiais quando um falha.
- **REQ-004 — Seleção de provas:** a tela de provas lista os materiais válidos do manifesto com disciplina, banca, assunto e quantidade real de questões; o botão "Estudar" carrega o material e inicia a sessão. O dashboard mantém apenas atalhos para essa seleção.
- **REQ-005 — Exibição de questões:** tela de resolução com progresso, posição da questão, metadados, enunciado e alternativas; sessão em memória pode ser retomada ao voltar ao início.
- **REQ-006 — Embaralhamento:** Fisher–Yates com PRNG semeado por `sessionId + questionId`; a ordem é guardada em `session.orders`, as letras originais A–D acompanham cada alternativa e o gabarito é corrigido por identificador.
- **REQ-007 — Correção e feedback:** confirmação explícita, bloqueio de resposta duplicada, destaque da correta e da marcada, resolução, aula completa e comentário individual das alternativas, apresentados em modal sob demanda após a resposta. Resumo final com aproveitamento, duração, acertos/erros e revisão dos erros.
- **Interface:** `index.html` e `css/styles.css` com temas escuro/claro por variáveis, layout responsivo, navegação inferior, foco visível, `prefers-reduced-motion` e componentes de acessibilidade.
- **REQ-008 — IndexedDB:** `js/db.js` cria o banco `xlearn` (versão 1) com stores `meta`, `progress`, `sessions` e `attempts`. Cada confirmação é gravada em transação atômica com sessão, progresso da questão (acertos, erros, sequência, histórico curto), tentativa completa e estatísticas agregadas por dia/material.
- **REQ-009 — Retomada:** a sessão é salva no início, a cada resposta e a cada avanço. Ao abrir o app, a sessão ativa mais recente é restaurada, o material é recarregado, a ordem original das alternativas é reproduzida pelo PRNG semeado e o índice é mantido. Se todas as questões já estavam respondidas, o app abre o resumo.
- **REQ-010 — Progresso:** a tela de provas exibe, por prova, quantas questões já foram respondidas e o percentual de acerto; as tentativas ficam disponíveis em `attempts` e alimentam o histórico e as estatísticas agregadas da rota `#/progresso`. Configurações salvas são carregadas no boot.
- **REQ-011 — Agendamento automático:** `js/srs.js` calcula o próximo nível e vencimento sem DOM. Acertos sobem até o nível 5 e usam 1, 3, 7, 14 ou 30 dias; erros descem um nível e agendam nova revisão em 10 minutos. Desativar a repetição espaçada grava a resposta sem data de revisão. O agendamento é salvo atomicamente com a resposta e registrado no histórico da questão.
- **REQ-012 — Intervalo manual:** no feedback de um acerto, o estudante pode manter o automático ou escolher 10 min, 1 h, 1, 3, 7, 14 ou 30 dias. A alteração é persistida em `progress` com `manualSchedule`, sem reduzir o nível conquistado; voltar ao automático restaura o intervalo automático original e remove a marcação manual.
- **REQ-013 — Fila de revisões:** a rota `#/revisoes` agrupa por prova, mostra contadores de vencidas e futuras, lista as próximas questões e prioriza as atrasadas ao montar a sessão. O item "Revisões" na navegação exibe um selo com o total vencido, e o dashboard alerta quando há revisões atrasadas.
- **REQ-014 — XP e níveis internos:** `js/gamification.js` centraliza as regras: 2 XP por participação no erro; 10 XP + bônus de dificuldade (2/4/6) no acerto; bônus de sessão de 25 XP + até 25 por aproveitamento + 25 se todas corretas. O XP e os contadores são gravados na mesma transação da resposta; a premiação de sessão é paga uma única vez por `sessionId`, inclusive após recarregar. Desde REQ-035, o XP e os níveis continuam sendo calculados e persistidos apenas como histórico interno: não aparecem em nenhuma tela e não influenciam a evolução do personagem.
- **REQ-015 — Conquistas:** treze conquistas reais baseadas em primeira resposta, primeiro acerto, 10/50/100 questões, 1/5 sessões, sessão perfeita, meta, sequência e estágios da temporada. Cada uma tem recompensa própria em moedas e XP interno, data de desbloqueio e é paga uma única vez. O desbloqueio é resolvido na mesma transação da resposta, da sessão ou da coleta, pode encadear conquistas e é anunciado por toast. A visão rápida do dashboard mostra quantas foram desbloqueadas e as moedas pendentes; a tela de progresso exibe as 13 conquistas em grade e permite a coleta. Desde REQ-035, “Primeira evolução” e “Mestre da temporada” substituem as antigas conquistas de nível 3/5.
- **REQ-016 — Meta e sequência:** `gamification.js` calcula a meta diária a partir de `settings.dailyGoal` e de `stats.daily`, com questões respondidas, percentual, restante e conclusão. A sequência atual continua válida no dia seguinte ao último estudo e quebra somente após um dia inteiro sem respostas; o recorde histórico é recalculado e persistido. O dashboard mostra meta, sequência atual e recorde na visão rápida; a tela de progresso detalha barra, restante e se já houve estudo no dia. Três novas conquistas cobrem meta batida e sequências de 3 e 7 dias.
- **REQ-017 — Estatísticas:** a rota `#/progresso`, acessível pela navegação inferior, reúne quatro totais (respondidas, acertos, precisão e sessões), o card da temporada (personagem, estágio, moedas e dias ativos), o card de meta/sequência, o ranking local, as 13 conquistas em grade (desbloqueadas primeiro) e as 10 tentativas mais recentes com marcada, gabarito, assunto, data e indicação de revisão. Os dados vêm do IndexedDB; cada bloco tem estado vazio e o layout passa a duas colunas no mobile, mantendo os alvos de toque.
- **REQ-018 — Ranking local:** `js/ranking.js` calcula o limite inferior de confiança de 95% (Wilson) para cada prova e disciplina, ordenando por esse índice, depois por volume, precisão e título. A tela de progresso mostra duas listas (disciplinas e provas) com posição, questões respondidas, precisão e índice; só entram itens com pelo menos uma resposta, o pódio recebe destaque e a interface explica que o ranking é apenas deste dispositivo. Nenhum estudante ou placar fictício é criado.
- **REQ-019 — Configurações de estudo:** o ícone de engrenagem no topo abre `#/config`. O formulário ajusta questões por sessão, meta diária, ordem das questões, ativação da repetição espaçada e os cinco intervalos automáticos em dias. Os valores são validados (faixas, inteiros e intervalos crescentes), normalizados, aplicados em memória e gravados em `meta/settings`; a próxima sessão já usa tamanho/ordem e a próxima resposta usa meta e SRS atualizados. O histórico existente não é reescrito.
- **REQ-020 — Preferências de interface:** a seção Aparência de `#/config` oferece tema do sistema/escuro/claro, controle deslizante de fonte (14–22 px, com valor exibido) e chave de animações. Ao salvar, as preferências são persistidas junto às demais, o tema é resolvido (`data-theme`), as animações são reduzidas (`data-animations="off"`), a variável `--font-size` e o `theme-color` são atualizados sem recarregar. Quando o tema é “sistema”, uma mudança na preferência do dispositivo reaplica a aparência.
- **REQ-021 — Exportação e importação:** a seção Dados de `#/config` gera um arquivo `xlearn-backup-AAAA-MM-DD.json` com configurações, temporada, gamificação (incluindo o XP interno), conquistas, moedas, personagem, progresso, sessões, tentativas, histórico de simulados e simulado ativo. A importação lê o arquivo, limita o tamanho a 25 MB, exige JSON válido e envelope `xlearn-backup` na versão 1, valida todas as listas e chaves antes de escrever e mostra um resumo (tentativas, sessões, questões com progresso, configurações, gamificação, moedas e simulados). Só após “Substituir dados” os quatro stores são trocados em uma única transação; cancelar ou usar um arquivo inválido mantém os dados atuais. Ao concluir, o app recarrega configurações, aparência, sessão ativa e progresso e volta ao início.
- **REQ-022 — Gerenciamento de dados:** o cartão “Armazenamento local” de `#/config` separa duas ações. “Limpar cache do app” remove apenas caches com prefixo `xlearn` (HTML, CSS, JS e questões), informa quando a Cache API não existe ou não há cache e mantém respostas e histórico. “Apagar progresso” abre uma confirmação inline que avisa ser irreversível e lista o que será removido; ao confirmar, apaga `progress`, `sessions`, `attempts`, `stats`, `season`, `gamification`, `wallet`, `simuladoSession` e `simulados` em uma transação, preserva `meta/settings`, zera o estado da interface, recarrega o dashboard e volta ao início. Cancelar não altera nada. A próxima resposta recomeça as estatísticas, as moedas, a temporada e o personagem do zero.
- **REQ-023 — Base do PWA:** `manifest.webmanifest` identifica o app como “XLearn — aprenda praticando”, em pt-BR, com `start_url` e `scope` em `./`, `display: standalone`, cores `#070b18` e ícones any de 192/512 px mais um maskable de 512 px com o “X” dentro da área segura. `scripts/build-icons.mjs` gera os quatro PNGs (incluindo Apple Touch 180 opaco) sem dependências. O `index.html` aponta para o manifesto e o ícone Apple e declara as metas de instalação móvel; o servidor entrega o manifesto como `application/manifest+json`.
- **REQ-024 — Service worker e offline:** `service-worker.js` pré-cacheia o app shell e o manifesto na instalação, em cache versionada com prefixo `xlearn`. Navegações tentam a rede e caem para o `index.html` em cache; `questoes/manifest.json` e os arquivos `.md` usam rede primeiro e são guardados após o primeiro acesso; demais estáticos usam cache primeiro. Na ativação, versões antigas do XLearn são removidas e o worker assume as páginas abertas. O app registra o worker com escopo relativo, verifica atualizações e mostra um aviso quando há nova versão instalada, sem recarregar à força nem perder a sessão. A limpeza manual de cache continua encontrando esses nomes. A versão das caches é incrementada quando o shell muda (atualmente `v18`, com 29 recursos, incluindo `js/season.js`).
- **REQ-025 — Indicador de conexão:** o topo mostra “Online” ou “Offline” com `role="status"`, `aria-live="polite"` e rótulo acessível atualizado. Desde REQ-044, quem não tem conta conectada vê “Visitante”, independentemente da rede, e o estado muda para Online/Offline após o login. Ao ficar offline, uma faixa explica que respostas e dados salvos continuam funcionando e que materiais ainda não acessados podem não carregar. Ao reconectar, a faixa some, o indicador volta a “Online” e um toast confirma que os dados continuam salvos. O estado também é reavaliado quando a página volta a ficar visível.
- **REQ-026 — Acessibilidade e responsividade:** o link “Pular para o conteúdo” move o foco para `main` sem ser interpretado como rota pelo roteador de hash. Ao entrar em uma sessão ou avançar de questão, o foco vai para o enunciado com `tabindex="-1"` e margem de rolagem sob o topo fixo; após confirmar, vai para o feedback; após reagendar, permanece na opção escolhida; cancelar importação ou exclusão devolve o foco ao botão de origem e `Escape` fecha as confirmações inline. O progresso do quiz é um `progressbar` com mínimo, máximo, valor e texto “X de Y questões respondidas”. As alternativas expõem a letra original e, depois da correção, “resposta correta” ou “sua resposta, incorreta” em texto só para leitores de tela. Os contrastes foram recalibrados nos dois temas para pelo menos 4,5:1 em texto normal, incluindo botão primário, selo de revisões, links, chips e aviso amarelo. Ícones de ação, botões compactos, itens da navegação e alternativas têm alvo de toque de pelo menos 44 px; em telas de até 380 px a assinatura da marca é ocultada para não haver rolagem horizontal, e a navegação reduz a tipografia. O anel de foco das seções expansíveis não é mais cortado pelo `overflow`.
- **REQ-029 — Sons e feedback lúdico:** `js/sound.js` gera todos os efeitos com Web Audio, sem arquivos ou dependências: acerto (arpejo ascendente), erro (notas graves), início e fim de prova, conquista e moeda. O contexto só é criado depois do primeiro gesto do usuário e é reaproveitado. `soundEnabled` e `soundVolume` (0–100%) ficam em `meta/settings`, com prévias e volume no cartão “Som e ludicidade” de `#/config` e alternância rápida por botão no topo com `aria-pressed` e rótulo atualizado. Acertos disparam uma pequena explosão decorativa e erros uma vibração curta; ambos são ocultos de leitores de tela e neutralizados por `prefers-reduced-motion` ou animações desligadas.
- **REQ-030 — Moedas e evolução do personagem:** `js/coins.js` define a economia em módulo puro e mantém a carteira em `meta/wallet` com saldo, total acumulado, moedas gastas, sessões já pagas, dias de meta e conquistas coletadas. Cada acerto rende 2 moedas; concluir uma sessão rende 10 + 5 se todas estiverem corretas; atingir a meta diária rende 15 moedas uma única vez por dia; as conquistas têm recompensas próprias, coletadas manualmente conforme REQ-033. Os pagamentos são idempotentes por `sessionId`/dia e ocorrem na mesma transação da resposta ou da conclusão. O personagem tem cinco SVGs próprios em `assets/characters/` e, desde REQ-034, evolui pela temporada conforme moedas acumuladas e dias ativos. A tela de progresso mostra o cartão da temporada com imagem, saldo, estágio, duas barras acessíveis e quanto falta para evoluir, resumido no dashboard. Backup inclui a carteira e apagar progresso também apaga moedas e evolução.
- **REQ-031 — Contagem regressiva nas provas:** `js/timer.js` mantém o cronômetro como módulo puro. A configuração `timerEnabled`/`timerMinutes` (5–120, padrão 30) integra `meta/settings` e o cartão “Tempo de prova” de `#/config`. Sessões novas de prova (`mode: "material"`) recebem o cronômetro; revisões, correções e simulados não. Enquanto corre, a sessão guarda `deadlineAt`; ao ocultar a aba, o tempo é congelado em `remainingSeconds` e retomado ao voltar. O cabeçalho do quiz mostra um `role="timer"` discreto, com `aria-label` em texto, estado de alerta no último minuto e indicação visual de pausa. Ao zerar, o app aguarda a última gravação, encerra a sessão, paga a conclusão uma única vez, toca o som de fim e abre o resumo com aviso de tempo esgotado, contador de não respondidas e marcação individual dessas questões.
- **REQ-032 — Simulados por assunto:** `js/simulado.js` concentra as funções puras de resumo, histórico idempotente e agregação. A rota `#/simulado` agrupa os materiais válidos por assunto, oferece campos de quantidade por assunto, presets “10 por assunto”/“Limpar”, total em tempo real e início desativado sem questões. O simulado ativo fica em `meta/simuladoSession` com `mode: "simulado"` e IDs compostos; as questões são embaralhadas e o quiz mostra o selo “Simulado”. Concluir grava apenas um resumo compacto em `meta/simulados` (datas, duração, total, acertos e totais/acertos por assunto), limpa o simulado ativo e abre um resumo próprio com resultado por assunto. Nenhum caminho grava progresso, tentativas, sessões normais, estatísticas, conquistas, SRS, ranking ou moedas. Sessão normal e simulado podem ficar ativos ao mesmo tempo e são retomados por banners independentes no início; o backup inclui os dois e apagar progresso remove o histórico de simulados.
- **REQ-033 — Coleta de moedas de conquistas:** as conquistas desbloqueadas aparecem como botões “Clique para coletar”, com a recompensa em moedas. O clique chama `claimAchievementReward` em `js/db.js`, que valida o desbloqueio e usa o valor canônico de `js/gamification.js` dentro de uma transação `readwrite` sobre `meta`; o pagamento é gravado em `wallet.claimedAchievements` e nunca é automático. A resposta atualiza o dashboard e a tela de progresso, toca o som de moeda e dispara uma cascata decorativa de moedas centralizada na viewport, oculta de leitores de tela e neutralizada por animações desligadas ou `prefers-reduced-motion`. Cliques repetidos, inclusive concorrentes, retornam `alreadyClaimed` sem somar saldo; conquistas bloqueadas e valores adulterados são recusados. O chip de conquistas mostra o total pendente de moedas e, sem pendências, passa a indicar “recompensas coletadas”. Desde REQ-034, a coleta também credita o ledger da temporada e pode anunciar a evolução do personagem.
- **REQ-034 — Temporada 1 e evolução do personagem:** `js/season.js` é a fonte única da temporada e dos estágios. A Temporada 1 (`2026-1`) vai de 05/11/2026 a 04/12/2026 e exige, simultaneamente, moedas acumuladas e dias ativos: Curioso (0/0), Estudante (300/3), Focado (600/6), Veterano (1000/9) e Mestre dos estudos (1500/12). O estágio é o maior que atende aos dois critérios e não regride. O ledger em `meta/season` recebe moedas de respostas, conclusão de sessão, meta diária e coleta de conquistas na mesma transação que paga a carteira; dias ativos são derivados de `stats.daily` dentro do período. Depois de 04/12/2026 o ledger para de crescer, a interface informa o congelamento e o personagem só volta a evoluir quando uma nova temporada for definida. O dashboard mostra estágio e moedas da temporada na visão rápida; `#/progresso` exibe personagem, saldo da carteira, período, duas barras (moedas e dias ativos) e o que falta para o próximo estágio. `clearProgressData` apaga a temporada, e o backup a preserva junto de `meta`.
- **REQ-035 — XP interno e conquistas de temporada:** o XP e os níveis continuam sendo calculados, somados e gravados em `meta/gamification` na mesma transação da resposta, da sessão e da coleta, mas foram removidos de todas as telas, resumos, textos de configuração, card de conquistas e mensagens de sessão. A evolução visível depende apenas do estágio da temporada. As conquistas `nivel-3` e `nivel-5` foram substituídas por `primeira-evolucao` (“Primeira evolução”, estágio ≥ 2) e `mestre-temporada` (“Mestre da temporada”, estágio máximo), com recompensas de 15 e 25 moedas coletadas manualmente. `applySeasonAchievements` reconcilia as conquistas dentro de `recordAnswer`, `awardSessionCompletion` e `claimAchievementReward` logo após o ledger da temporada, no mesmo evento que muda o estágio; o XP interno da recompensa continua sendo somado, mas nunca é exibido.
- **REQ-036 — Feedback em modal com pausa do cronômetro:** depois de qualquer resposta, `renderQuiz` exibe um botão “Mostrar feedback” com `aria-haspopup="dialog"`, em vez de renderizar o bloco `.feedback` inline. O clique abre uma modal criada fora de `#main`, com `role="dialog"`, `aria-modal="true"`, título associado, foco inicial no diálogo, ciclo de foco por `Tab`/`Shift+Tab`, fechamento por `Escape`, botão “Fechar feedback” e clique no fundo, retornando o foco ao botão de origem. O conteúdo mantém `feedback--correct`/`feedback--wrong` e todas as ações de revisão espaçada, que são reconstruídas após `render()` e mantêm o foco no intervalo escolhido. Ao abrir, `pauseTimerForFeedback` congela o cronômetro, remove o `deadlineAt`, persiste a sessão e interrompe o ticker; ao fechar, `resumeTimerAfterFeedback` recria o limite apenas se o cronômetro estava correndo, a aba está visível e a sessão não terminou. `handleTimerVisibility` não retoma o relógio enquanto a modal estiver aberta. O fundo (`#main`, topo e navegação inferior) fica `inert`, o corpo bloqueia rolagem, a modal é rolável, os toasts permanecem acima dela e o layout vira tela cheia em dispositivos pequenos.
- **REQ-037 — Conquistas pendentes na home e cascata centralizada:** `renderHomeAchievements()` consulta a gamificação e a carteira já carregadas, mantém somente as conquistas com desbloqueio e sem coleta e monta uma seção “Conquistas para coletar” logo após a visão rápida do dashboard. O chip mostra o total de moedas pendentes e cada item reutiliza `renderAchievementItem`, com botão acessível e recompensa explícita. Ao coletar, a seção continua visível enquanto a cascata de moedas toca; `collectAchievement` aguarda 1300 ms antes de renderizar, a camada decorativa é removida em 1500 ms e, sem novas pendências, a seção desaparece do início. A animação agora é uma camada fixa no centro da tela (`top: 50%`, `left: 50%`, `z-index: 120`), com moedas distribuídas por `--x`, `--drift` e `--delay`; o foco retorna para a conquista atual, para a seção de pendências ou para o conteúdo da home.
- **REQ-038 — Cabeçalho fixo da prova:** o bloco `.quiz-head` de `renderQuiz` passou a usar `position: sticky` logo abaixo do topo fixo do app (`top: var(--topbar-height)`) com `z-index: 30`. O título da prova, o contador de questões respondidas e o cronômetro permanecem visíveis enquanto o enunciado e as alternativas rolam. O cabeçalho usa fundo translúcido com `backdrop-filter`, borda inferior e margens negativas de 16 px no mobile e 24 px em telas maiores para cobrir toda a largura útil sem criar rolagem horizontal; o espaçamento do enunciado e a navegação inferior permanecem intactos.
- **REQ-039 — Feedback sem campos legados:** `js/parser.js` passou a normalizar `explanation` somente com `resolution` e `theoreticalContent`; `bank_approach`, `study_tip` e `review_summary` não são mais lidos, mesmo que existam no JSON. `renderFeedback` removeu os blocos “Como a banca cobra”, “Dica de estudo” e “Resumo para revisão”, mantendo a resolução, a “Aula completa” opcional, o agendamento de revisão e o comentário de cada alternativa. Os materiais atuais continuam válidos e apenas ignoram os textos legados; o README e o esquema documentado passam a apresentar somente os dois campos mantidos.
- **REQ-040 — Ajuste das moedas de evolução:** `SEASON_STAGES` em `js/season.js` passou a exigir 300 moedas no Estudante, 600 no Focado, 1000 no Veterano e 1500 no Mestre dos estudos, mantendo o Curioso em 0 e os dias ativos em 0/3/6/9/12. As barras de progresso, as mensagens de moedas restantes, as conquistas de temporada e o congelamento após 04/12/2026 continuam usando o mesmo cálculo: o maior estágio que atende simultaneamente às moedas acumuladas na temporada e aos dias ativos. `README.md` e este documento foram atualizados com as novas faixas, e o service worker passou a `v18` para invalidar o shell.
- **REQ-041 — Conta Supabase e sessão sazonal:** ao iniciar uma sessão normal sem conta conectada, `startSession` abre uma modal acessível com apelido, e-mail e senha antes de carregar o material. O envio tenta entrar; se as credenciais não existirem, cria a conta automaticamente com o apelido informado. A sessão do GoTrue é salva em `meta/cloudAuth` com access token, refresh token e validade, sem guardar a senha; a renovação ocorre antes do vencimento e a sessão permanece durante a temporada. A modal oferece “Continuar offline” e, sem rede, o estudo prossegue com sincronização posterior. Simulados não passam pelo gate. A confirmação de e-mail está desativada no projeto (`mailer_autoconfirm: true`), de modo que o cadastro devolve sessão imediatamente. O backup exclui a chave `cloudAuth` e uma importação antiga não restaura tokens.
- **REQ-042 — Sincronização de nível e moedas:** `summarizeSeason` fornece o estágio (número e nome), as moedas acumuladas e os dias ativos. Após respostas, conclusão de sessão, coleta de conquista, login e boot, o app agenda com debounce um UPSERT em `season_scores` usando `POST` com `Prefer: resolution=merge-duplicates`; o registro é limitado ao `user_id` da sessão pelas políticas RLS. Falhas de rede mantêm o placar local, marcam a sincronização como pendente e são reenviadas quando o evento `online` ocorre. A tela de configurações mostra a conta conectada, o último envio, um botão de sincronização manual e a saída da conta.
- **REQ-043 — Ranking da temporada na home:** a home consulta a view `season_leaderboard` para a Temporada 1, exibe uma lista com posição, apelido, nível e moedas dos cinco primeiros e destaca a linha do usuário quando ele aparece no top 5. Fora do top 5, uma linha “Sua posição” mostra a colocação do próprio usuário. O ranking é refeito a cada acesso à home, tem cache em `meta/cloudRank` para consulta offline, informa a data da última atualização e exibe estados explícitos de carregamento, ranking indisponível e servidor ainda não configurado. Sem conta, o top 5 público continua visível e um botão abre o login.
- **REQ-044 — Apelido, logout e status de visitante no topo:** a barra superior passou a refletir a sessão. Com conta conectada, `updateTopbarIdentity` troca a assinatura “aprender praticando” pelo apelido (com reticências em nomes longos), revela o botão “Sair da conta” imediatamente à esquerda de Configurações e mantém o indicador em Online/Offline conforme a rede. Sem sessão — inclusive após sair — a assinatura volta, o botão de sair é ocultado com `hidden` e o indicador mostra “Visitante”, com rótulo acessível próprio, mesmo sem internet. A contagem de questões e o selo “Estudo local” foram removidos da barra. O botão de sair usa o mesmo `signOutCloud` do cartão de conta, revoga o token quando há rede, apaga `meta/cloudAuth` e atualiza a interface. Service worker `v20`.
- **REQ-045 — Login e cadastro em fluxos separados:** a modal de conta agora tem duas abas acessíveis (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, navegação por setas/Home/End) e abre no modo “Entrar”. Esse modo exibe apenas e-mail e senha, usa `autocomplete="current-password"` e chama `signIn`; se as credenciais forem inválidas, mostra “E-mail ou senha incorretos. Se ainda não tem conta, use a opção ‘Criar conta’.” e não tenta cadastro. O modo “Criar conta” revela o campo Apelido (obrigatório, 2–24 caracteres), usa `autocomplete="new-password"`, chama `signUp` e, se o e-mail já existir, orienta a usar “Entrar”. O título, a descrição, o rótulo do botão e a dica de alternância acompanham o modo ativo; “Continuar offline” permanece nos dois. A sessão salva, a sincronização e o início da prova pendente continuam iguais. Service worker `v21`.
- **REQ-046 — Rolagem ao apagar progresso:** `requestProgressReset` passou a guardar `window.scrollY` antes de re-renderizar as Configurações, restaurar essa posição no próximo quadro e focar o título “Apagar todo o progresso?” com `preventScroll`. Quando o bloco de confirmação não está visível, `scrollIntoView({ block: "nearest" })` o revela com o mínimo de deslocamento. A rolagem para o topo usada ao trocar de rota não é mais acionada, e cancelar a exclusão continua devolvendo o foco ao botão “Apagar progresso”. Service worker `v22`.
- **REQ-047 — Restrições do visitante:** sem conta, o menu inferior mostra apenas Início, Provas e, quando houver, Sessão; o botão de configurações do topo e os atalhos “Criar simulado”, “Ver progresso”, revisões e simulados da home ficam ocultos. Acessos diretos a `#/config`, `#/progresso`, `#/simulado` e `#/revisoes` exibem uma área de conta com “Criar conta”, “Entrar” e “Voltar ao início”, sem renderizar o conteúdo restrito. Ao iniciar uma prova como visitante, `startSession` usa exatamente a primeira questão do arquivo e ignora tamanho, ordem e filtros; o quiz mostra “1 / 1”. O botão de feedback abre o cadastro com uma explicação em vez da modal de feedback, e `goToNextQuestion` bloqueia o avanço de sessões antigas com mais de uma questão. O resumo do visitante não revela gabarito nem explicação, mostra o aviso de modo visitante e troca “Revisar erros”/“Nova sessão” por “Criar conta para continuar”. Depois do cadastro ou login, menu, configurações, feedback e avanço são liberados no mesmo estado. Service worker `v23`.
- **REQ-027 — Testes abrangentes finais:** campanha executada ao término da fase 8 com 12 suítes temporárias, fora do repositório, em Node com DOM simulado (`happy-dom`), IndexedDB em memória (`fake-indexeddb`), Cache API e rede simuladas. A cobertura unitária validou manifesto (10 materiais/1250 questões), parser e correção por ID em todas as questões, embaralhamento estável, SRS, gamificação, moedas, ranking, cronômetro, simulados, backup, configurações, cache e isolamento de materiais malformados/manifesto inválido. As suítes de integração percorreram configurações e efeitos reais, sessão normal, cronômetro com pausa/retomada e expiração, SRS automático/manual, fila de revisões, estatísticas, XP, meta, sequência, ranking, acessibilidade, exportação/importação, restauração, exclusão de dados, simulados, coleta de conquistas e service worker. A campanha encontrou e corrigiu um defeito real: `renderStudy` aplicava spread em `renderMaterialGrid()`, que devolve um único elemento, e a rota `#/estudar` não renderizava; a chamada passou a ser inserida diretamente no array. Todas as suítes e `npm run check` passaram após a correção.
- **REQ-028 — Documentação de uso:** `README.md` reúne visão geral, funcionalidades, requisitos, execução local por servidor HTTP, publicação no GitHub Pages, instalação como PWA em Android/iOS/desktop, rotas e uso das telas, configurações, cronômetro, simulados, economia de moedas e personagens, revisões, formato completo dos materiais com exemplo, geração/validação do manifesto, modelo de dados local, backup/importação/exclusão, estrutura do projeto, comandos de validação e limitações conhecidas. O documento também explica a correção por identificador, o funcionamento offline e a ausência de sincronização ou ranking global.

---

## I. Situação dos requisitos e dependências

Os requisitos REQ-001 a REQ-047 estão implementados. A fase 9, a fase 10 (conta Supabase, sessão sazonal, sincronização de nível/moedas e ranking global da Temporada 1), a fase 11 (identidade na barra superior) e a fase 12 (login e cadastro separados, rolagem ao apagar progresso e restrições do visitante) estão concluídas. O schema remoto foi aplicado, a confirmação de e-mail está desativada e a validação final em produção permanece como próxima tarefa.

Dependências principais:

- REQ-004 a REQ-007 dependem de REQ-001 a REQ-003.
- REQ-009 depende de REQ-008.
- REQ-012 e REQ-013 dependem de REQ-011.
- REQ-015 a REQ-018 dependem de REQ-008 e do registro de tentativas.
- REQ-021 e REQ-022 dependem do modelo de dados.
- REQ-024 depende de REQ-023.
- REQ-027 depende de todas as anteriores.
- REQ-032 depende de REQ-004 a REQ-008 e do fluxo de quiz; não depende de REQ-031, pois simulados não usam cronômetro.
- REQ-033 depende de REQ-015 (conquistas desbloqueadas), de REQ-030 (carteira) e do registro de tentativas.
- REQ-034 depende de REQ-008 (dados locais), REQ-010 (estatísticas diárias), REQ-030 (carteira) e do registro de respostas/sessões para incrementar o ledger da temporada.
- REQ-035 depende de REQ-014 (XP interno), REQ-015 (conquistas) e de REQ-034 (estágio da temporada usado como critério das novas conquistas).
- REQ-036 depende de REQ-007 (correção e feedback), REQ-011/REQ-012 (ações de revisão dentro do feedback) e REQ-031 (pausa e retomada do cronômetro).
- REQ-037 depende de REQ-015 (conquistas), REQ-030 (carteira) e REQ-033 (coleta manual e cascata de moedas).
- REQ-038 depende de REQ-005 (exibição da questão) e REQ-031 (cronômetro exibido no cabeçalho da prova).
- REQ-039 depende de REQ-002 (normalização das questões) e REQ-007 (renderização do feedback).
- REQ-040 depende de REQ-034 (temporada e estágios) e REQ-035 (conquistas de temporada).
- REQ-041 depende de REQ-008 (IndexedDB), REQ-025 (indicador de conexão), REQ-026 (acessibilidade) e do fluxo de início de sessão de REQ-004/REQ-009.
- REQ-042 depende de REQ-034 (estágio, moedas e dias ativos), de REQ-041 (conta e sessão) e do registro de respostas/sessões/coletas.
- REQ-043 depende de REQ-041, REQ-042, da view `season_leaderboard` e do cache local de REQ-008.
- REQ-044 depende de REQ-025 (indicador de conexão), REQ-041 (sessão e apelido) e do `signOutCloud` de REQ-042.
- REQ-045 depende de REQ-041 (conta e sessão) e do cliente `js/cloud.js` (`signIn`, `signUp` e erros tipados).
- REQ-046 depende de REQ-022 (exclusão de progresso) e da tela de configurações de REQ-019/REQ-020.
- REQ-047 depende de REQ-041/REQ-045 (conta), REQ-004/REQ-005 (sessão de estudo), REQ-007 (feedback), REQ-032 (simulados) e da navegação de REQ-026.

---

## J. Problemas conhecidos

| Problema | Impacto | Situação |
|---|---|---|
| Uma sessão normal ativa por vez | Iniciar outra prova ou revisão substitui a sessão normal em andamento; o simulado tem slot próprio e coexiste com ela | Comportamento atual do modelo de sessão; respostas já gravadas permanecem no progresso e no histórico, e o simulado não interfere nelas. |
| Materiais fora do padrão JSON não são suportados | Provas em Markdown puro não carregam | Limitação documentada; corpus atual está dentro do padrão. |
| Manifesto precisa ser regenerado ao adicionar provas | Esquecimento pode ocultar material | O gerador detecta e o README orienta o fluxo; a validação acusa no console. |
| Ranking local tem um único perfil de dispositivo | Não representa ranking global | O ranking global da temporada é separado e usa a conta Supabase; o ranking local por prova/disciplina continua disponível em `#/progresso`. |
| Temporada encerrada sem nova temporada configurada | O personagem fica congelado até o próximo período ser definido | Comportamento intencional de REQ-034: moedas e dias ativos param de contar em 04/12/2026 e a interface informa o congelamento. |
| Schema do ranking aplicado no remoto | O projeto `qskeuqmlxbipiwsxyglv` já contém `season_scores`, `season_leaderboard`, índice, trigger e políticas RLS | A migration `supabase/migrations/20261107000000_season_ranking.sql` foi aplicada; o schema local `supabase/schema.sql` permanece como fonte canônica para novos ambientes. |
| Confirmação de e-mail do Supabase | O fluxo desejado exige login imediato após o cadastro | `mailer_autoconfirm` está `true` no projeto remoto; o cadastro retornou sessão e `email_confirmado: true` no teste real. Se a opção for reativada, o app orienta a confirmar o e-mail. |
| Pontuação enviada pelo cliente | Um usuário autenticado pode adulterar o próprio nível/moedas no payload | As políticas RLS impedem gravar em nome de outra conta, mas não validam a veracidade do placar. A limitação será registrada no README; uma validação autoritativa exigiria função/RPC no servidor. |
| Sessão local em `meta/cloudAuth` | Tokens ficam no IndexedDB do dispositivo | A senha nunca é armazenada; o backup exclui `cloudAuth`. Sair da conta apaga a sessão local e revoga o refresh token quando há rede. |

---

## K. Testes

### Verificação atual (2026-11-08)

- REQ-047 implementado; a fase 12 está concluída. As fases 9, 10 e 11 continuam concluídas.
- REQ-045: a modal de conta passou a abrir no modo “Entrar”, com apenas e-mail e senha, e a alternar para “Criar conta” por abas acessíveis. `submitCloudLogin` valida o apelido somente no cadastro, usa `signIn` no login e `signUp` no cadastro, sem criação automática de conta. Credenciais inválidas orientam a criar conta; e-mail já cadastrado orienta a entrar. O campo de apelido fica oculto e não obrigatório no login, e o `autocomplete` alterna entre `current-password` e `new-password`. Teste DOM com `happy-dom`/`fake-indexeddb` (21 verificações): abas com `role="tab"`/`aria-selected`/`aria-controls`, campo Apelido oculto no login e obrigatório no cadastro, títulos e rótulos por modo, login inválido sem chamada a `/auth/v1/signup`, e-mail existente orientando “Entrar”, cadastro válido conectando a conta e enviando o apelido, além do erro limpo ao trocar de aba. `node --check js/app.js` e `npm run check` passaram.
- REQ-046: teste DOM com `happy-dom` (6 verificações) confirmou que, com a página em `scrollY = 320`, clicar em “Apagar progresso” não chamou `scrollTo({ top: 0 })`, restaurou a posição 320, exibiu “Apagar todo o progresso?”, moveu o foco para o título com `preventScroll` e chamou `scrollIntoView({ block: "nearest" })`. `node --check js/app.js` e `npm run check` passaram.
- REQ-047: testes DOM com `happy-dom`/`fake-indexeddb` (21 + 10 verificações) confirmaram que o visitante vê apenas Início e Provas no menu, não vê o botão de configurações nem os atalhos de simulado/progresso, e recebe a área de conta em `#/config`, `#/progresso`, `#/simulado` e `#/revisoes` sem o conteúdo restrito. Ao iniciar uma prova, o visitante recebe “1 / 1” com a primeira questão do arquivo; o feedback abre o modo “Criar conta” com explicação e não a modal de feedback; o resumo mostra o aviso de visitante, oculta o gabarito e oferece “Criar conta para continuar”. Em uma sessão antiga de duas questões, “Próxima questão” abriu o cadastro e manteve “1 / 2”; após criar a conta, o menu completo e as configurações apareceram, o feedback abriu normalmente e o avanço chegou a “2 / 2”. `node --check js/app.js` e `npm run check` passaram.
- Fase 10: `supabase/schema.sql` e a migration `supabase/migrations/20261107000000_season_ranking.sql` contêm `season_scores`, view `season_leaderboard`, índice de ordenação, trigger de `updated_at`, grants e políticas RLS; `js/cloud-config.js` e `js/cloud.js` foram criados com validação, sessão, cliente REST, erros em pt-BR e normalização do ranking.
- O schema foi aplicado no projeto remoto `qskeuqmlxbipiwsxyglv`; a consulta REST a `season_scores` e `season_leaderboard` respondeu `200`, e um `INSERT` anônimo foi recusado com `401`/`42501`, confirmando a RLS. O primeiro participante real (`x3x31`) já aparece no ranking com 15 moedas e 1 dia ativo.
- Validação de produção em 2026-11-07: o GitHub Pages serviu `js/app.js` com o ranking, o cartão da conta e o gate, além de `js/cloud.js`, `js/cloud-config.js` e do service worker `v19`. Um cadastro real temporário pelo endpoint público retornou sessão com `email_confirmado: true`; o UPSERT autenticado em `season_scores` respondeu `201` e a linha apareceu em `season_leaderboard` na 1ª posição com nível e moedas corretos. A view expôs apenas `position`, `user_id`, `season_id`, `nickname`, `level_number`, `level_name`, `coins`, `active_days` e `updated_at` — sem e-mail. Um `INSERT` anônimo foi recusado com `401`/`42501`. A conta e a linha de teste foram removidas, restando somente o participante real.
- A confirmação de e-mail foi desativada no projeto (`mailer_autoconfirm: true`), com `site_url` em produção e `uri_allow_list` incluindo GitHub Pages e `localhost:3000`.
- Teste unitário de `js/cloud.js` com `fetch` simulado: validação de apelido/e-mail/senha, expiração de sessão, login, cadastro sem confirmação, renovação por refresh token, atualização de apelido, UPSERT com `Prefer: resolution=merge-duplicates`, envio sem e-mail, top 5, posição própria e mapeamento de erros (credenciais, tabela ausente e rede).
- Teste de backup com `fake-indexeddb`: `cloudAuth` não entra na exportação, tokens e e-mail não aparecem no JSON, um backup antigo com `cloudAuth` é importado sem restaurar a sessão, as configurações válidas são restauradas e a sessão atual pode ser regravada depois sem voltar ao backup.
- DOM com `happy-dom` e `fake-indexeddb` para a conta: login pela home e pelo gate, sessão persistida em `meta/cloudAuth` com access token e sem senha, cartão “Conta da temporada” em `#/config` com apelido, status de sincronização, posição, “Sincronizar agora” e “Sair da conta”, e saída limpando a sessão local. O envio usou `POST` em `season_scores` com `Prefer: resolution=merge-duplicates` e `user_id` da sessão; o ranking público funcionou sem conta.
- DOM do ranking com `happy-dom` e `fake-indexeddb`: a home sem conta consultou apenas `season_leaderboard` e exibiu os cinco primeiros com posição, apelido, nível e moedas; o botão “Entrar e participar” abriu a modal; após o login, a posição própria (7º) apareceu fora do top 5, com “você”, e o total de linhas passou a seis. O destaque do usuário no top 5, o botão de atualização manual, os estados offline/indisponível e o cache em `meta/cloudRank` foram cobertos pela implementação e pela leitura do código.
- Fluxo de gate e offline no DOM: iniciar uma prova normal sem conta manteve a rota `#/estudar` e abriu a modal; “Continuar offline” iniciou a sessão e carregou uma questão real; a rota `#/simulado` abriu sem modal, confirmando o isolamento dos simulados.
- DOM da barra superior com `happy-dom` e `fake-indexeddb`: com sessão restaurada de `meta/cloudAuth`, o apelido “Ana” substituiu “aprender praticando”, o botão “Sair da conta” ficou visível ao lado de Configurações e o indicador mostrou Online; ao simular `offline`, passou a Offline e, ao reconectar, voltou a Online. O clique no botão de sair apagou `meta/cloudAuth`, restaurou a assinatura, ocultou o botão e mudou o indicador para Visitante; com a rede desligada, o visitante continuou identificado como Visitante. O selo de questões/“Estudo local” não existe mais e o texto do topo não contém “questões”.
- Teste de renovação e erros do cliente Supabase: `refresh_token` renova access/refresh tokens antes do vencimento, `PUT /auth/v1/user` atualiza o apelido, credenciais inválidas, tabela ausente e falha de rede são convertidas em `CloudError` com mensagens em pt-BR; nenhum payload de pontuação inclui e-mail.
- Unitário de `parser.js`: questões com e sem os campos legados geraram exatamente `resolution` e `theoreticalContent` em `explanation`; `bankApproach`, `studyTip` e `reviewSummary` ficaram ausentes do objeto normalizado e os materiais continuaram válidos.
- DOM do quiz com `happy-dom`, `fake-indexeddb` e um material real que ainda contém os campos legados: após responder e abrir o feedback, a modal exibiu “Resolução” e o comentário das alternativas, sem “Como a banca cobra”, “Dica de estudo” ou “Resumo para revisão”.
- DOM e verificação estática do cabeçalho da prova: uma sessão real renderizou o título, o contador de questões e o `role="timer"` dentro de `.quiz-head`; o CSS confirmou `position: sticky` com `top: var(--topbar-height)`, `z-index: 30`, fundo translúcido com `backdrop-filter`, borda inferior, margens negativas de 16 px e o ajuste de 24 px em telas maiores, sem alterar o fluxo do enunciado nem a navegação inferior.
- DOM com `happy-dom` e `fake-indexeddb`: a home exibiu a seção “Conquistas para coletar” apenas com conquistas desbloqueadas e não coletadas, reutilizando o botão de coleta e o total de moedas pendentes; a seção permaneceu visível durante os 1300 ms da animação, a camada `.coin-cascade` ficou centralizada na viewport com as moedas posicionadas por `--x`, e a seção desapareceu após o `render()` quando não havia mais pendências. O foco retornou à próxima conquista, à seção ou ao conteúdo da home, e a coleta continuou idempotente.
- Testes unitários de `season.js`: período de 30 dias, temporada ativa/encerrada, normalização e congelamento, dias ativos dentro do intervalo, faixas 0/300/600/1000/1500 moedas e 0/3/6/9/12 dias, progresso limitado pelo requisito mais atrasado, estágio máximo e ledger que rejeita ganhos após o término.
- Testes de limites das novas faixas: com os dias ativos atendidos, 0/299 moedas permaneceram em Curioso, 300/599 em Estudante, 600/999 em Focado, 1000/1499 em Veterano e 1500 em Mestre dos estudos; as mensagens de moedas restantes acompanharam cada faixa.
- Testes de conquistas de temporada: `nivel-3`/`nivel-5` ausentes da lista, `primeira-evolucao` desbloqueada no estágio 2, `mestre-temporada` no estágio 5, XP interno somado e persistido, nenhuma conquista antiga recriada.
- Integração com `fake-indexeddb`: `recordAnswer` creditou 2 moedas na temporada; sessão perfeita creditou 15 e não duplicou na repetição; coleta de conquista creditou 5 e foi idempotente; 298 moedas + 3 dias evoluíram para o estágio 2 ao responder e desbloquearam “Primeira evolução” no mesmo evento; coleta levou ao estágio 5 e desbloqueou “Mestre da temporada”; resposta em 05/12/2026 pagou a carteira, mas manteve o ledger congelado; `clearProgressData` apagou `meta/season` e preservou `meta/settings`.
- DOM com `happy-dom` e `fake-indexeddb`: `#/progresso` exibiu “Temporada 1”, “Estudante”, “Moedas na temporada”, “Dias ativos”, “Primeira evolução” e “Mestre da temporada”, sem ocorrências de “XP” ou “nível”.
- DOM do quiz com `happy-dom`, `fake-indexeddb` e sessão real de 30 minutos: respostas certa e errada exibiram o botão “Mostrar feedback” e nenhum `.feedback` inline; a modal abriu com `role="dialog"`, `aria-modal="true"`, `feedback--wrong`/`feedback--correct`, fundo `inert` e corpo com rolagem bloqueada; o cronômetro passou a “Tempo restante pausado” ao abrir e voltou a correr ao fechar por `Escape` ou pelo botão; o foco retornou ao botão de origem; o botão fechar removeu a modal e retomou o relógio.
- Toasts corrigidos e acima da modal: a animação `toast-rise` preserva `translate(-50%, …)` em todos os quadros, mantendo as mensagens centralizadas horizontalmente em qualquer tela; a modal usa `z-index` inferior ao dos toasts.
- `npm run check`: 10 materiais válidos, 1.250 questões, 0 erros e 0 avisos.
- `node --check` em todos os `js/*.js`, `service-worker.js` e `scripts/*.mjs`: sem erros de sintaxe.
- `service-worker.js` em `v23`, com 31 caminhos no app shell (incluindo `js/cloud.js` e `js/cloud-config.js`), todos presentes no repositório.
- `questoes/manifest.json` válido e coerente com os 10 materiais; `package.json` sem dependências de execução.
- Renderização do dashboard mantém o descarte de entradas nulas; a home preserva os quatro atalhos para `#/progresso` para quem tem conta; o cartão da temporada ocupa o lugar do antigo card de personagem em `#/progresso`.
- `main` sincronizada com `origin/main`; o código da fase 10 foi entregue no commit `e1b2b88` e a validação/documentação por requisito nos commits seguintes. A árvore de trabalho fica limpa ao final desta revisão.

As verificações abaixo são registros históricos de cada entrega; números e versões de cache citados nelas refletem o momento em que foram executadas.

### Registro histórico das verificações durante o desenvolvimento

- Estrutura do repositório e estado do Git inspecionados.
- 2 arquivos Markdown encontrados, 150 blocos JSON analisados: 100% válidos, IDs únicos, 4 alternativas por questão, gabarito consistente com `is_correct`.
- `git status` limpo antes do início; branch `main` sincronizada com `origin/main`.
- Gerador executado com sucesso: 2 materiais válidos, 150 questões, 0 erros e 0 avisos; `questoes/manifest.json` criado.
- Parser reexecutado em Node sobre os dois materiais: 50 e 100 questões válidas.
- Shuffle semeado testado nas duas provas: 4 alternativas preservadas, gabarito presente e identificadores únicos.
- Importação cruzada entre `js/parser.js` (navegador) e `scripts/build-manifest.mjs` (Node) executada sem erro.
- Verificação sintática de todos os arquivos JS e do script Node (`node --check`).
- Servidor estático local: `index.html`, `css/styles.css`, `js/app.js`, `questoes/manifest.json` e um material responderam HTTP 200.
- Teste automatizado de fluxo com DOM simulado (happy-dom, apenas ambiente de desenvolvimento, fora do repositório): dashboard com 2 provas/150 questões; início de sessão; 4 alternativas sem duplicação; confirmação desabilitada antes da seleção; feedback após confirmar; avanço para a questão 2; retomada em memória ao voltar ao início; conclusão das 10 questões; resumo com anel e 10 resultados. Todos os passos passaram.
- Revisão do diff e dos caminhos relativos para GitHub Pages.
- Persistência testada com IndexedDB em memória (fake-indexeddb) e DOM simulado: resposta gravada, sessão ativa persistida com índice 1, tentativa no histórico, estatística agregada, recarga do app com restauração na questão 2, sessão em andamento no início, progresso "1 de 50" no cartão e mesmo ID de sessão após recarregar.
- Fluxo completo de 10 questões reexecutado após a integração com IndexedDB, incluindo resumo final.
- SRS verificado com testes unitários puros: progressão 0→1→3→5, teto de 30 dias, erro com 10 minutos, desativação sem data, agendamento manual e formatação de prazos.
- Fila de revisões testada com dados controlados: separação vencidas/futuras, ordenação por material com mais atrasadas e material com próxima data.
- Integração SRS testada com DOM simulado e IndexedDB em memória: resposta correta grava nível 1 e 1 dia; escolha manual de 1 hora persiste `manualSchedule` e vencimento; retorno ao automático restaura 1 dia e remove a marcação; revisão forçada aparece no card, no contador e no selo da navegação; sessão de revisão abre com apenas a questão vencida.
- Verificação sintática de `js/srs.js`, `js/app.js` e `js/db.js` com `node --check` após a integração.
- XP e níveis verificados com testes unitários puros: participação no erro, bônus 2/4/6 por dificuldade, bônus de sessão (25/38/75), faixas de nível (0/100/400/900) e bloqueio de premiação duplicada da mesma sessão.
- Integração de XP testada com IndexedDB em memória: resposta correta grava XP e contadores, sessão concluída paga o bônus uma única vez mesmo após nova chamada, card de nível e XP total aparecem no dashboard.
- Conquistas testadas com funções puras: desbloqueio de primeira resposta/primeiro acerto, recompensa somada ao XP, não duplicação em respostas seguintes, sessão completa e sessão perfeita, lista completa com estado. Integração confirmou persistência das conquistas, XP com recompensas e card no dashboard.
- Meta e sequência testadas com datas controladas: dia sem estudo, primeiro dia, três dias consecutivos, sequência de ontem ainda válida, quebra por intervalo, recorde histórico, meta atingida e percentual. Integração com meta configurada em 1 questão confirmou registro diário, sequência persistida, conquista da meta e card "1/1" no dashboard.
- Estatísticas testadas com DOM simulado e IndexedDB em memória: estado vazio da rota `#/progresso` com avisos explícitos, item ativo na navegação, duas respostas (uma correta e uma errada) refletidas em 2 respondidas/1 acerto/50%, ranking de disciplinas e provas, duas tentativas com a mais recente primeiro, marcada e gabarito exibidos, 13 conquistas na grade e duas desbloqueadas. Os cinco testes anteriores foram reexecutados após a mudança e continuaram passando.
- Ranking verificado com testes puros: zero respostas/zero acertos, uma resposta isolada e cinco acertos não superam 80/100, mais evidência eleva o índice, itens sem respostas excluídos, ordenação por prova, agregação de disciplina e posições sequenciais. Integração com DOM e IndexedDB confirmou estado vazio, duas listas, uma prova e uma disciplina reais, precisão de 50%, posição e índice exibidos, além do aviso de ranking local.
- Indicador de conexão testado com DOM simulado e IndexedDB em memória: estado online inicial, atributos de status/aria-live, mudança para offline com faixa de contingência e texto sobre materiais não acessados, resposta salva localmente offline, retorno a online com faixa oculta e toast de reconexão. A suíte do service worker foi reexecutada com a versão de cache `v3`.
- Publicação no GitHub Pages verificada: sem `.nojekyll`, o Jekyll convertia os `.md` e os dois materiais respondiam 404 em produção; com o arquivo, home, manifesto, os dois materiais, service worker e manifesto PWA respondem 200 no domínio público.
- Acessibilidade testada com DOM simulado: o link de pular manteve a rota `#/config` e focou `main`; o progresso do quiz expôs `role="progressbar"`, máximo real e texto “0 de N”; a alternativa anunciou “Alternativa A”; o feedback recebeu foco após confirmar e informou “resposta correta” e “sua resposta, incorreta”; avançar focou o próximo enunciado; reagendar manteve o foco na opção escolhida; a confirmação de exclusão focou o título, associou a descrição, fechou com `Escape` e devolveu o foco ao botão de origem.
- Contraste verificado por cálculo sobre as variáveis dos temas escuro e claro: botão primário, selo de revisões, letras de alternativa, links, chips, textos suaves e aviso amarelo ficaram em pelo menos 4,5:1. Alvos de toque de 44 px (ícones e botões compactos), 50 px (navegação) e 58 px (alternativas) foram conferidos, assim como a ocultação da assinatura da marca em até 380 px e a regra de `prefers-reduced-motion`.
- Service worker testado em contexto isolado com Cache API e rede simuladas: install pré-cacheou 19 recursos do shell/manifesto e nenhum `.md`; ativação removeu `xlearn-shell-v0` e preservou cache de outro app; navegação offline devolveu o `index.html`; manifesto e material acessados online foram servidos offline; CSS veio do shell; POST e outra origem foram ignorados; recurso ausente respondeu 503; o worker não se auto-cacheia. O registro no app foi testado com DOM simulado: URL e escopo relativos, app carregando normalmente e toast de nova versão sem recarregar.
- Base PWA verificada com validação estrutural e HTTP: nome/idioma/escopo relativos, `standalone`, cores, ícones 192/512 any e 512 maskable existentes e com dimensões corretas, caminhos relativos, maskable opaco nas bordas, Apple Touch 180 sem transparência, vínculos no `index.html`, manifesto servido como `application/manifest+json` e todos os PNGs servidos como `image/png`. O script de ícones foi executado do zero e regenerou os quatro arquivos.
- Gerenciamento de dados testado com Cache API simulada e integração real: prefixo `xlearn` removeu três caches e preservou `outra-app`/`xlearninho`; ausência da Cache API retornou `supported: false`; limpar cache pela tela manteve as duas tentativas; confirmação de exclusão exibiu aviso irreversível e lista do conteúdo; cancelar preservou tudo; confirmar apagou tentativas, progresso, sessões, estatísticas e gamificação, manteve a meta configurada em 7, zerou o dashboard, removeu a sessão ativa e voltou ao início. Uma nova resposta após a exclusão recomeçou o XP. As suítes de backup e configurações foram reexecutadas sem regressões.
- Exportação e importação testadas com funções puras e integração com DOM/IndexedDB: envelope identificado/versionado, resumo calculado, rejeição de formato desconhecido, versão incompatível, store ausente e chaves duplicadas; exportação real com tentativa e gamificação; botões na tela; arquivo baixado com nome e conteúdo íntegros; importação inválida sem alterar dados; confirmação com resumo; cancelamento preservando os dados; restauração substituindo tentativas/progresso e retorno ao início. A suíte de configurações e aparência foi reexecutada sem regressões.
- Configurações testadas com normalização pura e integração com DOM/IndexedDB: atalho no topo, formulário com padrões, persistência de tamanho 5/meta 3/ordem sequencial/SRS desativado/intervalos 2-4-6-8-10, aplicação em memória, dashboard atualizado, nova sessão com 5 primeiras questões do material e resposta sem vencimento de revisão. Intervalos fora de ordem foram rejeitados sem alterar o que estava salvo.
- Aparência testada na mesma integração: fonte 20 px refletida no controle, tema claro aplicado com `data-theme`, animações desligadas com `data-animations="off"`, `--font-size` em 20 px, `theme-color` claro, persistência no IndexedDB e retorno ao tema do sistema resolvido para escuro no ambiente de teste, com `theme-color` escuro.

- Sons testados com Web Audio simulado: contexto único reaproveitado, padrões de acerto/erro/início/fim/conquista/moeda agendados, som desligado sem osciladores, prévia forçada, volume zero silencioso e normalização de `soundEnabled`/`soundVolume` (padrão 60%, limites 0–1 e valor inválido). Integração com DOM e IndexedDB confirmou botão no topo, prévias no formulário, volume de 30% persistido, som de início e de resposta agendados, explosão decorativa no feedback, desativação pelo topo com persistência e nova resposta silenciosa.
- Acessibilidade do som verificada: o botão do topo expõe `aria-pressed`, nome acessível “Ativar sons”/“Desativar sons”, as prévias são botões de formulário sem envio acidental e o feedback visual adicional usa `aria-hidden`, sem alterar o foco no feedback.

- Moedas e personagem testados com funções puras: carteira vazia normalizada, 2 moedas por acerto, sessão de 10 + 5 se perfeita, meta de 15 paga uma única vez por dia e novamente no dia seguinte, sessão paga uma única vez por `sessionId`, coleta de conquista idempotente e normalização de dados corrompidos. Os cinco estágios foram verificados nos limites 0/299/300/599/600/999/1000/1499/1500, com progresso, moedas restantes e estágio máximo corretos.
- Integração de moedas com IndexedDB confirmou resposta correta + meta diária somando 17, resposta errada sem moedas, meta não duplicada, conclusão de sessão somando 10 e chamadas repetidas sem novo pagamento. A carteira foi encontrada em `meta/wallet`, exportada no backup e apagada por `clearProgressData` com as configurações preservadas.
- Cartão do personagem testado com DOM simulado e IndexedDB: saldo 130 exibiu Estudante, “Estágio 2 de 5”, 58% acessíveis, “Faltam 50 moedas” e a imagem real `estudante.svg`. O fluxo completo de 10 questões somou 2 moedas por acerto + 10 da sessão (e 5 de sessão perfeita quando aplicável), o dashboard refletiu o novo saldo, e “Apagar progresso” zerou carteira e personagem, voltando a Curioso.
- As cinco imagens SVG foram servidas com HTTP 200, parseadas como XML válido e incluídas no app shell do service worker `v5`, cuja instalação simulada pré-cacheou os 26 recursos previstos, incluindo `js/coins.js` e os cinco personagens. O chip de moedas foi recalibrado para manter pelo menos 4,5:1 nos temas escuro e claro.

- Cronômetro testado com funções puras: criação desligada por padrão, duração padrão de 30 minutos, limites de 5/120, `deadlineAt` correto, segundos restantes arredondados para cima, formatação `MM:SS`, rótulos acessíveis em minutos/segundos, pausa/congelamento, retomada com novo limite, expiração e preservação de `expiredAt`. A normalização cobriu sessões antigas sem cronômetro, dados corrompidos e valores acima da duração. `usesExamTimer` confirmou que apenas `material` recebe cronômetro.
- Integração com DOM e IndexedDB confirmou cronômetro em uma prova com 5 minutos, `role="timer"` e rótulo acessível, persistência de duração/limite, pausa ao ocultar a aba com segundos congelados, retomada ao voltar, estado visual de pausa e alerta no último minuto. O texto do alerta foi recalibrado para pelo menos 4,5:1 no tema claro. Com o relógio avançado, o app encerrou a sessão automaticamente, persistiu `expiredAt` e `remainingSeconds = 0`, abriu o resumo “Tempo esgotado”, mostrou 9 não respondidas e marcou cada item. O resumo ofereceu a revisão do erro e a sessão de correção foi criada sem cronômetro. A configuração rejeitou 2 minutos e salvou 45 minutos, refletindo o valor no formulário.
- A suíte anterior de sons, moedas, personagem, backup, reset e instalação do service worker foi reexecutada sem regressões; a instalação simulada do shell `v6` pré-cacheou os 27 recursos, incluindo `js/timer.js`.

- Simulados testados com funções puras: chave composta `materialId::questionId`, precisão com zero questões, resumo com acertos/erros/não respondidas e totais por assunto, histórico que ignora registro repetido do mesmo `id`, ordenação do mais recente, agregação geral e por assunto e normalização de histórico legado/corrompido.
- Integração de simulados com DOM e IndexedDB confirmou a rota `#/simulado`, agrupamento dos assuntos reais, início desativado sem questões, total em tempo real, quatro questões escolhidas, selo de simulado, ausência do cronômetro de prova, persistência em `meta/simuladoSession`, conclusão em `meta/simulados`, resumo distinto com resultado por assunto e limpeza do simulado ativo. Progresso, tentativas, sessões normais, estatísticas, XP, conquistas e carteira permaneceram zerados; a retomada de simulado e de sessão normal foi verificada por banners independentes.
- A regressão da sessão normal foi reexecutada após separar os stores: início, persistência, alternativas, avanço para a questão 2, tentativa, progresso, banner “Sessão em andamento” e retomada continuaram funcionando.
- O service worker foi verificado em `v7` com 28 caminhos do shell, incluindo `js/simulado.js`, todos existentes no repositório; o app importa o módulo, registra o worker e mantém o manifesto válido com 10 materiais/1250 questões. Após a coleta de conquistas, a versão passou para `v8` mantendo os 28 caminhos.

- Coleta de conquistas testada com funções puras e IndexedDB em memória: conquista bloqueada recusada, valor desconhecido recusado, valor canônico de `ACHIEVEMENTS` usado, saldo e total acumulado somados uma vez, registro em `claimedAchievements`, chamada repetida sem novo pagamento e duas chamadas concorrentes pagando apenas uma vez.
- Integração com DOM confirmou duas conquistas desbloqueadas como botões “Clique para coletar” com `aria-label`, chip somando 10 moedas pendentes, clique creditando 5 moedas, som de moeda e cascata decorativa, item convertido em artigo focável com “Moedas coletadas”, pendência restante atualizada e XP inalterado. Chamada repetida e segunda coleta na tela de progresso foram verificadas; sem pendências, o chip voltou a exibir o XP recebido.

### Campanha final (REQ-027)

12 suítes temporárias executadas em `/tmp/opencode/xlearn-test/` (harness de desenvolvimento, não versionado e já removido), todas aprovadas:

- **Unitária:** manifesto com 10 materiais válidos e 1250 questões; parser e correção por ID nas 1250 questões; alternativas estáveis e gabarito único; material vazio, JSON inválido, ID duplicado e questão sem gabarito isolados; manifesto inválido recusado sem impedir materiais válidos.
- **SRS e gamificação:** acerto/erro, desativação, intervalo manual e fila priorizada; XP, níveis, meta, sequência, conquistas e bônus de sessão sem duplicação; economia de moedas, meta diária, coleta e cinco estágios; ranking por Wilson e agregação por prova/disciplina.
- **Cronômetro, simulados, backup, configurações e cache:** criação, pausa, retomada, expiração e acessibilidade; resumo por assunto, histórico idempotente e agregação; envelope/versão do backup e rejeição de chaves duplicadas; normalização de faixas, intervalos e volume; limpeza seletiva de caches sem afetar outros apps.
- **DOM/IndexedDB — configurações e estudo:** persistência e aplicação imediata de tema, fonte, animações, som, volume, SRS, cronômetro, meta e ordem; rejeição de valores inválidos; sessão respeitando tamanho e ordem; pausa ao ocultar a aba e retomada; correção por alternativa e feedback acessível; revisão manual de 1 hora; estatísticas, XP, meta, sequência, ranking e fila de revisões.
- **DOM/IndexedDB — expiração:** relógio avançado de forma independente da recarga; encerramento automático; `expiredAt` e `remainingSeconds = 0` persistidos; resumo “Tempo esgotado” com todas as questões não respondidas; nenhuma resposta inventada e nenhuma estatística contabilizada.
- **DOM/IndexedDB — backup e exclusão:** exportação real com carteira, simulados e progresso; rejeição de JSON inválido e versão incompatível; cancelamento sem alterações; confirmação com resumo; restauração de configurações, carteira, histórico de simulados, progresso, sessões e tentativas; exclusão preservando configurações e zerando o restante.
- **Estática/PWA:** HTML pt-BR e sem dependências externas; manifesto instalável, ícones reais e maskable; CSS responsivo, `prefers-reduced-motion`, foco visível e alvos de toque; shell `v8` com 28 arquivos existentes, incluindo os cinco personagens.
- **Regressões:** simulados (unitária, backup e DOM), sessão normal, coleta de conquistas (IndexedDB e DOM) e service worker `v8` reexecutados sem falhas após a correção.
- **Defeito corrigido:** `renderStudy` usava `...renderMaterialGrid()`, mas a função devolve um único elemento; a rota `#/estudar` não renderizava. A chamada passou a ser inserida diretamente em `js/app.js`, e a rota foi reverificada.
- **Validação final:** `npm run check` confirmou 10 materiais e 1250 questões; `node --check js/app.js` passou.

---

## L. Próxima tarefa recomendada

**Validar as fases 10 e 11 em produção e preparar a continuidade da temporada.**

Ordem prevista:

1. Abrir `https://x3x31.github.io/XLearn/` em um navegador real e repetir o fluxo com uma conta de teste: login pela modal, início de prova, resposta de uma questão e UPSERT em `season_scores`. O backend já foi validado por REST; falta conferir a experiência completa no navegador.
2. Verificar o top 5 da home, a posição do próprio usuário fora do top 5, o cartão da conta em `#/config`, a sincronização manual e a saída da conta. Conferir também a barra superior: apelido no lugar da assinatura, botão de sair ao lado das configurações, ausência da contagem de questões e estados Online/Offline/Visitante.
3. Testar o modo offline: estudar sem rede, confirmar que o app não bloqueia a sessão e que o placar é reenviado ao reconectar.
4. Remover a conta de teste criada no navegador e conferir que o ranking remoto não expõe e-mail nem tokens. O token administrativo usado na validação automatizada já foi removido de `/tmp/opencode/sbp_token`; recomenda-se revogá-lo no painel Supabase.
5. Planejar a Temporada 2 (novo `seasonId`, período e faixas) antes de 04/12/2026, mantendo o congelamento da Temporada 1 e a possibilidade de arquivar o placar anterior.
