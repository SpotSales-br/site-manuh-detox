import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

interface BrandLogoProps {
  className?: string;
  href?: string;
  priority?: boolean;
}

export function BrandLogo({
  className = "",
  href = "/",
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      aria-label={site.name}
      className={`relative inline-flex h-12 w-[140px] items-center ${className}`}
    >
      <Image
        src={site.logoUrl}
        alt={site.name}
        fill
        priority={priority}
        sizes="140px"
        className="object-contain object-left"
      />
    </Link>
  );
}
