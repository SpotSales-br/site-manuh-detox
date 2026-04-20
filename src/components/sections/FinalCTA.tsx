import { whatsappLink, instagramLink, site } from "@/data/site";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-brand to-brand-dark py-16 text-center text-white"
    >
      <div className="container-site">
        <h2 className="mb-3 font-display text-[36px] font-semibold">
          Pronta para comecar sua transformacao?
        </h2>
        <p className="mb-8 text-base opacity-90">
          Fale com a gente no WhatsApp ou acompanhe novidades no Instagram
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href="#produtos"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-10 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          >
            Quero minha transformacao agora
          </a>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="btn-white"
            >
              <WhatsAppGlyph />
              Chamar no WhatsApp
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noreferrer"
              className="btn-white"
            >
              <InstagramGlyph />@{site.instagram}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zm-5.4 7.4c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 12.1 2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.9-9.9 9.9zm8.4-18.3A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 0 0-3.5-8.4z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.5.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.5-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.4.2-1 .3-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.5-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.4-.3-1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.5.5-1 .9-1.4.4-.4.9-.7 1.4-.9.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 3.8a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zm0 2.2a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm6-2.6a1.3 1.3 0 1 1-2.7 0 1.3 1.3 0 0 1 2.7 0z" />
    </svg>
  );
}
