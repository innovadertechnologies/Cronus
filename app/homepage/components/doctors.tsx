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
      className={`absolute inset-0 flex items-center justify-center font-semibold text-[#0B3446]/70 ${initialsClass}`}
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
        {/* Full width, so the centred heading lines up with the page centre */}
        <SectionHeading
          id="homepage-doctors-title"
          eyebrow="MEET OUR MEDICAL TEAM"
          title="Experienced Doctors. Thoughtful Healthcare."
          description="Our doctors combine their medical expertise and experience to provide guidance, diagnosis, and treatment across specialties."
        />

        <div className="mt-8 grid gap-6 sm:mt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-8">
          <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 sm:flex-row">
            {featured.image && (
              <div className="relative aspect-[4/3] w-full shrink-0 bg-[#E3F6F7] sm:aspect-auto sm:w-[44%]">
                <Portrait doctor={featured} sizes="(min-width: 1024px) 230px, (min-width: 640px) 44vw, 100vw" initialsClass="" />
              </div>
            )}
            <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-8">
              <div className="flex items-center gap-4">
                {!featured.image && (
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E3F6F7] text-lg font-semibold text-[#0B6A73] ring-1 ring-[#0E7C86]/15"
                  >
                    {initials(featured.name)}
                  </span>
                )}
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#0B6A73]">Featured doctor</p>
                  <p className="mt-0.5 text-sm text-[#5B6B73]">{featured.department}</p>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-semibold leading-tight text-[#0B3446] sm:text-[1.75rem] sm:tracking-[-0.01em]">
                {featured.name}
              </h3>
              <p className="mt-2 text-base font-medium text-[#0B6A73]">{featured.speciality}</p>
              <p className="mt-4 border-t border-[#0B3446]/10 pt-4 text-[15px] leading-relaxed text-[#46575F]">
                Providing consultation and medical care for chest and respiratory conditions.
              </p>
            </div>
          </article>

          <div className="lg:self-start">
            <p className="text-sm font-medium text-[#0B6A73]">Other Featured Specialists</p>
            <ul className="mt-3 grid grid-cols-3 gap-3 sm:mt-4 sm:gap-6">
              {ROW_DOCTORS.map((d) => (
                <DoctorCard key={d.name} doctor={d} />
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <a
            id="homepage-doctors-view-all-btn"
            href={OUR_DOCTORS_URL}
            className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#0B3446]/20 bg-white px-4 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446] sm:h-12 sm:px-6 sm:text-base"
          >
            <span>Meet Our Doctors</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
