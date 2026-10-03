import type { Faq } from "@/app/lib/seo";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";

export const SPINE_FAQS: Faq[] = [
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
