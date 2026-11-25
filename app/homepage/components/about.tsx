import { ArrowUpRight } from "lucide-react";
import { ABOUT_US_URL } from "../data";
import { SectionHeading } from "./section-heading";

// What is physically inside the building. The "why choose" section covers
// what that means for patients, so the two sections don't repeat each other.
const facilities = [
  { name: "General & special rooms", note: "Spacious, well-ventilated wards" },
  { name: "ICU & NICU", note: "Monitoring and life support" },
  { name: "Maternity section", note: "Pregnancy to postnatal care" },
  { name: "Pathology & X-ray", note: "Tests in the same building" },
  { name: "Sonography & stress tests", note: "In-house diagnostics" },
  { name: "Pharmacy & blood bank", note: "Open round the clock" },
];

// Text-only About section; "View more" opens the existing About Us page on
// the main hospital website (no duplicate page is created here).
export function About() {
  return (
    <section id="about" aria-labelledby="homepage-about-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="homepage-about-title"
            eyebrow="About Cronus Hospital"
            title="A neighbourhood hospital with specialist depth"
          />
          <p className="mt-6 text-lg leading-relaxed text-[#1B2936]">
            For more than two decades, Cronus Multispeciality Hospital has cared for families in Chhatarpur and South
            Delhi, with doctors, specialists and nurses working as one team.
          </p>
          <a
            id="homepage-about-view-more-btn"
            href={ABOUT_US_URL}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-[#0E7C86] px-6 font-semibold text-white transition-colors hover:bg-[#0B6870]"
          >
            View more
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <div>
          <div className="space-y-4 text-[17px] leading-relaxed text-[#46575F]">
            <p>
              With more than two decades of tradition, excellence and quality in medical care, we bring peace of mind to
              the patients we care for every day, in a comfortable and convenient environment.
            </p>
            <p>
              Consultation, diagnostics, surgery, intensive care and follow-up all happen in one building, so you and
              your family are not sent from place to place between appointments.
            </p>
          </div>

          <h3 className="mt-10 text-base font-semibold text-[#0B3446]">Under one roof</h3>
          <dl className="mt-4 grid border-t border-[#0B3446]/10 sm:grid-cols-2 sm:gap-x-8">
            {facilities.map((f) => (
              <div key={f.name} className="border-b border-[#0B3446]/10 py-3">
                <dt className="text-[15px] font-medium text-[#1B2936]">{f.name}</dt>
                <dd className="mt-0.5 text-sm text-[#5B6B73]">{f.note}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
