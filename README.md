# Curso UFPE — SPA para Moodle

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
#/guia                          Guia do curso
#/avisos                        Avisos
#/biblioteca                    Biblioteca
```

Os cards dos módulos abrem a rota correspondente em uma nova aba, com `noopener` e indicação acessível. Rotas antigas no formato `#/modulo/1` continuam abrindo a primeira página do módulo.

Ao navegar dentro de um módulo, a primeira página abre no topo do banner; as páginas seguintes começam diretamente no início do conteúdo, após a barra de progresso, sem rolagem animada entre as posições.

## Adicionar conteúdo

Todo o conteúdo é orientado a dados em `data/course-content.js`. Para publicar uma página nova:

1. localize o módulo no array `modules`;
2. adicione um objeto ao array `pages`, com `id`, `label`, `unit`, `title` e `blocks`;
3. use os blocos já suportados: `video`, `narrative`, `scenario`, `stickyStack` e `accordionGroup`; para mídia antes do título da página, acrescente `slot: 'lead'` ao bloco;
4. mantenha os IDs numéricos com dois dígitos (`01`, `02`, `03`...).

A paginação, os links anterior/próxima, o total de páginas, o progresso e os estados de limite são gerados automaticamente a partir desse array.
Somente módulos com `status: 'published'` exibem suas páginas; módulos em `draft` permanecem protegidos pela tela de preparação, inclusive em acesso direto.

O bloco `stickyStack` cria uma pilha progressiva de conteúdos durante a rolagem. Em telas pequenas, impressão ou quando o usuário prefere movimento reduzido, os itens voltam automaticamente ao fluxo linear de leitura.

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
