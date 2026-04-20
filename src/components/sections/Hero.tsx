import Image from "next/image";
import { whatsappLink } from "@/data/site";

const HERO_IMAGE = "/hero-product.webp";
const HERO_IMAGE_ALT = "Kit Manuh Detox: Plena Unica Premium e Life Fit Pro";

export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#FAF5F0] via-[#F5EDE6] to-[#F0E8E0] py-20 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
        <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
          <h1 className="mb-5 font-display text-[40px] font-semibold leading-[1.15] text-ink md:text-[52px]">
            Transforme seu corpo com{" "}
            <em className="italic text-brand">suplementos naturais</em>
          </h1>
          <p className="mb-9 text-[17px] leading-relaxed text-ink-soft">
            Formulas naturais que ajudam a acelerar o metabolismo, reduzir a
            fome em ate 80% e melhorar o funcionamento intestinal. Resultados
            reais com ingredientes de alta qualidade.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a href="#produtos" className="btn-primary">
              Ver Produtos
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <Image
              src={HERO_IMAGE}
              alt={HERO_IMAGE_ALT}
              fill
              priority
              sizes="520px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
