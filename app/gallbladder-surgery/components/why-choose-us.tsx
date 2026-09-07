import { Stethoscope, Building2, ClipboardList, HeartHandshake, ArrowRight } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal, RevealGroup } from "@/app/components/reveal";

const features = [
  {
    icon: Stethoscope,
    title: "Expert Surgical Care",
    description: "Experienced specialists for gallbladder conditions.",
  },
  {
    icon: Building2,
    title: "Modern Surgical Facilities",
    description: "Well-equipped infrastructure for laparoscopic procedures.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Medical Support",
    description: "From diagnosis to post-surgery care.",
  },
  {
    icon: ClipboardList,
    title: "Patient-Focused Care",
    description: "Personalized treatment and dedicated support.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F2544] sm:text-4xl">
            Why Choose Cronus Multispeciality Hospital?
          </h2>
          <span className="mx-auto mt-3 block h-1 w-14 rounded-full bg-[#15803D]" />
        </Reveal>

        <RevealGroup className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Reveal key={feature.title} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E3F5EA] text-[#15803D]">
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="text-base font-bold text-[#1B2936]">{feature.title}</h3>
              <p className="max-w-[220px] text-sm leading-relaxed text-[#64748B]">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal delay={0.15}>
          <BookTrigger className="group mt-12 inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(21,128,61,0.5)] transition-all hover:brightness-105">
            Book Your Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </BookTrigger>
        </Reveal>
      </div>
    </section>
  );
}
