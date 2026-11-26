import { ArrowUpRight } from "lucide-react";
import { ABOUT_US_URL } from "../data";
import { SectionHeading } from "./section-heading";

// Facilities at a Glance (what is physically inside the building).
const facilities = [
  { name: "General & Special Rooms", note: "Comfortable patient accommodation" },
  { name: "ICU & NICU", note: "Critical care and monitoring" },
  { name: "Maternity Section", note: "Pregnancy and postnatal care" },
  { name: "Pathology & X-ray", note: "In-house diagnostic services" },
  { name: "Sonography", note: "Imaging and diagnostic support" },
  { name: "Pharmacy & Blood Bank", note: "Essential services available round the clock" },
];

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
          <dl className="mt-4 grid border-t border-[#0B3446]/10 sm:grid-cols-2 sm:gap-x-8">
            {facilities.map((f) => (
              <div key={f.name} className="border-b border-[#0B3446]/10 py-3">
                <dt className="text-[15px] font-medium text-[#1B2936]">{f.name}</dt>
                <dd className="mt-0.5 text-sm text-[#5B6B73]">{f.note}</dd>
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
