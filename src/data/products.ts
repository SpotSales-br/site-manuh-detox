import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "plena",
    slug: "plena",
    name: "Plena Única Premium",
    category: "Suplemento",
    description:
      "Fórmula 3 em 1 com ação diurética, detox e emagrecimento. Reduz retenção e inchaço.",
    shortDescription:
      "Inibidor de apetite natural com 12 ervas que reduzem a fome em até 80% e combatem a retenção.",
    longDescription:
      "O Plena Única Premium é o suplemento mais vendido da Manuh Detox. Em cápsulas de 750mg, sua fórmula reúne 12 ingredientes naturais que agem juntos para reduzir a compulsão por doce, diminuir a retenção de líquido e acelerar o metabolismo. Indicado para quem está começando a jornada de emagrecimento e quer resultado de verdade sem dieta radical.",
    price: 180,
    originalPrice: 220,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/plena-produto.webp",
    imageAlt: "Plena Única Premium - suplemento natural",
    galleryImages: [
      "/plena-produto.webp",
      "/plena-2.webp",
      "/plena-3.webp",
      "/plena-4.webp",
    ],
    tag: { label: "Iniciante", variant: "iniciante" },
    pricingOptions: [
      {
        id: "plena-1un",
        units: 1,
        pricePerUnit: 180,
        totalPrice: 180,
        label: "1 pote",
        sublabel: "Tratamento de 30 dias",
      },
      {
        id: "plena-2un",
        units: 2,
        pricePerUnit: 150,
        totalPrice: 300,
        label: "Kit 2 potes",
        sublabel: "R$ 150 cada - economize R$ 60",
        savings: 60,
        highlight: true,
      },
    ],
    howItWorks: [
      "Reduz a fome em até 80%",
      "Diminui a retenção de líquido",
      "Inibe a compulsão alimentar",
      "Tira a vontade por doce",
      "Acelera o metabolismo",
      "Traz saciedade prolongada",
    ],
    composition: [
      "Linhaça",
      "Alcachofra",
      "Chia",
      "Limão",
      "Maracujá",
      "Gengibre",
      "Psyllium",
      "Aloe vera",
      "Marmelinho",
      "Garcinia",
      "Colágeno",
      "Morosil",
    ],
    differential:
      "Ajuda muito na retenção de líquido. É o produto mais vendido do nosso site.",
    usageInstructions: [
      "Tomar 1 cápsula por dia após o café da manhã",
      "Nunca tomar em jejum",
      "Na primeira semana, tomar dia sim / dia não",
    ],
    rating: 4.7,
    reviewCount: "999+",
  },
  {
    id: "lifefit",
    slug: "lifefit",
    name: "Life Fit Pro",
    category: "Suplemento Avançado",
    description:
      "Fórmula premium para organismos resistentes. Potência máxima para quem quer ir além.",
    shortDescription:
      "Fórmula avançada com chá verde, morosil e cafeína. Potência máxima para organismos resistentes.",
    longDescription:
      "O Life Fit Pro é a fórmula avançada da Manuh Detox, feita para quem já tem experiência com suplementos e precisa de uma ação mais forte. Combina chá verde, morosil, hibisco, cafeína e maracujá para acelerar o metabolismo, potencializar a queima de gordura e inibir a vontade por doce. Indicado somente para organismos resistentes.",
    price: 200,
    originalPrice: 250,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/lifefit-1unidade.webp",
    imageAlt: "Life Fit Pro - suplemento avançado",
    galleryImages: ["/lifefit-1unidade.webp", "/lifefit-2unidades.webp"],
    tag: { label: "Avançado", variant: "avancado" },
    pricingOptions: [
      {
        id: "lifefit-1un",
        units: 1,
        pricePerUnit: 200,
        totalPrice: 200,
        label: "1 pote",
        sublabel: "Tratamento de 30 dias",
      },
      {
        id: "lifefit-2un",
        units: 2,
        pricePerUnit: 170,
        totalPrice: 340,
        label: "Kit 2 potes",
        sublabel: "R$ 170 cada - economize R$ 60",
        savings: 60,
        highlight: true,
      },
    ],
    howItWorks: [
      "Combate retenção de líquidos e inchaço",
      "Acelera o metabolismo",
      "Potencializa a queima de gordura",
      "Inibe a vontade por doce",
    ],
    composition: ["Chá verde", "Morosil", "Hibisco", "Cafeína", "Maracujá"],
    differential:
      "Indicado somente para organismos resistentes. Menor chance de efeitos colaterais para quem já tem experiência com suplementos.",
    usageInstructions: [
      "Tomar 1 cápsula por dia após o café da manhã",
      "Nunca tomar em jejum",
      "Na primeira semana, tomar dia sim / dia não",
    ],
    rating: 4.7,
    reviewCount: "999+",
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

export const aboutImage = "/plena-produto.webp";

export const testimonialBanner1 = [
  "https://acdn-us.mitiendanube.com/stores/006/773/710/themes/patagonia/2-slide-1765925849695-2271378594-728457ecfc97cad6cf5574906a26bc1e1765925844-1024-1024.webp?w=1024",
  "https://acdn-us.mitiendanube.com/stores/006/773/710/themes/patagonia/2-slide-1765927773433-8631584161-59a1710b96feb8231828f34421b81d8a1765927765-1024-1024.webp?w=1024",
  "https://acdn-us.mitiendanube.com/stores/006/773/710/themes/patagonia/2-slide-1765925849695-4740527770-3bc70a3244dfb960915d524fc9ec13581765925844-1024-1024.webp?w=1024",
];

export const testimonialBanner2 =
  "https://acdn-us.mitiendanube.com/stores/006/773/710/themes/patagonia/2-slide-1766166306335-3951761089-3ff94fe634d420a552ec6b06b0ae43ac1766166382-1920-1920.webp?w=1920";
