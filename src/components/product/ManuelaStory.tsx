import Image from "next/image";
import { manuelaStory, productStats } from "@/data/product-details";
import { testimonialBanner2 } from "@/data/products";

export function ManuelaStory() {
  return (
    <section className="bg-ink text-white">
      <div className="container-site pt-16 md:pt-20">
        <div className="mx-auto max-w-[820px] text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-brand">
            {manuelaStory.tag}
          </p>
          <h2 className="font-display text-[32px] font-semibold leading-[1.15] md:text-[40px]">
            {manuelaStory.title}
          </h2>

          <div className="mt-6 flex flex-col gap-4 text-[15px] leading-relaxed text-white/80">
            {manuelaStory.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <p className="mt-6 text-[13px] font-semibold uppercase tracking-[1.5px] text-brand">
            {manuelaStory.signature}
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {productStats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-[12px] border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="font-display text-[22px] font-semibold text-white">
                  {stat.value}
                </div>
                <div className="text-[11px] uppercase tracking-[1px] text-white/60">
                  {stat.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-12 aspect-[16/7] w-full overflow-hidden md:mt-16 md:aspect-[21/8]">
        <Image
          src={testimonialBanner2}
          alt="Depoimento de cliente Manuh Detox"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
