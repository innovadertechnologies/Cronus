import type { Metadata } from "next";
import Script from "next/script";
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

      {/* Gallbladder Meta Pixel (noscript) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1581024777127762&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Gallbladder Meta Pixel – the global pixel in layout.tsx shares fbq, so
          trackSingle keeps PageView from double-firing on either pixel */}
      <Script
        id="meta-pixel-gallbladder"
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

            fbq('init', '1581024777127762');
            fbq('trackSingle', '1581024777127762', 'PageView');
          `,
        }}
      />
    </BookingModalProvider>
  );
}
