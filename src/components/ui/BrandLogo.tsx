import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  href?: string;
}

export function BrandLogo({ className = "", href = "/" }: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`font-display text-[26px] font-semibold tracking-tight text-ink ${className}`}
    >
      manuh<em className="not-italic text-brand">detox</em>
    </Link>
  );
}
