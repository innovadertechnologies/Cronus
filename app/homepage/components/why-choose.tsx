import { Ambulance, HeartPulse, MapPin, Microscope, ShieldCheck, Star, Stethoscope } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { GOOGLE_RATING, TEL_HREF } from "../data";
import { SectionHeading } from "./section-heading";

// What the hospital means for a patient. Every point is backed by content
// already on the site (doctor profiles, facilities, insurance notes).
const reasons = [
  {
    icon: Ambulance,
    title: "Emergency care, day and night",
    text: "Our emergency department is open 24 hours a day, 7 days a week, for trauma and every urgent need.",
  },
  {
    icon: Stethoscope,
    title: "Experienced specialists",
    text: "Doctors with 22 to 42 years of experience, across more than 40 medical specialities.",
  },
  {
    icon: Microscope,
    title: "Tests without extra trips",
    text: "Pathology, X-ray, sonography and stress tests are done in the same building as your consultation.",
  },
  {
    icon: HeartPulse,
    title: "Critical care on site",
    text: "ICU, NICU and a blood bank are ready for surgeries, deliveries and emergencies.",
  },
  {
    icon: ShieldCheck,
    title: "Cashless insurance",
    text: "Cashless treatment with major insurance providers, subject to your policy and the insurer's approval.",
  },
  {
    icon: MapPin,
    title: "Close to home",
    text: "On 100 Feet Road in Chhatarpur, caring for South Delhi families for more than two decades.",
  },
];

export function WhyChoose() {
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
            eyebrow="Why choose us"
            title="Why families choose Cronus Hospital"
            description="Specialist care, emergency cover and diagnostics in one place, close to home in South Delhi."
          />

          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-semibold tabular-nums">{GOOGLE_RATING.score}</span>
            <span>
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </span>
              <span className="mt-1 block text-sm text-white/70">From {GOOGLE_RATING.count} reviews on Google</span>
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="inline-flex h-12 items-center rounded-lg bg-white px-6 font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F6F7]"
            >
              Book an appointment
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
        <ul className="grid gap-y-7 sm:grid-cols-2 sm:gap-x-10 lg:self-center">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex gap-4 border-t border-white/10 pt-7 first:border-t-0 first:pt-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2)]:pt-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#8FD3D8] ring-1 ring-white/10">
                <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
