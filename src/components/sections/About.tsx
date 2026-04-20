import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats } from "@/data/content";
import { aboutImage } from "@/data/products";

export function About() {
  return (
    <section
      id="sobre"
      className="section bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[12px] bg-gradient-to-br from-brand/15 to-brand/[0.03] p-8 lg:mx-0 lg:max-w-none">
          <Image
            src={aboutImage}
            alt="Produtos Manuh Detox"
            fill
            sizes="(max-width: 1024px) 400px, 50vw"
            className="object-contain p-8 drop-shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
          />
        </div>
        <div>
          <SectionHeader
            tag="Nossa Historia"
            title="Mais do que produtos, uma transformacao"
            align="left"
            inverted
          />
          <p className="mb-5 text-base leading-loose text-white/70">
            A Manuh Detox nasceu da vontade de ajudar mulheres a se sentirem bem
            consigo mesmas, de forma natural e saudavel.
          </p>
          <p className="mb-5 text-base leading-loose text-white/70">
            Selecionamos cada ingrediente com carinho e rigor, garantindo que
            voce tenha acesso ao que ha de melhor em suplementacao natural para
            emagrecimento e bem-estar.
          </p>
          <div className="mt-9 flex justify-center gap-10 border-t border-white/10 pt-9 lg:justify-start">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <strong className="block font-display text-3xl font-bold text-brand-light">
                  {stat.value}
                </strong>
                <span className="text-[13px] text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
