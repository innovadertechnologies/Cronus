"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { AppointmentForm } from "@/app/gallbladder-surgery/components/appointment-form";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const conditions = [
  "Gallbladder Stones",
  "Recurring Abdominal Pain",
  "Gallbladder Infection",
  "Gallbladder Inflammation",
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#EAF6F8]">
      {/* The photo is the hero background. Mobile/tablet: it covers the top of
          the hero with the surgeon on the right and the heading on the left over
          a white fade. Desktop: it fills the hero behind the text and form. */}
      <div className="absolute inset-x-0 top-0 h-[27rem] sm:h-[32rem] lg:inset-0 lg:h-auto">
        <Image
          src="/gbbanner.png"
          sizes="(min-width: 1024px) 100vw, 160vw"
          alt="Smiling surgeon in scrubs standing in a modern operating room"
          fill
          priority
          className="object-cover object-[26%_top] lg:object-[68%_center]"
        />
        {/* White shade behind the heading so it stays readable on the photo. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/65 via-45% to-transparent to-75% lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#EAF6F8] to-transparent lg:h-28" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#EAF6F8] from-0% via-[#EAF6F8]/45 via-28% to-transparent to-52% lg:block" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-12 pt-6 sm:px-8 sm:pb-20 sm:pt-10 lg:min-h-[640px] lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#129EA8] shadow-sm ring-1 ring-[#129EA8]/10">
              RECOMMENDED FOR BETTER HEALTH
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 min-h-[7.4rem] max-w-[64%] text-[1.6rem] font-extrabold leading-[1.15] tracking-tight text-[#0B3446] sm:mt-5 sm:max-w-[60%] sm:min-h-0 sm:text-[2.6rem] lg:max-w-none lg:text-[3.15rem]">
              Best <span className="text-[#129EA8]">Laparoscopic Gallbladder Surgery</span>{" "}
              Hospital in Delhi
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-base font-semibold text-[#1B2936] sm:text-lg">Expert treatment for:</p>
          </Reveal>

          <Reveal delay={0.24}>
            {/* Two-column cards on phones; a plain list on desktop. */}
            <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 lg:flex lg:flex-col lg:gap-3">
              {conditions.map((condition) => (
                <li
                  key={condition}
                  className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-[0_6px_16px_-12px_rgba(11,52,70,0.5)] ring-1 ring-[#129EA8]/10 lg:gap-2.5 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-[13px] font-semibold leading-snug text-[#1B2936] sm:text-sm">{condition}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href={`tel:${CLINIC_PHONE_TEL}`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.55)] transition-all hover:brightness-105"
              >
                <Phone className="h-4 w-4" />
                Call Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-3 text-sm text-[#64748B]">
              Speak to our care team for immediate assistance.
            </p>
          </Reveal>
        </div>

        <div className="w-full max-w-lg lg:mx-0">
          <Reveal delay={0.2}>
            <AppointmentForm id="lead-form" idPrefix="hero" variant="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
