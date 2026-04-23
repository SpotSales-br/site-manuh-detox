"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-4">
      {images.length > 1 ? (
        <div className="order-2 flex flex-row gap-2 overflow-x-auto scrollbar-hide md:order-1 md:w-20 md:flex-col md:flex-shrink-0 md:self-start">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ver imagem ${index + 1}`}
              className={`relative aspect-square w-16 flex-shrink-0 overflow-hidden rounded-[10px] border-2 bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6] transition-all md:w-full ${
                index === active
                  ? "border-brand"
                  : "border-line hover:border-ink-muted"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} - miniatura ${index + 1}`}
                fill
                sizes="120px"
                className="object-contain p-3"
              />
            </button>
          ))}
        </div>
      ) : null}

      <div className="relative order-1 aspect-square flex-1 overflow-hidden rounded-[16px] bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6] md:order-2">
        <Image
          src={current}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 520px"
          className="object-contain p-10 drop-shadow-[0_12px_32px_rgba(0,0,0,0.10)]"
        />
      </div>
    </div>
  );
}
