"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { useLeadFormModal } from "@/app/components/lead-form-modal-provider";

export function HerniaBanner() {
  const { openLeadForm } = useLeadFormModal();

  return (
    <section className="relative isolate aspect-[2172/724] min-h-[260px] w-full overflow-hidden sm:min-h-[220px]">
      <Image
        src="/hncbanner.png"
        alt="A couple walking outdoors, smiling"
        fill
        className="object-cover object-[20%_center] sm:object-center"
      />

      <div className="absolute inset-0 flex items-center">
        <div className="flex w-full py-6 pl-[38%] pr-6 sm:pl-[42%] sm:pr-10 lg:pr-16">
          <Reveal className="w-full text-left">
            <h2 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-2xl lg:text-3xl">
              Take the First Step Toward Hernia-Free Living
            </h2>
            <span className="mt-3 hidden h-1 w-14 rounded-full bg-[#129EA8] sm:block" />
            <p className="mt-3 hidden text-sm leading-relaxed text-white/85 sm:block sm:text-base">
              Expert diagnosis, advanced surgical care, and personalized
              treatment for lasting relief.
            </p>
            <button
              type="button"
              onClick={openLeadForm}
              className="group mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#0B3446] shadow-lg transition-transform hover:-translate-y-0.5 sm:mt-6 sm:rounded-xl sm:px-6 sm:py-3 sm:text-sm"
            >
              Consult a Hernia Specialist
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
