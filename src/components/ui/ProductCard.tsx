import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatBRL, formatInstallment } from "@/lib/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const href = `/produto/${product.slug}`;

  return (
    <article className="group relative overflow-hidden rounded-[12px] border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      {product.tag ? (
        <span
          className={`absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-white ${
            product.tag.variant === "iniciante" ? "bg-leaf" : "bg-ink"
          }`}
        >
          {product.tag.label}
        </span>
      ) : null}

      <Link
        href={href}
        className="relative block aspect-square overflow-hidden bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6] p-6"
        aria-label={`Ver ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </Link>

      <div className="p-5">
        <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-ink-muted">
          {product.category}
        </div>
        <Link href={href}>
          <h3 className="mb-1 text-[17px] font-semibold text-ink transition-colors hover:text-brand">
            {product.name}
          </h3>
        </Link>
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
            ? `1 unidade \u2022 ${product.capsulesPerUnit} cápsulas`
            : `${product.units} unidades \u2022 ${product.units * product.capsulesPerUnit} cápsulas no total`}
        </div>

        <Link
          href={href}
          className="block w-full rounded-[8px] bg-ink py-3.5 text-center text-[13px] font-semibold uppercase tracking-[0.5px] text-white transition-colors hover:bg-brand"
        >
          Quero uma transformação
        </Link>
      </div>
    </article>
  );
}
