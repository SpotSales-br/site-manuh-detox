"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import { formatBRL, formatInstallment } from "@/lib/format";
import { useCart } from "@/lib/cart-store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((s) => s.addItem);

  return (
    <article className="group relative overflow-hidden rounded-[12px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {product.badge?.discount ? (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-brand px-3 py-1 text-[11px] font-bold text-white">
          {product.badge.discount}
        </span>
      ) : null}
      {product.isBestSeller ? (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-leaf px-3 py-1 text-[11px] font-bold text-white">
          Mais Vendido
        </span>
      ) : null}

      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6] p-6">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>

      <div className="p-5">
        <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-muted">
          {product.category}
        </div>
        <h3 className="mb-1 text-[17px] font-semibold text-ink">
          {product.name}
        </h3>
        <p className="mb-4 text-[13px] leading-snug text-ink-muted">
          {product.description}
        </p>

        <div className="mb-1.5 flex items-baseline gap-2.5">
          <span className="text-[22px] font-bold text-ink">
            {formatBRL(product.price)}
          </span>
          <span className="text-sm text-ink-muted line-through">
            {formatBRL(product.originalPrice)}
          </span>
        </div>
        <div className="mb-1 text-xs font-medium text-leaf">
          {formatInstallment(product.price, product.installments)}
        </div>
        <div className="mb-4 text-[11px] text-ink-muted">
          {product.units === 1
            ? `1 unidade \u2022 ${product.capsulesPerUnit} capsulas`
            : `${product.units} unidades \u2022 ${product.units * product.capsulesPerUnit} capsulas no total`}
        </div>

        <button
          onClick={() => addItem(product.id)}
          className="w-full rounded-[8px] bg-ink py-3.5 text-[13px] font-semibold uppercase tracking-[0.5px] text-white transition-colors hover:bg-brand"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </article>
  );
}
