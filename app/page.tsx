import { AnnouncementBar } from "@/app/components/announcement-bar";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { TrustMetrics } from "@/app/components/trust-metrics";
import { WhyNotDelay } from "@/app/components/why-not-delay";
import { WhyChooseCronus } from "@/app/components/why-choose-cronus";
import { WhyLaparoscopic } from "@/app/components/why-laparoscopic";
import { Comparison } from "@/app/components/comparison";
import { CompleteCare } from "@/app/components/complete-care";
import { HerniaTypes } from "@/app/components/hernia-types";
import { CouldItBeHernia } from "@/app/components/could-it-be-hernia";
import { SpecialistTrust } from "@/app/components/specialist-trust";
import { PrimaryCta } from "@/app/components/primary-cta";
import { Faq } from "@/app/components/faq";
import { FinalCta } from "@/app/components/final-cta";
import { Footer } from "@/app/components/footer";
import { StickyMobileCta } from "@/app/components/sticky-mobile-cta";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <TrustMetrics />
        <WhyNotDelay />
        <WhyChooseCronus />
        <WhyLaparoscopic />
        <Comparison />
        <CompleteCare />
        <HerniaTypes />
        <CouldItBeHernia />
        <SpecialistTrust />
        <PrimaryCta />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  );
}
