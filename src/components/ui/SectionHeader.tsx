interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  inverted?: boolean;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  inverted = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-12 ${alignment}`}>
      <div
        className={`mb-3 text-xs font-semibold uppercase tracking-[2px] ${
          inverted ? "text-brand-light" : "text-brand"
        }`}
      >
        {tag}
      </div>
      <h2
        className={`mb-3 font-display text-4xl font-semibold md:text-[36px] ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-base ${
            inverted ? "text-white/70" : "text-ink-muted"
          } ${align === "center" ? "mx-auto max-w-[500px]" : ""}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
