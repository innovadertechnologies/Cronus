import { CheckCircle2, Users, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { LeadForm } from "@/app/components/lead-form";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const trustCards = [
  { icon: CheckCircle2, label: "Advanced Laparoscopic Procedure" },
  { icon: Users, label: "16K+ Surgeries Performed", highlight: "16K+" },
  { icon: ShieldCheck, label: "Insurance & Cashless Facility" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#E3F6F7] via-[#F8FAFC] to-[#F8FAFC]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#129EA8]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#129EA8]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-14">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#129EA8] shadow-sm ring-1 ring-[#129EA8]/10">
              ADVANCED HERNIA CARE · DELHI-NCR
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#005F70] sm:text-5xl lg:text-[3.4rem]">
              Best Hernia Treatment in Delhi-NCR
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
              Expert evaluation and advanced laparoscopic treatment with complete
              pre and post-surgery care at Cronus Multispeciality Hospital.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {trustCards.map(({ icon: Icon, label, highlight }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_-16px_rgba(11,31,51,0.3)] transition-transform hover:-translate-y-0.5"
                >
                  {highlight ? (
                    <span className="text-lg font-extrabold text-[#129EA8]">{highlight}</span>
                  ) : (
                    <Icon className="h-5 w-5 shrink-0 text-[#129EA8]" strokeWidth={2.25} />
                  )}
                  <span className="text-sm font-semibold leading-snug text-[#1B2936]">
                    {highlight ? "Surgeries Performed" : label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(22,163,106,0.55)] transition-all hover:brightness-105"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${CLINIC_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#005F70] px-7 py-3.5 text-base font-semibold text-[#005F70] transition-colors hover:bg-[#005F70] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <LeadForm id="lead-form" className="relative" />

            <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1B2936] shadow-md ring-1 ring-slate-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#129EA8]" />
                Experienced Surgeons
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1B2936] shadow-md ring-1 ring-slate-100">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#129EA8]" />
                Modern Surgical Facilities
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
