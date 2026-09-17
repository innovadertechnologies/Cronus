"use client";

import { MessageSquare, Heart, Bed, User, Baby } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { useBookingModal } from "./booking-modal-provider";

const journeySteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "First Consultation",
    description: "Understand your pregnancy and get personalized medical guidance.",
  },
  {
    number: "02", 
    icon: Heart,
    title: "Antenatal Care",
    description: "Regular check-ups and monitoring to track your pregnancy journey.",
  },
  {
    number: "03",
    icon: Bed,
    title: "Delivery Care", 
    description: "Get medical support and guidance throughout your delivery.",
  },
  {
    number: "04",
    icon: User,
    title: "Postnatal Care",
    description: "Continued care for mother and baby after delivery.",
  },
  {
    number: "05",
    icon: Baby,
    title: "Newborn Care",
    description: "Support and medical attention for your little one's early days.",
  },
];

export function CareJourney() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="care-journey" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute bottom-8 left-8 opacity-40">
        <div className="text-5xl text-teal-300">🌿</div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
              Care at Every Stage of Your Pregnancy
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-[#64748b] max-w-3xl mx-auto">
              From your first consultation to welcoming your little one, Cronus is here to support you at every step.
            </p>
          </Reveal>
        </div>

        {/* Timeline - Clean icons only */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {journeySteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="text-center relative">
                  {/* Icon */}
                  <div className="relative inline-flex mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-pink-200 text-pink-500 shadow-lg">
                      <step.icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Step number */}
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-[#1e3a5f]">{step.number}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748b] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <Reveal delay={0.6}>
          <div className="text-center">
            <p className="text-2xl text-[#1e3a5f] mb-8 handwriting">
              One journey. Complete maternity care. ♥
            </p>
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#2d4a6b] transition-colors"
            >
              Book Your Consultation →
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}