"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CartDrawer } from "@/components/ui/CartDrawer";
import { navItems } from "@/data/content";
import { useCart, selectCartCount } from "@/lib/cart-store";

export function Header() {
  const items = useCart((s) => s.items);
  const openCart = useCart((s) => s.openCart);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const count = mounted ? selectCartCount(items) : 0;

  return (
    <header className="sticky top-[38px] z-50 border-b border-white/10 bg-ink">
      <div className="container-site flex h-[72px] items-center justify-between">
        <BrandLogo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
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

        <div className="flex items-center gap-5">
          <button
            aria-label="Buscar"
            className="text-white/70 transition-colors hover:text-white"
          >
            <SearchIcon />
          </button>
          <button
            aria-label="Minha conta"
            className="hidden text-white/70 transition-colors hover:text-white sm:block"
          >
            <UserIcon />
          </button>
          <button
            onClick={openCart}
            aria-label="Abrir carrinho"
            className="relative text-white/70 transition-colors hover:text-white"
          >
            <CartIcon />
            {count > 0 ? (
              <span className="absolute -right-2 -top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                {count}
              </span>
            ) : null}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={mobileOpen}
            className="text-2xl text-white md:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="border-t border-white/10 bg-ink px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
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

      <CartDrawer />
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
