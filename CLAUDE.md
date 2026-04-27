# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Escopo do projeto (IMPORTANTE)

Este projeto opera **exclusivamente** dentro do diretório:

```
C:\Users\xrl8e\Desktop\VibeCode\site - manuh detox
```

Não leia, grave, crie, mova nem referencie arquivos fora desse diretório em nenhuma hipótese. Todos os caminhos (absolutos ou relativos) devem permanecer dentro dessa pasta. Se uma tarefa parecer exigir arquivos fora desse escopo, pare e pergunte ao usuário antes de prosseguir.

## O que é este projeto

Site e-commerce da marca **Manuh Detox** — suplementos naturais voltados ao público feminino (emagrecimento, detox, bem-estar).

Stack de produção:
- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (config via `@theme` em [src/app/globals.css](src/app/globals.css))
- **GSAP** para animações de scroll (via [src/lib/gsap.ts](src/lib/gsap.ts) + [src/components/ScrollAnimations.tsx](src/components/ScrollAnimations.tsx))
- Fontes `Inter` e `Playfair Display` via `next/font`
- Imagens:
  - Ativos locais em [public/](public/) (ex.: `hero-product.webp`, `plena-produto.webp`, `lifefit-atualizado.webp`, `prova-social-01.webp` a `prova-social-13.webp`) — fonte em [documents/](documents/) e copiados para `public/` quando usados
  - Remotas via `acdn-us.mitiendanube.com` (banners de depoimento) e `d1a9qnv764bsoo.cloudfront.net` (logo da marca) — ambos whitelisted em `next.config.mjs`
- Idioma do conteúdo: **pt-BR** com acentuação e cedilhas corretas em todo o texto visível. Mantenha essa ortografia ao adicionar ou editar conteúdo (legados sem acento foram migrados em 2026-04-22). Identificadores internos que não aparecem na UI podem continuar sem acento — ex.: `ProductTagVariant: "avancado"`, âncoras `#beneficios`, chaves/slugs, `variant` em `tag`.

Canais de contato centralizados em [src/data/site.ts](src/data/site.ts): WhatsApp `5548999394790`, e-mail `manudetox@icloud.com`, Instagram `@manuhdetox`. Pode ser sobrescrito via `.env.local` (ver `.env.example`).

## Comandos

```bash
npm install
npm run dev          # dev server em http://localhost:3000
npm run build        # build de produção
npm run start        # executa build de produção
npm run lint         # ESLint via next lint
npm run typecheck    # tsc --noEmit
```

Não há testes automatizados. Toda verificação de UI deve ser feita manualmente no navegador nos breakpoints `max-width: 1024px` e `max-width: 768px`.

## Estrutura

```
src/
├── app/                        # App Router
│   ├── layout.tsx              # fontes, metadata, viewport
│   ├── page.tsx                # landing page (monta todas as seções)
│   ├── globals.css             # Tailwind v4 + @theme tokens + componentes base
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # sitemap.xml dinâmico
│   ├── robots.ts               # robots.txt dinâmico
│   └── api/
│       └── checkout/
│           └── appmax/
│               └── route.ts    # API route para geração de link Appmax dinâmico
├── components/
│   ├── layout/                 # AnnouncementBar, Header, Footer, WhatsAppFloat
│   ├── sections/               # Hero, TrustBar, SocialProofBanner, Benefits,
│   │                           # Products, HowToUse, TestimonialMarquee, FinalCTA
│   ├── product/                # BuyBox, Composition, FAQ, HowItWorks,
│   │                           # ManuelaStory, ProductBreadcrumb, ProductGallery,
│   │                           # ProductTrustBadges, UsageSteps
│   ├── ui/                     # BrandLogo, SectionHeader, ProductCard, Reveal, Parallax
│   └── ScrollAnimations.tsx    # registra data-animate observers (GSAP)
├── data/                       # fonte canônica de conteúdo (sem banco)
│   ├── site.ts                 # identidade, contatos, announcements[], logoUrl
│   ├── products.ts             # catálogo (Plena, Lifefit) + testimonialBanner1/2
│   ├── content.ts              # benefits, trustItems, navItems, howToUseSteps,
│   │                           # testimonialCards, productPageNavItems
│   └── product-details.ts      # productFaq, productTrustBadges, productStats
├── lib/
│   ├── checkout.ts             # startCheckout: retorna checkoutUrl do PricingOption
│   ├── appmax-products.server.ts  # mapeamento optionId → Appmax product IDs
│   ├── gsap.ts                 # inicialização do GSAP
│   └── format.ts               # formatBRL + formatInstallment
└── types/
    └── product.ts              # Product, PricingOption, ProductTagVariant
public/                         # imagens locais servidas por /<arquivo>
documents/                      # ativos-fonte (fotos de produto, material bruto)
docs/
└── prototype.html              # protótipo original preservado como referência visual
```

## Ordem das seções ([src/app/page.tsx](src/app/page.tsx))

1. `AnnouncementBar` — faixa rosa no topo com mensagens rotativas (4s), sticky
2. `Header` — preto (`bg-ink`), sticky abaixo da announcement (`top-[38px]`)
3. `Hero` — título + CTAs + imagem local em `/hero-product.webp`
4. `TrustBar` — marquee infinito de `trustItems` (não sticky)
5. `SocialProofBanner` — imagem full-width (`testimonialBanner2`) logo após a TrustBar
6. `Benefits` — âncora `#beneficios`
7. `Products` — grid 2 colunas centralizado (`max-w-[900px]`); âncora `#produtos`
8. `HowToUse` — 3 cards de modo de uso; âncora `#modo-de-uso`
9. `TestimonialMarquee` — marquee infinito de fotos locais de provas sociais com lightbox; âncora `#depoimentos`
10. `FinalCTA` — dois botões (WhatsApp + Instagram), âncora `#contato`
11. `Footer` + `WhatsAppFloat`

## Sticky stack

`AnnouncementBar` (`top-0 z-[60]`, ~38px) e `Header` (`top-[38px] z-50`, 72px) ficam empilhados colados no topo. A `TrustBar` **não** é sticky. Se precisar empilhar outra faixa sticky no topo, some as alturas para calcular o próximo `top`.

## Design tokens

Tokens em `@theme` no `src/app/globals.css` geram utilitários Tailwind (ex.: `bg-brand`, `text-ink-muted`, `border-line`). Sempre prefira as variáveis/utilitários existentes a cores hard-coded.

- `--color-brand` `#C45E8A` — rosa da marca (`bg-brand`, `text-brand`)
- `--color-brand-light` `#F3E0EA` / `--color-brand-dark` `#A14470`
- `--color-leaf` `#5A8F5C` + `--color-leaf-light` (verde "natural") — usado na tag `iniciante`
- `--color-ink` / `--color-ink-soft` / `--color-ink-muted` — hierarquia de texto; `bg-ink` é o preto usado no header e na tag `avancado`
- `--color-line` — bordas
- `--font-body` (Inter) / `--font-display` (Playfair) — expostos pelo `next/font`

Classes utilitárias em `@layer components`: `.container-site`, `.section`, `.section-title`, `.section-tag`, `.section-subtitle`, `.btn-primary`, `.btn-secondary`, `.btn-white`.

Animações/keyframes definidos fora do `@layer`:
- `.animate-float` / `.animate-float-delayed` — float suave (legado)
- `.animate-marquee` — loop horizontal contínuo; usado pela `TrustBar` e `TestimonialMarquee` com duas tracks idênticas (`translateX(-50%)` reseta exatamente na duplicata)
- `.scrollbar-hide` — oculta scrollbar nativa em carrosséis horizontais

## Animações GSAP

`ScrollAnimations` é um client component montado no `layout.tsx` que observa atributos `data-animate` no DOM e dispara animações ao entrar no viewport.

Atributos disponíveis:
- `data-animate="fade-up"` — sobe com fade
- `data-animate="scale-in"` — cresce com fade
- `data-animate="fade-left"` — desliza da direita com fade
- `data-animate="slide-blur"` — sobe com blur
- `data-animate="stagger-rotate"` — agrupa filhos `[data-animate-item]` em stagger com leve rotação
- `data-animate-delay="0.15"` — delay em segundos
- `data-animate-stagger="0.18"` — intervalo entre filhos no stagger

## Convenções de produto

- Catálogo mora em [src/data/products.ts](src/data/products.ts). Para adicionar produto, inclua um novo item tipado `Product` — nunca hard-code no JSX.
- Hoje o catálogo tem **dois produtos**: `plena` (tag `iniciante`, verde) e `lifefit` (tag `avancado`, preto). Cada produto tem `tag: { label, variant }` renderizado como pílula no `ProductCard`.
- Cada produto possui `pricingOptions: PricingOption[]` com `checkoutUrl` fixo (link do `carrinho.app`). Ao adicionar novo produto ou kit, registre também o ID Appmax em `src/lib/appmax-products.server.ts`.
- Galeria: `galleryImages: string[]` com caminhos locais; a página de produto usa `ProductGallery` para exibir as imagens em sequência.
- Imagens de produto servidas do `/public`. Para novas imagens, coloque em `documents/` (fonte), copie para `public/` e referencie pelo caminho `/arquivo.webp`.
- Preços em **R$** formatados pelo `formatBRL` (`Intl.NumberFormat pt-BR`). Nunca escreva valores numéricos formatados manualmente.
- Âncoras de navegação (home): `#produtos`, `#beneficios`, `#modo-de-uso`, `#depoimentos`, `#contato`.
- Links de WhatsApp: sempre via helper `whatsappLink(message?)` em [src/data/site.ts](src/data/site.ts) (usa `target="_blank"`).

## Announcements rotativas

`AnnouncementBar` consome `site.announcements: string[]` em [src/data/site.ts](src/data/site.ts) e alterna a cada 4s com fade. Para adicionar/editar mensagens, mexa apenas no array — o componente não precisa mudar.

## TestimonialMarquee (provas sociais)

`TestimonialMarquee` em [src/components/sections/TestimonialMarquee.tsx](src/components/sections/TestimonialMarquee.tsx) é um client component. Mecânica:
- Carrega 13 imagens locais (`/prova-social-01.webp` a `/prova-social-13.webp`) em marquee horizontal infinito (duas tracks idênticas com `animate-marquee`).
- Pausa ao hover (`group-hover:[animation-play-state:paused]`).
- Clique num card abre lightbox fullscreen com a imagem ampliada; fecha via botão ✕ ou tecla `Escape`.
- Cards: `h-[320px] w-[240px]` mobile / `h-[360px] w-[270px]` md+, bordas arredondadas `rounded-[16px]`.
- Gradientes laterais (`from-white to-transparent`) mascaram as bordas do marquee.

Para adicionar mais fotos de provas sociais: coloque o arquivo em `public/` seguindo o padrão `prova-social-NN.webp` e atualize o comprimento do `Array.from` no componente.

## Página de produto (`/produto/[slug]`)

Rota dinâmica em [src/app/produto/[slug]/page.tsx](src/app/produto/%5Bslug%5D/page.tsx). Seções na ordem:

1. `ProductBreadcrumb` — trilha Home > Produto
2. `ProductGallery` + `ProductTrustBadges` — galeria com miniatura e badges
3. `BuyBox` — seletor de kit + botão de compra (chama `startCheckout`)
4. Bloco "Sobre o produto" (`longDescription`)
5. `HowItWorks` — lista de benefícios do produto
6. `Composition` — ingredientes + diferencial
7. `UsageSteps` — instruções de uso
8. `ManuelaStory` — história da fundadora
9. `FAQ` — perguntas frequentes de `productFaq`

Dados extras da página de produto estão em [src/data/product-details.ts](src/data/product-details.ts): `productFaq`, `productTrustBadges`, `productStats`.

## Checkout

`startCheckout` em [src/lib/checkout.ts](src/lib/checkout.ts) recebe `{ product, option, quantity }` e retorna `{ url: option.checkoutUrl, target: "_blank" }`. O link de checkout é fixo por `PricingOption`, apontando para `manuhdetox1776883365953.carrinho.app`.

Existe também uma API route em [src/app/api/checkout/appmax/route.ts](src/app/api/checkout/appmax/route.ts) que gera links de pagamento dinâmicos via Appmax (requer `APPMAX_TOKEN` no ambiente). O mapeamento de `optionId` → `appmaxProductId` está em [src/lib/appmax-products.server.ts](src/lib/appmax-products.server.ts). Essa rota não é usada pelo fluxo atual (links fixos); está preparada para ativação futura.
