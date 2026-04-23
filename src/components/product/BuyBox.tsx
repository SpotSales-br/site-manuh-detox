"use client";

import { useMemo, useState, useTransition } from "react";
import type { Product } from "@/types/product";
import { formatBRL, formatInstallment } from "@/lib/format";
import { startCheckout } from "@/lib/checkout";

interface BuyBoxProps {
  product: Product;
}

export function BuyBox({ product }: BuyBoxProps) {
  const [selectedId, setSelectedId] = useState(
    () =>
      product.pricingOptions.find((o) => o.highlight)?.id ??
      product.pricingOptions[0]?.id,
  );
  const [quantity, setQuantity] = useState(1);
  const [isPending, startTransition] = useTransition();

  const selected = useMemo(
    () =>
      product.pricingOptions.find((o) => o.id === selectedId) ??
      product.pricingOptions[0],
    [selectedId, product.pricingOptions],
  );

  const total = selected.totalPrice * quantity;
  const originalTotal = product.originalPrice * selected.units * quantity;

  const handleCheckout = () => {
    startTransition(async () => {
      const result = await startCheckout({
        product,
        option: selected,
        quantity,
      });
      if (result.target === "_blank") {
        window.open(result.url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = result.url;
      }
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <div className="flex text-[15px] leading-none">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={
                i < Math.round(product.rating)
                  ? "text-brand"
                  : "text-line"
              }
              aria-hidden
            >
              ★
            </span>
          ))}
        </div>
        <span className="text-[13px] font-semibold text-ink">
          {product.rating.toFixed(1)}
        </span>
        <span className="text-[13px] text-ink-muted">
          ({product.reviewCount} avaliações)
        </span>
      </div>

      <div>
        {product.tag ? (
          <span
            className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-white ${
              product.tag.variant === "iniciante" ? "bg-leaf" : "bg-ink"
            }`}
          >
            {product.tag.label}
          </span>
        ) : null}
        <h1 className="font-display text-[32px] font-semibold leading-[1.15] text-ink md:text-[40px]">
          {product.name}
        </h1>
        <p className="mt-3 text-[15px] text-ink-soft">
          {product.shortDescription}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-muted">
          Escolha sua opção
        </span>
        <div className="flex flex-col gap-3">
          {product.pricingOptions.map((option) => {
            const isActive = option.id === selected.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                aria-pressed={isActive}
                className={`flex items-center justify-between gap-4 rounded-[14px] border-2 p-4 text-left transition-all ${
                  isActive
                    ? "border-brand bg-brand-light/30"
                    : "border-line bg-white hover:border-ink-muted"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${
                      isActive ? "border-brand" : "border-line"
                    }`}
                  >
                    {isActive ? (
                      <span className="h-2.5 w-2.5 rounded-full bg-brand" />
                    ) : null}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[15px] font-semibold text-ink">
                        {option.label}
                      </span>
                      {option.highlight ? (
                        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.5px] text-white">
                          Mais vendido
                        </span>
                      ) : null}
                    </div>
                    {option.sublabel ? (
                      <p className="mt-0.5 text-[12px] text-ink-muted">
                        {option.sublabel}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[16px] font-bold text-ink">
                    {formatBRL(option.totalPrice)}
                  </div>
                  {option.units > 1 ? (
                    <div className="text-[11px] text-ink-muted">
                      {formatBRL(option.pricePerUnit)} / pote
                    </div>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-muted">
            Quantidade
          </span>
          <div className="mt-2 flex items-center gap-3 rounded-full border border-line px-3 py-1.5">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Diminuir quantidade"
              className="text-lg text-ink-soft transition-colors hover:text-ink"
            >
              −
            </button>
            <span className="min-w-[20px] text-center text-sm font-semibold text-ink">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              aria-label="Aumentar quantidade"
              className="text-lg text-ink-soft transition-colors hover:text-ink"
            >
              +
            </button>
          </div>
        </div>

        <div className="text-right">
          <div className="flex items-baseline justify-end gap-2">
            {originalTotal > total ? (
              <span className="text-sm text-ink-muted line-through">
                {formatBRL(originalTotal)}
              </span>
            ) : null}
            <span className="text-[28px] font-bold text-ink">
              {formatBRL(total)}
            </span>
          </div>
          <div className="text-[12px] font-medium text-leaf">
            {formatInstallment(total, product.installments)}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleCheckout}
        disabled={isPending}
        className="w-full rounded-full bg-brand py-4 text-sm font-semibold uppercase tracking-[0.5px] text-white transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Redirecionando..." : "Quero minha transformação"}
      </button>
    </div>
  );
}
