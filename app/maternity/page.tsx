import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { MATERNITY_FAQS } from "./components/faq-data";
import { Hero } from "./components/hero";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { CareJourney } from "./components/care-journey";
import { WhyChooseMaternity } from "./components/why-choose-maternity";
import { DoctorProfiles } from "./components/doctor-profiles";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { MaternityAppointmentCTA } from "./components/maternity-appointment-cta";
import { BookingModal } from "./components/booking-modal";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal-provider";

const page = LANDING_PAGES.maternity;

export const metadata: Metadata = pageMetadata(page);

export default function MaternityPage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page, MATERNITY_FAQS)} />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <WhyChooseCronus />
          <CareJourney />
          <DoctorProfiles />
          <Testimonials />
          <FAQ />
          <MaternityAppointmentCTA />
          <BookingModal />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </BookingModalProvider>
  );
}