import type { Metadata } from "next";
import Script from "next/script";
import { JsonLd } from "@/app/components/json-ld";
import { LANDING_PAGES, landingPageSchema, pageMetadata } from "@/app/lib/seo";
import { KNEE_HIP_FAQS } from "./components/faq-data";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { KneeHipForm } from "./components/knee-hip-form";
import { TrustBar } from "./components/trust-bar";
import { Symptoms } from "./components/symptoms";
import { ConditionsSection } from "./components/conditions-section";
import { MeetSpecialists } from "./components/meet-specialists";
import { Testimonials } from "./components/testimonials";
import { FAQ } from "./components/faq";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { StickyMobileCTA } from "./components/sticky-mobile-cta";
import { WhyChooseCronus } from "./components/why-choose-cronus";
import { BookingModalProvider } from "./components/booking-modal";

const page = LANDING_PAGES.kneeHip;

export const metadata: Metadata = pageMetadata(page);

export default function KneeHipPage() {
  return (
    <BookingModalProvider>
      <JsonLd data={landingPageSchema(page, KNEE_HIP_FAQS)} />
      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          {/* Mobile Form Section - Between Hero and Trust Bar */}
          <section className="bg-white py-6 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-lg">
                <KneeHipForm 
                  id="mobile-form-section" 
                  idPrefix="mobile-knee-hip"
                  compact={true}
                  className="bg-white border border-teal-100 shadow-lg"
                />
              </div>
            </div>
          </section>
          <TrustBar />
          <Symptoms />
          <ConditionsSection />
          <WhyChooseCronus />
          <MeetSpecialists />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>

      {/* Knee & Hip Meta Pixel (noscript) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=4274271186165568&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Knee & Hip Meta Pixel – the global pixel in layout.tsx shares fbq, so
          trackSingle keeps PageView from double-firing on either pixel */}
      <Script
        id="meta-pixel-knee-hip"
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

            fbq('init', '4274271186165568');
            fbq('trackSingle', '4274271186165568', 'PageView');
          `,
        }}
      />
    </BookingModalProvider>
  );
}