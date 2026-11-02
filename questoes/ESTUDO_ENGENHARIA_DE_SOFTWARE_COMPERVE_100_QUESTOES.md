---
schema_version: "1.0"
material_id: "MAT-ENGSOFT-COMPERVE-001"
bank: "COMPERVE"
subject: "Engenharia de Software"
topic: "Padrões GoF; processos e ciclo de vida; métodos estruturados e orientados a objetos; planejamento; requisitos; análise e projeto; gestão de configuração; testes; qualidade; manutenção; desenvolvimento baseado em componentes; ferramentas CASE; gestão de projetos; Scrum; UML 2.0"
requested_questions: 100
original_questions: 10
generated_questions: 90
total_questions: 100
created_at: "2026-11-02"
language: "pt-BR"
---

# Engenharia de Software — 100 questões no estilo COMPERVE

Material elaborado conforme `GERAÇÃO_ESTUDO.md`, com reprodução dos padrões documentados em `ESTILO_DA_BANCA.md` e consulta ao corpus `provas_comperve.zip`.

As questões `original` foram transcritas dos cadernos indicados em `source`. As questões `generated` são inéditas; não são apresentadas como questões oficiais da banca.

## Questão 0001

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0001",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Analista de Tecnologia da Informação (Desenvolvimento)",
    "year": 2022,
    "question_number": 21,
    "page": 9
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Facade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Matias conversava com um colega que estava desenvolvendo um sistema orientado a objetos e precisava solucionar um problema. O colega precisava oferecer uma interface única para um conjunto de interfaces de um subsistema, definindo uma interface de nível mais elevado tornando o subsistema mais fácil de usar. Por conhecer os padrões de projetos, Matias viu que existia um padrão de projeto que se encaixava, perfeitamente, no problema sugerido por seu colega. Dessa forma, disse que o padrão de projeto que ele deveria usar para solucionar aquele problema era o",
  "alternatives": [
    {
      "id": "A",
      "text": "Facade.",
      "is_correct": true,
      "explanation": "Correta. Facade. O padrão Facade (Fachada) é um padrão estrutural que fornece uma interface simplificada e unificada para um conjunto de interfaces de um subsistema. Ele não elimina necessariamente as classes internas nem impede seu uso direto; apenas oferece um ponto de entrada de nível mais alto que reduz o acoplamento do cliente à complexidade interna. Observer trata de notificação de dependentes quando um objeto muda; Builder separa a construção de um objeto complexo de sua representação; Memento captura e restaura estado sem expor sua estrutura interna. A situação apresentada corresponde diretamente a esse conceito, pois O comando descreve literalmente uma interface única e de nível mais elevado para simplificar o uso de um subsistema. Essa é a intenção do Facade. As demais opções possuem finalidades distintas: notificação, construção passo a passo e restauração de estado."
    },
    {
      "id": "B",
      "text": "Observer.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta observer. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O padrão Facade (Fachada) é um padrão estrutural que fornece uma interface simplificada e unificada para um conjunto de interfaces de um subsistema. Ele não elimina necessariamente as classes internas nem impede seu uso direto; apenas oferece um ponto de entrada de nível mais alto que reduz o acoplamento do cliente à complexidade interna. Observer trata de notificação de dependentes quando um objeto muda; Builder separa a construção de um objeto complexo de sua representação; Memento captura e restaura estado sem expor sua estrutura interna. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "Builder.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta builder. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O padrão Facade (Fachada) é um padrão estrutural que fornece uma interface simplificada e unificada para um conjunto de interfaces de um subsistema. Ele não elimina necessariamente as classes internas nem impede seu uso direto; apenas oferece um ponto de entrada de nível mais alto que reduz o acoplamento do cliente à complexidade interna. Observer trata de notificação de dependentes quando um objeto muda; Builder separa a construção de um objeto complexo de sua representação; Memento captura e restaura estado sem expor sua estrutura interna. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "Memento.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta memento. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O padrão Facade (Fachada) é um padrão estrutural que fornece uma interface simplificada e unificada para um conjunto de interfaces de um subsistema. Ele não elimina necessariamente as classes internas nem impede seu uso direto; apenas oferece um ponto de entrada de nível mais alto que reduz o acoplamento do cliente à complexidade interna. Observer trata de notificação de dependentes quando um objeto muda; Builder separa a construção de um objeto complexo de sua representação; Memento captura e restaura estado sem expor sua estrutura interna. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando descreve literalmente uma interface única e de nível mais elevado para simplificar o uso de um subsistema. Essa é a intenção do Facade. As demais opções possuem finalidades distintas: notificação, construção passo a passo e restauração de estado.",
    "theoretical_content": "O padrão Facade (Fachada) é um padrão estrutural que fornece uma interface simplificada e unificada para um conjunto de interfaces de um subsistema. Ele não elimina necessariamente as classes internas nem impede seu uso direto; apenas oferece um ponto de entrada de nível mais alto que reduz o acoplamento do cliente à complexidade interna. Observer trata de notificação de dependentes quando um objeto muda; Builder separa a construção de um objeto complexo de sua representação; Memento captura e restaura estado sem expor sua estrutura interna.",
    "bank_approach": "A questão usa uma situação profissional curta e uma definição funcional do padrão. A habilidade central é reconhecer a intenção do padrão GoF a partir do problema que ele resolve, e não decorar apenas seu nome.",
    "study_tip": "Associe Facade à ideia de fachada/porta de entrada simplificada. Se o enunciado falar em notificar vários objetos, pense em Observer; construção complexa, Builder; restauração de estado, Memento.",
    "review_summary": "Facade é estrutural e simplifica o acesso a subsistemas por uma interface unificada. Não confundir com Observer, Builder ou Memento."
  }
}
```

## Questão 0002

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0002",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Analista de Tecnologia da Informação (Desenvolvimento)",
    "year": 2022,
    "question_number": 22,
    "page": 9
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Classificação dos padrões Iterator, Visitor e Flyweight",
  "difficulty": "medium",
  "cognitive_skill": "analysis",
  "question_text": "Os padrões de projeto podem ser classificados, de acordo com sua finalidade, em padrões criacionais, estruturais e comportamentais. Posto isso, considere as descrições dos padrões de projeto abaixo.\n\nI — Fornece meios de acessar, sequencialmente, os elementos de um objeto agregado sem expor a sua representação subjacente.\n\nII — Representa uma operação a ser executada nos elementos de uma estrutura de objetos permitindo definir uma nova operação sem mudar as classes dos elementos sobre os quais opera.\n\nIII — Usa compartilhamento para dar suporte, eficientemente, a grandes quantidades de objetos de granularidade fina.\n\nOs padrões I, II e III são, respectivamente,",
  "alternatives": [
    {
      "id": "A",
      "text": "comportamental, comportamental e estrutural.",
      "is_correct": true,
      "explanation": "Correta. comportamental, comportamental e estrutural. O GoF agrupa os padrões em três famílias segundo sua finalidade. Criacionais tratam da criação de objetos; estruturais organizam classes e objetos em estruturas maiores; comportamentais tratam da distribuição de responsabilidades e da comunicação entre objetos. Iterator é comportamental: percorre uma coleção sem expor sua representação. Visitor é comportamental: adiciona operações a uma estrutura de elementos sem alterar as classes desses elementos. Flyweight é estrutural: compartilha estado intrínseco para reduzir o custo de muitos objetos pequenos. Portanto, a sequência é comportamental, comportamental e estrutural. A situação apresentada corresponde diretamente a esse conceito, pois A descrição I corresponde ao Iterator; a II, ao Visitor; e a III, ao Flyweight. Aplicando a classificação GoF, Iterator e Visitor são comportamentais, enquanto Flyweight é estrutural. A sequência correta é a apresentada na alternativa A."
    },
    {
      "id": "B",
      "text": "estrutural, comportamental e estrutural.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta estrutural, comportamental e estrutural. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O GoF agrupa os padrões em três famílias segundo sua finalidade. Criacionais tratam da criação de objetos; estruturais organizam classes e objetos em estruturas maiores; comportamentais tratam da distribuição de responsabilidades e da comunicação entre objetos. Iterator é comportamental: percorre uma coleção sem expor sua representação. Visitor é comportamental: adiciona operações a uma estrutura de elementos sem alterar as classes desses elementos. Flyweight é estrutural: compartilha estado intrínseco para reduzir o custo de muitos objetos pequenos. Portanto, a sequência é comportamental, comportamental e estrutural. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "comportamental, estrutural e comportamental.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta comportamental, estrutural e comportamental. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O GoF agrupa os padrões em três famílias segundo sua finalidade. Criacionais tratam da criação de objetos; estruturais organizam classes e objetos em estruturas maiores; comportamentais tratam da distribuição de responsabilidades e da comunicação entre objetos. Iterator é comportamental: percorre uma coleção sem expor sua representação. Visitor é comportamental: adiciona operações a uma estrutura de elementos sem alterar as classes desses elementos. Flyweight é estrutural: compartilha estado intrínseco para reduzir o custo de muitos objetos pequenos. Portanto, a sequência é comportamental, comportamental e estrutural. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "estrutural, estrutural e comportamental.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta estrutural, estrutural e comportamental. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O GoF agrupa os padrões em três famílias segundo sua finalidade. Criacionais tratam da criação de objetos; estruturais organizam classes e objetos em estruturas maiores; comportamentais tratam da distribuição de responsabilidades e da comunicação entre objetos. Iterator é comportamental: percorre uma coleção sem expor sua representação. Visitor é comportamental: adiciona operações a uma estrutura de elementos sem alterar as classes desses elementos. Flyweight é estrutural: compartilha estado intrínseco para reduzir o custo de muitos objetos pequenos. Portanto, a sequência é comportamental, comportamental e estrutural. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A descrição I corresponde ao Iterator; a II, ao Visitor; e a III, ao Flyweight. Aplicando a classificação GoF, Iterator e Visitor são comportamentais, enquanto Flyweight é estrutural. A sequência correta é a apresentada na alternativa A.",
    "theoretical_content": "O GoF agrupa os padrões em três famílias segundo sua finalidade. Criacionais tratam da criação de objetos; estruturais organizam classes e objetos em estruturas maiores; comportamentais tratam da distribuição de responsabilidades e da comunicação entre objetos. Iterator é comportamental: percorre uma coleção sem expor sua representação. Visitor é comportamental: adiciona operações a uma estrutura de elementos sem alterar as classes desses elementos. Flyweight é estrutural: compartilha estado intrínseco para reduzir o custo de muitos objetos pequenos. Portanto, a sequência é comportamental, comportamental e estrutural.",
    "bank_approach": "A banca combina três descrições técnicas e exige classificação. A resolução depende de identificar a intenção de cada padrão antes de classificar sua família.",
    "study_tip": "Memorize a intenção antes da categoria: Iterator percorre; Visitor acrescenta operações; Flyweight compartilha objetos/estado. Depois associe às famílias GoF.",
    "review_summary": "Iterator e Visitor são comportamentais; Flyweight é estrutural. Padrões criacionais concentram-se na instanciação."
  }
}
```

## Questão 0003

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0003",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Analista de Tecnologia da Informação (Desenvolvimento)",
    "year": 2022,
    "question_number": 23,
    "page": 9
  },
  "subject": "Engenharia de Software",
  "topic": "Scrum",
  "subtopic": "Eventos, responsabilidades e organização do Scrum",
  "difficulty": "medium",
  "cognitive_skill": "analysis",
  "question_text": "O framework Scrum dispõe de eventos, artefatos e papéis para aplicar a metodologia ágil no desenvolvimento do produto e da interação entre as pessoas. Cada um desses itens tem funções e características específicas. Considerando essas informações, analise os itens abaixo.\n\nI — O backlog do produto é de responsabilidade do scrum master.\n\nII — A reunião de retrospectiva da sprint ocorre após a reunião de revisão da sprint.\n\nIII — No time de desenvolvimento Scrum, existem subcategorias definidas, como analista de sistemas, analista de requisitos e programador.\n\nIV — Na reunião de planejamento, é definido o que pode ser entregue como resultado do incremento da próxima sprint.\n\nEntre os itens, estão corretos",
  "alternatives": [
    {
      "id": "A",
      "text": "II e IV.",
      "is_correct": true,
      "explanation": "Correta. II e IV. No Scrum Guide, o Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a comunicação de seu conteúdo e ordenação. O Scrum Master é responsável por estabelecer o Scrum conforme definido e melhorar a efetividade do Scrum Team, removendo impedimentos quando necessário. O Scrum Team não possui subequipes ou hierarquias internas por especialidade; é uma unidade coesa, composta por Product Owner, Scrum Master e Developers. A Sprint Review ocorre antes da Sprint Retrospective. Na Sprint Planning, define-se por que a Sprint é valiosa, o que pode ser realizado e como o trabalho será executado. Assim, II e IV são verdadeiras. A situação apresentada corresponde diretamente a esse conceito, pois O item I é falso porque o Product Backlog é de responsabilidade do Product Owner, não do Scrum Master. O item II é verdadeiro: a revisão da Sprint precede a retrospectiva. O item III é falso porque o Scrum Team não estabelece subcategorias ou subequipes hierárquicas. O item IV é verdadeiro porque a Sprint Planning define o trabalho e o objetivo da Sprint. Logo, estão corretos II e IV."
    },
    {
      "id": "B",
      "text": "I e II.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta i e ii. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. No Scrum Guide, o Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a comunicação de seu conteúdo e ordenação. O Scrum Master é responsável por estabelecer o Scrum conforme definido e melhorar a efetividade do Scrum Team, removendo impedimentos quando necessário. O Scrum Team não possui subequipes ou hierarquias internas por especialidade; é uma unidade coesa, composta por Product Owner, Scrum Master e Developers. A Sprint Review ocorre antes da Sprint Retrospective. Na Sprint Planning, define-se por que a Sprint é valiosa, o que pode ser realizado e como o trabalho será executado. Assim, II e IV são verdadeiras. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "I e III.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta i e iii. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. No Scrum Guide, o Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a comunicação de seu conteúdo e ordenação. O Scrum Master é responsável por estabelecer o Scrum conforme definido e melhorar a efetividade do Scrum Team, removendo impedimentos quando necessário. O Scrum Team não possui subequipes ou hierarquias internas por especialidade; é uma unidade coesa, composta por Product Owner, Scrum Master e Developers. A Sprint Review ocorre antes da Sprint Retrospective. Na Sprint Planning, define-se por que a Sprint é valiosa, o que pode ser realizado e como o trabalho será executado. Assim, II e IV são verdadeiras. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "III e IV.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta iii e iv. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. No Scrum Guide, o Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a comunicação de seu conteúdo e ordenação. O Scrum Master é responsável por estabelecer o Scrum conforme definido e melhorar a efetividade do Scrum Team, removendo impedimentos quando necessário. O Scrum Team não possui subequipes ou hierarquias internas por especialidade; é uma unidade coesa, composta por Product Owner, Scrum Master e Developers. A Sprint Review ocorre antes da Sprint Retrospective. Na Sprint Planning, define-se por que a Sprint é valiosa, o que pode ser realizado e como o trabalho será executado. Assim, II e IV são verdadeiras. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O item I é falso porque o Product Backlog é de responsabilidade do Product Owner, não do Scrum Master. O item II é verdadeiro: a revisão da Sprint precede a retrospectiva. O item III é falso porque o Scrum Team não estabelece subcategorias ou subequipes hierárquicas. O item IV é verdadeiro porque a Sprint Planning define o trabalho e o objetivo da Sprint. Logo, estão corretos II e IV.",
    "theoretical_content": "No Scrum Guide, o Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a comunicação de seu conteúdo e ordenação. O Scrum Master é responsável por estabelecer o Scrum conforme definido e melhorar a efetividade do Scrum Team, removendo impedimentos quando necessário. O Scrum Team não possui subequipes ou hierarquias internas por especialidade; é uma unidade coesa, composta por Product Owner, Scrum Master e Developers. A Sprint Review ocorre antes da Sprint Retrospective. Na Sprint Planning, define-se por que a Sprint é valiosa, o que pode ser realizado e como o trabalho será executado. Assim, II e IV são verdadeiras.",
    "bank_approach": "A questão apresenta afirmativas I–IV, formato recorrente no corpus. Ela explora atribuições dos papéis e a ordem dos eventos, exigindo atenção a termos que parecem plausíveis, mas alteram responsabilidades.",
    "study_tip": "Fixe a ordem dos eventos: Sprint Planning → execução/Daily Scrum → Sprint Review → Sprint Retrospective. Não atribua o Product Backlog ao Scrum Master.",
    "review_summary": "Product Owner responde pela gestão eficaz do Product Backlog; Sprint Review precede Sprint Retrospective; o Scrum Team não possui subequipes hierárquicas."
  }
}
```

## Questão 0004

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0004",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Analista de Tecnologia da Informação (Desenvolvimento)",
    "year": 2022,
    "question_number": 24,
    "page": 10
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagramas de sequência, classes, atividades e casos de uso",
  "difficulty": "medium",
  "cognitive_skill": "analysis",
  "question_text": "A UML 2 dispõe de vários diagramas que auxiliam em diversas etapas do processo de desenvolvimento de software. A respeito desses diagramas, analise os itens abaixo.\n\nI — No diagrama de sequência, a linha de vida dos objetos é representada de forma horizontal.\n\nII — No diagrama de classes, é possível representar os objetos instanciados a partir da classe.\n\nIII — No diagrama de atividades, representam-se fluxos de trabalho, partindo de, pelo menos, um ponto inicial até um ou mais pontos finais.\n\nIV — No diagrama de casos de uso, é possível a utilização de herança entre atores.\n\nEntre os itens, estão corretos",
  "alternatives": [
    {
      "id": "A",
      "text": "III e IV.",
      "is_correct": true,
      "explanation": "Correta. III e IV. Em diagramas de sequência, as linhas de vida são dispostas verticalmente e representam participantes ao longo do tempo, que normalmente avança de cima para baixo. O diagrama de classes descreve a estrutura estática de classes, atributos, operações e relacionamentos; instâncias concretas são representadas de forma mais apropriada no diagrama de objetos. O diagrama de atividades representa fluxos de controle e/ou dados, com nós inicial e final, decisões, paralelismo e atividades. Em casos de uso, atores podem participar de relações de generalização, que representam especialização/herança entre atores. Portanto, III e IV são verdadeiros. A situação apresentada corresponde diretamente a esse conceito, pois I é falso: as linhas de vida do diagrama de sequência são verticais. II é falso: o diagrama de classes representa tipos/classes, enquanto o diagrama de objetos mostra instâncias em determinado momento. III é verdadeiro, pois o diagrama de atividades modela fluxos. IV é verdadeiro, pois a UML permite generalização entre atores. Assim, III e IV estão corretos."
    },
    {
      "id": "B",
      "text": "I e II.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta i e ii. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Em diagramas de sequência, as linhas de vida são dispostas verticalmente e representam participantes ao longo do tempo, que normalmente avança de cima para baixo. O diagrama de classes descreve a estrutura estática de classes, atributos, operações e relacionamentos; instâncias concretas são representadas de forma mais apropriada no diagrama de objetos. O diagrama de atividades representa fluxos de controle e/ou dados, com nós inicial e final, decisões, paralelismo e atividades. Em casos de uso, atores podem participar de relações de generalização, que representam especialização/herança entre atores. Portanto, III e IV são verdadeiros. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "II e III.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta ii e iii. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Em diagramas de sequência, as linhas de vida são dispostas verticalmente e representam participantes ao longo do tempo, que normalmente avança de cima para baixo. O diagrama de classes descreve a estrutura estática de classes, atributos, operações e relacionamentos; instâncias concretas são representadas de forma mais apropriada no diagrama de objetos. O diagrama de atividades representa fluxos de controle e/ou dados, com nós inicial e final, decisões, paralelismo e atividades. Em casos de uso, atores podem participar de relações de generalização, que representam especialização/herança entre atores. Portanto, III e IV são verdadeiros. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "I e IV.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta i e iv. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Em diagramas de sequência, as linhas de vida são dispostas verticalmente e representam participantes ao longo do tempo, que normalmente avança de cima para baixo. O diagrama de classes descreve a estrutura estática de classes, atributos, operações e relacionamentos; instâncias concretas são representadas de forma mais apropriada no diagrama de objetos. O diagrama de atividades representa fluxos de controle e/ou dados, com nós inicial e final, decisões, paralelismo e atividades. Em casos de uso, atores podem participar de relações de generalização, que representam especialização/herança entre atores. Portanto, III e IV são verdadeiros. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "I é falso: as linhas de vida do diagrama de sequência são verticais. II é falso: o diagrama de classes representa tipos/classes, enquanto o diagrama de objetos mostra instâncias em determinado momento. III é verdadeiro, pois o diagrama de atividades modela fluxos. IV é verdadeiro, pois a UML permite generalização entre atores. Assim, III e IV estão corretos.",
    "theoretical_content": "Em diagramas de sequência, as linhas de vida são dispostas verticalmente e representam participantes ao longo do tempo, que normalmente avança de cima para baixo. O diagrama de classes descreve a estrutura estática de classes, atributos, operações e relacionamentos; instâncias concretas são representadas de forma mais apropriada no diagrama de objetos. O diagrama de atividades representa fluxos de controle e/ou dados, com nós inicial e final, decisões, paralelismo e atividades. Em casos de uso, atores podem participar de relações de generalização, que representam especialização/herança entre atores. Portanto, III e IV são verdadeiros.",
    "bank_approach": "A banca exige distinguir a finalidade dos diagramas e não apenas reconhecer seus nomes. O distrator mais sutil troca classes por objetos e inverte a orientação das linhas de vida.",
    "study_tip": "Associe cada diagrama ao que modela: classes = estrutura de tipos; objetos = instâncias; sequência = mensagens no tempo; atividades = fluxo; casos de uso = serviços percebidos pelos atores.",
    "review_summary": "Sequência usa linhas de vida verticais; classes modelam tipos; objetos modelam instâncias; atividades modelam fluxos; atores podem ter generalização."
  }
}
```

## Questão 0005

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0005",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 30,
    "page": 11
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de casos de uso e associações entre atores e casos de uso",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma equipe de TI está modelando um sistema para avaliação acadêmica que utiliza o diagrama de casos de uso da UML. Nesse diagrama, existem dois atores: o aluno e o professor. Para um dos casos de uso, foi constatado que tanto o aluno como o professor podem executá-lo. Desse modo, para atender a modelagem de um mesmo caso de uso, atendendo aos padrões sugeridos pela UML, deve ser feita uma",
  "alternatives": [
    {
      "id": "A",
      "text": "associação dos atores ao mesmo caso de uso.",
      "is_correct": true,
      "explanation": "Correta. associação dos atores ao mesmo caso de uso. O diagrama de casos de uso representa funcionalidades do sistema sob a perspectiva de atores externos. Uma associação entre ator e caso de uso indica que o ator participa daquela funcionalidade. Se dois atores distintos podem executar o mesmo caso de uso, ambos podem ser associados ao mesmo caso de uso. Generalização entre atores só deve ser usada quando um ator especializado herda o comportamento/relacionamentos de um ator mais geral; ela não é necessária apenas porque ambos participam da mesma funcionalidade. Duplicar o caso de uso cria redundância sem necessidade. A situação apresentada corresponde diretamente a esse conceito, pois O enunciado afirma que aluno e professor executam a mesma funcionalidade. A modelagem direta é associar ambos ao mesmo caso de uso. Generalização exigiria uma relação de especialização entre os atores, não informada no cenário."
    },
    {
      "id": "B",
      "text": "generalização do ator aluno para o ator professor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta generalização do ator aluno para o ator professor. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de casos de uso representa funcionalidades do sistema sob a perspectiva de atores externos. Uma associação entre ator e caso de uso indica que o ator participa daquela funcionalidade. Se dois atores distintos podem executar o mesmo caso de uso, ambos podem ser associados ao mesmo caso de uso. Generalização entre atores só deve ser usada quando um ator especializado herda o comportamento/relacionamentos de um ator mais geral; ela não é necessária apenas porque ambos participam da mesma funcionalidade. Duplicar o caso de uso cria redundância sem necessidade. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "generalização do ator professor para o ator aluno.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta generalização do ator professor para o ator aluno. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de casos de uso representa funcionalidades do sistema sob a perspectiva de atores externos. Uma associação entre ator e caso de uso indica que o ator participa daquela funcionalidade. Se dois atores distintos podem executar o mesmo caso de uso, ambos podem ser associados ao mesmo caso de uso. Generalização entre atores só deve ser usada quando um ator especializado herda o comportamento/relacionamentos de um ator mais geral; ela não é necessária apenas porque ambos participam da mesma funcionalidade. Duplicar o caso de uso cria redundância sem necessidade. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "copia do caso de uso e associar cada ator a cada um.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta copia do caso de uso e associar cada ator a cada um. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de casos de uso representa funcionalidades do sistema sob a perspectiva de atores externos. Uma associação entre ator e caso de uso indica que o ator participa daquela funcionalidade. Se dois atores distintos podem executar o mesmo caso de uso, ambos podem ser associados ao mesmo caso de uso. Generalização entre atores só deve ser usada quando um ator especializado herda o comportamento/relacionamentos de um ator mais geral; ela não é necessária apenas porque ambos participam da mesma funcionalidade. Duplicar o caso de uso cria redundância sem necessidade. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado afirma que aluno e professor executam a mesma funcionalidade. A modelagem direta é associar ambos ao mesmo caso de uso. Generalização exigiria uma relação de especialização entre os atores, não informada no cenário.",
    "theoretical_content": "O diagrama de casos de uso representa funcionalidades do sistema sob a perspectiva de atores externos. Uma associação entre ator e caso de uso indica que o ator participa daquela funcionalidade. Se dois atores distintos podem executar o mesmo caso de uso, ambos podem ser associados ao mesmo caso de uso. Generalização entre atores só deve ser usada quando um ator especializado herda o comportamento/relacionamentos de um ator mais geral; ela não é necessária apenas porque ambos participam da mesma funcionalidade. Duplicar o caso de uso cria redundância sem necessidade.",
    "bank_approach": "A banca apresenta um cenário institucional e cobra a semântica de um elemento UML. O candidato deve evitar introduzir generalização sem que exista uma relação de especialização no domínio.",
    "study_tip": "Quando vários atores participam da mesma funcionalidade, associe cada ator ao caso de uso. Use generalização apenas quando houver relação de ator geral e ator especializado.",
    "review_summary": "Um caso de uso pode estar associado a vários atores. Generalização representa especialização, não simples compartilhamento de funcionalidade."
  }
}
```

## Questão 0006

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0006",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 31,
    "page": 11
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Observer e notificação de dependentes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um sistema de empréstimo de livros de uma biblioteca universitária está sendo modelado por um arquiteto de software. Em determinados cenários, o sistema precisará notificar automaticamente diversos serviços — como envio de e-mails, atualização do estoque de livros, entre outros. Dessa forma, o sistema foi modelado para que a classe Emprestimo fosse responsável por notificar todos os serviços interessados sempre que houver uma mudança em seu estado. O padrão de projeto adequado para implementar esse mecanismo de notificações automáticas é o",
  "alternatives": [
    {
      "id": "A",
      "text": "Observer.",
      "is_correct": true,
      "explanation": "Correta. Observer. Observer é um padrão comportamental que estabelece uma relação de um-para-muitos entre um objeto observado (subject) e seus observadores. Quando o estado do subject muda, os observadores registrados são notificados e podem reagir. O padrão reduz o acoplamento entre quem publica a mudança e quem reage a ela. Decorator acrescenta responsabilidades dinamicamente a um objeto; Adapter converte uma interface em outra esperada pelo cliente; Proxy fornece um substituto/controlador de acesso a outro objeto. A situação apresentada corresponde diretamente a esse conceito, pois A classe Emprestimo muda de estado e vários serviços precisam ser avisados automaticamente. Esse mecanismo de publicação e notificação caracteriza Observer. Os outros padrões tratam de extensão de comportamento, adaptação de interface e controle de acesso."
    },
    {
      "id": "B",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta decorator. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Observer é um padrão comportamental que estabelece uma relação de um-para-muitos entre um objeto observado (subject) e seus observadores. Quando o estado do subject muda, os observadores registrados são notificados e podem reagir. O padrão reduz o acoplamento entre quem publica a mudança e quem reage a ela. Decorator acrescenta responsabilidades dinamicamente a um objeto; Adapter converte uma interface em outra esperada pelo cliente; Proxy fornece um substituto/controlador de acesso a outro objeto. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta adapter. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Observer é um padrão comportamental que estabelece uma relação de um-para-muitos entre um objeto observado (subject) e seus observadores. Quando o estado do subject muda, os observadores registrados são notificados e podem reagir. O padrão reduz o acoplamento entre quem publica a mudança e quem reage a ela. Decorator acrescenta responsabilidades dinamicamente a um objeto; Adapter converte uma interface em outra esperada pelo cliente; Proxy fornece um substituto/controlador de acesso a outro objeto. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "Proxy.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta proxy. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. Observer é um padrão comportamental que estabelece uma relação de um-para-muitos entre um objeto observado (subject) e seus observadores. Quando o estado do subject muda, os observadores registrados são notificados e podem reagir. O padrão reduz o acoplamento entre quem publica a mudança e quem reage a ela. Decorator acrescenta responsabilidades dinamicamente a um objeto; Adapter converte uma interface em outra esperada pelo cliente; Proxy fornece um substituto/controlador de acesso a outro objeto. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A classe Emprestimo muda de estado e vários serviços precisam ser avisados automaticamente. Esse mecanismo de publicação e notificação caracteriza Observer. Os outros padrões tratam de extensão de comportamento, adaptação de interface e controle de acesso.",
    "theoretical_content": "Observer é um padrão comportamental que estabelece uma relação de um-para-muitos entre um objeto observado (subject) e seus observadores. Quando o estado do subject muda, os observadores registrados são notificados e podem reagir. O padrão reduz o acoplamento entre quem publica a mudança e quem reage a ela. Decorator acrescenta responsabilidades dinamicamente a um objeto; Adapter converte uma interface em outra esperada pelo cliente; Proxy fornece um substituto/controlador de acesso a outro objeto.",
    "bank_approach": "A questão descreve o efeito observável da mudança de estado e pede o padrão correspondente. O ponto decisivo é a notificação automática de múltiplos interessados.",
    "study_tip": "Associe Observer a publicador/observadores e notificação de mudanças. Se o problema for converter interfaces, Adapter; controlar acesso, Proxy; adicionar comportamento, Decorator.",
    "review_summary": "Observer é comportamental e notifica observadores quando o estado do objeto observado muda."
  }
}
```

## Questão 0007

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0007",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 32,
    "page": 12
  },
  "subject": "Engenharia de Software",
  "topic": "Ciclo de vida e processos de software",
  "subtopic": "Modelo Cascata",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma equipe de desenvolvimento foi contratada para desenvolver um sistema de gestão de patrimônio. No contrato, existiam algumas exigências, como a realização das etapas de forma sequencial e a obrigatoriedade de validação de cada fase antes do início da próxima. No entanto, durante a etapa de desenvolvimento, percebeu-se que mudanças nos requisitos eram frequentes. A metodologia adotada, por ser rígida e não contemplar revisões iterativas ou a possibilidade de retroceder etapas, dificultava a incorporação dessas alterações, o que acarretava impactos significativos no cronograma do projeto. Levando em consideração o cenário descrito, a metodologia de desenvolvimento de software utilizada no projeto foi o modelo",
  "alternatives": [
    {
      "id": "A",
      "text": "Cascata.",
      "is_correct": true,
      "explanation": "Correta. Cascata. O modelo Cascata organiza o desenvolvimento em fases predominantemente sequenciais, como requisitos, análise/projeto, implementação, testes e implantação. A conclusão e validação de uma fase servem de entrada para a seguinte. Mudanças tardias tendem a ser custosas porque podem exigir revisão de artefatos e etapas anteriores. Modelos iterativos e incrementais desenvolvem o produto em ciclos e entregas sucessivas; o Espiral organiza ciclos orientados à análise de riscos; RAD enfatiza prototipação e desenvolvimento rápido com participação intensa do usuário. A situação apresentada corresponde diretamente a esse conceito, pois A descrição enfatiza sequência rígida, validação por fase e dificuldade de acomodar mudanças frequentes. Essas são características do modelo Cascata, em contraste com abordagens iterativas, incrementais e orientadas a protótipos."
    },
    {
      "id": "B",
      "text": "Iterativo incremental.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta iterativo incremental. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O modelo Cascata organiza o desenvolvimento em fases predominantemente sequenciais, como requisitos, análise/projeto, implementação, testes e implantação. A conclusão e validação de uma fase servem de entrada para a seguinte. Mudanças tardias tendem a ser custosas porque podem exigir revisão de artefatos e etapas anteriores. Modelos iterativos e incrementais desenvolvem o produto em ciclos e entregas sucessivas; o Espiral organiza ciclos orientados à análise de riscos; RAD enfatiza prototipação e desenvolvimento rápido com participação intensa do usuário. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "Espiral.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta espiral. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O modelo Cascata organiza o desenvolvimento em fases predominantemente sequenciais, como requisitos, análise/projeto, implementação, testes e implantação. A conclusão e validação de uma fase servem de entrada para a seguinte. Mudanças tardias tendem a ser custosas porque podem exigir revisão de artefatos e etapas anteriores. Modelos iterativos e incrementais desenvolvem o produto em ciclos e entregas sucessivas; o Espiral organiza ciclos orientados à análise de riscos; RAD enfatiza prototipação e desenvolvimento rápido com participação intensa do usuário. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "Desenvolvimento Rápido de Aplicação(RAD).",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta desenvolvimento rápido de aplicação (rad). Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O modelo Cascata organiza o desenvolvimento em fases predominantemente sequenciais, como requisitos, análise/projeto, implementação, testes e implantação. A conclusão e validação de uma fase servem de entrada para a seguinte. Mudanças tardias tendem a ser custosas porque podem exigir revisão de artefatos e etapas anteriores. Modelos iterativos e incrementais desenvolvem o produto em ciclos e entregas sucessivas; o Espiral organiza ciclos orientados à análise de riscos; RAD enfatiza prototipação e desenvolvimento rápido com participação intensa do usuário. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A descrição enfatiza sequência rígida, validação por fase e dificuldade de acomodar mudanças frequentes. Essas são características do modelo Cascata, em contraste com abordagens iterativas, incrementais e orientadas a protótipos.",
    "theoretical_content": "O modelo Cascata organiza o desenvolvimento em fases predominantemente sequenciais, como requisitos, análise/projeto, implementação, testes e implantação. A conclusão e validação de uma fase servem de entrada para a seguinte. Mudanças tardias tendem a ser custosas porque podem exigir revisão de artefatos e etapas anteriores. Modelos iterativos e incrementais desenvolvem o produto em ciclos e entregas sucessivas; o Espiral organiza ciclos orientados à análise de riscos; RAD enfatiza prototipação e desenvolvimento rápido com participação intensa do usuário.",
    "bank_approach": "A banca descreve características do processo em vez de citar o nome. O candidato deve reconhecer a sequência linear e o custo de mudanças tardias.",
    "study_tip": "Palavras como sequencial, fase concluída antes da próxima e baixa flexibilidade indicam Cascata. Iterativo/incremental pressupõe ciclos e evolução do produto.",
    "review_summary": "Cascata é sequencial e tende a tornar mudanças tardias mais custosas; modelos iterativos e incrementais acomodam evolução por ciclos."
  }
}
```

## Questão 0008

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0008",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 33,
    "page": 12
  },
  "subject": "Engenharia de Software",
  "topic": "Scrum",
  "subtopic": "Responsabilidades de Product Owner e Scrum Master",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma empresa foi contratada para desenvolver um sistema de controle de pagamento de servidores públicos federais. O chefe da equipe decidiu que seria utilizado Scrum no desenvolvimento desse sistema. Na etapa de planejamento, foi delegado a Matheus, um analista de tecnologia da informação, a tarefa de definir e priorizar os itens do backlog do produto, enquanto Luiz, outro analista, ficou responsável por remover obstáculos diários e facilitar a comunicação entre os membros do time. Considerando o cenário descrito, os papéis assumidos, no projeto, por Matheus e Luiz são, respectivamente,",
  "alternatives": [
    {
      "id": "A",
      "text": "Product Owner e Scrum Master.",
      "is_correct": true,
      "explanation": "Correta. Product Owner e Scrum Master. O Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a definição e ordenação dos itens. O Scrum Master é responsável por estabelecer o Scrum conforme definido e ajudar o time e a organização a compreender e aplicar o framework; atua na remoção de impedimentos e na melhoria da efetividade do time. Developers são os profissionais que criam o incremento utilizável. Stakeholders são pessoas ou grupos interessados no produto, mas não constituem um dos accountabilities do Scrum Team. A situação apresentada corresponde diretamente a esse conceito, pois Matheus define e prioriza o Product Backlog, atribuição do Product Owner. Luiz facilita o trabalho do time e remove impedimentos, atribuições associadas ao Scrum Master. Portanto, a sequência é Product Owner e Scrum Master."
    },
    {
      "id": "B",
      "text": "Desenvolvedor e Stakeholder.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta desenvolvedor e stakeholder. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a definição e ordenação dos itens. O Scrum Master é responsável por estabelecer o Scrum conforme definido e ajudar o time e a organização a compreender e aplicar o framework; atua na remoção de impedimentos e na melhoria da efetividade do time. Developers são os profissionais que criam o incremento utilizável. Stakeholders são pessoas ou grupos interessados no produto, mas não constituem um dos accountabilities do Scrum Team. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "Product Owner e Stakeholder.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta product owner e stakeholder. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a definição e ordenação dos itens. O Scrum Master é responsável por estabelecer o Scrum conforme definido e ajudar o time e a organização a compreender e aplicar o framework; atua na remoção de impedimentos e na melhoria da efetividade do time. Developers são os profissionais que criam o incremento utilizável. Stakeholders são pessoas ou grupos interessados no produto, mas não constituem um dos accountabilities do Scrum Team. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "Desenvolvedor e Scrum Master.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta desenvolvedor e scrum master. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a definição e ordenação dos itens. O Scrum Master é responsável por estabelecer o Scrum conforme definido e ajudar o time e a organização a compreender e aplicar o framework; atua na remoção de impedimentos e na melhoria da efetividade do time. Developers são os profissionais que criam o incremento utilizável. Stakeholders são pessoas ou grupos interessados no produto, mas não constituem um dos accountabilities do Scrum Team. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "Matheus define e prioriza o Product Backlog, atribuição do Product Owner. Luiz facilita o trabalho do time e remove impedimentos, atribuições associadas ao Scrum Master. Portanto, a sequência é Product Owner e Scrum Master.",
    "theoretical_content": "O Product Owner é responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog, incluindo a definição e ordenação dos itens. O Scrum Master é responsável por estabelecer o Scrum conforme definido e ajudar o time e a organização a compreender e aplicar o framework; atua na remoção de impedimentos e na melhoria da efetividade do time. Developers são os profissionais que criam o incremento utilizável. Stakeholders são pessoas ou grupos interessados no produto, mas não constituem um dos accountabilities do Scrum Team.",
    "bank_approach": "A questão testa a identificação de responsabilidades no contexto de um projeto público. O enunciado oferece verbos-chave: priorizar backlog e remover impedimentos.",
    "study_tip": "Backlog e maximização de valor remetem ao Product Owner; efetividade do Scrum e remoção de impedimentos remetem ao Scrum Master.",
    "review_summary": "Product Owner gerencia eficazmente o Product Backlog e maximiza valor; Scrum Master promove a aplicação efetiva do Scrum e ajuda a remover impedimentos."
  }
}
```

## Questão 0009

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0009",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 34,
    "page": 12
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de componentes e dependências",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Durante a modelagem de um sistema acadêmico utilizando UML 2.0, o analista responsável definiu, na elaboração do diagrama de componentes, três módulos principais: InterfaceAluno, ControleTransacoes e PersistenciaDados. O componente ControleTransacoes foi projetado para depender dos outros dois a fim de executar suas funcionalidades. Dessa forma, o elemento que deve ser usado para estabelecer o relacionamento entre ControleTransacoes e os outros dois módulos é",
  "alternatives": [
    {
      "id": "A",
      "text": "Conector de dependência.",
      "is_correct": true,
      "explanation": "Correta. Conector de dependência. O diagrama de componentes representa a organização de componentes de software e suas relações, incluindo dependências. Uma dependência indica que um elemento cliente utiliza ou depende de outro elemento fornecedor; alterações no fornecedor podem afetar o cliente. Associação é um relacionamento estrutural típico entre classificadores, muito usado em diagramas de classes. <<include>> e <<extend>> são relacionamentos entre casos de uso: include representa comportamento obrigatório reutilizado; extend representa comportamento adicional condicionado. A situação apresentada corresponde diretamente a esse conceito, pois O enunciado fala de componentes e informa que ControleTransacoes depende de InterfaceAluno e PersistenciaDados. O relacionamento apropriado é uma dependência no diagrama de componentes. Associação entre classes e os estereótipos de casos de uso pertencem a outros contextos de modelagem."
    },
    {
      "id": "B",
      "text": "Associação entre classes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta associação entre classes. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de componentes representa a organização de componentes de software e suas relações, incluindo dependências. Uma dependência indica que um elemento cliente utiliza ou depende de outro elemento fornecedor; alterações no fornecedor podem afetar o cliente. Associação é um relacionamento estrutural típico entre classificadores, muito usado em diagramas de classes. <<include>> e <<extend>> são relacionamentos entre casos de uso: include representa comportamento obrigatório reutilizado; extend representa comportamento adicional condicionado. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "Esteriótipo <<extend>>.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta estereótipo <<extend>>. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de componentes representa a organização de componentes de software e suas relações, incluindo dependências. Uma dependência indica que um elemento cliente utiliza ou depende de outro elemento fornecedor; alterações no fornecedor podem afetar o cliente. Associação é um relacionamento estrutural típico entre classificadores, muito usado em diagramas de classes. <<include>> e <<extend>> são relacionamentos entre casos de uso: include representa comportamento obrigatório reutilizado; extend representa comportamento adicional condicionado. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "Esteriótipo <<include>>.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta estereótipo <<include>>. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. O diagrama de componentes representa a organização de componentes de software e suas relações, incluindo dependências. Uma dependência indica que um elemento cliente utiliza ou depende de outro elemento fornecedor; alterações no fornecedor podem afetar o cliente. Associação é um relacionamento estrutural típico entre classificadores, muito usado em diagramas de classes. <<include>> e <<extend>> são relacionamentos entre casos de uso: include representa comportamento obrigatório reutilizado; extend representa comportamento adicional condicionado. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado fala de componentes e informa que ControleTransacoes depende de InterfaceAluno e PersistenciaDados. O relacionamento apropriado é uma dependência no diagrama de componentes. Associação entre classes e os estereótipos de casos de uso pertencem a outros contextos de modelagem.",
    "theoretical_content": "O diagrama de componentes representa a organização de componentes de software e suas relações, incluindo dependências. Uma dependência indica que um elemento cliente utiliza ou depende de outro elemento fornecedor; alterações no fornecedor podem afetar o cliente. Associação é um relacionamento estrutural típico entre classificadores, muito usado em diagramas de classes. <<include>> e <<extend>> são relacionamentos entre casos de uso: include representa comportamento obrigatório reutilizado; extend representa comportamento adicional condicionado.",
    "bank_approach": "A banca verifica se o candidato distingue os diagramas e os relacionamentos da UML. A presença de componentes é o indício que afasta <<include>> e <<extend>>.",
    "study_tip": "Não confunda dependência entre componentes com include/extend entre casos de uso. Identifique primeiro o diagrama e depois escolha o relacionamento compatível.",
    "review_summary": "Dependência conecta elementos que usam outros elementos; <<include>> e <<extend>> são relações de casos de uso."
  }
}
```

## Questão 0010

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0010",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 22/2025 — Analista de TI (Desenvolvimento)",
    "year": 2025,
    "question_number": 35,
    "page": 12
  },
  "subject": "Engenharia de Software",
  "topic": "Testes de software",
  "subtopic": "Ciclo Red-Green-Refactor do TDD",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No TDD (Test-Driven Development), existe um ciclo de desenvolvimento que deve ser obedecido. Esse ciclo tem por finalidade sistematizar o trabalho de implementação dos testes. João, analista de TI da UFRN, implementou um teste para uma funcionalidade específica, o qual inicialmente falhou. Em seguida, implementou um código para fazer o teste passar. Levando em consideração o ciclo do TDD, o próximo passo que João deve realizar é",
  "alternatives": [
    {
      "id": "A",
      "text": "fazer a refatoração, melhorando o código sem alterar seu comportamento.",
      "is_correct": true,
      "explanation": "Correta. fazer a refatoração, melhorando o código sem alterar seu comportamento. TDD é uma prática de desenvolvimento guiado por testes. O ciclo clássico é Red-Green-Refactor: primeiro escreve-se um teste que falha (Red), depois implementa-se o código mínimo para fazê-lo passar (Green) e, em seguida, refatora-se o código preservando o comportamento observado pelos testes (Refactor). A refatoração melhora estrutura, legibilidade e design sem alterar a funcionalidade externa. Depois, o ciclo se repete com outro teste. A situação apresentada corresponde diretamente a esse conceito, pois O teste já falhou inicialmente e o código foi implementado para fazê-lo passar. A etapa seguinte do ciclo é refatorar, mantendo o teste verde e melhorando a estrutura do código."
    },
    {
      "id": "B",
      "text": "escrever um novo teste, tendo em vista que o primeiro falhou.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta escrever um novo teste, tendo em vista que o primeiro falhou. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. TDD é uma prática de desenvolvimento guiado por testes. O ciclo clássico é Red-Green-Refactor: primeiro escreve-se um teste que falha (Red), depois implementa-se o código mínimo para fazê-lo passar (Green) e, em seguida, refatora-se o código preservando o comportamento observado pelos testes (Refactor). A refatoração melhora estrutura, legibilidade e design sem alterar a funcionalidade externa. Depois, o ciclo se repete com outro teste. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "C",
      "text": "documentar que o ciclo de teste está completo, já que foi corrigido.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta documentar que o ciclo de teste está completo, já que foi corrigido. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. TDD é uma prática de desenvolvimento guiado por testes. O ciclo clássico é Red-Green-Refactor: primeiro escreve-se um teste que falha (Red), depois implementa-se o código mínimo para fazê-lo passar (Green) e, em seguida, refatora-se o código preservando o comportamento observado pelos testes (Refactor). A refatoração melhora estrutura, legibilidade e design sem alterar a funcionalidade externa. Depois, o ciclo se repete com outro teste. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    },
    {
      "id": "D",
      "text": "implementar uma segunda versão com novas funcionalidades, que também passe sem falhar.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta implementar uma segunda versão com novas funcionalidades, que também passe sem falhar. Esse conceito não atende ao comando porque não corresponde à necessidade descrita. TDD é uma prática de desenvolvimento guiado por testes. O ciclo clássico é Red-Green-Refactor: primeiro escreve-se um teste que falha (Red), depois implementa-se o código mínimo para fazê-lo passar (Green) e, em seguida, refatora-se o código preservando o comportamento observado pelos testes (Refactor). A refatoração melhora estrutura, legibilidade e design sem alterar a funcionalidade externa. Depois, o ciclo se repete com outro teste. Para resolver a questão, compare a finalidade específica de cada conceito e identifique qual deles responde ao requisito central do enunciado."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O teste já falhou inicialmente e o código foi implementado para fazê-lo passar. A etapa seguinte do ciclo é refatorar, mantendo o teste verde e melhorando a estrutura do código.",
    "theoretical_content": "TDD é uma prática de desenvolvimento guiado por testes. O ciclo clássico é Red-Green-Refactor: primeiro escreve-se um teste que falha (Red), depois implementa-se o código mínimo para fazê-lo passar (Green) e, em seguida, refatora-se o código preservando o comportamento observado pelos testes (Refactor). A refatoração melhora estrutura, legibilidade e design sem alterar a funcionalidade externa. Depois, o ciclo se repete com outro teste.",
    "bank_approach": "A questão descreve duas etapas do ciclo e solicita a próxima. É uma cobrança de sequência de processo, comum em itens técnicos objetivos.",
    "study_tip": "Memorize Red → Green → Refactor. Refatoração não é adicionar funcionalidade nem mudar o comportamento esperado.",
    "review_summary": "TDD segue Red-Green-Refactor: teste falha, código faz passar, refatoração melhora o design sem alterar o comportamento."
  }
}
```

## Questão 0011

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0011",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Factory Method",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma aplicação precisa permitir que subclasses decidam qual classe concreta será instanciada, mantendo o código cliente dependente de uma abstração. O padrão mais adequado é",
  "alternatives": [
    {
      "id": "A",
      "text": "Abstract Factory.",
      "is_correct": false,
      "explanation": "Incorreta. Abstract Factory. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Factory Method é criacional: define um método de criação em uma classe-base e permite que subclasses escolham o tipo concreto produzido. O cliente trabalha com a abstração, sem precisar conhecer a classe concreta. Abstract Factory cria famílias de objetos relacionados; Prototype cria objetos por clonagem; Singleton controla a quantidade de instâncias. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Prototype.",
      "is_correct": false,
      "explanation": "Incorreta. Prototype. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Factory Method é criacional: define um método de criação em uma classe-base e permite que subclasses escolham o tipo concreto produzido. O cliente trabalha com a abstração, sem precisar conhecer a classe concreta. Abstract Factory cria famílias de objetos relacionados; Prototype cria objetos por clonagem; Singleton controla a quantidade de instâncias. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Factory Method.",
      "is_correct": true,
      "explanation": "Correta. Factory Method. Factory Method é criacional: define um método de criação em uma classe-base e permite que subclasses escolham o tipo concreto produzido. O cliente trabalha com a abstração, sem precisar conhecer a classe concreta. Abstract Factory cria famílias de objetos relacionados; Prototype cria objetos por clonagem; Singleton controla a quantidade de instâncias. No cenário, a condição decisiva é: O requisito é delegar às subclasses a decisão sobre o produto concreto, preservando uma interface comum. Essa é a intenção de Factory Method."
    },
    {
      "id": "D",
      "text": "Singleton.",
      "is_correct": false,
      "explanation": "Incorreta. Singleton. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Factory Method é criacional: define um método de criação em uma classe-base e permite que subclasses escolham o tipo concreto produzido. O cliente trabalha com a abstração, sem precisar conhecer a classe concreta. Abstract Factory cria famílias de objetos relacionados; Prototype cria objetos por clonagem; Singleton controla a quantidade de instâncias. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O requisito é delegar às subclasses a decisão sobre o produto concreto, preservando uma interface comum. Essa é a intenção de Factory Method.",
    "theoretical_content": "Factory Method é criacional: define um método de criação em uma classe-base e permite que subclasses escolham o tipo concreto produzido. O cliente trabalha com a abstração, sem precisar conhecer a classe concreta. Abstract Factory cria famílias de objetos relacionados; Prototype cria objetos por clonagem; Singleton controla a quantidade de instâncias.",
    "bank_approach": "A banca tende a apresentar o problema de criação e cobrar a intenção do padrão, distinguindo padrões criacionais de nomes próximos.",
    "study_tip": "Se a escolha da classe concreta fica nas subclasses, pense em Factory Method. Se há famílias de produtos compatíveis, pense em Abstract Factory.",
    "review_summary": "Factory Method delega a criação às subclasses; Abstract Factory cria famílias; Prototype clona; Singleton restringe instâncias."
  }
}
```

## Questão 0012

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0012",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Abstract Factory",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um sistema deve oferecer conjuntos intercambiáveis de componentes de interface — botões, menus e caixas de diálogo — compatíveis com diferentes sistemas operacionais. Para criar famílias de objetos relacionados sem acoplar o cliente às classes concretas, recomenda-se",
  "alternatives": [
    {
      "id": "A",
      "text": "Prototype.",
      "is_correct": false,
      "explanation": "Incorreta. Prototype. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O objetivo é manter a compatibilidade entre produtos de uma mesma família. Factory Method delega a criação de um produto a subclasses; Builder separa construção passo a passo; Prototype cria por cópia. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Abstract Factory.",
      "is_correct": true,
      "explanation": "Correta. Abstract Factory. Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O objetivo é manter a compatibilidade entre produtos de uma mesma família. Factory Method delega a criação de um produto a subclasses; Builder separa construção passo a passo; Prototype cria por cópia. No cenário, a condição decisiva é: O problema exige selecionar uma família coerente de produtos de acordo com a plataforma. Abstract Factory encapsula a criação da família completa."
    },
    {
      "id": "C",
      "text": "Builder.",
      "is_correct": false,
      "explanation": "Incorreta. Builder. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O objetivo é manter a compatibilidade entre produtos de uma mesma família. Factory Method delega a criação de um produto a subclasses; Builder separa construção passo a passo; Prototype cria por cópia. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Factory Method.",
      "is_correct": false,
      "explanation": "Incorreta. Factory Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O objetivo é manter a compatibilidade entre produtos de uma mesma família. Factory Method delega a criação de um produto a subclasses; Builder separa construção passo a passo; Prototype cria por cópia. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O problema exige selecionar uma família coerente de produtos de acordo com a plataforma. Abstract Factory encapsula a criação da família completa.",
    "theoretical_content": "Abstract Factory fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas. O objetivo é manter a compatibilidade entre produtos de uma mesma família. Factory Method delega a criação de um produto a subclasses; Builder separa construção passo a passo; Prototype cria por cópia.",
    "bank_approach": "A questão explora a diferença entre criação de um produto e criação coordenada de famílias de produtos.",
    "study_tip": "A expressão família de objetos relacionados é o indício mais forte de Abstract Factory.",
    "review_summary": "Abstract Factory cria famílias coerentes; Factory Method delega um produto; Builder constrói etapas; Prototype clona."
  }
}
```

## Questão 0013

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0013",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Builder",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A construção de um relatório complexo envolve várias etapas opcionais e diferentes representações finais. Deseja-se separar o processo de construção da representação produzida. O padrão indicado é",
  "alternatives": [
    {
      "id": "A",
      "text": "Factory Method.",
      "is_correct": false,
      "explanation": "Incorreta. Factory Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Builder é criacional e separa a construção de um objeto complexo de sua representação. O mesmo processo pode produzir representações diferentes, e a construção pode ocorrer em etapas. Factory Method delega a criação de um produto; Facade simplifica acesso a subsistemas; Decorator acrescenta responsabilidades a objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Builder é criacional e separa a construção de um objeto complexo de sua representação. O mesmo processo pode produzir representações diferentes, e a construção pode ocorrer em etapas. Factory Method delega a criação de um produto; Facade simplifica acesso a subsistemas; Decorator acrescenta responsabilidades a objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Builder.",
      "is_correct": true,
      "explanation": "Correta. Builder. Builder é criacional e separa a construção de um objeto complexo de sua representação. O mesmo processo pode produzir representações diferentes, e a construção pode ocorrer em etapas. Factory Method delega a criação de um produto; Facade simplifica acesso a subsistemas; Decorator acrescenta responsabilidades a objetos. No cenário, a condição decisiva é: A necessidade central é controlar a montagem de um objeto complexo em etapas, podendo variar sua representação. Isso caracteriza Builder."
    },
    {
      "id": "D",
      "text": "Facade.",
      "is_correct": false,
      "explanation": "Incorreta. Facade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Builder é criacional e separa a construção de um objeto complexo de sua representação. O mesmo processo pode produzir representações diferentes, e a construção pode ocorrer em etapas. Factory Method delega a criação de um produto; Facade simplifica acesso a subsistemas; Decorator acrescenta responsabilidades a objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A necessidade central é controlar a montagem de um objeto complexo em etapas, podendo variar sua representação. Isso caracteriza Builder.",
    "theoretical_content": "Builder é criacional e separa a construção de um objeto complexo de sua representação. O mesmo processo pode produzir representações diferentes, e a construção pode ocorrer em etapas. Factory Method delega a criação de um produto; Facade simplifica acesso a subsistemas; Decorator acrescenta responsabilidades a objetos.",
    "bank_approach": "O enunciado descreve uma necessidade de projeto e espera a associação entre finalidade e padrão.",
    "study_tip": "Associe Builder a construção passo a passo de objetos complexos; não o confunda com uma fábrica simples.",
    "review_summary": "Builder separa processo de construção e representação, especialmente para objetos complexos com etapas."
  }
}
```

## Questão 0014

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0014",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Singleton",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma classe deve garantir uma única instância e oferecer um ponto de acesso controlado. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Object Pool.",
      "is_correct": false,
      "explanation": "Incorreta. Object Pool. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Singleton restringe uma classe a uma única instância e fornece um ponto de acesso a ela. Prototype clona; Object Pool gerencia várias instâncias reutilizáveis; Factory Method delega a criação a subclasses. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Factory Method.",
      "is_correct": false,
      "explanation": "Incorreta. Factory Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Singleton restringe uma classe a uma única instância e fornece um ponto de acesso a ela. Prototype clona; Object Pool gerencia várias instâncias reutilizáveis; Factory Method delega a criação a subclasses. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Prototype.",
      "is_correct": false,
      "explanation": "Incorreta. Prototype. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Singleton restringe uma classe a uma única instância e fornece um ponto de acesso a ela. Prototype clona; Object Pool gerencia várias instâncias reutilizáveis; Factory Method delega a criação a subclasses. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Singleton.",
      "is_correct": true,
      "explanation": "Correta. Singleton. Singleton restringe uma classe a uma única instância e fornece um ponto de acesso a ela. Prototype clona; Object Pool gerencia várias instâncias reutilizáveis; Factory Method delega a criação a subclasses. No cenário, a condição decisiva é: A restrição de cardinalidade a uma única instância caracteriza Singleton."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A restrição de cardinalidade a uma única instância caracteriza Singleton. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Singleton e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Singleton restringe uma classe a uma única instância e fornece um ponto de acesso a ela. Prototype clona; Object Pool gerencia várias instâncias reutilizáveis; Factory Method delega a criação a subclasses.",
    "bank_approach": "A banca costuma cobrar a intenção do padrão por uma necessidade operacional.",
    "study_tip": "Uma instância compartilhada aponta para Singleton; várias instâncias reaproveitadas apontam para pool.",
    "review_summary": "Singleton limita a uma instância; pool reutiliza um conjunto. Na revisão, retenha a definição de Singleton, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0015

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0015",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Prototype",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para criar objetos novos a partir de uma instância previamente configurada, copiando seu estado, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "Abstract Factory.",
      "is_correct": false,
      "explanation": "Incorreta. Abstract Factory. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototype é criacional e cria objetos por clonagem de um protótipo existente. Builder monta objetos em etapas; Abstract Factory cria famílias; Adapter converte interfaces. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. Adapter. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototype é criacional e cria objetos por clonagem de um protótipo existente. Builder monta objetos em etapas; Abstract Factory cria famílias; Adapter converte interfaces. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Prototype.",
      "is_correct": true,
      "explanation": "Correta. Prototype. Prototype é criacional e cria objetos por clonagem de um protótipo existente. Builder monta objetos em etapas; Abstract Factory cria famílias; Adapter converte interfaces. No cenário, a condição decisiva é: A criação por cópia de um objeto configurado é a finalidade de Prototype."
    },
    {
      "id": "D",
      "text": "Builder.",
      "is_correct": false,
      "explanation": "Incorreta. Builder. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototype é criacional e cria objetos por clonagem de um protótipo existente. Builder monta objetos em etapas; Abstract Factory cria famílias; Adapter converte interfaces. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A criação por cópia de um objeto configurado é a finalidade de Prototype. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Prototype e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Prototype é criacional e cria objetos por clonagem de um protótipo existente. Builder monta objetos em etapas; Abstract Factory cria famílias; Adapter converte interfaces. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O enunciado apresenta a estratégia de criação, não uma estrutura de relacionamento.",
    "study_tip": "Clonar ou copiar uma instância-modelo indica Prototype. Em revisão, associe Prototype à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Prototype cria por clonagem; Builder constrói em etapas. Na revisão, retenha a definição de Prototype, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0016

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0016",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Adapter",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um componente legado possui interface incompatível com a esperada pelo cliente. Para integrá-lo sem alterar sua implementação, aplica-se",
  "alternatives": [
    {
      "id": "A",
      "text": "Bridge.",
      "is_correct": false,
      "explanation": "Incorreta. Bridge. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adapter converte uma interface em outra esperada pelo cliente. Bridge separa abstração e implementação; Facade simplifica subsistemas; Proxy controla acesso a um objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Proxy.",
      "is_correct": false,
      "explanation": "Incorreta. Proxy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adapter converte uma interface em outra esperada pelo cliente. Bridge separa abstração e implementação; Facade simplifica subsistemas; Proxy controla acesso a um objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Adapter.",
      "is_correct": true,
      "explanation": "Correta. Adapter. Adapter converte uma interface em outra esperada pelo cliente. Bridge separa abstração e implementação; Facade simplifica subsistemas; Proxy controla acesso a um objeto. No cenário, a condição decisiva é: O problema é incompatibilidade entre interfaces, resolvida por Adapter."
    },
    {
      "id": "D",
      "text": "Facade.",
      "is_correct": false,
      "explanation": "Incorreta. Facade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adapter converte uma interface em outra esperada pelo cliente. Bridge separa abstração e implementação; Facade simplifica subsistemas; Proxy controla acesso a um objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O problema é incompatibilidade entre interfaces, resolvida por Adapter. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Adapter e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Adapter converte uma interface em outra esperada pelo cliente. Bridge separa abstração e implementação; Facade simplifica subsistemas; Proxy controla acesso a um objeto. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca aproxima padrões estruturais e exige distinguir suas intenções. O detalhe decisivo é reconhecer a função de Adapter no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Interface incompatível: Adapter; acesso controlado: Proxy; simplificação: Facade.",
    "review_summary": "Adapter compatibiliza interfaces; Bridge desacopla duas dimensões. Na revisão, retenha a definição de Adapter, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0017

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0017",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Bridge",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Duas dimensões de uma solução, como tipos de relatório e mecanismos de exportação, precisam evoluir independentemente. O padrão adequado é",
  "alternatives": [
    {
      "id": "A",
      "text": "Bridge.",
      "is_correct": true,
      "explanation": "Correta. Bridge. Bridge separa abstração de implementação para que ambas variem independentemente. Adapter traduz interfaces; Decorator acrescenta responsabilidades; Composite organiza hierarquias parte-todo. No cenário, a condição decisiva é: A necessidade é desacoplar duas hierarquias de variação, característica de Bridge."
    },
    {
      "id": "B",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. Adapter. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Bridge separa abstração de implementação para que ambas variem independentemente. Adapter traduz interfaces; Decorator acrescenta responsabilidades; Composite organiza hierarquias parte-todo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Bridge separa abstração de implementação para que ambas variem independentemente. Adapter traduz interfaces; Decorator acrescenta responsabilidades; Composite organiza hierarquias parte-todo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Composite.",
      "is_correct": false,
      "explanation": "Incorreta. Composite. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Bridge separa abstração de implementação para que ambas variem independentemente. Adapter traduz interfaces; Decorator acrescenta responsabilidades; Composite organiza hierarquias parte-todo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A necessidade é desacoplar duas hierarquias de variação, característica de Bridge. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Bridge e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Bridge separa abstração de implementação para que ambas variem independentemente. Adapter traduz interfaces; Decorator acrescenta responsabilidades; Composite organiza hierarquias parte-todo.",
    "bank_approach": "O item distingue adaptação de interface de separação de abstração e implementação.",
    "study_tip": "Duas hierarquias que evoluem separadamente apontam para Bridge. Em revisão, associe Bridge à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Bridge separa abstração e implementação para evolução independente. Na revisão, retenha a definição de Bridge, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0018

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0018",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Composite",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Arquivos e diretórios devem ser tratados por uma interface uniforme, embora diretórios possam conter outros diretórios. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Flyweight.",
      "is_correct": false,
      "explanation": "Incorreta. Flyweight. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composite compõe objetos em árvores parte-todo e permite tratar folhas e composições uniformemente. Decorator adiciona responsabilidades; Facade simplifica subsistemas; Flyweight compartilha estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Facade.",
      "is_correct": false,
      "explanation": "Incorreta. Facade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composite compõe objetos em árvores parte-todo e permite tratar folhas e composições uniformemente. Decorator adiciona responsabilidades; Facade simplifica subsistemas; Flyweight compartilha estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Composite.",
      "is_correct": true,
      "explanation": "Correta. Composite. Composite compõe objetos em árvores parte-todo e permite tratar folhas e composições uniformemente. Decorator adiciona responsabilidades; Facade simplifica subsistemas; Flyweight compartilha estado. No cenário, a condição decisiva é: A estrutura recursiva de parte-todo com tratamento uniforme caracteriza Composite."
    },
    {
      "id": "D",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composite compõe objetos em árvores parte-todo e permite tratar folhas e composições uniformemente. Decorator adiciona responsabilidades; Facade simplifica subsistemas; Flyweight compartilha estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A estrutura recursiva de parte-todo com tratamento uniforme caracteriza Composite. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Composite e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Composite compõe objetos em árvores parte-todo e permite tratar folhas e composições uniformemente. Decorator adiciona responsabilidades; Facade simplifica subsistemas; Flyweight compartilha estado.",
    "bank_approach": "A banca utiliza contexto familiar para avaliar a intenção estrutural. O detalhe decisivo é reconhecer a função de Composite no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Hierarquia recursiva e folhas/compostos sob a mesma interface indicam Composite.",
    "review_summary": "Composite modela estruturas parte-todo em árvore. Na revisão, retenha a definição de Composite, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0019

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0019",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Decorator",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma funcionalidade opcional deve ser adicionada dinamicamente a objetos, sem criar subclasses para cada combinação. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Proxy.",
      "is_correct": false,
      "explanation": "Incorreta. Proxy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Decorator envolve um objeto com outro da mesma interface para acrescentar responsabilidades dinamicamente. Proxy controla acesso; Adapter converte interfaces; Strategy encapsula algoritmos intercambiáveis. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Decorator.",
      "is_correct": true,
      "explanation": "Correta. Decorator. Decorator envolve um objeto com outro da mesma interface para acrescentar responsabilidades dinamicamente. Proxy controla acesso; Adapter converte interfaces; Strategy encapsula algoritmos intercambiáveis. No cenário, a condição decisiva é: O requisito é estender comportamento em tempo de execução preservando a interface."
    },
    {
      "id": "C",
      "text": "Strategy.",
      "is_correct": false,
      "explanation": "Incorreta. Strategy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Decorator envolve um objeto com outro da mesma interface para acrescentar responsabilidades dinamicamente. Proxy controla acesso; Adapter converte interfaces; Strategy encapsula algoritmos intercambiáveis. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. Adapter. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Decorator envolve um objeto com outro da mesma interface para acrescentar responsabilidades dinamicamente. Proxy controla acesso; Adapter converte interfaces; Strategy encapsula algoritmos intercambiáveis. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O requisito é estender comportamento em tempo de execução preservando a interface. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Decorator e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Decorator envolve um objeto com outro da mesma interface para acrescentar responsabilidades dinamicamente. Proxy controla acesso; Adapter converte interfaces; Strategy encapsula algoritmos intercambiáveis.",
    "bank_approach": "O item diferencia extensão de comportamento de controle de acesso e troca de algoritmo.",
    "study_tip": "Responsabilidade adicional em camadas indica Decorator. Em revisão, associe Decorator à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Decorator adiciona responsabilidades dinamicamente. Na revisão, retenha a definição de Decorator, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0020

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0020",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Flyweight",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para reduzir memória em milhões de objetos semelhantes, a equipe decide compartilhar dados invariáveis e manter fora do objeto os dados específicos de cada ocorrência. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Memento.",
      "is_correct": false,
      "explanation": "Incorreta. Memento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Flyweight compartilha estado intrínseco entre muitos objetos e mantém o estado extrínseco no contexto. Composite organiza árvores; Prototype clona; Memento guarda estado para restauração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Prototype.",
      "is_correct": false,
      "explanation": "Incorreta. Prototype. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Flyweight compartilha estado intrínseco entre muitos objetos e mantém o estado extrínseco no contexto. Composite organiza árvores; Prototype clona; Memento guarda estado para restauração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Flyweight.",
      "is_correct": true,
      "explanation": "Correta. Flyweight. Flyweight compartilha estado intrínseco entre muitos objetos e mantém o estado extrínseco no contexto. Composite organiza árvores; Prototype clona; Memento guarda estado para restauração. No cenário, a condição decisiva é: Compartilhamento de estado comum para reduzir custo de muitos objetos é Flyweight."
    },
    {
      "id": "D",
      "text": "Composite.",
      "is_correct": false,
      "explanation": "Incorreta. Composite. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Flyweight compartilha estado intrínseco entre muitos objetos e mantém o estado extrínseco no contexto. Composite organiza árvores; Prototype clona; Memento guarda estado para restauração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Compartilhamento de estado comum para reduzir custo de muitos objetos é Flyweight. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Flyweight e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Flyweight compartilha estado intrínseco entre muitos objetos e mantém o estado extrínseco no contexto. Composite organiza árvores; Prototype clona; Memento guarda estado para restauração.",
    "bank_approach": "A banca destaca otimização de memória e granularidade fina. O detalhe decisivo é reconhecer a função de Flyweight no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Muitos objetos semelhantes e estado compartilhado apontam para Flyweight.",
    "review_summary": "Flyweight reduz memória por compartilhamento de estado intrínseco. Na revisão, retenha a definição de Flyweight, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0021

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0021",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Proxy",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um objeto substituto deve autenticar o cliente e controlar o acesso ao objeto real antes de encaminhar chamadas. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. Adapter. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Proxy representa um substituto que controla acesso ao objeto real, podendo implementar proteção, acesso remoto ou carregamento sob demanda. Adapter traduz interfaces; Facade simplifica subsistemas; Decorator acrescenta comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Facade.",
      "is_correct": false,
      "explanation": "Incorreta. Facade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Proxy representa um substituto que controla acesso ao objeto real, podendo implementar proteção, acesso remoto ou carregamento sob demanda. Adapter traduz interfaces; Facade simplifica subsistemas; Decorator acrescenta comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Proxy.",
      "is_correct": true,
      "explanation": "Correta. Proxy. Proxy representa um substituto que controla acesso ao objeto real, podendo implementar proteção, acesso remoto ou carregamento sob demanda. Adapter traduz interfaces; Facade simplifica subsistemas; Decorator acrescenta comportamento. No cenário, a condição decisiva é: O substituto que intermedeia e controla o acesso caracteriza Proxy."
    },
    {
      "id": "D",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Proxy representa um substituto que controla acesso ao objeto real, podendo implementar proteção, acesso remoto ou carregamento sob demanda. Adapter traduz interfaces; Facade simplifica subsistemas; Decorator acrescenta comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O substituto que intermedeia e controla o acesso caracteriza Proxy. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Proxy e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Proxy representa um substituto que controla acesso ao objeto real, podendo implementar proteção, acesso remoto ou carregamento sob demanda. Adapter traduz interfaces; Facade simplifica subsistemas; Decorator acrescenta comportamento.",
    "bank_approach": "O cenário enfatiza proteção e intermediação de chamadas. O detalhe decisivo é reconhecer a função de Proxy no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Representante que controla acesso ao objeto real: Proxy. Em revisão, associe Proxy à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Proxy controla o acesso ao objeto real. Na revisão, retenha a definição de Proxy, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0022

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0022",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Chain of Responsibility",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma requisição passa por uma cadeia de tratadores; cada um pode processá-la ou encaminhá-la ao próximo. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Chain of Responsibility.",
      "is_correct": true,
      "explanation": "Correta. Chain of Responsibility. Chain of Responsibility encadeia objetos receptores e permite que cada um trate ou encaminhe a solicitação, desacoplando emissor e receptor concreto. Command encapsula solicitação; Mediator centraliza comunicação; Observer notifica assinantes. No cenário, a condição decisiva é: O encaminhamento sequencial entre possíveis responsáveis define Chain of Responsibility."
    },
    {
      "id": "B",
      "text": "Command.",
      "is_correct": false,
      "explanation": "Incorreta. Command. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Chain of Responsibility encadeia objetos receptores e permite que cada um trate ou encaminhe a solicitação, desacoplando emissor e receptor concreto. Command encapsula solicitação; Mediator centraliza comunicação; Observer notifica assinantes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Observer.",
      "is_correct": false,
      "explanation": "Incorreta. Observer. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Chain of Responsibility encadeia objetos receptores e permite que cada um trate ou encaminhe a solicitação, desacoplando emissor e receptor concreto. Command encapsula solicitação; Mediator centraliza comunicação; Observer notifica assinantes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Mediator.",
      "is_correct": false,
      "explanation": "Incorreta. Mediator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Chain of Responsibility encadeia objetos receptores e permite que cada um trate ou encaminhe a solicitação, desacoplando emissor e receptor concreto. Command encapsula solicitação; Mediator centraliza comunicação; Observer notifica assinantes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O encaminhamento sequencial entre possíveis responsáveis define Chain of Responsibility. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Chain of Responsibility e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Chain of Responsibility encadeia objetos receptores e permite que cada um trate ou encaminhe a solicitação, desacoplando emissor e receptor concreto. Command encapsula solicitação; Mediator centraliza comunicação; Observer notifica assinantes.",
    "bank_approach": "A banca descreve o fluxo de uma solicitação e cobra o padrão correspondente.",
    "study_tip": "Cadeia de tratadores com encaminhamento indica Chain of Responsibility.",
    "review_summary": "Chain of Responsibility encadeia tratadores desacoplados. Na revisão, retenha a definição de Chain of Responsibility, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0023

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0023",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Command",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Operações precisam ser representadas como objetos para permitir filas, histórico e desfazer ações. O padrão adequado é",
  "alternatives": [
    {
      "id": "A",
      "text": "Iterator.",
      "is_correct": false,
      "explanation": "Incorreta. Iterator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Command encapsula uma solicitação como objeto, separando quem solicita de quem executa. Pode apoiar fila, log e undo. Strategy encapsula algoritmos; State varia comportamento por estado; Iterator percorre coleções. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Command.",
      "is_correct": true,
      "explanation": "Correta. Command. Command encapsula uma solicitação como objeto, separando quem solicita de quem executa. Pode apoiar fila, log e undo. Strategy encapsula algoritmos; State varia comportamento por estado; Iterator percorre coleções. No cenário, a condição decisiva é: O requisito é encapsular a ação como objeto para armazená-la ou desfazê-la."
    },
    {
      "id": "C",
      "text": "State.",
      "is_correct": false,
      "explanation": "Incorreta. State. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Command encapsula uma solicitação como objeto, separando quem solicita de quem executa. Pode apoiar fila, log e undo. Strategy encapsula algoritmos; State varia comportamento por estado; Iterator percorre coleções. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Strategy.",
      "is_correct": false,
      "explanation": "Incorreta. Strategy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Command encapsula uma solicitação como objeto, separando quem solicita de quem executa. Pode apoiar fila, log e undo. Strategy encapsula algoritmos; State varia comportamento por estado; Iterator percorre coleções. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O requisito é encapsular a ação como objeto para armazená-la ou desfazê-la. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Command e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Command encapsula uma solicitação como objeto, separando quem solicita de quem executa. Pode apoiar fila, log e undo. Strategy encapsula algoritmos; State varia comportamento por estado; Iterator percorre coleções.",
    "bank_approach": "O item diferencia solicitação executável de algoritmo intercambiável. O detalhe decisivo é reconhecer a função de Command no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Ação encapsulada como objeto aponta para Command. Em revisão, associe Command à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Command transforma solicitações em objetos e favorece fila e undo. Na revisão, retenha a definição de Command, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0024

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0024",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Iterator",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma coleção deve ser percorrida sem expor se sua estrutura interna é vetor, lista ou árvore. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Composite.",
      "is_correct": false,
      "explanation": "Incorreta. Composite. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Iterator fornece acesso sequencial aos elementos de um agregado sem expor sua representação. Visitor adiciona operações; Composite organiza parte-todo; Flyweight compartilha objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Flyweight.",
      "is_correct": false,
      "explanation": "Incorreta. Flyweight. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Iterator fornece acesso sequencial aos elementos de um agregado sem expor sua representação. Visitor adiciona operações; Composite organiza parte-todo; Flyweight compartilha objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Iterator.",
      "is_correct": true,
      "explanation": "Correta. Iterator. Iterator fornece acesso sequencial aos elementos de um agregado sem expor sua representação. Visitor adiciona operações; Composite organiza parte-todo; Flyweight compartilha objetos. No cenário, a condição decisiva é: O percurso independente da estrutura interna é a finalidade de Iterator."
    },
    {
      "id": "D",
      "text": "Visitor.",
      "is_correct": false,
      "explanation": "Incorreta. Visitor. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Iterator fornece acesso sequencial aos elementos de um agregado sem expor sua representação. Visitor adiciona operações; Composite organiza parte-todo; Flyweight compartilha objetos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O percurso independente da estrutura interna é a finalidade de Iterator. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Iterator e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Iterator fornece acesso sequencial aos elementos de um agregado sem expor sua representação. Visitor adiciona operações; Composite organiza parte-todo; Flyweight compartilha objetos.",
    "bank_approach": "A questão destaca encapsulamento da representação do agregado. O detalhe decisivo é reconhecer a função de Iterator no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Percorrer sem revelar a estrutura interna aponta para Iterator. Em revisão, associe Iterator à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Iterator separa percurso e representação interna da coleção. Na revisão, retenha a definição de Iterator, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0025

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0025",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Mediator",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Componentes de uma interface precisam trocar informações, mas a equipe deseja evitar referências diretas entre todos eles. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Observer.",
      "is_correct": false,
      "explanation": "Incorreta. Observer. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Mediator centraliza a comunicação entre objetos colegas, reduzindo dependências diretas. Observer estabelece notificação um-para-muitos; Facade simplifica subsistema; Adapter traduz interface. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Mediator.",
      "is_correct": true,
      "explanation": "Correta. Mediator. Mediator centraliza a comunicação entre objetos colegas, reduzindo dependências diretas. Observer estabelece notificação um-para-muitos; Facade simplifica subsistema; Adapter traduz interface. No cenário, a condição decisiva é: A coordenação centralizada das interações caracteriza Mediator."
    },
    {
      "id": "C",
      "text": "Facade.",
      "is_correct": false,
      "explanation": "Incorreta. Facade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Mediator centraliza a comunicação entre objetos colegas, reduzindo dependências diretas. Observer estabelece notificação um-para-muitos; Facade simplifica subsistema; Adapter traduz interface. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Adapter.",
      "is_correct": false,
      "explanation": "Incorreta. Adapter. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Mediator centraliza a comunicação entre objetos colegas, reduzindo dependências diretas. Observer estabelece notificação um-para-muitos; Facade simplifica subsistema; Adapter traduz interface. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A coordenação centralizada das interações caracteriza Mediator. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Mediator e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Mediator centraliza a comunicação entre objetos colegas, reduzindo dependências diretas. Observer estabelece notificação um-para-muitos; Facade simplifica subsistema; Adapter traduz interface.",
    "bank_approach": "O item diferencia coordenação entre colegas de publicação de eventos. O detalhe decisivo é reconhecer a função de Mediator no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Objeto central que coordena colegas: Mediator; publicador e inscritos: Observer.",
    "review_summary": "Mediator centraliza comunicação e reduz acoplamento entre colegas. Na revisão, retenha a definição de Mediator, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0026

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0026",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Memento",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um editor deve guardar um retrato do estado interno de um documento e permitir sua restauração posterior sem expor detalhes internos. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Memento.",
      "is_correct": true,
      "explanation": "Correta. Memento. Memento captura e restaura estado sem violar encapsulamento. Command encapsula operações; Prototype clona objetos; State organiza comportamento por estado. No cenário, a condição decisiva é: A necessidade é armazenar e restaurar estado interno, finalidade de Memento."
    },
    {
      "id": "B",
      "text": "State.",
      "is_correct": false,
      "explanation": "Incorreta. State. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Memento captura e restaura estado sem violar encapsulamento. Command encapsula operações; Prototype clona objetos; State organiza comportamento por estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Prototype.",
      "is_correct": false,
      "explanation": "Incorreta. Prototype. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Memento captura e restaura estado sem violar encapsulamento. Command encapsula operações; Prototype clona objetos; State organiza comportamento por estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Command.",
      "is_correct": false,
      "explanation": "Incorreta. Command. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Memento captura e restaura estado sem violar encapsulamento. Command encapsula operações; Prototype clona objetos; State organiza comportamento por estado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A necessidade é armazenar e restaurar estado interno, finalidade de Memento. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Memento e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Memento captura e restaura estado sem violar encapsulamento. Command encapsula operações; Prototype clona objetos; State organiza comportamento por estado. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca diferencia snapshot de estado e encapsulamento de operação. O detalhe decisivo é reconhecer a função de Memento no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Guardar estado para restaurar depois indica Memento. Em revisão, associe Memento à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Memento preserva e restaura estado sem expor sua estrutura. Na revisão, retenha a definição de Memento, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0027

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0027",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "State",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O comportamento de um pedido muda conforme esteja Aberto, Pago ou Cancelado. Para evitar condicionais extensas, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "Template Method.",
      "is_correct": false,
      "explanation": "Incorreta. Template Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: State delega comportamento a objetos que representam estados e permite alterar o comportamento conforme o estado interno. Strategy encapsula algoritmos selecionáveis; Observer notifica mudanças; Template Method fixa esqueleto de algoritmo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "State.",
      "is_correct": true,
      "explanation": "Correta. State. State delega comportamento a objetos que representam estados e permite alterar o comportamento conforme o estado interno. Strategy encapsula algoritmos selecionáveis; Observer notifica mudanças; Template Method fixa esqueleto de algoritmo. No cenário, a condição decisiva é: O comportamento depende do estado atual do pedido, caracterizando State."
    },
    {
      "id": "C",
      "text": "Observer.",
      "is_correct": false,
      "explanation": "Incorreta. Observer. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: State delega comportamento a objetos que representam estados e permite alterar o comportamento conforme o estado interno. Strategy encapsula algoritmos selecionáveis; Observer notifica mudanças; Template Method fixa esqueleto de algoritmo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Strategy.",
      "is_correct": false,
      "explanation": "Incorreta. Strategy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: State delega comportamento a objetos que representam estados e permite alterar o comportamento conforme o estado interno. Strategy encapsula algoritmos selecionáveis; Observer notifica mudanças; Template Method fixa esqueleto de algoritmo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comportamento depende do estado atual do pedido, caracterizando State. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de State e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "State delega comportamento a objetos que representam estados e permite alterar o comportamento conforme o estado interno. Strategy encapsula algoritmos selecionáveis; Observer notifica mudanças; Template Method fixa esqueleto de algoritmo.",
    "bank_approach": "O item explora diferença entre estado interno e estratégia escolhida externamente.",
    "study_tip": "Comportamento determinado pelo estado atual aponta para State. Em revisão, associe State à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "State organiza comportamento e transições por estado. Na revisão, retenha a definição de State, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0028

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0028",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Strategy",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um módulo deve alternar entre algoritmos de cálculo de frete sem modificar o cliente que utiliza o serviço. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Command.",
      "is_correct": false,
      "explanation": "Incorreta. Command. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Strategy encapsula uma família de algoritmos intercambiáveis e permite selecionar a implementação adequada. State modela comportamento dependente do estado; Template Method define esqueleto fixo; Command encapsula solicitação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "State.",
      "is_correct": false,
      "explanation": "Incorreta. State. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Strategy encapsula uma família de algoritmos intercambiáveis e permite selecionar a implementação adequada. State modela comportamento dependente do estado; Template Method define esqueleto fixo; Command encapsula solicitação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Strategy.",
      "is_correct": true,
      "explanation": "Correta. Strategy. Strategy encapsula uma família de algoritmos intercambiáveis e permite selecionar a implementação adequada. State modela comportamento dependente do estado; Template Method define esqueleto fixo; Command encapsula solicitação. No cenário, a condição decisiva é: A troca de algoritmos para uma mesma finalidade caracteriza Strategy."
    },
    {
      "id": "D",
      "text": "Template Method.",
      "is_correct": false,
      "explanation": "Incorreta. Template Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Strategy encapsula uma família de algoritmos intercambiáveis e permite selecionar a implementação adequada. State modela comportamento dependente do estado; Template Method define esqueleto fixo; Command encapsula solicitação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A troca de algoritmos para uma mesma finalidade caracteriza Strategy. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Strategy e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Strategy encapsula uma família de algoritmos intercambiáveis e permite selecionar a implementação adequada. State modela comportamento dependente do estado; Template Method define esqueleto fixo; Command encapsula solicitação.",
    "bank_approach": "A banca cobra a intenção de encapsular variações de algoritmo. O detalhe decisivo é reconhecer a função de Strategy no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Algoritmos intercambiáveis indicam Strategy. Em revisão, associe Strategy à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Strategy encapsula algoritmos substituíveis sob uma abstração comum. Na revisão, retenha a definição de Strategy, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0029

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0029",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Template Method",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma classe define a sequência geral de um processo, mas permite que subclasses implementem etapas específicas. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Strategy.",
      "is_correct": false,
      "explanation": "Incorreta. Strategy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Template Method define o esqueleto de um algoritmo e delega algumas etapas a subclasses. Strategy troca algoritmos por composição; Factory Method delega criação; Decorator adiciona responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Template Method define o esqueleto de um algoritmo e delega algumas etapas a subclasses. Strategy troca algoritmos por composição; Factory Method delega criação; Decorator adiciona responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Template Method.",
      "is_correct": true,
      "explanation": "Correta. Template Method. Template Method define o esqueleto de um algoritmo e delega algumas etapas a subclasses. Strategy troca algoritmos por composição; Factory Method delega criação; Decorator adiciona responsabilidades. No cenário, a condição decisiva é: A sequência geral permanece fixa e etapas variam por subclasses."
    },
    {
      "id": "D",
      "text": "Factory Method.",
      "is_correct": false,
      "explanation": "Incorreta. Factory Method. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Template Method define o esqueleto de um algoritmo e delega algumas etapas a subclasses. Strategy troca algoritmos por composição; Factory Method delega criação; Decorator adiciona responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A sequência geral permanece fixa e etapas variam por subclasses. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Template Method e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Template Method define o esqueleto de um algoritmo e delega algumas etapas a subclasses. Strategy troca algoritmos por composição; Factory Method delega criação; Decorator adiciona responsabilidades.",
    "bank_approach": "A questão diferencia herança para variar etapas de composição para trocar algoritmos.",
    "study_tip": "Fluxo fixo com etapas redefinidas em subclasses indica Template Method.",
    "review_summary": "Template Method fixa o algoritmo geral e permite especializar etapas. Na revisão, retenha a definição de Template Method, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0030

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0030",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Padrões de projeto GoF",
  "subtopic": "Visitor",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma estrutura de elementos de diferentes classes deve receber novas operações sem modificar as classes dos elementos. O padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "Composite.",
      "is_correct": false,
      "explanation": "Incorreta. Composite. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Visitor encapsula operações que percorrem uma estrutura de elementos, permitindo adicionar operações sem alterar as classes visitadas. Iterator percorre; Composite organiza árvore; Decorator acrescenta responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Decorator.",
      "is_correct": false,
      "explanation": "Incorreta. Decorator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Visitor encapsula operações que percorrem uma estrutura de elementos, permitindo adicionar operações sem alterar as classes visitadas. Iterator percorre; Composite organiza árvore; Decorator acrescenta responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Visitor.",
      "is_correct": true,
      "explanation": "Correta. Visitor. Visitor encapsula operações que percorrem uma estrutura de elementos, permitindo adicionar operações sem alterar as classes visitadas. Iterator percorre; Composite organiza árvore; Decorator acrescenta responsabilidades. No cenário, a condição decisiva é: Adicionar operações a uma estrutura sem modificar os elementos caracteriza Visitor."
    },
    {
      "id": "D",
      "text": "Iterator.",
      "is_correct": false,
      "explanation": "Incorreta. Iterator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Visitor encapsula operações que percorrem uma estrutura de elementos, permitindo adicionar operações sem alterar as classes visitadas. Iterator percorre; Composite organiza árvore; Decorator acrescenta responsabilidades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Adicionar operações a uma estrutura sem modificar os elementos caracteriza Visitor. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Visitor e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Visitor encapsula operações que percorrem uma estrutura de elementos, permitindo adicionar operações sem alterar as classes visitadas. Iterator percorre; Composite organiza árvore; Decorator acrescenta responsabilidades.",
    "bank_approach": "A banca apresenta uma necessidade de evolução de operações sobre uma hierarquia.",
    "study_tip": "Nova operação sobre elementos existentes aponta para Visitor. Em revisão, associe Visitor à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Visitor acrescenta operações a estruturas sem alterar classes dos elementos."
  }
}
```

## Questão 0031

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0031",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Tipos de sistemas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um sistema que registra matrículas, pagamentos e emissão de recibos, processando operações rotineiras, é principalmente um",
  "alternatives": [
    {
      "id": "A",
      "text": "sistema de apoio à decisão (SAD).",
      "is_correct": false,
      "explanation": "Incorreta. sistema de apoio à decisão (SAD). A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SPT registra e processa operações rotineiras e estruturadas. SAD apoia decisões semiestruturadas por dados e modelos; SIE oferece visão estratégica agregada; sistemas especialistas aplicam conhecimento e regras em domínios específicos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "sistema de informação executiva (SIE).",
      "is_correct": false,
      "explanation": "Incorreta. sistema de informação executiva (SIE). A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SPT registra e processa operações rotineiras e estruturadas. SAD apoia decisões semiestruturadas por dados e modelos; SIE oferece visão estratégica agregada; sistemas especialistas aplicam conhecimento e regras em domínios específicos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "sistema especialista.",
      "is_correct": false,
      "explanation": "Incorreta. sistema especialista. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SPT registra e processa operações rotineiras e estruturadas. SAD apoia decisões semiestruturadas por dados e modelos; SIE oferece visão estratégica agregada; sistemas especialistas aplicam conhecimento e regras em domínios específicos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "sistema de processamento de transações (SPT).",
      "is_correct": true,
      "explanation": "Correta. sistema de processamento de transações (SPT). SPT registra e processa operações rotineiras e estruturadas. SAD apoia decisões semiestruturadas por dados e modelos; SIE oferece visão estratégica agregada; sistemas especialistas aplicam conhecimento e regras em domínios específicos. No cenário, a condição decisiva é: Matrículas e pagamentos são transações operacionais repetitivas, características de SPT."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "Matrículas e pagamentos são transações operacionais repetitivas, características de SPT. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Tipos de sistemas e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "SPT registra e processa operações rotineiras e estruturadas. SAD apoia decisões semiestruturadas por dados e modelos; SIE oferece visão estratégica agregada; sistemas especialistas aplicam conhecimento e regras em domínios específicos.",
    "bank_approach": "O item apresenta exemplos e pede a classificação pela finalidade do sistema.",
    "study_tip": "Rotina operacional indica SPT; análise de cenários indica SAD. Em revisão, associe Tipos de sistemas à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "SPT processa transações; SAD apoia decisões; SIE apoia visão estratégica."
  }
}
```

## Questão 0032

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0032",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Modelo iterativo e incremental",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um produto é desenvolvido em ciclos, com entregas funcionais sucessivas e refinamento a partir do feedback dos usuários. O modelo é",
  "alternatives": [
    {
      "id": "A",
      "text": "big bang.",
      "is_correct": false,
      "explanation": "Incorreta. big bang. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O desenvolvimento incremental entrega partes funcionais sucessivas; o iterativo revisita e refina o produto em ciclos. A combinação favorece feedback antecipado e adaptação. Cascata privilegia sequência linear. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "iterativo e incremental.",
      "is_correct": true,
      "explanation": "Correta. iterativo e incremental. O desenvolvimento incremental entrega partes funcionais sucessivas; o iterativo revisita e refina o produto em ciclos. A combinação favorece feedback antecipado e adaptação. Cascata privilegia sequência linear. No cenário, a condição decisiva é: Entregas sucessivas e refinamento por ciclos caracterizam o modelo iterativo e incremental."
    },
    {
      "id": "C",
      "text": "codificação sem processo.",
      "is_correct": false,
      "explanation": "Incorreta. codificação sem processo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O desenvolvimento incremental entrega partes funcionais sucessivas; o iterativo revisita e refina o produto em ciclos. A combinação favorece feedback antecipado e adaptação. Cascata privilegia sequência linear. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Cascata estritamente sequencial.",
      "is_correct": false,
      "explanation": "Incorreta. Cascata estritamente sequencial. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O desenvolvimento incremental entrega partes funcionais sucessivas; o iterativo revisita e refina o produto em ciclos. A combinação favorece feedback antecipado e adaptação. Cascata privilegia sequência linear. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Entregas sucessivas e refinamento por ciclos caracterizam o modelo iterativo e incremental.",
    "theoretical_content": "O desenvolvimento incremental entrega partes funcionais sucessivas; o iterativo revisita e refina o produto em ciclos. A combinação favorece feedback antecipado e adaptação. Cascata privilegia sequência linear.",
    "bank_approach": "A questão explora características do ciclo de vida por meio da forma de entrega.",
    "study_tip": "Entrega parcial e feedback por ciclos indicam iteração/incremento.",
    "review_summary": "Iterativo refina em ciclos; incremental acrescenta funcionalidades progressivamente."
  }
}
```

## Questão 0033

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0033",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Modelo Espiral",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um projeto complexo, cada ciclo começa pela identificação e análise dos riscos antes de decidir o próximo desenvolvimento. O modelo é",
  "alternatives": [
    {
      "id": "A",
      "text": "RAD.",
      "is_correct": false,
      "explanation": "Incorreta. RAD. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O modelo Espiral é orientado a riscos. Em ciclos, identifica objetivos, alternativas e restrições, avalia riscos, desenvolve e verifica resultados e planeja o próximo ciclo. É útil em projetos grandes e incertos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "V-Model.",
      "is_correct": false,
      "explanation": "Incorreta. V-Model. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O modelo Espiral é orientado a riscos. Em ciclos, identifica objetivos, alternativas e restrições, avalia riscos, desenvolve e verifica resultados e planeja o próximo ciclo. É útil em projetos grandes e incertos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Espiral.",
      "is_correct": true,
      "explanation": "Correta. Espiral. O modelo Espiral é orientado a riscos. Em ciclos, identifica objetivos, alternativas e restrições, avalia riscos, desenvolve e verifica resultados e planeja o próximo ciclo. É útil em projetos grandes e incertos. No cenário, a condição decisiva é: A análise de riscos em cada ciclo é a característica distintiva do modelo Espiral."
    },
    {
      "id": "D",
      "text": "Cascata.",
      "is_correct": false,
      "explanation": "Incorreta. Cascata. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O modelo Espiral é orientado a riscos. Em ciclos, identifica objetivos, alternativas e restrições, avalia riscos, desenvolve e verifica resultados e planeja o próximo ciclo. É útil em projetos grandes e incertos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A análise de riscos em cada ciclo é a característica distintiva do modelo Espiral. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Modelo Espiral e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "O modelo Espiral é orientado a riscos. Em ciclos, identifica objetivos, alternativas e restrições, avalia riscos, desenvolve e verifica resultados e planeja o próximo ciclo. É útil em projetos grandes e incertos.",
    "bank_approach": "A banca descreve uma característica marcante do processo e exige sua identificação.",
    "study_tip": "Risco como eixo de cada ciclo aponta para Espiral. Em revisão, associe Modelo Espiral à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Espiral é iterativo e orientado a riscos. Na revisão, retenha a definição de Modelo Espiral, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0034

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0034",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Prototipação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Usuários não conseguem especificar claramente a interface desejada. A equipe cria uma versão preliminar para colher feedback e esclarecer necessidades. A técnica é",
  "alternatives": [
    {
      "id": "A",
      "text": "refatoração.",
      "is_correct": false,
      "explanation": "Incorreta. refatoração. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototipação produz representação preliminar do sistema para explorar requisitos e obter feedback. Pode ser evolutiva ou descartável. Ajuda a reduzir incerteza, mas o protótipo não é necessariamente arquitetura de produção. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "gestão de configuração.",
      "is_correct": false,
      "explanation": "Incorreta. gestão de configuração. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototipação produz representação preliminar do sistema para explorar requisitos e obter feedback. Pode ser evolutiva ou descartável. Ajuda a reduzir incerteza, mas o protótipo não é necessariamente arquitetura de produção. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de regressão.",
      "is_correct": false,
      "explanation": "Incorreta. teste de regressão. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Prototipação produz representação preliminar do sistema para explorar requisitos e obter feedback. Pode ser evolutiva ou descartável. Ajuda a reduzir incerteza, mas o protótipo não é necessariamente arquitetura de produção. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "prototipação.",
      "is_correct": true,
      "explanation": "Correta. prototipação. Prototipação produz representação preliminar do sistema para explorar requisitos e obter feedback. Pode ser evolutiva ou descartável. Ajuda a reduzir incerteza, mas o protótipo não é necessariamente arquitetura de produção. No cenário, a condição decisiva é: A versão preliminar é usada para aprender e validar requisitos, caracterizando prototipação."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A versão preliminar é usada para aprender e validar requisitos, caracterizando prototipação.",
    "theoretical_content": "Prototipação produz representação preliminar do sistema para explorar requisitos e obter feedback. Pode ser evolutiva ou descartável. Ajuda a reduzir incerteza, mas o protótipo não é necessariamente arquitetura de produção.",
    "bank_approach": "O cenário associa a técnica à incerteza e à participação dos usuários. O detalhe decisivo é reconhecer a função de Prototipação no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Protótipo serve para aprender/validar; não é automaticamente o produto final.",
    "review_summary": "Prototipação apoia descoberta e validação de requisitos. Na revisão, retenha a definição de Prototipação, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0035

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0035",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "V-Model",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um processo associa cada etapa de especificação e projeto a um nível correspondente de teste, planejado desde o início. Trata-se do",
  "alternatives": [
    {
      "id": "A",
      "text": "modelo Espiral.",
      "is_correct": false,
      "explanation": "Incorreta. modelo Espiral. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O V-Model relaciona fases de definição e decomposição do sistema a níveis de verificação e validação. O planejamento de testes ocorre desde fases iniciais e cada nível possui correspondência de teste. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Scrum.",
      "is_correct": false,
      "explanation": "Incorreta. Scrum. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O V-Model relaciona fases de definição e decomposição do sistema a níveis de verificação e validação. O planejamento de testes ocorre desde fases iniciais e cada nível possui correspondência de teste. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "RAD.",
      "is_correct": false,
      "explanation": "Incorreta. RAD. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O V-Model relaciona fases de definição e decomposição do sistema a níveis de verificação e validação. O planejamento de testes ocorre desde fases iniciais e cada nível possui correspondência de teste. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "V-Model.",
      "is_correct": true,
      "explanation": "Correta. V-Model. O V-Model relaciona fases de definição e decomposição do sistema a níveis de verificação e validação. O planejamento de testes ocorre desde fases iniciais e cada nível possui correspondência de teste. No cenário, a condição decisiva é: A correspondência entre desenvolvimento e níveis de teste caracteriza o V-Model."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A correspondência entre desenvolvimento e níveis de teste caracteriza o V-Model. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de V-Model e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "O V-Model relaciona fases de definição e decomposição do sistema a níveis de verificação e validação. O planejamento de testes ocorre desde fases iniciais e cada nível possui correspondência de teste.",
    "bank_approach": "O enunciado destaca o vínculo entre especificação e testes. O detalhe decisivo é reconhecer a função de V-Model no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Cada etapa de definição tem um nível de teste correspondente: V-Model.",
    "review_summary": "V-Model integra planejamento de testes às fases de desenvolvimento. Na revisão, retenha a definição de V-Model, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0036

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0036",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Métodos ágeis",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Colaboração contínua com o cliente, entregas frequentes e adaptação a mudanças são valores associados",
  "alternatives": [
    {
      "id": "A",
      "text": "ao modelo Cascata rígido.",
      "is_correct": false,
      "explanation": "Incorreta. ao modelo Cascata rígido. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Métodos ágeis valorizam colaboração, software funcionando, resposta a mudanças e ciclos curtos. Agilidade não significa ausência de planejamento, documentação ou controle; significa adequá-los e revisá-los continuamente. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "às abordagens ágeis.",
      "is_correct": true,
      "explanation": "Correta. às abordagens ágeis. Métodos ágeis valorizam colaboração, software funcionando, resposta a mudanças e ciclos curtos. Agilidade não significa ausência de planejamento, documentação ou controle; significa adequá-los e revisá-los continuamente. No cenário, a condição decisiva é: A combinação de colaboração, entregas frequentes e adaptação caracteriza abordagens ágeis."
    },
    {
      "id": "C",
      "text": "à ausência de planejamento.",
      "is_correct": false,
      "explanation": "Incorreta. à ausência de planejamento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Métodos ágeis valorizam colaboração, software funcionando, resposta a mudanças e ciclos curtos. Agilidade não significa ausência de planejamento, documentação ou controle; significa adequá-los e revisá-los continuamente. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "à especificação imutável antes de qualquer entrega.",
      "is_correct": false,
      "explanation": "Incorreta. à especificação imutável antes de qualquer entrega. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Métodos ágeis valorizam colaboração, software funcionando, resposta a mudanças e ciclos curtos. Agilidade não significa ausência de planejamento, documentação ou controle; significa adequá-los e revisá-los continuamente. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A combinação de colaboração, entregas frequentes e adaptação caracteriza abordagens ágeis.",
    "theoretical_content": "Métodos ágeis valorizam colaboração, software funcionando, resposta a mudanças e ciclos curtos. Agilidade não significa ausência de planejamento, documentação ou controle; significa adequá-los e revisá-los continuamente.",
    "bank_approach": "A questão evita a falsa equivalência entre agilidade e falta de disciplina.",
    "study_tip": "Ágil significa adaptar o planejamento, não deixar de planejar. Em revisão, associe Métodos ágeis à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Abordagens ágeis trabalham em ciclos curtos e respondem ao feedback. Na revisão, retenha a definição de Métodos ágeis, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0037

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0037",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Análise estruturada",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Na análise estruturada, a decomposição funcional do sistema enfatiza",
  "alternatives": [
    {
      "id": "A",
      "text": "mensagens temporais entre objetos.",
      "is_correct": false,
      "explanation": "Incorreta. mensagens temporais entre objetos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise estruturada enfatiza funções/processos e fluxo de dados, com DFD, dicionário de dados e especificações de processos. Orientação a objetos enfatiza objetos, classes, estado e comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "nós físicos e artefatos implantados.",
      "is_correct": false,
      "explanation": "Incorreta. nós físicos e artefatos implantados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise estruturada enfatiza funções/processos e fluxo de dados, com DFD, dicionário de dados e especificações de processos. Orientação a objetos enfatiza objetos, classes, estado e comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "classes, herança e polimorfismo.",
      "is_correct": false,
      "explanation": "Incorreta. classes, herança e polimorfismo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise estruturada enfatiza funções/processos e fluxo de dados, com DFD, dicionário de dados e especificações de processos. Orientação a objetos enfatiza objetos, classes, estado e comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "processos e fluxos de dados.",
      "is_correct": true,
      "explanation": "Correta. processos e fluxos de dados. A análise estruturada enfatiza funções/processos e fluxo de dados, com DFD, dicionário de dados e especificações de processos. Orientação a objetos enfatiza objetos, classes, estado e comportamento. No cenário, a condição decisiva é: Processos e fluxos de dados são a unidade central da análise estruturada."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "Processos e fluxos de dados são a unidade central da análise estruturada. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Análise estruturada e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "A análise estruturada enfatiza funções/processos e fluxo de dados, com DFD, dicionário de dados e especificações de processos. Orientação a objetos enfatiza objetos, classes, estado e comportamento.",
    "bank_approach": "A questão contrapõe métodos estruturados e OO por suas unidades de modelagem.",
    "study_tip": "Processos/fluxos remetem à análise estruturada; classes/objetos à OO.",
    "review_summary": "Análise estruturada modela processos e fluxos; OO modela objetos e responsabilidades."
  }
}
```

## Questão 0038

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0038",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Orientação a objetos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O mecanismo que reúne estado e comportamento e controla o acesso aos detalhes internos de um objeto é",
  "alternatives": [
    {
      "id": "A",
      "text": "encapsulamento.",
      "is_correct": true,
      "explanation": "Correta. encapsulamento. Encapsulamento agrupa estado e comportamento e controla acesso por uma interface pública, protegendo invariantes. Herança permite especialização; sobrecarga oferece assinaturas diferentes; polimorfismo permite comportamentos específicos por abstração comum. No cenário, a condição decisiva é: O enunciado descreve proteção do estado e acesso controlado, isto é, encapsulamento."
    },
    {
      "id": "B",
      "text": "polimorfismo.",
      "is_correct": false,
      "explanation": "Incorreta. polimorfismo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Encapsulamento agrupa estado e comportamento e controla acesso por uma interface pública, protegendo invariantes. Herança permite especialização; sobrecarga oferece assinaturas diferentes; polimorfismo permite comportamentos específicos por abstração comum. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "sobrecarga.",
      "is_correct": false,
      "explanation": "Incorreta. sobrecarga. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Encapsulamento agrupa estado e comportamento e controla acesso por uma interface pública, protegendo invariantes. Herança permite especialização; sobrecarga oferece assinaturas diferentes; polimorfismo permite comportamentos específicos por abstração comum. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "herança.",
      "is_correct": false,
      "explanation": "Incorreta. herança. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Encapsulamento agrupa estado e comportamento e controla acesso por uma interface pública, protegendo invariantes. Herança permite especialização; sobrecarga oferece assinaturas diferentes; polimorfismo permite comportamentos específicos por abstração comum. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado descreve proteção do estado e acesso controlado, isto é, encapsulamento. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Orientação a objetos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Encapsulamento agrupa estado e comportamento e controla acesso por uma interface pública, protegendo invariantes. Herança permite especialização; sobrecarga oferece assinaturas diferentes; polimorfismo permite comportamentos específicos por abstração comum.",
    "bank_approach": "A banca usa uma definição funcional e alternativas de conceitos OO próximos.",
    "study_tip": "Ocultar detalhes e controlar acesso aponta para encapsulamento. Em revisão, associe Orientação a objetos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Encapsulamento protege estado e expõe operações controladas. Na revisão, retenha a definição de Orientação a objetos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0039

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0039",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Polimorfismo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Objetos de classes diferentes podem ser utilizados por uma mesma interface, executando implementações específicas da operação. Essa propriedade é",
  "alternatives": [
    {
      "id": "A",
      "text": "normalização.",
      "is_correct": false,
      "explanation": "Incorreta. normalização. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Polimorfismo permite que uma referência abstrata invoque uma operação cujo comportamento concreto depende do objeto em tempo de execução. Encapsulamento protege detalhes; composição relaciona objetos; normalização é técnica de modelagem de dados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "composição.",
      "is_correct": false,
      "explanation": "Incorreta. composição. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Polimorfismo permite que uma referência abstrata invoque uma operação cujo comportamento concreto depende do objeto em tempo de execução. Encapsulamento protege detalhes; composição relaciona objetos; normalização é técnica de modelagem de dados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "encapsulamento.",
      "is_correct": false,
      "explanation": "Incorreta. encapsulamento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Polimorfismo permite que uma referência abstrata invoque uma operação cujo comportamento concreto depende do objeto em tempo de execução. Encapsulamento protege detalhes; composição relaciona objetos; normalização é técnica de modelagem de dados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "polimorfismo.",
      "is_correct": true,
      "explanation": "Correta. polimorfismo. Polimorfismo permite que uma referência abstrata invoque uma operação cujo comportamento concreto depende do objeto em tempo de execução. Encapsulamento protege detalhes; composição relaciona objetos; normalização é técnica de modelagem de dados. No cenário, a condição decisiva é: A mesma operação produz comportamento específico conforme o tipo real do objeto, caracterizando polimorfismo."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A mesma operação produz comportamento específico conforme o tipo real do objeto, caracterizando polimorfismo.",
    "theoretical_content": "Polimorfismo permite que uma referência abstrata invoque uma operação cujo comportamento concreto depende do objeto em tempo de execução. Encapsulamento protege detalhes; composição relaciona objetos; normalização é técnica de modelagem de dados.",
    "bank_approach": "A questão cobra uma propriedade central da OO. O detalhe decisivo é reconhecer a função de Polimorfismo no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Mesma interface, diferentes implementações: polimorfismo. Em revisão, associe Polimorfismo à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Polimorfismo permite tratar objetos distintos por uma abstração comum."
  }
}
```

## Questão 0040

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0040",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Coesão e acoplamento",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um projeto modular deve buscar módulos focados em responsabilidades relacionadas e com poucas dependências entre si. O objetivo é",
  "alternatives": [
    {
      "id": "A",
      "text": "alta coesão e baixo acoplamento.",
      "is_correct": true,
      "explanation": "Correta. alta coesão e baixo acoplamento. Coesão mede a relação entre elementos dentro de um módulo; alta coesão é desejável. Acoplamento mede dependências entre módulos; baixo acoplamento facilita manutenção e testes isolados. No cenário, a condição decisiva é: A equipe quer foco interno e independência externa: alta coesão e baixo acoplamento."
    },
    {
      "id": "B",
      "text": "baixa coesão e ausência de encapsulamento.",
      "is_correct": false,
      "explanation": "Incorreta. baixa coesão e ausência de encapsulamento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Coesão mede a relação entre elementos dentro de um módulo; alta coesão é desejável. Acoplamento mede dependências entre módulos; baixo acoplamento facilita manutenção e testes isolados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "alta coesão e alto acoplamento.",
      "is_correct": false,
      "explanation": "Incorreta. alta coesão e alto acoplamento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Coesão mede a relação entre elementos dentro de um módulo; alta coesão é desejável. Acoplamento mede dependências entre módulos; baixo acoplamento facilita manutenção e testes isolados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "baixa coesão e alto acoplamento.",
      "is_correct": false,
      "explanation": "Incorreta. baixa coesão e alto acoplamento. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Coesão mede a relação entre elementos dentro de um módulo; alta coesão é desejável. Acoplamento mede dependências entre módulos; baixo acoplamento facilita manutenção e testes isolados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A equipe quer foco interno e independência externa: alta coesão e baixo acoplamento. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Coesão e acoplamento e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Coesão mede a relação entre elementos dentro de um módulo; alta coesão é desejável. Acoplamento mede dependências entre módulos; baixo acoplamento facilita manutenção e testes isolados.",
    "bank_approach": "A banca relaciona propriedades de projeto a consequências de manutenção. O detalhe decisivo é reconhecer a função de Coesão e acoplamento no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Coesão é interna; acoplamento é entre módulos. Em revisão, associe Coesão e acoplamento à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Bom projeto busca alta coesão e baixo acoplamento. Na revisão, retenha a definição de Coesão e acoplamento, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0041

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0041",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Princípios SOLID",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma classe reúne persistência, regras de negócio e geração de relatórios, tendo várias razões independentes para mudar. O princípio mais diretamente violado é",
  "alternatives": [
    {
      "id": "A",
      "text": "Single Responsibility Principle.",
      "is_correct": true,
      "explanation": "Correta. Single Responsibility Principle. SRP estabelece uma responsabilidade ou razão de mudança principal por classe. Reunir persistência, negócio e relatórios concentra responsabilidades distintas. OCP trata de extensão sem modificação; LSP de substituibilidade; DIP de dependência de abstrações. No cenário, a condição decisiva é: A classe muda por razões independentes, violando SRP."
    },
    {
      "id": "B",
      "text": "Open/Closed Principle.",
      "is_correct": false,
      "explanation": "Incorreta. Open/Closed Principle. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SRP estabelece uma responsabilidade ou razão de mudança principal por classe. Reunir persistência, negócio e relatórios concentra responsabilidades distintas. OCP trata de extensão sem modificação; LSP de substituibilidade; DIP de dependência de abstrações. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Dependency Inversion Principle.",
      "is_correct": false,
      "explanation": "Incorreta. Dependency Inversion Principle. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SRP estabelece uma responsabilidade ou razão de mudança principal por classe. Reunir persistência, negócio e relatórios concentra responsabilidades distintas. OCP trata de extensão sem modificação; LSP de substituibilidade; DIP de dependência de abstrações. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "Liskov Substitution Principle.",
      "is_correct": false,
      "explanation": "Incorreta. Liskov Substitution Principle. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SRP estabelece uma responsabilidade ou razão de mudança principal por classe. Reunir persistência, negócio e relatórios concentra responsabilidades distintas. OCP trata de extensão sem modificação; LSP de substituibilidade; DIP de dependência de abstrações. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A classe muda por razões independentes, violando SRP. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Princípios SOLID e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "SRP estabelece uma responsabilidade ou razão de mudança principal por classe. Reunir persistência, negócio e relatórios concentra responsabilidades distintas. OCP trata de extensão sem modificação; LSP de substituibilidade; DIP de dependência de abstrações.",
    "bank_approach": "A questão associa um problema de manutenção a um princípio SOLID. O detalhe decisivo é reconhecer a função de Princípios SOLID no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Várias razões de mudança indicam SRP. Em revisão, associe Princípios SOLID à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "SRP busca uma responsabilidade por classe; os demais princípios tratam extensão, substituição e dependência."
  }
}
```

## Questão 0042

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0042",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Requisitos funcionais",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A exigência 'o sistema deve permitir que o aluno cancele uma matrícula até a data-limite' é um requisito",
  "alternatives": [
    {
      "id": "A",
      "text": "de transição.",
      "is_correct": false,
      "explanation": "Incorreta. de transição. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos funcionais descrevem serviços e comportamentos oferecidos pelo sistema. Requisitos não funcionais definem qualidades ou restrições, como desempenho, segurança, disponibilidade e usabilidade. Cancelar matrícula é uma funcionalidade, ainda que contenha uma regra temporal. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "não funcional de desempenho.",
      "is_correct": false,
      "explanation": "Incorreta. não funcional de desempenho. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos funcionais descrevem serviços e comportamentos oferecidos pelo sistema. Requisitos não funcionais definem qualidades ou restrições, como desempenho, segurança, disponibilidade e usabilidade. Cancelar matrícula é uma funcionalidade, ainda que contenha uma regra temporal. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "de implementação.",
      "is_correct": false,
      "explanation": "Incorreta. de implementação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos funcionais descrevem serviços e comportamentos oferecidos pelo sistema. Requisitos não funcionais definem qualidades ou restrições, como desempenho, segurança, disponibilidade e usabilidade. Cancelar matrícula é uma funcionalidade, ainda que contenha uma regra temporal. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "funcional.",
      "is_correct": true,
      "explanation": "Correta. funcional. Requisitos funcionais descrevem serviços e comportamentos oferecidos pelo sistema. Requisitos não funcionais definem qualidades ou restrições, como desempenho, segurança, disponibilidade e usabilidade. Cancelar matrícula é uma funcionalidade, ainda que contenha uma regra temporal. No cenário, a condição decisiva é: A frase descreve uma ação que o sistema oferece ao aluno, portanto funcional."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A frase descreve uma ação que o sistema oferece ao aluno, portanto funcional. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Requisitos funcionais e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Requisitos funcionais descrevem serviços e comportamentos oferecidos pelo sistema. Requisitos não funcionais definem qualidades ou restrições, como desempenho, segurança, disponibilidade e usabilidade. Cancelar matrícula é uma funcionalidade, ainda que contenha uma regra temporal.",
    "bank_approach": "O item distingue serviço do sistema e qualidade de execução. O detalhe decisivo é reconhecer a função de Requisitos funcionais no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "O que o sistema faz = funcional; como deve operar = não funcional.",
    "review_summary": "Requisitos funcionais descrevem comportamentos e serviços. Na revisão, retenha a definição de Requisitos funcionais, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0043

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0043",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Requisitos não funcionais",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A exigência de que 95% das consultas sejam respondidas em até dois segundos especifica um requisito",
  "alternatives": [
    {
      "id": "A",
      "text": "de interface sem relação com qualidade.",
      "is_correct": false,
      "explanation": "Incorreta. de interface sem relação com qualidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desempenho é atributo de qualidade não funcional. Uma especificação verificável informa carga, percentil, ambiente e tempo. Metas mensuráveis são superiores a adjetivos vagos como 'rápido'. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "não funcional de desempenho.",
      "is_correct": true,
      "explanation": "Correta. não funcional de desempenho. Desempenho é atributo de qualidade não funcional. Uma especificação verificável informa carga, percentil, ambiente e tempo. Metas mensuráveis são superiores a adjetivos vagos como 'rápido'. No cenário, a condição decisiva é: A exigência estabelece meta temporal de resposta, portanto desempenho."
    },
    {
      "id": "C",
      "text": "de domínio sem critério mensurável.",
      "is_correct": false,
      "explanation": "Incorreta. de domínio sem critério mensurável. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desempenho é atributo de qualidade não funcional. Uma especificação verificável informa carga, percentil, ambiente e tempo. Metas mensuráveis são superiores a adjetivos vagos como 'rápido'. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "funcional de cadastro.",
      "is_correct": false,
      "explanation": "Incorreta. funcional de cadastro. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desempenho é atributo de qualidade não funcional. Uma especificação verificável informa carga, percentil, ambiente e tempo. Metas mensuráveis são superiores a adjetivos vagos como 'rápido'. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A exigência estabelece meta temporal de resposta, portanto desempenho. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Requisitos não funcionais e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Desempenho é atributo de qualidade não funcional. Uma especificação verificável informa carga, percentil, ambiente e tempo. Metas mensuráveis são superiores a adjetivos vagos como 'rápido'.",
    "bank_approach": "A questão cobra reconhecimento de atributo de qualidade e verificabilidade.",
    "study_tip": "Tempo de resposta é desempenho; especifique carga e percentil. Em revisão, associe Requisitos não funcionais à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Desempenho é requisito não funcional e deve ser mensurável. Na revisão, retenha a definição de Requisitos não funcionais, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0044

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0044",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Elicitação de requisitos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Representantes de várias áreas participam de sessão facilitada para discutir necessidades, negociar conflitos e produzir requisitos. A técnica é",
  "alternatives": [
    {
      "id": "A",
      "text": "inspeção de código.",
      "is_correct": false,
      "explanation": "Incorreta. inspeção de código. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Workshops/JAD reúnem usuários, especialistas e equipe para descobrir, discutir e negociar requisitos. Entrevistas, observação e questionários são outras técnicas de elicitação; inspeção de código e teste de carga pertencem a outras atividades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "análise de pontos de função.",
      "is_correct": false,
      "explanation": "Incorreta. análise de pontos de função. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Workshops/JAD reúnem usuários, especialistas e equipe para descobrir, discutir e negociar requisitos. Entrevistas, observação e questionários são outras técnicas de elicitação; inspeção de código e teste de carga pertencem a outras atividades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de carga.",
      "is_correct": false,
      "explanation": "Incorreta. teste de carga. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Workshops/JAD reúnem usuários, especialistas e equipe para descobrir, discutir e negociar requisitos. Entrevistas, observação e questionários são outras técnicas de elicitação; inspeção de código e teste de carga pertencem a outras atividades. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "workshop de requisitos/JAD.",
      "is_correct": true,
      "explanation": "Correta. workshop de requisitos/JAD. Workshops/JAD reúnem usuários, especialistas e equipe para descobrir, discutir e negociar requisitos. Entrevistas, observação e questionários são outras técnicas de elicitação; inspeção de código e teste de carga pertencem a outras atividades. No cenário, a condição decisiva é: A sessão colaborativa e facilitada com múltiplos interessados caracteriza workshop/JAD."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A sessão colaborativa e facilitada com múltiplos interessados caracteriza workshop/JAD. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Elicitação de requisitos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Workshops/JAD reúnem usuários, especialistas e equipe para descobrir, discutir e negociar requisitos. Entrevistas, observação e questionários são outras técnicas de elicitação; inspeção de código e teste de carga pertencem a outras atividades.",
    "bank_approach": "O cenário descreve técnica de elicitação pelo modo de interação. O detalhe decisivo é reconhecer a função de Elicitação de requisitos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Sessão conjunta de negociação de requisitos aponta para workshop/JAD.",
    "review_summary": "Workshops/JAD favorecem descoberta e consenso entre stakeholders. Na revisão, retenha a definição de Elicitação de requisitos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0045

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0045",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Qualidade da especificação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O requisito 'o sistema deve ser rápido e intuitivo' precisa ser aprimorado principalmente por meio de",
  "alternatives": [
    {
      "id": "A",
      "text": "conversão imediata em nomes de classes.",
      "is_correct": false,
      "explanation": "Incorreta. conversão imediata em nomes de classes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos devem ser claros e verificáveis. Termos vagos precisam ser operacionalizados: tempo de resposta sob carga definida, taxa de sucesso em tarefas, tempo de aprendizagem ou critérios de usabilidade. Requisitos não funcionais não devem ser descartados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "critérios mensuráveis e cenários verificáveis.",
      "is_correct": true,
      "explanation": "Correta. critérios mensuráveis e cenários verificáveis. Requisitos devem ser claros e verificáveis. Termos vagos precisam ser operacionalizados: tempo de resposta sob carga definida, taxa de sucesso em tarefas, tempo de aprendizagem ou critérios de usabilidade. Requisitos não funcionais não devem ser descartados. No cenário, a condição decisiva é: Transformar adjetivos em critérios observáveis permite validar objetivamente o requisito."
    },
    {
      "id": "C",
      "text": "remoção por ser requisito não funcional.",
      "is_correct": false,
      "explanation": "Incorreta. remoção por ser requisito não funcional. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos devem ser claros e verificáveis. Termos vagos precisam ser operacionalizados: tempo de resposta sob carga definida, taxa de sucesso em tarefas, tempo de aprendizagem ou critérios de usabilidade. Requisitos não funcionais não devem ser descartados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "manutenção dos adjetivos, suficientes para teste.",
      "is_correct": false,
      "explanation": "Incorreta. manutenção dos adjetivos, suficientes para teste. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Requisitos devem ser claros e verificáveis. Termos vagos precisam ser operacionalizados: tempo de resposta sob carga definida, taxa de sucesso em tarefas, tempo de aprendizagem ou critérios de usabilidade. Requisitos não funcionais não devem ser descartados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Transformar adjetivos em critérios observáveis permite validar objetivamente o requisito. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Qualidade da especificação e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Requisitos devem ser claros e verificáveis. Termos vagos precisam ser operacionalizados: tempo de resposta sob carga definida, taxa de sucesso em tarefas, tempo de aprendizagem ou critérios de usabilidade. Requisitos não funcionais não devem ser descartados.",
    "bank_approach": "A banca explora ambiguidade e verificabilidade da especificação. O detalhe decisivo é reconhecer a função de Qualidade da especificação no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Pergunte como será provado que o requisito foi atendido. Em revisão, associe Qualidade da especificação à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Requisitos verificáveis usam critérios objetivos; termos vagos devem ser operacionalizados."
  }
}
```

## Questão 0046

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0046",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Validação de requisitos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A validação de requisitos procura confirmar se",
  "alternatives": [
    {
      "id": "A",
      "text": "a linguagem de programação é moderna.",
      "is_correct": false,
      "explanation": "Incorreta. a linguagem de programação é moderna. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Validação pergunta se estamos construindo o produto certo, conforme necessidades reais. Verificação pergunta se o artefato atende à especificação. Revisões, protótipos e critérios de aceitação apoiam validação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "todos os comandos possuem cobertura.",
      "is_correct": false,
      "explanation": "Incorreta. todos os comandos possuem cobertura. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Validação pergunta se estamos construindo o produto certo, conforme necessidades reais. Verificação pergunta se o artefato atende à especificação. Revisões, protótipos e critérios de aceitação apoiam validação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "os requisitos representam necessidades e expectativas dos stakeholders.",
      "is_correct": true,
      "explanation": "Correta. os requisitos representam necessidades e expectativas dos stakeholders. Validação pergunta se estamos construindo o produto certo, conforme necessidades reais. Verificação pergunta se o artefato atende à especificação. Revisões, protótipos e critérios de aceitação apoiam validação. No cenário, a condição decisiva é: O objetivo é confirmar aderência dos requisitos às necessidades reais."
    },
    {
      "id": "D",
      "text": "o código está livre de erros de sintaxe.",
      "is_correct": false,
      "explanation": "Incorreta. o código está livre de erros de sintaxe. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Validação pergunta se estamos construindo o produto certo, conforme necessidades reais. Verificação pergunta se o artefato atende à especificação. Revisões, protótipos e critérios de aceitação apoiam validação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O objetivo é confirmar aderência dos requisitos às necessidades reais. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Validação de requisitos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Validação pergunta se estamos construindo o produto certo, conforme necessidades reais. Verificação pergunta se o artefato atende à especificação. Revisões, protótipos e critérios de aceitação apoiam validação.",
    "bank_approach": "A questão explora a distinção entre validação e verificação. O detalhe decisivo é reconhecer a função de Validação de requisitos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Validação = produto certo; verificação = produto construído corretamente.",
    "review_summary": "Validação confirma necessidades; verificação confere conformidade. Na revisão, retenha a definição de Validação de requisitos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0047

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0047",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Rastreabilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para identificar quais módulos e testes serão afetados pela alteração de um requisito, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "protótipo de interface.",
      "is_correct": false,
      "explanation": "Incorreta. protótipo de interface. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Rastreabilidade liga requisitos às origens e aos artefatos derivados, como modelos, componentes e testes. A matriz apoia análise de impacto, cobertura e identificação de lacunas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "diagrama de implantação isoladamente.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de implantação isoladamente. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Rastreabilidade liga requisitos às origens e aos artefatos derivados, como modelos, componentes e testes. A matriz apoia análise de impacto, cobertura e identificação de lacunas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "matriz de rastreabilidade.",
      "is_correct": true,
      "explanation": "Correta. matriz de rastreabilidade. Rastreabilidade liga requisitos às origens e aos artefatos derivados, como modelos, componentes e testes. A matriz apoia análise de impacto, cobertura e identificação de lacunas. No cenário, a condição decisiva é: A equipe precisa mapear vínculos entre requisito e artefatos, finalidade da rastreabilidade."
    },
    {
      "id": "D",
      "text": "teste exploratório sem registro.",
      "is_correct": false,
      "explanation": "Incorreta. teste exploratório sem registro. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Rastreabilidade liga requisitos às origens e aos artefatos derivados, como modelos, componentes e testes. A matriz apoia análise de impacto, cobertura e identificação de lacunas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A equipe precisa mapear vínculos entre requisito e artefatos, finalidade da rastreabilidade.",
    "theoretical_content": "Rastreabilidade liga requisitos às origens e aos artefatos derivados, como modelos, componentes e testes. A matriz apoia análise de impacto, cobertura e identificação de lacunas. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O item associa mudança de requisito a uma ferramenta de controle. O detalhe decisivo é reconhecer a função de Rastreabilidade no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Para saber o que será afetado por mudança, consulte a rastreabilidade.",
    "review_summary": "Rastreabilidade conecta requisitos, projeto, implementação e testes. Na revisão, retenha a definição de Rastreabilidade, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0048

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0048",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Priorização de requisitos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Com recursos limitados, requisitos são ordenados por valor, risco, urgência e dependências. Essa atividade é",
  "alternatives": [
    {
      "id": "A",
      "text": "normalização de dados.",
      "is_correct": false,
      "explanation": "Incorreta. normalização de dados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Priorização ordena requisitos conforme valor, risco, custo, urgência, dependências e obrigações. Técnicas como MoSCoW classificam Must, Should, Could e Won't. A prioridade pode evoluir com feedback. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "priorização de requisitos.",
      "is_correct": true,
      "explanation": "Correta. priorização de requisitos. Priorização ordena requisitos conforme valor, risco, custo, urgência, dependências e obrigações. Técnicas como MoSCoW classificam Must, Should, Could e Won't. A prioridade pode evoluir com feedback. No cenário, a condição decisiva é: A equipe ordena requisitos para orientar a implementação sob restrições."
    },
    {
      "id": "C",
      "text": "teste de aceitação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de aceitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Priorização ordena requisitos conforme valor, risco, custo, urgência, dependências e obrigações. Técnicas como MoSCoW classificam Must, Should, Could e Won't. A prioridade pode evoluir com feedback. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "gerência de versão.",
      "is_correct": false,
      "explanation": "Incorreta. gerência de versão. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Priorização ordena requisitos conforme valor, risco, custo, urgência, dependências e obrigações. Técnicas como MoSCoW classificam Must, Should, Could e Won't. A prioridade pode evoluir com feedback. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A equipe ordena requisitos para orientar a implementação sob restrições. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Priorização de requisitos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Priorização ordena requisitos conforme valor, risco, custo, urgência, dependências e obrigações. Técnicas como MoSCoW classificam Must, Should, Could e Won't. A prioridade pode evoluir com feedback.",
    "bank_approach": "A questão relaciona gestão de requisitos e decisão de escopo. O detalhe decisivo é reconhecer a função de Priorização de requisitos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Prioridade considera valor e risco, não apenas esforço. Em revisão, associe Priorização de requisitos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Priorização ordena requisitos para maximizar valor com recursos limitados."
  }
}
```

## Questão 0049

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0049",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Análise orientada a objetos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Na análise OO, classes de domínio devem representar",
  "alternatives": [
    {
      "id": "A",
      "text": "nomes de telas sem relação com o domínio.",
      "is_correct": false,
      "explanation": "Incorreta. nomes de telas sem relação com o domínio. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise OO modela conceitos do domínio por classes, atributos, responsabilidades e relacionamentos. O modelo deve refletir regras e necessidades, não antecipar detalhes físicos sem justificativa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "endereços IP e servidores físicos.",
      "is_correct": false,
      "explanation": "Incorreta. endereços IP e servidores físicos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise OO modela conceitos do domínio por classes, atributos, responsabilidades e relacionamentos. O modelo deve refletir regras e necessidades, não antecipar detalhes físicos sem justificativa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "conceitos relevantes do domínio, com atributos, responsabilidades e relacionamentos.",
      "is_correct": true,
      "explanation": "Correta. conceitos relevantes do domínio, com atributos, responsabilidades e relacionamentos. A análise OO modela conceitos do domínio por classes, atributos, responsabilidades e relacionamentos. O modelo deve refletir regras e necessidades, não antecipar detalhes físicos sem justificativa. No cenário, a condição decisiva é: O foco é identificar conceitos e relações do domínio."
    },
    {
      "id": "D",
      "text": "somente arquivos executáveis.",
      "is_correct": false,
      "explanation": "Incorreta. somente arquivos executáveis. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: A análise OO modela conceitos do domínio por classes, atributos, responsabilidades e relacionamentos. O modelo deve refletir regras e necessidades, não antecipar detalhes físicos sem justificativa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O foco é identificar conceitos e relações do domínio. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Análise orientada a objetos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "A análise OO modela conceitos do domínio por classes, atributos, responsabilidades e relacionamentos. O modelo deve refletir regras e necessidades, não antecipar detalhes físicos sem justificativa.",
    "bank_approach": "A questão diferencia análise conceitual de decisões físicas e de interface.",
    "study_tip": "Comece pelo vocabulário do domínio, não por telas ou tabelas. Em revisão, associe Análise orientada a objetos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Análise OO identifica conceitos e responsabilidades do domínio. Na revisão, retenha a definição de Análise orientada a objetos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0050

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0050",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Princípio Information Expert",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Ao atribuir uma responsabilidade a uma classe, o princípio Information Expert recomenda considerar",
  "alternatives": [
    {
      "id": "A",
      "text": "qual objeto possui as informações necessárias para realizar a operação.",
      "is_correct": true,
      "explanation": "Correta. qual objeto possui as informações necessárias para realizar a operação. Information Expert orienta atribuir uma responsabilidade ao objeto que possui as informações necessárias para executá-la. Isso tende a favorecer encapsulamento e coesão, embora outras restrições de projeto também devam ser consideradas. No cenário, a condição decisiva é: A classe que conhece os dados necessários é candidata natural à responsabilidade."
    },
    {
      "id": "B",
      "text": "qual módulo está no servidor mais rápido.",
      "is_correct": false,
      "explanation": "Incorreta. qual módulo está no servidor mais rápido. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Information Expert orienta atribuir uma responsabilidade ao objeto que possui as informações necessárias para executá-la. Isso tende a favorecer encapsulamento e coesão, embora outras restrições de projeto também devam ser consideradas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "qual classe tem o nome mais curto.",
      "is_correct": false,
      "explanation": "Incorreta. qual classe tem o nome mais curto. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Information Expert orienta atribuir uma responsabilidade ao objeto que possui as informações necessárias para executá-la. Isso tende a favorecer encapsulamento e coesão, embora outras restrições de projeto também devam ser consideradas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "qual arquivo possui mais linhas de código.",
      "is_correct": false,
      "explanation": "Incorreta. qual arquivo possui mais linhas de código. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Information Expert orienta atribuir uma responsabilidade ao objeto que possui as informações necessárias para executá-la. Isso tende a favorecer encapsulamento e coesão, embora outras restrições de projeto também devam ser consideradas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A classe que conhece os dados necessários é candidata natural à responsabilidade. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Princípio Information Expert e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Information Expert orienta atribuir uma responsabilidade ao objeto que possui as informações necessárias para executá-la. Isso tende a favorecer encapsulamento e coesão, embora outras restrições de projeto também devam ser consideradas.",
    "bank_approach": "A banca pode cobrar princípios de atribuição de responsabilidades por meio de cenários.",
    "study_tip": "Pergunte quem conhece os dados necessários para executar a operação.",
    "review_summary": "Information Expert atribui responsabilidade ao objeto que detém as informações relevantes."
  }
}
```

## Questão 0051

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0051",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "DFD",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Os elementos fundamentais de um diagrama de fluxo de dados são",
  "alternatives": [
    {
      "id": "A",
      "text": "atores, casos de uso e mensagens.",
      "is_correct": false,
      "explanation": "Incorreta. atores, casos de uso e mensagens. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: DFD representa dados que entram, são transformados, armazenados e saem. Seus elementos são processos, fluxos de dados, depósitos e entidades externas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "componentes, portas e nós de implantação.",
      "is_correct": false,
      "explanation": "Incorreta. componentes, portas e nós de implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: DFD representa dados que entram, são transformados, armazenados e saem. Seus elementos são processos, fluxos de dados, depósitos e entidades externas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "processos, fluxos, depósitos de dados e entidades externas.",
      "is_correct": true,
      "explanation": "Correta. processos, fluxos, depósitos de dados e entidades externas. DFD representa dados que entram, são transformados, armazenados e saem. Seus elementos são processos, fluxos de dados, depósitos e entidades externas. No cenário, a condição decisiva é: A alternativa reúne os quatro elementos de DFD."
    },
    {
      "id": "D",
      "text": "classes, interfaces, herança e polimorfismo.",
      "is_correct": false,
      "explanation": "Incorreta. classes, interfaces, herança e polimorfismo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: DFD representa dados que entram, são transformados, armazenados e saem. Seus elementos são processos, fluxos de dados, depósitos e entidades externas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A alternativa reúne os quatro elementos de DFD. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de DFD e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "DFD representa dados que entram, são transformados, armazenados e saem. Seus elementos são processos, fluxos de dados, depósitos e entidades externas. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão cobra leitura de artefato clássico da análise estruturada. O detalhe decisivo é reconhecer a função de DFD no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "DFD: processo, fluxo, depósito e entidade externa. Em revisão, associe DFD à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "DFD modela movimentação e transformação de dados. Na revisão, retenha a definição de DFD, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0052

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0052",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Diagrama de estrutura",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A representação hierárquica da decomposição funcional de um sistema em módulos é feita por",
  "alternatives": [
    {
      "id": "A",
      "text": "diagrama de sequência.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de sequência. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de estrutura mostra módulos, hierarquia de chamadas e dados de comunicação, sendo associado ao projeto estruturado. Sequência, estados e implantação são diagramas UML com finalidades diferentes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "diagrama de estados.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de estados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de estrutura mostra módulos, hierarquia de chamadas e dados de comunicação, sendo associado ao projeto estruturado. Sequência, estados e implantação são diagramas UML com finalidades diferentes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "diagrama de estrutura.",
      "is_correct": true,
      "explanation": "Correta. diagrama de estrutura. Diagrama de estrutura mostra módulos, hierarquia de chamadas e dados de comunicação, sendo associado ao projeto estruturado. Sequência, estados e implantação são diagramas UML com finalidades diferentes. No cenário, a condição decisiva é: A pergunta trata de decomposição modular hierárquica."
    },
    {
      "id": "D",
      "text": "diagrama de implantação.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de estrutura mostra módulos, hierarquia de chamadas e dados de comunicação, sendo associado ao projeto estruturado. Sequência, estados e implantação são diagramas UML com finalidades diferentes. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A pergunta trata de decomposição modular hierárquica. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de estrutura e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagrama de estrutura mostra módulos, hierarquia de chamadas e dados de comunicação, sendo associado ao projeto estruturado. Sequência, estados e implantação são diagramas UML com finalidades diferentes.",
    "bank_approach": "O item distingue artefatos estruturados e diagramas UML. O detalhe decisivo é reconhecer a função de Diagrama de estrutura no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Hierarquia de módulos e chamadas indica diagrama de estrutura. Em revisão, associe Diagrama de estrutura à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Diagrama de estrutura representa decomposição modular. Na revisão, retenha a definição de Diagrama de estrutura, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0053

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0053",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Refatoração",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Renomear métodos e reorganizar classes para melhorar legibilidade, preservando o comportamento observável, é",
  "alternatives": [
    {
      "id": "A",
      "text": "implantação.",
      "is_correct": false,
      "explanation": "Incorreta. implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Refatoração transforma a estrutura interna sem alterar o comportamento observável, melhorando legibilidade, modularidade e manutenibilidade. Testes automatizados ajudam a confirmar preservação do comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "elicitação.",
      "is_correct": false,
      "explanation": "Incorreta. elicitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Refatoração transforma a estrutura interna sem alterar o comportamento observável, melhorando legibilidade, modularidade e manutenibilidade. Testes automatizados ajudam a confirmar preservação do comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de aceitação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de aceitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Refatoração transforma a estrutura interna sem alterar o comportamento observável, melhorando legibilidade, modularidade e manutenibilidade. Testes automatizados ajudam a confirmar preservação do comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "refatoração.",
      "is_correct": true,
      "explanation": "Correta. refatoração. Refatoração transforma a estrutura interna sem alterar o comportamento observável, melhorando legibilidade, modularidade e manutenibilidade. Testes automatizados ajudam a confirmar preservação do comportamento. No cenário, a condição decisiva é: A estrutura interna melhora sem mudança funcional, caracterizando refatoração."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A estrutura interna melhora sem mudança funcional, caracterizando refatoração. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Refatoração e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Refatoração transforma a estrutura interna sem alterar o comportamento observável, melhorando legibilidade, modularidade e manutenibilidade. Testes automatizados ajudam a confirmar preservação do comportamento.",
    "bank_approach": "A questão diferencia melhoria interna de adição de funcionalidade. O detalhe decisivo é reconhecer a função de Refatoração no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Mesmo comportamento e melhor estrutura = refatoração. Em revisão, associe Refatoração à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Refatoração melhora o design interno preservando comportamento. Na revisão, retenha a definição de Refatoração, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0054

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0054",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Gestão de configuração",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Identificar versões de código, documentos e componentes, controlar alterações e reconstruir uma entrega são atividades de",
  "alternatives": [
    {
      "id": "A",
      "text": "gerência de configuração de software.",
      "is_correct": true,
      "explanation": "Correta. gerência de configuração de software. Gerência de configuração identifica itens, controla versões e mudanças, registra status e audita baselines. Busca integridade, rastreabilidade e reprodutibilidade de releases; não se limita a armazenar arquivos. No cenário, a condição decisiva é: O cenário descreve identificação, versionamento e controle de mudanças de artefatos."
    },
    {
      "id": "B",
      "text": "análise de pontos de função.",
      "is_correct": false,
      "explanation": "Incorreta. análise de pontos de função. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Gerência de configuração identifica itens, controla versões e mudanças, registra status e audita baselines. Busca integridade, rastreabilidade e reprodutibilidade de releases; não se limita a armazenar arquivos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "engenharia de usabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. engenharia de usabilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Gerência de configuração identifica itens, controla versões e mudanças, registra status e audita baselines. Busca integridade, rastreabilidade e reprodutibilidade de releases; não se limita a armazenar arquivos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "gestão de incidentes exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. gestão de incidentes exclusivamente. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Gerência de configuração identifica itens, controla versões e mudanças, registra status e audita baselines. Busca integridade, rastreabilidade e reprodutibilidade de releases; não se limita a armazenar arquivos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O cenário descreve identificação, versionamento e controle de mudanças de artefatos. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Gestão de configuração e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Gerência de configuração identifica itens, controla versões e mudanças, registra status e audita baselines. Busca integridade, rastreabilidade e reprodutibilidade de releases; não se limita a armazenar arquivos.",
    "bank_approach": "A banca associa integridade e rastreabilidade a uma disciplina específica. O detalhe decisivo é reconhecer a função de Gestão de configuração no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Baseline, versão e item de configuração são pistas de GCS. Em revisão, associe Gestão de configuração à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "GCS controla identificação, versões, mudanças, status e auditoria. Na revisão, retenha a definição de Gestão de configuração, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0055

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0055",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Itens de configuração",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um documento de requisitos aprovado e submetido a controle formal de versões deve ser considerado",
  "alternatives": [
    {
      "id": "A",
      "text": "incidente de produção.",
      "is_correct": false,
      "explanation": "Incorreta. incidente de produção. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Itens de configuração podem incluir código, requisitos, modelos, documentos, scripts, bibliotecas e ambientes designados para controle. Baseline é conjunto aprovado de itens que serve como referência controlada. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "artefato descartável.",
      "is_correct": false,
      "explanation": "Incorreta. artefato descartável. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Itens de configuração podem incluir código, requisitos, modelos, documentos, scripts, bibliotecas e ambientes designados para controle. Baseline é conjunto aprovado de itens que serve como referência controlada. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "métrica de qualidade.",
      "is_correct": false,
      "explanation": "Incorreta. métrica de qualidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Itens de configuração podem incluir código, requisitos, modelos, documentos, scripts, bibliotecas e ambientes designados para controle. Baseline é conjunto aprovado de itens que serve como referência controlada. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "item de configuração.",
      "is_correct": true,
      "explanation": "Correta. item de configuração. Itens de configuração podem incluir código, requisitos, modelos, documentos, scripts, bibliotecas e ambientes designados para controle. Baseline é conjunto aprovado de itens que serve como referência controlada. No cenário, a condição decisiva é: O documento versionado e aprovado está submetido à gestão de configuração."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O documento versionado e aprovado está submetido à gestão de configuração. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Itens de configuração e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Itens de configuração podem incluir código, requisitos, modelos, documentos, scripts, bibliotecas e ambientes designados para controle. Baseline é conjunto aprovado de itens que serve como referência controlada.",
    "bank_approach": "O item verifica que GCS não se restringe ao código-fonte. O detalhe decisivo é reconhecer a função de Itens de configuração no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Requisitos e modelos também podem ser itens de configuração. Em revisão, associe Itens de configuração à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Item de configuração é artefato submetido a identificação e controle formal."
  }
}
```

## Questão 0056

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0056",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Controle de mudanças",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma alteração em uma baseline deve ser registrada, ter impacto avaliado, ser autorizada e acompanhada até sua incorporação. Esse fluxo é",
  "alternatives": [
    {
      "id": "A",
      "text": "planejamento de capacidade.",
      "is_correct": false,
      "explanation": "Incorreta. planejamento de capacidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Controle de mudanças inclui solicitação, análise de impacto, avaliação de custo/risco, decisão, implementação e verificação. Preserva integridade das baselines e evita alterações não autorizadas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "teste operacional.",
      "is_correct": false,
      "explanation": "Incorreta. teste operacional. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Controle de mudanças inclui solicitação, análise de impacto, avaliação de custo/risco, decisão, implementação e verificação. Preserva integridade das baselines e evita alterações não autorizadas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "controle de mudanças.",
      "is_correct": true,
      "explanation": "Correta. controle de mudanças. Controle de mudanças inclui solicitação, análise de impacto, avaliação de custo/risco, decisão, implementação e verificação. Preserva integridade das baselines e evita alterações não autorizadas. No cenário, a condição decisiva é: O fluxo descrito é o processo formal de controle de mudanças."
    },
    {
      "id": "D",
      "text": "teste de usabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. teste de usabilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Controle de mudanças inclui solicitação, análise de impacto, avaliação de custo/risco, decisão, implementação e verificação. Preserva integridade das baselines e evita alterações não autorizadas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O fluxo descrito é o processo formal de controle de mudanças. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Controle de mudanças e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Controle de mudanças inclui solicitação, análise de impacto, avaliação de custo/risco, decisão, implementação e verificação. Preserva integridade das baselines e evita alterações não autorizadas.",
    "bank_approach": "A questão cobra a sequência de governança de alteração. O detalhe decisivo é reconhecer a função de Controle de mudanças no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Mudança controlada exige registro, impacto, decisão, implementação e verificação.",
    "review_summary": "Controle de mudanças preserva integridade das baselines. Na revisão, retenha a definição de Controle de mudanças, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0057

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0057",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Integração contínua",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Integrar frequentemente alterações ao repositório compartilhado e executar automaticamente build e testes caracteriza",
  "alternatives": [
    {
      "id": "A",
      "text": "integração contínua (CI).",
      "is_correct": true,
      "explanation": "Correta. integração contínua (CI). CI integra mudanças frequentemente e executa build/testes automatizados para detectar falhas cedo. Entrega contínua mantém releases prontas; implantação contínua automatiza publicação em produção. CI não implica necessariamente deploy automático. No cenário, a condição decisiva é: Integração frequente com build e testes automatizados é CI."
    },
    {
      "id": "B",
      "text": "implantação contínua obrigatória.",
      "is_correct": false,
      "explanation": "Incorreta. implantação contínua obrigatória. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CI integra mudanças frequentemente e executa build/testes automatizados para detectar falhas cedo. Entrega contínua mantém releases prontas; implantação contínua automatiza publicação em produção. CI não implica necessariamente deploy automático. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de aceitação manual.",
      "is_correct": false,
      "explanation": "Incorreta. teste de aceitação manual. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CI integra mudanças frequentemente e executa build/testes automatizados para detectar falhas cedo. Entrega contínua mantém releases prontas; implantação contínua automatiza publicação em produção. CI não implica necessariamente deploy automático. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "gerência de requisitos.",
      "is_correct": false,
      "explanation": "Incorreta. gerência de requisitos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CI integra mudanças frequentemente e executa build/testes automatizados para detectar falhas cedo. Entrega contínua mantém releases prontas; implantação contínua automatiza publicação em produção. CI não implica necessariamente deploy automático. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "Integração frequente com build e testes automatizados é CI. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Integração contínua e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "CI integra mudanças frequentemente e executa build/testes automatizados para detectar falhas cedo. Entrega contínua mantém releases prontas; implantação contínua automatiza publicação em produção. CI não implica necessariamente deploy automático.",
    "bank_approach": "A banca pode diferenciar CI, entrega contínua e implantação contínua. O detalhe decisivo é reconhecer a função de Integração contínua no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "CI valida integração; deploy automático é prática distinta. Em revisão, associe Integração contínua à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "CI integra e testa frequentemente; entrega prepara release; implantação publica automaticamente."
  }
}
```

## Questão 0058

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0058",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Teste unitário",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um teste que verifica isoladamente uma função ou método é classificado como",
  "alternatives": [
    {
      "id": "A",
      "text": "teste unitário.",
      "is_correct": true,
      "explanation": "Correta. teste unitário. Teste unitário verifica uma unidade pequena e isolada, como função, método ou classe. Teste de integração verifica colaboração entre módulos; sistema avalia produto integrado; aceitação verifica necessidades de usuário/negócio. No cenário, a condição decisiva é: O escopo é uma função ou método isolado."
    },
    {
      "id": "B",
      "text": "teste de sistema.",
      "is_correct": false,
      "explanation": "Incorreta. teste de sistema. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste unitário verifica uma unidade pequena e isolada, como função, método ou classe. Teste de integração verifica colaboração entre módulos; sistema avalia produto integrado; aceitação verifica necessidades de usuário/negócio. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de aceitação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de aceitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste unitário verifica uma unidade pequena e isolada, como função, método ou classe. Teste de integração verifica colaboração entre módulos; sistema avalia produto integrado; aceitação verifica necessidades de usuário/negócio. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "teste de recuperação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de recuperação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste unitário verifica uma unidade pequena e isolada, como função, método ou classe. Teste de integração verifica colaboração entre módulos; sistema avalia produto integrado; aceitação verifica necessidades de usuário/negócio. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O escopo é uma função ou método isolado. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Teste unitário e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Teste unitário verifica uma unidade pequena e isolada, como função, método ou classe. Teste de integração verifica colaboração entre módulos; sistema avalia produto integrado; aceitação verifica necessidades de usuário/negócio.",
    "bank_approach": "A banca diferencia níveis de teste pelo objeto avaliado. O detalhe decisivo é reconhecer a função de Teste unitário no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Unidade isolada = unitário; interação = integração; produto completo = sistema.",
    "review_summary": "Teste unitário avalia unidade isolada. Na revisão, retenha a definição de Teste unitário, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0059

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0059",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Teste de integração",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Após testar módulos isolados, a equipe verifica se autenticação e matrícula trocam dados corretamente. Trata-se de teste",
  "alternatives": [
    {
      "id": "A",
      "text": "de usabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. de usabilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de integração verifica interfaces, contratos e comunicação entre componentes. Pode seguir estratégias top-down, bottom-up ou incremental. Unitário isola; aceitação verifica adequação ao negócio; usabilidade avalia facilidade de uso. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "de aceitação.",
      "is_correct": false,
      "explanation": "Incorreta. de aceitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de integração verifica interfaces, contratos e comunicação entre componentes. Pode seguir estratégias top-down, bottom-up ou incremental. Unitário isola; aceitação verifica adequação ao negócio; usabilidade avalia facilidade de uso. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "de integração.",
      "is_correct": true,
      "explanation": "Correta. de integração. Teste de integração verifica interfaces, contratos e comunicação entre componentes. Pode seguir estratégias top-down, bottom-up ou incremental. Unitário isola; aceitação verifica adequação ao negócio; usabilidade avalia facilidade de uso. No cenário, a condição decisiva é: O foco é a interação e troca de dados entre módulos."
    },
    {
      "id": "D",
      "text": "unitário.",
      "is_correct": false,
      "explanation": "Incorreta. unitário. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de integração verifica interfaces, contratos e comunicação entre componentes. Pode seguir estratégias top-down, bottom-up ou incremental. Unitário isola; aceitação verifica adequação ao negócio; usabilidade avalia facilidade de uso. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O foco é a interação e troca de dados entre módulos. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Teste de integração e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Teste de integração verifica interfaces, contratos e comunicação entre componentes. Pode seguir estratégias top-down, bottom-up ou incremental. Unitário isola; aceitação verifica adequação ao negócio; usabilidade avalia facilidade de uso.",
    "bank_approach": "A expressão 'entre módulos' indica integração. O detalhe decisivo é reconhecer a função de Teste de integração no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Defeito na interação entre componentes é investigado por teste de integração.",
    "review_summary": "Integração verifica colaboração entre unidades. Na revisão, retenha a definição de Teste de integração, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0060

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0060",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Teste de sistema",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A avaliação do produto integrado completo contra requisitos funcionais e não funcionais é",
  "alternatives": [
    {
      "id": "A",
      "text": "teste de sistema.",
      "is_correct": true,
      "explanation": "Correta. teste de sistema. Teste de sistema avalia o produto integrado como um todo e pode incluir desempenho, segurança, recuperação e funcionalidades. Não se limita a uma unidade ou revisão estática. No cenário, a condição decisiva é: O objeto avaliado é o sistema completo."
    },
    {
      "id": "B",
      "text": "teste de componente isolado.",
      "is_correct": false,
      "explanation": "Incorreta. teste de componente isolado. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de sistema avalia o produto integrado como um todo e pode incluir desempenho, segurança, recuperação e funcionalidades. Não se limita a uma unidade ou revisão estática. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste unitário.",
      "is_correct": false,
      "explanation": "Incorreta. teste unitário. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de sistema avalia o produto integrado como um todo e pode incluir desempenho, segurança, recuperação e funcionalidades. Não se limita a uma unidade ou revisão estática. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "revisão de código.",
      "is_correct": false,
      "explanation": "Incorreta. revisão de código. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de sistema avalia o produto integrado como um todo e pode incluir desempenho, segurança, recuperação e funcionalidades. Não se limita a uma unidade ou revisão estática. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O objeto avaliado é o sistema completo. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Teste de sistema e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Teste de sistema avalia o produto integrado como um todo e pode incluir desempenho, segurança, recuperação e funcionalidades. Não se limita a uma unidade ou revisão estática. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão cobra escopo dos níveis de teste. O detalhe decisivo é reconhecer a função de Teste de sistema no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Produto integrado completo indica teste de sistema. Em revisão, associe Teste de sistema à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Teste de sistema verifica o produto integrado contra requisitos. Na revisão, retenha a definição de Teste de sistema, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0061

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0061",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Teste de aceitação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Representantes do setor acadêmico executam cenários reais para confirmar se o sistema atende às necessidades acordadas. Isso é",
  "alternatives": [
    {
      "id": "A",
      "text": "teste unitário.",
      "is_correct": false,
      "explanation": "Incorreta. teste unitário. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de aceitação verifica critérios e necessidades de usuários/clientes, podendo ser operacional, contratual, regulatório ou UAT. É distinto dos testes técnicos de unidade e integração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "teste de aceitação.",
      "is_correct": true,
      "explanation": "Correta. teste de aceitação. Teste de aceitação verifica critérios e necessidades de usuários/clientes, podendo ser operacional, contratual, regulatório ou UAT. É distinto dos testes técnicos de unidade e integração. No cenário, a condição decisiva é: Usuários validam a adequação do produto às necessidades acordadas."
    },
    {
      "id": "C",
      "text": "teste de estresse exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. teste de estresse exclusivamente. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de aceitação verifica critérios e necessidades de usuários/clientes, podendo ser operacional, contratual, regulatório ou UAT. É distinto dos testes técnicos de unidade e integração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "teste de mutação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de mutação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de aceitação verifica critérios e necessidades de usuários/clientes, podendo ser operacional, contratual, regulatório ou UAT. É distinto dos testes técnicos de unidade e integração. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "Usuários validam a adequação do produto às necessidades acordadas. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Teste de aceitação e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Teste de aceitação verifica critérios e necessidades de usuários/clientes, podendo ser operacional, contratual, regulatório ou UAT. É distinto dos testes técnicos de unidade e integração.",
    "bank_approach": "O cenário envolve validação pelo negócio antes da entrega. O detalhe decisivo é reconhecer a função de Teste de aceitação no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Critérios de negócio e usuários apontam para aceitação. Em revisão, associe Teste de aceitação à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Aceitação confirma adequação às necessidades e critérios acordados. Na revisão, retenha a definição de Teste de aceitação, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0062

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0062",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Teste de regressão",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Após corrigir um defeito, a equipe executa novamente testes aprovados para detectar efeitos colaterais. Trata-se de",
  "alternatives": [
    {
      "id": "A",
      "text": "teste exploratório inicial.",
      "is_correct": false,
      "explanation": "Incorreta. teste exploratório inicial. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de regressão reexecuta testes relevantes após mudanças para identificar defeitos introduzidos em funcionalidades existentes. A seleção pode considerar análise de impacto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "teste de instalação apenas.",
      "is_correct": false,
      "explanation": "Incorreta. teste de instalação apenas. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de regressão reexecuta testes relevantes após mudanças para identificar defeitos introduzidos em funcionalidades existentes. A seleção pode considerar análise de impacto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de carga.",
      "is_correct": false,
      "explanation": "Incorreta. teste de carga. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Teste de regressão reexecuta testes relevantes após mudanças para identificar defeitos introduzidos em funcionalidades existentes. A seleção pode considerar análise de impacto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "teste de regressão.",
      "is_correct": true,
      "explanation": "Correta. teste de regressão. Teste de regressão reexecuta testes relevantes após mudanças para identificar defeitos introduzidos em funcionalidades existentes. A seleção pode considerar análise de impacto. No cenário, a condição decisiva é: A intenção é garantir que a correção não quebrou funcionalidades anteriores."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A intenção é garantir que a correção não quebrou funcionalidades anteriores. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Teste de regressão e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Teste de regressão reexecuta testes relevantes após mudanças para identificar defeitos introduzidos em funcionalidades existentes. A seleção pode considerar análise de impacto. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão relaciona mudança de software à necessidade de revalidar comportamento existente.",
    "study_tip": "Depois de alteração, reexecutar testes para procurar efeitos colaterais é regressão.",
    "review_summary": "Regressão verifica que mudanças não degradaram funcionalidades existentes."
  }
}
```

## Questão 0063

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0063",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Caixa-preta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Casos de teste derivados de entradas, saídas e regras especificadas, sem examinar o código, seguem a abordagem",
  "alternatives": [
    {
      "id": "A",
      "text": "caixa-preta.",
      "is_correct": true,
      "explanation": "Correta. caixa-preta. Caixa-preta testa comportamento especificado sem conhecimento da estrutura interna. Técnicas incluem equivalência, valor-limite e tabelas de decisão. Caixa-branca utiliza estrutura interna, caminhos e cobertura. No cenário, a condição decisiva é: Os testes derivam da especificação externa, portanto caixa-preta."
    },
    {
      "id": "B",
      "text": "caixa-branca.",
      "is_correct": false,
      "explanation": "Incorreta. caixa-branca. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-preta testa comportamento especificado sem conhecimento da estrutura interna. Técnicas incluem equivalência, valor-limite e tabelas de decisão. Caixa-branca utiliza estrutura interna, caminhos e cobertura. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "inspeção de arquitetura.",
      "is_correct": false,
      "explanation": "Incorreta. inspeção de arquitetura. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-preta testa comportamento especificado sem conhecimento da estrutura interna. Técnicas incluem equivalência, valor-limite e tabelas de decisão. Caixa-branca utiliza estrutura interna, caminhos e cobertura. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "análise estática de fluxo.",
      "is_correct": false,
      "explanation": "Incorreta. análise estática de fluxo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-preta testa comportamento especificado sem conhecimento da estrutura interna. Técnicas incluem equivalência, valor-limite e tabelas de decisão. Caixa-branca utiliza estrutura interna, caminhos e cobertura. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "Os testes derivam da especificação externa, portanto caixa-preta. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Caixa-preta e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Caixa-preta testa comportamento especificado sem conhecimento da estrutura interna. Técnicas incluem equivalência, valor-limite e tabelas de decisão. Caixa-branca utiliza estrutura interna, caminhos e cobertura.",
    "bank_approach": "O item contrapõe comportamento externo e estrutura interna. O detalhe decisivo é reconhecer a função de Caixa-preta no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Sem examinar o código, pense em caixa-preta. Em revisão, associe Caixa-preta à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Caixa-preta testa entradas e saídas; caixa-branca utiliza estrutura interna."
  }
}
```

## Questão 0064

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0064",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Caixa-branca",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A equipe mede cobertura de instruções, decisões e caminhos de um método para orientar os testes. A abordagem é",
  "alternatives": [
    {
      "id": "A",
      "text": "usabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. usabilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-branca utiliza a estrutura interna do programa. Cobertura de instruções mede comandos executados; cobertura de decisões verifica branches; cobertura de caminhos considera sequências. Cobertura não prova ausência de defeitos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "aceitação operacional.",
      "is_correct": false,
      "explanation": "Incorreta. aceitação operacional. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-branca utiliza a estrutura interna do programa. Cobertura de instruções mede comandos executados; cobertura de decisões verifica branches; cobertura de caminhos considera sequências. Cobertura não prova ausência de defeitos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "caixa-preta.",
      "is_correct": false,
      "explanation": "Incorreta. caixa-preta. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caixa-branca utiliza a estrutura interna do programa. Cobertura de instruções mede comandos executados; cobertura de decisões verifica branches; cobertura de caminhos considera sequências. Cobertura não prova ausência de defeitos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "caixa-branca.",
      "is_correct": true,
      "explanation": "Correta. caixa-branca. Caixa-branca utiliza a estrutura interna do programa. Cobertura de instruções mede comandos executados; cobertura de decisões verifica branches; cobertura de caminhos considera sequências. Cobertura não prova ausência de defeitos. No cenário, a condição decisiva é: Métricas de instruções, decisões e caminhos dependem da estrutura do código."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "Métricas de instruções, decisões e caminhos dependem da estrutura do código. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Caixa-branca e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Caixa-branca utiliza a estrutura interna do programa. Cobertura de instruções mede comandos executados; cobertura de decisões verifica branches; cobertura de caminhos considera sequências. Cobertura não prova ausência de defeitos.",
    "bank_approach": "A banca usa métricas de cobertura como indício de teste estrutural. O detalhe decisivo é reconhecer a função de Caixa-branca no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Branch, caminho e instrução remetem à caixa-branca. Em revisão, associe Caixa-branca à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Caixa-branca usa estrutura interna; cobertura não garante correção. Na revisão, retenha a definição de Caixa-branca, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0065

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0065",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Valor-limite",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para uma função que aceita idade entre 18 e 65 anos, a análise de valor-limite recomenda testar",
  "alternatives": [
    {
      "id": "A",
      "text": "apenas valores médios.",
      "is_correct": false,
      "explanation": "Incorreta. apenas valores médios. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Análise de valor-limite testa valores imediatamente abaixo, nos limites e acima deles, pois erros são comuns em comparações. Para intervalo inclusivo de 18 a 65, testar 17/18/19 e 64/65/66 exercita fronteiras. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "somente 18 e 65.",
      "is_correct": false,
      "explanation": "Incorreta. somente 18 e 65. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Análise de valor-limite testa valores imediatamente abaixo, nos limites e acima deles, pois erros são comuns em comparações. Para intervalo inclusivo de 18 a 65, testar 17/18/19 e 64/65/66 exercita fronteiras. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "17, 18, 19, 64, 65 e 66.",
      "is_correct": true,
      "explanation": "Correta. 17, 18, 19, 64, 65 e 66. Análise de valor-limite testa valores imediatamente abaixo, nos limites e acima deles, pois erros são comuns em comparações. Para intervalo inclusivo de 18 a 65, testar 17/18/19 e 64/65/66 exercita fronteiras. No cenário, a condição decisiva é: Os valores adjacentes aos limites permitem identificar erros de fronteira."
    },
    {
      "id": "D",
      "text": "valores aleatórios sem relação com fronteiras.",
      "is_correct": false,
      "explanation": "Incorreta. valores aleatórios sem relação com fronteiras. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Análise de valor-limite testa valores imediatamente abaixo, nos limites e acima deles, pois erros são comuns em comparações. Para intervalo inclusivo de 18 a 65, testar 17/18/19 e 64/65/66 exercita fronteiras. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Os valores adjacentes aos limites permitem identificar erros de fronteira. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Valor-limite e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Análise de valor-limite testa valores imediatamente abaixo, nos limites e acima deles, pois erros são comuns em comparações. Para intervalo inclusivo de 18 a 65, testar 17/18/19 e 64/65/66 exercita fronteiras.",
    "bank_approach": "O enunciado exige aplicar uma técnica clássica de teste funcional. O detalhe decisivo é reconhecer a função de Valor-limite no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Teste mínimo-1, mínimo, mínimo+1 e máximo-1, máximo, máximo+1. Em revisão, associe Valor-limite à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Valor-limite concentra testes nas fronteiras das classes. Na revisão, retenha a definição de Valor-limite, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0066

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0066",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Particionamento de equivalência",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Dividir entradas em classes válidas e inválidas das quais se espera comportamento semelhante é a técnica de",
  "alternatives": [
    {
      "id": "A",
      "text": "teste de mutação.",
      "is_correct": false,
      "explanation": "Incorreta. teste de mutação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Particionamento de equivalência divide o domínio em classes que devem produzir comportamento equivalente e seleciona representantes para reduzir casos de teste. É frequentemente combinado com análise de valor-limite. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "teste de estresse.",
      "is_correct": false,
      "explanation": "Incorreta. teste de estresse. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Particionamento de equivalência divide o domínio em classes que devem produzir comportamento equivalente e seleciona representantes para reduzir casos de teste. É frequentemente combinado com análise de valor-limite. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "particionamento de equivalência.",
      "is_correct": true,
      "explanation": "Correta. particionamento de equivalência. Particionamento de equivalência divide o domínio em classes que devem produzir comportamento equivalente e seleciona representantes para reduzir casos de teste. É frequentemente combinado com análise de valor-limite. No cenário, a condição decisiva é: A divisão em classes e seleção de representantes define particionamento de equivalência."
    },
    {
      "id": "D",
      "text": "pontos de função.",
      "is_correct": false,
      "explanation": "Incorreta. pontos de função. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Particionamento de equivalência divide o domínio em classes que devem produzir comportamento equivalente e seleciona representantes para reduzir casos de teste. É frequentemente combinado com análise de valor-limite. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A divisão em classes e seleção de representantes define particionamento de equivalência. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Particionamento de equivalência e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Particionamento de equivalência divide o domínio em classes que devem produzir comportamento equivalente e seleciona representantes para reduzir casos de teste. É frequentemente combinado com análise de valor-limite.",
    "bank_approach": "A questão cobra a finalidade de reduzir casos mantendo representatividade. O detalhe decisivo é reconhecer a função de Particionamento de equivalência no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Classes com comportamento esperado semelhante indicam equivalência.",
    "review_summary": "Particionamento reduz testes por representantes de classes válidas e inválidas."
  }
}
```

## Questão 0067

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0067",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Automação de testes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma suíte automatizada executada a cada commit oferece principalmente",
  "alternatives": [
    {
      "id": "A",
      "text": "substituição de toda revisão de código.",
      "is_correct": false,
      "explanation": "Incorreta. substituição de toda revisão de código. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Automação oferece execução repetível e rápida, detectando regressões e dando feedback contínuo. Não garante ausência total de defeitos nem substitui revisão, exploração ou aceitação; depende da qualidade dos casos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "feedback rápido e repetível sobre regressões.",
      "is_correct": true,
      "explanation": "Correta. feedback rápido e repetível sobre regressões. Automação oferece execução repetível e rápida, detectando regressões e dando feedback contínuo. Não garante ausência total de defeitos nem substitui revisão, exploração ou aceitação; depende da qualidade dos casos. No cenário, a condição decisiva é: O benefício real é feedback rápido e repetível."
    },
    {
      "id": "C",
      "text": "garantia absoluta de ausência de defeitos.",
      "is_correct": false,
      "explanation": "Incorreta. garantia absoluta de ausência de defeitos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Automação oferece execução repetível e rápida, detectando regressões e dando feedback contínuo. Não garante ausência total de defeitos nem substitui revisão, exploração ou aceitação; depende da qualidade dos casos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "eliminação de testes de aceitação.",
      "is_correct": false,
      "explanation": "Incorreta. eliminação de testes de aceitação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Automação oferece execução repetível e rápida, detectando regressões e dando feedback contínuo. Não garante ausência total de defeitos nem substitui revisão, exploração ou aceitação; depende da qualidade dos casos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O benefício real é feedback rápido e repetível. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Automação de testes e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Automação oferece execução repetível e rápida, detectando regressões e dando feedback contínuo. Não garante ausência total de defeitos nem substitui revisão, exploração ou aceitação; depende da qualidade dos casos.",
    "bank_approach": "O item evita promessas absolutas sobre automação. O detalhe decisivo é reconhecer a função de Automação de testes no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Automação amplia repetibilidade, mas não substitui todas as técnicas.",
    "review_summary": "Testes automatizados ajudam a detectar regressões, mas não provam ausência de defeitos."
  }
}
```

## Questão 0068

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0068",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Atributos de qualidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade são exemplos de",
  "alternatives": [
    {
      "id": "A",
      "text": "características de qualidade do produto de software.",
      "is_correct": true,
      "explanation": "Correta. características de qualidade do produto de software. Modelos como ISO/IEC 25010 organizam características de qualidade do produto, incluindo adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade. Devem ser avaliadas em contexto e por critérios. No cenário, a condição decisiva é: A lista contém atributos de qualidade do produto."
    },
    {
      "id": "B",
      "text": "tipos de banco de dados.",
      "is_correct": false,
      "explanation": "Incorreta. tipos de banco de dados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Modelos como ISO/IEC 25010 organizam características de qualidade do produto, incluindo adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade. Devem ser avaliadas em contexto e por critérios. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "fases obrigatórias do Cascata.",
      "is_correct": false,
      "explanation": "Incorreta. fases obrigatórias do Cascata. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Modelos como ISO/IEC 25010 organizam características de qualidade do produto, incluindo adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade. Devem ser avaliadas em contexto e por critérios. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "papéis do Scrum.",
      "is_correct": false,
      "explanation": "Incorreta. papéis do Scrum. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Modelos como ISO/IEC 25010 organizam características de qualidade do produto, incluindo adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade. Devem ser avaliadas em contexto e por critérios. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A lista contém atributos de qualidade do produto. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Atributos de qualidade e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Modelos como ISO/IEC 25010 organizam características de qualidade do produto, incluindo adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança e manutenibilidade. Devem ser avaliadas em contexto e por critérios.",
    "bank_approach": "A banca pode cobrar reconhecimento de características de qualidade. O detalhe decisivo é reconhecer a função de Atributos de qualidade no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Desempenho e segurança descrevem qualidade, não fase de processo.",
    "review_summary": "Qualidade de produto envolve atributos funcionais e não funcionais mensuráveis."
  }
}
```

## Questão 0069

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0069",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Garantia da qualidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Auditorias e avaliações sistemáticas para verificar se processos e produtos seguem padrões definidos pertencem à",
  "alternatives": [
    {
      "id": "A",
      "text": "codificação exploratória.",
      "is_correct": false,
      "explanation": "Incorreta. codificação exploratória. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SQA envolve atividades planejadas para fornecer confiança de que processos e produtos atendem requisitos e padrões. Pode incluir auditorias, avaliações, não conformidades e melhoria. Controle da qualidade examina resultados específicos; ambos são complementares. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "implantação contínua.",
      "is_correct": false,
      "explanation": "Incorreta. implantação contínua. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SQA envolve atividades planejadas para fornecer confiança de que processos e produtos atendem requisitos e padrões. Pode incluir auditorias, avaliações, não conformidades e melhoria. Controle da qualidade examina resultados específicos; ambos são complementares. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "garantia da qualidade de software (SQA).",
      "is_correct": true,
      "explanation": "Correta. garantia da qualidade de software (SQA). SQA envolve atividades planejadas para fornecer confiança de que processos e produtos atendem requisitos e padrões. Pode incluir auditorias, avaliações, não conformidades e melhoria. Controle da qualidade examina resultados específicos; ambos são complementares. No cenário, a condição decisiva é: A descrição corresponde a atividades sistemáticas de garantia da qualidade."
    },
    {
      "id": "D",
      "text": "prototipação.",
      "is_correct": false,
      "explanation": "Incorreta. prototipação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: SQA envolve atividades planejadas para fornecer confiança de que processos e produtos atendem requisitos e padrões. Pode incluir auditorias, avaliações, não conformidades e melhoria. Controle da qualidade examina resultados específicos; ambos são complementares. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A descrição corresponde a atividades sistemáticas de garantia da qualidade. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Garantia da qualidade e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "SQA envolve atividades planejadas para fornecer confiança de que processos e produtos atendem requisitos e padrões. Pode incluir auditorias, avaliações, não conformidades e melhoria. Controle da qualidade examina resultados específicos; ambos são complementares.",
    "bank_approach": "O item diferencia qualidade de processo de atividades de construção. O detalhe decisivo é reconhecer a função de Garantia da qualidade no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "SQA avalia processo e conformidade; testes examinam comportamento do produto.",
    "review_summary": "SQA planeja e avalia processos para assegurar qualidade. Na revisão, retenha a definição de Garantia da qualidade, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0070

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0070",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Revisão estática",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Examinar requisitos, modelos ou código por pares sem executar o programa é uma técnica de",
  "alternatives": [
    {
      "id": "A",
      "text": "revisão estática.",
      "is_correct": true,
      "explanation": "Correta. revisão estática. Revisões e inspeções são técnicas estáticas que examinam artefatos sem execução, identificando ambiguidades, inconsistências e defeitos. Testes dinâmicos executam o software e observam resultados. No cenário, a condição decisiva é: O artefato é examinado sem execução do sistema."
    },
    {
      "id": "B",
      "text": "aceitação em produção.",
      "is_correct": false,
      "explanation": "Incorreta. aceitação em produção. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Revisões e inspeções são técnicas estáticas que examinam artefatos sem execução, identificando ambiguidades, inconsistências e defeitos. Testes dinâmicos executam o software e observam resultados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "teste de carga.",
      "is_correct": false,
      "explanation": "Incorreta. teste de carga. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Revisões e inspeções são técnicas estáticas que examinam artefatos sem execução, identificando ambiguidades, inconsistências e defeitos. Testes dinâmicos executam o software e observam resultados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "teste dinâmico de sistema.",
      "is_correct": false,
      "explanation": "Incorreta. teste dinâmico de sistema. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Revisões e inspeções são técnicas estáticas que examinam artefatos sem execução, identificando ambiguidades, inconsistências e defeitos. Testes dinâmicos executam o software e observam resultados. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O artefato é examinado sem execução do sistema. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Revisão estática e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Revisões e inspeções são técnicas estáticas que examinam artefatos sem execução, identificando ambiguidades, inconsistências e defeitos. Testes dinâmicos executam o software e observam resultados.",
    "bank_approach": "A questão contrapõe análise estática e execução dinâmica. O detalhe decisivo é reconhecer a função de Revisão estática no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Sem execução = estática; com execução = dinâmica. Em revisão, associe Revisão estática à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Revisões detectam defeitos sem executar o software. Na revisão, retenha a definição de Revisão estática, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0071

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0071",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Densidade de defeitos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A quantidade de defeitos por unidade de tamanho, como por mil linhas de código, representa",
  "alternatives": [
    {
      "id": "A",
      "text": "disponibilidade.",
      "is_correct": false,
      "explanation": "Incorreta. disponibilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Densidade de defeitos relaciona defeitos identificados a uma unidade de tamanho ou esforço. Disponibilidade mede tempo operacional; complexidade ciclomática estima caminhos independentes; velocidade Scrum mede trabalho concluído por Sprint. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "complexidade ciclomática.",
      "is_correct": false,
      "explanation": "Incorreta. complexidade ciclomática. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Densidade de defeitos relaciona defeitos identificados a uma unidade de tamanho ou esforço. Disponibilidade mede tempo operacional; complexidade ciclomática estima caminhos independentes; velocidade Scrum mede trabalho concluído por Sprint. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "densidade de defeitos.",
      "is_correct": true,
      "explanation": "Correta. densidade de defeitos. Densidade de defeitos relaciona defeitos identificados a uma unidade de tamanho ou esforço. Disponibilidade mede tempo operacional; complexidade ciclomática estima caminhos independentes; velocidade Scrum mede trabalho concluído por Sprint. No cenário, a condição decisiva é: A métrica normaliza defeitos pelo tamanho do produto."
    },
    {
      "id": "D",
      "text": "velocidade da Sprint.",
      "is_correct": false,
      "explanation": "Incorreta. velocidade da Sprint. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Densidade de defeitos relaciona defeitos identificados a uma unidade de tamanho ou esforço. Disponibilidade mede tempo operacional; complexidade ciclomática estima caminhos independentes; velocidade Scrum mede trabalho concluído por Sprint. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A métrica normaliza defeitos pelo tamanho do produto. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Densidade de defeitos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Densidade de defeitos relaciona defeitos identificados a uma unidade de tamanho ou esforço. Disponibilidade mede tempo operacional; complexidade ciclomática estima caminhos independentes; velocidade Scrum mede trabalho concluído por Sprint.",
    "bank_approach": "A banca associa descrição quantitativa à métrica correta. O detalhe decisivo é reconhecer a função de Densidade de defeitos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Defeitos por KLOC ou ponto de função = densidade de defeitos. Em revisão, associe Densidade de defeitos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Densidade relaciona defeitos ao tamanho; outras métricas medem propriedades distintas."
  }
}
```

## Questão 0072

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0072",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Manutenção corretiva",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Corrigir um erro que calcula incorretamente uma taxa após a implantação é manutenção",
  "alternatives": [
    {
      "id": "A",
      "text": "preventiva.",
      "is_correct": false,
      "explanation": "Incorreta. preventiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Corretiva corrige falhas existentes; adaptativa acompanha mudanças ambientais; perfectiva melhora funcionalidades/desempenho/usabilidade; preventiva reduz riscos futuros e melhora manutenibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "adaptativa.",
      "is_correct": false,
      "explanation": "Incorreta. adaptativa. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Corretiva corrige falhas existentes; adaptativa acompanha mudanças ambientais; perfectiva melhora funcionalidades/desempenho/usabilidade; preventiva reduz riscos futuros e melhora manutenibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "perfectiva.",
      "is_correct": false,
      "explanation": "Incorreta. perfectiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Corretiva corrige falhas existentes; adaptativa acompanha mudanças ambientais; perfectiva melhora funcionalidades/desempenho/usabilidade; preventiva reduz riscos futuros e melhora manutenibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "corretiva.",
      "is_correct": true,
      "explanation": "Correta. corretiva. Corretiva corrige falhas existentes; adaptativa acompanha mudanças ambientais; perfectiva melhora funcionalidades/desempenho/usabilidade; preventiva reduz riscos futuros e melhora manutenibilidade. No cenário, a condição decisiva é: A alteração elimina um defeito existente, logo corretiva."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A alteração elimina um defeito existente, logo corretiva. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Manutenção corretiva e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Corretiva corrige falhas existentes; adaptativa acompanha mudanças ambientais; perfectiva melhora funcionalidades/desempenho/usabilidade; preventiva reduz riscos futuros e melhora manutenibilidade.",
    "bank_approach": "A classificação depende da causa da mudança. O detalhe decisivo é reconhecer a função de Manutenção corretiva no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Defeito existente = corretiva; ambiente alterado = adaptativa; melhoria = perfectiva.",
    "review_summary": "Corretiva corrige defeitos; adaptativa acompanha ambiente; perfectiva melhora; preventiva previne."
  }
}
```

## Questão 0073

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0073",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Manutenção adaptativa",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Ajustar o sistema para funcionar em nova versão do sistema operacional caracteriza manutenção",
  "alternatives": [
    {
      "id": "A",
      "text": "adaptativa.",
      "is_correct": true,
      "explanation": "Correta. adaptativa. Adaptativa altera o software para continuar operando em ambiente modificado, como sistema operacional, hardware, legislação ou interface externa. No cenário, a condição decisiva é: A causa é a mudança do ambiente tecnológico."
    },
    {
      "id": "B",
      "text": "corretiva.",
      "is_correct": false,
      "explanation": "Incorreta. corretiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adaptativa altera o software para continuar operando em ambiente modificado, como sistema operacional, hardware, legislação ou interface externa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "perfectiva.",
      "is_correct": false,
      "explanation": "Incorreta. perfectiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adaptativa altera o software para continuar operando em ambiente modificado, como sistema operacional, hardware, legislação ou interface externa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "preventiva.",
      "is_correct": false,
      "explanation": "Incorreta. preventiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Adaptativa altera o software para continuar operando em ambiente modificado, como sistema operacional, hardware, legislação ou interface externa. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A causa é a mudança do ambiente tecnológico. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Manutenção adaptativa e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Adaptativa altera o software para continuar operando em ambiente modificado, como sistema operacional, hardware, legislação ou interface externa. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão usa mudança externa como pista classificatória. O detalhe decisivo é reconhecer a função de Manutenção adaptativa no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Mudança de plataforma ou sistema operacional indica adaptativa. Em revisão, associe Manutenção adaptativa à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Adaptativa mantém compatibilidade com ambiente alterado. Na revisão, retenha a definição de Manutenção adaptativa, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0074

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0074",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Manutenção perfectiva",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Acrescentar relatório solicitado pelos usuários e melhorar a navegação caracteriza manutenção",
  "alternatives": [
    {
      "id": "A",
      "text": "adaptativa.",
      "is_correct": false,
      "explanation": "Incorreta. adaptativa. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Perfectiva amplia ou melhora funcionalidades e atributos conforme novas necessidades. Corretiva trata defeitos; adaptativa trata mudanças ambientais. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "perfectiva.",
      "is_correct": true,
      "explanation": "Correta. perfectiva. Perfectiva amplia ou melhora funcionalidades e atributos conforme novas necessidades. Corretiva trata defeitos; adaptativa trata mudanças ambientais. No cenário, a condição decisiva é: A mudança atende a melhoria solicitada, portanto perfectiva."
    },
    {
      "id": "C",
      "text": "corretiva.",
      "is_correct": false,
      "explanation": "Incorreta. corretiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Perfectiva amplia ou melhora funcionalidades e atributos conforme novas necessidades. Corretiva trata defeitos; adaptativa trata mudanças ambientais. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "preventiva.",
      "is_correct": false,
      "explanation": "Incorreta. preventiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Perfectiva amplia ou melhora funcionalidades e atributos conforme novas necessidades. Corretiva trata defeitos; adaptativa trata mudanças ambientais. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A mudança atende a melhoria solicitada, portanto perfectiva. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Manutenção perfectiva e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Perfectiva amplia ou melhora funcionalidades e atributos conforme novas necessidades. Corretiva trata defeitos; adaptativa trata mudanças ambientais. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O motivo da manutenção define sua categoria. O detalhe decisivo é reconhecer a função de Manutenção perfectiva no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Nova funcionalidade ou melhoria de usabilidade aponta para perfectiva.",
    "review_summary": "Perfectiva melhora o produto; corretiva corrige; adaptativa acompanha ambiente."
  }
}
```

## Questão 0075

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0075",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Manutenção preventiva",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Reorganizar módulos para reduzir riscos futuros e facilitar alterações, sem mudar o comportamento externo, é manutenção",
  "alternatives": [
    {
      "id": "A",
      "text": "corretiva.",
      "is_correct": false,
      "explanation": "Incorreta. corretiva. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Preventiva modifica o software para reduzir probabilidade de falhas futuras e melhorar manutenibilidade. Refatoração pode apoiar essa finalidade ao melhorar a estrutura sem alterar comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "perfectiva funcional.",
      "is_correct": false,
      "explanation": "Incorreta. perfectiva funcional. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Preventiva modifica o software para reduzir probabilidade de falhas futuras e melhorar manutenibilidade. Refatoração pode apoiar essa finalidade ao melhorar a estrutura sem alterar comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "preventiva.",
      "is_correct": true,
      "explanation": "Correta. preventiva. Preventiva modifica o software para reduzir probabilidade de falhas futuras e melhorar manutenibilidade. Refatoração pode apoiar essa finalidade ao melhorar a estrutura sem alterar comportamento. No cenário, a condição decisiva é: A finalidade é prevenir problemas futuros e facilitar manutenção."
    },
    {
      "id": "D",
      "text": "adaptativa.",
      "is_correct": false,
      "explanation": "Incorreta. adaptativa. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Preventiva modifica o software para reduzir probabilidade de falhas futuras e melhorar manutenibilidade. Refatoração pode apoiar essa finalidade ao melhorar a estrutura sem alterar comportamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A finalidade é prevenir problemas futuros e facilitar manutenção. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Manutenção preventiva e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Preventiva modifica o software para reduzir probabilidade de falhas futuras e melhorar manutenibilidade. Refatoração pode apoiar essa finalidade ao melhorar a estrutura sem alterar comportamento.",
    "bank_approach": "O item relaciona motivação da mudança à categoria de manutenção. O detalhe decisivo é reconhecer a função de Manutenção preventiva no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Reduzir risco futuro e facilitar evolução indica preventiva. Em revisão, associe Manutenção preventiva à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Preventiva reduz riscos e melhora manutenibilidade. Na revisão, retenha a definição de Manutenção preventiva, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0076

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0076",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Complexidade ciclomática",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A métrica de McCabe que estima o número de caminhos linearmente independentes em um grafo de fluxo de controle é",
  "alternatives": [
    {
      "id": "A",
      "text": "disponibilidade.",
      "is_correct": false,
      "explanation": "Incorreta. disponibilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Complexidade ciclomática mede a complexidade estrutural de um programa pelo número de caminhos linearmente independentes no grafo de fluxo. Pode orientar quantidade mínima de caminhos de teste e identificar módulos complexos; não mede tamanho funcional nem disponibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "pontos de função.",
      "is_correct": false,
      "explanation": "Incorreta. pontos de função. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Complexidade ciclomática mede a complexidade estrutural de um programa pelo número de caminhos linearmente independentes no grafo de fluxo. Pode orientar quantidade mínima de caminhos de teste e identificar módulos complexos; não mede tamanho funcional nem disponibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "densidade de defeitos.",
      "is_correct": false,
      "explanation": "Incorreta. densidade de defeitos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Complexidade ciclomática mede a complexidade estrutural de um programa pelo número de caminhos linearmente independentes no grafo de fluxo. Pode orientar quantidade mínima de caminhos de teste e identificar módulos complexos; não mede tamanho funcional nem disponibilidade. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "complexidade ciclomática.",
      "is_correct": true,
      "explanation": "Correta. complexidade ciclomática. Complexidade ciclomática mede a complexidade estrutural de um programa pelo número de caminhos linearmente independentes no grafo de fluxo. Pode orientar quantidade mínima de caminhos de teste e identificar módulos complexos; não mede tamanho funcional nem disponibilidade. No cenário, a condição decisiva é: A definição corresponde à métrica de McCabe."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A definição corresponde à métrica de McCabe. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Complexidade ciclomática e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Complexidade ciclomática mede a complexidade estrutural de um programa pelo número de caminhos linearmente independentes no grafo de fluxo. Pode orientar quantidade mínima de caminhos de teste e identificar módulos complexos; não mede tamanho funcional nem disponibilidade.",
    "bank_approach": "A questão associa métrica e finalidade em análise/testes. O detalhe decisivo é reconhecer a função de Complexidade ciclomática no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Grafo de fluxo e caminhos independentes indicam complexidade ciclomática.",
    "review_summary": "Complexidade ciclomática estima caminhos independentes e auxilia planejamento de testes."
  }
}
```

## Questão 0077

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0077",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Cobertura de testes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma cobertura de 100% das instruções executadas significa que",
  "alternatives": [
    {
      "id": "A",
      "text": "todas as decisões tiveram os dois resultados exercitados.",
      "is_correct": false,
      "explanation": "Incorreta. todas as decisões tiveram os dois resultados exercitados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Cobertura de instruções indica se cada instrução executável foi executada ao menos uma vez. Não implica cobertura de decisões, condições, caminhos ou todas as entradas, nem prova ausência de defeitos. Métricas diferentes medem aspectos distintos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "todas as combinações possíveis de entradas foram testadas.",
      "is_correct": false,
      "explanation": "Incorreta. todas as combinações possíveis de entradas foram testadas. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Cobertura de instruções indica se cada instrução executável foi executada ao menos uma vez. Não implica cobertura de decisões, condições, caminhos ou todas as entradas, nem prova ausência de defeitos. Métricas diferentes medem aspectos distintos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "todas as instruções foram executadas por ao menos um teste, mas isso não garante ausência de defeitos.",
      "is_correct": true,
      "explanation": "Correta. todas as instruções foram executadas por ao menos um teste, mas isso não garante ausência de defeitos. Cobertura de instruções indica se cada instrução executável foi executada ao menos uma vez. Não implica cobertura de decisões, condições, caminhos ou todas as entradas, nem prova ausência de defeitos. Métricas diferentes medem aspectos distintos. No cenário, a condição decisiva é: 100% de instruções não significa cobertura de decisões nem correção total."
    },
    {
      "id": "D",
      "text": "o sistema está livre de falhas.",
      "is_correct": false,
      "explanation": "Incorreta. o sistema está livre de falhas. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Cobertura de instruções indica se cada instrução executável foi executada ao menos uma vez. Não implica cobertura de decisões, condições, caminhos ou todas as entradas, nem prova ausência de defeitos. Métricas diferentes medem aspectos distintos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "100% de instruções não significa cobertura de decisões nem correção total. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Cobertura de testes e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Cobertura de instruções indica se cada instrução executável foi executada ao menos uma vez. Não implica cobertura de decisões, condições, caminhos ou todas as entradas, nem prova ausência de defeitos. Métricas diferentes medem aspectos distintos.",
    "bank_approach": "A banca explora interpretações exageradas de métricas de cobertura. O detalhe decisivo é reconhecer a função de Cobertura de testes no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Cobertura é evidência de execução, não prova de ausência de defeitos.",
    "review_summary": "Cobertura de instruções não garante todos os caminhos nem ausência de falhas."
  }
}
```

## Questão 0078

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0078",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Desenvolvimento baseado em componentes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um componente de software reutilizável deve, idealmente",
  "alternatives": [
    {
      "id": "A",
      "text": "encapsular funcionalidade coesa e oferecer interfaces bem definidas.",
      "is_correct": true,
      "explanation": "Correta. encapsular funcionalidade coesa e oferecer interfaces bem definidas. Desenvolvimento baseado em componentes compõe sistemas a partir de unidades reutilizáveis, encapsuladas e com interfaces explícitas. Coesão, contratos claros e dependências controladas favorecem integração e evolução. No cenário, a condição decisiva é: A alternativa descreve encapsulamento, coesão e contrato explícito."
    },
    {
      "id": "B",
      "text": "expor todos os detalhes internos.",
      "is_correct": false,
      "explanation": "Incorreta. expor todos os detalhes internos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desenvolvimento baseado em componentes compõe sistemas a partir de unidades reutilizáveis, encapsuladas e com interfaces explícitas. Coesão, contratos claros e dependências controladas favorecem integração e evolução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "ser escrito na mesma linguagem de todos os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. ser escrito na mesma linguagem de todos os componentes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desenvolvimento baseado em componentes compõe sistemas a partir de unidades reutilizáveis, encapsuladas e com interfaces explícitas. Coesão, contratos claros e dependências controladas favorecem integração e evolução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "depender diretamente de todas as classes do sistema.",
      "is_correct": false,
      "explanation": "Incorreta. depender diretamente de todas as classes do sistema. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Desenvolvimento baseado em componentes compõe sistemas a partir de unidades reutilizáveis, encapsuladas e com interfaces explícitas. Coesão, contratos claros e dependências controladas favorecem integração e evolução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A alternativa descreve encapsulamento, coesão e contrato explícito. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Desenvolvimento baseado em componentes e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Desenvolvimento baseado em componentes compõe sistemas a partir de unidades reutilizáveis, encapsuladas e com interfaces explícitas. Coesão, contratos claros e dependências controladas favorecem integração e evolução.",
    "bank_approach": "A questão cobra características essenciais de componentes reutilizáveis. O detalhe decisivo é reconhecer a função de Desenvolvimento baseado em componentes no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Componente reutilizável deve esconder detalhes e expor contrato. Em revisão, associe Desenvolvimento baseado em componentes à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "CBD compõe unidades coesas e encapsuladas por interfaces. Na revisão, retenha a definição de Desenvolvimento baseado em componentes, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0079

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0079",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Interfaces fornecidas e requeridas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um componente, a interface fornecida declara",
  "alternatives": [
    {
      "id": "A",
      "text": "os serviços de que o componente necessita.",
      "is_correct": false,
      "explanation": "Incorreta. os serviços de que o componente necessita. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Interface fornecida especifica serviços oferecidos; interface requerida especifica serviços consumidos pelo componente. Essa separação permite composição sem revelar detalhes internos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "os serviços que o componente disponibiliza aos clientes.",
      "is_correct": true,
      "explanation": "Correta. os serviços que o componente disponibiliza aos clientes. Interface fornecida especifica serviços oferecidos; interface requerida especifica serviços consumidos pelo componente. Essa separação permite composição sem revelar detalhes internos. No cenário, a condição decisiva é: A pergunta trata dos serviços disponibilizados pelo componente."
    },
    {
      "id": "C",
      "text": "os testes que ainda não foram executados.",
      "is_correct": false,
      "explanation": "Incorreta. os testes que ainda não foram executados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Interface fornecida especifica serviços oferecidos; interface requerida especifica serviços consumidos pelo componente. Essa separação permite composição sem revelar detalhes internos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "os detalhes privados de implementação.",
      "is_correct": false,
      "explanation": "Incorreta. os detalhes privados de implementação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Interface fornecida especifica serviços oferecidos; interface requerida especifica serviços consumidos pelo componente. Essa separação permite composição sem revelar detalhes internos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A pergunta trata dos serviços disponibilizados pelo componente. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Interfaces fornecidas e requeridas e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Interface fornecida especifica serviços oferecidos; interface requerida especifica serviços consumidos pelo componente. Essa separação permite composição sem revelar detalhes internos.",
    "bank_approach": "A banca pode trocar os termos fornecida e requerida. O detalhe decisivo é reconhecer a função de Interfaces fornecidas e requeridas no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Provided = oferece; required = necessita. Em revisão, associe Interfaces fornecidas e requeridas à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Interface fornecida expõe serviços; requerida declara dependências. Na revisão, retenha a definição de Interfaces fornecidas e requeridas, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0080

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0080",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Ferramentas CASE",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Ferramentas que apoiam atividades de requisitos, modelagem, documentação, projeto, implementação ou manutenção são conhecidas como",
  "alternatives": [
    {
      "id": "A",
      "text": "compiladores exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. compiladores exclusivamente. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CASE (Computer-Aided Software Engineering) reúne ferramentas de apoio automatizado às atividades do ciclo de vida. Upper CASE apoia fases iniciais; Lower CASE apoia construção e manutenção; Integrated CASE integra várias fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "ferramentas de monitoramento de rede.",
      "is_correct": false,
      "explanation": "Incorreta. ferramentas de monitoramento de rede. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CASE (Computer-Aided Software Engineering) reúne ferramentas de apoio automatizado às atividades do ciclo de vida. Upper CASE apoia fases iniciais; Lower CASE apoia construção e manutenção; Integrated CASE integra várias fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "ferramentas CASE.",
      "is_correct": true,
      "explanation": "Correta. ferramentas CASE. CASE (Computer-Aided Software Engineering) reúne ferramentas de apoio automatizado às atividades do ciclo de vida. Upper CASE apoia fases iniciais; Lower CASE apoia construção e manutenção; Integrated CASE integra várias fases. No cenário, a condição decisiva é: A definição corresponde às ferramentas CASE."
    },
    {
      "id": "D",
      "text": "sistemas operacionais de tempo real.",
      "is_correct": false,
      "explanation": "Incorreta. sistemas operacionais de tempo real. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: CASE (Computer-Aided Software Engineering) reúne ferramentas de apoio automatizado às atividades do ciclo de vida. Upper CASE apoia fases iniciais; Lower CASE apoia construção e manutenção; Integrated CASE integra várias fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A definição corresponde às ferramentas CASE. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Ferramentas CASE e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "CASE (Computer-Aided Software Engineering) reúne ferramentas de apoio automatizado às atividades do ciclo de vida. Upper CASE apoia fases iniciais; Lower CASE apoia construção e manutenção; Integrated CASE integra várias fases.",
    "bank_approach": "A questão cobra a abrangência da sigla, evitando restringi-la a uma fase. O detalhe decisivo é reconhecer a função de Ferramentas CASE no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "CASE pode apoiar várias fases, não apenas codificação. Em revisão, associe Ferramentas CASE à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "CASE automatiza e integra atividades de engenharia de software. Na revisão, retenha a definição de Ferramentas CASE, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0081

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0081",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Upper CASE e Lower CASE",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma ferramenta usada principalmente para requisitos, análise e projeto é classificada como",
  "alternatives": [
    {
      "id": "A",
      "text": "ferramenta exclusiva de deploy.",
      "is_correct": false,
      "explanation": "Incorreta. ferramenta exclusiva de deploy. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Upper CASE apoia planejamento, requisitos, análise e projeto. Lower CASE apoia implementação, testes e manutenção. Integrated CASE integra diferentes fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "monitoramento de produção.",
      "is_correct": false,
      "explanation": "Incorreta. monitoramento de produção. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Upper CASE apoia planejamento, requisitos, análise e projeto. Lower CASE apoia implementação, testes e manutenção. Integrated CASE integra diferentes fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Upper CASE.",
      "is_correct": true,
      "explanation": "Correta. Upper CASE. Upper CASE apoia planejamento, requisitos, análise e projeto. Lower CASE apoia implementação, testes e manutenção. Integrated CASE integra diferentes fases. No cenário, a condição decisiva é: Requisitos, análise e projeto são fases iniciais, associadas a Upper CASE."
    },
    {
      "id": "D",
      "text": "Lower CASE.",
      "is_correct": false,
      "explanation": "Incorreta. Lower CASE. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Upper CASE apoia planejamento, requisitos, análise e projeto. Lower CASE apoia implementação, testes e manutenção. Integrated CASE integra diferentes fases. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "Requisitos, análise e projeto são fases iniciais, associadas a Upper CASE. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Upper CASE e Lower CASE e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Upper CASE apoia planejamento, requisitos, análise e projeto. Lower CASE apoia implementação, testes e manutenção. Integrated CASE integra diferentes fases. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão testa a classificação por fase de apoio. O detalhe decisivo é reconhecer a função de Upper CASE e Lower CASE no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Upper = fases iniciais; Lower = construção e manutenção. Em revisão, associe Upper CASE e Lower CASE à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Upper CASE apoia requisitos/análise/projeto; Lower CASE apoia implementação/testes/manutenção."
  }
}
```

## Questão 0082

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0082",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Gestão de projetos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O documento que autoriza formalmente um projeto e identifica objetivos de alto nível, patrocinador e gerente é",
  "alternatives": [
    {
      "id": "A",
      "text": "baseline de código.",
      "is_correct": false,
      "explanation": "Incorreta. baseline de código. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O termo de abertura autoriza formalmente o projeto e registra propósito, objetivos, requisitos de alto nível, riscos iniciais, patrocinador e gerente com autoridade. Não é o plano detalhado de gerenciamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "plano de testes unitários.",
      "is_correct": false,
      "explanation": "Incorreta. plano de testes unitários. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O termo de abertura autoriza formalmente o projeto e registra propósito, objetivos, requisitos de alto nível, riscos iniciais, patrocinador e gerente com autoridade. Não é o plano detalhado de gerenciamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "relatório de defeitos.",
      "is_correct": false,
      "explanation": "Incorreta. relatório de defeitos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: O termo de abertura autoriza formalmente o projeto e registra propósito, objetivos, requisitos de alto nível, riscos iniciais, patrocinador e gerente com autoridade. Não é o plano detalhado de gerenciamento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "termo de abertura do projeto.",
      "is_correct": true,
      "explanation": "Correta. termo de abertura do projeto. O termo de abertura autoriza formalmente o projeto e registra propósito, objetivos, requisitos de alto nível, riscos iniciais, patrocinador e gerente com autoridade. Não é o plano detalhado de gerenciamento. No cenário, a condição decisiva é: O documento descrito é o termo de abertura."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O documento descrito é o termo de abertura. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Gestão de projetos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "O termo de abertura autoriza formalmente o projeto e registra propósito, objetivos, requisitos de alto nível, riscos iniciais, patrocinador e gerente com autoridade. Não é o plano detalhado de gerenciamento.",
    "bank_approach": "A banca associa um artefato à fase de iniciação do projeto. O detalhe decisivo é reconhecer a função de Gestão de projetos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Autorização formal e designação do gerente indicam termo de abertura.",
    "review_summary": "Termo de abertura autoriza o projeto e registra elementos de alto nível."
  }
}
```

## Questão 0083

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0083",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "EAP/WBS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A decomposição hierárquica do escopo em entregas e pacotes de trabalho é denominada",
  "alternatives": [
    {
      "id": "A",
      "text": "backlog de impedimentos.",
      "is_correct": false,
      "explanation": "Incorreta. backlog de impedimentos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: EAP/WBS decompõe hierarquicamente o escopo total em entregas e pacotes de trabalho. Serve de base para estimativas, cronograma, custos e responsabilidades; é orientada a entregas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "Estrutura Analítica do Projeto (EAP/WBS).",
      "is_correct": true,
      "explanation": "Correta. Estrutura Analítica do Projeto (EAP/WBS). EAP/WBS decompõe hierarquicamente o escopo total em entregas e pacotes de trabalho. Serve de base para estimativas, cronograma, custos e responsabilidades; é orientada a entregas. No cenário, a condição decisiva é: A definição corresponde à EAP."
    },
    {
      "id": "C",
      "text": "matriz de rastreabilidade.",
      "is_correct": false,
      "explanation": "Incorreta. matriz de rastreabilidade. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: EAP/WBS decompõe hierarquicamente o escopo total em entregas e pacotes de trabalho. Serve de base para estimativas, cronograma, custos e responsabilidades; é orientada a entregas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "diagrama de sequência.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de sequência. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: EAP/WBS decompõe hierarquicamente o escopo total em entregas e pacotes de trabalho. Serve de base para estimativas, cronograma, custos e responsabilidades; é orientada a entregas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "A definição corresponde à EAP. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de EAP/WBS e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "EAP/WBS decompõe hierarquicamente o escopo total em entregas e pacotes de trabalho. Serve de base para estimativas, cronograma, custos e responsabilidades; é orientada a entregas. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O item usa a definição clássica de ferramenta de planejamento do escopo. O detalhe decisivo é reconhecer a função de EAP/WBS no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "EAP é hierárquica e orientada a entregas. Em revisão, associe EAP/WBS à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "EAP/WBS decompõe escopo em entregas e pacotes de trabalho. Na revisão, retenha a definição de EAP/WBS, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0084

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0084",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Caminho crítico",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No cronograma, o caminho crítico é a sequência de atividades que",
  "alternatives": [
    {
      "id": "A",
      "text": "pode atrasar sem afetar a data final.",
      "is_correct": false,
      "explanation": "Incorreta. pode atrasar sem afetar a data final. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caminho crítico é a sequência de atividades dependentes com maior duração total. Atividades críticas normalmente têm folga total zero; atraso tende a afetar a data final, salvo replanejamento ou ações corretivas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "possui necessariamente o maior custo.",
      "is_correct": false,
      "explanation": "Incorreta. possui necessariamente o maior custo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caminho crítico é a sequência de atividades dependentes com maior duração total. Atividades críticas normalmente têm folga total zero; atraso tende a afetar a data final, salvo replanejamento ou ações corretivas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "determina a duração mínima do projeto segundo dependências e durações, com folga total nula nas atividades críticas.",
      "is_correct": true,
      "explanation": "Correta. determina a duração mínima do projeto segundo dependências e durações, com folga total nula nas atividades críticas. Caminho crítico é a sequência de atividades dependentes com maior duração total. Atividades críticas normalmente têm folga total zero; atraso tende a afetar a data final, salvo replanejamento ou ações corretivas. No cenário, a condição decisiva é: A alternativa relaciona dependências, duração e folga."
    },
    {
      "id": "D",
      "text": "é escolhida por preferência pessoal.",
      "is_correct": false,
      "explanation": "Incorreta. é escolhida por preferência pessoal. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Caminho crítico é a sequência de atividades dependentes com maior duração total. Atividades críticas normalmente têm folga total zero; atraso tende a afetar a data final, salvo replanejamento ou ações corretivas. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A alternativa relaciona dependências, duração e folga. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Caminho crítico e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Caminho crítico é a sequência de atividades dependentes com maior duração total. Atividades críticas normalmente têm folga total zero; atraso tende a afetar a data final, salvo replanejamento ou ações corretivas.",
    "bank_approach": "A questão distingue criticidade temporal de custo. O detalhe decisivo é reconhecer a função de Caminho crítico no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Crítico significa impacto no prazo, não maior custo. Em revisão, associe Caminho crítico à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Caminho crítico determina a duração e suas atividades têm folga total zero."
  }
}
```

## Questão 0085

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0085",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Engenharia de software",
  "subtopic": "Gestão de riscos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um evento incerto que, se ocorrer, pode afetar positiva ou negativamente os objetivos do projeto é",
  "alternatives": [
    {
      "id": "A",
      "text": "mudança já implementada.",
      "is_correct": false,
      "explanation": "Incorreta. mudança já implementada. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Risco é evento/condição incerta que pode afetar objetivos como ameaça ou oportunidade. Problema/issue já ocorreu. Gestão envolve identificação, análise, resposta e monitoramento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "atividade do cronograma.",
      "is_correct": false,
      "explanation": "Incorreta. atividade do cronograma. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Risco é evento/condição incerta que pode afetar objetivos como ameaça ou oportunidade. Problema/issue já ocorreu. Gestão envolve identificação, análise, resposta e monitoramento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "defeito confirmado.",
      "is_correct": false,
      "explanation": "Incorreta. defeito confirmado. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Risco é evento/condição incerta que pode afetar objetivos como ameaça ou oportunidade. Problema/issue já ocorreu. Gestão envolve identificação, análise, resposta e monitoramento. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "risco.",
      "is_correct": true,
      "explanation": "Correta. risco. Risco é evento/condição incerta que pode afetar objetivos como ameaça ou oportunidade. Problema/issue já ocorreu. Gestão envolve identificação, análise, resposta e monitoramento. No cenário, a condição decisiva é: A incerteza e o impacto potencial caracterizam risco."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A incerteza e o impacto potencial caracterizam risco. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Gestão de riscos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Risco é evento/condição incerta que pode afetar objetivos como ameaça ou oportunidade. Problema/issue já ocorreu. Gestão envolve identificação, análise, resposta e monitoramento. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca pode contrastar risco futuro com problema ocorrido. O detalhe decisivo é reconhecer a função de Gestão de riscos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Incerto e potencial = risco; já ocorrido = problema. Em revisão, associe Gestão de riscos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Risco é incerto e pode ser ameaça ou oportunidade. Na revisão, retenha a definição de Gestão de riscos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0086

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0086",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Scrum",
  "subtopic": "Pilares do empirismo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Os três pilares do empirismo no Scrum são",
  "alternatives": [
    {
      "id": "A",
      "text": "escopo, custo e prazo.",
      "is_correct": false,
      "explanation": "Incorreta. escopo, custo e prazo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Transparência torna processo e artefatos visíveis; inspeção examina progresso e resultados; adaptação ajusta quando há desvios. O Scrum combina empirismo e pensamento enxuto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "planejamento, codificação e implantação.",
      "is_correct": false,
      "explanation": "Incorreta. planejamento, codificação e implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Transparência torna processo e artefatos visíveis; inspeção examina progresso e resultados; adaptação ajusta quando há desvios. O Scrum combina empirismo e pensamento enxuto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "análise, projeto e manutenção.",
      "is_correct": false,
      "explanation": "Incorreta. análise, projeto e manutenção. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Transparência torna processo e artefatos visíveis; inspeção examina progresso e resultados; adaptação ajusta quando há desvios. O Scrum combina empirismo e pensamento enxuto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "transparência, inspeção e adaptação.",
      "is_correct": true,
      "explanation": "Correta. transparência, inspeção e adaptação. Transparência torna processo e artefatos visíveis; inspeção examina progresso e resultados; adaptação ajusta quando há desvios. O Scrum combina empirismo e pensamento enxuto. No cenário, a condição decisiva é: A alternativa apresenta os três pilares oficiais."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "A alternativa apresenta os três pilares oficiais. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Pilares do empirismo e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Transparência torna processo e artefatos visíveis; inspeção examina progresso e resultados; adaptação ajusta quando há desvios. O Scrum combina empirismo e pensamento enxuto. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão cobra conceito fundamental do framework. O detalhe decisivo é reconhecer a função de Pilares do empirismo no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Transparência = visibilidade; inspeção = examinar; adaptação = ajustar.",
    "review_summary": "Scrum apoia-se em transparência, inspeção e adaptação. Na revisão, retenha a definição de Pilares do empirismo, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0087

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0087",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Scrum",
  "subtopic": "Scrum Team",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O Scrum Team é composto por",
  "alternatives": [
    {
      "id": "A",
      "text": "Product Owner, vários Scrum Masters hierárquicos e stakeholders.",
      "is_correct": false,
      "explanation": "Incorreta. Product Owner, vários Scrum Masters hierárquicos e stakeholders. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Scrum Team é unidade coesa, sem subequipes ou hierarquias internas, composta por Product Owner, Scrum Master e Developers. É multifuncional e autogerenciável. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "analistas e programadores em subequipes obrigatórias.",
      "is_correct": false,
      "explanation": "Incorreta. analistas e programadores em subequipes obrigatórias. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Scrum Team é unidade coesa, sem subequipes ou hierarquias internas, composta por Product Owner, Scrum Master e Developers. É multifuncional e autogerenciável. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "Product Owner, Scrum Master e Developers.",
      "is_correct": true,
      "explanation": "Correta. Product Owner, Scrum Master e Developers. Scrum Team é unidade coesa, sem subequipes ou hierarquias internas, composta por Product Owner, Scrum Master e Developers. É multifuncional e autogerenciável. No cenário, a condição decisiva é: A alternativa apresenta os três accountabilities do Scrum Team."
    },
    {
      "id": "D",
      "text": "gerente de projeto, arquiteto e comitê.",
      "is_correct": false,
      "explanation": "Incorreta. gerente de projeto, arquiteto e comitê. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Scrum Team é unidade coesa, sem subequipes ou hierarquias internas, composta por Product Owner, Scrum Master e Developers. É multifuncional e autogerenciável. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A alternativa apresenta os três accountabilities do Scrum Team. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Scrum Team e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Scrum Team é unidade coesa, sem subequipes ou hierarquias internas, composta por Product Owner, Scrum Master e Developers. É multifuncional e autogerenciável. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca cobra a terminologia do Scrum Guide e evita importar estruturas tradicionais.",
    "study_tip": "Memorize os três: Product Owner, Scrum Master e Developers. Em revisão, associe Scrum Team à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Scrum Team é unidade coesa formada pelos três accountabilities. Na revisão, retenha a definição de Scrum Team, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0088

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0088",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "Scrum",
  "subtopic": "Daily Scrum",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A Daily Scrum tem por objetivo",
  "alternatives": [
    {
      "id": "A",
      "text": "inspecionar o progresso rumo ao Sprint Goal e adaptar o plano de trabalho.",
      "is_correct": true,
      "explanation": "Correta. inspecionar o progresso rumo ao Sprint Goal e adaptar o plano de trabalho. Daily Scrum é evento de quinze minutos para Developers, destinado a inspecionar progresso em direção ao Sprint Goal e adaptar o plano. Review trata do produto; Retrospective, do processo. No cenário, a condição decisiva é: A alternativa descreve inspeção diária e adaptação do plano."
    },
    {
      "id": "B",
      "text": "ordenar todo o Product Backlog.",
      "is_correct": false,
      "explanation": "Incorreta. ordenar todo o Product Backlog. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Daily Scrum é evento de quinze minutos para Developers, destinado a inspecionar progresso em direção ao Sprint Goal e adaptar o plano. Review trata do produto; Retrospective, do processo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "apresentar formalmente o produto aos stakeholders.",
      "is_correct": false,
      "explanation": "Incorreta. apresentar formalmente o produto aos stakeholders. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Daily Scrum é evento de quinze minutos para Developers, destinado a inspecionar progresso em direção ao Sprint Goal e adaptar o plano. Review trata do produto; Retrospective, do processo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "avaliar o processo para a próxima Sprint.",
      "is_correct": false,
      "explanation": "Incorreta. avaliar o processo para a próxima Sprint. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Daily Scrum é evento de quinze minutos para Developers, destinado a inspecionar progresso em direção ao Sprint Goal e adaptar o plano. Review trata do produto; Retrospective, do processo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A alternativa descreve inspeção diária e adaptação do plano. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Daily Scrum e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Daily Scrum é evento de quinze minutos para Developers, destinado a inspecionar progresso em direção ao Sprint Goal e adaptar o plano. Review trata do produto; Retrospective, do processo.",
    "bank_approach": "A questão diferencia eventos por seu foco. O detalhe decisivo é reconhecer a função de Daily Scrum no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Daily = progresso e plano; Review = produto; Retrospective = processo.",
    "review_summary": "Daily Scrum inspeciona progresso e adapta o plano da Sprint. Na revisão, retenha a definição de Daily Scrum, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0089

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0089",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Multiplicidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma associação UML, a multiplicidade 1..* significa",
  "alternatives": [
    {
      "id": "A",
      "text": "um ou mais objetos associados.",
      "is_correct": true,
      "explanation": "Correta. um ou mais objetos associados. Multiplicidade indica quantas instâncias podem participar. 1..* significa mínimo um; 0..1 é opcional, no máximo um; 0..* ou * significa zero ou muitos; 1 significa exatamente um. No cenário, a condição decisiva é: O limite inferior é um e não há limite superior explícito."
    },
    {
      "id": "B",
      "text": "zero ou um objeto.",
      "is_correct": false,
      "explanation": "Incorreta. zero ou um objeto. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Multiplicidade indica quantas instâncias podem participar. 1..* significa mínimo um; 0..1 é opcional, no máximo um; 0..* ou * significa zero ou muitos; 1 significa exatamente um. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "exatamente um objeto.",
      "is_correct": false,
      "explanation": "Incorreta. exatamente um objeto. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Multiplicidade indica quantas instâncias podem participar. 1..* significa mínimo um; 0..1 é opcional, no máximo um; 0..* ou * significa zero ou muitos; 1 significa exatamente um. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "nenhuma instância permitida.",
      "is_correct": false,
      "explanation": "Incorreta. nenhuma instância permitida. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Multiplicidade indica quantas instâncias podem participar. 1..* significa mínimo um; 0..1 é opcional, no máximo um; 0..* ou * significa zero ou muitos; 1 significa exatamente um. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O limite inferior é um e não há limite superior explícito. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Multiplicidade e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Multiplicidade indica quantas instâncias podem participar. 1..* significa mínimo um; 0..1 é opcional, no máximo um; 0..* ou * significa zero ou muitos; 1 significa exatamente um. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão exige leitura dos limites da notação. O detalhe decisivo é reconhecer a função de Multiplicidade no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Leia 1..* como pelo menos um. Em revisão, associe Multiplicidade à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "1..* significa um ou mais; 0..1 significa opcional. Na revisão, retenha a definição de Multiplicidade, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0090

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0090",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Generalização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A generalização entre uma classe específica e uma classe geral representa",
  "alternatives": [
    {
      "id": "A",
      "text": "mensagem de execução.",
      "is_correct": false,
      "explanation": "Incorreta. mensagem de execução. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Generalização representa herança: a classe específica é um tipo da classe geral e herda características. A seta de triângulo vazio aponta para a classe geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "dependência temporária.",
      "is_correct": false,
      "explanation": "Incorreta. dependência temporária. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Generalização representa herança: a classe específica é um tipo da classe geral e herda características. A seta de triângulo vazio aponta para a classe geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "herança/especialização.",
      "is_correct": true,
      "explanation": "Correta. herança/especialização. Generalização representa herança: a classe específica é um tipo da classe geral e herda características. A seta de triângulo vazio aponta para a classe geral. No cenário, a condição decisiva é: A relação descrita é especialização/herança."
    },
    {
      "id": "D",
      "text": "composição parte-todo.",
      "is_correct": false,
      "explanation": "Incorreta. composição parte-todo. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Generalização representa herança: a classe específica é um tipo da classe geral e herda características. A seta de triângulo vazio aponta para a classe geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A relação descrita é especialização/herança. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Generalização e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Generalização representa herança: a classe específica é um tipo da classe geral e herda características. A seta de triângulo vazio aponta para a classe geral. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão testa semântica de relacionamento estrutural. O detalhe decisivo é reconhecer a função de Generalização no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "A seta de generalização aponta para a superclasse. Em revisão, associe Generalização à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Generalização representa herança e especialização. Na revisão, retenha a definição de Generalização, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0091

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0091",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Composição",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma parte cujo ciclo de vida depende do objeto que a contém é representada por",
  "alternatives": [
    {
      "id": "A",
      "text": "dependência simples.",
      "is_correct": false,
      "explanation": "Incorreta. dependência simples. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composição é relação parte-todo forte, com propriedade e dependência de ciclo de vida no modelo. Agregação compartilhada é mais fraca e não implica dependência de existência. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "agregação compartilhada.",
      "is_correct": false,
      "explanation": "Incorreta. agregação compartilhada. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composição é relação parte-todo forte, com propriedade e dependência de ciclo de vida no modelo. Agregação compartilhada é mais fraca e não implica dependência de existência. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "composição.",
      "is_correct": true,
      "explanation": "Correta. composição. Composição é relação parte-todo forte, com propriedade e dependência de ciclo de vida no modelo. Agregação compartilhada é mais fraca e não implica dependência de existência. No cenário, a condição decisiva é: A dependência do ciclo de vida da parte caracteriza composição."
    },
    {
      "id": "D",
      "text": "generalização.",
      "is_correct": false,
      "explanation": "Incorreta. generalização. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Composição é relação parte-todo forte, com propriedade e dependência de ciclo de vida no modelo. Agregação compartilhada é mais fraca e não implica dependência de existência. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A dependência do ciclo de vida da parte caracteriza composição. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Composição e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Composição é relação parte-todo forte, com propriedade e dependência de ciclo de vida no modelo. Agregação compartilhada é mais fraca e não implica dependência de existência. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca explora a diferença semântica entre agregação e composição. O detalhe decisivo é reconhecer a função de Composição no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Dependência de existência aponta para composição. Em revisão, associe Composição à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Composição é parte-todo forte; agregação é mais fraca. Na revisão, retenha a definição de Composição, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0092

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0092",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de sequência",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um diagrama de sequência, o tempo progride",
  "alternatives": [
    {
      "id": "A",
      "text": "em círculos concêntricos.",
      "is_correct": false,
      "explanation": "Incorreta. em círculos concêntricos. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagramas de sequência representam interações no tempo. Linhas de vida são verticais e mensagens cruzam horizontalmente; o tempo progride de cima para baixo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "por hierarquia de classes.",
      "is_correct": false,
      "explanation": "Incorreta. por hierarquia de classes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagramas de sequência representam interações no tempo. Linhas de vida são verticais e mensagens cruzam horizontalmente; o tempo progride de cima para baixo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "horizontalmente, da esquerda para a direita.",
      "is_correct": false,
      "explanation": "Incorreta. horizontalmente, da esquerda para a direita. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagramas de sequência representam interações no tempo. Linhas de vida são verticais e mensagens cruzam horizontalmente; o tempo progride de cima para baixo. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "verticalmente, de cima para baixo.",
      "is_correct": true,
      "explanation": "Correta. verticalmente, de cima para baixo. Diagramas de sequência representam interações no tempo. Linhas de vida são verticais e mensagens cruzam horizontalmente; o tempo progride de cima para baixo. No cenário, a condição decisiva é: O eixo vertical representa a passagem do tempo."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O eixo vertical representa a passagem do tempo. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de sequência e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagramas de sequência representam interações no tempo. Linhas de vida são verticais e mensagens cruzam horizontalmente; o tempo progride de cima para baixo. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão cobra notação básica de interação. O detalhe decisivo é reconhecer a função de Diagrama de sequência no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Tempo desce; mensagens cruzam entre linhas de vida. Em revisão, associe Diagrama de sequência à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Sequência mostra mensagens ao longo do tempo, de cima para baixo. Na revisão, retenha a definição de Diagrama de sequência, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0093

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0093",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de atividades",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um elemento que direciona o fluxo para caminhos alternativos conforme uma condição é o",
  "alternatives": [
    {
      "id": "A",
      "text": "nó de decisão.",
      "is_correct": true,
      "explanation": "Correta. nó de decisão. Diagrama de atividades modela fluxos. Nó de decisão escolhe saída conforme guarda; merge reúne caminhos; fork divide fluxo paralelo; join sincroniza. Linha de vida pertence a interação. No cenário, a condição decisiva é: O fluxo escolhe um caminho conforme condição, portanto nó de decisão."
    },
    {
      "id": "B",
      "text": "ator.",
      "is_correct": false,
      "explanation": "Incorreta. ator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de atividades modela fluxos. Nó de decisão escolhe saída conforme guarda; merge reúne caminhos; fork divide fluxo paralelo; join sincroniza. Linha de vida pertence a interação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "linha de vida.",
      "is_correct": false,
      "explanation": "Incorreta. linha de vida. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de atividades modela fluxos. Nó de decisão escolhe saída conforme guarda; merge reúne caminhos; fork divide fluxo paralelo; join sincroniza. Linha de vida pertence a interação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "porta de componente.",
      "is_correct": false,
      "explanation": "Incorreta. porta de componente. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de atividades modela fluxos. Nó de decisão escolhe saída conforme guarda; merge reúne caminhos; fork divide fluxo paralelo; join sincroniza. Linha de vida pertence a interação. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O fluxo escolhe um caminho conforme condição, portanto nó de decisão. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de atividades e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagrama de atividades modela fluxos. Nó de decisão escolhe saída conforme guarda; merge reúne caminhos; fork divide fluxo paralelo; join sincroniza. Linha de vida pertence a interação.",
    "bank_approach": "A banca diferencia elementos de fluxo e de outros diagramas. O detalhe decisivo é reconhecer a função de Diagrama de atividades no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Decisão escolhe; merge reúne; fork/join paralelizam. Em revisão, associe Diagrama de atividades à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Nó de decisão direciona fluxo conforme condição. Na revisão, retenha a definição de Diagrama de atividades, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0094

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0094",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de estados",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Estados possíveis de um pedido e transições disparadas por eventos são representados em",
  "alternatives": [
    {
      "id": "A",
      "text": "diagrama de implantação.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Máquina de estados modela estados e transições por eventos, com guardas e ações. É útil quando o comportamento depende do estado do objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "diagrama de componentes.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de componentes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Máquina de estados modela estados e transições por eventos, com guardas e ações. É útil quando o comportamento depende do estado do objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "diagrama de máquina de estados.",
      "is_correct": true,
      "explanation": "Correta. diagrama de máquina de estados. Máquina de estados modela estados e transições por eventos, com guardas e ações. É útil quando o comportamento depende do estado do objeto. No cenário, a condição decisiva é: O enunciado descreve estados e transições, finalidade do diagrama."
    },
    {
      "id": "D",
      "text": "diagrama de pacotes.",
      "is_correct": false,
      "explanation": "Incorreta. diagrama de pacotes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Máquina de estados modela estados e transições por eventos, com guardas e ações. É útil quando o comportamento depende do estado do objeto. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado descreve estados e transições, finalidade do diagrama. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de estados e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Máquina de estados modela estados e transições por eventos, com guardas e ações. É útil quando o comportamento depende do estado do objeto. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O item relaciona comportamento dependente de estado à representação UML. O detalhe decisivo é reconhecer a função de Diagrama de estados no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Estados, eventos e transições indicam máquina de estados. Em revisão, associe Diagrama de estados à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Máquina de estados representa estados e transições. Na revisão, retenha a definição de Diagrama de estados, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0095

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0095",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de componentes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A organização modular do software, suas interfaces e dependências é representada pelo diagrama de",
  "alternatives": [
    {
      "id": "A",
      "text": "atividades.",
      "is_correct": false,
      "explanation": "Incorreta. atividades. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de componentes é estrutural e mostra módulos, interfaces fornecidas/requeridas e dependências. Sequência mostra interação temporal; estados mostram comportamento por estado; atividades mostram fluxos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "componentes.",
      "is_correct": true,
      "explanation": "Correta. componentes. Diagrama de componentes é estrutural e mostra módulos, interfaces fornecidas/requeridas e dependências. Sequência mostra interação temporal; estados mostram comportamento por estado; atividades mostram fluxos. No cenário, a condição decisiva é: O foco é a organização modular e suas dependências."
    },
    {
      "id": "C",
      "text": "máquina de estados.",
      "is_correct": false,
      "explanation": "Incorreta. máquina de estados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de componentes é estrutural e mostra módulos, interfaces fornecidas/requeridas e dependências. Sequência mostra interação temporal; estados mostram comportamento por estado; atividades mostram fluxos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "sequência.",
      "is_correct": false,
      "explanation": "Incorreta. sequência. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de componentes é estrutural e mostra módulos, interfaces fornecidas/requeridas e dependências. Sequência mostra interação temporal; estados mostram comportamento por estado; atividades mostram fluxos. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O foco é a organização modular e suas dependências. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de componentes e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagrama de componentes é estrutural e mostra módulos, interfaces fornecidas/requeridas e dependências. Sequência mostra interação temporal; estados mostram comportamento por estado; atividades mostram fluxos.",
    "bank_approach": "A questão diferencia diagramas pelo aspecto do sistema modelado. O detalhe decisivo é reconhecer a função de Diagrama de componentes no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Componentes = módulos e interfaces; sequência = mensagens; atividades = fluxo.",
    "review_summary": "Diagrama de componentes modela módulos e interfaces/dependências. Na revisão, retenha a definição de Diagrama de componentes, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0096

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0096",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de implantação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A distribuição de artefatos executáveis em nós de hardware ou ambientes de execução é representada pelo diagrama de",
  "alternatives": [
    {
      "id": "A",
      "text": "implantação.",
      "is_correct": true,
      "explanation": "Correta. implantação. Diagrama de implantação representa nós, dispositivos, ambientes de execução, artefatos e conexões de comunicação. Modela topologia física/de execução. No cenário, a condição decisiva é: Nós e artefatos implantados caracterizam deployment."
    },
    {
      "id": "B",
      "text": "classes.",
      "is_correct": false,
      "explanation": "Incorreta. classes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de implantação representa nós, dispositivos, ambientes de execução, artefatos e conexões de comunicação. Modela topologia física/de execução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "casos de uso.",
      "is_correct": false,
      "explanation": "Incorreta. casos de uso. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de implantação representa nós, dispositivos, ambientes de execução, artefatos e conexões de comunicação. Modela topologia física/de execução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "atividades.",
      "is_correct": false,
      "explanation": "Incorreta. atividades. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de implantação representa nós, dispositivos, ambientes de execução, artefatos e conexões de comunicação. Modela topologia física/de execução. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "Nós e artefatos implantados caracterizam deployment. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de implantação e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagrama de implantação representa nós, dispositivos, ambientes de execução, artefatos e conexões de comunicação. Modela topologia física/de execução. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca distingue arquitetura lógica de distribuição física. O detalhe decisivo é reconhecer a função de Diagrama de implantação no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Nós, dispositivos e artefatos indicam implantação. Em revisão, associe Diagrama de implantação à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Diagrama de implantação representa topologia de execução. Na revisão, retenha a definição de Diagrama de implantação, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0097

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0097",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Include",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A relação <<include>> entre casos de uso indica que o comportamento incluído é",
  "alternatives": [
    {
      "id": "A",
      "text": "incorporado obrigatoriamente ao caso de uso base.",
      "is_correct": true,
      "explanation": "Correta. incorporado obrigatoriamente ao caso de uso base. Include reutiliza comportamento obrigatório de outro caso de uso. Extend acrescenta comportamento opcional/condicional. Generalização representa especialização; dependência de componente é estrutural. No cenário, a condição decisiva é: A obrigatoriedade distingue include de extend."
    },
    {
      "id": "B",
      "text": "uma especialização de ator.",
      "is_correct": false,
      "explanation": "Incorreta. uma especialização de ator. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Include reutiliza comportamento obrigatório de outro caso de uso. Extend acrescenta comportamento opcional/condicional. Generalização representa especialização; dependência de componente é estrutural. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "opcional e condicionado.",
      "is_correct": false,
      "explanation": "Incorreta. opcional e condicionado. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Include reutiliza comportamento obrigatório de outro caso de uso. Extend acrescenta comportamento opcional/condicional. Generalização representa especialização; dependência de componente é estrutural. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "uma dependência entre componentes.",
      "is_correct": false,
      "explanation": "Incorreta. uma dependência entre componentes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Include reutiliza comportamento obrigatório de outro caso de uso. Extend acrescenta comportamento opcional/condicional. Generalização representa especialização; dependência de componente é estrutural. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A obrigatoriedade distingue include de extend. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Include e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Include reutiliza comportamento obrigatório de outro caso de uso. Extend acrescenta comportamento opcional/condicional. Generalização representa especialização; dependência de componente é estrutural.",
    "bank_approach": "A banca explora a troca entre include e extend. O detalhe decisivo é reconhecer a função de Include no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Include = obrigatório; extend = opcional/condicional. Em revisão, associe Include à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Include incorpora comportamento obrigatório; extend adiciona comportamento condicionado."
  }
}
```

## Questão 0098

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0098",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Extend",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um caso de uso opcional executado somente quando determinada condição é satisfeita deve ser modelado por",
  "alternatives": [
    {
      "id": "A",
      "text": "<<extend>>.",
      "is_correct": true,
      "explanation": "Correta. <<extend>>. Extend adiciona comportamento opcional/condicional em ponto de extensão. Include incorpora comportamento obrigatório reutilizado. No cenário, a condição decisiva é: A funcionalidade não ocorre em todas as execuções, portanto extend."
    },
    {
      "id": "B",
      "text": "composição.",
      "is_correct": false,
      "explanation": "Incorreta. composição. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Extend adiciona comportamento opcional/condicional em ponto de extensão. Include incorpora comportamento obrigatório reutilizado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "generalização.",
      "is_correct": false,
      "explanation": "Incorreta. generalização. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Extend adiciona comportamento opcional/condicional em ponto de extensão. Include incorpora comportamento obrigatório reutilizado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "<<include>>.",
      "is_correct": false,
      "explanation": "Incorreta. <<include>>. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Extend adiciona comportamento opcional/condicional em ponto de extensão. Include incorpora comportamento obrigatório reutilizado. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A funcionalidade não ocorre em todas as execuções, portanto extend. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Extend e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Extend adiciona comportamento opcional/condicional em ponto de extensão. Include incorpora comportamento obrigatório reutilizado. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "O enunciado diferencia extensão condicional de comportamento obrigatório. O detalhe decisivo é reconhecer a função de Extend no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Opcional/condicional = extend; obrigatório = include. Em revisão, associe Extend à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Extend representa comportamento opcional ou condicionado. Na revisão, retenha a definição de Extend, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0099

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0099",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Atores",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um ator em um diagrama de casos de uso representa",
  "alternatives": [
    {
      "id": "A",
      "text": "uma classe interna com métodos privados.",
      "is_correct": false,
      "explanation": "Incorreta. uma classe interna com métodos privados. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Ator representa papel externo desempenhado por pessoa, organização, sistema ou dispositivo. Não precisa ser indivíduo específico nem componente interno. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "um servidor físico de implantação.",
      "is_correct": false,
      "explanation": "Incorreta. um servidor físico de implantação. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Ator representa papel externo desempenhado por pessoa, organização, sistema ou dispositivo. Não precisa ser indivíduo específico nem componente interno. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "C",
      "text": "um papel externo que interage com o sistema.",
      "is_correct": true,
      "explanation": "Correta. um papel externo que interage com o sistema. Ator representa papel externo desempenhado por pessoa, organização, sistema ou dispositivo. Não precisa ser indivíduo específico nem componente interno. No cenário, a condição decisiva é: A definição correta é papel externo que interage com o sistema."
    },
    {
      "id": "D",
      "text": "necessariamente uma pessoa física específica.",
      "is_correct": false,
      "explanation": "Incorreta. necessariamente uma pessoa física específica. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Ator representa papel externo desempenhado por pessoa, organização, sistema ou dispositivo. Não precisa ser indivíduo específico nem componente interno. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "A definição correta é papel externo que interage com o sistema. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Atores e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Ator representa papel externo desempenhado por pessoa, organização, sistema ou dispositivo. Não precisa ser indivíduo específico nem componente interno. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A questão verifica a abstração de ator. O detalhe decisivo é reconhecer a função de Atores no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Ator é papel externo, não necessariamente pessoa. Em revisão, associe Atores à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Ator representa papel externo que interage com o sistema. Na revisão, retenha a definição de Atores, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Questão 0100

```json
{
  "id": "MAT-ENGSOFT-COMPERVE-001-Q0100",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Engenharia de Software",
  "topic": "UML 2.0",
  "subtopic": "Diagrama de objetos",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para mostrar instâncias concretas e valores de atributos em determinado momento, utiliza-se o diagrama de",
  "alternatives": [
    {
      "id": "A",
      "text": "atividades.",
      "is_correct": false,
      "explanation": "Incorreta. atividades. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de objetos mostra instâncias, valores de atributos e ligações em uma configuração específica. Diagrama de classes descreve tipos e estrutura geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "B",
      "text": "objetos.",
      "is_correct": true,
      "explanation": "Correta. objetos. Diagrama de objetos mostra instâncias, valores de atributos e ligações em uma configuração específica. Diagrama de classes descreve tipos e estrutura geral. No cenário, a condição decisiva é: O enunciado pede instâncias concretas, portanto diagrama de objetos."
    },
    {
      "id": "C",
      "text": "componentes.",
      "is_correct": false,
      "explanation": "Incorreta. componentes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de objetos mostra instâncias, valores de atributos e ligações em uma configuração específica. Diagrama de classes descreve tipos e estrutura geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    },
    {
      "id": "D",
      "text": "classes.",
      "is_correct": false,
      "explanation": "Incorreta. classes. A alternativa é plausível por remeter a um conceito próximo, mas não resolve o requisito descrito. A distinção é a seguinte: Diagrama de objetos mostra instâncias, valores de atributos e ligações em uma configuração específica. Diagrama de classes descreve tipos e estrutura geral. Assim, não se deve confundir a finalidade dessa opção com a finalidade da alternativa correta."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado pede instâncias concretas, portanto diagrama de objetos. Para resolver itens semelhantes, localize no enunciado o requisito central, compare-o com a definição de Diagrama de objetos e descarte alternativas que descrevam outra finalidade ou etapa do processo.",
    "theoretical_content": "Diagrama de objetos mostra instâncias, valores de atributos e ligações em uma configuração específica. Diagrama de classes descreve tipos e estrutura geral. Na prática, a escolha desse conceito deve ser justificada pelo problema que ele resolve, pelos elementos envolvidos e pelas consequências de sua aplicação. Compare sempre sua finalidade com as alternativas próximas para evitar confusões terminológicas.",
    "bank_approach": "A banca distingue tipo/classe e instância/objeto. O detalhe decisivo é reconhecer a função de Diagrama de objetos no contexto apresentado, sem confundi-la com conceitos vizinhos.",
    "study_tip": "Classe é molde; objeto é instância. Em revisão, associe Diagrama de objetos à sua finalidade e procure no enunciado o verbo ou a condição que a caracteriza.",
    "review_summary": "Diagrama de objetos registra instâncias e valores em um momento. Na revisão, retenha a definição de Diagrama de objetos, sua finalidade e a principal distinção em relação às alternativas próximas."
  }
}
```

## Gabarito consolidado

01. A | 02. A | 03. A | 04. A | 05. A | 06. A | 07. A | 08. A | 09. A | 10. A

11. C | 12. B | 13. C | 14. D | 15. C | 16. C | 17. A | 18. C | 19. B | 20. C

21. C | 22. A | 23. B | 24. C | 25. B | 26. A | 27. B | 28. C | 29. C | 30. C

31. D | 32. B | 33. C | 34. D | 35. D | 36. B | 37. D | 38. A | 39. D | 40. A

41. A | 42. D | 43. B | 44. D | 45. B | 46. C | 47. C | 48. B | 49. C | 50. A

51. C | 52. C | 53. D | 54. A | 55. D | 56. C | 57. A | 58. A | 59. C | 60. A

61. B | 62. D | 63. A | 64. D | 65. C | 66. C | 67. B | 68. A | 69. C | 70. A

71. C | 72. D | 73. A | 74. B | 75. C | 76. D | 77. C | 78. A | 79. B | 80. C

81. C | 82. D | 83. B | 84. C | 85. D | 86. D | 87. C | 88. A | 89. A | 90. C

91. C | 92. D | 93. A | 94. C | 95. B | 96. A | 97. A | 98. A | 99. C | 100. B

## Encerramento

Total: **100 questões**, sendo **10 originais** e **90 inéditas**.
