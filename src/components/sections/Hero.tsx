import Image from "next/image";
import { products } from "@/data/products";
import { whatsappLink } from "@/data/site";

export function Hero() {
  const hero = products[0];

  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#FAF5F0] via-[#F5EDE6] to-[#F0E8E0] py-20 md:py-24">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-[60px]">
        <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-leaf-light px-4 py-2 text-xs font-semibold uppercase tracking-[1px] text-leaf">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            100% Natural
          </div>
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

        <div className="relative hidden justify-center lg:flex">
          <div className="relative h-[480px] w-[420px] overflow-hidden rounded-[24px] bg-gradient-to-b from-brand/[0.06] to-brand-light/30">
            <div className="relative h-full w-full p-8">
              <Image
                src={hero.image}
                alt={hero.imageAlt}
                fill
                priority
                sizes="420px"
                className="object-contain p-8 drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 hover:scale-105"
              />
            </div>

            <FloatCard
              className="top-5 -right-5 animate-float"
              iconBg="bg-brand-light"
              icon="\u2728"
              title="Glowvena"
              sub="Mais vendido"
            />
            <FloatCard
              className="bottom-10 -left-5 animate-float-delayed"
              iconBg="bg-leaf-light"
              icon="\u2705"
              title="+2.500"
              sub="Clientes satisfeitas"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  iconBg,
  icon,
  title,
  sub,
}: {
  className: string;
  iconBg: string;
  icon: string;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-[12px] bg-white px-5 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.08)] ${className}`}
    >
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-[10px] text-lg ${iconBg}`}
      >
        {icon}
      </div>
      <div className="text-[13px]">
        <strong className="block font-semibold text-ink">{title}</strong>
        <span className="text-xs text-ink-muted">{sub}</span>
      </div>
    </div>
  );
}
