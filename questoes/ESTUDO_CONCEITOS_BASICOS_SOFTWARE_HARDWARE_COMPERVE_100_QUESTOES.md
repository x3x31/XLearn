---
schema_version: "1.0"
material_id: "MAT-SH-COMPERVE-100"
bank: "COMPERVE"
subject: "Conceitos Básicos de Software e Hardware"
topic: "Definição, tipos, funções e características de software e hardware"
requested_questions: 100
original_questions: 5
generated_questions: 95
total_questions: 100
created_at: "2026-11-02"
language: "pt-BR"
---

# Material de Estudo — Conceitos Básicos de Software e Hardware

**Banca de referência:** COMPERVE  
**Conteúdo:** definição, tipos, funções e características de software e hardware.  
**Composição:** 5 questões originais de provas da COMPERVE e 95 questões inéditas.

## Organização do conteúdo

O material aborda hardware e software; firmware; software de sistema, aplicativo e utilitário; sistemas operacionais e drivers; CPU, ULA e GPU; memórias RAM, ROM/flash e cache; placa-mãe; HDD e SSD; periféricos de entrada, saída e híbridos; fonte de alimentação; BIOS/UEFI; USB; arquitetura de Von Neumann; software livre, código aberto e licenciamento.

As questões originais mantêm o texto e as alternativas das provas indicadas. As questões inéditas reproduzem características gerais documentadas no estilo da COMPERVE — quatro alternativas, uma resposta correta, linguagem técnica, questões conceituais e contextualizadas — sem copiar enunciados.

## Questões originais

## Questão 0001

```json
{
  "id": "MAT-SH-COMPERVE-Q0001",
  "type": "original",
  "source": {
    "exam": "Concurso Público UFRN — Edital nº 12/2019 — Técnico de Tecnologia da Informação",
    "year": 2019,
    "question_number": 21,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória CMOS e alimentação de memória de configuração",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em computadores desktop padrão do tipo PC, as informações de configuração inicial do computador são armazenadas em uma pequena memória, chamada memória de configuração ou memória CMOS (Complementary Metal Oxide Semiconductor), que se localiza integrada ao chipset da placa-mãe. Essa memória é volátil e seus dados são apagados quando o micro é desligado. Para evitar que essa perda de dados ocorra,",
  "alternatives": [
    {
      "id": "A",
      "text": "alimenta-se a CMOS por meio do chipset da placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. O chipset participa da comunicação e do controle de componentes, mas não substitui a fonte de energia de reserva que mantém a memória de configuração quando o computador está desligado."
    },
    {
      "id": "B",
      "text": "utiliza-se uma pequena bateria na placa-mãe, responsável por alimentar a CMOS.",
      "is_correct": true,
      "explanation": "Correta. A bateria da placa-mãe mantém a alimentação do circuito de memória de configuração e do relógio de tempo real quando o equipamento está desconectado da energia principal. Em computadores atuais, a implementação pode variar, mas a função da bateria de reserva permanece."
    },
    {
      "id": "C",
      "text": "o Setup reconfigura os dados da CMOS quando o micro é ligado.",
      "is_correct": false,
      "explanation": "Incorreta. O Setup é a interface de configuração do firmware; ele permite consultar e alterar parâmetros, mas não restaura automaticamente os dados perdidos como mecanismo de alimentação."
    },
    {
      "id": "D",
      "text": "a CMOS é inserida em um soquete alimentado pela placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A existência de um soquete não resolve a volatilidade. O elemento decisivo é a alimentação elétrica de reserva, normalmente fornecida pela bateria da placa-mãe."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado informa que a memória de configuração é volátil e pergunta como preservar seus dados quando o computador é desligado. Memória volátil exige energia para manter seu conteúdo. A bateria de reserva da placa-mãe fornece essa energia, sendo a alternativa B a única que apresenta o mecanismo adequado.",
    "theoretical_content": "A memória CMOS é uma denominação historicamente associada ao circuito de armazenamento de parâmetros de configuração do computador, como data, hora e opções de inicialização. A memória é volátil: sem alimentação, perde o conteúdo. A bateria tipo moeda, frequentemente CR2032 em desktops, mantém o circuito alimentado quando a fonte principal está desligada. É importante distinguir a memória de configuração do firmware BIOS/UEFI: o firmware fica em memória não volátil (flash), enquanto os parâmetros configuráveis tradicionalmente eram mantidos em memória alimentada por bateria. O Setup é o programa de configuração acessado durante a inicialização; ele não é a bateria nem a memória. Em equipamentos modernos, parte dessas informações pode ser armazenada em memória não volátil, de modo que a arquitetura concreta varia conforme a placa-mãe.",
    "bank_approach": "A questão usa uma descrição funcional e pede a solução para uma consequência da volatilidade. A banca aproxima componentes fisicamente relacionados — CMOS, chipset, Setup e bateria — para avaliar se o candidato distingue suas funções.",
    "study_tip": "Associe “volátil” à necessidade de alimentação contínua. Não confunda a bateria que mantém parâmetros com o firmware BIOS/UEFI, que é armazenado em memória flash.",
    "review_summary": "Memória volátil perde dados sem energia; bateria da placa-mãe mantém parâmetros e relógio; BIOS/UEFI é firmware não volátil; Setup é a interface de configuração."
  }
}
```

## Questão 0002

```json
{
  "id": "MAT-SH-COMPERVE-Q0002",
  "type": "original",
  "source": {
    "exam": "Concurso Público UFRN — Edital nº 12/2019 — Técnico de Tecnologia da Informação",
    "year": 2019,
    "question_number": 22,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento: comparação de desempenho entre SSD e HDD",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um ultrabook da UFRN apresentou problema em seu disco rígido, que precisará ser substituído. O técnico em tecnologia da informação foi acionado e ficou responsável por escolher a melhor especificação de disco compatível para efetuar a compra e substituição. Dentre as opções listadas no sistema de compras da instituição, a que apresenta a melhor performance é:",
  "alternatives": [
    {
      "id": "A",
      "text": "HD interno SSD 2,5\", 500 GB, interface serial ATA (SATA) 3Gb/s.",
      "is_correct": true,
      "explanation": "Correta. Um SSD utiliza memória flash e não possui pratos magnéticos nem cabeças móveis. Isso reduz latência e melhora o tempo de acesso e operações aleatórias em comparação com HDDs mecânicos. A interface SATA pode limitar a taxa sequencial máxima, mas não elimina a vantagem típica do SSD em acesso."
    },
    {
      "id": "B",
      "text": "HD interno 2,5\", 500 GB, interface serial ATA (SATA) 3Gb/s, cache 16MB, 7200RPM.",
      "is_correct": false,
      "explanation": "Incorreta. A rotação de 7200 RPM costuma oferecer desempenho superior ao de um HDD de 5400 RPM, mas ambos continuam sendo discos magnéticos mecânicos. Em geral, não superam um SSD em latência e acesso aleatório."
    },
    {
      "id": "C",
      "text": "HD interno 2,5\", 500 GB, interface serial ATA (SATA) 3Gb/s, cache 16MB, 5400RPM.",
      "is_correct": false,
      "explanation": "Incorreta. Um HDD de 5400 RPM gira mais lentamente que um modelo de 7200 RPM e tende a apresentar maior latência mecânica. Ainda assim, a comparação principal favorece o SSD."
    },
    {
      "id": "D",
      "text": "HD interno SAS 2,5\", 500GB, interface serial ATA (SATA) 3Gb/s.",
      "is_correct": false,
      "explanation": "Incorreta. A alternativa mistura a interface SAS com a indicação SATA, criando uma especificação inconsistente. SAS e SATA são interfaces distintas, embora existam controladoras SAS compatíveis com dispositivos SATA em determinadas condições."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A pergunta solicita a opção de melhor desempenho entre as especificações listadas. O SSD não possui partes móveis e apresenta menor latência e melhor desempenho em acessos aleatórios que os HDDs mecânicos. A opção A é a única que descreve um SSD e apresenta uma interface coerente.",
    "theoretical_content": "HDD (Hard Disk Drive) armazena dados magneticamente em pratos que giram; o cabeçote precisa se deslocar até a trilha e o setor, produzindo latência mecânica. RPM indica rotações por minuto: em condições comparáveis, 7200 RPM tende a reduzir a latência rotacional em relação a 5400 RPM. SSD (Solid State Drive) usa memória flash, sem partes móveis, oferecendo inicialização e abertura de aplicações geralmente mais rápidas, sobretudo em operações aleatórias. Cache é memória temporária usada pelo dispositivo, mas não transforma um HDD em SSD. SATA e SAS são interfaces de conexão; não devem ser confundidas com a tecnologia de armazenamento. A escolha real também exige verificar formato físico, espessura, interface suportada, capacidade e compatibilidade do equipamento.",
    "bank_approach": "A banca apresenta especificações técnicas próximas e exige comparação de características. O candidato deve distinguir tecnologia de armazenamento, interface e parâmetros de desempenho, sem concluir apenas pelo valor numérico mais alto.",
    "study_tip": "Primeiro identifique se o dispositivo é SSD ou HDD; depois compare interface e compatibilidade. RPM só se aplica a discos magnéticos com partes rotativas.",
    "review_summary": "SSD: memória flash, sem partes móveis, baixa latência. HDD: pratos magnéticos, cabeçotes e RPM. SATA e SAS são interfaces; cache é memória temporária."
  }
}
```

## Questão 0003

```json
{
  "id": "MAT-SH-COMPERVE-Q0003",
  "type": "original",
  "source": {
    "exam": "Concurso Público UFRN — Edital nº 12/2019 — Técnico de Tecnologia da Informação",
    "year": 2019,
    "question_number": 23,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos híbridos: entrada e saída",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Geralmente, os computadores desktop são compostos por um conjunto de dispositivos de entrada e saída de dados, também chamados de periféricos. Alguns periféricos são classificados como exclusivamente de entrada ou exclusivamente de saída, mas outros operam tanto em uma quanto em outra dependendo do momento de sua utilização, e, por esse motivo, são chamados de dispositivos híbridos. São exemplos de periféricos que se encaixam nessa última categoria:",
  "alternatives": [
    {
      "id": "A",
      "text": "pendrive, microfone, impressora térmica e teclado.",
      "is_correct": false,
      "explanation": "Incorreta. Pendrive pode ler e gravar dados, mas microfone e teclado são dispositivos de entrada, enquanto impressora térmica é de saída. O conjunto não é formado apenas por dispositivos híbridos."
    },
    {
      "id": "B",
      "text": "monitor touch screen, joystick, impressora laserjet e webcam.",
      "is_correct": false,
      "explanation": "Incorreta. Monitor touchscreen combina saída visual e entrada por toque, mas joystick e webcam são de entrada e impressora laserjet é de saída."
    },
    {
      "id": "C",
      "text": "DVD-RW, monitor, caixa de som e impressora multifuncional.",
      "is_correct": false,
      "explanation": "Incorreta. DVD-RW é regravável e pode realizar leitura e gravação; entretanto, monitor e caixa de som são de saída. Impressora multifuncional costuma combinar impressão (saída) e digitalização (entrada), mas o conjunto contém itens exclusivamente de saída."
    },
    {
      "id": "D",
      "text": "pendrive, disco rígido externo, impressora multifuncional e cartão de memória.",
      "is_correct": true,
      "explanation": "Correta. Pendrive, disco rígido externo e cartão de memória permitem leitura e gravação de dados; impressora multifuncional normalmente imprime e digitaliza. Portanto, os itens listados realizam operações de entrada e saída."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado define periférico híbrido como aquele que realiza entrada e saída. É preciso analisar a função de cada item. Pendrive, disco externo e cartão de memória recebem dados gravados pelo computador e fornecem dados para leitura. A multifuncional imprime e digitaliza. Assim, a alternativa D reúne dispositivos híbridos.",
    "theoretical_content": "Periféricos são dispositivos que permitem a comunicação entre o computador e o ambiente externo. Entrada significa enviar dados ou comandos ao sistema: teclado, mouse, microfone, scanner e webcam. Saída significa apresentar resultados: monitor convencional, impressora, alto-falante e projetor. Dispositivos híbridos executam ambas as funções. Um touchscreen apresenta imagens (saída) e recebe toques (entrada); armazenamento removível lê e grava; impressora multifuncional imprime e digitaliza. A classificação depende da função, não apenas do formato físico ou do nome comercial. Um monitor comum é de saída, mas um monitor com toque é híbrido.",
    "bank_approach": "A questão apresenta uma definição e pede exemplos que se enquadrem nela. A armadilha é incluir um dispositivo exclusivamente de entrada ou saída em um conjunto que deveria ser inteiramente híbrido.",
    "study_tip": "Classifique cada item separadamente: pergunte se ele envia dados ao computador, recebe dados do computador ou faz as duas coisas.",
    "review_summary": "Entrada: teclado, mouse, microfone, scanner. Saída: monitor comum, impressora, alto-falante. Híbridos: touchscreen, armazenamento de leitura/gravação e multifuncional."
  }
}
```

## Questão 0004

```json
{
  "id": "MAT-SH-COMPERVE-Q0004",
  "type": "original",
  "source": {
    "exam": "Concurso Público UFRN — Edital nº 130/2023 — Técnico de Tecnologia da Informação",
    "year": 2023,
    "question_number": 21,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Padrão USB4 versão 2.0 e características de interface",
  "difficulty": "hard",
  "cognitive_skill": "comprehension",
  "question_text": "A tecnologia que mudou a forma como dispositivos são conectados a computadores é a Universal Serial Bus (USB), evitando o uso de um tipo específico de conector para cada dispositivo. Nos últimos anos, essa tecnologia evoluiu para o padrão USB4 2.0. Uma característica desse novo padrão é",
  "alternatives": [
    {
      "id": "A",
      "text": "transmissão assimétrica, podendo usar três vias em uma única direção, havendo apenas uma via para o retorno.",
      "is_correct": true,
      "explanation": "Correta. O USB4 versão 2.0 pode operar em modo assimétrico de até 120 Gbit/s em uma direção e 40 Gbit/s na direção oposta, utilizando uma configuração de três vias para o sentido de maior tráfego e uma via para o retorno."
    },
    {
      "id": "B",
      "text": "velocidade de transmissão de dados superior a 120 Gbps, de forma assimétrica, utilizando quatro vias em uma única direção.",
      "is_correct": false,
      "explanation": "Incorreta. A taxa máxima anunciada no modo assimétrico é de 120 Gbit/s, não superior a 120 Gbit/s, e a distribuição de vias descrita não corresponde à configuração de três vias em um sentido e uma no outro."
    },
    {
      "id": "C",
      "text": "incompatibilidade com dispositivos USB Versão 1.0, USB 2.0, USB 3.2 e Thunderbolt™ 3.",
      "is_correct": false,
      "explanation": "Incorreta. O USB4 foi projetado considerando interoperabilidade com gerações USB anteriores e compatibilidade com Thunderbolt 3 em condições previstas pela especificação; não se pode afirmar incompatibilidade geral."
    },
    {
      "id": "D",
      "text": "funcionamento do padrão USB Power Delivery com capacidade de transmissão de energia elétrica limitada a 100 W.",
      "is_correct": false,
      "explanation": "Incorreta. O USB Power Delivery evoluiu além de 100 W; especificações mais recentes permitem níveis de potência superiores, conforme perfil, cabo e equipamento compatíveis."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "A questão cobra uma característica específica do USB4 2.0. A alternativa A descreve corretamente o modo assimétrico, com três vias para uma direção e uma para a direção oposta, alcançando até 120 Gbit/s em um sentido e 40 Gbit/s no outro.",
    "theoretical_content": "USB (Universal Serial Bus) é uma família de padrões de interface para comunicação e fornecimento de energia entre computadores e periféricos. É importante separar o formato físico do conector (por exemplo, USB-C) da versão/protocolo USB e das capacidades efetivamente negociadas. USB4 versão 2.0 amplia a largura de banda e admite operação simétrica de até 80 Gbit/s ou assimétrica de até 120 Gbit/s em uma direção e 40 Gbit/s na outra, quando os dispositivos, cabos e condições são compatíveis. USB Power Delivery é uma especificação relacionada à negociação e entrega de energia, não sinônimo da taxa de dados. A compatibilidade depende das versões e recursos suportados por cada ponta.",
    "bank_approach": "A banca utiliza números, direção de transmissão e compatibilidade como elementos discriminantes. O candidato precisa ler com precisão os valores e não confundir taxa de dados com potência elétrica.",
    "study_tip": "Em padrões de interface, separe três dimensões: conector, taxa de dados e fornecimento de energia. Observe expressões absolutas como “incompatível” e limites numéricos.",
    "review_summary": "USB4 2.0: até 80 Gbit/s simétricos ou até 120/40 Gbit/s assimétricos. USB-C é conector; USB Power Delivery trata de energia."
  }
}
```

## Questão 0005

```json
{
  "id": "MAT-SH-COMPERVE-Q0005",
  "type": "original",
  "source": {
    "exam": "Concurso Público UFRN — Edital nº 130/2023 — Técnico de Tecnologia da Informação",
    "year": 2023,
    "question_number": 22,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Arquitetura de Von Neumann e organização funcional do computador",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Os computadores modernos foram desenvolvidos a partir da arquitetura elaborada por Von Neumann, em 1946. Ela é composta por cinco elementos principais: unidade de entrada – fornece instruções e dados ao sistema; unidade de memória – armazena os dados do sistema; unidade lógica e aritmética – processa os dados; unidade de controle – controla a execução das instruções e o processamento dos dados; unidade de saída – apresenta os resultados dos dados processados. Nessa arquitetura,",
  "alternatives": [
    {
      "id": "A",
      "text": "o programa fica armazenado na memória do computador, juntamente com os dados a serem processados.",
      "is_correct": true,
      "explanation": "Correta. Na arquitetura clássica de Von Neumann, instruções do programa e dados compartilham a mesma memória principal e, em geral, o mesmo caminho de comunicação com a CPU. Essa característica é conhecida como conceito de programa armazenado."
    },
    {
      "id": "B",
      "text": "o processamento é mais rápido permitindo, assim, que o processador leia uma instrução enquanto, simultaneamente, acessa a memória de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação descreve uma característica associada à arquitetura Harvard ou a mecanismos de cache/pipeline em determinadas implementações, não a característica definidora clássica de Von Neumann. O compartilhamento do caminho pode gerar o gargalo de Von Neumann."
    },
    {
      "id": "C",
      "text": "os microcontroladores são também conhecidos como RISC (Computador com Conjunto Reduzido de Instruções).",
      "is_correct": false,
      "explanation": "Incorreta. RISC significa Reduced Instruction Set Computer, uma filosofia de projeto de conjunto de instruções; microcontrolador é um sistema computacional integrado em um chip, não um sinônimo de RISC."
    },
    {
      "id": "D",
      "text": "o programa fica armazenado em memória específica para isso, separado dos dados a serem processados.",
      "is_correct": false,
      "explanation": "Incorreta. Separar fisicamente ou funcionalmente memórias de instruções e dados é característica associada à arquitetura Harvard, não ao modelo clássico de Von Neumann."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado descreve os cinco elementos funcionais e pergunta como programa e dados são organizados. O princípio de programa armazenado de Von Neumann mantém instruções e dados na mesma memória. Por isso, a alternativa A está correta.",
    "theoretical_content": "A arquitetura de Von Neumann organiza o computador em unidades de entrada, memória, unidade lógica e aritmética (ULA), unidade de controle e saída. A CPU reúne principalmente ULA e unidade de controle. A característica central é o programa armazenado: instruções e dados ocupam a mesma memória principal e compartilham vias de comunicação. Isso simplifica a organização, mas pode limitar o desempenho quando instruções e dados disputam o mesmo caminho, fenômeno conhecido como gargalo de Von Neumann. Na arquitetura Harvard, memórias e/ou caminhos de instruções e dados são separados. Processadores reais podem combinar características por meio de caches separadas e outras otimizações; portanto, a questão trata do modelo clássico.",
    "bank_approach": "A banca apresenta uma definição técnica e pede a consequência estrutural que distingue arquiteturas. O distrator mais forte é a confusão entre Von Neumann e Harvard.",
    "study_tip": "Associe “programa armazenado junto aos dados” a Von Neumann; associe “memórias/caminhos separados para instruções e dados” a Harvard.",
    "review_summary": "Von Neumann: memória compartilhada para instruções e dados. Harvard: separação de memória/caminhos. ULA calcula e compara; controle coordena a execução."
  }
}
```

## Questões inéditas

## Questão 0006

```json
{
  "id": "MAT-SH-COMPERVE-Q0006",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Hardware",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a hardware, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É a parte lógica formada por programas, rotinas e instruções que orientam o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados.",
      "is_correct": true,
      "explanation": "Correta. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Isso se observa, por exemplo, em placa-mãe, processador, memória RAM, SSD, teclado e monitor. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
    },
    {
      "id": "C",
      "text": "É exclusivamente o conjunto de dados armazenados pelo usuário, sem incluir componentes físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de regras de licença que determina como os programas podem ser copiados e distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de hardware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. Um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de hardware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de hardware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados.",
    "review_summary": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos centrais: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Distinção importante: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
  }
}
```

## Questão 0007

```json
{
  "id": "MAT-SH-COMPERVE-Q0007",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Hardware",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente hardware. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a parte lógica formada por programas, rotinas e instruções que orientam o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É exclusivamente o conjunto de dados armazenados pelo usuário, sem incluir componentes físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o conjunto de regras de licença que determina como os programas podem ser copiados e distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados.",
      "is_correct": true,
      "explanation": "Correta. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Isso se observa, por exemplo, em placa-mãe, processador, memória RAM, SSD, teclado e monitor. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de hardware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. Um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de hardware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de hardware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados.",
    "review_summary": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos centrais: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Distinção importante: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
  }
}
```

## Questão 0008

```json
{
  "id": "MAT-SH-COMPERVE-Q0008",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Hardware",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de hardware, é correto afirmar que Considere que um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a parte lógica formada por programas, rotinas e instruções que orientam o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados.",
      "is_correct": true,
      "explanation": "Correta. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Isso se observa, por exemplo, em placa-mãe, processador, memória RAM, SSD, teclado e monitor. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
    },
    {
      "id": "C",
      "text": "É exclusivamente o conjunto de dados armazenados pelo usuário, sem incluir componentes físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de regras de licença que determina como os programas podem ser copiados e distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de hardware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. Um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de hardware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de hardware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados.",
    "review_summary": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos centrais: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Distinção importante: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
  }
}
```

## Questão 0009

```json
{
  "id": "MAT-SH-COMPERVE-Q0009",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Hardware",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre hardware: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a parte lógica formada por programas, rotinas e instruções que orientam o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É exclusivamente o conjunto de dados armazenados pelo usuário, sem incluir componentes físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o conjunto de regras de licença que determina como os programas podem ser copiados e distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados.",
      "is_correct": true,
      "explanation": "Correta. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Isso se observa, por exemplo, em placa-mãe, processador, memória RAM, SSD, teclado e monitor. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de hardware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. Um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de hardware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de hardware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados.",
    "review_summary": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos centrais: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Distinção importante: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
  }
}
```

## Questão 0010

```json
{
  "id": "MAT-SH-COMPERVE-Q0010",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Hardware",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre hardware. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a parte lógica formada por programas, rotinas e instruções que orientam o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados.",
      "is_correct": true,
      "explanation": "Correta. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Isso se observa, por exemplo, em placa-mãe, processador, memória RAM, SSD, teclado e monitor. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
    },
    {
      "id": "C",
      "text": "É exclusivamente o conjunto de dados armazenados pelo usuário, sem incluir componentes físicos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de regras de licença que determina como os programas podem ser copiados e distribuídos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde hardware com outro elemento do sistema computacional. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. O conceito correto é: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplo de aplicação: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de hardware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos: placa-mãe, processador, memória RAM, SSD, teclado e monitor. software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados. Um computador pode executar programas diferentes no mesmo hardware; trocar o programa não altera a natureza física dos componentes. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de hardware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de hardware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados.",
    "review_summary": "Hardware: Hardware corresponde à parte física do sistema computacional: componentes eletrônicos, elétricos, mecânicos e dispositivos que podem ser tocados ou fisicamente identificados. Exemplos centrais: placa-mãe, processador, memória RAM, SSD, teclado e monitor. Distinção importante: software, que representa instruções e programas; firmware, que é software de baixo nível gravado em memória não volátil; e dados, que são conteúdos processados."
  }
}
```

## Questão 0011

```json
{
  "id": "MAT-SH-COMPERVE-Q0011",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a software, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas.",
      "is_correct": true,
      "explanation": "Correta. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Isso se observa, por exemplo, em sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos e circuitos eletrônicos que executam operações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É exclusivamente a memória permanente que armazena o firmware de inicialização.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a estrutura mecânica do gabinete, dos conectores e dos dispositivos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. Um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software. Em seguida, elimine opções que descrevam funções de categorias vizinhas: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento.",
    "review_summary": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos centrais: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Distinção importante: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
  }
}
```

## Questão 0012

```json
{
  "id": "MAT-SH-COMPERVE-Q0012",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente software. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o conjunto de componentes físicos e circuitos eletrônicos que executam operações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É exclusivamente a memória permanente que armazena o firmware de inicialização.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas.",
      "is_correct": true,
      "explanation": "Correta. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Isso se observa, por exemplo, em sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
    },
    {
      "id": "D",
      "text": "É a estrutura mecânica do gabinete, dos conectores e dos dispositivos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. Um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software. Em seguida, elimine opções que descrevam funções de categorias vizinhas: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento.",
    "review_summary": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos centrais: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Distinção importante: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
  }
}
```

## Questão 0013

```json
{
  "id": "MAT-SH-COMPERVE-Q0013",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de software, é correto afirmar que Considere que um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas.",
      "is_correct": true,
      "explanation": "Correta. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Isso se observa, por exemplo, em sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos e circuitos eletrônicos que executam operações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É exclusivamente a memória permanente que armazena o firmware de inicialização.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a estrutura mecânica do gabinete, dos conectores e dos dispositivos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. Um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software. Em seguida, elimine opções que descrevam funções de categorias vizinhas: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento.",
    "review_summary": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos centrais: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Distinção importante: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
  }
}
```

## Questão 0014

```json
{
  "id": "MAT-SH-COMPERVE-Q0014",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre software: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o conjunto de componentes físicos e circuitos eletrônicos que executam operações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É exclusivamente a memória permanente que armazena o firmware de inicialização.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas.",
      "is_correct": true,
      "explanation": "Correta. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Isso se observa, por exemplo, em sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
    },
    {
      "id": "D",
      "text": "É a estrutura mecânica do gabinete, dos conectores e dos dispositivos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. Um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software. Em seguida, elimine opções que descrevam funções de categorias vizinhas: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento.",
    "review_summary": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos centrais: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Distinção importante: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
  }
}
```

## Questão 0015

```json
{
  "id": "MAT-SH-COMPERVE-Q0015",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre software. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas.",
      "is_correct": true,
      "explanation": "Correta. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Isso se observa, por exemplo, em sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos e circuitos eletrônicos que executam operações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É exclusivamente a memória permanente que armazena o firmware de inicialização.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a estrutura mecânica do gabinete, dos conectores e dos dispositivos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software com outro elemento do sistema computacional. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. O conceito correto é: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplo de aplicação: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento. Um aplicativo pode ser instalado, atualizado ou removido sem substituir fisicamente o processador ou a memória do computador. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software. Em seguida, elimine opções que descrevam funções de categorias vizinhas: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento.",
    "review_summary": "Software: Software é o conjunto organizado de programas, instruções, rotinas e dados associados que orientam o hardware na execução de tarefas. Exemplos centrais: sistema operacional, navegador, editor de texto, aplicativo de planilha e utilitário de backup. Distinção importante: hardware, que é a parte física; periférico, que é um dispositivo de entrada, saída ou entrada/saída; e firmware, que é software incorporado ao equipamento."
  }
}
```

## Questão 0016

```json
{
  "id": "MAT-SH-COMPERVE-Q0016",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Firmware",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a firmware, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É o aplicativo instalado pelo usuário para realizar tarefas de produtividade.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o driver instalado no sistema operacional, necessariamente executado apenas como periférico externo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória RAM que armazena temporariamente todos os programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação.",
      "is_correct": true,
      "explanation": "Correta. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Isso se observa, por exemplo, em BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de firmware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. Atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de firmware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de firmware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais.",
    "review_summary": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos centrais: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Distinção importante: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
  }
}
```

## Questão 0017

```json
{
  "id": "MAT-SH-COMPERVE-Q0017",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Firmware",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente firmware. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o aplicativo instalado pelo usuário para realizar tarefas de produtividade.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação.",
      "is_correct": true,
      "explanation": "Correta. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Isso se observa, por exemplo, em BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
    },
    {
      "id": "C",
      "text": "É o driver instalado no sistema operacional, necessariamente executado apenas como periférico externo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a memória RAM que armazena temporariamente todos os programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de firmware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. Atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de firmware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de firmware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais.",
    "review_summary": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos centrais: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Distinção importante: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
  }
}
```

## Questão 0018

```json
{
  "id": "MAT-SH-COMPERVE-Q0018",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Firmware",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de firmware, é correto afirmar que Considere que atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o aplicativo instalado pelo usuário para realizar tarefas de produtividade.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o driver instalado no sistema operacional, necessariamente executado apenas como periférico externo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória RAM que armazena temporariamente todos os programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação.",
      "is_correct": true,
      "explanation": "Correta. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Isso se observa, por exemplo, em BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de firmware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. Atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de firmware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de firmware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais.",
    "review_summary": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos centrais: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Distinção importante: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
  }
}
```

## Questão 0019

```json
{
  "id": "MAT-SH-COMPERVE-Q0019",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Firmware",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre firmware: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o aplicativo instalado pelo usuário para realizar tarefas de produtividade.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação.",
      "is_correct": true,
      "explanation": "Correta. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Isso se observa, por exemplo, em BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
    },
    {
      "id": "C",
      "text": "É o driver instalado no sistema operacional, necessariamente executado apenas como periférico externo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a memória RAM que armazena temporariamente todos os programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de firmware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. Atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de firmware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de firmware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais.",
    "review_summary": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos centrais: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Distinção importante: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
  }
}
```

## Questão 0020

```json
{
  "id": "MAT-SH-COMPERVE-Q0020",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Firmware",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre firmware. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o aplicativo instalado pelo usuário para realizar tarefas de produtividade.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o driver instalado no sistema operacional, necessariamente executado apenas como periférico externo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória RAM que armazena temporariamente todos os programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde firmware com outro elemento do sistema computacional. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. O conceito correto é: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplo de aplicação: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação.",
      "is_correct": true,
      "explanation": "Correta. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Isso se observa, por exemplo, em BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de firmware. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais. Atualizar o firmware de um roteador pode corrigir falhas e acrescentar funções, mas uma interrupção durante a gravação pode inutilizar o equipamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de firmware, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de firmware. Em seguida, elimine opções que descrevam funções de categorias vizinhas: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais.",
    "review_summary": "Firmware: Firmware é um tipo de software de baixo nível, armazenado em memória não volátil, que controla funções básicas de um equipamento e permite sua inicialização ou operação. Exemplos centrais: BIOS/UEFI de uma placa-mãe, firmware de roteador, controlador de SSD e software interno de impressora. Distinção importante: driver, que permite ao sistema operacional comunicar-se com o dispositivo; aplicativo, voltado a tarefas do usuário; e sistema operacional, que gerencia recursos gerais."
  }
}
```

## Questão 0021

```json
{
  "id": "MAT-SH-COMPERVE-Q0021",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software de sistema",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a software de sistema, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É um programa voltado exclusivamente à edição de documentos e criação de apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos responsáveis por executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware.",
      "is_correct": true,
      "explanation": "Correta. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Isso se observa, por exemplo, em sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
    },
    {
      "id": "D",
      "text": "É um conteúdo produzido pelo usuário e armazenado em arquivo, sem executar qualquer instrução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software de sistema. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software de sistema, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software de sistema. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível.",
    "review_summary": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos centrais: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Distinção importante: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
  }
}
```

## Questão 0022

```json
{
  "id": "MAT-SH-COMPERVE-Q0022",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software de sistema",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente software de sistema. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware.",
      "is_correct": true,
      "explanation": "Correta. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Isso se observa, por exemplo, em sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
    },
    {
      "id": "B",
      "text": "É um programa voltado exclusivamente à edição de documentos e criação de apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o conjunto de componentes físicos responsáveis por executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um conteúdo produzido pelo usuário e armazenado em arquivo, sem executar qualquer instrução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software de sistema. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software de sistema, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software de sistema. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível.",
    "review_summary": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos centrais: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Distinção importante: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
  }
}
```

## Questão 0023

```json
{
  "id": "MAT-SH-COMPERVE-Q0023",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software de sistema",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de software de sistema, é correto afirmar que Considere que o sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um programa voltado exclusivamente à edição de documentos e criação de apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos responsáveis por executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware.",
      "is_correct": true,
      "explanation": "Correta. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Isso se observa, por exemplo, em sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
    },
    {
      "id": "D",
      "text": "É um conteúdo produzido pelo usuário e armazenado em arquivo, sem executar qualquer instrução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software de sistema. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software de sistema, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software de sistema. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível.",
    "review_summary": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos centrais: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Distinção importante: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
  }
}
```

## Questão 0024

```json
{
  "id": "MAT-SH-COMPERVE-Q0024",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software de sistema",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre software de sistema: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware.",
      "is_correct": true,
      "explanation": "Correta. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Isso se observa, por exemplo, em sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
    },
    {
      "id": "B",
      "text": "É um programa voltado exclusivamente à edição de documentos e criação de apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o conjunto de componentes físicos responsáveis por executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um conteúdo produzido pelo usuário e armazenado em arquivo, sem executar qualquer instrução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software de sistema. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software de sistema, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software de sistema. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível.",
    "review_summary": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos centrais: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Distinção importante: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
  }
}
```

## Questão 0025

```json
{
  "id": "MAT-SH-COMPERVE-Q0025",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software de sistema",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre software de sistema. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um programa voltado exclusivamente à edição de documentos e criação de apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o conjunto de componentes físicos responsáveis por executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware.",
      "is_correct": true,
      "explanation": "Correta. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Isso se observa, por exemplo, em sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
    },
    {
      "id": "D",
      "text": "É um conteúdo produzido pelo usuário e armazenado em arquivo, sem executar qualquer instrução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software de sistema com outro elemento do sistema computacional. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O conceito correto é: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplo de aplicação: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software de sistema. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível. O sistema operacional gerencia processos, memória, arquivos e dispositivos, enquanto um editor de texto utiliza esses serviços para funcionar. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software de sistema, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software de sistema. Em seguida, elimine opções que descrevam funções de categorias vizinhas: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível.",
    "review_summary": "Software de sistema: Software de sistema administra o funcionamento do computador e oferece serviços básicos para os demais programas, atuando como intermediário entre aplicações e hardware. Exemplos centrais: sistemas operacionais, drivers, utilitários de sistema e ferramentas de inicialização. Distinção importante: software aplicativo, destinado a tarefas específicas do usuário; e firmware, incorporado ao equipamento e responsável por controles de baixo nível."
  }
}
```

## Questão 0026

```json
{
  "id": "MAT-SH-COMPERVE-Q0026",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software aplicativo",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a software aplicativo, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável por inicializar a placa-mãe e executar o POST.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Isso se observa, por exemplo, em editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
    },
    {
      "id": "C",
      "text": "É o software que gerencia diretamente a alocação de memória, processos e dispositivos de todo o sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o circuito eletrônico que interliga processador, memória e dispositivos de expansão.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software aplicativo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. Um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software aplicativo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software aplicativo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento.",
    "review_summary": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos centrais: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Distinção importante: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
  }
}
```

## Questão 0027

```json
{
  "id": "MAT-SH-COMPERVE-Q0027",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software aplicativo",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente software aplicativo. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável por inicializar a placa-mãe e executar o POST.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o software que gerencia diretamente a alocação de memória, processos e dispositivos de todo o sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o circuito eletrônico que interliga processador, memória e dispositivos de expansão.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Isso se observa, por exemplo, em editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software aplicativo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. Um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software aplicativo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software aplicativo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento.",
    "review_summary": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos centrais: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Distinção importante: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
  }
}
```

## Questão 0028

```json
{
  "id": "MAT-SH-COMPERVE-Q0028",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software aplicativo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de software aplicativo, é correto afirmar que Considere que um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável por inicializar a placa-mãe e executar o POST.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Isso se observa, por exemplo, em editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
    },
    {
      "id": "C",
      "text": "É o software que gerencia diretamente a alocação de memória, processos e dispositivos de todo o sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o circuito eletrônico que interliga processador, memória e dispositivos de expansão.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software aplicativo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. Um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software aplicativo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software aplicativo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento.",
    "review_summary": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos centrais: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Distinção importante: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
  }
}
```

## Questão 0029

```json
{
  "id": "MAT-SH-COMPERVE-Q0029",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software aplicativo",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre software aplicativo: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável por inicializar a placa-mãe e executar o POST.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o software que gerencia diretamente a alocação de memória, processos e dispositivos de todo o sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o circuito eletrônico que interliga processador, memória e dispositivos de expansão.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Isso se observa, por exemplo, em editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software aplicativo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. Um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software aplicativo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software aplicativo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento.",
    "review_summary": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos centrais: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Distinção importante: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
  }
}
```

## Questão 0030

```json
{
  "id": "MAT-SH-COMPERVE-Q0030",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software aplicativo",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre software aplicativo. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável por inicializar a placa-mãe e executar o POST.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Isso se observa, por exemplo, em editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
    },
    {
      "id": "C",
      "text": "É o software que gerencia diretamente a alocação de memória, processos e dispositivos de todo o sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o circuito eletrônico que interliga processador, memória e dispositivos de expansão.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software aplicativo com outro elemento do sistema computacional. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. O conceito correto é: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplo de aplicação: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software aplicativo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento. Um navegador permite acessar páginas e aplicações web; ele não substitui o sistema operacional que gerencia memória, processos e dispositivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software aplicativo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software aplicativo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento.",
    "review_summary": "Software aplicativo: Software aplicativo é desenvolvido para auxiliar o usuário na realização de tarefas específicas, pessoais ou profissionais, utilizando os serviços fornecidos pelo sistema operacional. Exemplos centrais: editor de texto, navegador web, sistema de folha de pagamento, aplicativo de videoconferência e planilha eletrônica. Distinção importante: sistema operacional, que gerencia recursos; driver, que controla a comunicação com um dispositivo; e firmware, que controla funções internas do equipamento."
  }
}
```

## Questão 0031

```json
{
  "id": "MAT-SH-COMPERVE-Q0031",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software utilitário",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a software utilitário, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Isso se observa, por exemplo, em antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
    },
    {
      "id": "B",
      "text": "É o software destinado exclusivamente à criação de conteúdo final, como textos e apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o firmware que controla a sequência elétrica de inicialização do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de periféricos utilizados para entrada e saída de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software utilitário. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. Um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software utilitário, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software utilitário. Em seguida, elimine opções que descrevam funções de categorias vizinhas: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico.",
    "review_summary": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos centrais: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Distinção importante: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
  }
}
```

## Questão 0032

```json
{
  "id": "MAT-SH-COMPERVE-Q0032",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software utilitário",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente software utilitário. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o software destinado exclusivamente à criação de conteúdo final, como textos e apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o firmware que controla a sequência elétrica de inicialização do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Isso se observa, por exemplo, em antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
    },
    {
      "id": "D",
      "text": "É o conjunto de periféricos utilizados para entrada e saída de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software utilitário. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. Um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software utilitário, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software utilitário. Em seguida, elimine opções que descrevam funções de categorias vizinhas: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico.",
    "review_summary": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos centrais: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Distinção importante: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
  }
}
```

## Questão 0033

```json
{
  "id": "MAT-SH-COMPERVE-Q0033",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software utilitário",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de software utilitário, é correto afirmar que Considere que um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Isso se observa, por exemplo, em antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
    },
    {
      "id": "B",
      "text": "É o software destinado exclusivamente à criação de conteúdo final, como textos e apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o firmware que controla a sequência elétrica de inicialização do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de periféricos utilizados para entrada e saída de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software utilitário. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. Um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software utilitário, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software utilitário. Em seguida, elimine opções que descrevam funções de categorias vizinhas: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico.",
    "review_summary": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos centrais: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Distinção importante: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
  }
}
```

## Questão 0034

```json
{
  "id": "MAT-SH-COMPERVE-Q0034",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software utilitário",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre software utilitário: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o software destinado exclusivamente à criação de conteúdo final, como textos e apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o firmware que controla a sequência elétrica de inicialização do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Isso se observa, por exemplo, em antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
    },
    {
      "id": "D",
      "text": "É o conjunto de periféricos utilizados para entrada e saída de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software utilitário. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. Um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software utilitário, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software utilitário. Em seguida, elimine opções que descrevam funções de categorias vizinhas: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico.",
    "review_summary": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos centrais: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Distinção importante: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
  }
}
```

## Questão 0035

```json
{
  "id": "MAT-SH-COMPERVE-Q0035",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Software utilitário",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre software utilitário. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional.",
      "is_correct": true,
      "explanation": "Correta. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Isso se observa, por exemplo, em antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
    },
    {
      "id": "B",
      "text": "É o software destinado exclusivamente à criação de conteúdo final, como textos e apresentações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o firmware que controla a sequência elétrica de inicialização do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de periféricos utilizados para entrada e saída de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde software utilitário com outro elemento do sistema computacional. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. O conceito correto é: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplo de aplicação: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de software utilitário. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico. Um programa de backup copia dados para permitir recuperação; não deve ser confundido com o próprio dispositivo físico de armazenamento. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de software utilitário, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de software utilitário. Em seguida, elimine opções que descrevam funções de categorias vizinhas: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico.",
    "review_summary": "Software utilitário: Software utilitário realiza tarefas de manutenção, diagnóstico, proteção, gerenciamento ou otimização do sistema, complementando as funções do sistema operacional. Exemplos centrais: antivírus, compactador de arquivos, ferramenta de backup, limpeza de disco e diagnóstico de memória. Distinção importante: aplicativo de produtividade, que cria conteúdo; firmware, que controla hardware; e driver, que habilita comunicação com um periférico."
  }
}
```

## Questão 0036

```json
{
  "id": "MAT-SH-COMPERVE-Q0036",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Sistema operacional",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a sistema operacional, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É um aplicativo especializado em uma única tarefa, sem gerenciar recursos do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um conjunto de circuitos responsáveis pelo processamento aritmético.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma licença que autoriza a cópia e a distribuição de programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários.",
      "is_correct": true,
      "explanation": "Correta. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Isso se observa, por exemplo, em Windows, GNU/Linux, macOS, Android e iOS. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de sistema operacional. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos: Windows, GNU/Linux, macOS, Android e iOS. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de sistema operacional, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de sistema operacional. Em seguida, elimine opções que descrevam funções de categorias vizinhas: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento.",
    "review_summary": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos centrais: Windows, GNU/Linux, macOS, Android e iOS. Distinção importante: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
  }
}
```

## Questão 0037

```json
{
  "id": "MAT-SH-COMPERVE-Q0037",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Sistema operacional",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente sistema operacional. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: Windows, GNU/Linux, macOS, Android e iOS. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um aplicativo especializado em uma única tarefa, sem gerenciar recursos do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários.",
      "is_correct": true,
      "explanation": "Correta. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Isso se observa, por exemplo, em Windows, GNU/Linux, macOS, Android e iOS. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
    },
    {
      "id": "C",
      "text": "É um conjunto de circuitos responsáveis pelo processamento aritmético.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É uma licença que autoriza a cópia e a distribuição de programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de sistema operacional. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos: Windows, GNU/Linux, macOS, Android e iOS. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de sistema operacional, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de sistema operacional. Em seguida, elimine opções que descrevam funções de categorias vizinhas: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento.",
    "review_summary": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos centrais: Windows, GNU/Linux, macOS, Android e iOS. Distinção importante: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
  }
}
```

## Questão 0038

```json
{
  "id": "MAT-SH-COMPERVE-Q0038",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Sistema operacional",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de sistema operacional, é correto afirmar que Considere que o sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um aplicativo especializado em uma única tarefa, sem gerenciar recursos do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um conjunto de circuitos responsáveis pelo processamento aritmético.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma licença que autoriza a cópia e a distribuição de programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários.",
      "is_correct": true,
      "explanation": "Correta. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Isso se observa, por exemplo, em Windows, GNU/Linux, macOS, Android e iOS. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de sistema operacional. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos: Windows, GNU/Linux, macOS, Android e iOS. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de sistema operacional, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de sistema operacional. Em seguida, elimine opções que descrevam funções de categorias vizinhas: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento.",
    "review_summary": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos centrais: Windows, GNU/Linux, macOS, Android e iOS. Distinção importante: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
  }
}
```

## Questão 0039

```json
{
  "id": "MAT-SH-COMPERVE-Q0039",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Sistema operacional",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre sistema operacional: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um aplicativo especializado em uma única tarefa, sem gerenciar recursos do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários.",
      "is_correct": true,
      "explanation": "Correta. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Isso se observa, por exemplo, em Windows, GNU/Linux, macOS, Android e iOS. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
    },
    {
      "id": "C",
      "text": "É um conjunto de circuitos responsáveis pelo processamento aritmético.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É uma licença que autoriza a cópia e a distribuição de programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de sistema operacional. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos: Windows, GNU/Linux, macOS, Android e iOS. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de sistema operacional, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de sistema operacional. Em seguida, elimine opções que descrevam funções de categorias vizinhas: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento.",
    "review_summary": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos centrais: Windows, GNU/Linux, macOS, Android e iOS. Distinção importante: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
  }
}
```

## Questão 0040

```json
{
  "id": "MAT-SH-COMPERVE-Q0040",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Sistema operacional",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre sistema operacional. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É um aplicativo especializado em uma única tarefa, sem gerenciar recursos do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um conjunto de circuitos responsáveis pelo processamento aritmético.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma licença que autoriza a cópia e a distribuição de programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde sistema operacional com outro elemento do sistema computacional. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O conceito correto é: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplo de aplicação: Windows, GNU/Linux, macOS, Android e iOS. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários.",
      "is_correct": true,
      "explanation": "Correta. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Isso se observa, por exemplo, em Windows, GNU/Linux, macOS, Android e iOS. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de sistema operacional. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos: Windows, GNU/Linux, macOS, Android e iOS. navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento. O sistema operacional organiza processos, memória, arquivos, usuários e dispositivos, além de fornecer interface gráfica ou linha de comando. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de sistema operacional, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de sistema operacional. Em seguida, elimine opções que descrevam funções de categorias vizinhas: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento.",
    "review_summary": "Sistema operacional: Sistema operacional é o software básico que gerencia recursos de hardware e oferece serviços e interfaces para programas e usuários. Exemplos centrais: Windows, GNU/Linux, macOS, Android e iOS. Distinção importante: navegador, que é aplicativo; BIOS/UEFI, que é firmware; e compilador, que é ferramenta de desenvolvimento."
  }
}
```

## Questão 0041

```json
{
  "id": "MAT-SH-COMPERVE-Q0041",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Driver de dispositivo",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a driver de dispositivo, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É o próprio dispositivo físico conectado ao computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um aplicativo de uso geral que não participa da comunicação com hardware.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados.",
      "is_correct": true,
      "explanation": "Correta. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Isso se observa, por exemplo, em driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
    },
    {
      "id": "D",
      "text": "É o firmware da placa-mãe que substitui integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de driver de dispositivo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. Instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de driver de dispositivo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de driver de dispositivo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos.",
    "review_summary": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos centrais: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Distinção importante: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
  }
}
```

## Questão 0042

```json
{
  "id": "MAT-SH-COMPERVE-Q0042",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Driver de dispositivo",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente driver de dispositivo. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados.",
      "is_correct": true,
      "explanation": "Correta. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Isso se observa, por exemplo, em driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
    },
    {
      "id": "B",
      "text": "É o próprio dispositivo físico conectado ao computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É um aplicativo de uso geral que não participa da comunicação com hardware.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o firmware da placa-mãe que substitui integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de driver de dispositivo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. Instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de driver de dispositivo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de driver de dispositivo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos.",
    "review_summary": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos centrais: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Distinção importante: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
  }
}
```

## Questão 0043

```json
{
  "id": "MAT-SH-COMPERVE-Q0043",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Driver de dispositivo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de driver de dispositivo, é correto afirmar que Considere que instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o próprio dispositivo físico conectado ao computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um aplicativo de uso geral que não participa da comunicação com hardware.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados.",
      "is_correct": true,
      "explanation": "Correta. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Isso se observa, por exemplo, em driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
    },
    {
      "id": "D",
      "text": "É o firmware da placa-mãe que substitui integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de driver de dispositivo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. Instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de driver de dispositivo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de driver de dispositivo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos.",
    "review_summary": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos centrais: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Distinção importante: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
  }
}
```

## Questão 0044

```json
{
  "id": "MAT-SH-COMPERVE-Q0044",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Driver de dispositivo",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre driver de dispositivo: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados.",
      "is_correct": true,
      "explanation": "Correta. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Isso se observa, por exemplo, em driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
    },
    {
      "id": "B",
      "text": "É o próprio dispositivo físico conectado ao computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É um aplicativo de uso geral que não participa da comunicação com hardware.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o firmware da placa-mãe que substitui integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de driver de dispositivo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. Instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de driver de dispositivo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de driver de dispositivo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos.",
    "review_summary": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos centrais: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Distinção importante: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
  }
}
```

## Questão 0045

```json
{
  "id": "MAT-SH-COMPERVE-Q0045",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Driver de dispositivo",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre driver de dispositivo. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o próprio dispositivo físico conectado ao computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um aplicativo de uso geral que não participa da comunicação com hardware.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados.",
      "is_correct": true,
      "explanation": "Correta. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Isso se observa, por exemplo, em driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
    },
    {
      "id": "D",
      "text": "É o firmware da placa-mãe que substitui integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde driver de dispositivo com outro elemento do sistema computacional. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. O conceito correto é: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplo de aplicação: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de driver de dispositivo. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos. Instalar o driver correto pode habilitar recursos específicos de uma impressora ou placa de vídeo; o driver não é o próprio periférico. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de driver de dispositivo, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de driver de dispositivo. Em seguida, elimine opções que descrevam funções de categorias vizinhas: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos.",
    "review_summary": "Driver de dispositivo: Driver é um componente de software que permite ao sistema operacional reconhecer, controlar e utilizar um dispositivo de hardware por meio de comandos e interfaces apropriados. Exemplos centrais: driver de impressora, de placa de vídeo, de áudio e de adaptador de rede. Distinção importante: firmware, que executa no próprio dispositivo; aplicativo, que atende o usuário; e sistema operacional, que gerencia o conjunto dos recursos."
  }
}
```

## Questão 0046

```json
{
  "id": "MAT-SH-COMPERVE-Q0046",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Processador (CPU)",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a processador (cpu), assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória não volátil que armazena permanentemente os documentos e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema.",
      "is_correct": true,
      "explanation": "Correta. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Isso se observa, por exemplo, em núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
    },
    {
      "id": "C",
      "text": "É o dispositivo que apresenta imagens ao usuário, sem executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a fonte que converte energia alternada em tensões contínuas para o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de processador (cpu). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. A CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de processador (cpu), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de processador (cpu). Em seguida, elimine opções que descrevam funções de categorias vizinhas: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico.",
    "review_summary": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos centrais: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Distinção importante: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
  }
}
```

## Questão 0047

```json
{
  "id": "MAT-SH-COMPERVE-Q0047",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Processador (CPU)",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente processador (cpu). Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória não volátil que armazena permanentemente os documentos e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o dispositivo que apresenta imagens ao usuário, sem executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a fonte que converte energia alternada em tensões contínuas para o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema.",
      "is_correct": true,
      "explanation": "Correta. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Isso se observa, por exemplo, em núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de processador (cpu). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. A CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de processador (cpu), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de processador (cpu). Em seguida, elimine opções que descrevam funções de categorias vizinhas: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico.",
    "review_summary": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos centrais: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Distinção importante: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
  }
}
```

## Questão 0048

```json
{
  "id": "MAT-SH-COMPERVE-Q0048",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Processador (CPU)",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de processador (cpu), é correto afirmar que Considere que a CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória não volátil que armazena permanentemente os documentos e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema.",
      "is_correct": true,
      "explanation": "Correta. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Isso se observa, por exemplo, em núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
    },
    {
      "id": "C",
      "text": "É o dispositivo que apresenta imagens ao usuário, sem executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a fonte que converte energia alternada em tensões contínuas para o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de processador (cpu). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. A CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de processador (cpu), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de processador (cpu). Em seguida, elimine opções que descrevam funções de categorias vizinhas: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico.",
    "review_summary": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos centrais: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Distinção importante: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
  }
}
```

## Questão 0049

```json
{
  "id": "MAT-SH-COMPERVE-Q0049",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Processador (CPU)",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre processador (cpu): I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória não volátil que armazena permanentemente os documentos e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É o dispositivo que apresenta imagens ao usuário, sem executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a fonte que converte energia alternada em tensões contínuas para o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema.",
      "is_correct": true,
      "explanation": "Correta. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Isso se observa, por exemplo, em núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de processador (cpu). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. A CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de processador (cpu), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de processador (cpu). Em seguida, elimine opções que descrevam funções de categorias vizinhas: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico.",
    "review_summary": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos centrais: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Distinção importante: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
  }
}
```

## Questão 0050

```json
{
  "id": "MAT-SH-COMPERVE-Q0050",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Processador (CPU)",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre processador (cpu). Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória não volátil que armazena permanentemente os documentos e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema.",
      "is_correct": true,
      "explanation": "Correta. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Isso se observa, por exemplo, em núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
    },
    {
      "id": "C",
      "text": "É o dispositivo que apresenta imagens ao usuário, sem executar instruções.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a fonte que converte energia alternada em tensões contínuas para o computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde processador (cpu) com outro elemento do sistema computacional. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. O conceito correto é: A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplo de aplicação: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de processador (cpu). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico. A CPU executa instruções de programas e coordena operações; ela não é o local de armazenamento permanente dos arquivos. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de processador (cpu), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de processador (cpu). Em seguida, elimine opções que descrevam funções de categorias vizinhas: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico.",
    "review_summary": "Processador (CPU): A CPU é a unidade central de processamento, responsável por buscar, interpretar e executar instruções, realizando operações e coordenando atividades do sistema. Exemplos centrais: núcleos de processamento, unidade de controle, registradores e unidade lógica e aritmética. Distinção importante: memória RAM, que armazena temporariamente dados e instruções; SSD, que mantém dados persistentes; e GPU, especializada em processamento paralelo gráfico."
  }
}
```

## Questão 0051

```json
{
  "id": "MAT-SH-COMPERVE-Q0051",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Unidade lógica e aritmética (ULA)",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a unidade lógica e aritmética (ula), assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade.",
      "is_correct": true,
      "explanation": "Correta. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Isso se observa, por exemplo, em soma de valores, comparação entre números e operações booleanas. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
    },
    {
      "id": "B",
      "text": "É a unidade que controla a sequência de busca e execução das instruções, sem realizar cálculos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória externa que mantém arquivos mesmo após o desligamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de conectores que interliga os dispositivos à placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de unidade lógica e aritmética (ula). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos: soma de valores, comparação entre números e operações booleanas. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. Ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de unidade lógica e aritmética (ula), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de unidade lógica e aritmética (ula). Em seguida, elimine opções que descrevam funções de categorias vizinhas: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos.",
    "review_summary": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos centrais: soma de valores, comparação entre números e operações booleanas. Distinção importante: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
  }
}
```

## Questão 0052

```json
{
  "id": "MAT-SH-COMPERVE-Q0052",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Unidade lógica e aritmética (ULA)",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente unidade lógica e aritmética (ula). Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: soma de valores, comparação entre números e operações booleanas. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a unidade que controla a sequência de busca e execução das instruções, sem realizar cálculos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória externa que mantém arquivos mesmo após o desligamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade.",
      "is_correct": true,
      "explanation": "Correta. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Isso se observa, por exemplo, em soma de valores, comparação entre números e operações booleanas. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
    },
    {
      "id": "D",
      "text": "É o conjunto de conectores que interliga os dispositivos à placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de unidade lógica e aritmética (ula). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos: soma de valores, comparação entre números e operações booleanas. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. Ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de unidade lógica e aritmética (ula), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de unidade lógica e aritmética (ula). Em seguida, elimine opções que descrevam funções de categorias vizinhas: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos.",
    "review_summary": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos centrais: soma de valores, comparação entre números e operações booleanas. Distinção importante: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
  }
}
```

## Questão 0053

```json
{
  "id": "MAT-SH-COMPERVE-Q0053",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Unidade lógica e aritmética (ULA)",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de unidade lógica e aritmética (ula), é correto afirmar que Considere que ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. ",
  "alternatives": [
    {
      "id": "A",
      "text": "A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade.",
      "is_correct": true,
      "explanation": "Correta. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Isso se observa, por exemplo, em soma de valores, comparação entre números e operações booleanas. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
    },
    {
      "id": "B",
      "text": "É a unidade que controla a sequência de busca e execução das instruções, sem realizar cálculos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória externa que mantém arquivos mesmo após o desligamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de conectores que interliga os dispositivos à placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de unidade lógica e aritmética (ula). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos: soma de valores, comparação entre números e operações booleanas. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. Ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de unidade lógica e aritmética (ula), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de unidade lógica e aritmética (ula). Em seguida, elimine opções que descrevam funções de categorias vizinhas: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos.",
    "review_summary": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos centrais: soma de valores, comparação entre números e operações booleanas. Distinção importante: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
  }
}
```

## Questão 0054

```json
{
  "id": "MAT-SH-COMPERVE-Q0054",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Unidade lógica e aritmética (ULA)",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre unidade lógica e aritmética (ula): I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a unidade que controla a sequência de busca e execução das instruções, sem realizar cálculos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória externa que mantém arquivos mesmo após o desligamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade.",
      "is_correct": true,
      "explanation": "Correta. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Isso se observa, por exemplo, em soma de valores, comparação entre números e operações booleanas. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
    },
    {
      "id": "D",
      "text": "É o conjunto de conectores que interliga os dispositivos à placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de unidade lógica e aritmética (ula). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos: soma de valores, comparação entre números e operações booleanas. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. Ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de unidade lógica e aritmética (ula), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de unidade lógica e aritmética (ula). Em seguida, elimine opções que descrevam funções de categorias vizinhas: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos.",
    "review_summary": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos centrais: soma de valores, comparação entre números e operações booleanas. Distinção importante: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
  }
}
```

## Questão 0055

```json
{
  "id": "MAT-SH-COMPERVE-Q0055",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Unidade lógica e aritmética (ULA)",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre unidade lógica e aritmética (ula). Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade.",
      "is_correct": true,
      "explanation": "Correta. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Isso se observa, por exemplo, em soma de valores, comparação entre números e operações booleanas. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
    },
    {
      "id": "B",
      "text": "É a unidade que controla a sequência de busca e execução das instruções, sem realizar cálculos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória externa que mantém arquivos mesmo após o desligamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o conjunto de conectores que interliga os dispositivos à placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde unidade lógica e aritmética (ula) com outro elemento do sistema computacional. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. O conceito correto é: A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplo de aplicação: soma de valores, comparação entre números e operações booleanas. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de unidade lógica e aritmética (ula). O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos: soma de valores, comparação entre números e operações booleanas. unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos. Ao avaliar se um valor é maior que outro, a ULA realiza uma comparação; a unidade de controle organiza quando essa operação deve ocorrer. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de unidade lógica e aritmética (ula), e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de unidade lógica e aritmética (ula). Em seguida, elimine opções que descrevam funções de categorias vizinhas: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos.",
    "review_summary": "Unidade lógica e aritmética (ULA): A ULA é a parte da CPU que executa operações aritméticas, como soma e subtração, e operações lógicas e de comparação, como AND, OR e igualdade. Exemplos centrais: soma de valores, comparação entre números e operações booleanas. Distinção importante: unidade de controle, que coordena a sequência de execução; registrador, que armazena valores de uso imediato; e memória secundária, que guarda arquivos."
  }
}
```

## Questão 0056

```json
{
  "id": "MAT-SH-COMPERVE-Q0056",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória RAM",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a memória ram, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É uma memória não volátil destinada a preservar o conteúdo mesmo sem alimentação.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um dispositivo mecânico de armazenamento magnético que utiliza pratos giratórios.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma memória exclusiva da placa de vídeo, utilizada apenas para saída de imagem.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador.",
      "is_correct": true,
      "explanation": "Correta. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Isso se observa, por exemplo, em dados de aplicativos abertos, partes do sistema operacional e documentos em edição. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória ram. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. Ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória ram, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória ram. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento.",
    "review_summary": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos centrais: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Distinção importante: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
  }
}
```

## Questão 0057

```json
{
  "id": "MAT-SH-COMPERVE-Q0057",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória RAM",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente memória ram. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É uma memória não volátil destinada a preservar o conteúdo mesmo sem alimentação.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador.",
      "is_correct": true,
      "explanation": "Correta. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Isso se observa, por exemplo, em dados de aplicativos abertos, partes do sistema operacional e documentos em edição. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
    },
    {
      "id": "C",
      "text": "É um dispositivo mecânico de armazenamento magnético que utiliza pratos giratórios.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É uma memória exclusiva da placa de vídeo, utilizada apenas para saída de imagem.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória ram. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. Ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória ram, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória ram. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento.",
    "review_summary": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos centrais: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Distinção importante: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
  }
}
```

## Questão 0058

```json
{
  "id": "MAT-SH-COMPERVE-Q0058",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória RAM",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de memória ram, é correto afirmar que Considere que ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É uma memória não volátil destinada a preservar o conteúdo mesmo sem alimentação.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um dispositivo mecânico de armazenamento magnético que utiliza pratos giratórios.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma memória exclusiva da placa de vídeo, utilizada apenas para saída de imagem.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador.",
      "is_correct": true,
      "explanation": "Correta. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Isso se observa, por exemplo, em dados de aplicativos abertos, partes do sistema operacional e documentos em edição. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória ram. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. Ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória ram, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória ram. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento.",
    "review_summary": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos centrais: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Distinção importante: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
  }
}
```

## Questão 0059

```json
{
  "id": "MAT-SH-COMPERVE-Q0059",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória RAM",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre memória ram: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É uma memória não volátil destinada a preservar o conteúdo mesmo sem alimentação.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador.",
      "is_correct": true,
      "explanation": "Correta. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Isso se observa, por exemplo, em dados de aplicativos abertos, partes do sistema operacional e documentos em edição. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
    },
    {
      "id": "C",
      "text": "É um dispositivo mecânico de armazenamento magnético que utiliza pratos giratórios.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É uma memória exclusiva da placa de vídeo, utilizada apenas para saída de imagem.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória ram. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. Ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória ram, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória ram. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento.",
    "review_summary": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos centrais: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Distinção importante: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
  }
}
```

## Questão 0060

```json
{
  "id": "MAT-SH-COMPERVE-Q0060",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória RAM",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre memória ram. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É uma memória não volátil destinada a preservar o conteúdo mesmo sem alimentação.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É um dispositivo mecânico de armazenamento magnético que utiliza pratos giratórios.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É uma memória exclusiva da placa de vídeo, utilizada apenas para saída de imagem.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória ram com outro elemento do sistema computacional. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. O conceito correto é: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplo de aplicação: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador.",
      "is_correct": true,
      "explanation": "Correta. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Isso se observa, por exemplo, em dados de aplicativos abertos, partes do sistema operacional e documentos em edição. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória ram. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento. Ao desligar o computador, o conteúdo da RAM é normalmente perdido; arquivos salvos em SSD permanecem armazenados. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória ram, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória ram. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento.",
    "review_summary": "Memória RAM: RAM é a memória principal de acesso aleatório utilizada para manter temporariamente programas e dados em uso, permitindo acesso rápido pelo processador. Exemplos centrais: dados de aplicativos abertos, partes do sistema operacional e documentos em edição. Distinção importante: SSD ou HDD, que preservam dados sem energia; ROM/flash, que mantém conteúdo não volátil; e cache, que é menor e mais próxima do núcleo de processamento."
  }
}
```

## Questão 0061

```json
{
  "id": "MAT-SH-COMPERVE-Q0061",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória ROM e memória flash",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a memória rom e memória flash, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória principal volátil que mantém os programas ativos enquanto o computador está ligado.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória cache interna da CPU, cuja finalidade é acelerar acessos frequentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente.",
      "is_correct": true,
      "explanation": "Correta. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Isso se observa, por exemplo, em firmware de inicialização, configuração persistente e programas internos de dispositivos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
    },
    {
      "id": "D",
      "text": "É o armazenamento magnético que depende da rotação de pratos para acessar os dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória rom e memória flash. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. A memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória rom e memória flash, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória rom e memória flash. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU.",
    "review_summary": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos centrais: firmware de inicialização, configuração persistente e programas internos de dispositivos. Distinção importante: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
  }
}
```

## Questão 0062

```json
{
  "id": "MAT-SH-COMPERVE-Q0062",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória ROM e memória flash",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente memória rom e memória flash. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente.",
      "is_correct": true,
      "explanation": "Correta. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Isso se observa, por exemplo, em firmware de inicialização, configuração persistente e programas internos de dispositivos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
    },
    {
      "id": "B",
      "text": "É a memória principal volátil que mantém os programas ativos enquanto o computador está ligado.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória cache interna da CPU, cuja finalidade é acelerar acessos frequentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o armazenamento magnético que depende da rotação de pratos para acessar os dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória rom e memória flash. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. A memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória rom e memória flash, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória rom e memória flash. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU.",
    "review_summary": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos centrais: firmware de inicialização, configuração persistente e programas internos de dispositivos. Distinção importante: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
  }
}
```

## Questão 0063

```json
{
  "id": "MAT-SH-COMPERVE-Q0063",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória ROM e memória flash",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de memória rom e memória flash, é correto afirmar que Considere que a memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória principal volátil que mantém os programas ativos enquanto o computador está ligado.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória cache interna da CPU, cuja finalidade é acelerar acessos frequentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente.",
      "is_correct": true,
      "explanation": "Correta. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Isso se observa, por exemplo, em firmware de inicialização, configuração persistente e programas internos de dispositivos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
    },
    {
      "id": "D",
      "text": "É o armazenamento magnético que depende da rotação de pratos para acessar os dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória rom e memória flash. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. A memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória rom e memória flash, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória rom e memória flash. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU.",
    "review_summary": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos centrais: firmware de inicialização, configuração persistente e programas internos de dispositivos. Distinção importante: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
  }
}
```

## Questão 0064

```json
{
  "id": "MAT-SH-COMPERVE-Q0064",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória ROM e memória flash",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre memória rom e memória flash: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente.",
      "is_correct": true,
      "explanation": "Correta. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Isso se observa, por exemplo, em firmware de inicialização, configuração persistente e programas internos de dispositivos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
    },
    {
      "id": "B",
      "text": "É a memória principal volátil que mantém os programas ativos enquanto o computador está ligado.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória cache interna da CPU, cuja finalidade é acelerar acessos frequentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o armazenamento magnético que depende da rotação de pratos para acessar os dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória rom e memória flash. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. A memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória rom e memória flash, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória rom e memória flash. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU.",
    "review_summary": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos centrais: firmware de inicialização, configuração persistente e programas internos de dispositivos. Distinção importante: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
  }
}
```

## Questão 0065

```json
{
  "id": "MAT-SH-COMPERVE-Q0065",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória ROM e memória flash",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre memória rom e memória flash. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É a memória principal volátil que mantém os programas ativos enquanto o computador está ligado.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória cache interna da CPU, cuja finalidade é acelerar acessos frequentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente.",
      "is_correct": true,
      "explanation": "Correta. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Isso se observa, por exemplo, em firmware de inicialização, configuração persistente e programas internos de dispositivos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
    },
    {
      "id": "D",
      "text": "É o armazenamento magnético que depende da rotação de pratos para acessar os dados.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória rom e memória flash com outro elemento do sistema computacional. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. O conceito correto é: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplo de aplicação: firmware de inicialização, configuração persistente e programas internos de dispositivos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória rom e memória flash. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos: firmware de inicialização, configuração persistente e programas internos de dispositivos. RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU. A memória flash permite atualizar o firmware de uma placa-mãe; a RAM, por sua vez, perde normalmente seu conteúdo quando falta energia. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória rom e memória flash, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória rom e memória flash. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU.",
    "review_summary": "Memória ROM e memória flash: Memórias ROM e flash são não voláteis, preservando informações sem alimentação elétrica; a flash pode ser apagada e regravada eletricamente. Exemplos centrais: firmware de inicialização, configuração persistente e programas internos de dispositivos. Distinção importante: RAM, que é volátil; cache, que é memória temporária; e registradores, que guardam valores usados imediatamente pela CPU."
  }
}
```

## Questão 0066

```json
{
  "id": "MAT-SH-COMPERVE-Q0066",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória cache",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a memória cache, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É o armazenamento permanente de grande capacidade destinado a guardar arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal.",
      "is_correct": true,
      "explanation": "Correta. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Isso se observa, por exemplo, em caches L1, L2 e L3 presentes em processadores. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
    },
    {
      "id": "C",
      "text": "É a memória principal que substitui integralmente os registradores e a RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um tipo de memória removível utilizada para transferir arquivos entre computadores.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória cache. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos: caches L1, L2 e L3 presentes em processadores. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. Se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória cache, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória cache. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento.",
    "review_summary": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos centrais: caches L1, L2 e L3 presentes em processadores. Distinção importante: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
  }
}
```

## Questão 0067

```json
{
  "id": "MAT-SH-COMPERVE-Q0067",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória cache",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente memória cache. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: caches L1, L2 e L3 presentes em processadores. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o armazenamento permanente de grande capacidade destinado a guardar arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória principal que substitui integralmente os registradores e a RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É um tipo de memória removível utilizada para transferir arquivos entre computadores.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal.",
      "is_correct": true,
      "explanation": "Correta. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Isso se observa, por exemplo, em caches L1, L2 e L3 presentes em processadores. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória cache. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos: caches L1, L2 e L3 presentes em processadores. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. Se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória cache, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória cache. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento.",
    "review_summary": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos centrais: caches L1, L2 e L3 presentes em processadores. Distinção importante: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
  }
}
```

## Questão 0068

```json
{
  "id": "MAT-SH-COMPERVE-Q0068",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória cache",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de memória cache, é correto afirmar que Considere que se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o armazenamento permanente de grande capacidade destinado a guardar arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal.",
      "is_correct": true,
      "explanation": "Correta. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Isso se observa, por exemplo, em caches L1, L2 e L3 presentes em processadores. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
    },
    {
      "id": "C",
      "text": "É a memória principal que substitui integralmente os registradores e a RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um tipo de memória removível utilizada para transferir arquivos entre computadores.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória cache. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos: caches L1, L2 e L3 presentes em processadores. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. Se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória cache, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória cache. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento.",
    "review_summary": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos centrais: caches L1, L2 e L3 presentes em processadores. Distinção importante: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
  }
}
```

## Questão 0069

```json
{
  "id": "MAT-SH-COMPERVE-Q0069",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória cache",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre memória cache: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o armazenamento permanente de grande capacidade destinado a guardar arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória principal que substitui integralmente os registradores e a RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É um tipo de memória removível utilizada para transferir arquivos entre computadores.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal.",
      "is_correct": true,
      "explanation": "Correta. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Isso se observa, por exemplo, em caches L1, L2 e L3 presentes em processadores. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória cache. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos: caches L1, L2 e L3 presentes em processadores. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. Se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória cache, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória cache. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento.",
    "review_summary": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos centrais: caches L1, L2 e L3 presentes em processadores. Distinção importante: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
  }
}
```

## Questão 0070

```json
{
  "id": "MAT-SH-COMPERVE-Q0070",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Memória cache",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre memória cache. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o armazenamento permanente de grande capacidade destinado a guardar arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal.",
      "is_correct": true,
      "explanation": "Correta. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Isso se observa, por exemplo, em caches L1, L2 e L3 presentes em processadores. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
    },
    {
      "id": "C",
      "text": "É a memória principal que substitui integralmente os registradores e a RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um tipo de memória removível utilizada para transferir arquivos entre computadores.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde memória cache com outro elemento do sistema computacional. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. O conceito correto é: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplo de aplicação: caches L1, L2 e L3 presentes em processadores. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de memória cache. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos: caches L1, L2 e L3 presentes em processadores. SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento. Se um dado solicitado estiver na cache (cache hit), o processador pode obtê-lo mais rapidamente do que se precisasse buscá-lo na RAM. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de memória cache, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de memória cache. Em seguida, elimine opções que descrevam funções de categorias vizinhas: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento.",
    "review_summary": "Memória cache: Cache é uma memória pequena e muito rápida que mantém cópias de dados e instruções usados com frequência, reduzindo o tempo médio de acesso à memória principal. Exemplos centrais: caches L1, L2 e L3 presentes em processadores. Distinção importante: SSD, que armazena arquivos persistentemente; RAM, que tem maior capacidade e menor velocidade que caches internas; e memória virtual, que usa armazenamento para ampliar o espaço de endereçamento."
  }
}
```

## Questão 0071

```json
{
  "id": "MAT-SH-COMPERVE-Q0071",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Placa-mãe",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a placa-mãe, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador.",
      "is_correct": true,
      "explanation": "Correta. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Isso se observa, por exemplo, em soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
    },
    {
      "id": "B",
      "text": "É o componente responsável exclusivamente por executar operações aritméticas e lógicas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a unidade que converte a energia elétrica da tomada em tensões para os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um dispositivo externo de entrada utilizado para inserir comandos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de placa-mãe. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. A compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de placa-mãe, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de placa-mãe. Em seguida, elimine opções que descrevam funções de categorias vizinhas: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções.",
    "review_summary": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos centrais: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Distinção importante: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
  }
}
```

## Questão 0072

```json
{
  "id": "MAT-SH-COMPERVE-Q0072",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Placa-mãe",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente placa-mãe. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável exclusivamente por executar operações aritméticas e lógicas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a unidade que converte a energia elétrica da tomada em tensões para os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador.",
      "is_correct": true,
      "explanation": "Correta. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Isso se observa, por exemplo, em soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
    },
    {
      "id": "D",
      "text": "É um dispositivo externo de entrada utilizado para inserir comandos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de placa-mãe. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. A compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de placa-mãe, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de placa-mãe. Em seguida, elimine opções que descrevam funções de categorias vizinhas: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções.",
    "review_summary": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos centrais: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Distinção importante: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
  }
}
```

## Questão 0073

```json
{
  "id": "MAT-SH-COMPERVE-Q0073",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Placa-mãe",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de placa-mãe, é correto afirmar que Considere que a compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. ",
  "alternatives": [
    {
      "id": "A",
      "text": "A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador.",
      "is_correct": true,
      "explanation": "Correta. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Isso se observa, por exemplo, em soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
    },
    {
      "id": "B",
      "text": "É o componente responsável exclusivamente por executar operações aritméticas e lógicas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a unidade que converte a energia elétrica da tomada em tensões para os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um dispositivo externo de entrada utilizado para inserir comandos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de placa-mãe. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. A compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de placa-mãe, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de placa-mãe. Em seguida, elimine opções que descrevam funções de categorias vizinhas: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções.",
    "review_summary": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos centrais: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Distinção importante: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
  }
}
```

## Questão 0074

```json
{
  "id": "MAT-SH-COMPERVE-Q0074",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Placa-mãe",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre placa-mãe: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente responsável exclusivamente por executar operações aritméticas e lógicas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a unidade que converte a energia elétrica da tomada em tensões para os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador.",
      "is_correct": true,
      "explanation": "Correta. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Isso se observa, por exemplo, em soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
    },
    {
      "id": "D",
      "text": "É um dispositivo externo de entrada utilizado para inserir comandos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de placa-mãe. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. A compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de placa-mãe, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de placa-mãe. Em seguida, elimine opções que descrevam funções de categorias vizinhas: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções.",
    "review_summary": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos centrais: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Distinção importante: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
  }
}
```

## Questão 0075

```json
{
  "id": "MAT-SH-COMPERVE-Q0075",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Placa-mãe",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre placa-mãe. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador.",
      "is_correct": true,
      "explanation": "Correta. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Isso se observa, por exemplo, em soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
    },
    {
      "id": "B",
      "text": "É o componente responsável exclusivamente por executar operações aritméticas e lógicas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a unidade que converte a energia elétrica da tomada em tensões para os componentes.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É um dispositivo externo de entrada utilizado para inserir comandos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde placa-mãe com outro elemento do sistema computacional. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. O conceito correto é: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplo de aplicação: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de placa-mãe. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções. A compatibilidade entre CPU, soquete, chipset, memória e firmware da placa-mãe deve ser verificada antes de uma atualização. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de placa-mãe, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de placa-mãe. Em seguida, elimine opções que descrevam funções de categorias vizinhas: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções.",
    "review_summary": "Placa-mãe: A placa-mãe é a placa de circuito principal que interconecta processador, memória, armazenamento, slots de expansão, conectores e controladores do computador. Exemplos centrais: soquete da CPU, slots DIMM, conectores SATA, slots PCI Express e conectores de alimentação. Distinção importante: fonte de alimentação, que fornece energia; gabinete, que abriga componentes; e processador, que executa instruções."
  }
}
```

## Questão 0076

```json
{
  "id": "MAT-SH-COMPERVE-Q0076",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento HDD e SSD",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a armazenamento hdd e ssd, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "São memórias voláteis utilizadas exclusivamente para manter dados de programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "São processadores especializados em executar instruções em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "São componentes que apenas conectam os periféricos, sem armazenar informações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil.",
      "is_correct": true,
      "explanation": "Correta. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Isso se observa, por exemplo, em disco rígido magnético, SSD SATA e SSD NVMe. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de armazenamento hdd e ssd. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos: disco rígido magnético, SSD SATA e SSD NVMe. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. Em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de armazenamento hdd e ssd, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de armazenamento hdd e ssd. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível.",
    "review_summary": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos centrais: disco rígido magnético, SSD SATA e SSD NVMe. Distinção importante: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
  }
}
```

## Questão 0077

```json
{
  "id": "MAT-SH-COMPERVE-Q0077",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento HDD e SSD",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente armazenamento hdd e ssd. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: disco rígido magnético, SSD SATA e SSD NVMe. ",
  "alternatives": [
    {
      "id": "A",
      "text": "São memórias voláteis utilizadas exclusivamente para manter dados de programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil.",
      "is_correct": true,
      "explanation": "Correta. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Isso se observa, por exemplo, em disco rígido magnético, SSD SATA e SSD NVMe. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
    },
    {
      "id": "C",
      "text": "São processadores especializados em executar instruções em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "São componentes que apenas conectam os periféricos, sem armazenar informações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de armazenamento hdd e ssd. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos: disco rígido magnético, SSD SATA e SSD NVMe. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. Em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de armazenamento hdd e ssd, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de armazenamento hdd e ssd. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível.",
    "review_summary": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos centrais: disco rígido magnético, SSD SATA e SSD NVMe. Distinção importante: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
  }
}
```

## Questão 0078

```json
{
  "id": "MAT-SH-COMPERVE-Q0078",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento HDD e SSD",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de armazenamento hdd e ssd, é correto afirmar que Considere que em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. ",
  "alternatives": [
    {
      "id": "A",
      "text": "São memórias voláteis utilizadas exclusivamente para manter dados de programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "São processadores especializados em executar instruções em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "São componentes que apenas conectam os periféricos, sem armazenar informações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil.",
      "is_correct": true,
      "explanation": "Correta. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Isso se observa, por exemplo, em disco rígido magnético, SSD SATA e SSD NVMe. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de armazenamento hdd e ssd. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos: disco rígido magnético, SSD SATA e SSD NVMe. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. Em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de armazenamento hdd e ssd, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de armazenamento hdd e ssd. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível.",
    "review_summary": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos centrais: disco rígido magnético, SSD SATA e SSD NVMe. Distinção importante: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
  }
}
```

## Questão 0079

```json
{
  "id": "MAT-SH-COMPERVE-Q0079",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento HDD e SSD",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre armazenamento hdd e ssd: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "São memórias voláteis utilizadas exclusivamente para manter dados de programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil.",
      "is_correct": true,
      "explanation": "Correta. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Isso se observa, por exemplo, em disco rígido magnético, SSD SATA e SSD NVMe. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
    },
    {
      "id": "C",
      "text": "São processadores especializados em executar instruções em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "São componentes que apenas conectam os periféricos, sem armazenar informações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de armazenamento hdd e ssd. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos: disco rígido magnético, SSD SATA e SSD NVMe. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. Em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de armazenamento hdd e ssd, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de armazenamento hdd e ssd. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível.",
    "review_summary": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos centrais: disco rígido magnético, SSD SATA e SSD NVMe. Distinção importante: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
  }
}
```

## Questão 0080

```json
{
  "id": "MAT-SH-COMPERVE-Q0080",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Armazenamento HDD e SSD",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre armazenamento hdd e ssd. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "São memórias voláteis utilizadas exclusivamente para manter dados de programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "São processadores especializados em executar instruções em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "São componentes que apenas conectam os periféricos, sem armazenar informações.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde armazenamento hdd e ssd com outro elemento do sistema computacional. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. O conceito correto é: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplo de aplicação: disco rígido magnético, SSD SATA e SSD NVMe. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil.",
      "is_correct": true,
      "explanation": "Correta. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Isso se observa, por exemplo, em disco rígido magnético, SSD SATA e SSD NVMe. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de armazenamento hdd e ssd. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos: disco rígido magnético, SSD SATA e SSD NVMe. RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível. Em geral, SSD apresenta menor latência e melhor desempenho em acessos aleatórios; HDD costuma oferecer menor custo por gigabyte em grandes capacidades. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de armazenamento hdd e ssd, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de armazenamento hdd e ssd. Em seguida, elimine opções que descrevam funções de categorias vizinhas: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível.",
    "review_summary": "Armazenamento HDD e SSD: HDD armazena dados magneticamente em pratos giratórios; SSD utiliza memória flash e não possui partes móveis. Ambos são dispositivos de armazenamento secundário não volátil. Exemplos centrais: disco rígido magnético, SSD SATA e SSD NVMe. Distinção importante: RAM, que perde conteúdo sem energia; cache, que acelera acessos; e pendrive, que é armazenamento flash removível."
  }
}
```

## Questão 0081

```json
{
  "id": "MAT-SH-COMPERVE-Q0081",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de entrada",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a periféricos de entrada, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "Apresentam exclusivamente os resultados processados pelo computador ao usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Realizam somente a alimentação elétrica dos componentes internos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Isso se observa, por exemplo, em teclado, mouse, microfone, scanner, webcam e leitor de código de barras. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
    },
    {
      "id": "D",
      "text": "Armazenam permanentemente o firmware responsável pela inicialização do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de entrada. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de entrada, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de entrada. Em seguida, elimine opções que descrevam funções de categorias vizinhas: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída.",
    "review_summary": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos centrais: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Distinção importante: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
  }
}
```

## Questão 0082

```json
{
  "id": "MAT-SH-COMPERVE-Q0082",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de entrada",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente periféricos de entrada. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Isso se observa, por exemplo, em teclado, mouse, microfone, scanner, webcam e leitor de código de barras. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
    },
    {
      "id": "B",
      "text": "Apresentam exclusivamente os resultados processados pelo computador ao usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Realizam somente a alimentação elétrica dos componentes internos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Armazenam permanentemente o firmware responsável pela inicialização do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de entrada. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de entrada, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de entrada. Em seguida, elimine opções que descrevam funções de categorias vizinhas: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída.",
    "review_summary": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos centrais: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Distinção importante: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
  }
}
```

## Questão 0083

```json
{
  "id": "MAT-SH-COMPERVE-Q0083",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de entrada",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de periféricos de entrada, é correto afirmar que Considere que o scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Apresentam exclusivamente os resultados processados pelo computador ao usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Realizam somente a alimentação elétrica dos componentes internos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Isso se observa, por exemplo, em teclado, mouse, microfone, scanner, webcam e leitor de código de barras. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
    },
    {
      "id": "D",
      "text": "Armazenam permanentemente o firmware responsável pela inicialização do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de entrada. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de entrada, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de entrada. Em seguida, elimine opções que descrevam funções de categorias vizinhas: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída.",
    "review_summary": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos centrais: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Distinção importante: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
  }
}
```

## Questão 0084

```json
{
  "id": "MAT-SH-COMPERVE-Q0084",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de entrada",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre periféricos de entrada: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Isso se observa, por exemplo, em teclado, mouse, microfone, scanner, webcam e leitor de código de barras. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
    },
    {
      "id": "B",
      "text": "Apresentam exclusivamente os resultados processados pelo computador ao usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Realizam somente a alimentação elétrica dos componentes internos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Armazenam permanentemente o firmware responsável pela inicialização do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de entrada. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de entrada, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de entrada. Em seguida, elimine opções que descrevam funções de categorias vizinhas: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída.",
    "review_summary": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos centrais: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Distinção importante: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
  }
}
```

## Questão 0085

```json
{
  "id": "MAT-SH-COMPERVE-Q0085",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de entrada",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre periféricos de entrada. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "Apresentam exclusivamente os resultados processados pelo computador ao usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Realizam somente a alimentação elétrica dos componentes internos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Isso se observa, por exemplo, em teclado, mouse, microfone, scanner, webcam e leitor de código de barras. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
    },
    {
      "id": "D",
      "text": "Armazenam permanentemente o firmware responsável pela inicialização do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de entrada com outro elemento do sistema computacional. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O conceito correto é: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplo de aplicação: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de entrada. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída. O scanner converte documentos físicos em dados digitais; a impressora realiza o caminho inverso ao produzir uma representação física. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de entrada, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de entrada. Em seguida, elimine opções que descrevam funções de categorias vizinhas: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída.",
    "review_summary": "Periféricos de entrada: Periféricos de entrada capturam dados, sinais ou comandos do usuário ou do ambiente e os enviam ao computador para processamento. Exemplos centrais: teclado, mouse, microfone, scanner, webcam e leitor de código de barras. Distinção importante: monitor convencional, alto-falante e impressora, que são de saída; e touchscreen, que combina entrada e saída."
  }
}
```

## Questão 0086

```json
{
  "id": "MAT-SH-COMPERVE-Q0086",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de saída",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a periféricos de saída, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "Capturam comandos e dados do ambiente para enviá-los ao processamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Isso se observa, por exemplo, em monitor convencional, projetor, alto-falante e impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
    },
    {
      "id": "C",
      "text": "Executam instruções aritméticas e lógicas no núcleo do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Gerenciam os arquivos e os processos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de saída. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos: monitor convencional, projetor, alto-falante e impressora. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. Um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de saída, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de saída. Em seguida, elimine opções que descrevam funções de categorias vizinhas: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos.",
    "review_summary": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos centrais: monitor convencional, projetor, alto-falante e impressora. Distinção importante: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
  }
}
```

## Questão 0087

```json
{
  "id": "MAT-SH-COMPERVE-Q0087",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de saída",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente periféricos de saída. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: monitor convencional, projetor, alto-falante e impressora. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Capturam comandos e dados do ambiente para enviá-los ao processamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Executam instruções aritméticas e lógicas no núcleo do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Gerenciam os arquivos e os processos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Isso se observa, por exemplo, em monitor convencional, projetor, alto-falante e impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de saída. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos: monitor convencional, projetor, alto-falante e impressora. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. Um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de saída, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de saída. Em seguida, elimine opções que descrevam funções de categorias vizinhas: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos.",
    "review_summary": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos centrais: monitor convencional, projetor, alto-falante e impressora. Distinção importante: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
  }
}
```

## Questão 0088

```json
{
  "id": "MAT-SH-COMPERVE-Q0088",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de saída",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de periféricos de saída, é correto afirmar que Considere que um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. ",
  "alternatives": [
    {
      "id": "A",
      "text": "Capturam comandos e dados do ambiente para enviá-los ao processamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Isso se observa, por exemplo, em monitor convencional, projetor, alto-falante e impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
    },
    {
      "id": "C",
      "text": "Executam instruções aritméticas e lógicas no núcleo do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Gerenciam os arquivos e os processos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de saída. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos: monitor convencional, projetor, alto-falante e impressora. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. Um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de saída, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de saída. Em seguida, elimine opções que descrevam funções de categorias vizinhas: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos.",
    "review_summary": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos centrais: monitor convencional, projetor, alto-falante e impressora. Distinção importante: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
  }
}
```

## Questão 0089

```json
{
  "id": "MAT-SH-COMPERVE-Q0089",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de saída",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre periféricos de saída: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "Capturam comandos e dados do ambiente para enviá-los ao processamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Executam instruções aritméticas e lógicas no núcleo do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "Gerenciam os arquivos e os processos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Isso se observa, por exemplo, em monitor convencional, projetor, alto-falante e impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de saída. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos: monitor convencional, projetor, alto-falante e impressora. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. Um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de saída, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de saída. Em seguida, elimine opções que descrevam funções de categorias vizinhas: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos.",
    "review_summary": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos centrais: monitor convencional, projetor, alto-falante e impressora. Distinção importante: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
  }
}
```

## Questão 0090

```json
{
  "id": "MAT-SH-COMPERVE-Q0090",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Periféricos de saída",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre periféricos de saída. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "Capturam comandos e dados do ambiente para enviá-los ao processamento.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas.",
      "is_correct": true,
      "explanation": "Correta. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Isso se observa, por exemplo, em monitor convencional, projetor, alto-falante e impressora. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
    },
    {
      "id": "C",
      "text": "Executam instruções aritméticas e lógicas no núcleo do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "Gerenciam os arquivos e os processos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde periféricos de saída com outro elemento do sistema computacional. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. O conceito correto é: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplo de aplicação: monitor convencional, projetor, alto-falante e impressora. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de periféricos de saída. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos: monitor convencional, projetor, alto-falante e impressora. teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos. Um monitor convencional exibe imagens, mas não recebe comandos por toque; um touchscreen acumula função de entrada. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de periféricos de saída, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de periféricos de saída. Em seguida, elimine opções que descrevam funções de categorias vizinhas: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos.",
    "review_summary": "Periféricos de saída: Periféricos de saída apresentam ao usuário informações processadas pelo computador, convertendo sinais digitais em formas visuais, sonoras ou impressas. Exemplos centrais: monitor convencional, projetor, alto-falante e impressora. Distinção importante: teclado, mouse, microfone e scanner, que são de entrada; e touchscreen, que também recebe comandos."
  }
}
```

## Questão 0091

```json
{
  "id": "MAT-SH-COMPERVE-Q0091",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "GPU",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a gpu, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis.",
      "is_correct": true,
      "explanation": "Correta. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Isso se observa, por exemplo, em renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
    },
    {
      "id": "B",
      "text": "É o componente generalista que gerencia todos os processos e dispositivos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória volátil principal responsável por armazenar programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a placa que fornece energia elétrica aos conectores da CPU e dos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de gpu. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. Uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de gpu, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de gpu. Em seguida, elimine opções que descrevam funções de categorias vizinhas: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes.",
    "review_summary": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos centrais: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Distinção importante: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
  }
}
```

## Questão 0092

```json
{
  "id": "MAT-SH-COMPERVE-Q0092",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "GPU",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente gpu. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente generalista que gerencia todos os processos e dispositivos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória volátil principal responsável por armazenar programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis.",
      "is_correct": true,
      "explanation": "Correta. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Isso se observa, por exemplo, em renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
    },
    {
      "id": "D",
      "text": "É a placa que fornece energia elétrica aos conectores da CPU e dos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de gpu. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. Uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de gpu, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de gpu. Em seguida, elimine opções que descrevam funções de categorias vizinhas: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes.",
    "review_summary": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos centrais: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Distinção importante: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
  }
}
```

## Questão 0093

```json
{
  "id": "MAT-SH-COMPERVE-Q0093",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "GPU",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de gpu, é correto afirmar que Considere que uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. ",
  "alternatives": [
    {
      "id": "A",
      "text": "GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis.",
      "is_correct": true,
      "explanation": "Correta. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Isso se observa, por exemplo, em renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
    },
    {
      "id": "B",
      "text": "É o componente generalista que gerencia todos os processos e dispositivos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória volátil principal responsável por armazenar programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a placa que fornece energia elétrica aos conectores da CPU e dos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de gpu. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. Uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de gpu, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de gpu. Em seguida, elimine opções que descrevam funções de categorias vizinhas: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes.",
    "review_summary": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos centrais: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Distinção importante: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
  }
}
```

## Questão 0094

```json
{
  "id": "MAT-SH-COMPERVE-Q0094",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "GPU",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre gpu: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o componente generalista que gerencia todos os processos e dispositivos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a memória volátil principal responsável por armazenar programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis.",
      "is_correct": true,
      "explanation": "Correta. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Isso se observa, por exemplo, em renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
    },
    {
      "id": "D",
      "text": "É a placa que fornece energia elétrica aos conectores da CPU e dos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de gpu. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. A alternativa C expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. Uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de gpu, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de gpu. Em seguida, elimine opções que descrevam funções de categorias vizinhas: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes.",
    "review_summary": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos centrais: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Distinção importante: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
  }
}
```

## Questão 0095

```json
{
  "id": "MAT-SH-COMPERVE-Q0095",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "GPU",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre gpu. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis.",
      "is_correct": true,
      "explanation": "Correta. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Isso se observa, por exemplo, em renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
    },
    {
      "id": "B",
      "text": "É o componente generalista que gerencia todos os processos e dispositivos do sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É a memória volátil principal responsável por armazenar programas em execução.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É a placa que fornece energia elétrica aos conectores da CPU e dos periféricos.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde gpu com outro elemento do sistema computacional. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. O conceito correto é: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplo de aplicação: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de gpu. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. A alternativa A expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes. Uma GPU pode acelerar treinamento de modelos e renderização, mas não substitui integralmente a CPU na coordenação geral do sistema. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de gpu, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de gpu. Em seguida, elimine opções que descrevam funções de categorias vizinhas: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes.",
    "review_summary": "GPU: GPU é um processador especializado em executar grande quantidade de operações paralelas, especialmente úteis para gráficos, imagens, vídeo e cargas computacionais paralelizáveis. Exemplos centrais: renderização 3D, processamento de imagens, aceleração de vídeo e cálculos paralelos. Distinção importante: CPU, mais generalista e voltada à execução diversificada de instruções; RAM, que armazena dados temporários; e placa-mãe, que interconecta componentes."
  }
}
```

## Questão 0096

```json
{
  "id": "MAT-SH-COMPERVE-Q0096",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Fonte de alimentação",
  "difficulty": "easy",
  "cognitive_skill": "recall",
  "question_text": "Em relação a fonte de alimentação, assinale a alternativa que apresenta corretamente sua definição e função.",
  "alternatives": [
    {
      "id": "A",
      "text": "É o dispositivo que armazena permanentemente os arquivos por meio de memória flash.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a unidade que executa operações lógicas e aritméticas dos programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o componente que interliga os barramentos e slots de expansão sem fornecer energia.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores.",
      "is_correct": true,
      "explanation": "Correta. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Isso se observa, por exemplo, em saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de fonte de alimentação. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. Uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de fonte de alimentação, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de fonte de alimentação. Em seguida, elimine opções que descrevam funções de categorias vizinhas: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor.",
    "review_summary": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos centrais: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Distinção importante: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
  }
}
```

## Questão 0097

```json
{
  "id": "MAT-SH-COMPERVE-Q0097",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Fonte de alimentação",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em um ambiente de tecnologia da informação, uma equipe precisa identificar corretamente fonte de alimentação. Considerando suas características, assinale a opção correta. Em um laboratório, foram observados os seguintes exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o dispositivo que armazena permanentemente os arquivos por meio de memória flash.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores.",
      "is_correct": true,
      "explanation": "Correta. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Isso se observa, por exemplo, em saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
    },
    {
      "id": "C",
      "text": "É a unidade que executa operações lógicas e aritméticas dos programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o componente que interliga os barramentos e slots de expansão sem fornecer energia.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de fonte de alimentação. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. Uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de fonte de alimentação, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de fonte de alimentação. Em seguida, elimine opções que descrevam funções de categorias vizinhas: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor.",
    "review_summary": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos centrais: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Distinção importante: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
  }
}
```

## Questão 0098

```json
{
  "id": "MAT-SH-COMPERVE-Q0098",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Fonte de alimentação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Considere a situação de uso de um computador em uma instituição pública. Para compreender o papel de fonte de alimentação, é correto afirmar que Considere que uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o dispositivo que armazena permanentemente os arquivos por meio de memória flash.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a unidade que executa operações lógicas e aritméticas dos programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o componente que interliga os barramentos e slots de expansão sem fornecer energia.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores.",
      "is_correct": true,
      "explanation": "Correta. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Isso se observa, por exemplo, em saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de fonte de alimentação. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. Uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de fonte de alimentação, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de fonte de alimentação. Em seguida, elimine opções que descrevam funções de categorias vizinhas: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor.",
    "review_summary": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos centrais: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Distinção importante: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
  }
}
```

## Questão 0099

```json
{
  "id": "MAT-SH-COMPERVE-Q0099",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Fonte de alimentação",
  "difficulty": "hard",
  "cognitive_skill": "analysis",
  "question_text": "Analise as afirmativas sobre fonte de alimentação: I. Sua identificação depende de sua função no sistema. II. Suas características permitem distingui-lo de componentes próximos. III. Pode ser confundido com outros elementos quando se desconsidera sua finalidade. Assinale a alternativa que apresenta a descrição tecnicamente correta. Estão corretas as afirmativas I, II e III quanto à natureza e à finalidade do elemento quando ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o dispositivo que armazena permanentemente os arquivos por meio de memória flash.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores.",
      "is_correct": true,
      "explanation": "Correta. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Isso se observa, por exemplo, em saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
    },
    {
      "id": "C",
      "text": "É a unidade que executa operações lógicas e aritméticas dos programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "É o componente que interliga os barramentos e slots de expansão sem fornecer energia.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de fonte de alimentação. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. A alternativa B expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. Uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de fonte de alimentação, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de fonte de alimentação. Em seguida, elimine opções que descrevam funções de categorias vizinhas: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor.",
    "review_summary": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos centrais: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Distinção importante: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
  }
}
```

## Questão 0100

```json
{
  "id": "MAT-SH-COMPERVE-Q0100",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Conceitos Básicos de Software e Hardware",
  "topic": "Conceitos básicos de software e hardware",
  "subtopic": "Fonte de alimentação",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico foi solicitado a orientar usuários sobre fonte de alimentação. Para evitar a confusão entre esse elemento e outros recursos computacionais, ele deverá explicar que Nessa orientação, a explicação adequada deverá destacar que ",
  "alternatives": [
    {
      "id": "A",
      "text": "É o dispositivo que armazena permanentemente os arquivos por meio de memória flash.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "B",
      "text": "É a unidade que executa operações lógicas e aritméticas dos programas.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "C",
      "text": "É o componente que interliga os barramentos e slots de expansão sem fornecer energia.",
      "is_correct": false,
      "explanation": "Incorreta. A afirmação confunde fonte de alimentação com outro elemento do sistema computacional. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. O conceito correto é: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplo de aplicação: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Portanto, a descrição apresentada não corresponde à função solicitada."
    },
    {
      "id": "D",
      "text": "A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores.",
      "is_correct": true,
      "explanation": "Correta. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Isso se observa, por exemplo, em saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. A identificação é feita pela função desempenhada e pela distinção em relação aos conceitos próximos: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O comando solicita reconhecer a definição e a função de fonte de alimentação. O ponto decisivo é identificar a finalidade do elemento e distingui-lo dos componentes próximos. A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. A alternativa D expressa essa característica. As demais opções atribuem ao elemento funções de outras categorias ou apresentam características incompatíveis.",
    "theoretical_content": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor. Uma fonte precisa fornecer potência e conectores compatíveis; potência nominal elevada, isoladamente, não garante qualidade ou compatibilidade. Para compreender esse conceito, é útil observar a divisão entre hardware (componentes físicos), software (instruções e programas) e firmware (software incorporado ao equipamento). No funcionamento de um computador, os componentes atuam de forma integrada: a CPU executa instruções, a memória mantém dados necessários, os dispositivos de entrada fornecem informações, os de saída apresentam resultados e o sistema operacional coordena recursos. Em situações práticas, a identificação correta evita diagnósticos equivocados, compras incompatíveis e confusão entre falhas físicas e lógicas. A classificação deve considerar a função efetiva do item, e não apenas sua aparência ou denominação comercial.",
    "bank_approach": "A questão combina cobrança conceitual com distinção entre categorias próximas, padrão compatível com as questões técnicas da COMPERVE. O candidato precisa compreender a função de fonte de alimentação, e não apenas memorizar uma palavra-chave. A variação contextual exige aplicar a definição a uma situação concreta.",
    "study_tip": "Localize no enunciado a função principal de fonte de alimentação. Em seguida, elimine opções que descrevam funções de categorias vizinhas: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor.",
    "review_summary": "Fonte de alimentação: A fonte de alimentação (PSU) converte a energia elétrica de entrada em tensões contínuas adequadas aos componentes do computador e distribui essa energia pelos conectores. Exemplos centrais: saídas de 12 V, 5 V e 3,3 V, conectores ATX e PCIe e potência nominal em watts. Distinção importante: estabilizador ou nobreak, que atuam na alimentação externa; placa-mãe, que distribui conexões e sinais; e cooler, que remove calor."
  }
}
```

## Gabarito consolidado

001: B | 002: A | 003: D | 004: A | 005: A | 006: B | 007: D | 008: B | 009: D | 010: B
011: A | 012: C | 013: A | 014: C | 015: A | 016: D | 017: B | 018: D | 019: B | 020: D
021: C | 022: A | 023: C | 024: A | 025: C | 026: B | 027: D | 028: B | 029: D | 030: B
031: A | 032: C | 033: A | 034: C | 035: A | 036: D | 037: B | 038: D | 039: B | 040: D
041: C | 042: A | 043: C | 044: A | 045: C | 046: B | 047: D | 048: B | 049: D | 050: B
051: A | 052: C | 053: A | 054: C | 055: A | 056: D | 057: B | 058: D | 059: B | 060: D
061: C | 062: A | 063: C | 064: A | 065: C | 066: B | 067: D | 068: B | 069: D | 070: B
071: A | 072: C | 073: A | 074: C | 075: A | 076: D | 077: B | 078: D | 079: B | 080: D
081: C | 082: A | 083: C | 084: A | 085: C | 086: B | 087: D | 088: B | 089: D | 090: B
091: A | 092: C | 093: A | 094: C | 095: A | 096: D | 097: B | 098: D | 099: B | 100: D

## Encerramento

Material concluído com **100 questões**, sendo **5 originais** e **95 inéditas**. Cada questão constitui uma unidade independente para revisão espaçada e apresenta resolução, fundamentação teórica, abordagem da banca, dica de prova, resumo e análise individual das quatro alternativas.
