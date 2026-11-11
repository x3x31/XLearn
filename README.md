# XLearn

PWA educacional para estudar por questões, com alternativas embaralhadas, feedback explicado, repetição espaçada, simulados, temporada, conquistas e moedas — tudo salvo no navegador.

**Aplicativo publicado:** <https://x3x31.github.io/XLearn/>  
**Repositório:** <https://github.com/x3x31/XLearn>

## Sobre

O XLearn lê provas em Markdown padronizado na pasta `questoes/`, gera um manifesto e apresenta os materiais em uma interface responsiva em português brasileiro. O progresso de estudo pertence ao dispositivo e ao navegador usados e é separado por conta: cada usuário vê apenas o próprio progresso, e o modo visitante tem um espaço independente. Uma conta no Supabase libera o estudo completo e a participação no ranking global da Temporada 1. Sem conta, o modo visitante permite conhecer as provas e responder à primeira questão de cada uma; sem internet, o estudo continua funcionando localmente.

O projeto usa apenas HTML5, CSS3, JavaScript puro (ES Modules), IndexedDB, Cache API, Service Worker e Web App Manifest. Não há frameworks, bibliotecas de execução, fontes externas ou CDNs.

## Funcionalidades

- **Provas reais:** catálogo com disciplina, banca, assunto e quantidade de questões.
- **Sessão de estudo:** questões e alternativas embaralhadas de forma estável, correção pela identificação da alternativa, bloqueio de resposta duplicada e explicações completas em janela modal.
- **Retomada:** sessões interrompidas continuam de onde pararam.
- **Repetição espaçada:** intervalos automáticos de 1, 3, 7, 14 e 30 dias, revisão curta de 10 minutos no erro, escolha manual após o acerto e fila de revisões vencidas.
- **Simulados:** montagem por assunto e quantidade de questões, com resumo próprio por disciplina.
- **Cronômetro opcional:** contagem regressiva de 5 a 120 minutos nas provas, exibida em um cabeçalho fixo com o contador de questões, com pausa automática ao trocar de aba, pausa enquanto o feedback está aberto e encerramento ao zerar.
- **Gamificação:** temporada com evolução por moedas acumuladas e dias ativos, meta diária, sequência de estudos, conquistas e ranking local.
- **Conta e ranking global:** login opcional por e-mail e senha ou cadastro com apelido, e-mail e senha para enviar nível e moedas ao ranking da Temporada 1, com verificação automática de disponibilidade do apelido ao sair do campo, top 5 na tela inicial, posição do próprio usuário, sessão persistente, apelido e saída rápida na barra superior e sincronização automática quando a conexão volta.
- **Moedas e personagem:** recompensas por acerto, sessão e meta; coleta manual das moedas das conquistas, com pendências destacadas na tela inicial e cascata de moedas vinda do topo, sincronizada com o som, ao coletar; personagem com cinco estágios que evolui apenas dentro da temporada e congela ao término.
- **Som e ludicidade:** efeitos gerados via Web Audio, com volume configurável e respeito a animações reduzidas.
- **Acessibilidade:** navegação por teclado, foco visível, link de pular, rótulos ARIA, contraste e alvos de toque adequados.
- **Offline e instalação:** app shell em cache, materiais já acessados disponíveis offline e instalação como PWA.
- **Dados locais:** progresso isolado por conta e pelo modo visitante, além de backup e restauração em JSON do escopo ativo e exclusão do progresso local e da pontuação da conta no Supabase.

## Requisitos

- Navegador moderno: Chrome, Edge, Firefox ou Safari atuais.
- Para executar localmente: Python 3 ou qualquer servidor HTTP estático.
- Para regenerar o manifesto: Node.js 18 ou superior.
- Não é necessário executar `npm install`; o projeto não tem dependências.

## Execução local

O app precisa ser servido por HTTP. Abrir `index.html` diretamente como arquivo (`file://`) impede o carregamento de módulos, do manifesto e do service worker.

Na raiz do projeto, execute:

```bash
python3 -m http.server 8899 --bind 127.0.0.1
```

Depois acesse:

```text
http://127.0.0.1:8899/
```

Para usar outra porta ou servir a partir de outro diretório estático, mantenha a raiz do repositório como raiz do site para preservar os caminhos relativos.

> O service worker e a instalação como PWA funcionam em `localhost` ou HTTPS. Em produção, o GitHub Pages fornece HTTPS.

## Publicação no GitHub Pages

O projeto já está configurado para publicação estática a partir da branch `main`:

1. Envie as alterações para a branch `main`.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/ (root)`.

O arquivo `.nojekyll` impede que o Jekyll processe ou ignore os materiais Markdown. Todos os caminhos são relativos, o que permite hospedar o app na raiz do domínio ou em um subdiretório.

Após a publicação, o endereço padrão é:

```text
https://<usuario>.github.io/XLearn/
```

## Instalação como PWA

- **Android/Chrome:** abra o site, use o menu do navegador e escolha **Instalar aplicativo** ou **Adicionar à tela inicial**.
- **iPhone/iPad/Safari:** toque em **Compartilhar** e depois em **Adicionar à Tela de Início**.
- **Desktop/Chrome ou Edge:** use o ícone de instalação na barra de endereço.

Depois da primeira visita, o app shell fica disponível offline. Cada material é guardado após ser acessado ao menos uma vez; uma prova ainda não visitada pode não abrir sem conexão.

## Uso

A navegação inferior leva às áreas principais:

| Área | Rota | O que faz |
|---|---|---|
| Início | `#/inicio` | Chamada inicial com ações de estudo e, para quem tem conta, os cards na ordem “Seu painel de estudos”, “Recompensas pendentes”, “Visão rápida” e “Ranking da temporada”. O visitante vê apenas a chamada inicial e o ranking público. Sessões em andamento e revisões vencidas aparecem como avisos. |
| Provas | `#/estudar` | Lista os materiais disponíveis e inicia uma sessão de estudo. |
| Revisões | `#/revisoes` | Mostra a fila de revisões vencidas e futuras, agrupada por prova. |
| Simulado | `#/simulado` | Monta uma prova por assunto, com quantidade configurável de questões. |
| Progresso | `#/progresso` | Totais, precisão, temporada, personagem, moedas, dias ativos, meta/sequência, ranking local, conquistas e tentativas recentes. |
| Configurações | `#/config` | Ajustes de estudo, aparência, som, conta da temporada, dados e backup. |

Configurações, Revisões, Simulado e Progresso exigem uma conta. No modo visitante, o menu inferior mostra apenas Início e Provas, e o acesso direto a uma dessas rotas exibe uma área para criar conta ou entrar.

Durante uma sessão:

1. Escolha uma alternativa e confirme a resposta.
2. Use o botão **Mostrar feedback** para abrir a alternativa correta, sua escolha e a explicação em uma janela modal.
3. Após um acerto, escolha quando deseja revisar (automático ou um intervalo manual).
4. Avance para a próxima questão ou abra o resumo ao final.

No modo visitante, a sessão tem apenas a primeira questão de cada prova: o feedback, o avanço para a segunda questão e o resumo completo pedem a criação de conta ou o login.

A correção usa o identificador da alternativa (A, B, C, D), nunca a posição em que ela aparece na tela. As letras originais do gabarito são preservadas.

### Configurações disponíveis

- **Questões por sessão:** 1 a 100 (padrão 10).
- **Meta diária:** 1 a 500 questões (padrão 20).
- **Ordem das questões:** aleatória ou sequencial; as alternativas continuam sempre embaralhadas.
- **Repetição espaçada:** ativação e cinco intervalos crescentes de 1 a 365 dias.
- **Cronômetro:** desligado por padrão; quando ativado, dura de 5 a 120 minutos (padrão 30) e vale apenas para provas, não para revisões ou correções.
- **Tema:** sistema, escuro ou claro.
- **Tamanho do texto:** 14 a 22 px.
- **Animações:** podem ser desativadas; a preferência do sistema por movimento reduzido também é respeitada.
- **Som:** ligado/desligado e volume de 0 a 100%, com prévia dos efeitos.

### Cronômetro

Enquanto a prova está em andamento, o tempo restante aparece no cabeçalho fixo da questão, junto do título da prova e do contador de questões; o cabeçalho permanece visível mesmo quando o conteúdo rola. Se a aba for ocultada, o cronômetro pausa; ao voltar, ele retoma. O relógio também fica pausado enquanto a janela de feedback estiver aberta e volta a contar somente depois que ela for fechada. No último minuto, o relógio entra em estado de alerta. Ao chegar a zero, a sessão é encerrada automaticamente, as questões não respondidas são marcadas no resumo e a conclusão é paga uma única vez.

### Simulados

O simulado permite escolher quantas questões usar de cada assunto. Ele tem sessão ativa e histórico próprios, pode coexistir com uma sessão normal e **não** altera progresso, tentativas normais, estatísticas, conquistas, revisões, ranking ou moedas. O resumo do simulado mostra totais e acertos por assunto.

### Moedas, conquistas e personagem

- **2 moedas** por resposta correta.
- **10 moedas** ao concluir uma sessão, mais **5** se todas as respostas estiverem corretas.
- **15 moedas** ao atingir a meta diária, uma única vez por dia.
- As conquistas desbloqueadas têm recompensas próprias em moedas. Elas **não são pagas automaticamente**: toque em “Clique para coletar” na tela de progresso.
- As conquistas desbloqueadas e ainda não coletadas também aparecem no início, na seção **Conquistas para coletar**. Ao coletar, os cards de recompensas, visão rápida e ranking são atualizados na hora, sem recarregar a página: a rolagem e o foco são preservados, as moedas caem do topo até cerca de um terço da tela com o som acompanhando o tempo visível e a seção desaparece quando todas as recompensas forem coletadas. Cada moeda desaparece em uma altura aleatória da queda, e coletas em sequência reaproveitam a mesma cascata por mais tempo, sem sobrepor animações.

A **Temporada 1** vai de **05/11/2026 a 04/12/2026**. O personagem evolui pelo mínimo de moedas acumuladas na temporada e pelo total de dias ativos com pelo menos uma questão respondida. Os dois requisitos precisam ser atendidos ao mesmo tempo:

| Estágio | Personagem | Moedas na temporada | Dias ativos |
|---|---|---|---|
| 1 | Curioso | 0 | 0 |
| 2 | Estudante | 300 | 3 |
| 3 | Focado | 600 | 6 |
| 4 | Veterano | 1000 | 9 |
| 5 | Mestre dos estudos | 1500 | 12 |

Gastar moedas não reduz o acumulado da temporada. Ao final de 04/12/2026, o personagem congela no último estágio alcançado e só volta a evoluir quando uma nova temporada for definida.

As conquistas de temporada são **Primeira evolução** (alcançar o estágio 2) e **Mestre da temporada** (alcançar o estágio máximo). O XP continua sendo calculado e gravado como métrica interna, mas não aparece na interface nem influencia a evolução do personagem.

### Conta e ranking da temporada

Participar do ranking global exige uma conta. Ao iniciar a primeira prova normal sem uma conta conectada, o app pede que você **entre** com e-mail e senha ou escolha **criar conta** com apelido, e-mail e senha. As duas opções ficam em abas separadas na mesma modal: o login nunca cria conta automaticamente, e o cadastro avisa quando o e-mail já está registrado. No cadastro, ao sair do campo **Apelido**, o app consulta o servidor e informa se o apelido está disponível; se já estiver em uso, o envio fica bloqueado até você escolher outro. Sem conexão ou sem a função configurada no Supabase, o cadastro continua permitido e a modal apenas avisa que não foi possível verificar. Quem preferir conhecer o app primeiro pode usar **Continuar offline** e responder à primeira questão de cada prova como visitante. A sessão fica salva no dispositivo durante a temporada e é renovada antes de expirar. A senha nunca é armazenada no navegador.

- **O que é público:** apelido, estágio (nível) e moedas acumuladas na temporada, além dos dias ativos. Seu e-mail nunca aparece no ranking.
- **Verificação de apelido:** a consulta devolve apenas “disponível” ou “em uso” e não expõe e-mails, identificadores ou a lista de apelidos cadastrados.
- **O que é enviado:** o placar derivado do mesmo progresso local usado pelo personagem. O envio é automático após respostas, sessões, coletas e ao abrir a home, com reenvio quando a conexão volta.
- **Ranking na home:** mostra o top 5 da Temporada 1 e, quando você está fora dele, também a sua posição. O ranking é atualizado a cada acesso à home e fica em cache para consulta offline.
- **Barra superior:** com a conta conectada, o apelido aparece no lugar de “aprender praticando” e um botão de sair fica ao lado das configurações. O indicador de conexão mostra **Online**, **Offline** ou **Visitante** (sem conta ou após sair). A quantidade de questões não é mais exibida no topo.
- **Sem internet:** a modal oferece **Continuar offline**. O estudo funciona normalmente e a pontuação é sincronizada depois.
- **Simulados:** exigem conta e não enviam pontuação ao ranking.
- **Privacidade:** o backup JSON exclui a sessão (`cloudAuth`), o perfil (`cloudProfile`), o cache do ranking (`cloudRank`) e o marcador interno de migração; portanto, tokens e e-mail da conta não vão para o arquivo exportado. Sair da conta apaga a sessão local e revoga o token de renovação quando há rede.
- **Dados por conta:** progresso, sessões, tentativas, estatísticas, temporada, conquistas, carteira, simulados e recompensas coletadas ficam isolados por conta. Ao entrar, o app carrega apenas os dados daquele usuário; ao sair, volta ao espaço do visitante. Nenhuma conta herda o saldo, as coletas ou as pendências de outra. Os dados da conta anterior continuam no dispositivo e reaparecem no próximo login.
- **Limitação:** o placar é montado pelo cliente. As políticas do Supabase impedem gravar em nome de outra conta, mas não validam a veracidade dos valores enviados pelo próprio usuário.

### Revisões

Um acerto aumenta o domínio e agenda a próxima revisão; um erro reduz o domínio e cria uma revisão curta de 10 minutos. A fila de revisões prioriza o que está mais atrasado. A sessão de revisão usa apenas as questões vencidas e não recebe cronômetro de prova.

## Adicionar provas

Os materiais ficam em `questoes/` e podem ser organizados em subpastas. O gerador ignora `manifest.json`, `README.md` e a pasta `outros/`.

### Formato do arquivo

Cada prova é um arquivo `.md` com frontmatter, um título `#` e um bloco ```json por questão:

````markdown
---
schema_version: "1.0"
material_id: "MAT-EXEMPLO-001"
bank: "Banca Exemplo"
subject: "Disciplina Exemplo"
topic: "Assunto principal"
total_questions: 1
language: "pt-BR"
---

# Material de Estudo — Disciplina Exemplo

## Questão 0001

```json
{
  "id": "MAT-EXEMPLO-001-Q0001",
  "type": "original",
  "subject": "Disciplina Exemplo",
  "topic": "Assunto principal",
  "difficulty": "medium",
  "question_text": "Qual é a alternativa correta?",
  "alternatives": [
    { "id": "A", "text": "Alternativa correta.", "is_correct": true },
    { "id": "B", "text": "Alternativa incorreta.", "is_correct": false },
    { "id": "C", "text": "Alternativa incorreta.", "is_correct": false },
    { "id": "D", "text": "Alternativa incorreta.", "is_correct": false }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "Explicação da resolução.",
    "theoretical_content": "Conteúdo teórico de apoio."
  }
}
```
````

Regras principais:

- `id` deve ser único dentro do material.
- Cada questão precisa de `question_text` e pelo menos duas alternativas com `text`.
- A correta pode ser indicada por `answer_key` ou por exatamente um `is_correct: true`. Se ambos existirem, `answer_key` prevalece.
- `alternatives[].explanation` é opcional e aparece no comentário individual.
- `subject`, `topic`, `difficulty`, `source`, `type` e os campos `resolution`/`theoretical_content` de `explanation` são opcionais, mas melhoram a experiência.
- Os campos legados `bank_approach`, `study_tip` e `review_summary` não são mais lidos nem exibidos; materiais antigos que ainda os contenham continuam válidos, mas esses textos são ignorados.
- IDs de alternativa duplicados, JSON inválido, questão sem gabarito ou IDs de questão repetidos são reportados como erro; o material inválido é ignorado no catálogo.

### Gerar e validar o manifesto

Depois de adicionar ou editar materiais:

```bash
npm run build:manifest
```

O comando grava `questoes/manifest.json`. Para validar sem gravar:

```bash
npm run check
```

O manifesto é a única fonte de descoberta de provas. Se ele não for regenerado, a nova prova não aparece no app.

## Dados, backup e privacidade

Os dados ficam no IndexedDB do navegador, no banco `xlearn`:

- `meta`: configurações globais, além de estatísticas, temporada, gamificação, carteira, histórico de simulados e simulado ativo do escopo ativo.
- `progress`: domínio e agendamento de revisão por questão do escopo ativo.
- `sessions`: sessões normais do escopo ativo, incluindo respostas e ordem das alternativas.
- `attempts`: histórico de tentativas do escopo ativo.

O estudo é separado por **escopo**: `guest` para o visitante e `u:<userId>` para cada conta. Progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira, simulados, conquistas e recompensas coletadas de um escopo nunca aparecem em outro. Configurações de estudo, aparência, som, sessão do Supabase e cache do ranking continuam globais.

Sem conta, nenhum dado de estudo é enviado a servidores; com conta, apenas apelido, estágio e moedas acumuladas da temporada seguem para o ranking. Limpar os dados do site no navegador apaga todo o banco local; por isso, faça backups periódicos.

Em **Configurações → Dados**:

- **Exportar backup:** baixa um JSON versionado com configurações, estatísticas, temporada, gamificação, conquistas, moedas, personagem, progresso, sessões, tentativas e simulados **apenas do escopo ativo**. As chaves e os IDs são gravados de forma canônica, sem o prefixo do escopo, e a sessão, o perfil, o cache do ranking e o marcador de migração são excluídos do arquivo.
- **Importar backup:** valida formato, versão e registros antes de mostrar um resumo; somente após a confirmação os dados do escopo ativo são substituídos. As demais contas, a sessão Supabase, o cache do ranking e o marcador de migração são preservados.
- **Limpar cache do app:** remove apenas os caches `xlearn-*`, preservando respostas e histórico.
- **Apagar progresso:** remove progresso, sessões, tentativas, estatísticas, temporada, gamificação, carteira, histórico de simulados e simulado ativo **apenas do escopo ativo**, mas mantém as configurações de estudo e aparência e os dados das demais contas. A confirmação “Apagar todo o progresso?” aparece mantendo a posição de rolagem, sem levar a página ao topo. Com conta conectada, a pontuação da temporada também é excluída do Supabase; se a rede falhar, a remoção fica pendente e é repetida quando a conexão voltar, sem que uma sincronização posterior recrie o placar.

## Estrutura do projeto

```text
.
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── css/
│   └── styles.css
├── js/
│   ├── app.js          # rotas, interface, sessão e ranking
│   ├── cloud.js        # cliente REST do Supabase (Auth/PostgREST)
│   ├── cloud-config.js # URL e chave publishable do Supabase
│   ├── db.js           # IndexedDB e transações
│   ├── parser.js       # leitura e validação dos materiais
│   ├── questions.js    # manifesto e carregamento
│   ├── settings.js     # preferências
│   ├── srs.js          # repetição espaçada
│   ├── gamification.js # XP interno, níveis e conquistas
│   ├── coins.js        # carteira e economia de moedas
│   ├── season.js       # temporada, dias ativos e estágios do personagem
│   ├── timer.js        # cronômetro
│   ├── simulado.js     # resumo e histórico de simulados
│   ├── ranking.js      # ranking local
│   ├── backup.js       # validação de backup
│   ├── storage.js      # limpeza de caches
│   └── sound.js        # efeitos via Web Audio
├── questoes/           # materiais .md e manifest.json
├── scripts/            # gerador de manifesto e ícones
├── supabase/           # schema canônico e migration do ranking
├── specs/              # especificação normativa (índice em specs/README.md)
├── icons/              # ícones da PWA
└── assets/characters/  # estágios do personagem
```

## Documentação

- `README.md` (este arquivo) é o guia de uso, instalação e publicação.
- [`specs/README.md`](specs/README.md) é o índice da especificação normativa, com nove documentos temáticos sobre visão geral, requisitos, arquitetura, modelo de dados, interface e rotas, conteúdo e parser, offline e PWA, segurança e privacidade, e testes e qualidade.
- `PROJECT_STATUS.md` é a fonte operacional de versão, requisitos, decisões, histórico de commits e evidências de teste.

## Validação e testes

Verificação do catálogo, sem gravar o manifesto:

```bash
npm run check
```

Verificação sintática dos arquivos JavaScript:

```bash
node --check js/app.js
node --check js/db.js
node --check service-worker.js
```

A campanha final de testes está registrada em `PROJECT_STATUS.md`. Os testes automatizados de desenvolvimento usaram DOM simulado, IndexedDB em memória e Cache API simulada, fora do repositório; não há suíte de testes versionada nem dependências de teste no projeto.

## Limitações conhecidas

- **Uma sessão normal por vez:** iniciar outra prova ou revisão substitui a sessão normal ativa. O simulado tem um espaço próprio e pode coexistir com ela. Respostas já gravadas permanecem no progresso e no histórico.
- **Formato específico:** só materiais Markdown com blocos ```json no padrão descrito são carregados. Markdown livre não é convertido em questão.
- **Manifesto manual:** adicionar uma prova exige executar `npm run build:manifest`.
- **Ranking local × global:** o ranking local em `#/progresso` representa apenas aquele navegador/dispositivo. O ranking global da Temporada 1 depende de uma conta Supabase e mostra somente apelido, nível e moedas.
- **Conta necessária para o estudo completo:** sem conta, o modo visitante permite responder apenas à primeira questão de cada prova e não abre Configurações, Progresso, Simulado nem Revisões; o feedback e o avanço levam ao cadastro. A sessão da conta fica no IndexedDB e não é transferida pelo backup.
- **Placar enviado pelo cliente:** o app calcula e envia o próprio nível/moedas. As políticas RLS impedem gravar em nome de outra conta, mas não atestam a veracidade do placar.
- **Dados por navegador:** trocar de navegador, limpar o armazenamento ou usar outro dispositivo não transfere o progresso automaticamente. O backup JSON contempla apenas o escopo ativo; para levar outra conta, entre nela e exporte um backup separado.
- **Offline parcial:** o app shell fica disponível após a primeira visita, mas cada prova só fica offline depois de ser acessada uma vez. A pontuação pendente é reenviada quando a conexão volta.
- **Service worker:** exige HTTPS ou `localhost`.
- **Som:** depende de suporte a Web Audio e é liberado após o primeiro gesto do usuário, conforme a política dos navegadores.

## Licença

Este repositório não declara uma licença de uso. Consulte o autor antes de redistribuir os materiais ou o código.
