import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const points = [
  "Experienced Surgical Specialist",
  "Advanced Laparoscopic Care",
  "Patient-Centric Treatment",
  "Complete Pre & Post Surgery Support",
];

export function SpecialistTrust() {
  return (
    <section className="bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <Reveal>
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] shadow-[0_30px_60px_-24px_rgba(11,31,51,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=900&q=80"
              alt="Surgical specialist at Cronus Multispeciality Hospital"
              width={800}
              height={950}
              className="h-96 w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#129EA8]">
            Expert Surgical Care
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Dr. [Doctor Name]
          </h2>
          <p className="mt-1 text-base font-semibold text-[#64748B]">General / GI Surgeon</p>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#129EA8]" strokeWidth={2.25} />
                <span className="text-sm font-medium text-[#1B2936] sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#lead-form"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-[#005F70] px-6 py-3.5 text-sm font-semibold text-[#005F70] transition-colors hover:bg-[#005F70] hover:text-white"
          >
            View Specialist
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
