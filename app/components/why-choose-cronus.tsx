"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, PlusCircle, HeartHandshake } from "lucide-react";
import { RevealGroup, Reveal } from "@/app/components/reveal";
import { StatCounter } from "@/app/components/stat-counter";

const points = [
  { icon: CheckCircle2, label: "Experienced Surgical Specialists" },
  { icon: Sparkles, label: "Advanced Laparoscopic Procedures" },
  { icon: PlusCircle, label: "Modern Surgical Facilities" },
  { icon: HeartHandshake, label: "Comprehensive Pre & Post-Surgery Care" },
];

export function WhyChooseCronus() {
  return (
    <section id="why-cronus" className="relative overflow-hidden bg-[#005F70]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#129EA8]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#129EA8]/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose Cronus?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/60">
            Experienced surgical care backed by modern facilities and comprehensive
            support.
          </p>
          <p className="mt-8 text-6xl font-extrabold tracking-tight text-[#129EA8] sm:text-7xl">
            <StatCounter value={16000} suffix="+" />
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-white/50">
            Surgeries Performed
          </p>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {points.map((point) => (
            <motion.div
              key={point.label}
              whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.08)" }}
              className="flex flex-col gap-4 rounded-[22px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#129EA8]/15 text-[#129EA8]">
                <point.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <p className="text-base font-semibold leading-snug text-white">{point.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
