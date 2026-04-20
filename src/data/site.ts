export const site = {
  name: "Manuh Detox",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://manuhdetox.com.br",
  description:
    "Suplementos naturais para emagrecimento, detox e bem-estar feminino. Resultados reais com ingredientes de alta qualidade.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5548999394790",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "manudetox@icloud.com",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "manuhdetox",
  shippingFreeThreshold: 500,
  maxInstallments: 6,
  announcement: {
    text: "Frete gratis nas compras acima de",
    highlight: "R$500",
    tail: "Parcele em ate 6x sem juros",
  },
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const instagramLink = `https://instagram.com/${site.instagram}`;
export const emailLink = `mailto:${site.email}`;
