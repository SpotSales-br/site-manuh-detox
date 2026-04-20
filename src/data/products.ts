import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "plena",
    slug: "plena",
    name: "Plena 3X1",
    category: "Suplemento",
    description:
      "Formula 3 em 1 com acao diuretica, detox e emagrecimento. Reduz retencao e inchaco",
    price: 180,
    originalPrice: 200,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/plena-produto.webp",
    imageAlt: "Plena 3X1 - suplemento natural",
    tag: { label: "Iniciante", variant: "iniciante" },
  },
  {
    id: "lifefit",
    slug: "lifefit",
    name: "Lifefit",
    category: "Suplemento Avancado",
    description:
      "Formula premium para organismos resistentes. Potencia maxima para quem quer ir alem",
    price: 225,
    originalPrice: 250,
    installments: 6,
    units: 1,
    capsulesPerUnit: 30,
    image: "/lifefit-produto.webp",
    imageAlt: "Lifefit - suplemento avancado",
    tag: { label: "Avancado", variant: "avancado" },
  },
];

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
