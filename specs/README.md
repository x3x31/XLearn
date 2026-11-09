# Especificações do XLearn

Documentação normativa do XLearn, consolidada a partir do estado real do repositório em **2026-11-09**.

> **Fonte de verdade operacional:** [`../PROJECT_STATUS.md`](../PROJECT_STATUS.md) registra requisitos, decisões, histórico de commits e testes de cada entrega. Esta pasta organiza a mesma matéria em documentos temáticos, voltados a manutenção, revisão e evolução. Em caso de divergência, o código e o `PROJECT_STATUS.md` prevalecem; a divergência deve ser corrigida aqui.

## Como ler

| Documento | Conteúdo | Público principal |
|---|---|---|
| [01 — Visão geral](01-visao-geral.md) | Problema, objetivos, escopo, personas, princípios e glossário | Todos |
| [02 — Requisitos](02-requisitos.md) | Requisitos funcionais e não funcionais, regras de negócio e critérios de aceitação | Produto, desenvolvimento e testes |
| [03 — Arquitetura](03-arquitetura.md) | Módulos, camadas, fluxos, decisões e regras de dependência | Desenvolvimento |
| [04 — Modelo de dados](04-modelo-de-dados.md) | IndexedDB, chaves de `meta`, backup e schema Supabase | Desenvolvimento e operação |
| [05 — Interface e rotas](05-interface-e-rotas.md) | Rotas, telas, estados, restrições do visitante e acessibilidade | Produto, design e testes |
| [06 — Conteúdo e parser](06-conteudo-e-parser.md) | Manifesto, formato Markdown, normalização e validação | Conteúdo e desenvolvimento |
| [07 — Offline e PWA](07-offline-e-pwa.md) | Service worker, caches, instalação, atualização e limites offline | Desenvolvimento e operação |
| [08 — Segurança e privacidade](08-seguranca-e-privacidade.md) | Modelo de ameaças, autenticação, RLS, backup e limitações | Desenvolvimento, segurança e operação |
| [09 — Testes e qualidade](09-testes-e-qualidade.md) | Estratégia, matriz de testes, comandos e critérios de entrega | Desenvolvimento e testes |

## Estado resumido

| Item | Estado em 2026-11-09 |
|---|---|
| Versão do projeto | `0.47.0` (specs consolidadas) |
| Requisitos funcionais | REQ-001 a REQ-050 implementados |
| Materiais | 10 arquivos Markdown válidos em `questoes/` |
| Questões | 1.250 questões válidas no manifesto |
| Temporada | Temporada 1 (`2026-1`), de 05/11/2026 a 04/12/2026 |
| Service worker | `v26` |
| Dependências de execução | Nenhuma |
| Hospedagem | GitHub Pages, branch `main` |
| App publicado | <https://x3x31.github.io/XLearn/> |

## Convenções

- **DEVE / NÃO DEVE / PODE** expressam obrigação, proibição e permissão.
- “Sessão normal” designa uma sessão de estudo de um material; “simulado” é o modo isolado por assunto.
- “Conta” significa sessão autenticada no Supabase Auth. “Visitante” é quem não tem sessão de conta.
- Datas de temporada usam o dia local do dispositivo (`AAAA-MM-DD`).
- Valores monetários e XP são inteiros não negativos.
- Toda interface é em português brasileiro (`pt-BR`).
- Não há backend próprio: a única API remota é o Supabase Auth/PostgREST, e apenas para conta e ranking.

## Manutenção destas specs

1. Alterou comportamento, formato de dados, rota, regra de negócio ou critério de aceitação? Atualize o documento temático correspondente **no mesmo commit**.
2. Registre o requisito, a decisão e o teste em `PROJECT_STATUS.md` antes do commit, conforme a convenção do projeto.
3. Se a mudança afetar arquivos do app shell, incremente `VERSION` em `service-worker.js` e atualize [07 — Offline e PWA](07-offline-e-pwa.md).
4. Se a mudança afetar schema remoto, atualize `supabase/schema.sql`, a migration correspondente e [04 — Modelo de dados](04-modelo-de-dados.md).
5. Rode `npm run check`, `node --check` nos arquivos alterados e as regressões descritas em [09 — Testes e qualidade](09-testes-e-qualidade.md).
