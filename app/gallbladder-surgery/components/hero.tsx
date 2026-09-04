"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Users, ArrowRight, Phone } from "lucide-react";
import { AppointmentForm } from "@/app/gallbladder-surgery/components/appointment-form";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const conditions = [
  "Gallbladder Stones",
  "Recurring Abdominal Pain",
  "Gallbladder Infection",
  "Gallbladder Inflammation",
];

const badges = [
  { icon: ShieldCheck, label: "Advanced Laparoscopic Care" },
  { icon: Users, label: "Experienced Specialists" },
];
// th
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

      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 sm:py-12 lg:grid-cols-[0.85fr_1.3fr] lg:items-center lg:py-14">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-[#129EA8] shadow-sm ring-1 ring-[#129EA8]/10">
              ADVANCED LAPAROSCOPIC CARE
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#005F70] sm:text-5xl lg:text-[3.15rem]">
              Best <span className="text-[#129EA8]">Laparoscopic Gallbladder Surgery</span>{" "}
              Hospital in Delhi
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#64748B]">
              Expert surgical evaluation and minimally invasive treatment for
              gallbladder conditions.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 flex flex-col gap-3 sm:grid sm:grid-cols-2">
              {conditions.map((condition) => (
                <li key={condition} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F6F7] text-[#129EA8]">
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#129EA8] bg-white px-7 py-3.5 text-base font-semibold text-[#129EA8] transition-colors hover:bg-[#129EA8] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="#lead-form"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(18,158,168,0.55)] transition-all hover:brightness-105"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className="absolute -inset-x-6 -top-10 -z-10 hidden overflow-hidden rounded-[28px] lg:block">
            <Image
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&q=80"
              alt="Surgical team in a modern operating room preparing for a laparoscopic procedure"
              width={900}
              height={700}
              priority
              className="h-64 w-full rounded-[28px] object-cover opacity-90"
            />
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/10 to-transparent" />

            {badges.map((badge, index) => (
              <motion.span
                key={badge.label}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.6,
                }}
                className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#005F70] shadow-md backdrop-blur-md ${
                  index === 0 ? "left-3 top-3" : "right-3 top-3"
                }`}
              >
                <badge.icon className="h-3.5 w-3.5 text-[#129EA8]" />
                {badge.label}
              </motion.span>
            ))}
          </div>

          <Reveal delay={0.2}>
            <AppointmentForm id="lead-form" idPrefix="hero" variant="hero" className="lg:mt-8" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
