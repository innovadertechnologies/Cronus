"use client";

import Image from "next/image";
import { Calendar, GraduationCap, Award } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const doctors = [
  {
    name: "Dr. Dheeraj Nath",
    title: "Orthopedic Surgeon & Joint Replacement Surgeon",
    experience: "27+ Years of Experience",
    education: "MBBS, MS – Orthopaedics",
    expertise: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Joint Replacement",
      "Arthritis Management",
      "Degenerative Joint Conditions",
      "Orthopedic Surgery",
    ],
    image: "/docimage.png",
    buttonText: "Book Your Orthopedic Consultation",
  },
  {
    name: "Dr. Sandeep Singh",
    title: "Orthopedic Surgeon & Spine Specialist",
    experience: "30+ Years of Experience",
    education: "MBBS, MS – Orthopaedics",
    expertise: [
      "Spine Surgery",
      "Orthopedic Surgery",
      "Spine & Pain Management",
      "Complex Spine Conditions",
      "Adult Spine Surgery",
      "Orthopedic Trauma Care",
    ],
    image: "/kneedr.jpeg",
    buttonText: "Book Your Spine Consultation",
  },
];

function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center max-w-sm mx-auto">
      {/* Doctor Image */}
      <div className="mb-6">
        <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top"
            sizes="160px"
          />
        </div>
      </div>

      {/* Doctor Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {doctor.name}
      </h3>

      {/* Specialty */}
      <p className="text-lg font-semibold text-teal-600 mb-4">
        {doctor.title}
      </p>

      {/* Experience */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Calendar className="h-5 w-5 text-gray-500" />
        <span className="text-gray-600 font-medium">
          {doctor.experience}
        </span>
      </div>

      {/* Qualifications */}
      <div className="mb-6 text-left">
        <div className="flex items-center gap-2 mb-3">
          <GraduationCap className="h-5 w-5 text-teal-600" />
          <span className="font-semibold text-gray-900">Qualifications:</span>
        </div>
        <p className="text-gray-600 pl-7">
          {doctor.education}
        </p>
      </div>

      {/* Expertise */}
      <div className="mb-8 text-left">
        <div className="flex items-center gap-2 mb-3">
          <Award className="h-5 w-5 text-teal-600" />
          <span className="font-semibold text-gray-900">Expertise:</span>
        </div>
        <ul className="space-y-2 pl-7">
          {doctor.expertise.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-600 flex-shrink-0"></div>
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={openBookingModal}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors shadow-lg"
      >
        {doctor.buttonText} →
      </button>
    </div>
  );
}

export function MeetSpecialists() {
  return (
    <section id="specialists" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Orthopedic Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced specialists dedicated to providing the best orthopedic care
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:gap-12">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}