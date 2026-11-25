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
            eyebrow="FAQs"
            title="Frequently asked questions"
            description="Answers to common questions about appointments, departments and visiting the hospital."
          />
          <div className="mt-8 rounded-2xl bg-[#0B3446] p-6 text-white">
            <MessageCircleQuestion className="h-8 w-8 text-[#8FD3D8]" />
            <p className="mt-3 text-lg font-semibold">Still have questions?</p>
            <p className="mt-1 text-[15px] text-white/75">Our team is happy to help, 24x7.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={TEL_HREF}
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F6F7]"
              >
                Call {CLINIC_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={HOMEPAGE_FAQS} />
      </div>
    </section>
  );
}
