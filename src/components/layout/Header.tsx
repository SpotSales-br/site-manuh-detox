"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navItems, productPageNavItems } from "@/data/content";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isProductPage = pathname?.startsWith("/produto/") ?? false;
  const items = isProductPage ? productPageNavItems : navItems;

  return (
    <header className="sticky top-[38px] z-50 border-b border-white/10 bg-ink">
      <div className="container-site flex h-[72px] items-center justify-between">
        <BrandLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand transition-[width] group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          className="text-2xl text-white md:hidden"
        >
          ☰
        </button>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
