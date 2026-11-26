import { BedDouble, HeartHandshake, MapPin, Microscope, Scissors, Star, Stethoscope } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { TEL_HREF } from "../data";
import { SectionHeading } from "./section-heading";

// Why Choose Cronus Multispeciality Hospital? (six feature blocks)
const reasons = [
  {
    icon: HeartHandshake,
    title: "01. Patient-Centred Approach",
    text: "Care and attention focused on individual patient needs at every stage of treatment.",
  },
  {
    icon: Stethoscope,
    title: "02. Comprehensive Medical Departments",
    text: "Multiple specialities working together to address diverse healthcare requirements.",
  },
  {
    icon: Microscope,
    title: "03. Advanced Treatment Facilities",
    text: "Modern medical equipment and facilities supporting diagnosis and treatment.",
  },
  {
    icon: Scissors,
    title: "04. Specialised Surgical Care",
    text: "Experienced surgical teams providing care across various surgical disciplines.",
  },
  {
    icon: BedDouble,
    title: "05. Complete Inpatient Care",
    text: "Dedicated patient rooms, nursing support, and medical supervision throughout hospital stays.",
  },
  {
    icon: MapPin,
    title: "06. Accessible Healthcare Services",
    text: "Conveniently located in Chhatarpur, making specialised medical care accessible to South Delhi residents.",
  },
];

export function WhyChoose({ rating, count }: { rating: string; count: string }) {
  return (
    <section
      id="why-choose"
      aria-labelledby="homepage-why-title"
      className="scroll-mt-24 bg-[#0B3446] py-16 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="homepage-why-title"
            tone="dark"
            eyebrow="THE CRONUS APPROACH TO HEALTHCARE"
            title="Healthcare That Brings Everything Together"
            description="Finding the right medical care should not mean visiting multiple locations. At Cronus, essential healthcare services and specialists are available under one roof."
          />

          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-semibold tabular-nums">{rating}</span>
            <span>
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </span>
              <span className="mt-1 block text-sm text-white/70">From {count} reviews on Google</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex h-12 items-center rounded-lg bg-white px-6 font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F6F7]"
            >
              Schedule Your Consultation
            </a>
            <a
              href={TEL_HREF}
              className="inline-flex h-12 items-center rounded-lg border border-white/30 px-6 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Call {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Dividers only between rows: the first row (first item on mobile,
            first two on sm+) has no top line, and nothing has a bottom line. */}
        <div className="lg:self-center">
          <h3 className="mb-8 text-xl font-semibold sm:text-2xl">Why Choose Cronus Multispeciality Hospital?</h3>
          <ul className="grid gap-y-7 sm:grid-cols-2 sm:gap-x-10">
            {reasons.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 border-t border-white/10 pt-7 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#8FD3D8] ring-1 ring-white/10">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-lg font-semibold">{title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/70">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
