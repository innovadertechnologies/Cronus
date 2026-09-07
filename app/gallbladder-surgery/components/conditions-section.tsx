"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Stethoscope } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal, RevealGroup } from "@/app/components/reveal";

const conditions = [
  {
    number: "01",
    image: "/gbc1.png",
    title: "Gallbladder Stones",
    description:
      "Stones that form inside the gallbladder and may cause abdominal pain, nausea or discomfort after meals.",
  },
  {
    number: "02",
    image: "/gbc2.png",
    title: "Recurring Gallbladder Pain",
    description:
      "Repeated episodes of pain or discomfort, particularly after eating, may require medical evaluation.",
  },
  {
    number: "03",
    image: "/gbc3.png",
    title: "Gallbladder Infection",
    description:
      "Infection or inflammation of the gallbladder can cause significant abdominal pain and other symptoms.",
  },
  {
    number: "04",
    image: "/gbc4.png",
    title: "Inflamed Gallbladder",
    description:
      "Inflammation of the gallbladder may occur due to blockage and can require medical or surgical treatment.",
  },
];

export function ConditionsSection() {
  return (
    <section id="conditions" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2544] sm:text-4xl">
            Gallbladder Problems We Treat
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#15803D]" />
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            Expert evaluation and surgical care for common gallbladder conditions.
          </p>
        </div>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <motion.div
              key={condition.title}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[22px] border border-slate-200/80 bg-white shadow-[0_10px_28px_-20px_rgba(11,31,51,0.35)] transition-shadow hover:shadow-[0_24px_44px_-20px_rgba(11,31,51,0.35)]"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-50">
                <Image
                  src={condition.image}
                  alt={condition.title}
                  fill
                  className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 pt-4">
                <h3 className="text-lg font-bold text-[#1B2936]">{condition.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                  {condition.description}
                </p>
                <span className="mt-4 inline-flex h-7 w-9 items-center justify-center rounded-full bg-[#E3F5EA] text-xs font-bold text-[#15803D]">
                  {condition.number}
                </span>
              </div>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#E3F5EA] px-6 py-5 sm:flex-row sm:px-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#15803D]">
                <Stethoscope className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-base font-bold text-[#0F2544] sm:text-lg">
                Experiencing Gallbladder Problems?
              </span>
            </div>
            <BookTrigger className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#15803D] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_-10px_rgba(21,128,61,0.5)] transition-all hover:brightness-105 sm:w-auto sm:text-base">
              Consult a Specialist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </BookTrigger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
