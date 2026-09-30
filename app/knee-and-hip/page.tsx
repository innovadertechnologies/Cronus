import { Metadata } from "next";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { KneeHipForm } from "./components/knee-hip-form";
import { TrustBar } from "./components/trust-bar";
import { Symptoms } from "./components/symptoms";
import { ConditionsSection } from "./components/conditions-section";
import { MeetSpecialists } from "./components/meet-specialists";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal";

export const metadata: Metadata = {
  title: "Knee & Hip Replacement Surgery in Chhatarpur, Delhi | Cronus Multispeciality Hospital",
  description:
    "Advanced Orthopaedic care for pain free living. Expert knee & hip replacement surgery from experienced doctors with 30+ years of orthopedic experience and 1,000+ successful surgeries.",
};

export default function KneeHipPage() {
  return (
    <BookingModalProvider>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Symptoms />
          <ConditionsSection />
          <MeetSpecialists />
          <WhyChooseCronus />
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