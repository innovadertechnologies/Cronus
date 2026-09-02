import type { Metadata } from "next";
import { Navbar } from "@/app/gallbladder-surgery/components/navbar";
import { Hero } from "@/app/gallbladder-surgery/components/hero";
import { TrustStrip } from "@/app/gallbladder-surgery/components/trust-strip";
import { ConditionsSection } from "@/app/gallbladder-surgery/components/conditions-section";
import { SectionCta } from "@/app/gallbladder-surgery/components/section-cta";
import { SurgerySection } from "@/app/gallbladder-surgery/components/surgery-section";
import { DiagnosisCta } from "@/app/gallbladder-surgery/components/diagnosis-cta";
import { WhyChooseUs } from "@/app/gallbladder-surgery/components/why-choose-us";
import { CareJourney } from "@/app/gallbladder-surgery/components/care-journey";
import { SymptomsSection } from "@/app/gallbladder-surgery/components/symptoms-section";
import { Faq } from "@/app/gallbladder-surgery/components/faq";
import { FinalCta } from "@/app/gallbladder-surgery/components/final-cta";
import { Footer } from "@/app/gallbladder-surgery/components/footer";
import { StickyMobileCta } from "@/app/components/sticky-mobile-cta";

export const metadata: Metadata = {
  title: "Best Laparoscopic Gallbladder Surgery Hospital in Delhi | Cronus Multispeciality Hospital",
  description:
    "Expert surgical evaluation and minimally invasive laparoscopic gallbladder surgery at Cronus Multispeciality Hospital, Delhi. Book a consultation today.",
};

export default function GallbladderSurgeryPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <ConditionsSection />
        <SectionCta />
        <SurgerySection />
        <DiagnosisCta />
        <WhyChooseUs />
        <CareJourney />
        <SymptomsSection />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <StickyMobileCta />
    </div>
  );
}
