import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { instagramFeed } from "@/data/products";
import { instagramLink, site } from "@/data/site";

export function Instagram() {
  return (
    <section id="contato" className="section">
      <div className="container-site">
        <SectionHeader
          tag={`@${site.instagram}`}
          title="Siga no Instagram"
          subtitle="Acompanhe dicas, resultados e novidades"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {instagramFeed.map((src, idx) => (
            <a
              key={src}
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden rounded-[8px] bg-gradient-to-br from-[#F8F5F2] to-[#F2ECE6]"
            >
              <Image
                src={src}
                alt={`Post @${site.instagram} ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
              <span className="absolute inset-0 bg-brand/0 transition-colors group-hover:bg-brand/20" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
                @{site.instagram}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
