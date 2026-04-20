import { trustItems } from "@/data/content";

export function TrustBar() {
  return (
    <div className="border-b border-line bg-white py-7">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-6 md:gap-[60px]">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 text-[13px] font-medium text-ink-soft"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-bg text-base">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
