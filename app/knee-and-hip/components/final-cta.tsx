"use client";

import { CalendarDays } from "lucide-react";
import { useBookingModal } from "./booking-modal";
import { KneeHipForm } from "./knee-hip-form";

export function FinalCTA() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="book" className="bg-gradient-to-b from-[#F3F9FD] to-[#E4F1FA] py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Heading - Centered in left area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center lg:text-center">
              <h2 className="text-2xl font-bold text-[#0B3446] sm:text-3xl lg:text-3xl xl:text-4xl mb-3 lg:mb-4 whitespace-nowrap">
                Don't Let Joint Pain Hold You Back
              </h2>
              <p className="text-lg text-[#64748B] mb-2">
                Get expert care for your knee or hip pain.
              </p>
              <p className="text-lg font-semibold text-[#0B3446]">
                30+ Years Experience | 1,000+ Surgeries
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <KneeHipForm 
              id="final-cta-form"
              idPrefix="final-cta"
              compact={true}
              className="mx-auto max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}