import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { KNEE_HIP_FAQS } from "./components/faq-data";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { KneeHipForm } from "./components/knee-hip-form";
import { TrustBar } from "./components/trust-bar";
import { Symptoms } from "./components/symptoms";
import { ConditionsSection } from "./components/conditions-section";
import { MeetSpecialists } from "./components/meet-specialists";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal";

const page = LANDING_PAGES.kneeHip;

export const metadata: Metadata = pageMetadata(page);

export default function KneeHipPage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page, KNEE_HIP_FAQS)} />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Symptoms />
          <ConditionsSection />
          <MeetSpecialists />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </BookingModalProvider>
  );
}