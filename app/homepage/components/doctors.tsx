"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Award, BadgeCheck, ChevronDown, GraduationCap, Phone } from "lucide-react";
import { initials } from "@/app/home/data";
import { requestBooking } from "@/app/home/components/booking";
import { FEATURED_DOCTOR, OTHER_DOCTORS, TEL_HREF, type HomepageDoctor } from "../data";
import { SectionHeading } from "./section-heading";

const INITIAL_COUNT = 3;

function Portrait({ doctor, sizes, initialsClass }: { doctor: HomepageDoctor; sizes: string; initialsClass: string }) {
  return doctor.image ? (
    <Image
      src={doctor.image}
      alt={`${doctor.name}, ${doctor.speciality} at Cronus Multispeciality Hospital`}
      fill
      sizes={sizes}
      className="object-cover object-top transition-transform duration-500"
    />
  ) : (
    <span
      role="img"
      aria-label={`${doctor.name} (photo coming soon)`}
      className={`absolute inset-0 flex items-center justify-center bg-[#E3F6F7] font-semibold text-[#0B3446]/30 ${initialsClass}`}
    >
      {initials(doctor.name)}
    </span>
  );
}

function DoctorCard({ doctor, index }: { doctor: HomepageDoctor; index: number }) {
  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-[box-shadow] duration-150 hover:ring-[#0E7C86]/40">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EDE8DF]">
        <Portrait
          doctor={doctor}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          initialsClass="text-6xl"
        />
        {doctor.experience && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium text-[#0B3446]">
            <Award className="h-3.5 w-3.5 text-[#0E7C86]" />
            {doctor.experience} experience
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-[#0B3446]">{doctor.name}</h3>
        <p className="mt-0.5 text-[15px] font-medium text-[#0E7C86]">{doctor.speciality}</p>
        {doctor.qualifications && (
          <p className="mt-3 flex gap-2 text-sm leading-relaxed text-[#5B6B73]">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="sr-only">Qualifications: </span>
              {doctor.qualifications}
            </span>
          </p>
        )}
        <div className="mt-auto flex items-center gap-3 pt-5">
          <button
            id={`homepage-doctors-book-${index + 1}-btn`}
            type="button"
            onClick={() => requestBooking({ department: doctor.department, doctor: doctor.name })}
            className="flex-1 rounded-lg bg-[#0E7C86] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0B6870]"
          >
            Book appointment
          </button>
          {doctor.profileHref && (
            <Link
              href={doctor.profileHref}
              className="rounded-lg border border-[#0B3446]/20 px-4 py-2.5 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
              aria-label={`View profile of ${doctor.name}`}
            >
              Profile
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}

export function Doctors() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? OTHER_DOCTORS : OTHER_DOCTORS.slice(0, INITIAL_COUNT);
  const doctor = FEATURED_DOCTOR;

  return (
    <section id="doctors" aria-labelledby="homepage-doctors-title" className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="homepage-doctors-title"
            eyebrow="Our doctors"
            title="Meet our specialists"
            description="Experienced doctors across departments, all under one roof in Chhatarpur."
          />
          <a
            href="#all-doctors"
            onClick={() => setShowAll(true)}
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#0B3446] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0E7C86]"
          >
            View all doctors
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Featured doctor */}
        <article className="mt-10 grid overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="group relative aspect-[4/3] md:aspect-auto md:min-h-[340px]">
            <Portrait doctor={doctor} sizes="(min-width: 768px) 40vw, 100vw" initialsClass="text-7xl sm:text-8xl" />
          </div>
          <div className="relative flex flex-col justify-center p-6 sm:p-10">
            
            <p className="relative inline-flex w-fit items-center gap-2 text-sm font-medium text-[#0E7C86]">
              <BadgeCheck className="h-3.5 w-3.5" />
              Featured doctor
            </p>
            <h3 className="relative mt-5 text-2xl font-semibold text-[#0B3446] sm:text-[2rem]">{doctor.name}</h3>
            <p className="relative mt-1 text-lg font-medium text-[#0E7C86]">{doctor.speciality}</p>
            <p className="relative mt-1 text-[15px] text-[#5B6B73]">Department of {doctor.department}</p>
            <p className="relative mt-5 max-w-lg text-[17px] leading-relaxed text-[#46575F]">
              Consult {doctor.name} at Cronus Multispeciality Hospital, Chhatarpur, for TB and chest-related concerns.
              Book an appointment and our team will confirm a time that suits you.
            </p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <button
                id="homepage-featured-doctor-book-btn"
                type="button"
                onClick={() => requestBooking({ department: doctor.department, doctor: doctor.name })}
                className="rounded-lg bg-[#0E7C86] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0B6870]"
              >
                Book appointment
              </button>
              <a
                href={TEL_HREF}
                className="inline-flex items-center gap-2 rounded-lg border border-[#0B3446]/20 px-6 py-3 font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
              >
                <Phone className="h-4 w-4" />
                Call now
              </a>
            </div>
          </div>
        </article>

        <ul id="all-doctors" className="mt-8 grid scroll-mt-28 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((d, i) => (
            <DoctorCard key={d.name} doctor={d} index={i} />
          ))}
        </ul>

        {OTHER_DOCTORS.length > INITIAL_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              id="homepage-doctors-view-all-btn"
              type="button"
              aria-expanded={showAll}
              aria-controls="all-doctors"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0B3446] px-7 py-3 font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
            >
              {showAll ? "Show fewer doctors" : `View all doctors (${OTHER_DOCTORS.length + 1})`}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
