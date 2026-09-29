"use client";

import { CalendarDays } from "lucide-react";
import { useBookingModal } from "./booking-modal";
import { KneeHipForm } from "./knee-hip-form";

export function FinalCTA() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="book" className="bg-gradient-to-b from-[#F3F9FD] to-[#E4F1FA] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            Don't Let Joint Pain Hold You Back
          </h2>
          <p className="text-lg text-[#64748B] mb-2">
            Get expert care for your knee or hip pain.
          </p>
          <p className="text-lg font-semibold text-[#0B3446]">
            30+ Years Experience | 1,000+ Surgeries
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-bold text-[#0B3446] mb-6 lg:text-3xl">
              Ready to Get Back to Living Pain-Free?
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#64748B] text-left">Expert orthopedic specialists with 30+ years of experience</p>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#64748B] text-left">1,000+ successful joint replacement surgeries</p>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#64748B] text-left">Advanced minimally invasive surgical techniques</p>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#64748B] text-left">Comprehensive pre and post-operative care</p>
              </div>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="lg:hidden">
              <button
                onClick={openBookingModal}
                className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-white font-semibold text-lg shadow-lg hover:bg-teal-700 transition-all"
              >
                <CalendarDays className="h-5 w-5" />
                Book Consultation →
              </button>
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