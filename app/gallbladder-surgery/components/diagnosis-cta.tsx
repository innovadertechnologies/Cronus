import { Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

export function DiagnosisCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#005F70] to-[#129EA8]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
          />
          <div className="relative mx-auto max-w-2xl px-6 py-14 text-center sm:px-10 sm:py-16">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Have You Been Diagnosed With Gallstones?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-white/80">
                Get your condition evaluated by a surgical specialist.
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
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
