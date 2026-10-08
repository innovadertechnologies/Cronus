"use client";

import { CheckCircle2, CalendarDays } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const features = [
  "30+ Years of Experience",
  "1,000+ Successful Surgeries",
  "High Success Rate",
  "Experienced Orthopedic Specialists",
  "Advanced Surgical Techniques",
  "Complete Pre & Post-Surgery Care",
];

export function WhyChooseCronus() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="why-choose" className="bg-gradient-to-b from-gray-50 to-white py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#0B3446] lg:text-4xl mb-6 lg:mb-8">
            Why Choose Cronus for Joint Replacement Surgery?
          </h2>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle2 className="h-5 w-5 shrink-0 fill-[#0E7C86] text-white" />
                  <span className="text-base font-medium text-[#1B2936]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-[#64748B] mb-6 lg:mb-8 max-w-2xl mx-auto">
              Expert care focused on helping you move better and return to everyday activities.
            </p>
            
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0E7C86] px-8 py-4 text-lg font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110"
            >
              <CalendarDays className="h-5 w-5" />
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}