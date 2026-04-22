interface CompositionProps {
  items: string[];
  differential: string;
}

export function Composition({ items, differential }: CompositionProps) {
  return (
    <section className="section">
      <div className="container-site">
        <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div data-animate="fade-right">
            <p className="section-tag">Composicao 100% natural</p>
            <h2 className="section-title">
              Um extrato de ervas pensado pra funcionar
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {differential}
            </p>
          </div>

          <ul
            data-animate="stagger-flip"
            data-animate-stagger="0.06"
            className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {items.map((item) => (
              <li
                key={item}
                data-animate-item
                className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5"
              >
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-leaf" />
                <span className="text-[13px] font-medium text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
