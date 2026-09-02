import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const benefits = [
  "Smaller Surgical Incisions",
  "Minimal Scarring",
  "Less Tissue Disruption",
  "Potentially Shorter Hospital Stay",
  "Recovery May Be Quicker for Suitable Patients",
];

const left = benefits.slice(0, 3);
const right = benefits.slice(3);

function BenefitCard({ label, delay }: { label: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_28px_-18px_rgba(11,31,51,0.35)] transition-transform hover:-translate-y-1">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E3F6F7] text-[#129EA8]">
          <CheckCircle2 className="h-4.5 w-4.5" strokeWidth={2.25} />
        </span>
        <span className="text-sm font-semibold leading-snug text-[#1B2936]">{label}</span>
      </div>
    </Reveal>
  );
}

export function WhyLaparoscopic() {
  return (
    <section id="laparoscopy" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
            Why Choose Laparoscopic Hernia Surgery?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
            A minimally invasive surgical technique performed through small
            incisions using a camera and specialized instruments.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            {left.map((label, index) => (
              <BenefitCard key={label} label={label} delay={index * 0.1} />
            ))}
          </div>

          <Reveal delay={0.15} className="order-first lg:order-none">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[28px] shadow-[0_30px_60px_-24px_rgba(11,31,51,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80"
                alt="Surgical team performing a laparoscopic procedure"
                width={800}
                height={900}
                className="h-80 w-full object-cover sm:h-96"
              />
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {right.map((label, index) => (
              <BenefitCard key={label} label={label} delay={0.3 + index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
