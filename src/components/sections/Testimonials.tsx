import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section">
      <div className="container-site">
        <SectionHeader
          tag="Depoimentos"
          title="O que nossas clientes dizem"
          subtitle="Resultados reais de mulheres que transformaram suas vidas"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-[12px] border border-line bg-white p-8"
            >
              <div
                className="mb-4 tracking-[2px] text-[14px] text-[#F5A623]"
                aria-label={`${t.rating} de 5 estrelas`}
              >
                {"\u2605".repeat(t.rating)}
              </div>
              <p className="mb-5 text-[15px] italic leading-relaxed text-ink-soft">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light text-base font-semibold text-brand">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
