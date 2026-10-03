import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { HERNIA_FAQS } from "@/app/components/faq-data";
import { AnnouncementBar } from "@/app/components/announcement-bar";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { DiagnosisToRecovery } from "@/app/components/diagnosis-to-recovery";
import { Comparison } from "@/app/components/comparison";
import { HerniaTypes } from "@/app/components/hernia-types";
import { HerniaBanner } from "@/app/components/hernia-banner";
import { DoctorProfile } from "@/app/components/doctor-profile";
import { Faq } from "@/app/components/faq";
import { DualCta } from "@/app/components/dual-cta";
import { Footer } from "@/app/components/footer";
import { StickyMobileCta } from "@/app/components/sticky-mobile-cta";
import { LeadFormModalProvider } from "@/app/components/lead-form-modal-provider";

const page = LANDING_PAGES.hernia;

export const metadata: Metadata = pageMetadata(page);

export default function Home() {
  return (
    <LeadFormModalProvider>
      <JsonLd data={landingPageSchema(page, HERNIA_FAQS)} />
      <div className="flex flex-1 flex-col">
        <AnnouncementBar />
        <Navbar />

        <main className="flex-1">
          <Hero />
          <DiagnosisToRecovery />
          <HerniaTypes />
          <HerniaBanner />
          <Comparison />
          <DoctorProfile />
          <Faq />
          <DualCta />
        </main>

        <Footer />
        <StickyMobileCta />
      </div>
    </LeadFormModalProvider>
  );
}
