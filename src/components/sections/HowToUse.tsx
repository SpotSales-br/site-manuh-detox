import { SectionHeader } from "@/components/ui/SectionHeader";
import { howToUseSteps } from "@/data/content";

export function HowToUse() {
  return (
    <section id="modo-de-uso" className="section bg-brand-light/30">
      <div className="container-site">
        <SectionHeader
          tag="Modo de uso"
          title="Simples assim, todo dia"
          subtitle="Sem dieta complicada, sem receita milagrosa. Uma capsula por dia, na hora certa."
        />

        <ol className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 md:grid-cols-3">
          {howToUseSteps.map((step) => (
            <li
              key={step.number}
              className="relative flex flex-col gap-4 rounded-[16px] border border-line bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden
                className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 font-display text-[13px] font-semibold tracking-[2px] text-white"
              >
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-[20px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
