import Image from "next/image";
import { Scissors, ShieldCheck, BedDouble, Clock } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const benefits = [
  {
    icon: Scissors,
    title: "Small Incisions",
    description: "Performed through small surgical openings.",
  },
  {
    icon: ShieldCheck,
    title: "Less Tissue Disruption",
    description: "Minimally invasive approach compared with traditional open surgery.",
  },
  {
    icon: BedDouble,
    title: "Hospital Stay",
    description: "Hospital stay may be shorter for suitable patients.",
  },
  {
    icon: Clock,
    title: "Recovery",
    description:
      "Many patients can return to normal activities sooner, depending on their individual condition.",
  },
];

export function SurgerySection() {
  return (
    <section id="surgery" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.3fr] lg:items-start">
          <Reveal>
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[22px] shadow-[0_20px_44px_-24px_rgba(15,37,68,0.35)] lg:max-w-none">
              <Image
                src="/docimage.png"
                alt="Surgeon reviewing diagnostic imaging during a laparoscopic procedure"
                width={800}
                height={900}
                className="h-72 w-full object-cover sm:h-80 lg:h-full"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2544] sm:text-4xl">
                Laparoscopic Gallbladder Surgery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                A minimally invasive surgical procedure to remove the gallbladder
                when gallstones or other gallbladder problems require surgery.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Laparoscopic gallbladder surgery is commonly recommended for
                patients with symptomatic gallstones, recurring gallbladder pain,
                inflammation or certain gallbladder complications.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                The procedure is performed through small abdominal incisions using
                a camera and specialized surgical instruments. Your surgeon will
                evaluate your condition and recommend the most appropriate
                treatment based on your diagnosis.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <h3 className="mt-16 text-center text-3xl font-bold text-[#0F2544] sm:text-4xl">
            Why Laparoscopic Surgery?
          </h3>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={0.1 + index * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] px-6 py-8 text-center transition-colors hover:border-[#15803D]/30">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E3F5EA] text-[#15803D]">
                  <benefit.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h4 className="text-xl font-bold text-[#1B2936]">{benefit.title}</h4>
                <p className="text-base leading-relaxed text-[#64748B]">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
