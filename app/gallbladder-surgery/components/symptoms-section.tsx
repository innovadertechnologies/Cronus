"use client";

import { motion } from "framer-motion";
import { AlertCircle, Utensils, Thermometer, Siren } from "lucide-react";
import { RevealGroup, Reveal } from "@/app/components/reveal";

const symptoms = [
  { icon: AlertCircle, label: "Persistent abdominal pain" },
  { icon: Utensils, label: "Pain after meals" },
  { icon: Thermometer, label: "Nausea or vomiting" },
  { icon: Siren, label: "Fever or signs of infection" },
];

export function SymptomsSection() {
  return (
    <section className="bg-[#FDECEC]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#C94B4B]">
            Know the Signs
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            When Should You Seek Medical Evaluation?
          </h2>
        </div>

        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {symptoms.map((symptom) => (
            <motion.div
              key={symptom.label}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#C94B4B]/15 bg-white p-6 text-center shadow-[0_10px_28px_-22px_rgba(201,75,75,0.5)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FDECEC] text-[#C94B4B]">
                <symptom.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <span className="text-sm font-semibold leading-snug text-[#1B2936]">
                {symptom.label}
              </span>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#64748B]">
            Symptoms can have different causes. A medical evaluation is important
            for an accurate diagnosis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
