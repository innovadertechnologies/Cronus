"use client";

import Image from "next/image";
import { Reveal } from "@/app/components/reveal";
import { useBookingModal } from "./booking-modal-provider";

const journeySteps = [
  {
    number: "01",
    title: "First Consultation",
    description: "Understand your pregnancy and get personalized medical guidance.",
    image: "/First_Consultation.png",
  },
  {
    number: "02", 
    title: "Antenatal Care",
    description: "Regular check-ups and monitoring to track your pregnancy journey.",
     image: "/anetalcare.png",
  },
  {
    number: "03",
    title: "Delivery Care", 
    description: "Get medical support and guidance throughout your delivery.",
     image: "/deliverycare.png",
  },
  {
    number: "04",
    title: "Postnatal Care",
    description: "Continued care for mother and baby after delivery.",
     image: "/postnantalcare.png",
  },
  {
    number: "05",
    title: "Newborn Care",
    description: "Support and medical attention for your little one's early days.",
     image: "/newborncare.png",
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

        {/* Timeline - Clean design without icons */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {journeySteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div className="text-center relative">
                  {/* Image for First Consultation or Step Number */}
                  {step.image ? (
                    <div className="relative inline-flex mb-6">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={120}
                        height={90}
                        className="rounded-lg shadow-md"
                      />
                    </div>
                  ) : (
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-[#1e3a5f]">{step.number}</span>
                    </div>
                  )}

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