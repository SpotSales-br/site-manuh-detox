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
  announcements: [
    "FRETE GRÁTIS nas compras acima de R$ 500,00 em produtos",
    "Aplique o cupom CUPOMPRIMEIRA10% na sua primeira compra!",
    "Parcele em até 6x sem juros",
  ],
  logoUrl:
    "https://d1a9qnv764bsoo.cloudfront.net/stores/006/773/710/themes/common/logo-1968298547-1766006427-8770a5cd8395dfaf2c0e786e81cc09bd1766006427-1024-1024.webp?w=1024",
} as const;

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const instagramLink = `https://instagram.com/${site.instagram}`;
export const emailLink = `mailto:${site.email}`;
