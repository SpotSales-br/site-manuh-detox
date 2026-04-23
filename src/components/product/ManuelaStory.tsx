import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { aboutStats } from "@/data/content";
import { testimonialBanner2 } from "@/data/products";

const painPoints = [
  "Já tentou dieta e desistiu no meio do caminho",
  "Já começou academia e não conseguiu manter a rotina",
  "Já comprou coisas que prometeram muito... e não entregaram nada",
];

export function ManuelaStory() {
  return (
    <section className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white">
      <div className="container-site pt-16 md:pt-20">
        <div className="mx-auto max-w-[760px] text-center">
          <div data-animate="fade-up">
            <SectionHeader
              tag="Nossa História"
              title="Mais do que produtos, uma transformação"
              align="center"
              inverted
            />
          </div>

          <p
            data-animate="fade-up"
            className="mb-6 text-lg leading-relaxed text-white/80 md:text-xl"
          >
            Se você chegou até aqui... provavelmente já passou por isso:
          </p>

          <ul
            data-animate="stagger-right"
            data-animate-stagger="0.1"
            className="mx-auto mb-8 flex max-w-[520px] flex-col gap-3 text-left"
          >
            {painPoints.map((item) => (
              <li
                key={item}
                data-animate-item
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
            E o pior... você se olha no espelho e sente que não é mais você.
          </p>
          <p className="mb-8 text-base leading-loose text-white/70">
            Aquela mulher confiante, leve, que se amava... sumiu.
          </p>

          <div
            data-animate="slide-blur"
            className="mx-auto mb-10 max-w-[560px] rounded-2xl border border-brand/30 bg-brand/10 px-6 py-6 md:px-8 md:py-7"
          >
            <p className="text-[15px] leading-relaxed text-white/75 md:text-base">
              Mas deixa eu te falar algo com toda sinceridade:
            </p>
            <p className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
              O problema nunca foi você.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/75 md:text-base">
              O problema foram os métodos complicados, restritivos e impossíveis
              de manter na vida real.
            </p>
          </div>

          <p className="mb-2 text-base leading-loose text-white/80">
            Meu nome é Manuela.
          </p>
          <p className="mb-10 text-base leading-loose text-white/70">
            E eu já estive exatamente onde você está hoje.
          </p>

          <div
            data-animate="scale-in"
            className="mx-auto mb-10 flex max-w-[520px] items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 md:gap-10 md:px-10"
          >
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
            Até que decidi mudar. Não com dieta maluca. Não passando fome. Mas
            encontrando algo que funcionasse na vida real.
          </p>
          <p
            data-animate="clip-reveal"
            className="mb-5 inline-block font-display text-2xl font-semibold text-brand-light md:text-3xl"
          >
            E foi assim que eu eliminei 30kg.
          </p>
          <p className="mb-5 text-base leading-loose text-white/70">
            Hoje, com 67kg, eu não só recuperei meu corpo... eu recuperei minha
            confiança.
          </p>
          <p className="mb-2 text-base leading-loose text-white/80">
            E o mais importante:
          </p>
          <p className="text-base leading-loose text-white/70">
            Eu não fui a única. Minha irmã, meu esposo, pessoas próximas... e
            hoje centenas de mulheres também estão conseguindo.
          </p>

          <div
            data-animate="stagger-scale"
            data-animate-stagger="0.15"
            className="mt-10 flex flex-wrap justify-center gap-10 border-t border-white/10 pt-9"
          >
            {aboutStats.map((stat) => (
              <div key={stat.label} data-animate-item>
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
        <div
          data-animate="parallax"
          data-parallax-distance="120"
          className="absolute inset-0"
        >
          <Image
            src={testimonialBanner2}
            alt="Depoimento de cliente Manuh Detox"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
