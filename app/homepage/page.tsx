import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { homepageMetadata, homepageSchema } from "@/app/lib/seo";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { IntroLine } from "./components/intro-line";
import { AppointmentSection } from "./components/appointment-section";
import { BottomAppointment } from "./components/bottom-appointment";
import { About } from "./components/about";
import { TrustStrip } from "./components/trust-strip";
import { Location } from "./components/location";
import { Departments } from "./components/departments";
import { Doctors } from "./components/doctors";
import { WhyChoose } from "./components/why-choose";
import { Reviews } from "./components/reviews";
import { Faq } from "./components/faq";
import { QuickActions } from "./components/quick-actions";
import { WhatsappButton } from "./components/whatsapp-button";
import { HOMEPAGE_FAQS } from "./data";
import { getGoogleReviews } from "./google-reviews";

export const metadata: Metadata = homepageMetadata();

// The on-page questions are numbered ("1. …"); search engines get them without the number.
const schema = homepageSchema(
  HOMEPAGE_FAQS.map((faq) => ({ ...faq, question: faq.question.replace(/^\d+\.\s*/, "") }))
);

export default async function Homepage() {
  // Live from the Google Places API when configured, otherwise the rating and
  // reviews already published on the site. Cached for a day.
  const google = await getGoogleReviews();

  return (
    // Bottom padding matches the quick-action bar so it never covers the
    // footer. From 1376px the bar is a side dock, so no padding is needed.
    <div className="pb-[calc(4rem+env(safe-area-inset-bottom))] min-[1376px]:pb-0">
      <JsonLd data={schema} />
      <Header />
      <main>
        <Hero rating={google.rating} count={google.count} googleUrl={google.url} />
        <IntroLine />
        <AppointmentSection />
        <About />
        <TrustStrip rating={google.rating} />
        <Location />
        <Departments />
        <Doctors />
        <WhyChoose rating={google.rating} count={google.count} />
        {/* Google and Practo reviews, one section */}
        <Reviews google={google} />
        <Faq />
        <BottomAppointment />
      </main>
      <Footer />
      <QuickActions />
      <WhatsappButton />
    </div>
  );
}
