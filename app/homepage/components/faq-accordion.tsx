"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Faq } from "@/app/lib/seo";

function splitNumber(question: string, index: number) {
  const match = question.match(/^(\d+)\.\s*(.*)$/);
  const n = match ? Number(match[1]) : index + 1;
  return { number: String(n).padStart(2, "0"), text: match ? match[2] : question };
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-[#0B3446]/10 border-y border-[#0B3446]/10">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        const { number, text } = splitNumber(faq.question, i);
        return (
          <div key={faq.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
              >
                <span
                  aria-hidden="true"
                  className={`w-7 shrink-0 pt-0.5 text-sm font-medium tabular-nums transition-colors sm:w-8 sm:pt-1 ${
                    isOpen ? "text-[#0B6A73]" : "text-[#8A979D]"
                  }`}
                >
                  {number}
                </span>
                <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-[#0B3446] transition-colors group-hover:text-[#0B6A73] sm:text-lg">
                  {text}
                </span>
                <Plus
                  className={`mt-0.5 h-5 w-5 shrink-0 transition-[transform,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-1 ${
                    isOpen ? "rotate-45 text-[#0B6A73]" : "text-[#5B6B73]"
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
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
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="max-w-[62ch] pb-6 pl-11 pr-9 text-[15px] leading-relaxed text-[#46575F] sm:pl-14 sm:pr-11 sm:text-base">
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
