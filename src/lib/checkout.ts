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

export const startCheckout = async (
  payload: CheckoutPayload,
): Promise<CheckoutResult> => {
  const provider = (process.env.NEXT_PUBLIC_CHECKOUT_PROVIDER ?? "whatsapp") as
    | "whatsapp"
    | "appmax"
    | "mercadopago"
    | "stripe"
    | "nuvemshop";

  switch (provider) {
    case "appmax":
      return buildAppmaxCheckout(payload);
    case "whatsapp":
    default:
      return buildWhatsAppCheckout(payload);
  }
};

const buildAppmaxCheckout = async ({
  option,
  quantity,
}: CheckoutPayload): Promise<CheckoutResult> => {
  const res = await fetch("/api/checkout/appmax", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ optionId: option.id, quantity }),
  });
  if (!res.ok) {
    const { error } = await res.json().catch(() => ({}));
    throw new Error(error ?? "Erro ao gerar checkout.");
  }
  const { url } = await res.json();
  return { url, target: "_self" };
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
