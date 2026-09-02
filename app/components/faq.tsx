"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const faqs = [
  {
    question: "What is a hernia?",
    answer:
      "A hernia occurs when an organ or tissue pushes through a weak area in the surrounding muscle or tissue.",
  },
  {
    question: "Is hernia surgery necessary?",
    answer:
      "Treatment depends on the type, size, symptoms and overall condition of the patient. A specialist can recommend the appropriate treatment.",
  },
  {
    question: "What is laparoscopic hernia surgery?",
    answer:
      "It is a minimally invasive surgical technique performed through small incisions using a camera and specialized instruments.",
  },
  {
    question: "Can a hernia come back after surgery?",
    answer:
      "There is a possibility of recurrence after hernia repair. Your surgeon can discuss the risks and factors that may affect recurrence.",
  },
  {
    question: "When should I see a doctor for a hernia?",
    answer:
      "If you notice a new or growing bulge, pain, or discomfort in the abdomen or groin, consult a specialist for evaluation.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Frequently Asked Questions About Hernia Surgery
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    >
                      <span className="text-base font-semibold text-[#1B2936]">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#129EA8] shadow-sm"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-[#64748B] sm:px-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
