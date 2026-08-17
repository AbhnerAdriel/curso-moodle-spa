# Novo Marco Regulatório da EaD: legislação e aplicação na educação superior — SPA para Moodle

Projeto front-end em HTML, CSS e JavaScript puro, sem dependências de runtime ou etapa de build.

## Estrutura

- `index.html` — shell único e acessível da SPA.
- `styles.css` — identidade visual e componentes da Home.
- `module.css` — banner, conteúdo educacional, accordions e paginação dos módulos.
- `app.js` — templates, roteamento por hash, estados de rota e interações.
- `data/course-content.js` — registro central dos módulos, páginas e blocos de conteúdo.
- `assets/` — imagens otimizadas usadas pela Home e pelos módulos.

## Como executar localmente

Sirva a pasta por HTTP. Exemplos:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000/index.html`.

## Rotas

A SPA usa rotas hash, compatíveis com hospedagem estática e sem configuração de rewrite no servidor:

```text
#/                              Home
#/modulo/01/pagina/01           Página 01 do Módulo 01
#/modulo/01/pagina/02           Página 02 do Módulo 01
#/modulo/01/pagina/03           Página 03 do Módulo 01
#/modulo/01/pagina/04           Página 04 do Módulo 01
#/modulo/01/pagina/05           Página 05 do Módulo 01
#/modulo/01/pagina/06           Página 06 do Módulo 01
#/modulo/01/pagina/07           Página 07 do Módulo 01
#/modulo/01/pagina/08           Página 08 do Módulo 01
#/modulo/01/pagina/09           Página 09 do Módulo 01
#/modulo/01/pagina/10           Página 10 do Módulo 01
#/guia                          Guia do curso
#/avisos                        Avisos
#/biblioteca                    Biblioteca
```

Os cards dos módulos abrem a rota correspondente em uma nova aba, com `noopener` e indicação acessível. Rotas antigas no formato `#/modulo/1` continuam abrindo a primeira página do módulo.

Ao navegar dentro de um módulo, a primeira página abre no topo do banner; as páginas seguintes começam na barra de localização e progresso do módulo, mantendo toda a `module-toolbar` visível e sem rolagem animada entre as posições.

## Adicionar conteúdo

Todo o conteúdo é orientado a dados em `data/course-content.js`. Para publicar uma página nova:

1. localize o módulo no array `modules`;
2. adicione um objeto ao array `pages`, com `id`, `label`, `unit`, `title` e `blocks`;
3. use os blocos já suportados: `video`, `narrative`, `scenario`, `stickyStack`, `accordionGroup`, `ebookReading`, `conceptIntro`, `splitNarrative`, `verticalTimeline`, `horizontalAccordion`, `regulationContext`, `regulationComparison`, `caseStudy`, `questionPrompts`, `chapterDivider`, `activityComparison`, `mediatedActivityFocus`, `professionalRoles`, `references`, `trueFalse`, `multipleChoice` e `summary`; para mídia antes do título da página, acrescente `slot: 'lead'` ao bloco, ou use `layout: 'section'` para apresentá-la no fluxo do conteúdo;
4. mantenha os IDs numéricos com dois dígitos (`01`, `02`, `03`...).

Em títulos excepcionalmente longos, `headingSize: 'compact'` preserva a composição tipográfica em telas pequenas sem reduzir a escala das demais páginas.

A paginação, os links anterior/próxima, o total de páginas, o progresso e os estados de limite são gerados automaticamente a partir desse array.
Somente módulos com `status: 'published'` exibem suas páginas; módulos em `draft` permanecem protegidos pela tela de preparação, inclusive em acesso direto.

O bloco `stickyStack` cria uma pilha progressiva de conteúdos durante a rolagem. Em telas pequenas, impressão ou quando o usuário prefere movimento reduzido, os itens voltam automaticamente ao fluxo linear de leitura.

### Configurar o vídeo de apresentação do curso

Na propriedade `course.presentationVideo`, preencha `embedUrl` com a URL HTTPS de incorporação fornecida pelo Eduplay:

```js
presentationVideo: {
  type: 'video',
  embedUrl: 'https://url-de-incorporacao-do-eduplay'
}
```

Enquanto `embedUrl` estiver vazio, a Home apresenta o pôster e informa que o conteúdo audiovisual está em preparação.

### Configurar o vídeo do Eduplay

No bloco `video` da página, preencha `embedUrl` com a URL HTTPS de incorporação fornecida pelo Eduplay:

```js
{
  type: 'video',
  embedUrl: 'https://url-de-incorporacao-do-eduplay'
}
```

Enquanto `embedUrl` estiver vazio, a interface apresenta o pôster e informa que o conteúdo audiovisual está em preparação.

## Integração no Moodle

Publique todos os arquivos preservando a estrutura de diretórios. Se a SPA for incorporada em um `iframe` com `sandbox`, o ambiente do Moodle precisa permitir pop-ups (`allow-popups`) para que os módulos possam abrir em novas abas.

## Acessibilidade e comportamento

- um `h1` por rota e hierarquia semântica de headings;
- skip link, foco visível e reposicionamento de foco nas trocas de rota;
- links de módulos com aviso de nova aba;
- carrossel por teclado e cards fora da área visível removidos da ordem de tabulação;
- accordions nativos com estado expandido sincronizado;
- paginação com `aria-current`, anterior/próxima e estados indisponíveis;
- barra de progresso com atributos ARIA;
- animações desativadas com `prefers-reduced-motion`;
- layout responsivo para desktop, tablet e mobile.
