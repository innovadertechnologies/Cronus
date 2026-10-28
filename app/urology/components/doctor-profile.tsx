"use client";

import { GraduationCap, Award, Stethoscope } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const qualifications = [
  "22+ Years of Overall Experience",
  "Qualified Urology Specialist",
  "MBBS, MS – General Surgery",
  "MCh – Urology/Genito-Urinary Surgery",
  "Specialised Care for Kidney Stones & Urinary Problems",
];

export function DoctorProfile() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="doctor" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Meet Our Expert Urologist
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-12 mx-auto max-w-4xl">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#F3F9FD] p-8 shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)]">
            <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:gap-8">
              {/* Doctor Image Placeholder */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0E7C86] to-[#0B6B73] lg:h-40 lg:w-40">
                <Stethoscope className="h-16 w-16 text-white lg:h-20 lg:w-20" />
              </div>

              {/* Doctor Info */}
              <div className="mt-6 flex-1 lg:mt-0">
                <h3 className="text-2xl font-extrabold text-[#0B2A4A] lg:text-3xl">
                  Dr. Saurabh Kumar Sinha
                </h3>
                
                <div className="mt-4 space-y-2">
                  {qualifications.map((qual) => (
                    <p key={qual} className="flex items-start justify-center gap-2 text-sm text-[#64748B] lg:justify-start lg:text-base">
                      <Award className="mt-0.5 h-4 w-4 shrink-0 text-[#0E7C86]" />
                      {qual}
                    </p>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    onClick={openBookingModal}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C86] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0B6B73]"
                  >
                    <GraduationCap className="h-5 w-5" />
                    Consult Our Urologist Today!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
