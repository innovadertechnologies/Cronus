"use client";

import { Phone, ArrowRight, PhoneIncoming } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_NAME, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useLeadFormModal } from "@/app/components/lead-form-modal-provider";

export function DualCta() {
  const { openLeadForm } = useLeadFormModal();

  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-[#0B3446] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <Reveal className="mx-auto max-w-md">
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Get Expert Hernia Care at
            <br />
            {CLINIC_NAME}
          </h2>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openLeadForm}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0B3446] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0B3446]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>

      <div className="bg-[#DCEEF7] px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
        <Reveal delay={0.1} className="mx-auto max-w-md">
          <h2 className="text-2xl font-extrabold leading-tight text-[#0B3446] sm:text-3xl">
            Need Help With Your Hernia?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#3F5A66] sm:text-base">
            Don&rsquo;t let hernia pain or discomfort affect your daily life. Get
            expert evaluation and understand the right treatment option for you.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openLeadForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book your consultation
            </button>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B3446]/30 bg-white px-6 py-3.5 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
            >
              <PhoneIncoming className="h-4 w-4" />
              Get a call back
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
