"use client";

import { UrologyForm } from "./urology-form";

export function FinalCTA() {
  return (
    <section id="book" className="bg-gradient-to-br from-[#0B2A4A] to-[#0E7C86] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Book Your Urology Consultation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 lg:mx-0 lg:text-xl">
              Get expert guidance for kidney stones and other urological problems.
            </p>
            <p className="mt-6 text-base text-white/80">
              Our team will contact you to assist with your appointment.
            </p>
          </div>

          {/* Right Form */}
          <div>
            <UrologyForm idPrefix="final-cta" className="border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
