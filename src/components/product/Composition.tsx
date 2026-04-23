interface CompositionProps {
  items: string[];
  differential: string;
}

type Point = { x: number; y: number };

function computeOrbitPositions(count: number): Point[] {
  if (count === 0) return [];
  const center = 50;
  const twoRings = count > 6;
  const radii = twoRings ? [28, 44] : [40];
  const step = (Math.PI * 2) / count;
  const start = -Math.PI / 2;
  const positions: Point[] = [];
  for (let i = 0; i < count; i++) {
    const angle = start + i * step;
    const r = radii[i % radii.length];
    positions.push({
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    });
  }
  return positions;
}

export function Composition({ items, differential }: CompositionProps) {
  const positions = computeOrbitPositions(items.length);
  const dense = items.length > 6;

  return (
    <section className="section">
      <div className="container-site">
        <div className="mx-auto grid max-w-[1040px] items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div data-animate="fade-right">
            <p className="section-tag">Composição 100% natural</p>
            <h2 className="section-title">
              Um extrato de ervas pensado pra funcionar
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              {differential}
            </p>
          </div>

          <div
            data-animate="scale-in"
            className={`relative mx-auto aspect-square w-full ${
              dense ? "max-w-[500px]" : "max-w-[440px]"
            }`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
            >
              {dense ? (
                <>
                  <circle
                    cx="50"
                    cy="50"
                    r="28"
                    fill="none"
                    stroke="var(--color-brand-light)"
                    strokeWidth="0.25"
                    strokeDasharray="0.8 1.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="var(--color-brand-light)"
                    strokeWidth="0.25"
                    strokeDasharray="0.8 1.2"
                  />
                </>
              ) : (
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="var(--color-brand-light)"
                  strokeWidth="0.3"
                  strokeDasharray="0.8 1.2"
                />
              )}
              {positions.map((pos, idx) => (
                <line
                  key={idx}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="var(--color-brand-light)"
                  strokeWidth="0.4"
                  strokeDasharray="1 1.2"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            <div
              className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-center font-display font-semibold uppercase tracking-wide text-white shadow-[0_10px_28px_rgba(196,94,138,0.38)] ${
                dense
                  ? "h-[22%] w-[22%] text-[clamp(10px,2vw,13px)]"
                  : "h-[26%] w-[26%] text-[clamp(11px,2.2vw,15px)]"
              }`}
            >
              <span className="absolute inset-0 rounded-full border border-white/30" />
              Composição
            </div>

            {items.map((item, idx) => {
              const pos = positions[idx];
              return (
                <div
                  key={item}
                  data-animate-item
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white font-medium text-ink shadow-[0_4px_14px_rgba(0,0,0,0.06)] ${
                    dense
                      ? "px-2.5 py-1 text-[11px] sm:px-3 sm:py-1.5 sm:text-[12px]"
                      : "px-3 py-1.5 text-[12px] sm:px-4 sm:py-2 sm:text-[13px]"
                  }`}
                >
                  <span
                    className={`flex-shrink-0 rounded-full bg-leaf ${
                      dense ? "h-1.5 w-1.5" : "h-2 w-2"
                    }`}
                  />
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
