"use client";

import { Heart, Users, Shield, Baby } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { useBookingModal } from "./booking-modal-provider";

const features = [
  {
    icon: Heart,
    title: "Personalized Pregnancy Care",
    description: "Care plans designed around your pregnancy needs.",
  },
  {
    icon: Users,
    title: "Experienced Medical Team",
    description: "Guidance from qualified doctors and healthcare professionals.",
  },
  {
    icon: Shield,
    title: "Complete Maternity Support",
    description: "Pregnancy, delivery and postnatal care under one roof.",
  },
  {
    icon: Baby,
    title: "Mother & Baby Focused Care",
    description: "A supportive approach for both mother and baby.",
  },
];

export function WhyChooseCronus() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="why-choose-cronus" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl">
              Why Choose Cronus?
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                  <feature.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1B2936]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.55)] transition-all hover:brightness-110"
            >
              Book Your Maternity Consultation
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}