interface UsageStepsProps {
  steps: string[];
}

export function UsageSteps({ steps }: UsageStepsProps) {
  return (
    <section className="section bg-brand-light/40">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <p className="section-tag">Modo de uso</p>
          <h2 className="section-title">Simples assim, todo dia</h2>
          <p className="section-subtitle">
            Sem dieta complicada, sem receita milagrosa. So uma capsula por dia, na hora certa.
          </p>
        </div>

        <ol className="mx-auto grid max-w-[960px] grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex flex-col gap-4 rounded-[16px] border border-line bg-white p-6 text-center"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand font-display text-[22px] font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-[15px] font-medium leading-snug text-ink">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
