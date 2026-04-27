import type { PricingOption, Product } from "@/types/product";

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
  return { url: payload.option.checkoutUrl, target: "_blank" };
};
