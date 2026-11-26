import { MessageCircleQuestion } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { HOMEPAGE_FAQS, TEL_HREF, WHATSAPP_HREF } from "../data";
import { FaqAccordion } from "./faq-accordion";
import { SectionHeading } from "./section-heading";

// The section stays a server component; only the accordion is interactive.
export function Faq() {
  return (
    <section id="faq" aria-labelledby="homepage-faq-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="homepage-faq-title"
            align="left"
            eyebrow="NEED MORE INFORMATION?"
            title="Frequently Asked Questions"
          />
        </div>

        <FaqAccordion faqs={HOMEPAGE_FAQS} />
      </div>
    </section>
  );
}
