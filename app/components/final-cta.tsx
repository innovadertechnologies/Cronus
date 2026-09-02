import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_NAME, CLINIC_PHONE_TEL } from "@/app/lib/site-config";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#005F70]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:26px_26px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#129EA8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Get Expert Hernia Care at {CLINIC_NAME}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Don&rsquo;t let hernia pain or discomfort affect your daily life. Get
            expert evaluation and understand the right treatment option for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(22,163,106,0.55)] transition-all hover:brightness-105"
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
        </Reveal>
      </div>
    </section>
  );
}
