"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const faqs = [
  {
    question: "What is knee replacement surgery?",
    answer: "Knee replacement is a procedure in which damaged parts of the knee joint are replaced with artificial components to help improve movement and reduce pain.",
  },
  {
    question: "When is knee replacement recommended?",
    answer: "It may be considered when severe knee pain, stiffness, or joint damage affects daily activities and other treatments are not providing enough relief.",
  },
  {
    question: "What is hip replacement surgery?",
    answer: "Hip replacement involves replacing damaged parts of the hip joint with artificial components to improve joint function.",
  },
  {
    question: "How do I know if I need knee or hip replacement?",
    answer: "An orthopedic specialist will assess your symptoms, medical history, and scans to determine the most suitable treatment.",
  },
  {
    question: "How long does recovery take?",
    answer: "Recovery varies from person to person and depends on factors such as overall health, type of surgery, and rehabilitation.",
  },
  {
    question: "Is physiotherapy needed after joint replacement?",
    answer: "Physiotherapy is commonly an important part of recovery and helps improve strength, movement, and mobility.",
  },
  {
    question: "What should I do if I have severe knee or hip pain?",
    answer: "Consult an orthopedic specialist for proper evaluation rather than delaying treatment or self-medicating.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-[#0B3446] pr-4">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 text-[#0E7C86] shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-[#64748B] leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBookingModal } = useBookingModal();

  return (
    <section id="faq" className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[#1B2936] mb-6">Have more questions?</p>
          <p className="text-lg font-semibold text-[#0B3446] mb-6">
            Speak to Our Orthopedic Team
          </p>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C86] px-8 py-4 text-white font-semibold text-lg shadow-lg hover:brightness-110 transition-all"
          >
            <CalendarDays className="h-5 w-5" />
            Book Your Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}