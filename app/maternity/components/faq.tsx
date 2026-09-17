"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const faqs = [
  {
    question: "When should I start pregnancy check-ups?",
    answer: "It is best to consult your gynaecologist as early as possible after pregnancy is confirmed.",
  },
  {
    question: "How often should I visit the doctor during pregnancy?",
    answer: "Your doctor will suggest a check-up schedule based on your pregnancy and individual needs.",
  },
  {
    question: "Does Cronus provide both normal and C-section delivery care?",
    answer: "Yes, delivery care can be planned based on medical requirements and your doctor's recommendation.",
  },
  {
    question: "Do you provide postnatal care?",
    answer: "Yes, maternity care can continue after delivery with support for both mother and baby.",
  },
  {
    question: "When should I book my maternity consultation?",
    answer: "You can book a consultation whenever you need pregnancy-related medical guidance.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <h3 className="font-semibold text-[#1B2936] pr-4">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-[#64748B] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#64748B] flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4">
                      <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right side - Image */}
          <Reveal delay={0.3}>
            <div className="relative">
              <Image
                src="/maternity3.png"
                alt="Maternity care questions and support"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}