"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import Image from "next/image";
import {
  useCart,
  selectCartLines,
  selectCartTotal,
} from "@/lib/cart-store";
import { formatBRL } from "@/lib/format";
import { startCheckout } from "@/lib/checkout";

export function CartDrawer() {
  const items = useCart((s) => s.items);
  const isOpen = useCart((s) => s.isOpen);
  const closeCart = useCart((s) => s.closeCart);
  const setQuantity = useCart((s) => s.setQuantity);
  const removeItem = useCart((s) => s.removeItem);

  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => setMounted(true), []);

  const lines = useMemo(
    () => (mounted ? selectCartLines(items) : []),
    [items, mounted],
  );
  const total = useMemo(() => selectCartTotal(lines), [lines]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [isOpen, closeCart]);

  const handleCheckout = () => {
    if (lines.length === 0) return;
    startTransition(async () => {
      const result = await startCheckout({ lines, subtotal: total });
      if (result.target === "_blank") {
        window.open(result.url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = result.url;
      }
    });
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[200] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <aside
        role="dialog"
        aria-label="Carrinho"
        className={`absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="font-display text-xl font-semibold text-ink">
            Seu carrinho
          </h2>
          <button
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="text-ink-soft transition-colors hover:text-ink"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="mb-2 text-sm font-medium text-ink">
                Seu carrinho esta vazio
              </p>
              <p className="text-sm text-ink-muted">
                Adicione produtos para continuar
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.productId}
                  className="flex gap-3 rounded-[12px] border border-line p-3"
                >
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-[8px] bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6]">
                    <Image
                      src={line.product.image}
                      alt={line.product.imageAlt}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-semibold text-ink">
                          {line.product.name}
                        </p>
                        <p className="text-[11px] text-ink-muted">
                          {line.product.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(line.productId)}
                        aria-label="Remover item"
                        className="text-ink-muted transition-colors hover:text-brand"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 rounded-full border border-line px-2 py-1">
                        <button
                          onClick={() =>
                            setQuantity(line.productId, line.quantity - 1)
                          }
                          aria-label="Diminuir quantidade"
                          className="text-ink-soft transition-colors hover:text-ink"
                        >
                          −
                        </button>
                        <span className="min-w-5 text-center text-[13px] font-semibold text-ink">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() =>
                            setQuantity(line.productId, line.quantity + 1)
                          }
                          aria-label="Aumentar quantidade"
                          className="text-ink-soft transition-colors hover:text-ink"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[14px] font-bold text-ink">
                        {formatBRL(line.lineTotal)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <footer className="border-t border-line px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-ink-soft">Subtotal</span>
              <span className="text-lg font-bold text-ink">
                {formatBRL(total)}
              </span>
            </div>
            <p className="mb-4 text-[11px] text-ink-muted">
              Frete e cupons calculados no checkout
            </p>
            <button
              onClick={handleCheckout}
              disabled={isPending}
              className="w-full rounded-full bg-brand py-4 text-sm font-semibold uppercase tracking-[0.5px] text-white transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "Redirecionando..." : "Finalizar compra"}
            </button>
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
