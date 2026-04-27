"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const provasSociais = Array.from(
  { length: 13 },
  (_, i) => `/prova-social-${String(i + 1).padStart(2, "0")}.webp`,
);

export function TestimonialMarquee() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <>
      <section id="depoimentos" className="section bg-white overflow-hidden">
        <div className="container-site">
          <div className="mb-12 text-center">
            <p className="section-tag">Veja as transformações</p>
            <h2
              className="mb-3 inline-block font-display text-4xl font-semibold text-ink md:text-[36px]"
            >
              Quem usa, sente a diferença.
            </h2>
            <p
              className="mx-auto max-w-[500px] text-base text-ink-muted"
            >
              Depoimentos reais de quem já sentiu a leveza da Manuh Detox.
            </p>
          </div>
        </div>

        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

          <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]">
            {[...provasSociais, ...provasSociais].map((src, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(src)}
                className="mr-4 relative h-[320px] w-[240px] shrink-0 overflow-hidden rounded-[16px] cursor-zoom-in md:h-[360px] md:w-[270px]"
                aria-label={`Ver depoimento ${(idx % 13) + 1}`}
              >
                <Image
                  src={src}
                  alt={`Prova social cliente Manuh Detox ${(idx % 13) + 1}`}
                  fill
                  sizes="270px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[500px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink shadow-md hover:bg-brand hover:text-white transition-colors"
              aria-label="Fechar"
            >
              ✕
            </button>
            <div className="relative w-full overflow-hidden rounded-[16px]">
              <Image
                src={selected}
                alt="Depoimento cliente Manuh Detox"
                width={500}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
