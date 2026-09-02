import { ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

export function SectionCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-16">
        <Reveal>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#005F70] sm:text-3xl">
            Experiencing Gallbladder Problems?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-[#64748B]">
            Get your symptoms evaluated by an experienced surgical specialist.
          </p>
          <a
            href="#lead-form"
            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(18,158,168,0.5)] transition-all hover:brightness-105"
          >
            Consult a Specialist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
