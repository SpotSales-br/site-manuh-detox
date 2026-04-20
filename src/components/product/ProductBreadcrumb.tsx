import Link from "next/link";

interface ProductBreadcrumbProps {
  productName: string;
}

export function ProductBreadcrumb({ productName }: ProductBreadcrumbProps) {
  return (
    <nav
      aria-label="Navegacao estrutural"
      className="container-site pt-6 text-[12px] text-ink-muted"
    >
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-ink">
            Inicio
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li>
          <Link href="/#produtos" className="transition-colors hover:text-ink">
            Produtos
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li className="font-medium text-ink">{productName}</li>
      </ol>
    </nav>
  );
}
