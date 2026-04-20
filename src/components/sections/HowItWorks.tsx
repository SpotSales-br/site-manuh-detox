import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps } from "@/data/content";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section">
      <div className="container-site">
        <SectionHeader
          tag="Como Funciona"
          title="Simples de usar, facil de ver resultados"
          subtitle="Siga o protocolo e veja a transformacao acontecer"
        />
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {howItWorksSteps.map((step, idx) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white">
                {idx + 1}
              </div>
              <h3 className="mb-1.5 text-[15px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="text-[13px] leading-snug text-ink-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
