import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const points = ["Expert Evaluation", "Modern Facilities", "Insurance / Cashless Facility"];

export function PrimaryCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#129EA8] to-[#005F70]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Have a Hernia? Get Expert Evaluation Today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/75">
            Understand your condition and discuss the right treatment option with a
            specialist.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-[#005F70] shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#005F70]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-semibold text-white/85">
                <CheckCircle2 className="h-4 w-4 text-white" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
