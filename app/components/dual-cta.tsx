"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_NAME, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { LeadForm } from "@/app/components/lead-form";
import { useLeadFormModal } from "@/app/components/lead-form-modal-provider";

const tags = [
  "Inguinal Hernia",
  "Umbilical Hernia",
  "Incisional Hernia",
  "Ventral Hernia",
  "Recurrent Hernia",
];

export function DualCta() {
  const { openLeadForm } = useLeadFormModal();

  return (
    <section id="contact" className="scroll-mt-24 bg-[#0B3446]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
            Your Health. Our Priority.
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Need Hernia Surgery?
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80">
            Get expert evaluation and surgical care at {CLINIC_NAME}, Delhi.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/70">
            {tags.join("  •  ")}
          </p>

          <h3 className="mt-7 text-lg font-bold text-white">
            Book Your Consultation Today
          </h3>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(18,158,168,0.55)] transition-all hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              onClick={openLeadForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#0B3446]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <LeadForm id="contact-form" idPrefix="contact" />
        </Reveal>
      </div>
    </section>
  );
}
