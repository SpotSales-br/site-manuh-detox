import type { CartLine } from "@/types/product";
import { formatBRL } from "@/lib/format";
import { site, whatsappLink } from "@/data/site";

export interface CheckoutPayload {
  lines: CartLine[];
  subtotal: number;
}

export interface CheckoutResult {
  url: string;
  target?: "_self" | "_blank";
}

/**
 * Gateway de checkout ainda em defini\u00e7\u00e3o. Enquanto isso, redireciona o
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
  lines,
  subtotal,
}: CheckoutPayload): CheckoutResult => {
  const header = `Ola, ${site.name}! Gostaria de finalizar este pedido:`;
  const body = lines
    .map(
      (line) =>
        `- ${line.product.name} (x${line.quantity}) — ${formatBRL(line.lineTotal)}`,
    )
    .join("\n");
  const footer = `\nSubtotal: ${formatBRL(subtotal)}`;
  const message = `${header}\n\n${body}${footer}`;
  return { url: whatsappLink(message), target: "_blank" };
};
