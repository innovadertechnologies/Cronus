import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_US_URL, FACILITIES } from "../data";
import { SectionHeading } from "./section-heading";

// Text-only About section; "Know More About Us" opens the existing About Us
// page on the main hospital website (no duplicate page is created here).
export function About() {
  return (
    <section id="about" aria-labelledby="homepage-about-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto grid items-center max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>

          <h3 className="mt-10 text-2xl font-bold leading-tight text-[#0B3446] sm:text-[1.75rem] sm:tracking-[-0.01em]">
            Facilities at a Glance
          </h3>
          {/* Each facility: a photo of the same size, then its name and note */}
          <dl className="mt-4 grid border-t border-[#0B3446]/10 sm:grid-cols-2 sm:gap-x-8">
            {FACILITIES.map((f) => (
              <div key={f.name} className="flex items-center gap-4 border-b border-[#0B3446]/10 py-3">
                <div className="relative aspect-[4/3] w-20 shrink-0 overflow-hidden rounded-lg bg-[#E3F6F7] ring-1 ring-[#0B3446]/10">
                  <Image src={f.image} alt={f.imageAlt} fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <dt className="text-[15px] font-medium text-[#1B2936]">{f.name}</dt>
                  <dd className="mt-0.5 text-sm text-[#5B6B73]">{f.note}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <SectionHeading
            id="homepage-about-title"
            align="left"
            eyebrow="ABOUT CRONUS MULTISPECIALITY HOSPITAL"
            title="Dedicated to Better Health, Every Step of the Way"
          />
          <div className="space-y-4 text-[17px] leading-relaxed text-[#46575F]">
            <p className="mt-6 text-lg leading-relaxed text-[#1B2936]">
              For more than two decades, Cronus Multispeciality Hospital has been providing healthcare services to families
              in Chhatarpur and South Delhi.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#1B2936]">
              With experienced doctors across 40+ medical specialties, we bring consultations, diagnostics, surgical care,
              and critical care facilities together under one roof.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#1B2936]">
              Our focus is on making quality healthcare accessible through experienced medical professionals, supportive
              staff, and a patient-centred approach.
            </p>
            <a
              id="homepage-about-view-more-btn"
              href={ABOUT_US_URL}
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#0E7C86] px-6 font-semibold text-white transition-colors hover:bg-[#0B6870]"
            >
              Know More About Us
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>


      </div>
    </section>
  );
}
