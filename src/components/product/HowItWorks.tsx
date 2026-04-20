interface HowItWorksProps {
  items: string[];
}

export function HowItWorks({ items }: HowItWorksProps) {
  return (
    <section className="section bg-bg-white">
      <div className="container-site">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <p className="section-tag">Como atua no seu corpo</p>
          <h2 className="section-title">O que acontece quando voce comeca</h2>
          <p className="section-subtitle">
            Formula natural agindo em varias frentes ao mesmo tempo para destravar o emagrecimento.
          </p>
        </div>

        <ul className="mx-auto grid max-w-[960px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-4 rounded-[12px] border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-light font-display text-[15px] font-bold text-brand-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1.5 text-[14px] font-medium leading-snug text-ink">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
