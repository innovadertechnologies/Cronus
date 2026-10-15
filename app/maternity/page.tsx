import type { Metadata } from "next";
import Script from "next/script";
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

      {/* Maternity Meta Pixel (noscript) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=2184190035465019&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Maternity Meta Pixel – the global pixel in layout.tsx shares fbq, so
          trackSingle keeps PageView from double-firing on either pixel */}
      <Script
        id="meta-pixel-maternity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '2184190035465019');
            fbq('trackSingle', '2184190035465019', 'PageView');
          `,
        }}
      />
    </BookingModalProvider>
  );
}