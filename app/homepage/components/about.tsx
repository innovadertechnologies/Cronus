import Image from "next/image";
import { Navigation } from "lucide-react";
import { DIRECTIONS_URL } from "../data";
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

const captionClass = "absolute bottom-3 left-3 rounded-md bg-white px-2 py-1 text-xs font-medium text-[#0B3446]";

export function About() {
  return (
    <section id="about" aria-labelledby="homepage-about-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Photo collage: the building, then two moments of care inside it */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-[#E7E1D6]">
            <Image
              src="/hptl.png"
              alt="Cronus Multispeciality Hospital building with the 24x7 Emergency entrance on 100 Feet Road, Chhatarpur"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[center_45%]"
            />
            <figcaption className={captionClass}>100 Feet Road, Chhatarpur</figcaption>
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E7E1D6]">
            <Image
              src="/compimg.jpeg"
              alt="Surgeons performing a laparoscopic procedure in the operating theatre"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover"
            />
            <figcaption className={captionClass}>Operating theatre</figcaption>
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#E7E1D6]">
            <Image
              src="/First_Consultation.png"
              alt="Doctor talking a patient through her consultation"
              fill
              sizes="(min-width: 1024px) 22vw, 50vw"
              className="object-cover object-[35%_center]"
            />
            <figcaption className={captionClass}>Consultation</figcaption>
          </figure>
        </div>

        <div>
          <SectionHeading
            id="homepage-about-title"
            eyebrow="About Cronus Hospital"
            title="A neighbourhood hospital with specialist depth"
          />
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-[#46575F]">
            <p>
              For more than two decades, Cronus has cared for families in Chhatarpur and South Delhi in a comfortable
              and convenient environment, with doctors, specialists and nurses working as one team.
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex h-12 items-center rounded-lg bg-[#0E7C86] px-6 font-semibold text-white transition-colors hover:bg-[#0B6870]"
            >
              Book an appointment
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#0B3446]/20 px-6 font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
            >
              <Navigation className="h-4 w-4" strokeWidth={1.5} />
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
