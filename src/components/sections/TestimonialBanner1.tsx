"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { testimonialBanner1 } from "@/data/products";

const REAL_N = testimonialBanner1.length;
const items = [
  ...testimonialBanner1,
  ...testimonialBanner1,
  ...testimonialBanner1,
];

export function TestimonialBanner1() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    centerItem(el, REAL_N + Math.floor(REAL_N / 2));
  }, []);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const idx = centerItemIndex(el);
        if (idx < REAL_N) hopByItems(el, REAL_N);
        else if (idx >= 2 * REAL_N) hopByItems(el, -REAL_N);
      }, 140);
    };
    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    centerItem(el, centerItemIndex(el) + dir, true);
  };

  return (
    <section id="depoimentos" className="section bg-white">
      <div className="container-site">
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-semibold text-brand md:text-[36px]">
            Resultados reais de quem confia na{" "}
            <span className="whitespace-nowrap">Manuh Detox</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-[7.5vw] pb-4 md:px-[22.5vw]"
        >
          {items.map((src, idx) => (
            <div
              key={`${src}-${idx}`}
              className="relative aspect-square w-[85vw] flex-shrink-0 snap-center overflow-hidden rounded-[16px] bg-bg shadow-lg md:w-[55vw]"
            >
              <Image
                src={src}
                alt={`Depoimento de cliente ${(idx % REAL_N) + 1}`}
                fill
                sizes="(max-width: 768px) 85vw, 55vw"
                className="object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => step(-1)}
          aria-label="Anterior"
          className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-brand shadow-lg transition-opacity hover:opacity-80 md:flex"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => step(1)}
          aria-label="Próximo"
          className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-brand shadow-lg transition-opacity hover:opacity-80 md:flex"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

function centerItem(el: HTMLElement, idx: number, smooth = false) {
  const child = el.children[idx] as HTMLElement | undefined;
  if (!child) return;
  const left = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
  el.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
}

function centerItemIndex(el: HTMLElement): number {
  const center = el.scrollLeft + el.clientWidth / 2;
  let best = 0;
  let bestDist = Infinity;
  for (let i = 0; i < el.children.length; i++) {
    const c = el.children[i] as HTMLElement;
    const cCenter = c.offsetLeft + c.clientWidth / 2;
    const d = Math.abs(cCenter - center);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  }
  return best;
}

function hopByItems(el: HTMLElement, deltaItems: number) {
  const a = el.children[0] as HTMLElement | undefined;
  const b = el.children[1] as HTMLElement | undefined;
  if (!a || !b) return;
  const itemStride = b.offsetLeft - a.offsetLeft;
  const prev = el.style.scrollSnapType;
  el.style.scrollSnapType = "none";
  el.scrollLeft += itemStride * deltaItems;
  requestAnimationFrame(() => {
    el.style.scrollSnapType = prev;
  });
}

function ArrowLeft() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
