# Home do Curso — SPA para Moodle

Projeto front-end em HTML, CSS e JavaScript puro, sem dependências externas de JavaScript.

## Estrutura

- `index.html` — shell único da SPA.
- `styles.css` — identidade visual, responsividade, estados e motion.
- `app.js` — renderização da Home, roteamento por hash e carrossel acessível.
- `assets/banner-curso-tutores.png` — banner responsivo do curso para tutores.

## Como executar localmente

Abra a pasta em um servidor HTTP local (por exemplo, a extensão Live Server do VS Code) e acesse `index.html`.

## Integração no Moodle

O projeto foi estruturado para funcionar como conteúdo web independente. Os links usam rotas hash (`#/...`) para não depender de configuração do servidor e evitar recarregamento completo da página. As rotas auxiliares estão como placeholders e podem ser substituídas pelos conteúdos do curso.

## Ajustes principais em relação à referência

- O texto "IMAGEM DE FUNDO" foi removido.
- A imagem do topo ocupa todo o hero como `background-image`, com recorte responsivo e gradientes de contraste.
- A transição para os indicadores do curso usa uma onda vetorial, e o botão do guia tem formato arredondado.
- O carrossel de módulos é manual (sem autoplay), responsivo e navegável por teclado.
- O layout inclui `skip-link`, foco visível, `aria-live` e `prefers-reduced-motion`.
