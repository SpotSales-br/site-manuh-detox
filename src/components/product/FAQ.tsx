"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/product-details";

interface FAQProps {
  items: FaqItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-bg-white">
      <div className="container-site">
        <div
          data-animate="fade-up"
          className="mx-auto mb-10 max-w-[640px] text-center"
        >
          <p className="section-tag">Duvidas frequentes</p>
          <h2 className="section-title">Ainda tem duvida? A gente responde</h2>
          <p className="section-subtitle">
            As perguntas mais comuns das nossas clientes, respondidas de forma direta.
          </p>
        </div>

        <ul
          data-animate="stagger"
          data-animate-stagger="0.08"
          className="mx-auto flex max-w-[720px] flex-col gap-3"
        >
          {items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <li
                key={item.question}
                data-animate-item
                className="overflow-hidden rounded-[12px] border border-line bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-bg"
                >
                  <span className="text-[14px] font-semibold text-ink">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line text-lg text-ink transition-transform ${
                      isOpen ? "rotate-45 bg-brand text-white" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-ink-soft">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
