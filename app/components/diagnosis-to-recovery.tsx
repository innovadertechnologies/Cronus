"use client";

import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  UserCircle2,
  Syringe,
  HeartHandshake,
} from "lucide-react";
import { RevealGroup, Reveal } from "@/app/components/reveal";
import { useLeadFormModal } from "@/app/components/lead-form-modal-provider";

const cards = [
  {
    icon: AlertTriangle,
    title: "Why You Should Not Delay Hernia Treatment?",
    items: [
      "Risk of Hernia Complications",
      "Pain & Discomfort May Increase",
      "Hernia May Become Difficult to Treat",
      "Strangulation Can Require Urgent Medical Care",
    ],
    bg: "bg-[#FDF0F2]",
    ring: "ring-[#F8D7DC]",
    iconBg: "bg-[#F8D7DC]",
    iconColor: "text-[#D8324A]",
    titleColor: "text-[#B02840]",
    checkColor: "text-[#D8324A]",
  },
  {
    icon: UserCircle2,
    title: "Why Choose Cronus?",
    items: [
      "Experienced Surgical Specialists",
      "Advanced Laparoscopic Procedures",
      "Modern Surgical Facilities",
      "Comprehensive Pre & Post-Surgery Care",
    ],
    bg: "bg-[#EEF5FD]",
    ring: "ring-[#D3E6FA]",
    iconBg: "bg-[#D3E6FA]",
    iconColor: "text-[#1E6FD9]",
    titleColor: "text-[#14508F]",
    checkColor: "text-[#1E6FD9]",
  },
  {
    icon: Syringe,
    title: "Why Choose Laparoscopic Hernia Surgery?",
    items: [
      "Smaller Surgical Incisions",
      "Minimal Scarring",
      "Less Tissue Disruption",
      "Potentially Shorter Hospital Stay",
      "Recovery May Be Quicker for Suitable Patients",
    ],
    bg: "bg-[#EFFAF3]",
    ring: "ring-[#CFEEDA]",
    iconBg: "bg-[#CFEEDA]",
    iconColor: "text-[#1E9E5A]",
    titleColor: "text-[#166F41]",
    checkColor: "text-[#1E9E5A]",
  },
  {
    icon: HeartHandshake,
    title: "Complete Care Under One Roof",
    items: [
      "Pre-Surgery Evaluation",
      "Diagnostic Support",
      "Surgical Treatment",
      "Post-Operative Care",
    ],
    bg: "bg-[#F3F1FC]",
    ring: "ring-[#E1DCF7]",
    iconBg: "bg-[#E1DCF7]",
    iconColor: "text-[#6947C4]",
    titleColor: "text-[#4B2F9E]",
    checkColor: "text-[#4B2F9E]",
  },
];

export function DiagnosisToRecovery() {
  const { openLeadForm } = useLeadFormModal();

  return (
    <section id="why-cronus" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20 sm:pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#129EA8]">
              Trusted Hernia Treatment with Complete Care
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#0B3446] sm:text-5xl">
              From Diagnosis to Recovery, We&rsquo;re With You at Every Step
            </h2>
            <span className="mt-6 block h-1 w-14 rounded-full bg-[#129EA8]" />
            <p className="mt-7 max-w-xl text-xl leading-relaxed text-[#64748B]">
              From diagnosis to treatment and recovery, get expert surgical care
              and comprehensive support at every stage of your journey. Our
              specialists guide you through accurate evaluation, advanced
              laparoscopic treatment, and dedicated post-surgery follow-up at{" "}
              <span className="font-semibold text-[#1B2936]">
                Cronus Multispeciality Hospital
              </span>
              , so you can recover with confidence.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[24px] shadow-[0_30px_60px_-28px_rgba(11,52,70,0.35)]">
              <Image
                src="/hptl.png"
                alt="Cronus Multispeciality Hospital building"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-28 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[22px] p-6 ring-1 ${card.bg} ${card.ring}`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full ${card.iconBg} ${card.iconColor}`}
              >
                <card.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <h3 className={`mt-4 text-base font-bold leading-snug ${card.titleColor}`}>
                {card.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1B2936]">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${card.checkColor}`}
                      strokeWidth={2.25}
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </RevealGroup>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={openLeadForm}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.45)] transition-all hover:brightness-110"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
