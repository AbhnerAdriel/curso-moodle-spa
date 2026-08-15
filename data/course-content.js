(() => {
  'use strict';

  const deepFreeze = (value) => {
    if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  };

  window.COURSE_CONTENT = deepFreeze({
    course: {
      title: 'Novo Marco Regulatório da EaD: legislação e aplicação na educação superior',
      shortTitle: 'Novo Marco Regulatório da EaD',
      presentationVideo: {
        type: 'video',
        title: 'Vídeo de apresentação',
        description: 'Novo Marco Regulatório da EaD: legislação e aplicação na educação superior',
        provider: 'Eduplay',
        embedUrl: 'https://eduplay.rnp.br/app/video/embed/465268',
        poster: 'assets/mulher-negra-olhando-para-com.webp',
        posterAlt: 'Mulher participando de uma formação on-line em um notebook'
      }
    },
    modules: [
      {
        id: '01',
        status: 'published',
        cardTitle: 'Fundamentos e evolução histórica da EaD',
        title: 'Fundamentos e Evolução Histórica da Educação a Distância',
        banner: 'assets/banner-modulo-01.webp',
        bannerPosition: 'center 54%',
        pages: [
          {
            id: '01',
            label: 'Introdução',
            unit: 'Unidade 01',
            title: 'Panorama da Educação a Distância e transição para o novo marco regulatório',
            blocks: [
              {
                type: 'video',
                slot: 'lead',
                title: 'Vídeo de abertura',
                description: 'Panorama da Educação a Distância',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/465269',
                poster: 'assets/mulher-negra-olhando-para-com.webp',
                posterAlt: 'Mulher estudando em um ambiente virtual de aprendizagem'
              },
              {
                type: 'narrative',
                heading: 'Apresentação',
                paragraphs: [
                  'A Educação a Distância não surgiu com a internet nem se desenvolveu de forma linear. Sua trajetória acompanha as transformações sociais, tecnológicas e educacionais do país, passando pelo ensino por correspondência, pelo rádio, pela televisão educativa, pelos ambientes virtuais de aprendizagem e pelos atuais modelos de interação digital.',
                  'Ao longo desse percurso, a EaD ampliou o acesso à educação superior, alcançou municípios distantes dos grandes centros universitários e se consolidou como uma estratégia de interiorização da educação pública. O Sistema Universidade Aberta do Brasil ocupa lugar de destaque nesse processo, ao articular a União, a CAPES, estados, municípios e instituições públicas de ensino superior para ofertar cursos em diferentes territórios.',
                  'A expansão da modalidade também trouxe questionamentos sobre qualidade acadêmica, acompanhamento dos estudantes, avaliação, infraestrutura, formação das equipes e responsabilidades institucionais. Esses desafios levaram à construção progressiva de normas específicas para a EaD.',
                  'Este eixo apresenta esse percurso e mostra como a expansão da EaD conduziu à atualização de sua regulamentação. O Decreto nº 9.057/2017 é estudado apenas como parte dessa trajetória histórica, pois foi revogado pelo Decreto nº 12.456/2025, que estabelece o marco regulatório vigente.'
                ]
              },
              {
                type: 'accordionGroup',
                label: 'Objetivos da unidade',
                items: [
                  {
                    id: 'objetivo-geral',
                    title: 'Objetivo geral',
                    paragraphs: [
                      'Compreender a trajetória de constituição e expansão da Educação a Distância no Brasil, relacionando a democratização do acesso, à atuação do Sistema UAB e a busca pela qualidade acadêmica ao desenvolvimento da regulação da modalidade.'
                    ]
                  },
                  {
                    id: 'objetivos-aprendizagem',
                    title: 'Objetivos de aprendizagem',
                    paragraphs: [
                      'Ao concluir este eixo, espera-se que o participante consiga:'
                    ],
                    list: [
                      'caracterizar a Educação a Distância como uma forma própria de organização dos processos de ensino e aprendizagem;',
                      'reconhecer os principais momentos da trajetória histórica da EaD no Brasil;',
                      'relacionar a expansão da modalidade aos desafios de qualidade, acompanhamento e avaliação;',
                      'diferenciar os marcos históricos da legislação das normas atualmente vigentes;',
                      'reconhecer que o Decreto nº 9.057/2017 foi revogado e que o Decreto nº 12.456/2025 constitui o atual marco regulatório da EaD na graduação.'
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: '02',
            label: 'Situação-problema',
            unit: 'Situação-problema',
            title: 'Expandir o acesso e preservar a qualidade',
            blocks: [
              {
                type: 'scenario',
                paragraphs: [
                  'Uma licenciatura ofertada pela UAB/UFPE atende estudantes de diferentes municípios. Alguns residem longe do polo, conciliam os estudos com o trabalho e dependem do ambiente virtual para acompanhar as atividades.',
                  'Nos últimos meses, a equipe identificou estudantes que acessam os materiais, mas participam pouco das atividades; dificuldades para acompanhar estudantes com baixa frequência; dúvidas sobre o papel do polo nas atividades presenciais; necessidade de melhorar a comunicação entre estudantes e equipe do curso; e incertezas sobre as mudanças trazidas pelo novo marco regulatório.',
                  'Durante uma reunião, um integrante da equipe afirma: "O Decreto nº 9.057/2017 ainda é a principal norma da EaD. Podemos continuar organizando o curso exatamente como fazíamos antes." Outro integrante responde: "Esse decreto foi revogado. Precisamos compreender as mudanças introduzidas pelo Decreto nº 12.456/2025 e analisar como elas afetam a organização dos cursos."'
                ]
              },
              {
                type: 'stickyStack',
                heading: 'Para refletir',
                items: [
                  {
                    id: 'afirmacoes',
                    text: 'Qual das duas afirmações está correta?'
                  },
                  {
                    id: 'regulacao',
                    text: 'Por que o crescimento da EaD exigiu novas formas de regulação?'
                  },
                  {
                    id: 'acesso-qualidade',
                    text: 'Como é possível ampliar o acesso sem diminuir a qualidade acadêmica?'
                  },
                  {
                    id: 'uab-polos-equipes',
                    text: 'Que papel a UAB, os polos e as equipes dos cursos exercem nesse processo?'
                  },
                  {
                    id: 'tutor-legislacao',
                    text: 'Por que o tutor precisa conhecer a trajetória e a situação atual da legislação?'
                  }
                ]
              }
            ]
          },
          {
            id: '03',
            label: 'Conceitos e características',
            unit: 'Unidade 01',
            title: 'Educação a Distância: conceitos e características',
            blocks: [
              {
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar:',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa. Clique em cada volume para visualizar as páginas e os temas correspondentes.',
                volumes: [
                  {
                    id: 'volume-1',
                    title: 'Volume 1',
                    entries: [
                      {
                        pages: '4',
                        content: 'Apresentação e contextualização histórica da EaD.'
                      },
                      {
                        pages: '5–6',
                        content: 'Conceituação da EaD e elementos que caracterizam a modalidade.'
                      },
                      {
                        pages: '7–8',
                        content: 'Contribuições de Moore e Chaves: diálogo, estrutura, autonomia e mediação.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'conceptIntro',
                heading: 'Educação a Distância',
                paragraphs: [
                  'A Educação a Distância não se resume ao uso da internet nem à ausência de uma sala de aula física. Trata-se de uma forma própria de organizar os processos de ensino e aprendizagem, capaz de promover a aprendizagem quando professores e estudantes estão separados no espaço e, em muitos casos, também no tempo.',
                  'A modalidade combina tecnologias de informação e comunicação, flexibilidade de tempos e espaços, autonomia do estudante, planejamento, acompanhamento e mediação pedagógica. Nenhum desses elementos, isoladamente, define a EaD. O que a caracteriza é a articulação entre eles dentro de uma proposta pedagógica organizada.',
                  'Moore destaca três dimensões: diálogo, estrutura e autonomia. Quanto maior a distância transacional entre estudantes e professores, maior é a necessidade de planejamento, comunicação e acompanhamento. Chaves, por sua vez, chama atenção para a função das tecnologias como meios de comunicação pedagógica, e não como finalidade do processo educativo.'
                ]
              },
              {
                type: 'horizontalAccordion',
                heading: 'O que caracteriza a Educação a Distância?',
                instruction: 'Selecione cada elemento para conhecer seu papel na organização da modalidade.',
                activeItem: 'separacao-espacial',
                items: [
                  {
                    id: 'separacao-espacial',
                    icon: 'spatial',
                    title: 'Separação espacial',
                    description: 'Na EaD, estudantes e professores podem estar em locais diferentes durante grande parte do processo formativo. Essa distância física não significa ausência de interação: a aprendizagem é organizada para promover comunicação, orientação e participação ao longo do percurso.'
                  },
                  {
                    id: 'uso-tecnologias',
                    icon: 'technology',
                    title: 'Uso de tecnologias',
                    description: 'Ambientes virtuais de aprendizagem, videoconferências, fóruns, vídeos, materiais digitais e outras tecnologias apoiam a comunicação, o acesso aos conteúdos e a realização das atividades. A tecnologia funciona como meio para aproximar pessoas, conteúdos e experiências de aprendizagem.'
                  },
                  {
                    id: 'flexibilidade',
                    icon: 'flexibility',
                    title: 'Flexibilidade',
                    description: 'A EaD amplia as possibilidades de organização dos tempos e espaços de estudo. Dependendo da proposta do curso, o estudante pode acessar conteúdos e realizar determinadas atividades em diferentes horários e locais, respeitando os prazos e as atividades previstas.'
                  },
                  {
                    id: 'autonomia-estudante',
                    icon: 'autonomy',
                    title: 'Autonomia do estudante',
                    description: 'O estudante assume papel ativo na organização de sua aprendizagem. Planejar os estudos, acompanhar os prazos, acessar os materiais, participar das atividades e identificar dificuldades fazem parte desse processo. Autonomia, entretanto, não significa estudar sozinho.'
                  },
                  {
                    id: 'mediacao-pedagogica',
                    icon: 'mediation',
                    title: 'Mediação pedagógica',
                    description: 'Professores, tutores e demais profissionais atuam na orientação e na interação com os estudantes. A mediação ajuda a contextualizar conteúdos, esclarecer dúvidas, estimular a participação e estabelecer conexões entre os conhecimentos estudados e as experiências dos participantes.'
                  },
                  {
                    id: 'acompanhamento-aprendizagem',
                    icon: 'tracking',
                    title: 'Acompanhamento da aprendizagem',
                    description: 'A EaD envolve acompanhamento sistemático da participação e do desempenho dos estudantes. Acessos ao ambiente virtual, realização de atividades, participação em fóruns, avaliações e outras evidências podem apoiar a identificação de dificuldades e orientar intervenções pedagógicas.'
                  },
                  {
                    id: 'momentos-presenciais',
                    icon: 'presence',
                    title: 'Momentos presenciais',
                    description: 'A Educação a Distância pode incluir atividades presenciais previstas na organização do curso e na legislação aplicável. Esses momentos podem ocorrer na instituição ou nos polos de apoio e favorecem experiências acadêmicas que exigem interação presencial, infraestrutura específica ou acompanhamento direto.'
                  }
                ]
              },
              {
                type: 'video',
                layout: 'section',
                title: 'Educação a Distância: conceitos e características',
                description: 'Aprofundamento em vídeo',
                provider: 'Eduplay',
                embedUrl: 'https://eduplay.rnp.br/app/video/embed/464645'
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'A Educação a Distância consiste em transferir para a internet as mesmas práticas utilizadas em uma sala de aula presencial.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'A EaD demanda reorganização da comunicação, da interação, do acompanhamento, da avaliação e das responsabilidades dos profissionais envolvidos.'
              }
            ]
          },
          {
            id: '04',
            label: 'Evolução histórica da EaD',
            unit: 'Unidade 01',
            title: 'Capítulo 2 - Da correspondência à Universidade Aberta do Brasil',
            headingSize: 'compact',
            blocks: [
              {
                type: 'ebookReading',
                heading: 'Conteúdo do e-book a utilizar',
                introduction: 'Consulte os trechos indicados dos e-books para aprofundar os conteúdos abordados nesta etapa.',
                volumes: [
                  {
                    id: 'volume-1',
                    title: 'Volume 1',
                    entries: [
                      {
                        pages: '9',
                        content: 'Primeiras experiências brasileiras de ensino por correspondência.'
                      },
                      {
                        pages: '10-11',
                        content: 'Rádio, televisão educativa, MEB e teleducação.'
                      },
                      {
                        pages: '12-13',
                        content: 'LDB e reconhecimento jurídico da EaD.'
                      },
                      {
                        pages: '14-15',
                        content: 'Sistema UAB, rede de cooperação e polos de apoio presencial.'
                      },
                      {
                        pages: '16',
                        content: 'Democratização do acesso, interiorização e equidade territorial.'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'splitNarrative',
                accessibleHeading: 'Contextualização histórica da Educação a Distância no Brasil',
                lead: 'As primeiras experiências brasileiras de Educação a Distância remontam ao início do século XX e estavam ligadas, sobretudo, à formação profissional por correspondência. Em um país marcado por desigualdades educacionais e limitações de infraestrutura, os materiais enviados pelo correio permitiram levar oportunidades de formação a pessoas que não tinham acesso à escola formal.',
                paragraphs: [
                  'Com a expansão dos meios de comunicação, o rádio e a televisão passaram a ser utilizados em iniciativas educativas. O Movimento de Educação de Base, os telecursos e os programas de educação supletiva mostram que a trajetória da EaD está relacionada tanto à evolução tecnológica quanto à democratização do acesso à educação.',
                  'Em 1996, o art. 80 da Lei de Diretrizes e Bases reconheceu juridicamente a Educação a Distância e atribuiu ao poder público a responsabilidade de regulamentar a oferta, o credenciamento, a avaliação e a emissão de diplomas.',
                  'Em 2006, foi instituído o Sistema Universidade Aberta do Brasil. A UAB não é uma universidade autônoma, mas uma rede de cooperação que reúne a União, a CAPES, estados, municípios e instituições públicas de ensino superior. As instituições ofertam os cursos e certificam os estudantes; a CAPES coordena a política e financia bolsas; estados e municípios colaboram com a manutenção dos polos.',
                  'Os polos funcionam como pontos de conexão entre as universidades públicas e os territórios. Neles ocorrem avaliações presenciais, atividades práticas, orientações acadêmicas e suporte administrativo e tecnológico. Essa organização contribui para interiorizar a educação superior e reduzir barreiras geográficas.'
                ]
              },
              {
                type: 'verticalTimeline',
                eyebrow: 'Percurso histórico',
                heading: 'Linha do tempo da EaD',
                items: [
                  {
                    id: 'correspondencia',
                    title: 'Correspondência'
                  },
                  {
                    id: 'radio',
                    title: 'Rádio'
                  },
                  {
                    id: 'televisao-educativa',
                    title: 'Televisão educativa'
                  },
                  {
                    id: 'ldb',
                    title: 'LDB'
                  },
                  {
                    id: 'ambientes-virtuais-aprendizagem',
                    title: 'Ambientes Virtuais de Aprendizagem'
                  },
                  {
                    id: 'uab',
                    title: 'UAB'
                  },
                  {
                    id: 'novo-marco-regulatorio',
                    title: 'Novo marco regulatório'
                  }
                ]
              },
              {
                type: 'trueFalse',
                heading: 'Atividade rápida',
                question: 'A presença de uma norma na linha do tempo legislativa indica sua vigência atual.',
                correctAnswer: false,
                correctAnswerLabel: 'Falso',
                explanation: 'A presença de uma norma na linha do tempo indica sua importância histórica, e não sua vigência atual. Os decretos revogados devem ser identificados visualmente como "revogado".'
              }
            ]
          }
        ]
      },
      {
        id: '02',
        status: 'draft',
        cardTitle: 'Nome do Módulo 2',
        title: 'Módulo 02',
        pages: []
      },
      {
        id: '03',
        status: 'draft',
        cardTitle: 'Nome do Módulo 3',
        title: 'Módulo 03',
        pages: []
      },
      {
        id: '04',
        status: 'draft',
        cardTitle: 'Nome do Módulo 4',
        title: 'Módulo 04',
        pages: []
      }
    ]
  });
})();
