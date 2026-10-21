"use client";

import Image from "next/image";
import { DOCTORS, initials } from "../data";
import { requestBooking } from "./booking";
import { SectionLabel } from "./section-label";

export function Doctors() {
  return (
    <section id="doctors" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionLabel>Cronus Multi Speciality Hospital</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.01em] text-[#0B3446] sm:text-[2.6rem]">Our doctors</h2>

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {DOCTORS.map((doctor) => (
            <li key={doctor.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#EDE8DF]">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-5xl font-semibold text-[#0B3446]/25">
                    {initials(doctor.name)}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0B3446]">{doctor.name}</h3>
              <p className="text-[15px] text-[#5B6B73]">{doctor.speciality}</p>
              <button
                type="button"
                onClick={() => requestBooking({ department: doctor.department, doctor: doctor.name })}
                className="mt-3 text-[15px] font-semibold text-[#0E7C86] underline decoration-[#0E7C86]/30 underline-offset-4 hover:decoration-[#0E7C86]"
              >
                Book appointment
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
