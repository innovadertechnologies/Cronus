import { MessageCircleQuestion, Plus } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { HOMEPAGE_FAQS, TEL_HREF, WHATSAPP_HREF } from "../data";
import { SectionHeading } from "./section-heading";

// Native <details>/<summary>: keyboard and screen-reader accessible, and
// works without any client JavaScript.
export function Faq() {
  return (
    <section id="faq" aria-labelledby="homepage-faq-title" className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24">
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

        <div className="space-y-3">
          {HOMEPAGE_FAQS.map((faq, i) => (
            <details
              key={faq.question}
              open={i === 0}
              className="group rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-[box-shadow] open:ring-[#0E7C86]/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[16px] font-semibold text-[#0B3446] sm:text-[17px]">{faq.question}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3F6F7] text-[#0E7C86] transition-[transform,background-color,color] duration-200 group-open:rotate-45 group-open:bg-[#0E7C86] group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="px-5 pb-5 pr-14 text-[15px] leading-relaxed text-[#46575F] sm:px-6 sm:pr-16">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
