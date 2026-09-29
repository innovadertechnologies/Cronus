"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const doctors = [
  {
    name: "Dr. Dheeraj Nath",
    title: "Orthopedic Surgeon | Joint Replacement Surgeon",
    experience: "27+ Years of Experience",
    education: "MBBS | MS – Orthopaedics",
    expertise: [
      "Knee Replacement Surgery",
      "Hip Replacement Surgery",
      "Joint Replacement",
      "Arthritis Management",
      "Degenerative Joint Conditions",
      "Orthopedic Surgery",
    ],
    image: "/kneedr.jpeg",
  },
  {
    name: "Dr. Sandeep Singh",
    title: "Orthopedic Surgeon | Spine & Pain Specialist",
    experience: "30+ Years Experience",
    education: "MBBS | MS – Orthopaedics",
    expertise: [
      "Spine Surgery",
      "Orthopedic Surgery",
      "Spine & Pain Management",
      "Complex Spine Conditions",
      "Adult Spine Surgery",
      "Orthopedic Trauma Care",
    ],
    image: "/docimage.png",
  },
];

function DoctorCard({ doctor }: { doctor: typeof doctors[0] }) {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        <div className="mb-4 h-32 w-32 shrink-0 overflow-hidden rounded-full sm:mb-0 sm:mr-6">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#0B3446] mb-1">{doctor.name}</h3>
          <p className="text-sm font-semibold text-teal-600 mb-1">{doctor.title}</p>
          <p className="text-sm text-[#64748B] mb-1">{doctor.experience}</p>
          <p className="text-sm text-[#64748B]">{doctor.education}</p>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#0B3446] mb-3">Expertise:</h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {doctor.expertise.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
              <span className="text-sm text-[#1B2936]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={openBookingModal}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-teal-700 transition-colors"
      >
        <CalendarDays className="h-5 w-5" />
        BOOK APPOINTMENT
      </button>
    </div>
  );
}

export function MeetSpecialists() {
  return (
    <section id="specialists" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            Meet Our Orthopedic Experts
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Experienced specialists dedicated to providing the best orthopedic care
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}