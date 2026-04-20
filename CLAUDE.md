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
- Imagens remotas servidas por `acdn-us.mitiendanube.com` (whitelisted em `next.config.mjs`) — NÃO baixe nem reempacote
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
│   ├── sections/               # Hero, TrustBar, Products, Benefits, HowItWorks,
│   │                           # About, Testimonials, CTABanner, Instagram
│   └── ui/                     # BrandLogo, SectionHeader, ProductCard, CartDrawer
├── data/                       # fonte canônica de conteúdo (sem banco)
│   ├── site.ts                 # identidade + contatos + helpers de link
│   ├── products.ts             # catálogo (Glowvena, PLENA 3X1, Diamond + kits)
│   └── content.ts              # benefits, trustItems, howItWorksSteps, testimonials, navItems
├── lib/
│   ├── cart-store.ts           # zustand com persist (items, isOpen, selectors)
│   ├── checkout.ts             # abstração do gateway (stub atual → WhatsApp)
│   └── format.ts               # formatBRL + formatInstallment
└── types/
    └── product.ts              # Product, CartItem, CartLine
docs/
└── prototype.html              # protótipo original preservado como referência visual
```

## Design tokens

Tokens em `@theme` no `src/app/globals.css` geram utilitários Tailwind (ex.: `bg-brand`, `text-ink-muted`, `border-line`). Sempre prefira as variáveis/utilitários existentes a cores hard-coded.

- `--color-brand` `#C45E8A` — rosa da marca (`bg-brand`, `text-brand`)
- `--color-brand-light` `#F3E0EA` / `--color-brand-dark` `#A14470`
- `--color-leaf` `#5A8F5C` + `--color-leaf-light` (verde "natural")
- `--color-ink` / `--color-ink-soft` / `--color-ink-muted` — hierarquia de texto
- `--color-line` — bordas
- `--font-body` (Inter) / `--font-display` (Playfair) — expostos pelo `next/font`

Classes utilitárias já definidas em `@layer components`: `.container-site`, `.section`, `.section-title`, `.section-tag`, `.section-subtitle`, `.btn-primary`, `.btn-secondary`, `.btn-white`.

## Convenções de produto

- Catálogo mora em [src/data/products.ts](src/data/products.ts). Para adicionar produto, inclua um novo item tipado `Product` — nunca hard-code no JSX.
- Preços em **R$** formatados pelo `formatBRL` (`Intl.NumberFormat pt-BR`). Nunca escreva valores numéricos formatados manualmente.
- Parcelamento padrão é 6x sem juros, vindo de `product.installments`.
- Âncoras de navegação: `#produtos`, `#beneficios`, `#como-funciona`, `#sobre`, `#depoimentos`, `#contato`.
- Links de WhatsApp: sempre via helper `whatsappLink(message?)` em [src/data/site.ts](src/data/site.ts) (usa `target="_blank"`).

## Checkout

Gateway externo ainda em definição. A função `startCheckout` em [src/lib/checkout.ts](src/lib/checkout.ts) é a **única** porta de saída do carrinho — toda troca de provedor acontece ali (switch por `NEXT_PUBLIC_CHECKOUT_PROVIDER`). Hoje o fallback monta uma mensagem de WhatsApp com os itens. Quando o provedor for escolhido (Mercado Pago / Stripe / Nuvemshop), adicionar a branch no `switch` e manter a mesma assinatura `CheckoutPayload → CheckoutResult`.

## Carrinho

- Estado global em [src/lib/cart-store.ts](src/lib/cart-store.ts) via zustand com persistência em `localStorage` (key `manuh-detox-cart`).
- Componentes que leem/mutam o estado são client components (`"use client"`).
- Sempre guardar contra hidratação: o `Header` e o `CartDrawer` usam `useEffect(setMounted)` para evitar mismatch de SSR. Siga esse padrão em qualquer novo componente que leia do store.
- Selectors helpers: `selectCartLines`, `selectCartTotal`, `selectCartCount`.
