import { productTrustBadges } from "@/data/product-details";

export function ProductTrustBadges() {
  return (
    <ul data-animate="stagger" data-animate-stagger="0.08" className="grid grid-cols-2 gap-3">
      {productTrustBadges.map((badge) => (
        <li
          key={badge.title}
          data-animate-item
          className="flex items-start gap-3 rounded-[12px] border border-line bg-white p-3"
        >
          <span className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.5px] text-ink">
              {badge.title}
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-ink-muted">
              {badge.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
