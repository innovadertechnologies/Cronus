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
    <section id="hero" className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0">
        <Image
          src="/gbbanner.png"
          alt="Smiling surgeon in scrubs standing in a modern operating room"
          fill
          priority
          className="object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] from-0% via-[#F8FAFC]/45 via-28% to-transparent to-52%" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8FAFC] to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[640px] lg:flex-row lg:items-center lg:justify-between lg:py-24">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#15803D] shadow-sm ring-1 ring-[#15803D]/10">
              RECOMMENDED FOR BETTER HEALTH
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F2544] sm:text-5xl lg:text-[3.15rem]">
              Best <span className="text-[#15803D]">Laparoscopic Gallbladder Surgery</span>{" "}
              Hospital in Delhi
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-lg font-semibold text-[#1B2936]">Expert treatment for:</p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-4 flex flex-col gap-3">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F5EA] text-[#15803D]">
                    <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-semibold text-[#1B2936]">{condition}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${CLINIC_PHONE_TEL}`}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(21,128,61,0.55)] transition-all hover:brightness-105"
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

        <div className="w-full max-w-md lg:mx-0">
          <Reveal delay={0.2}>
            <AppointmentForm id="lead-form" idPrefix="hero" variant="hero" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
