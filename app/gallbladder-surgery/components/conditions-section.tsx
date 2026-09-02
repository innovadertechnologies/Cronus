"use client";

import { motion } from "framer-motion";
import { Gem, Activity, Thermometer, FlaskConical, ArrowUpRight } from "lucide-react";
import { RevealGroup } from "@/app/components/reveal";

const conditions = [
  {
    number: "01",
    icon: Gem,
    title: "Gallbladder Stones",
    description:
      "Stones that form inside the gallbladder and may cause abdominal pain, nausea or discomfort after meals.",
  },
  {
    number: "02",
    icon: Activity,
    title: "Recurring Gallbladder Pain",
    description:
      "Repeated episodes of pain or discomfort, particularly after eating, may require medical evaluation.",
  },
  {
    number: "03",
    icon: Thermometer,
    title: "Gallbladder Infection",
    description:
      "Infection or inflammation of the gallbladder can cause significant abdominal pain and other symptoms.",
  },
  {
    number: "04",
    icon: FlaskConical,
    title: "Inflamed Gallbladder",
    description:
      "Inflammation of the gallbladder may occur due to blockage and can require medical or surgical treatment.",
  },
];

export function ConditionsSection() {
  return (
    <section id="conditions" className="scroll-mt-24 bg-gradient-to-b from-[#F8FAFC] to-[#EFF6F6]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#129EA8]">
            Conditions We Treat
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Expert Care for Common Gallbladder Problems
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            Expert evaluation and surgical care for common gallbladder conditions.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <motion.div
              key={condition.title}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_10px_28px_-20px_rgba(11,31,51,0.35)] transition-shadow hover:shadow-[0_24px_44px_-20px_rgba(11,31,51,0.35)]"
            >
              <div className="flex items-start justify-between">
                <span className="text-3xl font-extrabold text-slate-200 transition-colors group-hover:text-[#129EA8]/30">
                  {condition.number}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-[#005F70] opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#129EA8]/10 group-hover:text-[#129EA8] group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3F6F7] text-[#129EA8] transition-transform duration-300 group-hover:scale-110">
                <condition.icon className="h-6 w-6" strokeWidth={2} />
              </span>

              <h3 className="mt-4 text-lg font-bold text-[#1B2936]">{condition.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                {condition.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
