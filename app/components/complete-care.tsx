"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Stethoscope, Scissors, HeartPulse } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Pre-Surgery Evaluation",
    description: "A specialist evaluates your condition and discusses the right approach.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Diagnostic Support",
    description: "Relevant diagnostics help confirm the type and extent of the hernia.",
  },
  {
    number: "03",
    icon: Scissors,
    title: "Surgical Treatment",
    description: "Treatment is carried out using modern surgical techniques.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Post-Operative Care",
    description: "Comprehensive support and monitoring through your recovery.",
  },
];

export function CompleteCare() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Complete Care Under One Roof
          </h2>
        </div>

        {/* Desktop: horizontal journey */}
        <div className="relative mt-16 hidden sm:block">
          <div className="absolute left-0 right-0 top-[27px] h-0.5 bg-slate-200" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[27px] h-0.5 bg-gradient-to-r from-[#129EA8] to-[#129EA8]"
          />

          <div className="relative grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-[#F8FAFC] bg-[#005F70] text-white shadow-md">
                  <step.icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <span className="mt-4 text-xs font-extrabold tracking-widest text-[#129EA8]">
                  {step.number}
                </span>
                <h3 className="mt-1.5 text-base font-bold text-[#1B2936]">{step.title}</h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-10 flex flex-col sm:hidden">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative flex gap-4 pb-8 pl-1 last:pb-0"
            >
              {index < steps.length - 1 && (
                <span className="absolute left-[27px] top-14 h-full w-0.5 bg-slate-200" />
              )}
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#005F70] text-white shadow-md">
                <step.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <div className="pt-1">
                <span className="text-xs font-extrabold tracking-widest text-[#129EA8]">
                  {step.number}
                </span>
                <h3 className="mt-0.5 text-base font-bold text-[#1B2936]">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
