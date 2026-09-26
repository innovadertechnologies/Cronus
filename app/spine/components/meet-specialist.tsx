import Image from "next/image";
import { BookOpen, GraduationCap, Settings, Users, type LucideIcon } from "lucide-react";
import { BookButton } from "./book-button";

const highlights: { icon: LucideIcon; title: string; lines: string[] }[] = [
  { icon: Users, title: "5,000+ Surgeries Performed", lines: ["Orthopaedic & spine surgeries"] },
  {
    icon: GraduationCap,
    title: "Advanced Spine Training",
    lines: ["Fellowship in Spine Surgery, VGH, Canada"],
  },
  {
    icon: BookOpen,
    title: "Strong Medical Education",
    lines: ["MBBS â€“ MAMC, New Delhi", "MS â€“ Orthopaedics, UCMS, New Delhi"],
  },
  {
    icon: Settings,
    title: "Expertise Includes",
    lines: ["Spine Surgery â€¢ Back & Neck Pain â€¢ Fracture Treatment â€¢ Joint Replacement â€¢ Pain Management"],
  },
];

function Heading() {
  return (
    <>
      <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl xl:text-[2.1rem]">
        Meet Your Spine Specialist
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
    </>
  );
}

export function MeetSpecialist() {
  return (
    <section id="specialist" className="scroll-mt-16 lg:scroll-mt-20 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* On desktop the heading moves into the middle column, above the bio */}
        <div className="mb-8 text-center xl:hidden">
          <Heading />
        </div>

        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:grid-cols-[minmax(0,0.8fr)_minmax(0,0.95fr)_minmax(0,1.3fr)] xl:items-stretch xl:gap-10">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm xl:h-full xl:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl xl:aspect-auto xl:h-full bg-gradient-to-b from-[#EEF6FC] to-[#D9EBF6]">
              <Image
                src="/spdoc.jpeg"
                alt="Dr. Sandeep Singh, Orthopaedics & Spine Specialist"
                fill
                sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 384px"
                className="object-cover object-top mix-blend-multiply"
              />
            </div>
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-[#0E6F79]/95 px-5 py-4 text-white shadow-[0_16px_32px_-12px_rgba(11,52,70,0.6)] backdrop-blur-sm">
              <p className="text-lg font-extrabold sm:text-xl">Dr. Sandeep Singh</p>
              <p className="text-sm font-medium text-white/85">Orthopaedics &amp; Spine Specialist</p>
            </div>
          </div>

          {/* Bio + CTA */}
          <div className="text-center md:text-left xl:self-center xl:text-center">
            <div className="mb-6 hidden xl:block">
              <Heading />
            </div>
            <p className="text-base leading-relaxed text-[#1B2936]/85 sm:text-lg">
              With extensive experience in Orthopaedics and Spine care, Dr. Sandeep Singh specializes in spine
              surgery, spinal deformity correction, orthopaedic surgery and pain management.
            </p>
            <BookButton className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#0E7C86] px-8 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110">
              Consult Dr. Sandeep Singh
            </BookButton>
          </div>

          {/* Why patients choose him */}
          <div className="rounded-3xl border border-[#129EA8]/15 bg-[#F3F9FD] p-4 sm:p-5 md:col-span-2 xl:col-span-1">
            <h3 className="px-1 text-lg font-extrabold text-[#0B2A4A]">Why Patients Choose His Expertise</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {highlights.map(({ icon: Icon, title, lines }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-[0_8px_24px_-18px_rgba(11,52,70,0.45)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F1FA] text-[#0B3446]">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-bold text-[#0B2A4A]">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-[#64748B]">
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
