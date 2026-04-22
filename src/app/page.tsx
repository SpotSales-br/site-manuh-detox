import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Products } from "@/components/sections/Products";
import { Benefits } from "@/components/sections/Benefits";
import { HowToUse } from "@/components/sections/HowToUse";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <Products />
        <HowToUse />
        <TestimonialMarquee />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
