interface HowItWorksProps {
  items: string[];
}

export function HowItWorks({ items }: HowItWorksProps) {
  return (
    <section className="section bg-bg-white">
      <div className="container-site">
        <div
          data-animate="fade-up"
          className="mx-auto mb-10 max-w-[640px] text-center"
        >
          <p className="section-tag">Como atua no seu corpo</p>
          <h2 className="section-title">O que acontece quando você começa</h2>
          <p className="section-subtitle">
            Fórmula natural agindo em várias frentes ao mesmo tempo para destravar o emagrecimento.
          </p>
        </div>

        <ul
          data-animate="stagger-blur"
          data-animate-stagger="0.1"
          className="mx-auto grid max-w-[720px] grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {items.map((item, index) => (
            <li
              key={item}
              data-animate-item
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
