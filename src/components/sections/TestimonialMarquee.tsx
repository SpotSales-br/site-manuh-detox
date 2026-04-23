import { testimonialCards, type TestimonialCard } from "@/data/content";

export function TestimonialMarquee() {
  return (
    <section id="depoimentos" className="section bg-white overflow-hidden">
      <div className="container-site">
        <div className="mb-12 text-center">
          <h2
            data-animate="clip-reveal"
            className="mb-3 inline-block font-display text-4xl font-semibold text-ink md:text-[36px]"
          >
            Quem usa, sente a diferença.
          </h2>
          <p
            data-animate="fade-up"
            data-animate-delay="0.15"
            className="mx-auto max-w-[500px] text-base text-ink-muted"
          >
            Depoimentos reais de quem já sentiu a leveza da Manuh Detox.
          </p>
        </div>
      </div>

      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-32" />

        <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]">
          {[...testimonialCards, ...testimonialCards].map((card, idx) => (
            <Card key={`${card.initials}-${idx}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ card }: { card: TestimonialCard }) {
  return (
    <article className="mr-5 flex w-[320px] shrink-0 flex-col gap-3 rounded-[16px] border border-line bg-white p-6 shadow-sm md:w-[360px]">
      <header className="flex items-center gap-3">
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-[13px] font-semibold text-brand-dark"
        >
          {card.initials}
        </span>
        <div className="flex flex-col">
          <strong className="text-[14px] font-semibold text-ink">
            {card.name}
          </strong>
          <span className="text-[12px] text-ink-muted">{card.timeAgo}</span>
        </div>
      </header>
      <p className="text-[14px] leading-relaxed text-ink-soft">
        {renderWithHighlights(card.quote, card.highlights)}
      </p>
    </article>
  );
}

function renderWithHighlights(quote: string, highlights: string[]) {
  if (highlights.length === 0) return quote;

  const pattern = new RegExp(
    `(${highlights.map(escapeRegex).join("|")})`,
    "gi",
  );
  const parts = quote.split(pattern);

  return parts.map((part, idx) => {
    const isHighlight = highlights.some(
      (h) => h.toLowerCase() === part.toLowerCase(),
    );
    return isHighlight ? (
      <strong key={idx} className="font-semibold text-brand">
        {part}
      </strong>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
