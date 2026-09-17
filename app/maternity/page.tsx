import { Metadata } from "next";
import { Hero } from "./components/hero";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { CareJourney } from "./components/care-journey";
import { WhyChooseMaternity } from "./components/why-choose-maternity";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { MaternityAppointmentCTA } from "./components/maternity-appointment-cta";
import { BookingModal } from "./components/booking-modal";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { BookingModalProvider } from "./components/booking-modal-provider";

export const metadata: Metadata = {
  title: "Complete Maternity Care in Delhi-NCR | Cronus Multispeciality Hospital",
  description:
    "Expert pregnancy & maternity care designed around you and your baby. Complete pregnancy care, delivery and postnatal care under one roof at Cronus Hospital.",
};

export default function MaternityPage() {
  return (
    <BookingModalProvider>
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <WhyChooseCronus />
          <CareJourney />
          <WhyChooseMaternity />
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