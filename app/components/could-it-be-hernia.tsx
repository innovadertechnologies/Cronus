"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const markers = [
  {
    id: "groin",
    label: "Groin Bulge",
    x: 50,
    y: 66,
    description:
      "A bulge or swelling in the groin area, which may become more noticeable when standing or straining.",
  },
  {
    id: "abdomen",
    label: "Abdominal Bulge",
    x: 50,
    y: 46,
    description:
      "A bulge or swelling in the abdomen that may be more noticeable when coughing, lifting or straining.",
  },
  {
    id: "pain",
    label: "Pain or Discomfort",
    x: 68,
    y: 40,
    description:
      "General discomfort, pressure or aching in the abdomen or groin area, with or without a visible bulge.",
  },
] as const;

export function CouldItBeHernia() {
  const [activeId, setActiveId] = useState<(typeof markers)[number]["id"]>("abdomen");
  const active = markers.find((marker) => marker.id === activeId)!;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Could It Be a Hernia?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            If you notice a new or growing bulge, pain, or discomfort in the abdomen
            or groin, consult a specialist for evaluation.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-xs">
            <div className="relative overflow-visible rounded-[28px] bg-gradient-to-b from-[#E3F6F7] to-[#F8FAFC] p-8">
              <svg viewBox="0 0 300 400" className="mx-auto h-auto w-full max-w-[220px]" aria-hidden>
                <circle cx="150" cy="46" r="30" fill="#CBD9E3" />
                <rect x="138" y="72" width="24" height="20" rx="8" fill="#CBD9E3" />
                <path
                  d="M95 100 Q150 82 205 100 L216 250 Q150 272 84 250 Z"
                  fill="#DCE7F0"
                  stroke="#B7C9D6"
                  strokeWidth="2"
                />
                <rect x="98" y="255" width="40" height="120" rx="18" fill="#DCE7F0" stroke="#B7C9D6" strokeWidth="2" />
                <rect x="162" y="255" width="40" height="120" rx="18" fill="#DCE7F0" stroke="#B7C9D6" strokeWidth="2" />
              </svg>

              {markers.map((marker) => (
                <button
                  key={marker.id}
                  type="button"
                  onClick={() => setActiveId(marker.id)}
                  aria-pressed={activeId === marker.id}
                  aria-label={marker.label}
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-offset-4"
                >
                  <span className="relative flex h-6 w-6 items-center justify-center">
                    {activeId === marker.id && (
                      <motion.span
                        layoutId="marker-ping"
                        className="absolute inset-0 rounded-full bg-[#129EA8]/30"
                        animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                        transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}
                    <span
                      className={`relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-md transition-colors ${
                        activeId === marker.id ? "bg-[#129EA8]" : "bg-[#129EA8]"
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {markers.map((marker) => (
                <button
                  key={marker.id}
                  type="button"
                  onClick={() => setActiveId(marker.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    activeId === marker.id
                      ? "border-[#129EA8] bg-[#129EA8] text-white"
                      : "border-slate-200 bg-white text-[#1B2936] hover:border-[#129EA8]/40"
                  }`}
                >
                  {marker.label}
                </button>
              ))}
            </div>

            <div className="relative mt-5 min-h-[110px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                >
                  <h3 className="text-base font-bold text-[#005F70]">{active.label}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                    {active.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <a
              href="#lead-form"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#129EA8] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_-12px_rgba(23,105,170,0.5)] transition-all hover:brightness-105"
            >
              Book an Evaluation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
