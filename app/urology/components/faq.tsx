"use client";

import { ChevronRight, Plus } from "lucide-react";
import { useBookingModal } from "./booking-modal";
import { UROLOGY_FAQS } from "./faq-data";

export function FAQ() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="faq" className="scroll-mt-16 lg:scroll-mt-20 bg-gradient-to-b from-white to-[#F3F9FD] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Frequently Asked Questions (FAQs)
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {UROLOGY_FAQS.map(({ question, answer }, i) => (
            <details
              key={question}
              name="urology-faq"
              open={i === 0}
              className="group rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)] open:border-[#129EA8]/30"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <ChevronRight
                  className="h-5 w-5 shrink-0 text-[#0B2A4A] transition-transform group-open:rotate-90"
                  aria-hidden
                />
                <span className="flex-1 text-[15px] font-bold text-[#0B2A4A] sm:text-base">{question}</span>
                <Plus
                  className="h-5 w-5 shrink-0 text-[#0B2A4A] transition-transform group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 pl-[52px] text-sm leading-relaxed text-[#64748B] sm:text-[15px]">{answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-xl font-semibold text-[#0B2A4A]">
            Kidney Stone Se Related Koi Bhi Sawal Hai?
          </p>
          <p className="mb-6 text-lg text-[#64748B]">
            Aaj Hi Urologist Se Consult Karein!
          </p>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C86] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#0B6B73] transition-colors"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
