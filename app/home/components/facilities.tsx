import Image from "next/image";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { unsplash } from "../data";
import { SectionLabel } from "./section-label";

const facilities = [
  {
    name: "Wards & ICU",
    image: unsplash("1538108149393-fbbd81895907"),
    text: "Spacious, ventilated general and special rooms, ICU, NICU, a nursing centre and a maternity section.",
  },
  {
    name: "Diagnostics",
    image: unsplash("1579154204601-01588f351e67"),
    text: "Pathology, X-ray, sonography and stress tests, all in-house.",
  },
  {
    name: "Pharmacy",
    image: unsplash("1587854692152-cbe660dbde88"),
    text: "A full-fledged pharmacy open round the clock, stocking all types of medicines and equipment.",
  },
  {
    name: "Intensive Care Unit",
    image: unsplash("1580281657702-257584239a55"),
    text: "Sophisticated monitoring and adequate life support for critically ill patients.",
  },
  {
    name: "Blood Bank",
    image: unsplash("1615461066841-6116e61058f4"),
    text: "Blood and blood components available round the clock for surgeries and emergencies.",
  },
];

export function Facilities() {
  return (
    <section id="facilities" className="scroll-mt-16 bg-[#F6F3EE] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionLabel>24/7 facilities</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.01em] text-[#0B3446] sm:text-[2.6rem]">
          A better day starts with better health.
        </h2>

        {/* Emergency gets the most room */}
        <article className="mt-14 grid overflow-hidden rounded-lg bg-white lg:grid-cols-[1.25fr_1fr]">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={unsplash("1504813184591-01572f98c85f")}
              alt="Emergency and trauma team at work"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="flex items-center gap-2 text-sm font-medium text-[#D9443F]">
              <span className="h-2 w-2 rounded-full bg-[#D9443F]" />
              Open now, every day
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#0B3446] sm:text-3xl">Emergency services</h3>
            <p className="mt-3 text-[17px] leading-relaxed text-[#46575F]">
              Our emergency department runs 24 hours a day, 7 days a week, for trauma and every other urgent need.
            </p>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="mt-7 inline-flex w-fit items-center rounded-md bg-[#D9443F] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#BF3A35]"
            >
              Call {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </article>

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map(({ name, image, text }) => (
            <li key={name} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#E7E1D6]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0B3446]">{name}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#5B6B73]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
