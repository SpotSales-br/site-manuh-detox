import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "plena",
    slug: "plena",
    name: "Plena Unica Premium",
    category: "Suplemento",
    description:
      "Formula 3 em 1 com acao diuretica, detox e emagrecimento. Reduz retencao e inchaco",
    shortDescription:
      "Inibidor de apetite natural com 12 ervas que reduzem a fome em ate 80% e combatem a retencao.",
    longDescription:
      "O Plena Unica Premium e o suplemento mais vendido da Manuh Detox. Em capsulas de 750mg, sua formula reune 12 ingredientes naturais que agem juntos para reduzir a compulsao por doce, diminuir a retencao de liquido e acelerar o metabolismo. Indicado para quem esta comecando a jornada de emagrecimento e quer resultado de verdade sem dieta radical.",
    price: 180,
    originalPrice: 220,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/plena-1.webp",
    imageAlt: "Plena Unica Premium - suplemento natural",
    galleryImages: [
      "/plena-1.webp",
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
      "Reduz a fome em ate 80%",
      "Diminui a retencao de liquido",
      "Inibe a compulsao alimentar",
      "Tira a vontade por doce",
      "Acelera o metabolismo",
      "Traz saciedade prolongada",
    ],
    composition: [
      "Linhaca",
      "Alcachofra",
      "Chia",
      "Limao",
      "Maracuja",
      "Gengibre",
      "Psyllium",
      "Aloe vera",
      "Marmelinho",
      "Garcinia",
      "Colageno",
      "Morosil",
    ],
    differential:
      "Ajuda muito na retencao de liquido. E o produto mais vendido do nosso site.",
    usageInstructions: [
      "Tomar 1 capsula por dia apos o cafe da manha",
      "Nunca tomar em jejum",
      "Na primeira semana, tomar dia sim / dia nao",
    ],
    rating: 4.7,
    reviewCount: "999+",
  },
  {
    id: "lifefit",
    slug: "lifefit",
    name: "Life Fit Pro",
    category: "Suplemento Avancado",
    description:
      "Formula premium para organismos resistentes. Potencia maxima para quem quer ir alem",
    shortDescription:
      "Formula avancada com cha verde, morosil e cafeina. Potencia maxima para organismos resistentes.",
    longDescription:
      "O Life Fit Pro e a formula avancada da Manuh Detox, feita para quem ja tem experiencia com suplementos e precisa de uma acao mais forte. Combina cha verde, morosil, hibisco, cafeina e maracuja para acelerar o metabolismo, potencializar a queima de gordura e inibir a vontade por doce. Indicado somente para organismos resistentes.",
    price: 200,
    originalPrice: 250,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/lifefit-produto.webp",
    imageAlt: "Life Fit Pro - suplemento avancado",
    galleryImages: [
      "/lifefit-produto.webp",
      "/lifefit-produto.webp",
      "/lifefit-produto.webp",
      "/lifefit-produto.webp",
    ],
    tag: { label: "Avancado", variant: "avancado" },
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
      "Combate retencao de liquidos e inchaco",
      "Acelera o metabolismo",
      "Potencializa a queima de gordura",
      "Inibe a vontade por doce",
    ],
    composition: ["Cha verde", "Morosil", "Hibisco", "Cafeina", "Maracuja"],
    differential:
      "Indicado somente para organismos resistentes. Menor chance de efeitos colaterais para quem ja tem experiencia com suplementos.",
    usageInstructions: [
      "Tomar 1 capsula por dia apos o cafe da manha",
      "Nunca tomar em jejum",
      "Na primeira semana, tomar dia sim / dia nao",
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
