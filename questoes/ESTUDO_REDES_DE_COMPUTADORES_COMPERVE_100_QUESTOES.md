---
schema_version: "1.0"
material_id: "MAT-REDES-COMPERVE-001"
bank: "COMPERVE"
subject: "Redes de Computadores"
topic: "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)"
requested_questions: 100
original_questions: 7
generated_questions: 93
total_questions: 100
created_at: "2026-11-02"
language: "pt-BR"
---

# Material de Estudo — Redes de Computadores | COMPERVE

Elaborado conforme `GERAÇÃO_ESTUDO.md` e `ESTILO_DA_BANCA.md`, com base no corpus `provas_comperve.zip`. As questões originais preservam seus enunciados e alternativas; as demais são inéditas e não são apresentadas como itens aplicados.

## Identificação do material

- **Disciplina:** Redes de Computadores
- **Conteúdo:** conceitos básicos, tipos de redes, HTTP, SSH, IMAP, SMTP, TCP/IP e UDP.
- **Questões originais:** 7
- **Questões inéditas:** 93
- **Total:** 100

## Questões

## Questão 0001

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0001",
  "type": "original",
  "source": {
    "exam": "UFRN 2018 — Analista de TI, cargo 101; ano 2018; questão 28",
    "year": 2018,
    "question_number": 28,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "As topologias de redes de computadores possuem diversas camadas distintas que são compostas de formas diferentes de acordo com seu modelo específico. A alternativa que apresenta uma equivalência correta entre as camadas dos modelos OSI e TCP/IP é:",
  "alternatives": [
    {
      "id": "A",
      "text": "as camadas de aplicação, apresentação e sessão do modelo OSI correspondem à camada de aplicação do modelo TCP/IP.",
      "is_correct": true,
      "explanation": "**Correta.** as camadas de aplicação, apresentação e sessão do modelo OSI correspondem à camada de aplicação do modelo TCP/IP.. As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "a camada de aplicação do modelo OSI corresponde à camada de apresentação do modelo TCP/IP.",
      "is_correct": false,
      "explanation": "**Incorreta.** a camada de aplicação do modelo OSI corresponde à camada de apresentação do modelo TCP/IP. não corresponde ao que o comando descreve. As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "as camadas de apresentação e sessão do modelo OSI correspondem à camada de rede do modelo TCP/IP.",
      "is_correct": false,
      "explanation": "**Incorreta.** as camadas de apresentação e sessão do modelo OSI correspondem à camada de rede do modelo TCP/IP. não corresponde ao que o comando descreve. As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "a camada de enlace do modelo OSI corresponde à camada de transporte do modelo TCP/IP.",
      "is_correct": false,
      "explanation": "**Incorreta.** a camada de enlace do modelo OSI corresponde à camada de transporte do modelo TCP/IP. não corresponde ao que o comando descreve. As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: As camadas OSI de aplicação, apresentação e sessão correspondem, no mapeamento didático usual, à camada de aplicação TCP/IP; transporte mapeia para transporte; rede para Internet; enlace e física para acesso à rede. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0002

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0002",
  "type": "original",
  "source": {
    "exam": "UFRN 2018 — Analista de TI, cargo 102; ano 2018; questão 38",
    "year": 2018,
    "question_number": 38,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um protocolo estabelece um conjunto de regras ou procedimentos para transmissão de dados entre dispositivos eletrônicos. Considerando os protocolos HTTP, Telnet, SSH, POP3, SMTP e IMAP, a opção que apresenta, respectivamente, o número de suas portas em um cenário padrão é:",
  "alternatives": [
    {
      "id": "A",
      "text": "8080, 42, 23, 21, 110 e 143.",
      "is_correct": false,
      "explanation": "**Incorreta.** 8080, 42, 23, 21, 110 e 143. não corresponde ao que o comando descreve. Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "443, 23, 22, 110, 25 e 143.",
      "is_correct": false,
      "explanation": "**Incorreta.** 443, 23, 22, 110, 25 e 143. não corresponde ao que o comando descreve. Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "80, 22, 23, 25, 110 e 143.",
      "is_correct": false,
      "explanation": "**Incorreta.** 80, 22, 23, 25, 110 e 143. não corresponde ao que o comando descreve. Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "80, 23, 22, 110, 25 e 143.",
      "is_correct": true,
      "explanation": "**Correta.** 80, 23, 22, 110, 25 e 143.. Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: Portas tradicionais: HTTP 80/TCP; Telnet 23/TCP; SSH 22/TCP; POP3 110/TCP; SMTP 25/TCP; IMAP 143/TCP. Variantes seguras e submissão podem usar 443, 993, 995, 587 ou 465. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0003

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0003",
  "type": "original",
  "source": {
    "exam": "UFRN 2021 — Técnico em TI; ano 2021; questão 23",
    "year": 2021,
    "question_number": 23,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Concluída a instalação do Ubuntu em todas as máquinas, o técnico de TI, para realizar o login e executar os comandos remotamente, de forma segura e com criptografia, deve configurar o protocolo",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH.",
      "is_correct": true,
      "explanation": "**Correta.** SSH.. SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "TELNET.",
      "is_correct": false,
      "explanation": "**Incorreta.** TELNET. não corresponde ao que o comando descreve. SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SMTP.",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP. não corresponde ao que o comando descreve. SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "FTP.",
      "is_correct": false,
      "explanation": "**Incorreta.** FTP. não corresponde ao que o comando descreve. SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: SSH permite login e execução remota de comandos por canal criptografado, normalmente TCP 22. Telnet oferece terminal remoto sem criptografia por padrão; SMTP envia e-mail; FTP transfere arquivos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0004

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0004",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 42,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico em TI recebeu um chamado para atendimento técnico, sendo informado de que um servidor web, embora estivesse acessível pela Internet para outros serviços, estava negando conexões na porta padrão do protocolo HTTP. Nessa situação, o bloqueio, no firewall, deve estar na porta",
  "alternatives": [
    {
      "id": "A",
      "text": "80.",
      "is_correct": true,
      "explanation": "**Correta.** 80.. HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "23.",
      "is_correct": false,
      "explanation": "**Incorreta.** 23. não corresponde ao que o comando descreve. HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "143.",
      "is_correct": false,
      "explanation": "**Incorreta.** 143. não corresponde ao que o comando descreve. HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "636.",
      "is_correct": false,
      "explanation": "**Incorreta.** 636. não corresponde ao que o comando descreve. HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: HTTP tradicional utiliza TCP 80. HTTPS normalmente usa TCP 443; Telnet 23; IMAP 143. A questão especifica a porta padrão HTTP. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0005

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0005",
  "type": "original",
  "source": {
    "exam": "UFERSA 2024 — Analista de TI; ano 2024; questão 46",
    "year": 2024,
    "question_number": 46,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "A topologia de redes de computadores descreve a maneira como os dispositivos estão interconectados em uma rede de comunicação. Isso inclui a disposição física ou lógica dos dispositivos e os caminhos que os dados seguem para viajar de um periférico para outro na rede. Nesse sentido, são exemplos de topologias de redes de computadores:",
  "alternatives": [
    {
      "id": "A",
      "text": "barramento, estrela e malha.",
      "is_correct": true,
      "explanation": "**Correta.** barramento, estrela e malha.. Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "anel, hierárquica e ponto a ponto.",
      "is_correct": false,
      "explanation": "**Incorreta.** anel, hierárquica e ponto a ponto. não corresponde ao que o comando descreve. Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "broadcast, cliente-servidor e estrela.",
      "is_correct": false,
      "explanation": "**Incorreta.** broadcast, cliente-servidor e estrela. não corresponde ao que o comando descreve. Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "estrela, anel e half-duplex.",
      "is_correct": false,
      "explanation": "**Incorreta.** estrela, anel e half-duplex. não corresponde ao que o comando descreve. Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: Barramento, estrela, anel e malha são topologias. Broadcast é modo de entrega; cliente-servidor é arquitetura; half-duplex descreve modo de comunicação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0006

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0006",
  "type": "original",
  "source": {
    "exam": "UFERSA 2024 — Analista de TI; ano 2024; questão 47",
    "year": 2024,
    "question_number": 47,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Computadores ligados em uma rede podem utilizar diferentes tipos de hardwares e softwares. Contudo, o uso de protocolos permite que eles se comuniquem abstraindo essas diferenças. Dentre os protocolos conhecidos, há um específico que envia pacotes diretamente para um computador de destino, sem estabelecer previamente uma conexão e sem verificar se eles chegaram como previsto. Esse protocolo é conhecido como",
  "alternatives": [
    {
      "id": "A",
      "text": "UDP.",
      "is_correct": true,
      "explanation": "**Correta.** UDP.. UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "TCP.",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP. não corresponde ao que o comando descreve. UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "FTP.",
      "is_correct": false,
      "explanation": "**Incorreta.** FTP. não corresponde ao que o comando descreve. UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "IMAP.",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP. não corresponde ao que o comando descreve. UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a questões originais da comperve. A pista decisiva é a função ou característica descrita. UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Questões originais da COMPERVE. Conceito essencial: UDP é transporte sem conexão e não garante entrega, ordenação ou retransmissão. TCP oferece fluxo confiável e ordenado; FTP e IMAP são protocolos de aplicação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0007

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0007",
  "type": "original",
  "source": {
    "exam": "UFERSA 2024 — Analista de TI; ano 2024; questão 48",
    "year": 2024,
    "question_number": 48,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Questões originais da COMPERVE",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "O protocolo HTTPS é a versão segura do protocolo HTTP. O HTTPS é essencial para operações na internet que requerem proteção adicional, como transações financeiras e manuseio de dados sensíveis. Sobre o protocolo HTTPS, analise as afirmativas abaixo.\n\nI. Utiliza criptografia para garantir a segurança das comunicações entre o cliente e o servidor.\nII. Opera na porta 80 por padrão, assim como o HTTP, mas tem uma camada adicional de segurança.\nIII. Faz uso de uma chave pública que só pode ser descriptografada pela chave privada.\nIV. Utiliza o protocolo SSL/TLS para criptografar os dados transmitidos entre o cliente e o servidor.\n\nDas afirmativas, estão corretas",
  "alternatives": [
    {
      "id": "A",
      "text": "III e IV.",
      "is_correct": true,
      "explanation": "**Correta.** A combinação III e IV é a resposta esperada no item: a afirmativa III descreve, de forma simplificada, o uso de criptografia assimétrica; a IV identifica SSL/TLS como mecanismo de proteção do canal HTTPS. Em TLS moderno, a negociação de chaves e a proteção dos dados combinam criptografia assimétrica e chaves simétricas de sessão."
    },
    {
      "id": "B",
      "text": "I e III.",
      "is_correct": false,
      "explanation": "**Incorreta.** A combinação I e III não é a combinação correta do item. A afirmativa II é falsa porque HTTPS utiliza normalmente a porta 443, e não a 80. A afirmativa IV é verdadeira porque HTTPS utiliza TLS para proteger a comunicação. A descrição da afirmativa I, como aparece no caderno, não substitui a identificação precisa do mecanismo TLS."
    },
    {
      "id": "C",
      "text": "I e II.",
      "is_correct": false,
      "explanation": "**Incorreta.** A combinação não reúne as afirmativas corretas. HTTPS utiliza normalmente a porta 443, e não a 80; por isso, a afirmativa II está incorreta. A proteção é fornecida por TLS, e a alternativa correta é a que reúne III e IV."
    },
    {
      "id": "D",
      "text": "II e IV.",
      "is_correct": false,
      "explanation": "**Incorreta.** A combinação não reúne as afirmativas corretas. HTTPS utiliza normalmente a porta 443, e não a 80; por isso, a afirmativa II está incorreta. A proteção é fornecida por TLS, e a alternativa correta é a que reúne III e IV."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O item solicita avaliar quatro afirmações sobre HTTPS. A afirmativa II é falsa, pois a porta convencional de HTTPS é 443, enquanto a porta 80 é associada ao HTTP tradicional. A afirmativa IV está correta ao apontar TLS como mecanismo de proteção do canal. A afirmativa III corresponde à descrição simplificada de criptografia assimétrica apresentada no item. Assim, a combinação correta é III e IV, alternativa A.",
    "theoretical_content": "HTTPS é HTTP protegido por TLS. A porta convencional é TCP 443, diferentemente do HTTP tradicional, que utiliza TCP 80. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados digitais. A criptografia assimétrica participa da autenticação e/ou do estabelecimento de segredos, enquanto os dados da sessão são protegidos por criptografia simétrica, mais eficiente. Por isso, a explicação de que toda a comunicação é simplesmente cifrada pela chave pública e decifrada pela privada é uma simplificação do funcionamento moderno do TLS.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer questões originais da comperve e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "HTTPS = HTTP + TLS; porta convencional 443; HTTP tradicional = 80. TLS fornece confidencialidade, integridade e autenticação do servidor; combina mecanismos assimétricos e chaves simétricas de sessão."
  }
}
```

## Questão 0008

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0008",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "LAN/MAN/WAN",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma rede que interliga computadores em um único edifício, sob administração local, é classificada como",
  "alternatives": [
    {
      "id": "A",
      "text": "LAN",
      "is_correct": true,
      "explanation": "**Correta.** LAN. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "MAN",
      "is_correct": false,
      "explanation": "**Incorreta.** MAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "WAN",
      "is_correct": false,
      "explanation": "**Incorreta.** WAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "PAN",
      "is_correct": false,
      "explanation": "**Incorreta.** PAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a lan/man/wan. A pista decisiva é a função ou característica descrita. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer lan/man/wan e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: LAN/MAN/WAN. Conceito essencial: LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0009

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0009",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "LAN/MAN/WAN",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de lan/man/wan. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "MAN",
      "is_correct": false,
      "explanation": "**Incorreta.** MAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "WAN",
      "is_correct": false,
      "explanation": "**Incorreta.** WAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "PAN",
      "is_correct": false,
      "explanation": "**Incorreta.** PAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "LAN",
      "is_correct": true,
      "explanation": "**Correta.** LAN. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a lan/man/wan. A pista decisiva é a função ou característica descrita. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer lan/man/wan e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: LAN/MAN/WAN. Conceito essencial: LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0010

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0010",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "LAN/MAN/WAN",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de lan/man/wan, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "WAN",
      "is_correct": false,
      "explanation": "**Incorreta.** WAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "PAN",
      "is_correct": false,
      "explanation": "**Incorreta.** PAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "LAN",
      "is_correct": true,
      "explanation": "**Correta.** LAN. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "MAN",
      "is_correct": false,
      "explanation": "**Incorreta.** MAN não corresponde ao que o comando descreve. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a lan/man/wan. A pista decisiva é a função ou característica descrita. LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer lan/man/wan e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: LAN/MAN/WAN. Conceito essencial: LAN cobre área local, como residência ou edifício; MAN cobre região metropolitana; WAN conecta redes distantes; PAN atende ao entorno pessoal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0011

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0011",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia estrela",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um laboratório, todos os computadores se conectam individualmente a um switch central. A topologia é",
  "alternatives": [
    {
      "id": "A",
      "text": "estrela",
      "is_correct": true,
      "explanation": "**Correta.** estrela. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "malha",
      "is_correct": false,
      "explanation": "**Incorreta.** malha não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia estrela. A pista decisiva é a função ou característica descrita. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia estrela e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia estrela. Conceito essencial: Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0012

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0012",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia estrela",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de topologia estrela. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "malha",
      "is_correct": false,
      "explanation": "**Incorreta.** malha não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "estrela",
      "is_correct": true,
      "explanation": "**Correta.** estrela. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia estrela. A pista decisiva é a função ou característica descrita. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia estrela e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia estrela. Conceito essencial: Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0013

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0013",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia estrela",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de topologia estrela, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "malha",
      "is_correct": false,
      "explanation": "**Incorreta.** malha não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "estrela",
      "is_correct": true,
      "explanation": "**Correta.** estrela. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia estrela. A pista decisiva é a função ou característica descrita. Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia estrela e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia estrela. Conceito essencial: Na estrela, cada nó liga-se a um ponto central. Falha em um cabo tende a isolar um nó; falha no equipamento central pode afetar todos. Malha oferece múltiplos caminhos; anel forma circuito; barramento compartilha meio. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0014

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0014",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia malha",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma rede com múltiplos caminhos alternativos entre nós utiliza topologia",
  "alternatives": [
    {
      "id": "A",
      "text": "estrela",
      "is_correct": false,
      "explanation": "**Incorreta.** estrela não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "malha",
      "is_correct": true,
      "explanation": "**Correta.** malha. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia malha. A pista decisiva é a função ou característica descrita. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia malha e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia malha. Conceito essencial: A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0015

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0015",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia malha",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de topologia malha. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "malha",
      "is_correct": true,
      "explanation": "**Correta.** malha. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "estrela",
      "is_correct": false,
      "explanation": "**Incorreta.** estrela não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia malha. A pista decisiva é a função ou característica descrita. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia malha e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia malha. Conceito essencial: A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0016

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0016",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Topologia malha",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de topologia malha, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "barramento",
      "is_correct": false,
      "explanation": "**Incorreta.** barramento não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "anel",
      "is_correct": false,
      "explanation": "**Incorreta.** anel não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "estrela",
      "is_correct": false,
      "explanation": "**Incorreta.** estrela não corresponde ao que o comando descreve. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "malha",
      "is_correct": true,
      "explanation": "**Correta.** malha. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a topologia malha. A pista decisiva é a função ou característica descrita. A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer topologia malha e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Topologia malha. Conceito essencial: A malha cria ligações múltiplas. Na malha completa todos os nós se conectam diretamente; na parcial apenas alguns pares. A redundância aumenta resiliência, mas também custo e complexidade. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0017

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0017",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Simplex/duplex",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Quando os dois dispositivos podem transmitir e receber simultaneamente, o modo é",
  "alternatives": [
    {
      "id": "A",
      "text": "broadcast",
      "is_correct": false,
      "explanation": "**Incorreta.** broadcast não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "simplex",
      "is_correct": false,
      "explanation": "**Incorreta.** simplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "half-duplex",
      "is_correct": false,
      "explanation": "**Incorreta.** half-duplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "full-duplex",
      "is_correct": true,
      "explanation": "**Correta.** full-duplex. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a simplex/duplex. A pista decisiva é a função ou característica descrita. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer simplex/duplex e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Simplex/duplex. Conceito essencial: Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0018

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0018",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Simplex/duplex",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de simplex/duplex. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "simplex",
      "is_correct": false,
      "explanation": "**Incorreta.** simplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "half-duplex",
      "is_correct": false,
      "explanation": "**Incorreta.** half-duplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "full-duplex",
      "is_correct": true,
      "explanation": "**Correta.** full-duplex. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "broadcast",
      "is_correct": false,
      "explanation": "**Incorreta.** broadcast não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a simplex/duplex. A pista decisiva é a função ou característica descrita. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer simplex/duplex e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Simplex/duplex. Conceito essencial: Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0019

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0019",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Simplex/duplex",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de simplex/duplex, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "half-duplex",
      "is_correct": false,
      "explanation": "**Incorreta.** half-duplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "full-duplex",
      "is_correct": true,
      "explanation": "**Correta.** full-duplex. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "broadcast",
      "is_correct": false,
      "explanation": "**Incorreta.** broadcast não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "simplex",
      "is_correct": false,
      "explanation": "**Incorreta.** simplex não corresponde ao que o comando descreve. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a simplex/duplex. A pista decisiva é a função ou característica descrita. Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer simplex/duplex e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Simplex/duplex. Conceito essencial: Full-duplex permite transmissão simultânea nos dois sentidos; half-duplex permite ambos alternadamente; simplex é unidirecional. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0020

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0020",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Modelo OSI",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No modelo OSI, o roteamento entre redes e o endereçamento lógico pertencem à camada",
  "alternatives": [
    {
      "id": "A",
      "text": "física",
      "is_correct": false,
      "explanation": "**Incorreta.** física não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "enlace",
      "is_correct": false,
      "explanation": "**Incorreta.** enlace não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "rede",
      "is_correct": true,
      "explanation": "**Correta.** rede. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "sessão",
      "is_correct": false,
      "explanation": "**Incorreta.** sessão não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a modelo osi. A pista decisiva é a função ou característica descrita. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer modelo osi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Modelo OSI. Conceito essencial: A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0021

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0021",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Modelo OSI",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de modelo osi. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "enlace",
      "is_correct": false,
      "explanation": "**Incorreta.** enlace não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "rede",
      "is_correct": true,
      "explanation": "**Correta.** rede. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "sessão",
      "is_correct": false,
      "explanation": "**Incorreta.** sessão não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "física",
      "is_correct": false,
      "explanation": "**Incorreta.** física não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a modelo osi. A pista decisiva é a função ou característica descrita. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer modelo osi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Modelo OSI. Conceito essencial: A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0022

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0022",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Modelo OSI",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de modelo osi, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "rede",
      "is_correct": true,
      "explanation": "**Correta.** rede. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "sessão",
      "is_correct": false,
      "explanation": "**Incorreta.** sessão não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "física",
      "is_correct": false,
      "explanation": "**Incorreta.** física não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "enlace",
      "is_correct": false,
      "explanation": "**Incorreta.** enlace não corresponde ao que o comando descreve. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a modelo osi. A pista decisiva é a função ou característica descrita. A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer modelo osi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Modelo OSI. Conceito essencial: A camada de rede (3) encaminha pacotes e utiliza endereços lógicos como IP. Enlace trata quadros/MAC; física transmite bits; transporte oferece comunicação entre processos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0023

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0023",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP/IP aplicação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "HTTP, SMTP, IMAP e SSH são protocolos da camada de",
  "alternatives": [
    {
      "id": "A",
      "text": "acesso à rede",
      "is_correct": false,
      "explanation": "**Incorreta.** acesso à rede não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "transporte",
      "is_correct": false,
      "explanation": "**Incorreta.** transporte não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "aplicação",
      "is_correct": true,
      "explanation": "**Correta.** aplicação. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "Internet",
      "is_correct": false,
      "explanation": "**Incorreta.** Internet não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp/ip aplicação. A pista decisiva é a função ou característica descrita. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp/ip aplicação e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP/IP aplicação. Conceito essencial: A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0024

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0024",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP/IP aplicação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de tcp/ip aplicação. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "transporte",
      "is_correct": false,
      "explanation": "**Incorreta.** transporte não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "aplicação",
      "is_correct": true,
      "explanation": "**Correta.** aplicação. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "Internet",
      "is_correct": false,
      "explanation": "**Incorreta.** Internet não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "acesso à rede",
      "is_correct": false,
      "explanation": "**Incorreta.** acesso à rede não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp/ip aplicação. A pista decisiva é a função ou característica descrita. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp/ip aplicação e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP/IP aplicação. Conceito essencial: A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0025

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0025",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP/IP aplicação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de tcp/ip aplicação, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "aplicação",
      "is_correct": true,
      "explanation": "**Correta.** aplicação. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "Internet",
      "is_correct": false,
      "explanation": "**Incorreta.** Internet não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "acesso à rede",
      "is_correct": false,
      "explanation": "**Incorreta.** acesso à rede não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "transporte",
      "is_correct": false,
      "explanation": "**Incorreta.** transporte não corresponde ao que o comando descreve. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp/ip aplicação. A pista decisiva é a função ou característica descrita. A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp/ip aplicação e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP/IP aplicação. Conceito essencial: A camada de aplicação TCP/IP reúne serviços como HTTP, SMTP, IMAP, SSH e DNS. TCP/UDP são transporte; IP é Internet; Ethernet/Wi-Fi são acesso à rede. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0026

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0026",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Na arquitetura TCP/IP, o protocolo responsável pelo endereçamento lógico e encaminhamento entre redes é",
  "alternatives": [
    {
      "id": "A",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "IP",
      "is_correct": true,
      "explanation": "**Correta.** IP. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ip. A pista decisiva é a função ou característica descrita. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ip e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IP. Conceito essencial: IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0027

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0027",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ip. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "IP",
      "is_correct": true,
      "explanation": "**Correta.** IP. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ip. A pista decisiva é a função ou característica descrita. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ip e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IP. Conceito essencial: IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0028

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0028",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ip, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "IP",
      "is_correct": true,
      "explanation": "**Correta.** IP. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ip. A pista decisiva é a função ou característica descrita. IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ip e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IP. Conceito essencial: IP fornece endereçamento e encaminhamento de datagramas em serviço de melhor esforço; não garante entrega, ordem ou ausência de duplicatas. TCP pode fornecer confiabilidade acima dele. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0029

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0029",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um sistema exige transporte confiável, ordenado, com confirmações e retransmissões. O protocolo adequado é",
  "alternatives": [
    {
      "id": "A",
      "text": "ICMP",
      "is_correct": false,
      "explanation": "**Incorreta.** ICMP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "UDP",
      "is_correct": false,
      "explanation": "**Incorreta.** UDP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "IP",
      "is_correct": false,
      "explanation": "**Incorreta.** IP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "TCP",
      "is_correct": true,
      "explanation": "**Correta.** TCP. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp. A pista decisiva é a função ou característica descrita. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP. Conceito essencial: TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0030

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0030",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de tcp. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "UDP",
      "is_correct": false,
      "explanation": "**Incorreta.** UDP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "IP",
      "is_correct": false,
      "explanation": "**Incorreta.** IP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "TCP",
      "is_correct": true,
      "explanation": "**Correta.** TCP. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "ICMP",
      "is_correct": false,
      "explanation": "**Incorreta.** ICMP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp. A pista decisiva é a função ou característica descrita. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP. Conceito essencial: TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0031

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0031",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de tcp, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "IP",
      "is_correct": false,
      "explanation": "**Incorreta.** IP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "TCP",
      "is_correct": true,
      "explanation": "**Correta.** TCP. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "ICMP",
      "is_correct": false,
      "explanation": "**Incorreta.** ICMP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "UDP",
      "is_correct": false,
      "explanation": "**Incorreta.** UDP não corresponde ao que o comando descreve. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp. A pista decisiva é a função ou característica descrita. TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP. Conceito essencial: TCP é orientado à conexão e oferece fluxo confiável e ordenado de bytes, ACKs, retransmissões, controle de fluxo e congestionamento. UDP não garante entrega ou ordenação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0032

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0032",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP handshake",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A sequência convencional de estabelecimento de uma conexão TCP é",
  "alternatives": [
    {
      "id": "A",
      "text": "SYN, SYN-ACK e ACK",
      "is_correct": true,
      "explanation": "**Correta.** SYN, SYN-ACK e ACK. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "ACK, FIN e SYN",
      "is_correct": false,
      "explanation": "**Incorreta.** ACK, FIN e SYN não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SYN-ACK, FIN e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** SYN-ACK, FIN e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "FIN, FIN-ACK e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** FIN, FIN-ACK e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp handshake. A pista decisiva é a função ou característica descrita. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp handshake e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP handshake. Conceito essencial: O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0033

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0033",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP handshake",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de tcp handshake. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "ACK, FIN e SYN",
      "is_correct": false,
      "explanation": "**Incorreta.** ACK, FIN e SYN não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SYN-ACK, FIN e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** SYN-ACK, FIN e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "FIN, FIN-ACK e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** FIN, FIN-ACK e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SYN, SYN-ACK e ACK",
      "is_correct": true,
      "explanation": "**Correta.** SYN, SYN-ACK e ACK. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp handshake. A pista decisiva é a função ou característica descrita. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp handshake e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP handshake. Conceito essencial: O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0034

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0034",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "TCP handshake",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de tcp handshake, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SYN-ACK, FIN e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** SYN-ACK, FIN e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "FIN, FIN-ACK e ACK",
      "is_correct": false,
      "explanation": "**Incorreta.** FIN, FIN-ACK e ACK não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SYN, SYN-ACK e ACK",
      "is_correct": true,
      "explanation": "**Correta.** SYN, SYN-ACK e ACK. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "ACK, FIN e SYN",
      "is_correct": false,
      "explanation": "**Incorreta.** ACK, FIN e SYN não corresponde ao que o comando descreve. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a tcp handshake. A pista decisiva é a função ou característica descrita. O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer tcp handshake e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: TCP handshake. Conceito essencial: O three-way handshake utiliza SYN do cliente, SYN-ACK do servidor e ACK do cliente, sincronizando números de sequência e estabelecendo o estado da conexão. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0035

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0035",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "UDP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um serviço de tempo real tolera perda de datagramas e prioriza baixa latência. O transporte mais adequado pode ser",
  "alternatives": [
    {
      "id": "A",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "UDP",
      "is_correct": true,
      "explanation": "**Correta.** UDP. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a udp. A pista decisiva é a função ou característica descrita. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer udp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: UDP. Conceito essencial: UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0036

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0036",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "UDP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de udp. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "UDP",
      "is_correct": true,
      "explanation": "**Correta.** UDP. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a udp. A pista decisiva é a função ou característica descrita. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer udp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: UDP. Conceito essencial: UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0037

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0037",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "UDP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de udp, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** TCP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "UDP",
      "is_correct": true,
      "explanation": "**Correta.** UDP. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a udp. A pista decisiva é a função ou característica descrita. UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer udp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: UDP. Conceito essencial: UDP envia datagramas sem conexão e sem garantia de entrega, ordem ou retransmissão. A baixa sobrecarga pode favorecer voz, vídeo e jogos; a aplicação decide como lidar com perdas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0038

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0038",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O navegador solicita um recurso e o servidor responde com status e conteúdo. Esse modelo caracteriza",
  "alternatives": [
    {
      "id": "A",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "HTTP",
      "is_correct": true,
      "explanation": "**Correta.** HTTP. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http. A pista decisiva é a função ou característica descrita. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP. Conceito essencial: HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0039

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0039",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de http. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "HTTP",
      "is_correct": true,
      "explanation": "**Correta.** HTTP. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http. A pista decisiva é a função ou característica descrita. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP. Conceito essencial: HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0040

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0040",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de http, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "HTTP",
      "is_correct": true,
      "explanation": "**Correta.** HTTP. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http. A pista decisiva é a função ou característica descrita. HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP. Conceito essencial: HTTP é protocolo de aplicação baseado em requisição e resposta. A mensagem inclui método, URI, cabeçalhos e, quando aplicável, corpo; a resposta inclui status, cabeçalhos e representação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0041

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0041",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O HTTP tradicional, sem TLS, utiliza por padrão a porta TCP",
  "alternatives": [
    {
      "id": "A",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "80",
      "is_correct": true,
      "explanation": "**Correta.** 80. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http porta. A pista decisiva é a função ou característica descrita. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP porta. Conceito essencial: HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0042

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0042",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de http porta. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "80",
      "is_correct": true,
      "explanation": "**Correta.** 80. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http porta. A pista decisiva é a função ou característica descrita. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP porta. Conceito essencial: HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0043

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0043",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de http porta, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "80",
      "is_correct": true,
      "explanation": "**Correta.** 80. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http porta. A pista decisiva é a função ou característica descrita. HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP porta. Conceito essencial: HTTP tradicional usa TCP 80; HTTPS tradicional TCP 443. Portas são convenções e podem ser alteradas na configuração do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0044

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0044",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP GET",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma API HTTP, o método normalmente usado para solicitar a representação de um recurso é",
  "alternatives": [
    {
      "id": "A",
      "text": "POST",
      "is_correct": false,
      "explanation": "**Incorreta.** POST não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "GET",
      "is_correct": true,
      "explanation": "**Correta.** GET. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "DELETE",
      "is_correct": false,
      "explanation": "**Incorreta.** DELETE não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "CONNECT",
      "is_correct": false,
      "explanation": "**Incorreta.** CONNECT não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http get. A pista decisiva é a função ou característica descrita. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http get e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP GET. Conceito essencial: GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0045

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0045",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP GET",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de http get. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "GET",
      "is_correct": true,
      "explanation": "**Correta.** GET. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "DELETE",
      "is_correct": false,
      "explanation": "**Incorreta.** DELETE não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "CONNECT",
      "is_correct": false,
      "explanation": "**Incorreta.** CONNECT não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "POST",
      "is_correct": false,
      "explanation": "**Incorreta.** POST não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http get. A pista decisiva é a função ou característica descrita. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http get e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP GET. Conceito essencial: GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0046

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0046",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP GET",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de http get, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "DELETE",
      "is_correct": false,
      "explanation": "**Incorreta.** DELETE não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "CONNECT",
      "is_correct": false,
      "explanation": "**Incorreta.** CONNECT não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "POST",
      "is_correct": false,
      "explanation": "**Incorreta.** POST não corresponde ao que o comando descreve. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "GET",
      "is_correct": true,
      "explanation": "**Correta.** GET. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http get. A pista decisiva é a função ou característica descrita. GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http get e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP GET. Conceito essencial: GET recupera uma representação e é definido como método seguro e idempotente. POST submete dados; PUT substitui estado; DELETE solicita remoção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0047

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0047",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP 404",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O código HTTP 404 indica que",
  "alternatives": [
    {
      "id": "A",
      "text": "o recurso não foi encontrado",
      "is_correct": true,
      "explanation": "**Correta.** o recurso não foi encontrado. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "houve erro interno do servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** houve erro interno do servidor não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "o cliente foi redirecionado",
      "is_correct": false,
      "explanation": "**Incorreta.** o cliente foi redirecionado não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "a requisição teve sucesso",
      "is_correct": false,
      "explanation": "**Incorreta.** a requisição teve sucesso não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http 404. A pista decisiva é a função ou característica descrita. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http 404 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP 404. Conceito essencial: 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0048

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0048",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP 404",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de http 404. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "houve erro interno do servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** houve erro interno do servidor não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "o cliente foi redirecionado",
      "is_correct": false,
      "explanation": "**Incorreta.** o cliente foi redirecionado não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "a requisição teve sucesso",
      "is_correct": false,
      "explanation": "**Incorreta.** a requisição teve sucesso não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "o recurso não foi encontrado",
      "is_correct": true,
      "explanation": "**Correta.** o recurso não foi encontrado. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http 404. A pista decisiva é a função ou característica descrita. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http 404 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP 404. Conceito essencial: 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0049

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0049",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTP 404",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de http 404, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "o cliente foi redirecionado",
      "is_correct": false,
      "explanation": "**Incorreta.** o cliente foi redirecionado não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "a requisição teve sucesso",
      "is_correct": false,
      "explanation": "**Incorreta.** a requisição teve sucesso não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "o recurso não foi encontrado",
      "is_correct": true,
      "explanation": "**Correta.** o recurso não foi encontrado. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "houve erro interno do servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** houve erro interno do servidor não corresponde ao que o comando descreve. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a http 404. A pista decisiva é a função ou característica descrita. 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer http 404 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTP 404. Conceito essencial: 404 Not Found informa que o servidor não encontrou uma representação para o recurso solicitado. 2xx é sucesso; 3xx redirecionamento; 4xx problema associado à requisição; 5xx falha do servidor. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0050

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0050",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTPS/TLS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A principal finalidade do TLS utilizado pelo HTTPS é",
  "alternatives": [
    {
      "id": "A",
      "text": "impedir qualquer ataque à aplicação",
      "is_correct": false,
      "explanation": "**Incorreta.** impedir qualquer ataque à aplicação não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "substituir IP",
      "is_correct": false,
      "explanation": "**Incorreta.** substituir IP não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "ocultar IP de todos os roteadores",
      "is_correct": false,
      "explanation": "**Incorreta.** ocultar IP de todos os roteadores não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "proteger a comunicação com confidencialidade, integridade e autenticação do servidor",
      "is_correct": true,
      "explanation": "**Correta.** proteger a comunicação com confidencialidade, integridade e autenticação do servidor. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a https/tls. A pista decisiva é a função ou característica descrita. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer https/tls e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTPS/TLS. Conceito essencial: HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0051

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0051",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTPS/TLS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de https/tls. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "substituir IP",
      "is_correct": false,
      "explanation": "**Incorreta.** substituir IP não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "ocultar IP de todos os roteadores",
      "is_correct": false,
      "explanation": "**Incorreta.** ocultar IP de todos os roteadores não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "proteger a comunicação com confidencialidade, integridade e autenticação do servidor",
      "is_correct": true,
      "explanation": "**Correta.** proteger a comunicação com confidencialidade, integridade e autenticação do servidor. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "impedir qualquer ataque à aplicação",
      "is_correct": false,
      "explanation": "**Incorreta.** impedir qualquer ataque à aplicação não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a https/tls. A pista decisiva é a função ou característica descrita. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer https/tls e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTPS/TLS. Conceito essencial: HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0052

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0052",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "HTTPS/TLS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de https/tls, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "ocultar IP de todos os roteadores",
      "is_correct": false,
      "explanation": "**Incorreta.** ocultar IP de todos os roteadores não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "proteger a comunicação com confidencialidade, integridade e autenticação do servidor",
      "is_correct": true,
      "explanation": "**Correta.** proteger a comunicação com confidencialidade, integridade e autenticação do servidor. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "impedir qualquer ataque à aplicação",
      "is_correct": false,
      "explanation": "**Incorreta.** impedir qualquer ataque à aplicação não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "substituir IP",
      "is_correct": false,
      "explanation": "**Incorreta.** substituir IP não corresponde ao que o comando descreve. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a https/tls. A pista decisiva é a função ou característica descrita. HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer https/tls e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: HTTPS/TLS. Conceito essencial: HTTPS é HTTP protegido por TLS. TLS oferece confidencialidade, integridade e autenticação do servidor por certificados. Não garante que o site seja honesto ou livre de vulnerabilidades. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0053

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0053",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para executar comandos remotamente em servidor Linux com criptografia, deve-se utilizar",
  "alternatives": [
    {
      "id": "A",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "Telnet",
      "is_correct": false,
      "explanation": "**Incorreta.** Telnet não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SSH",
      "is_correct": true,
      "explanation": "**Correta.** SSH. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh. A pista decisiva é a função ou característica descrita. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH. Conceito essencial: SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0054

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0054",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ssh. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "Telnet",
      "is_correct": false,
      "explanation": "**Incorreta.** Telnet não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SSH",
      "is_correct": true,
      "explanation": "**Correta.** SSH. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh. A pista decisiva é a função ou característica descrita. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH. Conceito essencial: SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0055

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0055",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ssh, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SSH",
      "is_correct": true,
      "explanation": "**Correta.** SSH. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "Telnet",
      "is_correct": false,
      "explanation": "**Incorreta.** Telnet não corresponde ao que o comando descreve. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh. A pista decisiva é a função ou característica descrita. SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH. Conceito essencial: SSH permite acesso remoto seguro, execução de comandos e tunelamento, normalmente em TCP 22. Telnet transmite dados sem criptografia por padrão; SMTP envia e-mail; IMAP acessa caixa postal. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0056

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0056",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A porta TCP padrão do SSH é",
  "alternatives": [
    {
      "id": "A",
      "text": "21",
      "is_correct": false,
      "explanation": "**Incorreta.** 21 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "22",
      "is_correct": true,
      "explanation": "**Correta.** 22. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "23",
      "is_correct": false,
      "explanation": "**Incorreta.** 23 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh porta. A pista decisiva é a função ou característica descrita. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH porta. Conceito essencial: SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0057

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0057",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ssh porta. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "22",
      "is_correct": true,
      "explanation": "**Correta.** 22. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "23",
      "is_correct": false,
      "explanation": "**Incorreta.** 23 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "21",
      "is_correct": false,
      "explanation": "**Incorreta.** 21 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh porta. A pista decisiva é a função ou característica descrita. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH porta. Conceito essencial: SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0058

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0058",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ssh porta, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "23",
      "is_correct": false,
      "explanation": "**Incorreta.** 23 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "21",
      "is_correct": false,
      "explanation": "**Incorreta.** 21 não corresponde ao que o comando descreve. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "22",
      "is_correct": true,
      "explanation": "**Correta.** 22. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh porta. A pista decisiva é a função ou característica descrita. SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH porta. Conceito essencial: SSH usa TCP 22. Telnet usa 23; SMTP tradicional 25; HTTP 80. A porta pode ser alterada, mas 22 é a convenção. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0059

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0059",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH chaves",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Na autenticação SSH por par de chaves, a afirmação correta é",
  "alternatives": [
    {
      "id": "A",
      "text": "a chave pública deve ser secreta",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave pública deve ser secreta não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "a chave privada fica com o cliente e a pública é cadastrada no servidor",
      "is_correct": true,
      "explanation": "**Correta.** a chave privada fica com o cliente e a pública é cadastrada no servidor. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "as duas chaves são idênticas",
      "is_correct": false,
      "explanation": "**Incorreta.** as duas chaves são idênticas não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "a chave privada é publicada no servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave privada é publicada no servidor não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh chaves. A pista decisiva é a função ou característica descrita. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh chaves e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH chaves. Conceito essencial: A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0060

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0060",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH chaves",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ssh chaves. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "a chave privada fica com o cliente e a pública é cadastrada no servidor",
      "is_correct": true,
      "explanation": "**Correta.** a chave privada fica com o cliente e a pública é cadastrada no servidor. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "as duas chaves são idênticas",
      "is_correct": false,
      "explanation": "**Incorreta.** as duas chaves são idênticas não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "a chave privada é publicada no servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave privada é publicada no servidor não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "a chave pública deve ser secreta",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave pública deve ser secreta não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh chaves. A pista decisiva é a função ou característica descrita. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh chaves e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH chaves. Conceito essencial: A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0061

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0061",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SSH chaves",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ssh chaves, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "as duas chaves são idênticas",
      "is_correct": false,
      "explanation": "**Incorreta.** as duas chaves são idênticas não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "a chave privada é publicada no servidor",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave privada é publicada no servidor não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "a chave pública deve ser secreta",
      "is_correct": false,
      "explanation": "**Incorreta.** a chave pública deve ser secreta não corresponde ao que o comando descreve. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "a chave privada fica com o cliente e a pública é cadastrada no servidor",
      "is_correct": true,
      "explanation": "**Correta.** a chave privada fica com o cliente e a pública é cadastrada no servidor. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ssh chaves. A pista decisiva é a função ou característica descrita. A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ssh chaves e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SSH chaves. Conceito essencial: A chave privada permanece sob controle do usuário; a pública é instalada no servidor, por exemplo em authorized_keys. O cliente demonstra posse da privada sem transmiti-la. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0062

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0062",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O protocolo normalmente utilizado para submissão e transferência de mensagens de correio é",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SMTP",
      "is_correct": true,
      "explanation": "**Correta.** SMTP. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp. A pista decisiva é a função ou característica descrita. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP. Conceito essencial: SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0063

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0063",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de smtp. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SMTP",
      "is_correct": true,
      "explanation": "**Correta.** SMTP. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp. A pista decisiva é a função ou característica descrita. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP. Conceito essencial: SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0064

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0064",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de smtp, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SMTP",
      "is_correct": true,
      "explanation": "**Correta.** SMTP. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp. A pista decisiva é a função ou característica descrita. SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP. Conceito essencial: SMTP realiza envio/submissão e transferência entre servidores. IMAP/POP3 permitem acesso/recuperação de mensagens pelo usuário. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0065

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0065",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A porta TCP tradicionalmente associada ao SMTP entre servidores é",
  "alternatives": [
    {
      "id": "A",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "25",
      "is_correct": true,
      "explanation": "**Correta.** 25. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp porta. A pista decisiva é a função ou característica descrita. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP porta. Conceito essencial: SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0066

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0066",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de smtp porta. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "25",
      "is_correct": true,
      "explanation": "**Correta.** 25. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp porta. A pista decisiva é a função ou característica descrita. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP porta. Conceito essencial: SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0067

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0067",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "SMTP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de smtp porta, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "143",
      "is_correct": false,
      "explanation": "**Incorreta.** 143 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "22",
      "is_correct": false,
      "explanation": "**Incorreta.** 22 não corresponde ao que o comando descreve. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "25",
      "is_correct": true,
      "explanation": "**Correta.** 25. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a smtp porta. A pista decisiva é a função ou característica descrita. SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer smtp porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: SMTP porta. Conceito essencial: SMTP relay entre servidores utiliza tradicionalmente TCP 25. Submissão autenticada costuma usar 587 (STARTTLS) ou 465 (TLS implícito). Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0068

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0068",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para consultar mensagens em vários dispositivos, mantendo pastas e estado de leitura sincronizados no servidor, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "IMAP",
      "is_correct": true,
      "explanation": "**Correta.** IMAP. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap. A pista decisiva é a função ou característica descrita. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP. Conceito essencial: IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0069

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0069",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de imap. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "IMAP",
      "is_correct": true,
      "explanation": "**Correta.** IMAP. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap. A pista decisiva é a função ou característica descrita. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP. Conceito essencial: IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0070

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0070",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de imap, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "IMAP",
      "is_correct": true,
      "explanation": "**Correta.** IMAP. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap. A pista decisiva é a função ou característica descrita. IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP. Conceito essencial: IMAP acessa e gerencia mensagens armazenadas no servidor, sincronizando pastas e sinalizadores. SMTP envia mensagens; POP3 é orientado à recuperação. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0071

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0071",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A porta TCP padrão do IMAP sem TLS implícito é",
  "alternatives": [
    {
      "id": "A",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "143",
      "is_correct": true,
      "explanation": "**Correta.** 143. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "993",
      "is_correct": false,
      "explanation": "**Incorreta.** 993 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap porta. A pista decisiva é a função ou característica descrita. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP porta. Conceito essencial: IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0072

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0072",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de imap porta. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "143",
      "is_correct": true,
      "explanation": "**Correta.** 143. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "993",
      "is_correct": false,
      "explanation": "**Incorreta.** 993 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap porta. A pista decisiva é a função ou característica descrita. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP porta. Conceito essencial: IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0073

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0073",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IMAP porta",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de imap porta, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "993",
      "is_correct": false,
      "explanation": "**Incorreta.** 993 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "110",
      "is_correct": false,
      "explanation": "**Incorreta.** 110 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "25",
      "is_correct": false,
      "explanation": "**Incorreta.** 25 não corresponde ao que o comando descreve. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "143",
      "is_correct": true,
      "explanation": "**Correta.** 143. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a imap porta. A pista decisiva é a função ou característica descrita. IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer imap porta e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IMAP porta. Conceito essencial: IMAP usa TCP 143; IMAPS com TLS implícito normalmente usa TCP 993. POP3 usa 110; SMTP relay 25. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0074

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0074",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DNS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O serviço que traduz nomes de domínio em endereços IP é",
  "alternatives": [
    {
      "id": "A",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "DHCP",
      "is_correct": false,
      "explanation": "**Incorreta.** DHCP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "DNS",
      "is_correct": true,
      "explanation": "**Correta.** DNS. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dns. A pista decisiva é a função ou característica descrita. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dns e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DNS. Conceito essencial: DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0075

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0075",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DNS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de dns. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "DHCP",
      "is_correct": false,
      "explanation": "**Incorreta.** DHCP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "DNS",
      "is_correct": true,
      "explanation": "**Correta.** DNS. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dns. A pista decisiva é a função ou característica descrita. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dns e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DNS. Conceito essencial: DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0076

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0076",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DNS",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de dns, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "DHCP",
      "is_correct": false,
      "explanation": "**Incorreta.** DHCP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "DNS",
      "is_correct": true,
      "explanation": "**Correta.** DNS. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "SMTP",
      "is_correct": false,
      "explanation": "**Incorreta.** SMTP não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "SSH",
      "is_correct": false,
      "explanation": "**Incorreta.** SSH não corresponde ao que o comando descreve. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dns. A pista decisiva é a função ou característica descrita. DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dns e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DNS. Conceito essencial: DNS é sistema distribuído e hierárquico que resolve nomes em registros como A (IPv4) e AAAA (IPv6). Consultas tradicionais usam UDP 53 e também TCP 53 em situações específicas. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0077

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0077",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DHCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O serviço que fornece automaticamente IP, máscara, gateway e DNS é",
  "alternatives": [
    {
      "id": "A",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** DNS não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "DHCP",
      "is_correct": true,
      "explanation": "**Correta.** DHCP. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dhcp. A pista decisiva é a função ou característica descrita. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dhcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DHCP. Conceito essencial: DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0078

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0078",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DHCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de dhcp. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** DNS não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "DHCP",
      "is_correct": true,
      "explanation": "**Correta.** DHCP. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dhcp. A pista decisiva é a função ou característica descrita. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dhcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DHCP. Conceito essencial: DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0079

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0079",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "DHCP",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de dhcp, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "HTTP",
      "is_correct": false,
      "explanation": "**Incorreta.** HTTP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "DHCP",
      "is_correct": true,
      "explanation": "**Correta.** DHCP. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "IMAP",
      "is_correct": false,
      "explanation": "**Incorreta.** IMAP não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** DNS não corresponde ao que o comando descreve. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a dhcp. A pista decisiva é a função ou característica descrita. DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer dhcp e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: DHCP. Conceito essencial: DHCP automatiza a configuração de hosts. O processo clássico DORA é Discover, Offer, Request e Acknowledgment; a concessão é chamada lease. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0080

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0080",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv4",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um endereço IPv4 possui",
  "alternatives": [
    {
      "id": "A",
      "text": "32 bits",
      "is_correct": true,
      "explanation": "**Correta.** 32 bits. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "128 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 128 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv4. A pista decisiva é a função ou característica descrita. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv4 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv4. Conceito essencial: IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0081

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0081",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv4",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ipv4. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "128 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 128 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "32 bits",
      "is_correct": true,
      "explanation": "**Correta.** 32 bits. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv4. A pista decisiva é a função ou característica descrita. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv4 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv4. Conceito essencial: IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0082

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0082",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv4",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ipv4, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "128 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 128 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "32 bits",
      "is_correct": true,
      "explanation": "**Correta.** 32 bits. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv4. A pista decisiva é a função ou característica descrita. IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv4 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv4. Conceito essencial: IPv4 possui 32 bits em quatro octetos decimais. IPv6 utiliza 128 bits e notação hexadecimal separada por dois-pontos. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0083

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0083",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv6",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O tamanho de um endereço IPv6 é",
  "alternatives": [
    {
      "id": "A",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "128 bits",
      "is_correct": true,
      "explanation": "**Correta.** 128 bits. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "32 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 32 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv6. A pista decisiva é a função ou característica descrita. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv6 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv6. Conceito essencial: IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0084

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0084",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv6",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ipv6. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "128 bits",
      "is_correct": true,
      "explanation": "**Correta.** 128 bits. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "32 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 32 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv6. A pista decisiva é a função ou característica descrita. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv6 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv6. Conceito essencial: IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0085

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0085",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "IPv6",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ipv6, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "128 bits",
      "is_correct": true,
      "explanation": "**Correta.** 128 bits. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "32 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 32 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "48 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 48 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "64 bits",
      "is_correct": false,
      "explanation": "**Incorreta.** 64 bits não corresponde ao que o comando descreve. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ipv6. A pista decisiva é a função ou característica descrita. IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ipv6 e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: IPv6. Conceito essencial: IPv6 utiliza 128 bits, ampliando o espaço de endereçamento em relação ao IPv4 de 32 bits. IPv6 não utiliza broadcast; emprega multicast e anycast. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0086

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0086",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "MAC",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Ethernet, o endereço utilizado para identificar uma interface no enlace local é o endereço",
  "alternatives": [
    {
      "id": "A",
      "text": "porta TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** porta TCP não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "nome DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** nome DNS não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "IP público",
      "is_correct": false,
      "explanation": "**Incorreta.** IP público não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "MAC",
      "is_correct": true,
      "explanation": "**Correta.** MAC. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a mac. A pista decisiva é a função ou característica descrita. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer mac e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: MAC. Conceito essencial: MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0087

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0087",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "MAC",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de mac. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "nome DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** nome DNS não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "IP público",
      "is_correct": false,
      "explanation": "**Incorreta.** IP público não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "MAC",
      "is_correct": true,
      "explanation": "**Correta.** MAC. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "porta TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** porta TCP não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a mac. A pista decisiva é a função ou característica descrita. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer mac e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: MAC. Conceito essencial: MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0088

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0088",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "MAC",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de mac, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "IP público",
      "is_correct": false,
      "explanation": "**Incorreta.** IP público não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "MAC",
      "is_correct": true,
      "explanation": "**Correta.** MAC. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "porta TCP",
      "is_correct": false,
      "explanation": "**Incorreta.** porta TCP não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "nome DNS",
      "is_correct": false,
      "explanation": "**Incorreta.** nome DNS não corresponde ao que o comando descreve. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a mac. A pista decisiva é a função ou característica descrita. MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer mac e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: MAC. Conceito essencial: MAC é identificador de camada de enlace, normalmente com 48 bits. IP é endereço lógico usado no encaminhamento entre redes; portas identificam processos/serviços. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0089

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0089",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Switch",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O equipamento que encaminha quadros com base em endereços MAC é o",
  "alternatives": [
    {
      "id": "A",
      "text": "modem",
      "is_correct": false,
      "explanation": "**Incorreta.** modem não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "switch",
      "is_correct": true,
      "explanation": "**Correta.** switch. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "roteador",
      "is_correct": false,
      "explanation": "**Incorreta.** roteador não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a switch. A pista decisiva é a função ou característica descrita. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer switch e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Switch. Conceito essencial: Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0090

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0090",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Switch",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de switch. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "switch",
      "is_correct": true,
      "explanation": "**Correta.** switch. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "roteador",
      "is_correct": false,
      "explanation": "**Incorreta.** roteador não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "modem",
      "is_correct": false,
      "explanation": "**Incorreta.** modem não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a switch. A pista decisiva é a função ou característica descrita. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer switch e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Switch. Conceito essencial: Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0091

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0091",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Switch",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de switch, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "switch",
      "is_correct": true,
      "explanation": "**Correta.** switch. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "roteador",
      "is_correct": false,
      "explanation": "**Incorreta.** roteador não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "modem",
      "is_correct": false,
      "explanation": "**Incorreta.** modem não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a switch. A pista decisiva é a função ou característica descrita. Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer switch e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Switch. Conceito essencial: Switch de camada 2 aprende MACs e encaminha quadros dentro da LAN/VLAN. Roteadores encaminham pacotes IP entre redes; hubs repetem sinais. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0092

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0092",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Roteador",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O equipamento que encaminha pacotes IP entre redes distintas é o",
  "alternatives": [
    {
      "id": "A",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "repetidor",
      "is_correct": false,
      "explanation": "**Incorreta.** repetidor não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "roteador",
      "is_correct": true,
      "explanation": "**Correta.** roteador. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "conector RJ-45",
      "is_correct": false,
      "explanation": "**Incorreta.** conector RJ-45 não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a roteador. A pista decisiva é a função ou característica descrita. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer roteador e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Roteador. Conceito essencial: Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0093

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0093",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Roteador",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de roteador. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "repetidor",
      "is_correct": false,
      "explanation": "**Incorreta.** repetidor não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "roteador",
      "is_correct": true,
      "explanation": "**Correta.** roteador. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "conector RJ-45",
      "is_correct": false,
      "explanation": "**Incorreta.** conector RJ-45 não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a roteador. A pista decisiva é a função ou característica descrita. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer roteador e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Roteador. Conceito essencial: Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0094

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0094",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Roteador",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de roteador, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "roteador",
      "is_correct": true,
      "explanation": "**Correta.** roteador. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "conector RJ-45",
      "is_correct": false,
      "explanation": "**Incorreta.** conector RJ-45 não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "hub",
      "is_correct": false,
      "explanation": "**Incorreta.** hub não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "repetidor",
      "is_correct": false,
      "explanation": "**Incorreta.** repetidor não corresponde ao que o comando descreve. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a roteador. A pista decisiva é a função ou característica descrita. Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer roteador e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Roteador. Conceito essencial: Roteador consulta tabela de rotas e escolhe próximo salto/interface de saída. Switch tradicional comuta quadros na LAN; switches L3 também podem rotear. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0095

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0095",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Wi-Fi",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A família IEEE associada às redes locais sem fio Wi-Fi é",
  "alternatives": [
    {
      "id": "A",
      "text": "802.11",
      "is_correct": true,
      "explanation": "**Correta.** 802.11. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "B",
      "text": "802.1Q",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.1Q não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "802.15.1",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15.1 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "802.3",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.3 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a wi-fi. A pista decisiva é a função ou característica descrita. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Assim, a alternativa **A** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer wi-fi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Wi-Fi. Conceito essencial: IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0096

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0096",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Wi-Fi",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de wi-fi. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "802.1Q",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.1Q não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "802.15.1",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15.1 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "802.3",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.3 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "802.11",
      "is_correct": true,
      "explanation": "**Correta.** 802.11. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a wi-fi. A pista decisiva é a função ou característica descrita. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer wi-fi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Wi-Fi. Conceito essencial: IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0097

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0097",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Wi-Fi",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de wi-fi, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "802.15.1",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15.1 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "802.3",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.3 não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "802.11",
      "is_correct": true,
      "explanation": "**Correta.** 802.11. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "802.1Q",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.1Q não corresponde ao que o comando descreve. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a wi-fi. A pista decisiva é a função ou característica descrita. IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer wi-fi e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Wi-Fi. Conceito essencial: IEEE 802.11 define WLAN/Wi-Fi; IEEE 802.3 define Ethernet; IEEE 802.1Q é associado à marcação de VLAN. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0098

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0098",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Ethernet",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A tecnologia Ethernet cabeada é padronizada principalmente pela família",
  "alternatives": [
    {
      "id": "A",
      "text": "802.15",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "802.16",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.16 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "802.11",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.11 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "802.3",
      "is_correct": true,
      "explanation": "**Correta.** 802.3. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ethernet. A pista decisiva é a função ou característica descrita. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Assim, a alternativa **D** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ethernet e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Ethernet. Conceito essencial: IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0099

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0099",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Ethernet",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma situação de administração de redes, considere o conceito de ethernet. Assinale a alternativa correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "802.16",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.16 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "802.11",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.11 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "C",
      "text": "802.3",
      "is_correct": true,
      "explanation": "**Correta.** 802.3. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "D",
      "text": "802.15",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ethernet. A pista decisiva é a função ou característica descrita. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Assim, a alternativa **C** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ethernet e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Ethernet. Conceito essencial: IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Questão 0100

```json
{
  "id": "MAT-REDES-COMPERVE-001-Q0100",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Redes de Computadores",
  "topic": "Conceitos básicos, tipos de redes e protocolos de comunicação (HTTP, SSH, IMAP, SMTP, TCP/IP e UDP)",
  "subtopic": "Ethernet",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A respeito de ethernet, identifique a afirmação tecnicamente correta.",
  "alternatives": [
    {
      "id": "A",
      "text": "802.11",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.11 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "B",
      "text": "802.3",
      "is_correct": true,
      "explanation": "**Correta.** 802.3. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. O enunciado descreve precisamente esse funcionamento; memorize a relação entre a função e o conceito, não apenas a sigla."
    },
    {
      "id": "C",
      "text": "802.15",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.15 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    },
    {
      "id": "D",
      "text": "802.16",
      "is_correct": false,
      "explanation": "**Incorreta.** 802.16 não corresponde ao que o comando descreve. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. A opção confunde o conceito avaliado com outra função, camada ou serviço. Identifique primeiro a responsabilidade técnica solicitada e só então compare as alternativas."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado solicita identificar o conceito relacionado a ethernet. A pista decisiva é a função ou característica descrita. IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Assim, a alternativa **B** é a única que corresponde ao comando; as demais são incompatíveis com essa função, como detalhado em cada alternativa.",
    "theoretical_content": "IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Em redes, é importante distinguir a função de cada camada: aplicação define os serviços utilizados pelos programas; transporte realiza comunicação entre processos; Internet/IP endereça e encaminha datagramas; acesso à rede trata da comunicação no enlace e no meio físico. Protocolos e tecnologias são escolhidos de acordo com os requisitos do serviço.",
    "bank_approach": "A questão adota cobrança conceitual ou contextualizada, com descrição de uma função e alternativas tecnicamente próximas. Esse formato é compatível com o bloco de TI observado no corpus COMPERVE. O candidato deve reconhecer ethernet e diferenciar conceitos que compartilham o mesmo contexto, sem confundir função, camada, porta e protocolo.",
    "study_tip": "Sublinhe o verbo funcional do enunciado: encaminhar, transportar, sincronizar, enviar, acessar, criptografar ou resolver. Associe-o à camada e ao protocolo. Em questões de portas, verifique se o serviço é tradicional ou protegido por TLS e se o cenário é transferência entre servidores ou submissão pelo cliente.",
    "review_summary": "Tema: Ethernet. Conceito essencial: IEEE 802.3 especifica Ethernet. Wi-Fi é IEEE 802.11. Ethernet moderna com switches opera frequentemente em full-duplex. Revise também a distinção entre aplicação, transporte, Internet e acesso à rede."
  }
}
```

## Gabarito consolidado

01: A | 02: D | 03: A | 04: A | 05: A | 06: A | 07: A | 08: A | 09: D | 10: C | 11: A | 12: D | 13: C | 14: B | 15: A | 16: D | 17: D | 18: C | 19: B | 20: C | 21: B | 22: A | 23: C | 24: B | 25: A | 26: D | 27: C | 28: B | 29: D | 30: C | 31: B | 32: A | 33: D | 34: C | 35: B | 36: A | 37: D | 38: D | 39: C | 40: B | 41: D | 42: C | 43: B | 44: B | 45: A | 46: D | 47: A | 48: D | 49: C | 50: D | 51: C | 52: B | 53: D | 54: C | 55: B | 56: B | 57: A | 58: D | 59: B | 60: A | 61: D | 62: D | 63: C | 64: B | 65: B | 66: A | 67: D | 68: B | 69: A | 70: D | 71: B | 72: A | 73: D | 74: D | 75: C | 76: B | 77: D | 78: C | 79: B | 80: A | 81: D | 82: C | 83: C | 84: B | 85: A | 86: D | 87: C | 88: B | 89: C | 90: B | 91: A | 92: C | 93: B | 94: A | 95: A | 96: D | 97: C | 98: D | 99: C | 100: B

## Encerramento

Material concluído com **100 questões**, sendo **7 originais** e **93 inéditas**.
