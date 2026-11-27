import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_US_URL, FACILITIES } from "../data";
import { SectionHeading } from "./section-heading";

// About Cronus first, then Facilities at a Glance below it, in the same order
// on every screen size. "Know More About Us" opens the existing About Us page
// on the main hospital website (no duplicate page is created here).
export function About() {
  return (
    <section id="about" aria-labelledby="homepage-about-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* About: heading, then the text across the full width */}
        <div>
          <SectionHeading
            id="homepage-about-title"
            align="left"
            eyebrow="ABOUT CRONUS MULTISPECIALITY HOSPITAL"
            title="Dedicated to Better Health, Every Step of the Way"
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#1B2936] sm:mt-8">
            <p>
              For more than two decades, Cronus Multispeciality Hospital has been providing healthcare services to families
              in Chhatarpur and South Delhi.
            </p>
            <p>
              With experienced doctors across 40+ medical specialties, we bring consultations, diagnostics, surgical care,
              and critical care facilities together under one roof.
            </p>
            <p>
              Our focus is on making quality healthcare accessible through experienced medical professionals, supportive
              staff, and a patient-centred approach.
            </p>
            <a
              id="homepage-about-view-more-btn"
              href={ABOUT_US_URL}
              className="mt-4 inline-flex h-12 items-center gap-2 rounded-lg bg-[#0E7C86] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0B6870]"
            >
              Know More About Us
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Facilities at a Glance: compact cards, photo on the left and text
            on the right. 2 per row on phones, 3 from 768px. */}
        <div className="mt-14 border-t border-[#0B3446]/10 pt-14 sm:mt-16 sm:pt-16">
          <h3 className="text-center text-[1.75rem] font-semibold leading-tight text-[#0B3446] sm:text-[2.5rem] sm:tracking-[-0.02em]">
            Facilities at a Glance
          </h3>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3 lg:gap-5">
            {FACILITIES.map((f) => (
              <li
                key={f.name}
                className="flex flex-col gap-2.5 rounded-xl bg-white p-2 ring-1 ring-[#0B3446]/10 sm:flex-row sm:items-center sm:gap-4 sm:p-3"
              >
                {/* Phones: photo on top, text below. From 640px: photo on the left. */}
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg bg-[#E3F6F7] sm:aspect-auto sm:h-16 sm:w-16 lg:h-24 lg:w-28">
                  <Image src={f.image} alt={f.imageAlt} fill sizes="(min-width: 1024px) 112px, (min-width: 640px) 64px, 50vw" className="object-cover" />
                </div>
                <div className="min-w-0 px-1 pb-1 sm:p-0">
                  <h4 className="text-[13px] font-semibold leading-snug text-[#0B3446] sm:text-base">{f.name}</h4>
                  <p className="mt-0.5 text-xs leading-snug text-[#5B6B73] sm:text-sm">{f.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
