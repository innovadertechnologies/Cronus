"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Reveal } from "@/app/components/reveal";
import { useBookingModal } from "./booking-modal-provider";

// Connection Line Animation Component
function ConnectingLine({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 md:hidden">
      <div 
        className={`bg-gradient-to-b from-pink-300 to-pink-500 w-full transition-all duration-1000 ease-out ${
          isVisible ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`}
      />
    </div>
  );
}

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
  const [visibleSteps, setVisibleSteps] = useState<number>(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => Math.max(prev, stepIndex + 1));
          }
        });
      },
      { threshold: 0.5 }
    );

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

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

        {/* Timeline with connecting animation */}
        <div className="relative mb-16">
          {/* Connecting line for mobile */}
          <div className="md:hidden relative">
            <ConnectingLine isVisible={visibleSteps >= journeySteps.length} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
            {journeySteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.1}>
                <div 
                  ref={(el) => { stepsRef.current[index] = el; }}
                  data-step={index}
                  className="text-center relative"
                >
                  {/* Image for First Consultation or Step Number */}
                  {step.image ? (
                    <div className="relative inline-flex mb-6">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={180}
                        height={135}
                        className="rounded-xl shadow-lg md:w-48 md:h-36"
                      />
                    </div>
                  ) : (
                    <div className="mb-6 relative">
                      {/* Connection dot for mobile */}
                      <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 -top-6 w-4 h-4 bg-pink-500 rounded-full z-10" />
                      <span className="text-4xl md:text-5xl font-bold text-[#1e3a5f] relative z-20 bg-white px-2">
                        {step.number}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1e3a5f] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-[#64748b] leading-relaxed max-w-xs mx-auto">
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