import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Products } from "@/components/sections/Products";
import { TestimonialBanner1 } from "@/components/sections/TestimonialBanner1";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { TestimonialBanner2 } from "@/components/sections/TestimonialBanner2";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <TestimonialBanner1 />
        <Benefits />
        <About />
        <TestimonialBanner2 />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
