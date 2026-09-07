import { Phone, ArrowRight, ClipboardCheck } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

export function DiagnosisCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#E3F5EA] px-6 py-6 sm:flex-row sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#15803D]">
                <ClipboardCheck className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#0F2544] sm:text-lg">
                  Have You Been Diagnosed With Gallstones?
                </h2>
                <p className="text-sm leading-relaxed text-[#64748B]">
                  Get your condition evaluated by a surgical specialist.
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <BookTrigger className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-10px_rgba(21,128,61,0.5)] transition-all hover:brightness-105 sm:text-base">
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </BookTrigger>
              <a
                href={`tel:${CLINIC_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#15803D] bg-white px-6 py-3 text-sm font-semibold text-[#15803D] transition-colors hover:bg-[#15803D] hover:text-white sm:text-base"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
