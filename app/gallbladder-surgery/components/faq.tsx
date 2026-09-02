"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const faqs = [
  {
    question: "What are gallbladder stones?",
    answer:
      "Gallbladder stones are hardened deposits that form inside the gallbladder and may cause abdominal pain, nausea or discomfort, particularly after meals.",
  },
  {
    question: "When is gallbladder surgery recommended?",
    answer:
      "Surgery is typically considered for symptomatic gallstones, recurring pain, infection or inflammation. A specialist will evaluate your condition and recommend the most appropriate treatment.",
  },
  {
    question: "What is laparoscopic gallbladder surgery?",
    answer:
      "It is a minimally invasive surgical technique performed through small abdominal incisions using a camera and specialized instruments, commonly used to remove the gallbladder.",
  },
  {
    question: "How long does recovery usually take?",
    answer:
      "Recovery varies by patient. Many people can return to normal activities sooner with a minimally invasive approach, depending on their individual condition.",
  },
  {
    question: "Will I need to stay in the hospital after surgery?",
    answer:
      "Hospital stay depends on your condition and how the procedure goes. Your surgeon will discuss the expected duration based on your evaluation.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can call our team directly or fill out the appointment form on this page, and our team will contact you to confirm your consultation.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? "border-[#129EA8]/30 bg-[#E3F6F7]/50" : "border-slate-200 bg-[#F8FAFC]"
                  }`}
                >
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
