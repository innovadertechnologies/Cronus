import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { UROLOGY_FAQS } from "./components/faq-data";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { UrologyForm } from "./components/urology-form";
import { TrustStrip } from "./components/trust-strip";
import { LaparoscopicBenefits } from "./components/laparoscopic-benefits";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { SurgeriesTreatments } from "./components/surgeries-treatments";
import { DoctorProfile } from "./components/doctor-profile";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal";

const page = LANDING_PAGES.urology;

export const metadata: Metadata = pageMetadata(page);

export default function UrologyPage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page, UROLOGY_FAQS)} />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          {/* Mobile Form Section - Between Hero and Trust Strip */}
          <section className="bg-white py-6 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-lg">
                <UrologyForm
                  id="mobile-form-section"
                  idPrefix="mobile-urology"
                  compact={true}
                  className="bg-white border border-teal-100 shadow-lg"
                />
              </div>
            </div>
          </section>
          <TrustStrip />
          <LaparoscopicBenefits />
          <WhyChooseCronus />
          <SurgeriesTreatments />
          <DoctorProfile />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </BookingModalProvider>
  );
}
