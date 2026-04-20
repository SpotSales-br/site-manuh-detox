# Manuh Detox

Site e-commerce da marca **Manuh Detox** — suplementos naturais voltados ao publico feminino (emagrecimento, detox, bem-estar).

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` em `src/app/globals.css`)
- **Zustand** com persistencia em `localStorage` para o carrinho
- Fontes `Inter` e `Playfair Display` via `next/font`

Idioma do conteudo: **pt-BR** (sem acentos/cedilhas nos textos, padrao herdado do prototipo).

## Requisitos

- Node `>=18.18` (LTS 20 recomendado, ver `.nvmrc`)
- npm

## Setup

```bash
npm install
cp .env.example .env.local   # opcional — sobrescreve contatos default
npm run dev
```

Dev server em http://localhost:3000.

## Scripts

| Comando             | Descricao                        |
| ------------------- | -------------------------------- |
| `npm run dev`       | Dev server                       |
| `npm run build`     | Build de producao                |
| `npm run start`     | Serve o build de producao        |
| `npm run lint`      | ESLint (`next lint`)             |
| `npm run typecheck` | `tsc --noEmit`                   |

Nao ha testes automatizados. Verificacao de UI e manual — testar nos breakpoints `max-width: 1024px` e `max-width: 768px`.

## Estrutura

```
src/
├── app/           App Router (layout, page, sitemap, robots, globals.css)
├── components/
│   ├── layout/    AnnouncementBar, Header, Footer, WhatsAppFloat
│   ├── sections/  Hero, TrustBar, Products, Benefits, HowItWorks, About,
│   │              Testimonials, CTABanner, Instagram
│   └── ui/        BrandLogo, SectionHeader, ProductCard, CartDrawer
├── data/          site.ts, products.ts, content.ts (fonte canonica de conteudo)
├── lib/           cart-store.ts, checkout.ts, format.ts
└── types/         product.ts
docs/
└── prototype.html protótipo original (referencia visual)
```

## Conteudo & Catalogo

- Catalogo em [`src/data/products.ts`](src/data/products.ts) — adicionar produto = novo item tipado `Product`, nunca hard-code no JSX.
- Textos de secoes em [`src/data/content.ts`](src/data/content.ts).
- Contatos e identidade em [`src/data/site.ts`](src/data/site.ts) (WhatsApp, e-mail, Instagram). Valores podem ser sobrescritos via `.env.local` — ver [`.env.example`](.env.example).
- Precos em `R$` sao formatados pelo helper `formatBRL` em [`src/lib/format.ts`](src/lib/format.ts).

## Carrinho

Estado global em [`src/lib/cart-store.ts`](src/lib/cart-store.ts) via Zustand com persistencia em `localStorage` (key `manuh-detox-cart`). Componentes que leem o store sao client components e usam guard de hidratacao (`useEffect(setMounted)`) para evitar mismatch SSR.

## Checkout

Gateway externo ainda em definicao. [`src/lib/checkout.ts`](src/lib/checkout.ts) e a **unica** porta de saida do carrinho — todo provedor futuro entra no `switch` por `NEXT_PUBLIC_CHECKOUT_PROVIDER`, mantendo a assinatura `CheckoutPayload → CheckoutResult`. O fallback atual monta uma mensagem de WhatsApp com os itens.

## Design tokens

Tokens em `@theme` no [`src/app/globals.css`](src/app/globals.css) expoem utilitarios Tailwind (`bg-brand`, `text-ink-muted`, `border-line`, etc.). Sempre prefira tokens a cores hard-coded.

| Token                 | Valor        | Uso                              |
| --------------------- | ------------ | -------------------------------- |
| `--color-brand`       | `#C45E8A`    | Rosa da marca                    |
| `--color-brand-light` | `#F3E0EA`    | Fundos/realces                   |
| `--color-brand-dark`  | `#A14470`    | Hover/active                     |
| `--color-leaf`        | `#5A8F5C`    | Verde "natural"                  |
| `--color-ink*`        | —            | Hierarquia de texto              |
| `--color-line`        | —            | Bordas                           |

Componentes utilitarios ja definidos: `.container-site`, `.section`, `.section-title`, `.section-tag`, `.section-subtitle`, `.btn-primary`, `.btn-secondary`, `.btn-white`.

## Variaveis de ambiente

Ver [`.env.example`](.env.example). Se nenhum `.env.local` for criado, o site usa os defaults em `src/data/site.ts`.

## Deploy na Vercel

Next 15 e zero-config na Vercel — nao ha `vercel.json`. Ao importar o repo, a plataforma detecta o framework e usa `next build` automaticamente.

### Passos

1. **Vercel → New Project → Import Git Repository** (`SpotSales-br/site-manuh-detox`).
2. Framework Preset: `Next.js` (auto-detectado). Node Version: `20.x`.
3. Configurar as variaveis de ambiente (proximo item).
4. Deploy.
5. Apontar o dominio `manuhdetox.com.br` em **Settings → Domains**.

### Variaveis de ambiente na Vercel

Definir em **Settings → Environment Variables** (marcar `Production` e `Preview`):

| Variavel                      | Exemplo                        | Obrigatoria |
| ----------------------------- | ------------------------------ | ----------- |
| `NEXT_PUBLIC_SITE_URL`        | `https://manuhdetox.com.br`    | Sim (prod)  |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `5548999394790`                | Nao         |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | `manudetox@icloud.com`         | Nao         |
| `NEXT_PUBLIC_INSTAGRAM_HANDLE`| `manuhdetox`                   | Nao         |

Sem `NEXT_PUBLIC_SITE_URL`, `sitemap.xml`, `robots.txt` e Open Graph apontam para o fallback (`https://manuhdetox.com.br`) — ok para producao, mas em previews o metadata ficara com o dominio errado. Se isso incomodar, setar tambem na env **Preview** com a URL de staging ou remover a env em Preview para usar o fallback.

### Checklist antes do primeiro deploy

- [ ] Repo importado na Vercel
- [ ] Env vars configuradas em Production (minimo: `NEXT_PUBLIC_SITE_URL`)
- [ ] CI verde em `main` (lint + typecheck + build)
- [ ] Dominio customizado apontado (quando pronto)
- [ ] Favicon adicionado em `public/favicon.ico` (hoje retorna 404 — `layout.tsx` ja referencia)

### O que nao muda

- `next.config.mjs` ja libera `acdn-us.mitiendanube.com` para `next/image`.
- Headers de seguranca (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) ja definidos.
- Todas as rotas renderizam estaticas hoje (`○ Static`) — custo de invocacao minimo.
