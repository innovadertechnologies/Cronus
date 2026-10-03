import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { BookingModalProvider } from "@/app/gallbladder-surgery/components/booking-modal";
import { Navbar } from "@/app/gallbladder-surgery/components/navbar";
import { Hero } from "@/app/gallbladder-surgery/components/hero";
import { TrustStrip } from "@/app/gallbladder-surgery/components/trust-strip";
import { ConditionsSection } from "@/app/gallbladder-surgery/components/conditions-section";
import { SurgerySection } from "@/app/gallbladder-surgery/components/surgery-section";
import { DiagnosisCta } from "@/app/gallbladder-surgery/components/diagnosis-cta";
import { WhyChooseUs } from "@/app/gallbladder-surgery/components/why-choose-us";
import { DoctorProfile } from "@/app/gallbladder-surgery/components/doctor-profile";
import { CareJourney } from "@/app/gallbladder-surgery/components/care-journey";
import { SymptomsSection } from "@/app/gallbladder-surgery/components/symptoms-section";
import { FinalCta } from "@/app/gallbladder-surgery/components/final-cta";
import { Footer } from "@/app/gallbladder-surgery/components/footer";
import { StickyMobileCta } from "@/app/gallbladder-surgery/components/sticky-mobile-cta";

const page = LANDING_PAGES.gallbladder;

export const metadata: Metadata = pageMetadata(page);

export default function GallbladderSurgeryPage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page)} />
      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <TrustStrip />
          <ConditionsSection />
          <SurgerySection />
          <DiagnosisCta />
          <WhyChooseUs />
          <DoctorProfile />
          <CareJourney />
          <SymptomsSection />
          <FinalCta />
        </main>

        <Footer />
        <StickyMobileCta />
      </div>
    </BookingModalProvider>
  );
}
