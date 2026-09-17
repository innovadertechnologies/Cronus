"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/app/components/reveal";



export function MaternityAppointmentCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pregnancyStage: "",
    preferredDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book-appointment" className="relative overflow-hidden bg-[#EAF6F8]">
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/maternity4.png"
          alt=""
          aria-hidden
          fill
          priority
          className="absolute inset-0 object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6F8] via-[#EAF6F8]/85 to-[#EAF6F8]/10 lg:via-[#EAF6F8]/60" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-[#1B2936]/70">
                Expert Care for You & Your Baby
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B3446] sm:text-5xl lg:text-[3.15rem]">
                Ready to Begin Your Maternity Journey?
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-lg text-[#1B2936]/80">
                Expert pregnancy care designed around you and your baby. Book your consultation today.
              </p>
            </Reveal>

          </div>

          <Reveal delay={0.2} className="relative">
            <div className="mx-auto max-w-lg lg:ml-auto lg:mr-0">
              {/* Appointment Form Card */}
              <div className="rounded-2xl bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
                <h3 className="mb-6 text-xl font-bold text-[#0B3446]">Book Your Appointment</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <select
                        name="pregnancyStage"
                        value={formData.pregnancyStage}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20 bg-white"
                        required
                      >
                        <option value="">Pregnancy Stage</option>
                        <option value="first-trimester">First Trimester</option>
                        <option value="second-trimester">Second Trimester</option>
                        <option value="third-trimester">Third Trimester</option>
                        <option value="trying-to-conceive">Trying to Conceive</option>
                        <option value="postnatal">Postnatal Care</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#F52D8A] py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 shadow-[0_14px_28px_-10px_rgba(245,45,138,0.4)]"
                  >
                    BOOK MY APPOINTMENT →
                  </button>
                </form>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>Call us for maternity care & appointment assistance</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}