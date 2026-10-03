import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { SPINE_FAQS } from "./components/faq-data";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { SpineForm } from "./components/spine-form";
import { TrustBar } from "./components/trust-bar";
import { Symptoms } from "./components/symptoms";
import { TreatmentOptions } from "./components/treatment-options";
import { MeetSpecialist } from "./components/meet-specialist";
import { SurgeryInfo } from "./components/surgery-info";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal";

const page = LANDING_PAGES.spine;

export const metadata: Metadata = pageMetadata(page);

export default function SpinePage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page, SPINE_FAQS)} />
      <Navbar />
      <main>
        <Hero />
        {/* On mobile the form sits between the banner and the trust bar */}
        <section className="bg-[#E4F1FA] px-4 pb-8 pt-2 sm:px-8 lg:hidden">
          <SpineForm id="spine-form" className="mx-auto max-w-lg" />
        </section>
        <TrustBar />
        <Symptoms />
        <TreatmentOptions />
        <MeetSpecialist />
        <SurgeryInfo />
        <WhyChooseCronus />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </BookingModalProvider>
  );
}
