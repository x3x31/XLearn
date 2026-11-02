---
schema_version: "1.0"
material_id: "MAT-SO"
bank: "COMPERVE"
subject: "Sistemas Operacionais"
topic: "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições"
requested_questions: 100
original_questions: 15
generated_questions: 85
total_questions: 100
created_at: "2026-11-02"
language: "pt-BR"
---

# Material de Estudo — Sistemas Operacionais | COMPERVE

Este material reúne questões originais selecionadas do corpus fornecido e questões inéditas elaboradas segundo os padrões descritos em `ESTILO_DA_BANCA.md`. As questões originais mantêm o enunciado e as alternativas da prova; eventuais comentários técnicos adicionais não alteram o item original. As inéditas não são apresentadas como questões aplicadas.

## Identificação do material

- **Disciplina:** Sistemas Operacionais
- **Conteúdo:** utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições.
- **Questões originais:** 15
- **Questões inéditas:** 85
- **Total:** 100

## Questões

## Questão 0001

```json
{
  "id": "MAT-SO-Q0001",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 16/2018 — Analista de Tecnologia da Informação (cargo 102)",
    "year": 2018,
    "question_number": 21,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Criptografia e proteção de dados no Windows Server",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Steve é um analista de tecnologia da informação da UFRN que anda muito preocupado com a segurança da informação. Ele pretende criptografar os dados de um servidor que possui como sistema operacional o Windows Server 2012 R2. A ferramenta que ele pode utilizar nesse sistema operacional para reduzir acessos não autorizados aos dados por meio do aperfeiçoamento das proteções de arquivo e sistema é o",
  "alternatives": [
    {
      "id": "A",
      "text": "Kerberos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Kerberos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'BitLocker.'. BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "Encryptor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Encryptor.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'BitLocker.'. BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "BitLocker.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'BitLocker.'. BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "AppLocker.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'AppLocker.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'BitLocker.'. BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar criptografia e proteção de dados no windows server. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora criptografia e proteção de dados no windows server por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de criptografia e proteção de dados no windows server à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: BitLocker é a tecnologia de criptografia de volumes do Windows, destinada a proteger dados armazenados em discos, inclusive em caso de perda ou furto do equipamento. Kerberos é protocolo de autenticação; AppLocker controla quais aplicativos podem ser executados; “Encryptor” não é o nome da ferramenta nativa indicada no contexto da questão. A proteção depende da edição, configuração e gerenciamento das chaves de recuperação.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0002

```json
{
  "id": "MAT-SO-Q0002",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma estação Linux, um administrador precisa compreender qual componente permanece responsável pela comunicação entre processos e recursos físicos, oferecendo serviços essenciais ao restante do sistema. Esse componente é o",
  "alternatives": [
    {
      "id": "A",
      "text": "ambiente gráfico.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ambiente gráfico.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'gerenciador de arquivos.'. O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "kernel.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'kernel.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'gerenciador de arquivos.'. O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "shell.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'shell.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'gerenciador de arquivos.'. O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "gerenciador de arquivos.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'gerenciador de arquivos.'. O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O kernel (núcleo) é a parte central do sistema operacional. Ele gerencia CPU, memória, dispositivos de entrada e saída, interrupções, processos e chamadas de sistema. Aplicações não acessam diretamente o hardware em condições normais: solicitam serviços ao núcleo por interfaces controladas. Shell, gerenciador de arquivos e ambiente gráfico são componentes de espaço de usuário e dependem dos serviços do kernel.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0003

```json
{
  "id": "MAT-SO-Q0003",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um sistema operacional, a execução de uma instrução privilegiada por um programa comum é impedida principalmente pela separação entre",
  "alternatives": [
    {
      "id": "A",
      "text": "sistema de arquivos e diretório.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sistema de arquivos e diretório.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'modo usuário e modo kernel.'. Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "interface gráfica e terminal.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'interface gráfica e terminal.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'modo usuário e modo kernel.'. Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "modo usuário e modo kernel.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'modo usuário e modo kernel.'. Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "partição primária e partição lógica.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'partição primária e partição lógica.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'modo usuário e modo kernel.'. Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Processadores modernos oferecem níveis de privilégio. No modo usuário, programas têm acesso restrito; no modo kernel, o núcleo pode executar instruções privilegiadas e acessar recursos protegidos. Uma chamada de sistema permite solicitar operações controladas ao kernel. Essa separação reduz o impacto de falhas e limita ações não autorizadas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0004

```json
{
  "id": "MAT-SO-Q0004",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma equipe pretende executar duas distribuições Linux no mesmo computador, escolhendo uma delas no momento da inicialização. Para isso, deve configurar um",
  "alternatives": [
    {
      "id": "A",
      "text": "gerenciador de pacotes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'gerenciador de pacotes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'servidor de impressão.'. O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "servidor de impressão.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'servidor de impressão.'. O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "daemon de log.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'daemon de log.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'servidor de impressão.'. O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "carregador de inicialização, como GRUB.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'carregador de inicialização, como GRUB.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'servidor de impressão.'. O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O bootloader, como GRUB, é executado após o firmware e permite selecionar um sistema ou kernel, carregar o kernel e, quando aplicável, um initramfs. O gerenciador de pacotes instala software; o serviço de impressão administra filas; e o daemon de log registra eventos. Em dual boot, o carregador apresenta entradas para os sistemas instalados.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0005

```json
{
  "id": "MAT-SO-Q0005",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em computadores atuais, a configuração UEFI difere do BIOS tradicional, entre outros aspectos, por",
  "alternatives": [
    {
      "id": "A",
      "text": "ser um firmware com suporte a inicialização por entradas e, usualmente, partição de sistema EFI.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'ser um firmware com suporte a inicialização por entradas e, usualmente, partição de sistema EFI.'. UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "exigir que o disco utilize FAT16 em qualquer cenário.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'exigir que o disco utilize FAT16 em qualquer cenário.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser um firmware com suporte a inicialização por entradas e, usualmente, partição de sistema EFI.'. UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "substituir integralmente o sistema operacional.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'substituir integralmente o sistema operacional.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser um firmware com suporte a inicialização por entradas e, usualmente, partição de sistema EFI.'. UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "impedir a inicialização de sistemas Linux.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'impedir a inicialização de sistemas Linux.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser um firmware com suporte a inicialização por entradas e, usualmente, partição de sistema EFI.'. UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: UEFI é uma especificação de firmware que sucede o modelo BIOS tradicional. Em instalações comuns com UEFI, os arquivos de boot ficam na EFI System Partition (ESP), normalmente formatada em FAT32, e o firmware mantém entradas de inicialização. UEFI não é sistema operacional e não impede Linux; Secure Boot pode exigir componentes assinados ou configuração compatível.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0006

```json
{
  "id": "MAT-SO-Q0006",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um computador apresenta falhas após atualização de um módulo do kernel Linux. Uma medida adequada de diagnóstico inicial consiste em",
  "alternatives": [
    {
      "id": "A",
      "text": "alterar a extensão dos arquivos de sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar a extensão dos arquivos de sistema.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remover o gerenciador de pacotes.'. Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "consultar os registros de inicialização e testar um kernel anterior disponível no carregador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'consultar os registros de inicialização e testar um kernel anterior disponível no carregador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remover o gerenciador de pacotes.'. Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "formatar imediatamente todas as partições.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'formatar imediatamente todas as partições.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remover o gerenciador de pacotes.'. Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "remover o gerenciador de pacotes.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'remover o gerenciador de pacotes.'. Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Falhas após atualização podem decorrer de incompatibilidade de kernel, driver ou módulo externo. Logs de boot, mensagens do kernel (por exemplo, journalctl -b ou dmesg, conforme o caso) e a seleção temporária de um kernel anterior ajudam a isolar a causa. Formatação destrói dados e não deve ser a primeira medida de diagnóstico.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0007

```json
{
  "id": "MAT-SO-Q0007",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma distribuição Linux, o processo tradicionalmente responsável por iniciar e supervisionar serviços e demais processos do espaço de usuário após a inicialização do kernel é",
  "alternatives": [
    {
      "id": "A",
      "text": "o servidor DNS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o servidor DNS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o processo init, frequentemente implementado por systemd.'. Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "o gerenciador de janelas.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o gerenciador de janelas.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o processo init, frequentemente implementado por systemd.'. Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "o processo init, frequentemente implementado por systemd.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'o processo init, frequentemente implementado por systemd.'. Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "PID 0, sempre executado como shell interativo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'PID 0, sempre executado como shell interativo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o processo init, frequentemente implementado por systemd.'. Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Após iniciar, o kernel prepara o ambiente e executa o primeiro processo de espaço de usuário, historicamente init, normalmente identificado como PID 1. Em muitas distribuições atuais, systemd desempenha essa função, inicializando serviços e gerenciando unidades. DNS e gerenciador de janelas são serviços ou aplicações, não o processo init.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0008

```json
{
  "id": "MAT-SO-Q0008",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 16/2018 — Analista de Tecnologia da Informação (cargo 102)",
    "year": 2018,
    "question_number": 22,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "SELinux e configuração de segurança",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "O Security-Enhanced Linux (SELinux) é um mecanismo implementado na arquitetura MAC (Mandatory Access Control) para prover maior segurança ao sistema operacional. Ele possui três modos de operação, enforcing, permissive e disabled, em que o modo enforcing é o modo padrão. No CentOS 7, o arquivo de configuração para alterar os modos de operação do SELinux está localizado em",
  "alternatives": [
    {
      "id": "A",
      "text": "/etc/security/selinux",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '/etc/security/selinux', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '/etc/sysconfig/selinux'. No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "/etc/sysconfig/selinux",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta '/etc/sysconfig/selinux'. No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "/etc/security/selinux.conf",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '/etc/security/selinux.conf', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '/etc/sysconfig/selinux'. No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "/etc/sysconfig/selinux.conf",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '/etc/sysconfig/selinux.conf', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '/etc/sysconfig/selinux'. No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar selinux e configuração de segurança. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora selinux e configuração de segurança por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de selinux e configuração de segurança à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: No CentOS 7, a configuração persistente tradicional do SELinux é definida em /etc/selinux/config; em versões e empacotamentos daquela família, o caminho /etc/sysconfig/selinux pode funcionar como ligação ou caminho compatível apontando para a configuração. A questão original apresenta /etc/sysconfig/selinux como resposta. Os modos são enforcing (política aplicada), permissive (registra violações sem bloquear) e disabled (mecanismo desativado). Em sistemas atuais, confirme a localização e o procedimento da distribuição e versão específicas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0009

```json
{
  "id": "MAT-SO-Q0009",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em relação a uma máquina virtual, a característica que a distingue de um contêiner Linux convencional é que a máquina virtual",
  "alternatives": [
    {
      "id": "A",
      "text": "virtualiza hardware e normalmente executa seu próprio kernel convidado.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'virtualiza hardware e normalmente executa seu próprio kernel convidado.'. Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "compartilha obrigatoriamente o mesmo kernel do hospedeiro.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'compartilha obrigatoriamente o mesmo kernel do hospedeiro.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'virtualiza hardware e normalmente executa seu próprio kernel convidado.'. Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "não pode executar sistemas operacionais diferentes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não pode executar sistemas operacionais diferentes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'virtualiza hardware e normalmente executa seu próprio kernel convidado.'. Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "não possui isolamento de recursos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não possui isolamento de recursos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'virtualiza hardware e normalmente executa seu próprio kernel convidado.'. Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Uma máquina virtual apresenta hardware virtualizado a um sistema convidado, que normalmente inicializa seu próprio kernel. Contêineres isolam processos e recursos usando mecanismos do kernel hospedeiro, como namespaces e cgroups, compartilhando esse kernel. Ambos oferecem isolamento, mas em camadas diferentes.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0010

```json
{
  "id": "MAT-SO-Q0010",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Linux, a interface pela qual um programa solicita ao kernel operações como abrir arquivos e criar processos é denominada",
  "alternatives": [
    {
      "id": "A",
      "text": "montagem automática.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'montagem automática.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alias de shell.'. System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "chamada de sistema (system call).",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chamada de sistema (system call).', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alias de shell.'. System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "variável de ambiente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'variável de ambiente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alias de shell.'. System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "alias de shell.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'alias de shell.'. System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: System calls são a interface controlada entre programas em espaço de usuário e o kernel. Exemplos incluem open, read, write, fork e execve. Bibliotecas podem oferecer funções de nível mais alto que, direta ou indiretamente, acionam chamadas de sistema. Variáveis, aliases e montagem automática não cumprem esse papel.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0011

```json
{
  "id": "MAT-SO-Q0011",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Arquitetura e núcleo",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um sistema operacional multitarefa preemptivo, a possibilidade de interromper a execução de um processo para conceder CPU a outro depende principalmente",
  "alternatives": [
    {
      "id": "A",
      "text": "do sistema de arquivos utilizado.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'do sistema de arquivos utilizado.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do escalonador e de mecanismos de temporização/interrupção.'. Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "do número de ícones na área de trabalho.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'do número de ícones na área de trabalho.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do escalonador e de mecanismos de temporização/interrupção.'. Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "do escalonador e de mecanismos de temporização/interrupção.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'do escalonador e de mecanismos de temporização/interrupção.'. Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "da extensão do nome do executável.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'da extensão do nome do executável.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do escalonador e de mecanismos de temporização/interrupção.'. Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar arquitetura e núcleo. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora arquitetura e núcleo por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de arquitetura e núcleo à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Em sistemas preemptivos, o escalonador decide qual tarefa recebe a CPU e o temporizador permite recuperar o controle após um intervalo. Isso viabiliza compartilhamento do processador e responsividade. Sistema de arquivos e interface gráfica não determinam, por si, a preempção.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0012

```json
{
  "id": "MAT-SO-Q0012",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um técnico precisa listar também arquivos ocultos no diretório atual, inclusive entradas iniciadas por ponto. O comando apropriado é",
  "alternatives": [
    {
      "id": "A",
      "text": "ls -l",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ls -l', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd -a'. O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "pwd -a",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'pwd -a'. O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "cat -a",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'cat -a', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd -a'. O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ls -a",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ls -a', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd -a'. O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O comando ls lista diretórios e arquivos. A opção -a inclui entradas ocultas, normalmente aquelas cujos nomes começam com ponto; -l apresenta formato longo, com permissões, proprietário, grupo, tamanho e data. ls -la combina as duas opções. pwd exibe o diretório atual e cat concatena ou exibe conteúdo de arquivos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0013

```json
{
  "id": "MAT-SO-Q0013",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um terminal Linux, o comando utilizado para exibir o caminho absoluto do diretório de trabalho atual é",
  "alternatives": [
    {
      "id": "A",
      "text": "pwd",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'pwd'. pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "cd",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'cd', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd'. pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "whoami",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'whoami', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd'. pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "which",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'which', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pwd'. pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: pwd significa print working directory e mostra o caminho do diretório corrente. cd altera o diretório; whoami informa o usuário efetivo; which procura a localização de um executável no PATH (com variações entre implementações). Saber distinguir comandos de navegação e identificação evita confusões em questões de terminal.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0014

```json
{
  "id": "MAT-SO-Q0014",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para localizar recursivamente, a partir de /var/log, arquivos cujo nome termine em .log, uma opção adequada é",
  "alternatives": [
    {
      "id": "A",
      "text": "ps -ef /var/log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ps -ef /var/log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod /var/log -name \"*.log\"'. find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "find /var/log -type f -name \"*.log\"",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'find /var/log -type f -name \"*.log\"', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod /var/log -name \"*.log\"'. find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "grep /var/log -type d \"*.log\"",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'grep /var/log -type d \"*.log\"', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod /var/log -name \"*.log\"'. find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "chmod /var/log -name \"*.log\"",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'chmod /var/log -name \"*.log\"'. find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: find percorre uma hierarquia e aplica critérios como tipo (-type f) e nome (-name). O padrão deve ser protegido por aspas para que o shell não o expanda antes do find. grep pesquisa padrões no conteúdo; chmod altera permissões; ps lista processos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0015

```json
{
  "id": "MAT-SO-Q0015",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 16/2018 — Analista de Tecnologia da Informação (cargo 102)",
    "year": 2018,
    "question_number": 23,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Identificação do sistema em CentOS",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Bill é um analista de tecnologia da informação da UFRN que acabou de tomar posse após aprovação em concurso. Ele está fazendo um levantamento sobre as informações dos servidores CentOS da instituição. Nesse levantamento, Bill precisa preencher uma planilha contendo informações sobre static hostname, icon name, chassis, ID da máquina, ID do boot, sistema operacional (com versão), CPE OS Name, Kernel e arquitetura. Para obter essas informações em um servidor CentOS, ele poderá utilizar o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "hostnamectl",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'hostnamectl'. hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "uname",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'uname', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'hostnamectl'. hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "hostname –a",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'hostname –a', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'hostnamectl'. hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "host –l",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'host –l', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'hostnamectl'. hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar identificação do sistema em centos. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora identificação do sistema em centos por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de identificação do sistema em centos à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: hostnamectl, associado ao systemd, consulta e configura o nome do host e apresenta informações do sistema, como hostname estático, nome de ícone, chassis, ID da máquina, ID do boot, sistema operacional e arquitetura, conforme a versão. uname fornece informações do kernel e do sistema, mas não reúne todos os campos solicitados. host é ferramenta de consulta DNS.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0016

```json
{
  "id": "MAT-SO-Q0016",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um administrador deseja pesquisar a palavra “failed” dentro dos arquivos de log de um diretório. O comando mais diretamente apropriado é",
  "alternatives": [
    {
      "id": "A",
      "text": "chmod -R \"failed\" /var/log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod -R \"failed\" /var/log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mount \"failed\" /var/log'. grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "mount \"failed\" /var/log",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'mount \"failed\" /var/log'. grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "killall \"failed\" /var/log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'killall \"failed\" /var/log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mount \"failed\" /var/log'. grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "grep -R \"failed\" /var/log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'grep -R \"failed\" /var/log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mount \"failed\" /var/log'. grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: grep procura padrões no conteúdo de arquivos; -R permite busca recursiva. Em diretórios protegidos, pode ser necessário elevar privilégios. chmod modifica permissões, mount associa sistemas de arquivos à árvore de diretórios e killall envia sinais a processos por nome.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0017

```json
{
  "id": "MAT-SO-Q0017",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para criar a árvore /srv/projetos/2026 mesmo que os diretórios intermediários ainda não existam, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "mkdir -p /srv/projetos/2026",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'mkdir -p /srv/projetos/2026'. mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "touch -p /srv/projetos/2026",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'touch -p /srv/projetos/2026', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mkdir -p /srv/projetos/2026'. mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "rmdir -p /srv/projetos/2026",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'rmdir -p /srv/projetos/2026', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mkdir -p /srv/projetos/2026'. mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "cp -p /srv/projetos/2026",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'cp -p /srv/projetos/2026', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'mkdir -p /srv/projetos/2026'. mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: mkdir cria diretórios. A opção -p cria também diretórios pais ausentes e não gera erro apenas porque eles já existem. touch cria arquivo vazio ou atualiza timestamps; rmdir remove diretórios vazios; cp copia arquivos e diretórios conforme opções.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0018

```json
{
  "id": "MAT-SO-Q0018",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para copiar um diretório chamado dados, incluindo seu conteúdo e subdiretórios, para /backup, deve-se utilizar, em uma forma usual",
  "alternatives": [
    {
      "id": "A",
      "text": "pwd -r dados /backup",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'pwd -r dados /backup', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'rm -r dados /backup'. cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "cp -r dados /backup",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'cp -r dados /backup', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'rm -r dados /backup'. cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "mv -r dados /backup",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'mv -r dados /backup', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'rm -r dados /backup'. cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "rm -r dados /backup",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'rm -r dados /backup'. cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: cp -r copia diretórios recursivamente. A opção -a é frequentemente preferida para cópias de preservação, pois tenta manter atributos e estrutura. mv move ou renomeia; rm remove; pwd informa o diretório atual. A escolha entre cp -r e cp -a depende da necessidade de preservar metadados.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0019

```json
{
  "id": "MAT-SO-Q0019",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um administrador deseja acompanhar continuamente as novas linhas acrescentadas a um arquivo de log. O comando tradicional para essa finalidade é",
  "alternatives": [
    {
      "id": "A",
      "text": "sort -f /var/log/app.log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sort -f /var/log/app.log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tail -f /var/log/app.log'. tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "wc -f /var/log/app.log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'wc -f /var/log/app.log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tail -f /var/log/app.log'. tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "tail -f /var/log/app.log",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'tail -f /var/log/app.log'. tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "head -f /var/log/app.log",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'head -f /var/log/app.log', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tail -f /var/log/app.log'. tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: tail -f acompanha o crescimento de um arquivo e exibe novas linhas à medida que são acrescentadas. É útil para observar logs durante diagnóstico. head exibe o início; sort ordena linhas; wc contabiliza linhas, palavras e bytes. Em ambientes com rotação de logs, tail -F pode ser mais adequado.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0020

```json
{
  "id": "MAT-SO-Q0020",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para mostrar os processos em execução com informações como PID, terminal e comando, um comando amplamente utilizado é",
  "alternatives": [
    {
      "id": "A",
      "text": "chmod aux",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod aux', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'df aux'. ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "df aux",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'df aux'. ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "du aux",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'du aux', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'df aux'. ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ps aux",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ps aux', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'df aux'. ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: ps apresenta uma fotografia dos processos. A forma ps aux é comum em sistemas Linux e mostra processos de todos os usuários com detalhes de uso de CPU e memória. top e htop oferecem visualização interativa. chmod trata permissões; df mostra espaço em sistemas de arquivos; du estima uso por arquivos e diretórios.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0021

```json
{
  "id": "MAT-SO-Q0021",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No shell, a expressão `comando1 | comando2` indica que",
  "alternatives": [
    {
      "id": "A",
      "text": "a saída padrão de comando1 é encaminhada à entrada padrão de comando2.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'a saída padrão de comando1 é encaminhada à entrada padrão de comando2.'. O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "comando1 será executado somente se comando2 falhar.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'comando1 será executado somente se comando2 falhar.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída padrão de comando1 é encaminhada à entrada padrão de comando2.'. O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "os dois comandos serão executados em máquinas diferentes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'os dois comandos serão executados em máquinas diferentes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída padrão de comando1 é encaminhada à entrada padrão de comando2.'. O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "a saída de ambos será gravada automaticamente em um arquivo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a saída de ambos será gravada automaticamente em um arquivo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída padrão de comando1 é encaminhada à entrada padrão de comando2.'. O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O pipe (|) conecta a saída padrão de um processo à entrada padrão do próximo. É comum combinar ferramentas pequenas, por exemplo ps aux | grep ssh. O operador && executa o segundo comando se o primeiro terminar com sucesso; > redireciona saída para arquivo; & executa em segundo plano.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0022

```json
{
  "id": "MAT-SO-Q0022",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 22,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Instalação do Ubuntu e dual boot",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Para responder à questão, considere o texto abaixo.\n\nCriado pela empresa sul-africana Canonical, o Ubuntu é uma distribuição popular do Sistema Operacional (SO) Linux. Por ser gratuita, seu uso no ambiente do serviço público economiza custos com licenças de softwares comerciais, como o sistema operacional Windows e o pacote MS Office. Com essa premissa em mente, um Coordenador de Desenvolvimento de Softwares tomou a decisão de estruturar uma nova sala para formar uma nova equipe de desenvolvimento de software com os técnicos em TI nomeados no último concurso.\n\nPara a nova sala, o Coordenador solicitou a um técnico em TI que instalasse um servidor e oito novas estações de trabalho com o Linux Ubuntu instalado. Porém, devido ao aumento no número de casos de COVID-19, o Coordenador determinou que, após montar os computadores e colocá-los acessíveis pela Internet, o técnico em TI poderia concluir a configuração dos softwares necessários, remotamente, a partir de casa. Orientou o técnico em TI para instalar o SGBD PostgreSQL no servidor. Ademais, pediu que se certificasse de que todas estações de trabalho tinham um conjunto de programas instalados, os quais incluem a suite LibreOffice, além do suporte para as linguagens de programação Python e Java. Também orientou que, quando solicitado pelo instalador do Ubuntu Linux, no processo de instalação, colocasse, como logins de usuários, “admin” para servidor e “desenvolvedor” para estações de trabalho.\n\nCom base no texto, analise as afirmativas a seguir.\n\nI    A instalação do Ubuntu Linux pode ser realizada a partir de um disco de DVD ou de um pen drive.\nII — Antes de instalar o Ubuntu Linux, é obrigatório se cadastrar no site da Canonical para obter uma licença de uso gratuito.\nIII — Caso a máquina onde será instalado o Ubuntu Linux já tenha o Windows 10 instalado, será necessário removê-lo, uma vez que não é possível ter os dois sistemas operacionais instalados na mesma máquina.\nIV — Durante a instalação do Ubuntu Linux, o usuário tem a opção de baixar e instalar atualizações do sistema.\n\nEstão corretas as afirmativas",
  "alternatives": [
    {
      "id": "A",
      "text": "I e IV.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'I e IV.'. O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "I e II.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'I e II.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'I e IV.'. O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "II e III.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'II e III.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'I e IV.'. O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "III e IV.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'III e IV.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'I e IV.'. O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar instalação do ubuntu e dual boot. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora instalação do ubuntu e dual boot por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de instalação do ubuntu e dual boot à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O instalador do Ubuntu pode ser iniciado por mídia USB ou DVD, e oferece opções de atualização durante a instalação, conforme versão e conectividade. Não é obrigatório cadastro para obter licença de uso gratuito. Também é possível configurar dual boot com Windows, desde que haja espaço e configuração compatíveis. A alternativa correta reúne I e IV.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0023

```json
{
  "id": "MAT-SO-Q0023",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Shell e comandos Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um script Bash, a linha inicial `#!/bin/bash` é utilizada para",
  "alternatives": [
    {
      "id": "A",
      "text": "definir o diretório de trabalho permanente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'definir o diretório de trabalho permanente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'indicar o interpretador que deverá executar o script quando ele for chamado como executável.'. A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "criptografar o conteúdo do script.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criptografar o conteúdo do script.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'indicar o interpretador que deverá executar o script quando ele for chamado como executável.'. A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "indicar o interpretador que deverá executar o script quando ele for chamado como executável.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'indicar o interpretador que deverá executar o script quando ele for chamado como executável.'. A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "conceder automaticamente privilégios de root.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'conceder automaticamente privilégios de root.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'indicar o interpretador que deverá executar o script quando ele for chamado como executável.'. A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar shell e comandos linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora shell e comandos linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de shell e comandos linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: A linha shebang identifica o interpretador a ser utilizado pelo sistema ao executar o arquivo diretamente. Ela não concede privilégios, não define diretório e não cifra o conteúdo. Para execução direta, o arquivo também precisa ter permissão de execução e um caminho válido para o interpretador.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0024

```json
{
  "id": "MAT-SO-Q0024",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No modelo tradicional de permissões Unix, a notação `rwxr-x---` concede",
  "alternatives": [
    {
      "id": "A",
      "text": "leitura e escrita a todos os usuários.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'leitura e escrita a todos os usuários.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'execução somente ao proprietário e escrita aos demais.'. As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "execução somente ao proprietário e escrita aos demais.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'execução somente ao proprietário e escrita aos demais.'. As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "acesso integral ao proprietário e ao grupo, sem acesso aos demais.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'acesso integral ao proprietário e ao grupo, sem acesso aos demais.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'execução somente ao proprietário e escrita aos demais.'. As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "leitura, escrita e execução ao proprietário; leitura e execução ao grupo; nenhum acesso aos demais.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'leitura, escrita e execução ao proprietário; leitura e execução ao grupo; nenhum acesso aos demais.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'execução somente ao proprietário e escrita aos demais.'. As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: As permissões são agrupadas em proprietário, grupo e outros. Em rwx r-x --- , o proprietário tem leitura, escrita e execução; o grupo tem leitura e execução; outros não têm permissões. Cada trio pode ser convertido em octal: rwx=7, r-x=5 e ---=0, resultando em 750.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0025

```json
{
  "id": "MAT-SO-Q0025",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para atribuir ao proprietário leitura e escrita, ao grupo apenas leitura e aos demais nenhum acesso a um arquivo, o modo octal correspondente é",
  "alternatives": [
    {
      "id": "A",
      "text": "640",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta '640'. A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "755",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '755', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '640'. A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "700",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '700', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '640'. A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "664",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta '664', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é '640'. A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: A representação octal soma r=4, w=2 e x=1 em cada classe. Proprietário rw-=6; grupo r--=4; outros ---=0. Portanto, chmod 640 arquivo implementa esse conjunto. 755 concede execução a todos; 700 restringe tudo ao proprietário; 664 concede leitura e escrita ao grupo e a outros.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0026

```json
{
  "id": "MAT-SO-Q0026",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Um administrador deseja adicionar permissão de execução ao proprietário de um script sem alterar as demais permissões. O comando simbólico adequado é",
  "alternatives": [
    {
      "id": "A",
      "text": "chgrp u+x script.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chgrp u+x script.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chown u+x script.sh'. chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "chmod u+x script.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod u+x script.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chown u+x script.sh'. chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "chmod o-r script.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod o-r script.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chown u+x script.sh'. chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "chown u+x script.sh",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'chown u+x script.sh'. chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: chmod altera bits de permissão. Em modo simbólico, u representa proprietário, g grupo, o outros e a todos; +x adiciona execução. chown altera proprietário (e opcionalmente grupo), enquanto chgrp altera o grupo associado. O comando u+x não remove permissões existentes.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0027

```json
{
  "id": "MAT-SO-Q0027",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um sistema Linux multiusuário, o comando destinado a criar uma conta de usuário local, em distribuições que o disponibilizam, é",
  "alternatives": [
    {
      "id": "A",
      "text": "chmod",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'useradd'. useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "mount",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'mount', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'useradd'. useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "useradd",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'useradd'. useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "passwd -d",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'passwd -d', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'useradd'. useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: useradd cria contas locais e aceita opções para diretório pessoal, shell, UID e grupos. A criação pode exigir privilégios administrativos. passwd gerencia senhas; chmod altera permissões de arquivos; mount monta sistemas de arquivos. Algumas distribuições oferecem adduser como interface mais amigável.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0028

```json
{
  "id": "MAT-SO-Q0028",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para alterar a senha da conta do usuário atual em Linux, o comando tradicional é",
  "alternatives": [
    {
      "id": "A",
      "text": "usermod -l",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'usermod -l', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chgrp'. passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "chgrp",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'chgrp'. passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "su -c",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'su -c', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chgrp'. passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "passwd",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'passwd', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chgrp'. passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: passwd permite alterar a senha do próprio usuário e, com privilégios administrativos, gerenciar a senha de outras contas. usermod altera atributos de contas, chgrp altera grupo de arquivos e su troca a identidade de usuário para executar comandos ou iniciar sessão.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0029

```json
{
  "id": "MAT-SO-Q0029",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 23,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Acesso remoto seguro com SSH",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Concluída a instalação do Ubuntu em todas as máquinas, o técnico da TI, para realizar o login e executar os comandos remotamente, de forma segura e com criptografia, deve configurar o protocolo",
  "alternatives": [
    {
      "id": "A",
      "text": "SSH.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'SSH.'. SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "TELNET.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'TELNET.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'SSH.'. SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "SMTP.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'SMTP.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'SSH.'. SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "FTP.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'FTP.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'SSH.'. SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar acesso remoto seguro com ssh. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora acesso remoto seguro com ssh por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de acesso remoto seguro com ssh à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: SSH fornece acesso remoto e execução de comandos com criptografia e autenticação. Telnet é um protocolo de terminal remoto sem criptografia por padrão, expondo credenciais e conteúdo. SMTP é usado para transporte de correio eletrônico e FTP para transferência de arquivos, também sem proteção criptográfica nativa em sua forma tradicional.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0030

```json
{
  "id": "MAT-SO-Q0030",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O mecanismo `sudo` é utilizado principalmente para",
  "alternatives": [
    {
      "id": "A",
      "text": "iniciar serviços de rede sem autenticação ou política de acesso.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'iniciar serviços de rede sem autenticação ou política de acesso.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir o kernel por uma versão mais recente.'. sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "executar comandos com privilégios de outro usuário, frequentemente root, conforme política autorizada.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'executar comandos com privilégios de outro usuário, frequentemente root, conforme política autorizada.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir o kernel por uma versão mais recente.'. sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "criptografar automaticamente todos os arquivos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criptografar automaticamente todos os arquivos do usuário.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir o kernel por uma versão mais recente.'. sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "substituir o kernel por uma versão mais recente.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'substituir o kernel por uma versão mais recente.'. sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: sudo permite executar comandos com identidade e privilégios de outro usuário, normalmente root, de acordo com regras configuradas em sudoers. Pode registrar operações e aplicar controle granular. Não é sinônimo de login root permanente e não concede acesso irrestrito a qualquer usuário sem autorização.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0031

```json
{
  "id": "MAT-SO-Q0031",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas Unix, o bit sticky aplicado a um diretório compartilhado, como /tmp, tem como finalidade típica",
  "alternatives": [
    {
      "id": "A",
      "text": "impedir a leitura de todos os arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'impedir a leitura de todos os arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'restringir a remoção ou renomeação de arquivos aos respectivos proprietários, ao dono do diretório ou a root.'. O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "conceder execução automática a scripts.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'conceder execução automática a scripts.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'restringir a remoção ou renomeação de arquivos aos respectivos proprietários, ao dono do diretório ou a root.'. O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "restringir a remoção ou renomeação de arquivos aos respectivos proprietários, ao dono do diretório ou a root.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'restringir a remoção ou renomeação de arquivos aos respectivos proprietários, ao dono do diretório ou a root.'. O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "permitir que qualquer usuário altere o proprietário dos arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'permitir que qualquer usuário altere o proprietário dos arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'restringir a remoção ou renomeação de arquivos aos respectivos proprietários, ao dono do diretório ou a root.'. O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O sticky bit em diretórios compartilhados limita quem pode remover ou renomear entradas: normalmente o proprietário do arquivo, o proprietário do diretório ou root. É usado em diretórios como /tmp, onde vários usuários podem criar arquivos. Não deve ser confundido com setuid ou setgid.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0032

```json
{
  "id": "MAT-SO-Q0032",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O bit setgid aplicado a um diretório Linux é frequentemente utilizado para",
  "alternatives": [
    {
      "id": "A",
      "text": "executar todo arquivo como root.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'executar todo arquivo como root.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de arquivos.'. Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "impedir a criação de arquivos.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'impedir a criação de arquivos.'. Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "tornar o diretório invisível para usuários comuns.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'tornar o diretório invisível para usuários comuns.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de arquivos.'. Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "fazer com que novos arquivos e subdiretórios herdem o grupo do diretório.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'fazer com que novos arquivos e subdiretórios herdem o grupo do diretório.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de arquivos.'. Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Em diretórios, setgid faz com que novos itens herdem o grupo do diretório pai, facilitando colaboração em diretórios compartilhados. Em arquivos executáveis, setgid tem outro efeito: executar com o grupo efetivo do arquivo, sujeito a suporte e políticas do sistema. Setuid e sticky possuem finalidades distintas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0033

```json
{
  "id": "MAT-SO-Q0033",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para verificar os grupos aos quais a conta atual pertence, um comando apropriado é",
  "alternatives": [
    {
      "id": "A",
      "text": "groups",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'groups'. groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "df -h",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'df -h', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'groups'. groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "uname -r",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'uname -r', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'groups'. groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "mount -a",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'mount -a', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'groups'. groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: groups mostra os grupos associados ao usuário. id apresenta UID, GID e grupos suplementares de forma detalhada. df mostra espaço em sistemas de arquivos; uname informa dados do sistema/kernel; mount -a tenta montar sistemas de arquivos definidos na configuração.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0034

```json
{
  "id": "MAT-SO-Q0034",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Usuários e permissões Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O controle de acesso obrigatório (MAC) do SELinux diferencia-se das permissões tradicionais Unix porque",
  "alternatives": [
    {
      "id": "A",
      "text": "permite que qualquer processo acesse qualquer arquivo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'permite que qualquer processo acesse qualquer arquivo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remove a necessidade de usuários e grupos.'. O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "aplica políticas e rótulos de segurança adicionais, que podem restringir acessos mesmo quando as permissões discricionárias permitem a operação.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'aplica políticas e rótulos de segurança adicionais, que podem restringir acessos mesmo quando as permissões discricionárias permitem a operação.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remove a necessidade de usuários e grupos.'. O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "substitui o sistema de arquivos por um banco de dados.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'substitui o sistema de arquivos por um banco de dados.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'remove a necessidade de usuários e grupos.'. O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "remove a necessidade de usuários e grupos.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'remove a necessidade de usuários e grupos.'. O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar usuários e permissões linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora usuários e permissões linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de usuários e permissões linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O SELinux implementa controle de acesso obrigatório por meio de políticas e contextos (rótulos). O acesso precisa ser permitido tanto pelas permissões tradicionais quanto pela política MAC. Assim, permissões Unix aparentemente abertas não garantem acesso se a política SELinux o negar. É uma camada adicional de defesa.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0035

```json
{
  "id": "MAT-SO-Q0035",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Linux, a árvore de diretórios começa em uma única raiz, representada por `/`. Para disponibilizar uma partição em `/dados`, o administrador deve",
  "alternatives": [
    {
      "id": "A",
      "text": "converter a partição em processo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'converter a partição em processo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'montar o sistema de arquivos nesse ponto de montagem.'. Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "criar um usuário chamado dados.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criar um usuário chamado dados.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'montar o sistema de arquivos nesse ponto de montagem.'. Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "montar o sistema de arquivos nesse ponto de montagem.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'montar o sistema de arquivos nesse ponto de montagem.'. Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "atribuir uma letra de unidade obrigatoriamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'atribuir uma letra de unidade obrigatoriamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'montar o sistema de arquivos nesse ponto de montagem.'. Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Unix e Linux organizam arquivos em uma árvore hierárquica única. Um sistema de arquivos de outra partição ou dispositivo é incorporado à árvore por meio de montagem em um diretório vazio ou apropriado, chamado ponto de montagem. Diferentemente do modelo típico de letras de unidade do Windows, não há uma letra obrigatória para cada volume.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0036

```json
{
  "id": "MAT-SO-Q0036",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 24,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Instalação de pacotes no Ubuntu",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Conforme orientado, para instalar o SGBD PostgreSQL, o técnico em TI deve logar no servidor como usuário admin e executar o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo apt install postgresql",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo apt install postgresql'. Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "sudo service postgresql install",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo service postgresql install', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install postgresql'. Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "sudo install service postgresql",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo install service postgresql', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install postgresql'. Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "sudo get postgresql install",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo get postgresql install', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install postgresql'. Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar instalação de pacotes no ubuntu. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora instalação de pacotes no ubuntu por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de instalação de pacotes no ubuntu à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Em Ubuntu, o gerenciador de pacotes APT instala software dos repositórios configurados. apt install postgresql solicita a instalação do pacote e resolve dependências; sudo eleva privilégios conforme a política autorizada. service administra serviços já instalados, não é o instalador de pacotes. O nome do pacote pode variar por versão e repositório.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0037

```json
{
  "id": "MAT-SO-Q0037",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O arquivo `/etc/fstab` é utilizado em distribuições Linux principalmente para",
  "alternatives": [
    {
      "id": "A",
      "text": "declarar sistemas de arquivos e opções de montagem, inclusive montagens persistentes.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'declarar sistemas de arquivos e opções de montagem, inclusive montagens persistentes.'. O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "armazenar senhas em texto claro de todos os usuários.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'armazenar senhas em texto claro de todos os usuários.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'declarar sistemas de arquivos e opções de montagem, inclusive montagens persistentes.'. O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "registrar exclusivamente mensagens do kernel.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'registrar exclusivamente mensagens do kernel.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'declarar sistemas de arquivos e opções de montagem, inclusive montagens persistentes.'. O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "definir regras de firewall do sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'definir regras de firewall do sistema.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'declarar sistemas de arquivos e opções de montagem, inclusive montagens persistentes.'. O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O fstab contém configurações de sistemas de arquivos: dispositivo ou UUID, ponto de montagem, tipo, opções, frequência de dump e ordem de verificação. É usado para montagens no boot e por ferramentas como mount -a. Senhas ficam em arquivos protegidos como /etc/shadow; logs e firewall têm outros mecanismos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0038

```json
{
  "id": "MAT-SO-Q0038",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A principal característica do journaling presente em sistemas de arquivos como ext4 é",
  "alternatives": [
    {
      "id": "A",
      "text": "criptografar obrigatoriamente todo o conteúdo do volume.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criptografar obrigatoriamente todo o conteúdo do volume.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de diretórios.'. Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "registrar operações ou metadados em um diário para facilitar a recuperação da consistência após falhas.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'registrar operações ou metadados em um diário para facilitar a recuperação da consistência após falhas.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de diretórios.'. Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "armazenar cada arquivo exclusivamente na memória RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'armazenar cada arquivo exclusivamente na memória RAM.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'impedir a criação de diretórios.'. Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "impedir a criação de diretórios.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'impedir a criação de diretórios.'. Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Journaling registra mudanças planejadas, especialmente metadados, em um diário antes de efetivá-las no local definitivo. Após queda de energia, o sistema pode reproduzir ou descartar operações incompletas, reduzindo o tempo de verificação e o risco de inconsistência. Journaling não equivale a backup nem implica criptografia automática.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0039

```json
{
  "id": "MAT-SO-Q0039",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um volume NTFS, utilizado amplamente pelo Windows, as permissões de acesso a arquivos e diretórios são normalmente expressas por meio de",
  "alternatives": [
    {
      "id": "A",
      "text": "rótulos SELinux obrigatórios.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'rótulos SELinux obrigatórios.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'listas de controle de acesso (ACLs).'. NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "atributos de montagem definidos apenas no /etc/fstab.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'atributos de montagem definidos apenas no /etc/fstab.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'listas de controle de acesso (ACLs).'. NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "listas de controle de acesso (ACLs).",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'listas de controle de acesso (ACLs).'. NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "bits de execução do shell Bash exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'bits de execução do shell Bash exclusivamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'listas de controle de acesso (ACLs).'. NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: NTFS oferece recursos como ACLs, journaling, compressão e suporte a arquivos grandes. As permissões NTFS podem ser definidas para usuários e grupos, com direitos como leitura, gravação e modificação. ACLs também existem em outros sistemas; não se deve confundir o modelo NTFS com os bits básicos rwx do Unix.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0040

```json
{
  "id": "MAT-SO-Q0040",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para identificar o espaço disponível e utilizado nos sistemas de arquivos montados em formato legível, o administrador Linux pode executar",
  "alternatives": [
    {
      "id": "A",
      "text": "du -sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'du -sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'free -h'. df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "free -h",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'free -h'. df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "lsblk -f",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'lsblk -f', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'free -h'. df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "df -h",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'df -h', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'free -h'. df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: df informa uso e disponibilidade por sistema de arquivos montado; -h apresenta unidades legíveis. du estima o espaço ocupado por arquivos e diretórios específicos. free exibe memória; lsblk lista dispositivos de bloco e pode mostrar sistemas de arquivos e pontos de montagem.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0041

```json
{
  "id": "MAT-SO-Q0041",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O comando `du -sh /var/log` permite",
  "alternatives": [
    {
      "id": "A",
      "text": "estimar o espaço total ocupado pelo diretório /var/log em formato resumido e legível.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'estimar o espaço total ocupado pelo diretório /var/log em formato resumido e legível.'. du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "mostrar o espaço livre de todos os volumes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'mostrar o espaço livre de todos os volumes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'estimar o espaço total ocupado pelo diretório /var/log em formato resumido e legível.'. du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "exibir apenas os processos que escrevem em logs.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'exibir apenas os processos que escrevem em logs.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'estimar o espaço total ocupado pelo diretório /var/log em formato resumido e legível.'. du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "alterar a capacidade física do disco.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar a capacidade física do disco.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'estimar o espaço total ocupado pelo diretório /var/log em formato resumido e legível.'. du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: du (disk usage) estima o espaço ocupado por arquivos e diretórios. -s produz um resumo do argumento informado e -h usa unidades legíveis. df é o comando para visão da utilização por sistema de arquivos. A estimativa pode variar conforme arquivos esparsos, hard links e permissões.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0042

```json
{
  "id": "MAT-SO-Q0042",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, a ferramenta Gerenciamento de Disco permite, entre outras operações",
  "alternatives": [
    {
      "id": "A",
      "text": "substituir o firmware UEFI.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'substituir o firmware UEFI.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alterar políticas SELinux.'. O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "criar, excluir e formatar volumes e administrar partições, respeitadas as limitações do sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criar, excluir e formatar volumes e administrar partições, respeitadas as limitações do sistema.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alterar políticas SELinux.'. O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "editar diretamente o código-fonte do kernel Linux.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'editar diretamente o código-fonte do kernel Linux.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'alterar políticas SELinux.'. O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "alterar políticas SELinux.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'alterar políticas SELinux.'. O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O Gerenciamento de Disco do Windows permite administrar discos básicos e dinâmicos conforme a edição, inicializar discos, criar e formatar volumes, atribuir letras e reduzir ou estender partições em condições específicas. Operações de particionamento podem causar perda de dados, exigindo backup e cautela.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0043

```json
{
  "id": "MAT-SO-Q0043",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 25,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Permissões de execução em scripts",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Como repetiria a mesma série de comandos em todas estações de trabalho, o técnico em TI resolveu criar um arquivo script, com o nome de instalar_programas.sh, a fim de agilizar o trabalho. Para executar o script no shell do Linux, o técnico em TI deve atribuir a permissão de execução ao arquivo utilizando o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "chmod +x instalar_programas.sh",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'chmod +x instalar_programas.sh'. chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "chown +x instalar_programas.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chown +x instalar_programas.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod +x instalar_programas.sh'. chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "chdir +x instalar_programas.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chdir +x instalar_programas.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod +x instalar_programas.sh'. chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "chatt +x instalar_programas.sh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chatt +x instalar_programas.sh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chmod +x instalar_programas.sh'. chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar permissões de execução em scripts. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora permissões de execução em scripts por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de permissões de execução em scripts à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: chmod altera permissões de arquivos. A opção +x adiciona o bit de execução às classes afetadas pela forma abreviada, respeitando a umask e o contexto. chown altera proprietário; chdir é uma chamada/função relacionada à mudança de diretório, não comando para permissões; chatt não é o comando indicado. Também é necessário que o script tenha um interpretador válido, por exemplo por shebang.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0044

```json
{
  "id": "MAT-SO-Q0044",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistemas de arquivos e montagem",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Ao escolher entre FAT32 e NTFS para um volume de dados do Windows, uma limitação conhecida do FAT32 é",
  "alternatives": [
    {
      "id": "A",
      "text": "não permitir diretórios.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não permitir diretórios.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exigir obrigatoriamente Linux para leitura.'. FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "exigir obrigatoriamente Linux para leitura.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'exigir obrigatoriamente Linux para leitura.'. FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "não permitir formatação em unidades removíveis.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não permitir formatação em unidades removíveis.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exigir obrigatoriamente Linux para leitura.'. FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "não suportar arquivos individuais maiores que 4 GiB menos 1 byte.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não suportar arquivos individuais maiores que 4 GiB menos 1 byte.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exigir obrigatoriamente Linux para leitura.'. FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar sistemas de arquivos e montagem. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistemas de arquivos e montagem por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistemas de arquivos e montagem à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: FAT32 é amplamente compatível, mas limita o tamanho de um arquivo individual a 4 GiB menos 1 byte. NTFS oferece recursos mais avançados, incluindo ACLs e journaling. A escolha depende de compatibilidade, tamanho dos arquivos, permissões e uso pretendido; exFAT é alternativa comum para mídias removíveis.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0045

```json
{
  "id": "MAT-SO-Q0045",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Linux, o comando `kill 2450`, sem especificação de sinal, solicita normalmente",
  "alternatives": [
    {
      "id": "A",
      "text": "o envio do sinal SIGTERM ao processo de PID 2450.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'o envio do sinal SIGTERM ao processo de PID 2450.'. kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "a remoção do arquivo executável do processo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a remoção do arquivo executável do processo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o envio do sinal SIGTERM ao processo de PID 2450.'. kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "a reinicialização obrigatória do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a reinicialização obrigatória do computador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o envio do sinal SIGTERM ao processo de PID 2450.'. kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "a alteração do proprietário do processo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a alteração do proprietário do processo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o envio do sinal SIGTERM ao processo de PID 2450.'. kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: kill envia um sinal a um processo identificado por PID. Sem sinal explícito, normalmente envia SIGTERM (15), que solicita encerramento e permite tratamento pelo processo. SIGKILL (9) força encerramento e não pode ser capturado. O comando não apaga executáveis nem reinicia a máquina.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0046

```json
{
  "id": "MAT-SO-Q0046",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para solicitar o encerramento forçado de um processo identificado pelo PID 2450, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "renice -9 2450",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'renice -9 2450', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ps -9 2450'. kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "kill -9 2450",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'kill -9 2450', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ps -9 2450'. kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "nice -9 2450",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'nice -9 2450', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ps -9 2450'. kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ps -9 2450",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'ps -9 2450'. kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: kill -9 envia SIGKILL, sinal que não pode ser interceptado ou ignorado pelo processo. Deve ser usado como último recurso, pois não permite limpeza controlada de recursos. SIGTERM é preferível inicialmente. nice e renice ajustam prioridade de escalonamento; ps apenas lista processos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0047

```json
{
  "id": "MAT-SO-Q0047",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas que utilizam systemd, o comando para verificar o estado da unidade de serviço ssh é",
  "alternatives": [
    {
      "id": "A",
      "text": "chmod status ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod status ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl status ssh'. systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "journalctl enable ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'journalctl enable ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl status ssh'. systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "systemctl status ssh",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'systemctl status ssh'. systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "apt status ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'apt status ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl status ssh'. systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: systemctl administra unidades do systemd. status apresenta estado, informações recentes e, conforme a configuração, logs. start inicia, stop interrompe, restart reinicia, enable habilita inicialização automática e disable a desabilita. O nome da unidade pode variar por distribuição, por exemplo ssh ou sshd.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0048

```json
{
  "id": "MAT-SO-Q0048",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em um sistema com systemd, para configurar um serviço chamado nginx para iniciar automaticamente durante a inicialização, sem necessariamente iniciá-lo imediatamente, deve-se executar",
  "alternatives": [
    {
      "id": "A",
      "text": "systemctl status nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'systemctl status nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl disable nginx'. systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "systemctl disable nginx",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'systemctl disable nginx'. systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "systemctl mask nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'systemctl mask nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl disable nginx'. systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "systemctl enable nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'systemctl enable nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'systemctl disable nginx'. systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: systemctl enable cria os vínculos necessários para iniciar a unidade em alvos de boot. Isso não significa necessariamente iniciar o serviço naquele instante; para iniciar agora, usa-se start, e enable --now combina as duas ações. disable remove habilitação; mask impede início manual ou automático em condições normais.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0049

```json
{
  "id": "MAT-SO-Q0049",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em distribuições Linux com systemd, a consulta de registros do serviço ssh por meio do journal pode ser realizada com",
  "alternatives": [
    {
      "id": "A",
      "text": "journalctl -u ssh",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'journalctl -u ssh'. journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "chmod -u ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'chmod -u ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'journalctl -u ssh'. journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "fdisk -u ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'fdisk -u ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'journalctl -u ssh'. journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "passwd -u ssh",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'passwd -u ssh', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'journalctl -u ssh'. journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: journalctl consulta o journal do systemd. A opção -u filtra por unidade, permitindo examinar eventos de um serviço. Os registros também podem ser filtrados por boot, prioridade e intervalo de tempo. chmod altera permissões, fdisk administra tabelas de partição e passwd gerencia senhas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0050

```json
{
  "id": "MAT-SO-Q0050",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 26,
    "page": 9
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Desligamento via terminal Linux",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Após concluída a configuração remota, o técnico em TI, para desligar a estação de trabalho via linha de comando, executa o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo shutdown -h now",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo shutdown -h now'. shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "sudo shutdown -c now",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo shutdown -c now', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo shutdown -h now'. shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "sudo poweroff -k now",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo poweroff -k now', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo shutdown -h now'. shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "sudo poweroff -r now",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo poweroff -r now', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo shutdown -h now'. shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar desligamento via terminal linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora desligamento via terminal linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de desligamento via terminal linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: shutdown -h now solicita o desligamento imediato do sistema (halt/poweroff conforme plataforma e implementação). -c cancela um desligamento agendado. A opção -r solicita reinicialização; -k, quando suportada, envia apenas aviso e não realiza o desligamento. A execução pode exigir privilégios administrativos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0051

```json
{
  "id": "MAT-SO-Q0051",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O comando `nice` está relacionado à",
  "alternatives": [
    {
      "id": "A",
      "text": "criação de usuários.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criação de usuários.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'definição do valor de nice usado como parâmetro de prioridade relativa de escalonamento de processos.'. O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "configuração de endereços IP.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'configuração de endereços IP.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'definição do valor de nice usado como parâmetro de prioridade relativa de escalonamento de processos.'. O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "definição do valor de nice usado como parâmetro de prioridade relativa de escalonamento de processos.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'definição do valor de nice usado como parâmetro de prioridade relativa de escalonamento de processos.'. O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "montagem de sistemas de arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'montagem de sistemas de arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'definição do valor de nice usado como parâmetro de prioridade relativa de escalonamento de processos.'. O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O valor nice influencia a prioridade relativa de processos em relação ao escalonador. Em Linux, valores mais baixos (inclusive negativos) indicam maior prioridade relativa, enquanto valores mais altos indicam menor prioridade. nice inicia um comando com determinado valor; renice altera o valor de processos existentes. A prioridade efetiva também depende do escalonador e de outras políticas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0052

```json
{
  "id": "MAT-SO-Q0052",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para observar interativamente processos, consumo de CPU e memória em Linux, uma ferramenta tradicional é",
  "alternatives": [
    {
      "id": "A",
      "text": "touch",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'touch', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tar'. top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "tar",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'tar'. top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "tee",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'tee', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tar'. top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "top",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'top', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'tar'. top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: top atualiza continuamente uma lista de processos e métricas de utilização do sistema. htop oferece interface interativa mais amigável quando instalado. touch atualiza timestamps ou cria arquivos; tar arquiva arquivos; tee duplica a entrada para saída e arquivo.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0053

```json
{
  "id": "MAT-SO-Q0053",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Processos e serviços Linux",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma distribuição Linux, a diferença entre `systemctl stop serviço` e `systemctl disable serviço` é que",
  "alternatives": [
    {
      "id": "A",
      "text": "stop interrompe a unidade em execução; disable remove sua habilitação para inicialização automática.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'stop interrompe a unidade em execução; disable remove sua habilitação para inicialização automática.'. stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "stop desinstala o pacote; disable apaga os logs.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'stop desinstala o pacote; disable apaga os logs.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'stop interrompe a unidade em execução; disable remove sua habilitação para inicialização automática.'. stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "stop altera o usuário; disable altera o sistema de arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'stop altera o usuário; disable altera o sistema de arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'stop interrompe a unidade em execução; disable remove sua habilitação para inicialização automática.'. stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ambos executam necessariamente a mesma operação.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ambos executam necessariamente a mesma operação.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'stop interrompe a unidade em execução; disable remove sua habilitação para inicialização automática.'. stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar processos e serviços linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora processos e serviços linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de processos e serviços linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: stop atua no estado corrente e solicita que a unidade pare. disable altera os vínculos de inicialização automática, sem necessariamente interromper uma instância que já esteja ativa. Para parar e desabilitar, podem ser usadas as duas ações ou combinações adequadas, como disable --now em versões compatíveis.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0054

```json
{
  "id": "MAT-SO-Q0054",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas baseados em Debian, como Ubuntu, a ferramenta de baixo nível associada ao formato de pacotes .deb é",
  "alternatives": [
    {
      "id": "A",
      "text": "winget.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'winget.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "dpkg.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dpkg.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "rpm.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'rpm.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "pacman.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'pacman.'. dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: dpkg instala, consulta e remove pacotes .deb, mas não resolve automaticamente todas as dependências de repositórios. APT é a camada de gerenciamento de alto nível que consulta repositórios e resolve dependências. rpm é associado ao ecossistema RPM; pacman ao Arch Linux; winget ao Windows.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0055

```json
{
  "id": "MAT-SO-Q0055",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Ubuntu, para atualizar a lista local de índices dos repositórios antes de instalar pacotes, utiliza-se",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo apt remove",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo apt remove', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt update'. apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "sudo dpkg --configure",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo dpkg --configure', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt update'. apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "sudo apt update",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo apt update'. apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "sudo apt upgrade",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo apt upgrade', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt update'. apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: apt update atualiza os índices locais de pacotes disponíveis nos repositórios configurados. apt upgrade instala versões mais recentes dos pacotes já instalados, respeitando as regras de atualização. update não atualiza por si só todos os programas; é comum executar apt update antes de upgrade ou install.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0056

```json
{
  "id": "MAT-SO-Q0056",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma distribuição baseada em Debian, o comando usual para instalar o pacote nginx e resolver dependências é",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo rpm -e nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo rpm -e nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo pacman -R nginx'. apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "sudo pacman -R nginx",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo pacman -R nginx'. apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "sudo winget remove nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo winget remove nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo pacman -R nginx'. apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "sudo apt install nginx",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo apt install nginx', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo pacman -R nginx'. apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: apt install instala pacotes a partir dos repositórios configurados e resolve dependências. rpm -e remove um pacote RPM; pacman -R remove pacotes no Arch; winget é o gerenciador de pacotes do Windows. O comando exato depende da distribuição e de seus repositórios.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0057

```json
{
  "id": "MAT-SO-Q0057",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 11/2021 — Técnico em Tecnologia da Informação",
    "year": 2021,
    "question_number": 46,
    "page": 17
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Características do Windows 10",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "O sistema operacional Windows 10 foi lançado, oficialmente, em 2015, em substituição ao Windows 8.1. Sobre o Windows 10, analise as afirmativas a seguir.\n\nI — O Windows 10 foi lançado, somente, na versão 64 bits.\nII — O Microsoft Edge tornou-se o navegador web padrão no Windows 10.\nIII — A interface com o usuário, no Windows 10, trouxe de volta o “menu iniciar”.\nIV — É necessário, no mínimo, 4GB de memória RAM para executar o Windows 10.\n\nEstão corretas as afirmativas",
  "alternatives": [
    {
      "id": "A",
      "text": "II e III.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'II e III.'. A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "I e II.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'I e II.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'II e III.'. A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "III e IV.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'III e IV.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'II e III.'. A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "I e IV.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'I e IV.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'II e III.'. A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar características do windows 10. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora características do windows 10 por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de características do windows 10 à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: A questão original considera corretas II e III: o Microsoft Edge foi introduzido como navegador padrão e o menu Iniciar retornou no Windows 10. A afirmativa I é falsa porque houve versões de 32 e 64 bits. A afirmativa IV é falsa porque os requisitos mínimos oficiais variavam conforme arquitetura e versão; 4 GB não era requisito mínimo universal. Como questão histórica, deve ser interpretada no contexto do lançamento do Windows 10.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0058

```json
{
  "id": "MAT-SO-Q0058",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas da família Red Hat Enterprise Linux, Fedora e derivados atuais, o gerenciador de pacotes de alto nível comumente utilizado é",
  "alternatives": [
    {
      "id": "A",
      "text": "brew.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'brew.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'dpkg.'. DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "dnf.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dnf.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'dpkg.'. DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "apt.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'apt.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'dpkg.'. DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "dpkg.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'dpkg.'. DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: DNF é o gerenciador de pacotes de alto nível usado no Fedora e em versões atuais do ecossistema RHEL e derivados, com variações por versão. RPM é o formato e ferramenta de baixo nível. APT/dpkg são típicos do Debian/Ubuntu; Homebrew é comum em macOS e também pode ser instalado em Linux.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0059

```json
{
  "id": "MAT-SO-Q0059",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Arch Linux, o gerenciador de pacotes nativo utilizado para instalar e atualizar pacotes dos repositórios oficiais é",
  "alternatives": [
    {
      "id": "A",
      "text": "zypper.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'zypper.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "dnf.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dnf.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "pacman.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'pacman.'. pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "apt.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'apt.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'pacman.'. pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: pacman é o gerenciador de pacotes do Arch Linux, com comandos para sincronizar bases, atualizar o sistema e instalar/remover pacotes. zypper é associado ao openSUSE; DNF ao Fedora e família Red Hat; APT ao Debian e derivados.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0060

```json
{
  "id": "MAT-SO-Q0060",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma característica que distingue uma distribuição Linux de outra é que ela pode combinar",
  "alternatives": [
    {
      "id": "A",
      "text": "um kernel necessariamente escrito pela empresa que mantém a distribuição.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um kernel necessariamente escrito pela empresa que mantém a distribuição.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'apenas uma interface gráfica, sem ferramentas de sistema.'. Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "apenas uma interface gráfica, sem ferramentas de sistema.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'apenas uma interface gráfica, sem ferramentas de sistema.'. Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "um sistema de arquivos exclusivo e incompatível com outras distribuições.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um sistema de arquivos exclusivo e incompatível com outras distribuições.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'apenas uma interface gráfica, sem ferramentas de sistema.'. Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "kernel Linux, ferramentas de espaço de usuário, sistema de pacotes, instalador, políticas e seleção de aplicações.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'kernel Linux, ferramentas de espaço de usuário, sistema de pacotes, instalador, políticas e seleção de aplicações.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'apenas uma interface gráfica, sem ferramentas de sistema.'. Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Uma distribuição reúne o kernel Linux com bibliotecas, utilitários, instalador, gerenciador de pacotes, repositórios, configurações e aplicações. Distribuições diferem em objetivos, ciclos de lançamento, suporte e escolhas técnicas. Compartilhar o kernel não significa serem idênticas, nem implica incompatibilidade geral entre sistemas de arquivos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0061

```json
{
  "id": "MAT-SO-Q0061",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A distribuição Ubuntu é mantida comercialmente e comunitariamente em torno da empresa",
  "alternatives": [
    {
      "id": "A",
      "text": "Canonical.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'Canonical.'. Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "Red Hat.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Red Hat.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Canonical.'. Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "SUSE.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'SUSE.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Canonical.'. Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "Apple.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Apple.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Canonical.'. Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Ubuntu é uma distribuição baseada em Debian, publicada pela Canonical com participação comunitária. Red Hat está associada a RHEL e Fedora; SUSE mantém produtos e projetos como SUSE Linux Enterprise e openSUSE; Apple desenvolve macOS. A associação institucional não significa que todo software Ubuntu seja proprietário.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0062

```json
{
  "id": "MAT-SO-Q0062",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A distribuição Linux Mint é conhecida principalmente por",
  "alternatives": [
    {
      "id": "A",
      "text": "ser uma versão do Windows com kernel Linux.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ser uma versão do Windows com kernel Linux.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser uma distribuição sem ambiente gráfico.'. Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "oferecer uma experiência de desktop amigável, com edições como Cinnamon, MATE e Xfce.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'oferecer uma experiência de desktop amigável, com edições como Cinnamon, MATE e Xfce.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser uma distribuição sem ambiente gráfico.'. Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "ser um sistema operacional exclusivo para roteadores embarcados.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ser um sistema operacional exclusivo para roteadores embarcados.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser uma distribuição sem ambiente gráfico.'. Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ser uma distribuição sem ambiente gráfico.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'ser uma distribuição sem ambiente gráfico.'. Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Linux Mint é uma distribuição voltada especialmente a desktops, com edições que historicamente incluem Cinnamon, MATE e Xfce. Não é exclusiva para roteadores nem uma edição do Windows. Para sistemas embarcados e roteadores, há projetos e distribuições específicas, como OpenWrt.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0063

```json
{
  "id": "MAT-SO-Q0063",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições e gerenciadores de pacotes",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O OpenWrt é uma distribuição Linux frequentemente utilizada em",
  "alternatives": [
    {
      "id": "A",
      "text": "servidores Windows com Active Directory.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'servidores Windows com Active Directory.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'roteadores e dispositivos de rede embarcados.'. OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "smartphones iOS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'smartphones iOS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'roteadores e dispositivos de rede embarcados.'. OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "roteadores e dispositivos de rede embarcados.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'roteadores e dispositivos de rede embarcados.'. OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "estações de trabalho para edição de vídeo profissional exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'estações de trabalho para edição de vídeo profissional exclusivamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'roteadores e dispositivos de rede embarcados.'. OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições e gerenciadores de pacotes. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições e gerenciadores de pacotes por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições e gerenciadores de pacotes à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: OpenWrt é uma distribuição Linux voltada a dispositivos embarcados de rede, especialmente roteadores. Oferece configuração de rede, firewall, serviços e gerenciamento de pacotes adaptados a recursos limitados. Não é uma distribuição desktop genérica nem faz parte do Windows ou iOS.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0064

```json
{
  "id": "MAT-SO-Q0064",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Técnico em Tecnologia da Informação",
    "year": 2022,
    "question_number": 39,
    "page": 22
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Prioridade de processos no Ubuntu",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Em sistemas operacionais multitarefas, como o Ubuntu Linux, podem-se executar processos com maior ou menor prioridade. Se, por exemplo, um superusuário atribuir um valor numérico de prioridade mais baixo a um processo, ele passará mais tempo sendo executado pela CPU. No Ubuntu, o comando que permite alterar a prioridade de execução de processo é",
  "alternatives": [
    {
      "id": "A",
      "text": "nice.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'nice.'. A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "ps.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ps.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'nice.'. A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "kill.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'kill.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'nice.'. A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "top.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'top.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'nice.'. A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar prioridade de processos no ubuntu. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora prioridade de processos no ubuntu por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de prioridade de processos no ubuntu à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: A questão identifica nice como o comando relacionado ao valor de prioridade. Tecnicamente, nice inicia um comando com determinado valor nice, enquanto renice altera o valor de processos já existentes. Em Linux, valores nice menores representam maior prioridade relativa, e valores maiores, menor prioridade. ps lista processos; kill envia sinais; top monitora processos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0065

```json
{
  "id": "MAT-SO-Q0065",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, o utilitário Gerenciador de Tarefas permite, entre outras funções",
  "alternatives": [
    {
      "id": "A",
      "text": "acompanhar processos e desempenho e encerrar tarefas que não respondem.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'acompanhar processos e desempenho e encerrar tarefas que não respondem.'. O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "reparticionar fisicamente a memória RAM.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'reparticionar fisicamente a memória RAM.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acompanhar processos e desempenho e encerrar tarefas que não respondem.'. O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "alterar o firmware da placa-mãe.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar o firmware da placa-mãe.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acompanhar processos e desempenho e encerrar tarefas que não respondem.'. O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "editar diretamente as ACLs de todos os arquivos sem permissões.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'editar diretamente as ACLs de todos os arquivos sem permissões.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acompanhar processos e desempenho e encerrar tarefas que não respondem.'. O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O Gerenciador de Tarefas exibe processos, desempenho de CPU, memória, disco, rede e inicialização, além de permitir encerrar tarefas e gerenciar alguns aplicativos de inicialização. Não substitui ferramentas de particionamento nem configura firmware. Alterações de segurança em arquivos são realizadas por mecanismos próprios, como propriedades e ACLs.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0066

```json
{
  "id": "MAT-SO-Q0066",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em ambiente Windows, o PowerShell diferencia-se do Prompt de Comando tradicional por",
  "alternatives": [
    {
      "id": "A",
      "text": "não permitir administração remota.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'não permitir administração remota.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser apenas uma interface gráfica para o Registro.'. PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "ser um shell e linguagem de automação que trabalha com objetos .NET no pipeline, além de texto.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ser um shell e linguagem de automação que trabalha com objetos .NET no pipeline, além de texto.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser apenas uma interface gráfica para o Registro.'. PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "executar exclusivamente comandos Unix e não permitir scripts.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'executar exclusivamente comandos Unix e não permitir scripts.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'ser apenas uma interface gráfica para o Registro.'. PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ser apenas uma interface gráfica para o Registro.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'ser apenas uma interface gráfica para o Registro.'. PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: PowerShell é um shell de linha de comando e linguagem de scripting. Seu pipeline transporta objetos com propriedades e métodos, ao contrário do modelo tradicional de texto do cmd.exe. Oferece cmdlets, módulos, funções e recursos de administração local e remota. Não é apenas uma interface gráfica nem é limitado a comandos Unix.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0067

```json
{
  "id": "MAT-SO-Q0067",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, o comando `ipconfig /all` é utilizado para",
  "alternatives": [
    {
      "id": "A",
      "text": "formatar todas as unidades NTFS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'formatar todas as unidades NTFS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exibir informações detalhadas de configuração das interfaces de rede, incluindo endereços e servidores DNS.'. ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "alterar a senha do usuário administrador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar a senha do usuário administrador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exibir informações detalhadas de configuração das interfaces de rede, incluindo endereços e servidores DNS.'. ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "exibir informações detalhadas de configuração das interfaces de rede, incluindo endereços e servidores DNS.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'exibir informações detalhadas de configuração das interfaces de rede, incluindo endereços e servidores DNS.'. ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "listar os processos com maior consumo de CPU.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'listar os processos com maior consumo de CPU.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'exibir informações detalhadas de configuração das interfaces de rede, incluindo endereços e servidores DNS.'. ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: ipconfig exibe e gerencia parâmetros TCP/IP das interfaces Windows. /all apresenta informações detalhadas, como endereço físico, DHCP, DNS e configuração IP. Para processos, utiliza-se Gerenciador de Tarefas ou ferramentas como tasklist; para discos, Disk Management ou diskpart; para senhas, ferramentas de contas e políticas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0068

```json
{
  "id": "MAT-SO-Q0068",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma estação Windows integrada a um domínio Active Directory, a autenticação e a aplicação centralizada de políticas de grupo são recursos associados principalmente a",
  "alternatives": [
    {
      "id": "A",
      "text": "FAT32 e defrag.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'FAT32 e defrag.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'UEFI e GRUB.'. AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "UEFI e GRUB.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'UEFI e GRUB.'. AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "SELinux e AppArmor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'SELinux e AppArmor.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'UEFI e GRUB.'. AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "serviços de domínio do Active Directory (AD DS) e Group Policy.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'serviços de domínio do Active Directory (AD DS) e Group Policy.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'UEFI e GRUB.'. AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: AD DS fornece serviços de diretório e autenticação em domínios Windows. Group Policy permite administrar configurações de usuários e computadores de forma centralizada, vinculando objetos de política a sites, domínios e unidades organizacionais. SELinux/AppArmor são mecanismos de segurança Linux; GRUB é carregador de inicialização.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0069

```json
{
  "id": "MAT-SO-Q0069",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para consultar e administrar serviços no Windows por interface gráfica, um administrador pode utilizar",
  "alternatives": [
    {
      "id": "A",
      "text": "o console Serviços (services.msc).",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'o console Serviços (services.msc).'. services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "o Bloco de Notas.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o Bloco de Notas.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o console Serviços (services.msc).'. services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "o Visualizador de Fotos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o Visualizador de Fotos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o console Serviços (services.msc).'. services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "o Paint.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o Paint.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'o console Serviços (services.msc).'. services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: services.msc abre o console de gerenciamento de serviços do Windows, permitindo consultar estado, tipo de inicialização, iniciar, interromper e configurar serviços conforme privilégios. Também é possível administrar serviços pelo PowerShell e ferramentas de linha de comando. Aplicativos de edição de texto ou imagem não são ferramentas de serviço.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0070

```json
{
  "id": "MAT-SO-Q0070",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, o Visualizador de Eventos é empregado para",
  "alternatives": [
    {
      "id": "A",
      "text": "alterar a velocidade física do processador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar a velocidade física do processador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'compilar o kernel Linux.'. O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "consultar registros de eventos do sistema, segurança e aplicativos para diagnóstico e auditoria.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'consultar registros de eventos do sistema, segurança e aplicativos para diagnóstico e auditoria.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'compilar o kernel Linux.'. O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "criar partições EFI.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criar partições EFI.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'compilar o kernel Linux.'. O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "compilar o kernel Linux.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'compilar o kernel Linux.'. O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O Event Viewer (eventvwr.msc) consulta logs de eventos, como Application, System e Security, além de registros específicos de componentes. É ferramenta importante para diagnóstico de falhas, auditoria e investigação. Não compila kernels nem configura hardware físico.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0071

```json
{
  "id": "MAT-SO-Q0071",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Técnico em Tecnologia da Informação",
    "year": 2022,
    "question_number": 40,
    "page": 22
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Instalação do Apache no Ubuntu",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Um técnico em TI, para implementar um certo projeto, instalou, em um computador, o Ubuntu Linux, a linguagem e as ferramentas de programação que utilizaria, além de um servidor de páginas web. Para instalar o Apache 2 no Ubuntu Linux, esse técnico em TI poderá utilizar o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo apt install apache2.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo apt install apache2.'. Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "sudo yum install apache2.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo yum install apache2.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install apache2.'. Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "sudo service install apache2.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo service install apache2.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install apache2.'. Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "sudo server install apache2.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo server install apache2.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo apt install apache2.'. Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar instalação do apache no ubuntu. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora instalação do apache no ubuntu por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de instalação do apache no ubuntu à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Ubuntu utiliza APT como gerenciador de pacotes padrão em instalações tradicionais. apt install apache2 instala o servidor Apache HTTP a partir dos repositórios. yum pertence a ecossistemas RPM mais antigos e ainda pode existir em algumas distribuições; service administra serviços, não instala pacotes. O nome do pacote e o comando dependem da distribuição.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0072

```json
{
  "id": "MAT-SO-Q0072",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O Registro do Windows é",
  "alternatives": [
    {
      "id": "A",
      "text": "um sistema de arquivos que substitui NTFS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um sistema de arquivos que substitui NTFS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um serviço de impressão em rede.'. O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "um serviço de impressão em rede.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'um serviço de impressão em rede.'. O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "uma cópia de segurança automática de todos os documentos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'uma cópia de segurança automática de todos os documentos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um serviço de impressão em rede.'. O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "um banco hierárquico de configurações do sistema, hardware, usuários e aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um banco hierárquico de configurações do sistema, hardware, usuários e aplicativos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um serviço de impressão em rede.'. O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O Registro é uma base hierárquica de configurações, organizada em chaves, subchaves e valores, distribuída por hives. Alterações incorretas podem causar instabilidade; devem ser feitas com conhecimento e backup apropriado. Não substitui o sistema de arquivos nem é, por si só, um backup dos documentos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0073

```json
{
  "id": "MAT-SO-Q0073",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, a ferramenta `sfc /scannow` tem como finalidade",
  "alternatives": [
    {
      "id": "A",
      "text": "verificar arquivos protegidos do sistema e tentar reparar versões corrompidas.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'verificar arquivos protegidos do sistema e tentar reparar versões corrompidas.'. System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "desfragmentar todos os discos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'desfragmentar todos os discos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'verificar arquivos protegidos do sistema e tentar reparar versões corrompidas.'. System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "criar uma conta de domínio.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'criar uma conta de domínio.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'verificar arquivos protegidos do sistema e tentar reparar versões corrompidas.'. System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "limpar automaticamente todos os logs de segurança.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'limpar automaticamente todos os logs de segurança.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'verificar arquivos protegidos do sistema e tentar reparar versões corrompidas.'. System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: System File Checker (SFC) verifica a integridade de arquivos protegidos do Windows e tenta reparar problemas usando componentes de origem disponíveis. Em alguns cenários, DISM repara a imagem do Windows antes de executar SFC. A ferramenta não é desfragmentador nem gerenciador de contas.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0074

```json
{
  "id": "MAT-SO-Q0074",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, o comando `chkdsk` é utilizado para",
  "alternatives": [
    {
      "id": "A",
      "text": "gerenciar unidades systemd.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'gerenciar unidades systemd.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar pacotes .deb.'. chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "verificar o sistema de arquivos e, conforme os parâmetros, procurar e corrigir erros no volume.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'verificar o sistema de arquivos e, conforme os parâmetros, procurar e corrigir erros no volume.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar pacotes .deb.'. chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "alterar a prioridade de processos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar a prioridade de processos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar pacotes .deb.'. chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "instalar pacotes .deb.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'instalar pacotes .deb.'. chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: chkdsk examina a estrutura do sistema de arquivos e pode verificar setores e corrigir erros conforme opções e sistema de arquivos. Em volumes em uso, algumas operações podem exigir agendamento para reinicialização. Não é ferramenta de processos nem de pacotes Linux.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0075

```json
{
  "id": "MAT-SO-Q0075",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: administração e ferramentas",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O BitLocker, em edições compatíveis do Windows, fornece",
  "alternatives": [
    {
      "id": "A",
      "text": "compactação obrigatória de todos os arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'compactação obrigatória de todos os arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'criptografia de volumes para proteger dados em repouso, podendo utilizar TPM.'. BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "bloqueio de anúncios no navegador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'bloqueio de anúncios no navegador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'criptografia de volumes para proteger dados em repouso, podendo utilizar TPM.'. BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "criptografia de volumes para proteger dados em repouso, podendo utilizar TPM.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'criptografia de volumes para proteger dados em repouso, podendo utilizar TPM.'. BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "controle de versão de código-fonte.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'controle de versão de código-fonte.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'criptografia de volumes para proteger dados em repouso, podendo utilizar TPM.'. BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: administração e ferramentas. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: administração e ferramentas por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: administração e ferramentas à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: BitLocker cifra volumes para reduzir o risco de acesso offline a dados em caso de perda ou furto do equipamento. Pode utilizar TPM para proteger chaves e integrar-se a mecanismos de recuperação. Não substitui backup, controle de acesso ou segurança contra malware em uma sessão já desbloqueada.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0076

```json
{
  "id": "MAT-SO-Q0076",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: contas e permissões",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Windows, uma conta pertencente ao grupo Administradores locais possui, em geral",
  "alternatives": [
    {
      "id": "A",
      "text": "acesso apenas de leitura à própria pasta pessoal.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'acesso apenas de leitura à própria pasta pessoal.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissão automática para alterar qualquer domínio da Internet.'. O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "permissão automática para alterar qualquer domínio da Internet.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'permissão automática para alterar qualquer domínio da Internet.'. O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "privilégios equivalentes a uma conta sem autenticação.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'privilégios equivalentes a uma conta sem autenticação.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissão automática para alterar qualquer domínio da Internet.'. O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "privilégios elevados para administrar o computador, sujeitos ao UAC e às políticas de segurança.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'privilégios elevados para administrar o computador, sujeitos ao UAC e às políticas de segurança.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissão automática para alterar qualquer domínio da Internet.'. O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: contas e permissões. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: contas e permissões por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: contas e permissões à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O grupo Administradores locais concede capacidade de realizar tarefas administrativas no computador. O UAC pode solicitar elevação e consentimento, de modo que um processo não recebe automaticamente todos os privilégios. Políticas de domínio e controles adicionais podem restringir ações. A conta não elimina autenticação nem concede controle sobre serviços externos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0077

```json
{
  "id": "MAT-SO-Q0077",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: contas e permissões",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O princípio do menor privilégio recomenda que",
  "alternatives": [
    {
      "id": "A",
      "text": "usuários e processos recebam somente as permissões necessárias para suas atividades.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'usuários e processos recebam somente as permissões necessárias para suas atividades.'. O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "todos os usuários utilizem a conta Administrador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'todos os usuários utilizem a conta Administrador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'usuários e processos recebam somente as permissões necessárias para suas atividades.'. O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "senhas sejam compartilhadas para facilitar suporte.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'senhas sejam compartilhadas para facilitar suporte.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'usuários e processos recebam somente as permissões necessárias para suas atividades.'. O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "firewalls sejam desativados durante o expediente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'firewalls sejam desativados durante o expediente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'usuários e processos recebam somente as permissões necessárias para suas atividades.'. O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: contas e permissões. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: contas e permissões por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: contas e permissões à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O princípio do menor privilégio reduz a superfície de ataque e o impacto de erros ou comprometimentos. Contas comuns devem ser usadas nas tarefas diárias, com elevação apenas quando necessária. Acesso deve ser concedido por função e revisto periodicamente. Compartilhar credenciais e desativar controles contraria esse princípio.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0078

```json
{
  "id": "MAT-SO-Q0078",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Técnico em Tecnologia da Informação",
    "year": 2022,
    "question_number": 41,
    "page": 22
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Gerenciamento de serviços no Ubuntu",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Após instalar o Apache2 em uma máquina com Ubuntu Linux, o técnico em TI, para liberar memória nessa máquina, resolveu desligar o serviço. Para tanto, utilizou o comando",
  "alternatives": [
    {
      "id": "A",
      "text": "sudo service apache2 stop.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'sudo service apache2 stop.'. service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "sudo apt stop apache2.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo apt stop apache2.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo service apache2 stop.'. service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "sudo server apache2 stop.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo server apache2 stop.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo service apache2 stop.'. service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "sudo yum stop apache2.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'sudo yum stop apache2.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'sudo service apache2 stop.'. service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar gerenciamento de serviços no ubuntu. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora gerenciamento de serviços no ubuntu por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de gerenciamento de serviços no ubuntu à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: service apache2 stop solicita a interrupção do serviço Apache. Em sistemas atuais com systemd, a forma comum é systemctl stop apache2. apt instala ou remove pacotes, mas não é o comando para parar um serviço; yum é gerenciador de pacotes e as formas server/yum stop não correspondem à administração padrão desse serviço.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0079

```json
{
  "id": "MAT-SO-Q0079",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: contas e permissões",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em NTFS, ao configurar permissões de uma pasta, a herança de ACLs permite que",
  "alternatives": [
    {
      "id": "A",
      "text": "qualquer usuário se torne proprietário do volume.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'qualquer usuário se torne proprietário do volume.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissões definidas em diretórios superiores sejam propagadas a objetos descendentes, conforme as opções configuradas.'. ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "as permissões sejam ignoradas pelo sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'as permissões sejam ignoradas pelo sistema.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissões definidas em diretórios superiores sejam propagadas a objetos descendentes, conforme as opções configuradas.'. ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "permissões definidas em diretórios superiores sejam propagadas a objetos descendentes, conforme as opções configuradas.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'permissões definidas em diretórios superiores sejam propagadas a objetos descendentes, conforme as opções configuradas.'. ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "o arquivo herde automaticamente a senha do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o arquivo herde automaticamente a senha do usuário.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'permissões definidas em diretórios superiores sejam propagadas a objetos descendentes, conforme as opções configuradas.'. ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: contas e permissões. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: contas e permissões por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: contas e permissões à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: ACLs NTFS podem ser herdadas de diretórios pais por arquivos e subpastas. A herança facilita administração consistente, mas pode ser desabilitada ou substituída em objetos específicos. A efetiva autorização depende da combinação de permissões explícitas e herdadas, grupos e regras de negação/concessão.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0080

```json
{
  "id": "MAT-SO-Q0080",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: rede e diagnóstico",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Para testar a conectividade IP básica com um host remoto no Windows ou Linux, uma ferramenta tradicional é",
  "alternatives": [
    {
      "id": "A",
      "text": "format.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'format.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chkdsk.'. ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "chkdsk.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'chkdsk.'. ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "passwd.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'passwd.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chkdsk.'. ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "ping.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'ping.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'chkdsk.'. ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: rede e diagnóstico. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: rede e diagnóstico por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: rede e diagnóstico à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: ping envia mensagens ICMP Echo Request e observa respostas, ajudando a verificar alcance IP e latência aproximada. Falha de resposta não prova necessariamente indisponibilidade, pois firewalls podem bloquear ICMP. format formata volumes, chkdsk verifica sistemas de arquivos e passwd gerencia senhas Linux.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0081

```json
{
  "id": "MAT-SO-Q0081",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: rede e diagnóstico",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Windows, o comando `nslookup` é utilizado para",
  "alternatives": [
    {
      "id": "A",
      "text": "consultar servidores DNS e resolver nomes ou registros.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'consultar servidores DNS e resolver nomes ou registros.'. nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "listar permissões NTFS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'listar permissões NTFS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'consultar servidores DNS e resolver nomes ou registros.'. nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "encerrar serviços.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'encerrar serviços.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'consultar servidores DNS e resolver nomes ou registros.'. nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "verificar integridade de arquivos do sistema.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'verificar integridade de arquivos do sistema.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'consultar servidores DNS e resolver nomes ou registros.'. nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: rede e diagnóstico. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: rede e diagnóstico por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: rede e diagnóstico à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: nslookup consulta DNS para obter informações de nomes e registros, podendo direcionar a consulta a um servidor específico. É útil no diagnóstico de resolução de nomes. Permissões NTFS, serviços e integridade de arquivos exigem ferramentas distintas, como ACLs, services.msc e SFC.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0082

```json
{
  "id": "MAT-SO-Q0082",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: inicialização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O Modo de Segurança do Windows é útil em diagnóstico porque",
  "alternatives": [
    {
      "id": "A",
      "text": "reinstala automaticamente todos os aplicativos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'reinstala automaticamente todos os aplicativos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'desativa permanentemente a autenticação.'. O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "inicia o sistema com um conjunto limitado de drivers e serviços, facilitando isolar problemas.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'inicia o sistema com um conjunto limitado de drivers e serviços, facilitando isolar problemas.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'desativa permanentemente a autenticação.'. O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "inicia todos os drivers de terceiros obrigatoriamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'inicia todos os drivers de terceiros obrigatoriamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'desativa permanentemente a autenticação.'. O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "desativa permanentemente a autenticação.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'desativa permanentemente a autenticação.'. O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: inicialização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: inicialização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: inicialização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O Safe Mode carrega um conjunto mínimo de componentes necessários ao funcionamento, reduzindo a interferência de drivers e serviços de terceiros. Pode ajudar a identificar conflitos de inicialização, drivers e malware. Não é uma reinstalação nem deve ser confundido com desativação permanente de segurança.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0083

```json
{
  "id": "MAT-SO-Q0083",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: inicialização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em computadores Windows modernos instalados em UEFI, o Windows Boot Manager participa",
  "alternatives": [
    {
      "id": "A",
      "text": "da montagem de volumes ext4.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'da montagem de volumes ext4.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do processo de seleção e carregamento do ambiente de inicialização do Windows.'. Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "da execução de comandos Bash como shell padrão.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'da execução de comandos Bash como shell padrão.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do processo de seleção e carregamento do ambiente de inicialização do Windows.'. Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "do processo de seleção e carregamento do ambiente de inicialização do Windows.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'do processo de seleção e carregamento do ambiente de inicialização do Windows.'. Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "da atualização de pacotes apt.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'da atualização de pacotes apt.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'do processo de seleção e carregamento do ambiente de inicialização do Windows.'. Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: inicialização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: inicialização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: inicialização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Windows Boot Manager é componente do processo de inicialização do Windows em sistemas UEFI. Ele consulta a configuração de boot e encaminha a inicialização ao carregador do sistema. Em dual boot, a configuração de firmware e do bootloader pode apresentar múltiplas entradas. Não administra pacotes Linux ou sistemas de arquivos Linux.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0084

```json
{
  "id": "MAT-SO-Q0084",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Windows: recuperação",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Antes de realizar uma operação de reparo de partição ou reinstalação do Windows em uma estação que contém dados institucionais, a medida preventiva mais importante é",
  "alternatives": [
    {
      "id": "A",
      "text": "desativar a proteção contra gravação de todos os discos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'desativar a proteção contra gravação de todos os discos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'excluir as partições para liberar espaço.'. Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "excluir as partições para liberar espaço.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'excluir as partições para liberar espaço.'. Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "alterar o nome do computador.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'alterar o nome do computador.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'excluir as partições para liberar espaço.'. Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "verificar a existência e a integridade de backup dos dados necessários.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'verificar a existência e a integridade de backup dos dados necessários.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'excluir as partições para liberar espaço.'. Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar windows: recuperação. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora windows: recuperação por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de windows: recuperação à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Operações de reparo, redimensionamento e reinstalação podem provocar perda de dados. A política de backup deve assegurar cópias recuperáveis, testadas e armazenadas em local adequado. A existência de uma cópia não verificada não garante recuperação. A alteração do nome do computador não protege dados.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0085

```json
{
  "id": "MAT-SO-Q0085",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 87/2022 — Técnico em Tecnologia da Informação",
    "year": 2022,
    "question_number": 42,
    "page": 22
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Sistema de arquivos ext4",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "O Ubuntu Linux tem suporte a diversos sistemas de arquivos, tais como Btrfs, ReiserFS e Ext4. O Ext4",
  "alternatives": [
    {
      "id": "A",
      "text": "possui a funcionalidade de journaling.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'possui a funcionalidade de journaling.'. ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "exige que as extensões no nome do arquivo tenham, no máximo, quatro caracteres.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'exige que as extensões no nome do arquivo tenham, no máximo, quatro caracteres.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'possui a funcionalidade de journaling.'. ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "limita o tamanho dos arquivos a quatro gigabytes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'limita o tamanho dos arquivos a quatro gigabytes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'possui a funcionalidade de journaling.'. ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "é incompatível com o sistema de arquivos Ext3.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'é incompatível com o sistema de arquivos Ext3.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'possui a funcionalidade de journaling.'. ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar sistema de arquivos ext4. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora sistema de arquivos ext4 por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de sistema de arquivos ext4 à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: ext4 é um sistema de arquivos Linux com journaling, que registra operações para auxiliar a recuperação da consistência após falhas. Não impõe limite de quatro caracteres para extensões e suporta arquivos muito maiores que 4 GiB, conforme configuração e tamanho de bloco. A família ext mantém compatibilidade e ferramentas de migração, embora ext4 tenha diferenças importantes em relação ao ext3.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0086

```json
{
  "id": "MAT-SO-Q0086",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Uma característica histórica compartilhada por sistemas Unix e sistemas semelhantes a Unix, como Linux, é",
  "alternatives": [
    {
      "id": "A",
      "text": "a ausência de usuários e processos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a ausência de usuários e processos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a utilização exclusiva do sistema de arquivos NTFS.'. Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "a organização hierárquica de arquivos e diretórios e o uso de permissões para controlar acesso.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a organização hierárquica de arquivos e diretórios e o uso de permissões para controlar acesso.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a utilização exclusiva do sistema de arquivos NTFS.'. Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "a obrigatoriedade de interface gráfica.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'a obrigatoriedade de interface gráfica.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a utilização exclusiva do sistema de arquivos NTFS.'. Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "a utilização exclusiva do sistema de arquivos NTFS.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'a utilização exclusiva do sistema de arquivos NTFS.'. Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Unix e sistemas Unix-like compartilham princípios como árvore hierárquica de arquivos, usuários, grupos, processos, permissões e ferramentas combináveis. Linux é Unix-like, mas não é uma implementação certificada do UNIX tradicional. Não exige interface gráfica e suporta diversos sistemas de arquivos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0087

```json
{
  "id": "MAT-SO-Q0087",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A expressão POSIX, no contexto de sistemas operacionais, refere-se a",
  "alternatives": [
    {
      "id": "A",
      "text": "um gerenciador gráfico exclusivo do Ubuntu.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um gerenciador gráfico exclusivo do Ubuntu.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'uma família de padrões que define interfaces e comportamentos para favorecer portabilidade entre sistemas.'. POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "um protocolo de roteamento dinâmico.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um protocolo de roteamento dinâmico.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'uma família de padrões que define interfaces e comportamentos para favorecer portabilidade entre sistemas.'. POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "uma família de padrões que define interfaces e comportamentos para favorecer portabilidade entre sistemas.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'uma família de padrões que define interfaces e comportamentos para favorecer portabilidade entre sistemas.'. POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "um sistema de arquivos proprietário do Windows.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'um sistema de arquivos proprietário do Windows.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'uma família de padrões que define interfaces e comportamentos para favorecer portabilidade entre sistemas.'. POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: POSIX é uma família de padrões IEEE que especifica interfaces de sistema, utilitários e aspectos de comportamento, incluindo APIs e shell. A conformidade favorece portabilidade de aplicações e scripts entre sistemas compatíveis, embora existam diferenças e extensões. POSIX não é distribuição nem sistema de arquivos.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0088

```json
{
  "id": "MAT-SO-Q0088",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas Unix, o diretório `/etc` é destinado principalmente a",
  "alternatives": [
    {
      "id": "A",
      "text": "arquivos temporários de todos os usuários exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'arquivos temporários de todos os usuários exclusivamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'diretórios pessoais dos usuários comuns.'. A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "diretórios pessoais dos usuários comuns.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'diretórios pessoais dos usuários comuns.'. A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "dispositivos de bloco e caracteres.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dispositivos de bloco e caracteres.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'diretórios pessoais dos usuários comuns.'. A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "arquivos de configuração do sistema e de serviços.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'arquivos de configuração do sistema e de serviços.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'diretórios pessoais dos usuários comuns.'. A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: A hierarquia Filesystem Hierarchy Standard (FHS) define convenções para diretórios. /etc contém configuração local do sistema; /home abriga diretórios pessoais; /tmp contém arquivos temporários; /dev representa arquivos de dispositivos. A organização exata pode variar, mas a finalidade geral de /etc é estável.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0089

```json
{
  "id": "MAT-SO-Q0089",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "No Linux, o diretório `/proc` é normalmente",
  "alternatives": [
    {
      "id": "A",
      "text": "um sistema de arquivos virtual que expõe informações de processos e do kernel.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'um sistema de arquivos virtual que expõe informações de processos e do kernel.'. procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "uma partição obrigatória para documentos do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'uma partição obrigatória para documentos do usuário.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um sistema de arquivos virtual que expõe informações de processos e do kernel.'. procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "o local padrão de instalação de todos os pacotes .deb.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o local padrão de instalação de todos os pacotes .deb.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um sistema de arquivos virtual que expõe informações de processos e do kernel.'. procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "uma pasta destinada exclusivamente a arquivos de impressão.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'uma pasta destinada exclusivamente a arquivos de impressão.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'um sistema de arquivos virtual que expõe informações de processos e do kernel.'. procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: procfs é um sistema de arquivos virtual, geralmente montado em /proc, que expõe informações do kernel e processos, como /proc/cpuinfo, /proc/meminfo e diretórios numéricos por PID. Não armazena arquivos convencionais da mesma maneira que ext4. /sys expõe informações de dispositivos e kernel por sysfs.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0090

```json
{
  "id": "MAT-SO-Q0090",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O diretório `/var` em sistemas Linux é destinado a",
  "alternatives": [
    {
      "id": "A",
      "text": "diretórios pessoais obrigatórios.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'diretórios pessoais obrigatórios.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'binários essenciais de inicialização apenas.'. FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "dados variáveis, como logs, filas, caches e estado de serviços.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dados variáveis, como logs, filas, caches e estado de serviços.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'binários essenciais de inicialização apenas.'. FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "arquivos imutáveis do kernel exclusivamente.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'arquivos imutáveis do kernel exclusivamente.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'binários essenciais de inicialização apenas.'. FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "binários essenciais de inicialização apenas.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'binários essenciais de inicialização apenas.'. FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: FHS define /var para dados variáveis que mudam durante a operação: logs em /var/log, caches, spool e dados de serviços. /etc guarda configuração; /usr contém aplicações e dados compartilháveis; /home contém diretórios pessoais; /boot armazena componentes relacionados à inicialização.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0091

```json
{
  "id": "MAT-SO-Q0091",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Linux, o comando `uname -r` exibe",
  "alternatives": [
    {
      "id": "A",
      "text": "o espaço livre de cada partição.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o espaço livre de cada partição.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a versão de release do kernel em execução.'. uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "o endereço IP da interface principal.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o endereço IP da interface principal.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a versão de release do kernel em execução.'. uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "a versão de release do kernel em execução.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'a versão de release do kernel em execução.'. uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "o nome de todos os usuários cadastrados.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o nome de todos os usuários cadastrados.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a versão de release do kernel em execução.'. uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: uname informa dados do sistema. A opção -r mostra a versão de release do kernel; -a apresenta várias informações, como nome do kernel, hostname, release e arquitetura, conforme a implementação. hostnamectl pode exibir informações mais amplas em sistemas com systemd.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0092

```json
{
  "id": "MAT-SO-Q0092",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 16/2024 — Analista de Tecnologia da Informação (cargo 202)",
    "year": 2024,
    "question_number": 49,
    "page": 23
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Ferramenta de IA no Windows 11",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Lançado em 2021, o MS Windows 11 é uma das versões mais recentes dos sistemas operacionais produzidos pela Microsoft. A versão atual desse sistema operacional vem equipada com a ferramenta de inteligência artificial desenvolvida pela Microsoft. Essa ferramenta é denominada",
  "alternatives": [
    {
      "id": "A",
      "text": "Copilot.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'Copilot.'. Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "Cortana.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Cortana.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Copilot.'. Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "Asana.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Asana.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Copilot.'. Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "Gemini.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Gemini.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'Copilot.'. Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar ferramenta de ia no windows 11. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora ferramenta de ia no windows 11 por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de ferramenta de ia no windows 11 à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Copilot é a marca utilizada pela Microsoft para suas experiências de assistência por inteligência artificial, integradas a produtos e serviços da empresa. Cortana foi uma assistente digital anterior, enquanto Asana é uma plataforma de gestão do trabalho e Gemini é uma família de modelos/assistente do Google. A disponibilidade e integração do Copilot variam conforme versão, região, edição e atualização do Windows.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0093

```json
{
  "id": "MAT-SO-Q0093",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A variável de ambiente PATH é utilizada pelo shell para",
  "alternatives": [
    {
      "id": "A",
      "text": "determinar os diretórios pesquisados ao localizar comandos executáveis informados sem caminho explícito.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'determinar os diretórios pesquisados ao localizar comandos executáveis informados sem caminho explícito.'. PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "definir as permissões de leitura de arquivos.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'definir as permissões de leitura de arquivos.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'determinar os diretórios pesquisados ao localizar comandos executáveis informados sem caminho explícito.'. PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "selecionar o sistema de arquivos raiz.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'selecionar o sistema de arquivos raiz.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'determinar os diretórios pesquisados ao localizar comandos executáveis informados sem caminho explícito.'. PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "armazenar a senha criptografada do usuário.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'armazenar a senha criptografada do usuário.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'determinar os diretórios pesquisados ao localizar comandos executáveis informados sem caminho explícito.'. PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: PATH é uma lista de diretórios, separados por dois-pontos em shells Unix, nos quais o shell procura executáveis quando o comando é informado sem caminho. A ordem importa: um executável homônimo encontrado primeiro será selecionado. PATH não substitui permissões nem armazena credenciais.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0094

```json
{
  "id": "MAT-SO-Q0094",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em scripts de shell, o operador `&&` entre dois comandos indica que",
  "alternatives": [
    {
      "id": "A",
      "text": "os comandos serão executados obrigatoriamente em paralelo.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'os comandos serão executados obrigatoriamente em paralelo.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída do primeiro será enviada ao segundo como pipe.'. O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "o segundo comando será executado se o primeiro terminar com status de sucesso.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o segundo comando será executado se o primeiro terminar com status de sucesso.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída do primeiro será enviada ao segundo como pipe.'. O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "o segundo comando será executado somente se o primeiro falhar.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'o segundo comando será executado somente se o primeiro falhar.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'a saída do primeiro será enviada ao segundo como pipe.'. O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "a saída do primeiro será enviada ao segundo como pipe.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'a saída do primeiro será enviada ao segundo como pipe.'. O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: O operador && encadeia comandos condicionalmente: o próximo é executado se o status de saída do anterior indicar sucesso (zero). || executa o próximo em caso de falha; | conecta saída à entrada; ; separa comandos sem condicionar a execução ao sucesso anterior.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0095

```json
{
  "id": "MAT-SO-Q0095",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Unix e compatibilidade",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em sistemas Linux, o serviço SSH permite",
  "alternatives": [
    {
      "id": "A",
      "text": "resolução de nomes de domínio por DNS.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'resolução de nomes de domínio por DNS.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acesso remoto seguro a um sistema por meio de comunicação criptografada e autenticação.'. SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "atribuição automática de endereços IP por DHCP.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'atribuição automática de endereços IP por DHCP.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acesso remoto seguro a um sistema por meio de comunicação criptografada e autenticação.'. SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "acesso remoto seguro a um sistema por meio de comunicação criptografada e autenticação.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'acesso remoto seguro a um sistema por meio de comunicação criptografada e autenticação.'. SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "D",
      "text": "transferência de mensagens de correio eletrônico por SMTP.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'transferência de mensagens de correio eletrônico por SMTP.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'acesso remoto seguro a um sistema por meio de comunicação criptografada e autenticação.'. SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "C",
  "explanation": {
    "resolution": "O enunciado exige identificar unix e compatibilidade. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa C é a correta porque: SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora unix e compatibilidade por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de unix e compatibilidade à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: SSH oferece acesso remoto seguro, execução de comandos e túneis, com criptografia e mecanismos de autenticação, como senha ou chave pública. Telnet transmite dados sem criptografia por padrão. SMTP é usado para envio de e-mail; DNS resolve nomes; DHCP distribui configurações IP.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0096

```json
{
  "id": "MAT-SO-Q0096",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Segurança e atualização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "A aplicação regular de atualizações de segurança em sistemas operacionais tem como objetivo principal",
  "alternatives": [
    {
      "id": "A",
      "text": "garantir que nenhum ataque futuro seja possível.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'garantir que nenhum ataque futuro seja possível.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir a necessidade de backup.'. Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "substituir a necessidade de backup.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'substituir a necessidade de backup.'. Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "eliminar automaticamente contas administrativas.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'eliminar automaticamente contas administrativas.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir a necessidade de backup.'. Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "corrigir vulnerabilidades conhecidas e reduzir riscos de exploração.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'corrigir vulnerabilidades conhecidas e reduzir riscos de exploração.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'substituir a necessidade de backup.'. Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar segurança e atualização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora segurança e atualização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de segurança e atualização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Atualizações corrigem falhas, corrigem bugs e podem incluir melhorias. Elas reduzem exposição a vulnerabilidades conhecidas, mas não garantem segurança absoluta. Devem ser testadas e aplicadas com planejamento, especialmente em servidores críticos, e complementadas por backups, controles de acesso, monitoramento e resposta a incidentes.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0097

```json
{
  "id": "MAT-SO-Q0097",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Segurança e atualização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em Linux, AppArmor e SELinux são mecanismos de segurança que",
  "alternatives": [
    {
      "id": "A",
      "text": "implementam controle de acesso obrigatório ou baseado em políticas para restringir o que processos podem acessar.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'implementam controle de acesso obrigatório ou baseado em políticas para restringir o que processos podem acessar.'. SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "substituem o gerenciador de pacotes.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'substituem o gerenciador de pacotes.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'implementam controle de acesso obrigatório ou baseado em políticas para restringir o que processos podem acessar.'. SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "fornecem apenas criptografia de disco.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'fornecem apenas criptografia de disco.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'implementam controle de acesso obrigatório ou baseado em políticas para restringir o que processos podem acessar.'. SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "atuam exclusivamente como antivírus de assinatura.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'atuam exclusivamente como antivírus de assinatura.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'implementam controle de acesso obrigatório ou baseado em políticas para restringir o que processos podem acessar.'. SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar segurança e atualização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora segurança e atualização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de segurança e atualização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: SELinux e AppArmor aplicam políticas de controle de acesso para confinar processos. SELinux utiliza rótulos e políticas; AppArmor utiliza perfis associados a caminhos e capacidades. Ambos podem limitar danos mesmo quando um processo é comprometido. Não substituem criptografia, atualizações, antivírus ou controle discricionário tradicional.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0098

```json
{
  "id": "MAT-SO-Q0098",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Segurança e atualização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "O princípio de defesa em profundidade aplicado à administração de sistemas recomenda",
  "alternatives": [
    {
      "id": "A",
      "text": "permitir acesso root remoto para facilitar auditoria.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'permitir acesso root remoto para facilitar auditoria.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar apenas um antivírus e desativar os demais controles.'. Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "combinar camadas de controles, como atualização, firewall, controle de acesso, criptografia, backup e monitoramento.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'combinar camadas de controles, como atualização, firewall, controle de acesso, criptografia, backup e monitoramento.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar apenas um antivírus e desativar os demais controles.'. Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "depender exclusivamente de uma senha complexa.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'depender exclusivamente de uma senha complexa.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'instalar apenas um antivírus e desativar os demais controles.'. Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "instalar apenas um antivírus e desativar os demais controles.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'instalar apenas um antivírus e desativar os demais controles.'. Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    }
  ],
  "answer_key": "D",
  "explanation": {
    "resolution": "O enunciado exige identificar segurança e atualização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa D é a correta porque: Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora segurança e atualização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de segurança e atualização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Defesa em profundidade pressupõe controles complementares em diferentes camadas. Se um controle falhar, outros reduzem a probabilidade ou o impacto de comprometimento. Em sistemas operacionais, isso pode incluir hardening, firewall, autenticação forte, menor privilégio, logs, atualizações e backups testados.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0099

```json
{
  "id": "MAT-SO-Q0099",
  "type": "original",
  "source": {
    "exam": "UFRN — Concurso Público, Edital 16/2024 — Analista de Tecnologia da Informação (cargo 202)",
    "year": 2024,
    "question_number": 50,
    "page": 23
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Distribuições Linux",
  "difficulty": "medium",
  "cognitive_skill": "comprehension",
  "question_text": "Linux é um sistema operacional de código aberto baseado no kernel Linux, desenvolvido, inicialmente, por Linus Torvalds, em 1991. A natureza de código aberto do Linux permite que usuários e programadores possam modificar e distribuir o código, contribuindo para um ambiente de constante inovação e colaboração. Dentre outras, o Linux apresenta uma distribuição denominada",
  "alternatives": [
    {
      "id": "A",
      "text": "OpenWrt, tipicamente utilizada em roteadores wireless.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'OpenWrt, tipicamente utilizada em roteadores wireless.'. OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "B",
      "text": "Linux Mint, exclusivamente desenvolvido para gestão de documentos por meio do SAMBA.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Linux Mint, exclusivamente desenvolvido para gestão de documentos por meio do SAMBA.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'OpenWrt, tipicamente utilizada em roteadores wireless.'. OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "C",
      "text": "Buildroot, que traz ferramentas avançadas de segurança.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'Buildroot, que traz ferramentas avançadas de segurança.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'OpenWrt, tipicamente utilizada em roteadores wireless.'. OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "CentOS, que apresenta, em sua versão 11, ferramentas para uso em computadores pessoais.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'CentOS, que apresenta, em sua versão 11, ferramentas para uso em computadores pessoais.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'OpenWrt, tipicamente utilizada em roteadores wireless.'. OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "A",
  "explanation": {
    "resolution": "O enunciado exige identificar distribuições linux. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa A é a correta porque: OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora distribuições linux por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de distribuições linux à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: OpenWrt é uma distribuição Linux voltada a roteadores e dispositivos de rede embarcados. Linux Mint é uma distribuição de desktop, não exclusiva para gestão documental; Buildroot é um conjunto de ferramentas para construir sistemas Linux embarcados, não uma distribuição com foco específico em segurança; CentOS não possui a alegada versão 11 para desktop. A questão avalia o reconhecimento das finalidades das distribuições.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Questão 0100

```json
{
  "id": "MAT-SO-Q0100",
  "type": "generated",
  "source": {
    "exam": null,
    "year": null,
    "question_number": null,
    "page": null
  },
  "subject": "Sistemas Operacionais",
  "topic": "Utilização e configuração de sistemas Windows, Unix e Linux e suas distribuições",
  "subtopic": "Segurança e atualização",
  "difficulty": "medium",
  "cognitive_skill": "application",
  "question_text": "Em uma conexão SSH baseada em chave pública, o cliente normalmente",
  "alternatives": [
    {
      "id": "A",
      "text": "envia a chave privada em texto claro ao servidor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'envia a chave privada em texto claro ao servidor.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'utiliza a chave pública para descriptografar a senha armazenada.'. Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "B",
      "text": "utiliza a chave pública para descriptografar a senha armazenada.",
      "is_correct": true,
      "explanation": "Correta. A opção apresenta 'utiliza a chave pública para descriptografar a senha armazenada.'. Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários. O candidato deve reconhecer esse recurso pela sua finalidade e distingui-lo de ferramentas próximas que atuam em outra camada ou executam outra tarefa."
    },
    {
      "id": "C",
      "text": "dispensa qualquer autenticação do servidor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'dispensa qualquer autenticação do servidor.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'utiliza a chave pública para descriptografar a senha armazenada.'. Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    },
    {
      "id": "D",
      "text": "mantém a chave privada sob seu controle e apresenta prova criptográfica de posse correspondente à chave pública autorizada no servidor.",
      "is_correct": false,
      "explanation": "Incorreta. A opção apresenta 'mantém a chave privada sob seu controle e apresenta prova criptográfica de posse correspondente à chave pública autorizada no servidor.', mas não corresponde ao requisito específico do enunciado. O recurso/conceito adequado é 'utiliza a chave pública para descriptografar a senha armazenada.'. Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários. A confusão costuma ocorrer porque os itens pertencem ao mesmo ambiente de administração, mas possuem responsabilidades diferentes; identifique sempre a operação solicitada antes de escolher o comando ou componente."
    }
  ],
  "answer_key": "B",
  "explanation": {
    "resolution": "O enunciado exige identificar segurança e atualização. A análise deve começar pela operação ou característica solicitada e, em seguida, distinguir os componentes que aparecem como distratores. A alternativa B é a correta porque: Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários. As demais opções não atendem ao comando, pois descrevem ferramentas, mecanismos ou finalidades diferentes, conforme a análise individual de cada alternativa.",
    "theoretical_content": "Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários.\n\nNa administração de sistemas, é essencial relacionar cada ferramenta à camada em que atua: kernel e inicialização, processos e serviços, arquivos e permissões, rede, pacotes ou interface de administração. Em situações reais, confirme a distribuição, a versão e os privilégios necessários antes de executar comandos, sobretudo quando houver risco de interromper serviços ou alterar dados. Sempre que uma operação puder causar perda de informação, faça backup e valide o procedimento em ambiente controlado.",
    "bank_approach": "A questão explora segurança e atualização por meio de reconhecimento conceitual ou aplicação em cenário de administração. O estilo observado na COMPERVE combina enunciados objetivos, situações profissionais e alternativas tecnicamente próximas. O detalhe decisivo é a finalidade exata do recurso solicitado, não apenas a familiaridade do candidato com o nome da ferramenta. O mesmo conteúdo poderia ser cobrado por comparação entre comandos, análise de uma configuração ou julgamento de afirmativas.",
    "study_tip": "Associe cada ferramenta de segurança e atualização à ação que efetivamente realiza. Antes de marcar a alternativa, traduza o enunciado em um verbo operacional — consultar, instalar, iniciar, interromper, montar, proteger, listar ou alterar — e elimine as opções que executam outra ação. Em comandos, observe também a distribuição e a sintaxe.",
    "review_summary": "Ponto central: Na autenticação SSH por chave pública, o servidor possui a chave pública autorizada e o cliente prova que controla a chave privada correspondente, sem transmiti-la. A chave privada deve ser protegida, preferencialmente com frase-senha e permissões restritas. A verificação da identidade do servidor também é importante para evitar ataques intermediários.\n\nRevisão: identifique a finalidade da ferramenta; diferencie comandos de consulta, alteração e execução; considere a distribuição/versão; e não confunda recursos de nomes semelhantes. Em administração real, valide permissões, impacto e possibilidade de recuperação antes de aplicar mudanças."
  }
}
```

## Gabarito consolidado

01-C | 02-D | 03-C | 04-B | 05-A | 06-D | 07-C | 08-B | 09-A | 10-D | 11-C | 12-B | 13-A | 14-D | 15-A | 16-B | 17-A | 18-D | 19-C | 20-B | 21-A | 22-A | 23-C | 24-B | 25-A | 26-D | 27-C | 28-B | 29-A | 30-D | 31-C | 32-B | 33-A | 34-D | 35-C | 36-A | 37-A | 38-D | 39-C | 40-B | 41-A | 42-D | 43-A | 44-B | 45-A | 46-D | 47-C | 48-B | 49-A | 50-A | 51-C | 52-B | 53-A | 54-D | 55-C | 56-B | 57-A | 58-D | 59-C | 60-B | 61-A | 62-D | 63-C | 64-A | 65-A | 66-D | 67-C | 68-B | 69-A | 70-D | 71-A | 72-B | 73-A | 74-D | 75-C | 76-B | 77-A | 78-A | 79-C | 80-B | 81-A | 82-D | 83-C | 84-B | 85-A | 86-D | 87-C | 88-B | 89-A | 90-D | 91-C | 92-A | 93-A | 94-D | 95-C | 96-B | 97-A | 98-D | 99-A | 100-B

## Encerramento

Material concluído com **100 questões**, sendo **15 originais** e **85 inéditas**. Cada questão possui quatro alternativas, uma única resposta correta e explicações estruturadas para aprendizagem e revisão.
