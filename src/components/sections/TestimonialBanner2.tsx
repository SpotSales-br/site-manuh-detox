import Image from "next/image";
import { testimonialBanner2 } from "@/data/products";

export function TestimonialBanner2() {
  return (
    <section className="bg-white">
      <div className="relative aspect-[16/7] w-full overflow-hidden md:aspect-[21/8]">
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
