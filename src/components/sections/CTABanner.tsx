import { whatsappLink } from "@/data/site";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-dark py-16 text-center text-white">
      <div className="container-site">
        <h2 className="mb-3 font-display text-[36px] font-semibold">
          Pronta para comecar sua transformacao?
        </h2>
        <p className="mb-8 text-base opacity-90">
          Fale com a gente pelo WhatsApp e tire todas as suas duvidas
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="btn-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4-.1-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zm-5.4 7.4c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 12.1 2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.9-9.9 9.9zm8.4-18.3A11.8 11.8 0 0 0 12.1 0C5.5 0 .2 5.3.2 11.9c0 2.1.5 4.1 1.6 5.9L.1 24l6.3-1.7a11.9 11.9 0 0 0 5.7 1.5c6.5 0 11.9-5.3 11.9-11.9a11.8 11.8 0 0 0-3.5-8.4z" />
          </svg>
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
