"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/app/lib/seo";

// One question open at a time. The answer animates open and closed by
// transitioning its grid row from 0fr to 1fr, so it works for any answer
// length without measuring heights in JavaScript.
export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div
            key={faq.question}
            className={`rounded-2xl bg-white ring-1 transition-[box-shadow] duration-300 ${
              isOpen ? "ring-[#0E7C86]/30 shadow-[0_8px_24px_rgba(11,52,70,0.08)]" : "ring-[#0B3446]/10"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[16px] font-semibold text-[#0B3446] sm:px-6 sm:text-[17px]"
              >
                {faq.question}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "rotate-45 bg-[#0E7C86] text-white" : "bg-[#E3F6F7] text-[#0B6A73]"
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              {/* `inert` keeps links in a closed answer out of the tab order */}
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="px-5 pb-5 pr-14 text-[15px] leading-relaxed text-[#46575F] sm:px-6 sm:pr-16">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
