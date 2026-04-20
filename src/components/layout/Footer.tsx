import { BrandLogo } from "@/components/ui/BrandLogo";
import { site, whatsappLink, instagramLink, emailLink } from "@/data/site";

const productLinks = [
  { label: "Plena 3X1", href: "#produtos" },
  { label: "Lifefit", href: "#produtos" },
];

const helpLinks = [
  { label: "Perguntas frequentes", href: "#" },
  { label: "Trocas e devolucoes", href: "#" },
  { label: "Rastrear pedido", href: "#" },
  { label: "Formas de pagamento", href: "#" },
];

const paymentMethods = ["Pix", "Visa", "Master", "Boleto"];

export function Footer() {
  const year = new Date().getFullYear();
  const phoneDisplay = formatPhone(site.whatsapp);

  return (
    <footer className="bg-ink pt-16 text-white/70">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo className="text-white [&_em]:text-brand-light" href="/" />
            <p className="mt-4 text-sm leading-relaxed">
              Suplementos naturais para quem busca resultados reais com saude e
              bem-estar.
            </p>
            <div className="mt-5 flex gap-3">
              <SocialLink href={instagramLink} label="Instagram">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href={whatsappLink()} label="WhatsApp">
                <WhatsAppGlyph />
              </SocialLink>
              <SocialLink href={emailLink} label="E-mail">
                <MailIcon />
              </SocialLink>
            </div>
          </div>

          <FooterColumn title="Produtos" links={productLinks} />
          <FooterColumn title="Ajuda" links={helpLinks} />

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[1px] text-white">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={emailLink}
                  className="text-white/50 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-white"
                >
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/50 transition-colors hover:text-white"
                >
                  @{site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-white/35 md:flex-row">
          <span>&copy; {year} {site.name}. Todos os direitos reservados.</span>
          <div className="flex gap-2">
            {paymentMethods.map((m) => (
              <span
                key={m}
                className="rounded bg-white/10 px-2.5 py-1 text-[11px]"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[1px] text-white">
        {title}
      </h4>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/15 text-base transition-colors hover:border-brand hover:bg-brand hover:text-white"
    >
      {children}
    </a>
  );
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  if (digits.length !== 13) return raw;
  const area = digits.slice(2, 4);
  const p1 = digits.slice(4, 9);
  const p2 = digits.slice(9);
  return `(${area}) ${p1}-${p2}`;
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.5.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.5-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.5.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 2.2c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.8a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zm0 2.2a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm6-2.6a1.3 1.3 0 1 1-2.7 0 1.3 1.3 0 0 1 2.7 0z" />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zm-5.4 7.4c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 12.1 2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.9-9.9 9.9zm8.4-18.3A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 0 0-3.5-8.4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
