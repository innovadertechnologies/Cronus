"use client";

import { useState } from "react";
import { Sparkles, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const rows = [
  { label: "Scars & Stitches", lap: "Minimal", open: "More" },
  { label: "Cuts", lap: "<10mm", open: "Larger" },
  { label: "Pain", lap: "Potentially Less", open: "May Be Higher" },
  { label: "Infection Chances", lap: "Very Low*", open: "May Be Higher" },
  { label: "Hospital Duration", lap: "Short", open: "Longer" },
  { label: "Recovery Period", lap: "May Be Quicker*", open: "May Take Longer" },
  { label: "Blood Loss", lap: "Low", open: "Higher" },
];

function ComparisonCard({
  variant,
  hoveredIndex,
  setHoveredIndex,
}: {
  variant: "lap" | "open";
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) {
  const isLap = variant === "lap";

  return (
    <div
      className={`relative flex-1 rounded-[28px] border-2 p-6 sm:p-8 ${
        isLap
          ? "border-[#129EA8]/25 bg-[#E3F6F7]/60"
          : "border-[#EF5350]/20 bg-red-50/50"
      }`}
    >
      {isLap && (
        <span className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-[#129EA8] px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
          <Sparkles className="h-3.5 w-3.5" />
          Recommended
        </span>
      )}

      <span
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
          isLap ? "bg-[#129EA8]/15 text-[#129EA8]" : "bg-[#EF5350]/12 text-[#EF5350]"
        }`}
      >
        {isLap ? (
          <CheckCircle2 className="h-6 w-6" strokeWidth={2.25} />
        ) : (
          <ShieldAlert className="h-6 w-6" strokeWidth={2.25} />
        )}
      </span>

      <h3 className="mt-4 text-xl font-extrabold text-[#005F70]">
        {isLap ? "Laparoscopic Hernia Surgery" : "Open Surgery"}
      </h3>
      <p className={`text-sm font-semibold ${isLap ? "text-[#129EA8]" : "text-[#EF5350]"}`}>
        {isLap ? "Modern & Minimally Invasive" : "Traditional Surgical Approach"}
      </p>

      <div className="mt-5 flex flex-col divide-y divide-slate-900/5">
        {rows.map((row, index) => (
          <div
            key={row.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-between gap-4 rounded-lg px-2.5 py-3 transition-colors ${
              hoveredIndex === index ? (isLap ? "bg-[#129EA8]/10" : "bg-[#EF5350]/8") : ""
            }`}
          >
            <span className="flex items-center gap-2 text-sm font-medium text-[#1B2936]">
              {isLap ? (
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#129EA8]" />
              ) : (
                <XCircle className="h-4 w-4 shrink-0 text-[#EF5350]" />
              )}
              {row.label}
            </span>
            <span className="text-sm font-bold text-[#005F70]">
              {isLap ? row.lap : row.open}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Comparison() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"lap" | "open">("lap");

  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Laparoscopic Surgery vs Open Surgery
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            See why laparoscopic surgery may be preferred for suitable patients.
          </p>
        </div>

        {/* Mobile toggle */}
        <div className="mt-8 flex justify-center sm:hidden">
          <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            {(["lap", "open"] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMobileView(option)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                  mobileView === option
                    ? option === "lap"
                      ? "bg-[#129EA8] text-white"
                      : "bg-[#EF5350] text-white"
                    : "text-[#64748B]"
                }`}
              >
                {option === "lap" ? "Laparoscopic" : "Open Surgery"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:items-stretch">
          <div className={mobileView === "open" ? "hidden sm:block sm:flex-1" : "sm:flex-1"}>
            <ComparisonCard variant="lap" hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
          </div>
          <div className={mobileView === "lap" ? "hidden sm:block sm:flex-1" : "sm:flex-1"}>
            <ComparisonCard variant="open" hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} />
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-[#64748B]">
            *Recovery and outcomes vary depending on the patient&rsquo;s condition, hernia
            type, surgical technique and other individual factors. Your surgeon will
            recommend the appropriate approach.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
