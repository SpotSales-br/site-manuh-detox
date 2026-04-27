import { NextResponse } from "next/server";
import { APPMAX_KITS } from "@/lib/appmax-products.server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const { optionId, quantity } = body ?? {};

  if (!optionId || typeof optionId !== "string" || !(optionId in APPMAX_KITS)) {
    return NextResponse.json({ error: "Produto inválido." }, { status: 404 });
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) {
    return NextResponse.json({ error: "Quantidade inválida." }, { status: 400 });
  }

  const token = process.env.APPMAX_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Gateway não configurado." }, { status: 500 });
  }

  const { appmaxProductId, name, unitPrice } = APPMAX_KITS[optionId];

  let appmaxRes: Response;
  try {
    appmaxRes = await fetch("https://admin.appmax.com.br/api/v3/payment/payment-link", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "access-token": token,
        cart: {
          products: [
            {
              sku: appmaxProductId,
              name,
              qty: quantity,
              price: unitPrice,
            },
          ],
        },
      }),
    });
  } catch {
    return NextResponse.json({ error: "Falha ao conectar com o gateway." }, { status: 502 });
  }

  if (!appmaxRes.ok) {
    return NextResponse.json({ error: "Erro no gateway de pagamento." }, { status: 502 });
  }

  const data = await appmaxRes.json();
  const url: string | undefined =
    data?.data?.url ??
    data?.data?.payment_link ??
    data?.url ??
    data?.payment_link;

  if (!url) {
    return NextResponse.json({ error: "Link de checkout não retornado." }, { status: 502 });
  }

  return NextResponse.json({ url });
}
