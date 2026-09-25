"use client";

import { GraduationCap, Award, Calendar, Stethoscope } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { useBookingModal } from "./booking-modal-provider";

const doctors = [
  {
    name: "Dr. Kumkum Sharma",
    title: "Gynecologist & Obstetrician",
    experience: "42+ Years of Experience",
    qualifications: "MBBS, MS – Obstetrics & Gynaecology, DGO",
    expertise: [
      "Pregnancy & Maternity Care",
      "Obstetric Care", 
      "Gynaecological Care"
    ]
  },
  {
    name: "Dr. Nilotpala Mohanty", 
    title: "Gynecologist | Obstetrician | Infertility Specialist",
    experience: "27+ Years of Experience",
    qualifications: "MBBS, MD – Obstetrics & Gynaecology",
    expertise: [
      "High-Risk Pregnancy Care",
      "Infertility",
      "Laparoscopic Gynaecological Surgery", 
      "Obstetric & Gynaecological Care"
    ]
  }
];

export function DoctorProfiles() {
  const { openBookingModal } = useBookingModal();

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl">
              Meet Our Gynaecology & Obstetrics Experts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-[#64748B] max-w-3xl mx-auto">
              Our experienced specialists are dedicated to providing exceptional care throughout your pregnancy journey.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.name} delay={index * 0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Doctor Info Header */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-10 w-10 text-[#129EA8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B3446] mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-[#129EA8] font-semibold text-lg mb-2">
                    {doctor.title}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#64748B]">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{doctor.experience}</span>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="h-5 w-5 text-[#129EA8] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1B2936] mb-1">Qualifications:</h4>
                      <p className="text-[#64748B] text-sm leading-relaxed">{doctor.qualifications}</p>
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="mb-8">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[#129EA8] mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#1B2936] mb-3">Expertise:</h4>
                      <ul className="space-y-2">
                        {doctor.expertise.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#129EA8] rounded-full flex-shrink-0"></span>
                            <span className="text-[#64748B] text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={openBookingModal}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-6 py-3 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(18,158,168,0.4)] transition-all hover:brightness-110 hover:shadow-[0_20px_40px_-10px_rgba(18,158,168,0.5)]"
                  >
                    Book Your Maternity Consultation →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}