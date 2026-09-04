"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const faqs = [
  {
    question: "What is a hernia?",
    answer:
      "A hernia occurs when an internal organ or tissue pushes through a weak spot in the surrounding muscle wall, often causing a visible bulge.",
  },
  {
    question: "Is hernia surgery necessary?",
    answer:
      "Not every hernia needs immediate surgery, but most require evaluation since they don't resolve on their own and can worsen over time.",
  },
  {
    question: "What is laparoscopic hernia surgery?",
    answer:
      "It's a minimally invasive technique performed through small incisions using a camera and specialized instruments, which may mean less pain and a quicker recovery.",
  },
  {
    question: "Can a hernia come back after surgery?",
    answer:
      "Recurrence is possible, though modern surgical techniques and mesh reinforcement significantly reduce the chances compared to older methods.",
  },
  {
    question: "When should I see a doctor for a hernia?",
    answer:
      "See a doctor as soon as you notice a bulge, pain, or discomfort, especially if it worsens with activity or is accompanied by sudden severe pain.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
              Frequently Asked Questions About Hernia Surgery
            </h2>
            <span className="mt-3 block h-1 w-14 rounded-full bg-[#129EA8]" />

            <div className="mt-8 flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-slate-200/80 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-semibold text-[#0B3446] sm:text-base">
                        {faq.question}
                      </span>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#129EA8]">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm leading-relaxed text-[#64748B]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="hidden lg:block">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/docf.png"
                alt="Doctor at Cronus Multispeciality Hospital — Your Health, Our Priority"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
