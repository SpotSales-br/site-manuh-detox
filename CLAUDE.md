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
- **Zustand** com persistência em `localStorage` para o carrinho
- Fontes `Inter` e `Playfair Display` via `next/font`
- Imagens:
  - Ativos locais em [public/](public/) (ex.: `hero-product.webp`, `plena-produto.webp`, `lifefit-produto.webp`) — fonte em [documents/](documents/) e copiados para `public/` quando usados
  - Remotas via `acdn-us.mitiendanube.com` (banners de depoimento) e `d1a9qnv764bsoo.cloudfront.net` (logo da marca) — ambos whitelisted em `next.config.mjs`
- Idioma do conteúdo: **pt-BR**, sem acentos/cedilhas nos textos do HTML (padrão herdado do protótipo — só reintroduzir com pedido explícito e em migração completa)

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
│   └── robots.ts               # robots.txt dinâmico
├── components/
│   ├── layout/                 # AnnouncementBar, Header, Footer, WhatsAppFloat
│   ├── sections/               # Hero, TrustBar, Products, TestimonialBanner1,
│   │                           # Benefits, About, TestimonialBanner2, FinalCTA
│   └── ui/                     # BrandLogo, SectionHeader, ProductCard, CartDrawer
├── data/                       # fonte canônica de conteúdo (sem banco)
│   ├── site.ts                 # identidade, contatos, announcements[], logoUrl
│   ├── products.ts             # catálogo (Plena 3X1, Lifefit) + aboutImage + banners
│   └── content.ts              # benefits, trustItems, aboutStats, navItems
├── lib/
│   ├── cart-store.ts           # zustand com persist (items, isOpen, selectors)
│   ├── checkout.ts             # abstração do gateway (stub atual → WhatsApp)
│   └── format.ts               # formatBRL + formatInstallment
└── types/
    └── product.ts              # Product, CartItem, CartLine, ProductTagVariant
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
5. `Products` — grid 2 colunas centralizado (`max-w-[900px]`)
6. `TestimonialBanner1` — carrossel infinito single-image com setas (desktop) e swipe (mobile); âncora `#depoimentos`
7. `Benefits`
8. `About` — seção escura "Nossa Historia" com imagem do Plena
9. `TestimonialBanner2` — imagem full-width
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
- `.animate-float` / `.animate-float-delayed` — float suave (legado, hoje sem uso no Hero)
- `.animate-marquee` — loop horizontal contínuo; usado pela TrustBar com duas Tracks idênticas (`translateX(-50%)` reseta exatamente numa duplicata)
- `.scrollbar-hide` — oculta scrollbar nativa em carrosséis horizontais

## Convenções de produto

- Catálogo mora em [src/data/products.ts](src/data/products.ts). Para adicionar produto, inclua um novo item tipado `Product` — nunca hard-code no JSX.
- Hoje o catálogo tem **dois produtos**: `plena` (tag `iniciante`, verde) e `lifefit` (tag `avancado`, preto). Cada produto tem um campo opcional `tag: { label, variant }` renderizado como pílula no `ProductCard`.
- Imagens de produto atualmente servidas do `/public` (ex.: `/plena-produto.webp`). Para novas imagens de produto, coloque o arquivo em `documents/` (fonte), copie para `public/` e referencie pelo caminho `/arquivo.webp`.
- Preços em **R$** formatados pelo `formatBRL` (`Intl.NumberFormat pt-BR`). Nunca escreva valores numéricos formatados manualmente.
- Parcelamento padrão é 6x sem juros, vindo de `product.installments`.
- Âncoras de navegação: `#produtos`, `#beneficios`, `#sobre`, `#depoimentos`, `#contato`.
- Links de WhatsApp: sempre via helper `whatsappLink(message?)` em [src/data/site.ts](src/data/site.ts) (usa `target="_blank"`).

## Announcements rotativas

`AnnouncementBar` consome `site.announcements: string[]` em [src/data/site.ts](src/data/site.ts) e alterna a cada 4s com fade. Para adicionar/editar mensagens, mexa apenas no array — o componente não precisa mudar.

## Carrossel de depoimentos

`TestimonialBanner1` é um carrossel infinito e client component. Mecânica:
- Os itens de `testimonialBanner1` são triplicados (A B C A B C A B C); o scroll inicia centralizado no item do meio da cópia central via `useLayoutEffect`.
- Um listener de scroll debounced (140ms) detecta em qual cópia o item centralizado caiu; se for na 1ª ou 3ª cópia, faz um "hop" silencioso de volta à cópia central (desativa `scroll-snap-type` durante o ajuste e restaura no próximo frame).
- Largura do card: `w-[85vw]` (mobile) / `w-[55vw]` (md+). Padding lateral do scroller: `px-[7.5vw] md:px-[22.5vw]` para centralizar a primeira/última imagem.
- Setas aparecem só a partir de `md`: fundo `bg-ink`, ícone `text-brand`.

## Checkout

Gateway externo ainda em definição. A função `startCheckout` em [src/lib/checkout.ts](src/lib/checkout.ts) é a **única** porta de saída do carrinho — toda troca de provedor acontece ali (switch por `NEXT_PUBLIC_CHECKOUT_PROVIDER`). Hoje o fallback monta uma mensagem de WhatsApp com os itens. Quando o provedor for escolhido (Mercado Pago / Stripe / Nuvemshop), adicionar a branch no `switch` e manter a mesma assinatura `CheckoutPayload → CheckoutResult`.

## Carrinho

- Estado global em [src/lib/cart-store.ts](src/lib/cart-store.ts) via zustand com persistência em `localStorage` (key `manuh-detox-cart`).
- Componentes que leem/mutam o estado são client components (`"use client"`).
- Sempre guardar contra hidratação: o `Header` e o `CartDrawer` usam `useEffect(setMounted)` para evitar mismatch de SSR. Siga esse padrão em qualquer novo componente que leia do store.
- Selectors helpers: `selectCartLines`, `selectCartTotal`, `selectCartCount`.
