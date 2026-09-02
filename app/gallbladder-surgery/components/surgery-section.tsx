import Image from "next/image";
import { Minimize2, Layers, BedDouble, TimerReset } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const benefits = [
  {
    icon: Minimize2,
    title: "Small Incisions",
    description: "Performed through small surgical openings.",
  },
  {
    icon: Layers,
    title: "Less Tissue Disruption",
    description: "Minimally invasive approach compared with traditional open surgery.",
  },
  {
    icon: BedDouble,
    title: "Hospital Stay",
    description: "Hospital stay may be shorter for suitable patients.",
  },
  {
    icon: TimerReset,
    title: "Recovery",
    description:
      "Many patients can return to normal activities sooner, depending on their individual condition.",
  },
];

export function SurgerySection() {
  return (
    <section id="surgery" className="scroll-mt-24 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-[#E3F6F7] to-[#129EA8]/10 blur-2xl"
            />
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[26px] shadow-[0_30px_60px_-24px_rgba(0,95,112,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&q=80"
                alt="Surgeon operating laparoscopic instruments in a modern operating theatre"
                width={800}
                height={900}
                className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[26rem]"
              />

              <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#005F70] shadow-md backdrop-blur-md">
                Minimally Invasive
              </span>
              <span className="absolute bottom-4 right-4 inline-flex items-center rounded-full border border-white/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-[#005F70] shadow-md backdrop-blur-md">
                Small Incisions
              </span>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#129EA8]">
                Laparoscopic Gallbladder Surgery
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#005F70] sm:text-4xl">
                A Minimally Invasive Approach to Gallbladder Surgery
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
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

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200/80 bg-[#F8FAFC] p-5 transition-colors hover:border-[#129EA8]/30">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F6F7] text-[#129EA8]">
                      <benefit.icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#1B2936]">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
