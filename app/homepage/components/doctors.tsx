"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { initials } from "@/app/home/data";
import { requestBooking } from "@/app/home/components/booking";
import { FEATURED_DOCTOR, OTHER_DOCTORS, OUR_DOCTORS_URL, TEL_HREF, type HomepageDoctor } from "../data";
import { SectionHeading } from "./section-heading";

// Three compact cards (photo + name) shown beside the featured doctor.
const ROW_DOCTORS = OTHER_DOCTORS.slice(0, 3);

function Portrait({ doctor, sizes, initialsClass }: { doctor: HomepageDoctor; sizes: string; initialsClass: string }) {
  return doctor.image ? (
    <Image
      src={doctor.image}
      alt={`${doctor.name}, ${doctor.speciality} at Cronus Multispeciality Hospital`}
      fill
      sizes={sizes}
      className="object-cover object-top"
    />
  ) : (
    <span
      role="img"
      aria-label={`${doctor.name} (photo coming soon)`}
      className={`absolute inset-0 flex items-center justify-center font-semibold text-[#0B3446]/30 ${initialsClass}`}
    >
      {initials(doctor.name)}
    </span>
  );
}

// Compact card: photo and name only. Always three in one row, no scrolling.
function DoctorCard({ doctor }: { doctor: HomepageDoctor }) {
  const body = (
    <>
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#E3F6F7]">
        <Portrait doctor={doctor} sizes="(min-width: 1024px) 260px, 33vw" initialsClass="text-3xl sm:text-5xl" />
      </div>
      <h3 className="mt-2 text-[13px] font-semibold leading-snug text-[#0B3446] sm:mt-3 sm:text-base">{doctor.name}</h3>
    </>
  );

  return (
    <li className="min-w-0">
      {doctor.profileHref ? (
        <Link
          href={doctor.profileHref}
          aria-label={`${doctor.name}, ${doctor.speciality}`}
          className="block rounded-xl transition-opacity hover:opacity-90"
        >
          {body}
        </Link>
      ) : (
        body
      )}
    </li>
  );
}

export function Doctors() {
  const featured = FEATURED_DOCTOR;

  return (
    <section id="doctors" aria-labelledby="homepage-doctors-title" className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Heading with the "view all" link on its right */}
        <div className="flex items-end justify-between gap-4">
          <SectionHeading
            id="homepage-doctors-title"
            eyebrow="Our doctors"
            title="Meet our specialists"
            description="Experienced doctors across departments, all under one roof in Chhatarpur."
          />
          <a
            id="homepage-doctors-view-all-btn"
            href={OUR_DOCTORS_URL}
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-[#0B3446]/20 bg-white px-4 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446] sm:h-12 sm:px-6 sm:text-base"
          >
            <span>
              View all<span className="hidden sm:inline"> doctors</span>
            </span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        {/* Featured doctor on the left, three doctors beside him (stacked below lg) */}
        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
          <article className="flex overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10">
            {/* Photo runs to the card edge, so its corners follow the card. Side by side
                with the text at every size, so the card matches the height of the row. */}
            <div className="relative aspect-[3/4] w-28 shrink-0 bg-[#E3F6F7] sm:w-44 lg:aspect-auto lg:w-[44%]">
              <Portrait
                doctor={featured}
                sizes="(min-width: 1024px) 220px, 176px"
                initialsClass="text-3xl sm:text-5xl"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center p-4 sm:p-6">
              <p className="text-xs font-medium text-[#0E7C86] sm:text-sm">Featured doctor</p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-[#0B3446] sm:text-2xl">{featured.name}</h3>
              <p className="mt-1 text-sm text-[#46575F] sm:text-base">
                {featured.speciality} · {featured.department}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                <button
                  id="homepage-featured-doctor-book-btn"
                  type="button"
                  onClick={() => requestBooking({ department: featured.department, doctor: featured.name })}
                  className="inline-flex h-10 items-center rounded-lg bg-[#0E7C86] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0B6870] sm:h-12 sm:px-6 sm:text-base"
                >
                  Book appointment
                </button>
                <a
                  href={TEL_HREF}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#0B3446]/20 px-4 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446] sm:h-12 sm:px-6 sm:text-base"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  Call
                </a>
              </div>
            </div>
          </article>

          <ul className="grid grid-cols-3 gap-3 sm:gap-6 lg:content-start">
            {ROW_DOCTORS.map((d) => (
              <DoctorCard key={d.name} doctor={d} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
