import { Phone, ArrowRight } from "lucide-react";
import { AppointmentForm } from "@/app/gallbladder-surgery/components/appointment-form";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_NAME, CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const tags = ["Gallbladder Stones", "Recurring Pain", "Infection", "Inflammation"];

export function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-[#005F70]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#129EA8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="grid gap-12 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#129EA8]">
                Need Gallbladder Surgery?
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Get Expert Evaluation &amp; Surgical Care
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Get expert evaluation and surgical care at Cronus Multispeciality
                Hospital, Delhi.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-bold text-white">
                Book Your Consultation Today
              </h3>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${CLINIC_PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#005F70]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="#final-lead-form"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(18,158,168,0.55)] transition-all hover:brightness-105"
                >
                  Book Appointment
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <AppointmentForm id="final-lead-form" idPrefix="final" variant="compact" />
            </Reveal>
          </div>
        </div>
      </div>

      <p className="relative mx-auto max-w-7xl px-5 pb-10 text-center text-xs leading-relaxed text-white/40 sm:px-8">
        {CLINIC_NAME} · Delhi
      </p>
    </section>
  );
}
