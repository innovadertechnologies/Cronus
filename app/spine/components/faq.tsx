import { ChevronRight, Plus } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";

const faqs = [
  {
    question: "Does every slipped disc need surgery?",
    answer:
      "No. Treatment depends on your symptoms, diagnosis and overall condition. Surgery may be considered when appropriate.",
  },
  {
    question: "What is discectomy surgery?",
    answer:
      "Discectomy is a procedure to remove the part of a slipped or herniated disc that is pressing on a nerve. It may help reduce leg pain, numbness and nerve-related symptoms in suitable patients.",
  },
  {
    question: "When should I see a spine specialist?",
    answer:
      "Consider seeing a spine specialist if back or neck pain lasts for weeks, spreads down your arm or leg, or comes with numbness, tingling or weakness, or if it is affecting your daily activities.",
  },
  {
    question: "Is spine surgery the only treatment option?",
    answer:
      "No. Many spine problems improve with non-surgical care such as medication, physiotherapy and rehabilitation. Dr. Sandeep Singh will suggest the right option after evaluating your condition.",
  },
  {
    question: "How can I consult Dr. Sandeep Singh?",
    answer: `You can book a consultation using the form on this page, or call us at ${CLINIC_PHONE_DISPLAY}. Our team will help you schedule your visit at Cronus Multispeciality Hospital, Chhatarpur.`,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 lg:scroll-mt-20 bg-gradient-to-b from-white to-[#F3F9FD] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqs.map(({ question, answer }, i) => (
            <details
              key={question}
              name="spine-faq"
              open={i === 0}
              className="group rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)] open:border-[#129EA8]/30"
            >
              <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <ChevronRight
                  className="h-5 w-5 shrink-0 text-[#0B2A4A] transition-transform group-open:rotate-90"
                  aria-hidden
                />
                <span className="flex-1 text-[15px] font-bold text-[#0B2A4A] sm:text-base">{question}</span>
                <Plus
                  className="h-5 w-5 shrink-0 text-[#0B2A4A] transition-transform group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="px-5 pb-5 pl-[52px] text-sm leading-relaxed text-[#64748B] sm:text-[15px]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
