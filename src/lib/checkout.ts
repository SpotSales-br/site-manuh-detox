import type { PricingOption, Product } from "@/types/product";
import { formatBRL } from "@/lib/format";
import { site, whatsappLink } from "@/data/site";

export interface CheckoutPayload {
  product: Product;
  option: PricingOption;
  quantity: number;
}

export interface CheckoutResult {
  url: string;
  target?: "_self" | "_blank";
}

/**
 * Gateway de checkout ainda em definição. Enquanto isso, redireciona o
 * pedido para o WhatsApp com um resumo pronto. Para trocar o provedor, basta
 * implementar a branch correspondente (mercadopago/stripe/nuvemshop).
 */
export const startCheckout = async (
  payload: CheckoutPayload,
): Promise<CheckoutResult> => {
  const provider = (process.env.NEXT_PUBLIC_CHECKOUT_PROVIDER ?? "whatsapp") as
    | "whatsapp"
    | "mercadopago"
    | "stripe"
    | "nuvemshop";

  switch (provider) {
    case "whatsapp":
    default:
      return buildWhatsAppCheckout(payload);
  }
};

const buildWhatsAppCheckout = ({
  product,
  option,
  quantity,
}: CheckoutPayload): CheckoutResult => {
  const total = option.totalPrice * quantity;
  const header = `Olá, ${site.name}! Gostaria de finalizar esta compra:`;
  const body = `- ${product.name} (${option.label}) x${quantity} — ${formatBRL(total)}`;
  const footer = `\nTotal: ${formatBRL(total)}`;
  const message = `${header}\n\n${body}${footer}`;
  return { url: whatsappLink(message), target: "_blank" };
};
