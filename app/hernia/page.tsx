import type { Metadata } from "next";
import Script from "next/script";
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

      {/* Hernia Meta Pixel (noscript) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1632218381590731&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Hernia Meta Pixel – the global pixel in layout.tsx shares fbq, so
          trackSingle keeps PageView from double-firing on either pixel */}
      <Script
        id="meta-pixel-hernia"
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

            fbq('init', '1632218381590731');
            fbq('trackSingle', '1632218381590731', 'PageView');
          `,
        }}
      />
    </LeadFormModalProvider>
  );
}
