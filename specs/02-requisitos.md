# 02 — Requisitos

Este documento consolida os requisitos do XLearn. A coluna **Status** reflete 2026-11-09. O detalhamento histórico, commits e evidências de teste ficam em [`../PROJECT_STATUS.md`](../PROJECT_STATUS.md).

## 1. Requisitos funcionais

### Fase 1 — Base funcional

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-001 | Manifesto e descoberta de provas | O sistema DEVE gerar `questoes/manifest.json` a partir dos `.md`, com metadados, contagem, hash e diagnóstico. NÃO DEVE manter catálogo fixo no código. | Alta | IMPLEMENTADO |
| REQ-002 | Interpretador de questões | O sistema DEVE interpretar frontmatter e blocos JSON, validar estrutura e normalizar questões sem `eval` nem HTML arbitrário. | Alta | IMPLEMENTADO |
| REQ-003 | Carregamento e validação | O sistema DEVE carregar manifesto e materiais via `fetch` e continuar os demais quando um arquivo falhar. | Alta | IMPLEMENTADO |
| REQ-004 | Seleção de provas | A interface DEVE listar provas reais do manifesto com metadados e permitir iniciar sessão. | Alta | IMPLEMENTADO |
| REQ-005 | Exibição de questões | A interface DEVE exibir enunciado, progresso, metadados e alternativas em ordem estável durante a resposta. | Alta | IMPLEMENTADO |
| REQ-006 | Embaralhamento de alternativas | O sistema DEVE embaralhar alternativas com Fisher–Yates, preservar identificadores e gabarito e persistir a ordem por sessão. | Alta | IMPLEMENTADO |
| REQ-007 | Correção e feedback | O sistema DEVE corrigir pelo identificador da alternativa, impedir dupla resposta e exibir gabarito e explicação. | Alta | IMPLEMENTADO |

### Fase 2 — Persistência e continuidade

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-008 | Persistência IndexedDB | O sistema DEVE armazenar configurações, estatísticas, progresso, sessões e tentativas em IndexedDB. | Alta | IMPLEMENTADO |
| REQ-009 | Retomada de sessão | O sistema DEVE persistir a sessão ativa e permitir continuar exatamente de onde parou. | Alta | IMPLEMENTADO |
| REQ-010 | Histórico e progresso | O sistema DEVE registrar tentativas, acertos, erros, domínio e progresso por prova. | Média | IMPLEMENTADO |

### Fase 3 — Repetição espaçada

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-011 | Agendamento automático | O sistema DEVE aplicar intervalos de 1/3/7/14/30 dias no acerto e reduzir o domínio no erro, agendando 10 minutos. | Alta | IMPLEMENTADO |
| REQ-012 | Intervalo manual | Após acerto, o sistema DEVE permitir escolher 10 min, 1 h, 1, 3, 7, 14, 30 dias ou automático. | Média | IMPLEMENTADO |
| REQ-013 | Fila de revisões | O sistema DEVE listar revisões vencidas e futuras, priorizando as atrasadas. | Alta | IMPLEMENTADO |

### Fase 4 — Gamificação

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-014 | XP e níveis | O sistema DEVE centralizar pontuação, bônus de sessão e progressão de níveis. A partir de REQ-035, XP e níveis são internos. | Média | IMPLEMENTADO |
| REQ-015 | Conquistas | O sistema DEVE desbloquear conquistas reais com base no histórico, sem duplicar recompensa. | Média | IMPLEMENTADO |
| REQ-016 | Meta diária e sequência | O sistema DEVE acompanhar meta configurável e dias consecutivos de estudo. | Média | IMPLEMENTADO |
| REQ-017 | Estatísticas | A interface DEVE exibir totais, precisão, desempenho por disciplina e tentativas recentes. | Média | IMPLEMENTADO |
| REQ-018 | Ranking local | O sistema DEVE classificar provas/disciplinas por desempenho real do dispositivo e deixar claro que não é global. | Baixa | IMPLEMENTADO |

### Fase 5 — Configurações e dados

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-019 | Configurações de estudo | O sistema DEVE ajustar meta diária, tamanho/ordem da sessão, SRS e intervalos. | Alta | IMPLEMENTADO |
| REQ-020 | Preferências de interface | O sistema DEVE oferecer tema claro/escuro/sistema, tamanho do texto e animações. | Média | IMPLEMENTADO |
| REQ-021 | Exportação e importação | O sistema DEVE exportar JSON, validar backup e restaurar dados com confirmação. | Alta | IMPLEMENTADO |
| REQ-022 | Gerenciamento de dados | O sistema DEVE limpar cache sem apagar progresso e excluir progresso separadamente. | Média | IMPLEMENTADO |

### Fase 6 — PWA e offline

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-023 | Manifesto PWA | O sistema DEVE fornecer manifesto, ícones e instalação em Android. | Alta | IMPLEMENTADO |
| REQ-024 | Service worker e cache | O sistema DEVE cachear app shell, manifesto e materiais acessados, com atualização controlada. | Alta | IMPLEMENTADO |
| REQ-025 | Indicador de conexão | A interface DEVE avisar estado online/offline e contingência. | Média | IMPLEMENTADO |

### Fase 7 — Qualidade

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-026 | Acessibilidade e responsividade | A interface DEVE ter navegação por teclado, foco, contraste, `aria-live`, alvos de toque e layout adaptativo. | Média | IMPLEMENTADO |
| REQ-027 | Testes abrangentes finais | O projeto DEVE executar campanha completa ao término das funcionalidades e documentar correções. | Alta | IMPLEMENTADO |
| REQ-028 | Documentação de uso | O projeto DEVE manter README com execução, inclusão de provas, publicação, instalação e limitações. | Média | IMPLEMENTADO |

### Fase 8 — Ludicidade, moedas, personagens, simulados

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-029 | Sons e feedback lúdico | O sistema DEVE gerar sons via Web Audio para acerto, erro, início/fim, conquista e moeda, com alternância e volume, sem dependências externas e respeitando movimento reduzido. | Alta | IMPLEMENTADO |
| REQ-030 | Moedas e evolução de personagens | O sistema DEVE persistir carteira, pagar moedas por acerto/sessão/meta/conquista e exibir personagem em estágios. | Alta | IMPLEMENTADO |
| REQ-031 | Contagem regressiva nas provas | O sistema DEVE oferecer cronômetro de 5–120 min, desligado por padrão, persistente, pausado ao ocultar aba, encerrando a sessão ao zerar. NÃO DEVE aplicar a revisões ou simulados. | Alta | IMPLEMENTADO |
| REQ-032 | Simulados por assunto | O sistema DEVE permitir montar simulado por assunto e registrar histórico separado, sem afetar progresso, XP, conquistas, SRS, ranking, estatísticas ou moedas. | Alta | IMPLEMENTADO |
| REQ-033 | Coleta de moedas de conquistas | O sistema DEVE exigir clique para coletar moedas de conquista, com animação, recompensa única, transação e idempotência. | Alta | IMPLEMENTADO |

### Fase 9 — Temporada e evolução por constância

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-034 | Temporada 1 e evolução do personagem | O sistema DEVE definir a Temporada 1 (`2026-1`, 05/11 a 04/12/2026) e evoluir por moedas acumuladas + dias ativos (0/300/600/1000/1500 e 0/3/6/9/12), sem regressão e com congelamento após o término. | Alta | IMPLEMENTADO |
| REQ-035 | XP interno e conquistas de temporada | O sistema DEVE manter XP e níveis apenas como dados internos, removê-los da interface e substituir conquistas de nível por “Primeira evolução” e “Mestre da temporada”. | Alta | IMPLEMENTADO |
| REQ-036 | Feedback em modal com pausa do cronômetro | O sistema DEVE abrir o feedback em modal acessível após qualquer resposta e pausar/retomar o cronômetro. | Alta | IMPLEMENTADO |
| REQ-037 | Conquistas pendentes na home e cascata centralizada | O sistema DEVE exibir conquistas desbloqueadas e não coletadas na home, com cascata centralizada na viewport e remoção após a coleta. | Média | IMPLEMENTADO |
| REQ-038 | Cabeçalho fixo da prova | O cabeçalho da prova DEVE permanecer fixo sob o topo do app, mantendo título, contador e cronômetro visíveis. | Média | IMPLEMENTADO |
| REQ-039 | Feedback sem campos legados | O parser NÃO DEVE ler nem exibir `bank_approach`, `study_tip` e `review_summary`. | Média | IMPLEMENTADO |
| REQ-040 | Ajuste das moedas de evolução | As faixas da Temporada 1 DEVEM ser 300/600/1000/1500 moedas, mantendo 0 no Curioso e dias ativos 0/3/6/9/12. | Alta | IMPLEMENTADO |

### Fase 10 — Conta Supabase e ranking global da temporada

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-041 | Conta Supabase e sessão sazonal | O sistema DEVE permitir cadastro/login com apelido, e-mail e senha, persistir sessão em `meta/cloudAuth` e continuar o estudo offline. Simulados NÃO DEVEM exigir conta. | Alta | IMPLEMENTADO |
| REQ-042 | Sincronização de nível e moedas | O sistema DEVE enviar apelido, estágio, moedas da temporada e dias ativos ao Supabase por UPSERT, limitado ao próprio usuário por RLS, com debounce e reenvio ao reconectar. | Alta | IMPLEMENTADO |
| REQ-043 | Ranking da temporada na home | A home DEVE exibir top 5 e posição do próprio usuário, com cache offline, atualização por acesso e estados de erro. | Alta | IMPLEMENTADO |

### Fase 11 — Identidade na barra superior

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-044 | Apelido, logout e status de visitante no topo | O topo DEVE exibir apelido quando logado, botão de sair apenas logado e indicador Online/Offline/Visitante, sem contagem de questões. | Alta | IMPLEMENTADO |

### Fase 12 — Conta e acesso do visitante

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-045 | Login e cadastro em fluxos separados | A modal DEVE ter abas acessíveis “Entrar” e “Criar conta”; login NÃO DEVE criar conta automaticamente; apelido só no cadastro. | Alta | IMPLEMENTADO |
| REQ-046 | Rolagem ao apagar progresso | “Apagar progresso” NÃO DEVE saltar para o topo; DEVE preservar rolagem e focar a confirmação com `preventScroll`. | Média | IMPLEMENTADO |
| REQ-047 | Restrições do visitante | O visitante NÃO DEVE acessar Configurações, Progresso, Simulado e Revisões; DEVE responder apenas à primeira questão de cada prova; feedback e avanço DEVEM solicitar conta. | Alta | IMPLEMENTADO |

### Fase 13 — Ajustes de interface

| ID | Requisito | Descrição normativa | Prioridade | Status |
|---|---|---|---|---|
| REQ-048 | Remoção do card Visão rápida | O card “Visão rápida / Seu ritmo de estudo” DEVE ser removido, incluindo função, estilos e menções. | Média | IMPLEMENTADO |
| REQ-049 | Visão rápida restrita à conta e ordem da home | O card “Visão rápida” DEVE aparecer somente para logado. A ordem DEVE ser “Seu painel de estudos”, “Recompensas pendentes”, “Visão rápida” e “Ranking da temporada”. | Média | IMPLEMENTADO |
| REQ-050 | Recompensas pendentes restritas à conta | O card “Recompensas pendentes” DEVE aparecer somente para logado, mantendo a ordem e deixando ao visitante apenas a chamada inicial e o ranking. | Média | IMPLEMENTADO |

### Fase 14 — Isolamento local por conta

| ID | Nome | Regra | Prioridade | Status |
|---|---|---|---|---|
| REQ-051 | Isolamento de dados por conta | Progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira, simulados, conquistas e recompensas coletadas DEVEM ser isolados por conta (`u:<userId>`) e pelo modo visitante (`guest`). Configurações e sessão Supabase continuam globais. Dados legados DEVEM migrar uma única vez para o primeiro escopo ativado. Backup, importação e exclusão DEVEM operar apenas no escopo ativo. | Alta | IMPLEMENTADO |

### Fase 15 — Atualização local da home

| ID | Nome | Regra | Prioridade | Status |
|---|---|---|---|---|
| REQ-052 | Coleta de conquistas sem recarregar a home | Ao coletar uma recompensa, os cards de recompensas pendentes, visão rápida, saldo/moedas, temporada e ranking DEVEM ser atualizados no próprio lugar, sem substituir a página inteira. A rolagem, o foco e a animação de moedas DEVEM ser preservados, e o card vazio DEVE ser removido quando não houver mais pendências. | Alta | IMPLEMENTADO |

## 2. Requisitos não funcionais

| ID | Requisito | Critério mensurável |
|---|---|---|
| NFR-001 | Desempenho de carregamento | Primeira visita carrega shell estático e manifesto; materiais são carregados sob demanda e cacheados em memória |
| NFR-002 | Offline | Após a primeira visita, shell e materiais já acessados abrem sem rede; estudo continua e grava localmente |
| NFR-003 | Compatibilidade | Chrome, Edge, Firefox e Safari atuais; caminhos relativos em raiz ou subdiretório |
| NFR-004 | Acessibilidade | Navegação por teclado, foco visível, `aria-live`, diálogos com foco preso, contraste ≥ 4,5:1 nos textos principais e alvos de toque ≥ 44 px |
| NFR-005 | Responsividade | Layout funcional a partir de 320 px, navegação inferior no mobile e expansão em telas maiores |
| NFR-006 | Segurança de renderização | Nenhum HTML de material é interpretado; `innerHTML` só com ícones constantes |
| NFR-007 | Privacidade | E-mail e tokens nunca aparecem no ranking público nem no backup; senha nunca é armazenada |
| NFR-008 | Integridade | Respostas, sessões, meta, conquistas e placar usam chaves idempotentes e transações |
| NFR-009 | Resiliência | Falha de material, rede ou Supabase não impede o estudo local |
| NFR-010 | Manutenibilidade | Módulos puros sem DOM para regras; `app.js` concentra interface; sem dependências de runtime |
| NFR-011 | Idiomas | Interface e mensagens em `pt-BR`; datas e números formatados para o locale |
| NFR-012 | Portabilidade | `npm run check`, `node --check` e servidor HTTP estático bastam para validar o projeto |
| NFR-013 | Atualização | Service worker versionado; nova versão avisa sem recarregar à força |
| NFR-014 | Armazenamento | Dados locais limitados: 365 dias de estatísticas, 30 entradas de histórico por questão, 200 entradas de carteira e conquistas |
| NFR-015 | Rastreabilidade | Cada requisito entregue em commit funcional com push e registro em `PROJECT_STATUS.md` |

## 3. Regras de negócio

| Regra | Descrição |
|---|---|
| RN-001 | O gabarito é o `id` da alternativa; a posição visual nunca é usada para corrigir. |
| RN-002 | Uma resposta só pode ser confirmada uma vez por questão/sessão. |
| RN-003 | A ordem das alternativas é determinística por `sessionId + questionId` e persistida na sessão. |
| RN-004 | O XP é interno: pode ser calculado e gravado, mas não aparece na interface nem governa a evolução. |
| RN-005 | A evolução do personagem usa `meta/season.coinsEarned` + dias ativos dentro da temporada; não usa `wallet.earned`. |
| RN-006 | Moedas ganhas após `endsAt` continuam na carteira, mas não no ledger da temporada. |
| RN-007 | A Temporada 1 congela após 04/12/2026 até uma nova temporada ser configurada. |
| RN-008 | A meta diária paga 15 moedas uma única vez por dia local. |
| RN-009 | Conclusão de sessão paga 10 moedas + 5 se perfeita, uma única vez por `sessionId`. |
| RN-010 | A coleta de conquista é manual, idempotente e usa o valor canônico de `ACHIEVEMENTS`. |
| RN-011 | Simulados não alimentam progresso, tentativas, sessões normais, SRS, XP, conquistas, ranking, estatísticas nem moedas. |
| RN-012 | O cronômetro vale apenas para `mode: "material"`; não vale para revisão, correção ou simulado. |
| RN-013 | Visitante responde somente à primeira questão de cada material; a sessão tem exatamente 1 questão. |
| RN-014 | Configurações, Progresso, Simulado e Revisões exigem conta, inclusive por acesso direto à rota. |
| RN-015 | Na home, “Recompensas pendentes” e “Visão rápida” só aparecem para logado. |
| RN-016 | O ranking global expõe apenas apelido, nível, moedas, dias ativos e posição; nunca e-mail ou tokens. |
| RN-017 | O placar enviado usa o `user_id` da sessão; RLS impede gravar em nome de outra conta. |
| RN-018 | O backup exclui `meta/cloudAuth`; importar um backup nunca restaura sessão. |
| RN-019 | Excluir progresso preserva `meta/settings` e apaga progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira e simulados. |
| RN-020 | Limpar cache remove apenas caches `xlearn`, `xlearn-*` ou `xlearn:*` e não toca no IndexedDB. |
| RN-021 | Os dados de estudo pertencem ao escopo ativo (`guest` ou `u:<userId>`); nenhum progresso, sessão, tentativa, estatística, temporada, conquista, carteira, simulado ou recompensa coletada pode ser lido por outro escopo. |
| RN-022 | Importar ou apagar dados de estudo afeta somente o escopo ativo; configurações, sessão Supabase, cache do ranking e demais contas são preservados. |
| RN-023 | A coleta de recompensa na home atualiza os cards afetados no próprio lugar, sem recriar a página, preservando rolagem, foco e animação. |

## 4. Critérios de aceitação gerais

1. Nenhuma prova é cadastrada manualmente no código; a fonte é o manifesto.
2. O gabarito não depende da posição visual da alternativa.
3. Alternativas permanecem estáveis durante a resposta e após retomar a sessão.
4. Cliques repetidos não registram resposta nem recompensa duas vezes.
5. Toda configuração exibida altera o comportamento real.
6. Dados de ranking são reais; não há estudantes fictícios.
7. Um material malformado não impede o carregamento dos demais.
8. Falta de internet ou indisponibilidade do Supabase não bloqueia o estudo.
9. O ranking global só expõe apelido, nível, moedas, dias ativos e posição.
10. Cada usuário autenticado só grava a própria pontuação.
11. O visitante vê apenas **Seu painel de estudos** e **Ranking da temporada** na home.
12. O usuário logado vê os quatro cards na ordem definida.
13. A Temporada 1 congela após o término.
14. O app continua funcionando offline para o shell e materiais já acessados.
15. Dados de estudo e recompensas de uma conta nunca aparecem em outra conta nem no modo visitante.
16. Coletar uma recompensa atualiza os cards da home no próprio lugar, sem recriar a página e sem perder rolagem, foco ou animação.
17. `npm run check` valida 10 materiais e 1.250 questões sem erros.

## 5. Rastreabilidade

| Documento | Requisitos cobertos |
|---|---|
| [01 — Visão geral](01-visao-geral.md) | Escopo, personas e princípios de todos os requisitos |
| [03 — Arquitetura](03-arquitetura.md) | REQ-001 a REQ-052, com ênfase em REQ-008, REQ-024, REQ-032, REQ-041 a REQ-043 e REQ-051 |
| [04 — Modelo de dados](04-modelo-de-dados.md) | REQ-008 a REQ-010, REQ-015, REQ-021, REQ-030, REQ-033, REQ-034, REQ-041 a REQ-043, REQ-051 |
| [05 — Interface e rotas](05-interface-e-rotas.md) | REQ-004, REQ-005, REQ-007, REQ-017, REQ-026, REQ-036 a REQ-052 |
| [06 — Conteúdo e parser](06-conteudo-e-parser.md) | REQ-001 a REQ-003, REQ-006, REQ-007, REQ-039 |
| [07 — Offline e PWA](07-offline-e-pwa.md) | REQ-023 a REQ-025 |
| [08 — Segurança e privacidade](08-seguranca-e-privacidade.md) | REQ-021, REQ-041 a REQ-043, REQ-045, REQ-051 |
| [09 — Testes e qualidade](09-testes-e-qualidade.md) | REQ-027 e validação de todos os requisitos |
