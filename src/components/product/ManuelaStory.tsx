import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats } from "@/data/content";
import { testimonialBanner2 } from "@/data/products";

const painPoints = [
  "Ja tentou dieta e desistiu no meio do caminho",
  "Ja comecou academia e nao conseguiu manter a rotina",
  "Ja comprou coisas que prometeram muito... e nao entregaram nada",
];

export function ManuelaStory() {
  return (
    <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white">
      <div className="container-site pt-16 md:pt-20">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionHeader
            tag="Nossa Historia"
            title="Mais do que produtos, uma transformacao"
            align="center"
            inverted
          />

          <p className="mb-6 text-lg leading-relaxed text-white/80 md:text-xl">
            Se voce chegou ate aqui... provavelmente ja passou por isso:
          </p>

          <ul className="mx-auto mb-8 flex max-w-[520px] flex-col gap-3 text-left">
            {painPoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] leading-relaxed text-white/80 md:text-base"
              >
                <span
                  aria-hidden
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand-light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-2 text-base leading-loose text-white/70">
            E o pior... voce se olha no espelho e sente que nao e mais voce.
          </p>
          <p className="mb-8 text-base leading-loose text-white/70">
            Aquela mulher confiante, leve, que se amava... sumiu.
          </p>

          <div className="mx-auto mb-10 max-w-[560px] rounded-2xl border border-brand/30 bg-brand/10 px-6 py-6 md:px-8 md:py-7">
            <p className="text-[15px] leading-relaxed text-white/75 md:text-base">
              Mas deixa eu te falar algo com toda sinceridade:
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
              O problema nunca foi voce.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75 md:text-base">
              O problema foram os metodos complicados, restritivos e impossiveis
              de manter na vida real.
            </p>
          </div>

          <p className="mb-2 text-base leading-loose text-white/80">
            Meu nome e Manuela.
          </p>
          <p className="mb-10 text-base leading-loose text-white/70">
            E eu ja estive exatamente onde voce esta hoje.
          </p>

          <div className="mx-auto mb-10 flex max-w-[520px] items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 md:gap-10 md:px-10">
            <div className="flex flex-col items-center">
              <strong className="font-display text-4xl font-bold text-white/80 md:text-5xl">
                97kg
              </strong>
              <span className="mt-1 text-xs uppercase tracking-[2px] text-white/50">
                Antes
              </span>
            </div>
            <span
              aria-hidden
              className="text-3xl font-light text-brand-light md:text-4xl"
            >
              &rarr;
            </span>
            <div className="flex flex-col items-center">
              <strong className="font-display text-4xl font-bold text-brand-light md:text-5xl">
                67kg
              </strong>
              <span className="mt-1 text-xs uppercase tracking-[2px] text-white/50">
                Depois
              </span>
            </div>
          </div>

          <p className="mb-5 text-base leading-loose text-white/70">
            Eu cheguei aos 97kg. Sem autoestima. Sem vontade de me arrumar. Sem
            me reconhecer no espelho.
          </p>
          <p className="mb-5 text-base leading-loose text-white/70">
            Ate que decidi mudar. Nao com dieta maluca. Nao passando fome. Mas
            encontrando algo que funcionasse na vida real.
          </p>
          <p className="mb-5 font-display text-2xl font-semibold text-brand-light md:text-3xl">
            E foi assim que eu eliminei 30kg.
          </p>
          <p className="mb-5 text-base leading-loose text-white/70">
            Hoje, com 67kg, eu nao so recuperei meu corpo... eu recuperei minha
            confianca.
          </p>
          <p className="mb-2 text-base leading-loose text-white/80">
            E o mais importante:
          </p>
          <p className="text-base leading-loose text-white/70">
            Eu nao fui a unica. Minha irma, meu esposo, pessoas proximas... e
            hoje centenas de mulheres tambem estao conseguindo.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-9">
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
