import Image from "next/image";
import { testimonialBanner2 } from "@/data/products";

export function SocialProofBanner() {
  return (
    <div className="relative aspect-[16/7] w-full overflow-hidden md:aspect-[21/8]">
      <Image
        src={testimonialBanner2}
        alt="Depoimento de clientes Manuh Detox"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
}
