"use client";

import { CalendarDays, CheckCircle2 } from "lucide-react";
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
    <section id="why-choose" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            Why Choose Cronus for Joint Replacement Surgery?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 shrink-0 fill-[#0E7C86] text-white" />
              <span className="text-[#1B2936] font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-[#64748B] mb-6 max-w-2xl mx-auto">
            Expert care focused on helping you move better and return to everyday activities.
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