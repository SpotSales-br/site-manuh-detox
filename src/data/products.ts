import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "glowvena-1",
    slug: "glowvena",
    name: "Glowvena",
    category: "Suplemento",
    description:
      "Acelera o metabolismo, reduz a fome em 80% e melhora o funcionamento intestinal",
    price: 200,
    originalPrice: 225,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-13-979c46e2e8a0f8281617661607373977-1024-1024.webp",
    imageAlt: "Glowvena 1 Unidade",
    badge: { discount: "-11%" },
    isBestSeller: true,
  },
  {
    id: "glowvena-2",
    slug: "glowvena-kit-2",
    name: "Glowvena — 2 unidades",
    category: "Kit Economia",
    description:
      "Economize no kit com 2 unidades do nosso best-seller para tratamento completo",
    price: 340,
    originalPrice: 400,
    installments: 6,
    units: 2,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-17-040caebcf36a62ceea17661623121415-1024-1024.webp",
    imageAlt: "Glowvena Kit 2 Unidades",
    badge: { discount: "-15%" },
  },
  {
    id: "plena-1",
    slug: "plena-3x1",
    name: "PLENA 3X1",
    category: "Suplemento",
    description:
      "Formula 3 em 1 com acao diuretica, detox e emagrecimento. Reduz retencao e inchaco",
    price: 180,
    originalPrice: 200,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-9-91bda6eb84daacabee17661605551302-1024-1024.webp",
    imageAlt: "PLENA 3X1 1 Unidade",
    badge: { discount: "-10%" },
  },
  {
    id: "diamond-1",
    slug: "diamond",
    name: "Diamond",
    category: "Suplemento Avancado",
    description:
      "Formula premium para organismos resistentes. Potencia maxima para quem quer ir alem",
    price: 225,
    originalPrice: 250,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/img_9554-315eab61e5d9ceec2b17727183961040-1024-1024.webp",
    imageAlt: "Diamond",
    badge: { discount: "-10%" },
  },
  {
    id: "plena-2",
    slug: "plena-3x1-kit-2",
    name: "PLENA 3X1 — 2 unidades",
    category: "Kit Economia",
    description:
      "Kit com 2 unidades da Plena para um tratamento completo com melhor custo-beneficio",
    price: 300,
    originalPrice: 360,
    installments: 6,
    units: 2,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-19-efba504dec8b5c444317661625524051-1024-1024.webp",
    imageAlt: "Plena 3X1 Kit 2 Unidades",
    badge: { discount: "-17%" },
  },
  {
    id: "plena-10",
    slug: "plena-3x1-kit-10",
    name: "PLENA 3X1 — 10 unidades",
    category: "Kit Revenda",
    description:
      "Kit especial para revendedoras com preco exclusivo e maior margem de lucro",
    price: 1300,
    originalPrice: 1800,
    installments: 6,
    units: 10,
    capsulesPerUnit: 30,
    image:
      "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-28-70c60fce6ec89cbd3b17661643739180-1024-1024.webp",
    imageAlt: "PLENA 3X1 Kit 10 Unidades Revenda",
    badge: { discount: "-28%" },
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const instagramFeed = [
  "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-14-7f4baa27a4afa0e90217661608661030-1024-1024.webp",
  "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-29-4af28e50d8446c418f17677182110557-1024-1024.webp",
  "https://acdn-us.mitiendanube.com/stores/006/773/710/products/img_9551-584637fd4aafa36e4a17727183963204-1024-1024.webp",
  "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-15-d66a9424cd5a38a3c817661608872853-1024-1024.webp",
];

export const aboutImage =
  "https://acdn-us.mitiendanube.com/stores/006/773/710/products/plena-unica-31-c92d40eaa4178d653217677186956663-1024-1024.webp";
