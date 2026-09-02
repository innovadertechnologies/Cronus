"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup } from "@/app/components/reveal";

const types = [
  {
    number: "01",
    name: "Inguinal Hernia",
    description: "A hernia that develops in the groin area and is one of the most common types.",
  },
  {
    number: "02",
    name: "Umbilical Hernia",
    description: "A bulge that develops around the belly button.",
  },
  {
    number: "03",
    name: "Incisional Hernia",
    description: "A hernia that develops at or near a previous surgical incision.",
  },
  {
    number: "04",
    name: "Ventral Hernia",
    description: "A hernia that occurs through a weakness in the abdominal wall.",
  },
  {
    number: "05",
    name: "Recurrent Hernia",
    description: "A hernia that returns after previous hernia surgery.",
  },
];

export function HerniaTypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="hernia-types" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Types of Hernia We Treat
          </h2>
        </div>

        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={type.name}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 text-left shadow-[0_10px_28px_-20px_rgba(11,31,51,0.35)] transition-all hover:-translate-y-1 hover:border-[#129EA8]/30 hover:shadow-[0_20px_40px_-20px_rgba(11,31,51,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl font-extrabold text-slate-200 transition-colors group-hover:text-[#129EA8]/25">
                    {type.number}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 text-[#005F70] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#129EA8]/10 group-hover:text-[#129EA8]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1B2936]">{type.name}</h3>
                <p
                  className={`overflow-hidden text-sm leading-relaxed text-[#64748B] transition-all duration-300 sm:max-h-0 sm:opacity-0 sm:group-hover:mt-2.5 sm:group-hover:max-h-24 sm:group-hover:opacity-100 ${
                    isOpen ? "mt-2.5 max-h-24 opacity-100" : "mt-0 max-h-0 opacity-0 sm:mt-0"
                  }`}
                >
                  {type.description}
                </p>
              </button>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
