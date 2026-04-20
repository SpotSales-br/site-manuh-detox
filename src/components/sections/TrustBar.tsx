import { trustItems } from "@/data/content";

export function TrustBar() {
  return (
    <div className="border-b border-line bg-white py-7">
      <div className="group relative overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </div>
  );
}

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex min-w-[100vw] flex-shrink-0 items-center justify-around gap-[120px] px-[60px]"
    >
      {trustItems.map((item, idx) => (
        <div
          key={`${item.text}-${idx}`}
          className="flex flex-shrink-0 items-center gap-3 text-[13px] font-medium text-ink-soft"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-bg text-base">
            {item.icon}
          </div>
          {item.text}
        </div>
      ))}
    </div>
  );
}
