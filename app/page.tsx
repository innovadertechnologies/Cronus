import { AnnouncementBar } from "@/app/components/announcement-bar";
import { Navbar } from "@/app/components/navbar";
import { Hero } from "@/app/components/hero";
import { TrustMetrics } from "@/app/components/trust-metrics";
import { DiagnosisToRecovery } from "@/app/components/diagnosis-to-recovery";
import { Comparison } from "@/app/components/comparison";
import { HerniaTypes } from "@/app/components/hernia-types";
import { HerniaBanner } from "@/app/components/hernia-banner";
import { Faq } from "@/app/components/faq";
import { DualCta } from "@/app/components/dual-cta";
import { Footer } from "@/app/components/footer";
import { StickyMobileCta } from "@/app/components/sticky-mobile-cta";
import { LeadFormModalProvider } from "@/app/components/lead-form-modal-provider";

export default function Home() {
  return (
    <LeadFormModalProvider>
      <div className="flex flex-1 flex-col">
        <AnnouncementBar />
        <Navbar />

        <main className="flex-1">
          <Hero />
          <TrustMetrics />
          <DiagnosisToRecovery />
          <HerniaTypes />
          <HerniaBanner />
          <Comparison />
          <Faq />
          <DualCta />
        </main>

        <Footer />
        <StickyMobileCta />
      </div>
    </LeadFormModalProvider>
  );
}
