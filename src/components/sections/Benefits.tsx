import { SectionHeader } from "@/components/ui/SectionHeader";
import { benefits } from "@/data/content";

export function Benefits() {
  return (
    <section id="beneficios" className="section bg-white">
      <div className="container-site">
        <div data-animate="fade-up">
          <SectionHeader
            tag="Por que escolher a Manuh?"
            title="Cuidado em cada detalhe"
            subtitle="Qualidade, transparencia e resultados reais"
          />
        </div>
        <div
          data-animate="stagger-blur"
          data-animate-stagger="0.15"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((b) => (
            <article
              key={b.title}
              data-animate-item
              className="rounded-[12px] border border-line p-10 text-center transition-all duration-300 hover:border-brand-light hover:bg-gradient-to-b hover:from-brand/[0.03] hover:to-transparent"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-[16px] bg-brand-light text-2xl">
                {b.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-ink">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
