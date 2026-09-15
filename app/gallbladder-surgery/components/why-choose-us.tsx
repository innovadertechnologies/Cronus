import {
  Activity,
  Award,
  Stethoscope,
  Building2,
  HeartHandshake,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal, RevealGroup } from "@/app/components/reveal";
import { StatCounter } from "@/app/components/stat-counter";

const stats = [
  {
    icon: Activity,
    value: 30000,
    suffix: "+",
    label: "Surgeries Performed",
    description: "A trusted name in surgical excellence.",
    from: "from-[#129EA8]",
    to: "to-[#0B3446]",
  },
  {
    icon: Award,
    value: 35,
    suffix: "+",
    label: "Years of Experience",
    description: "Decades of trusted clinical expertise.",
    from: "from-[#0B3446]",
    to: "to-[#129EA8]",
  },
];

const features = [
  {
    icon: Stethoscope,
    title: "Expert Surgical Care",
    description: "Experienced specialists for gallbladder conditions.",
    iconBg: "bg-[#D3E6FA]",
    iconColor: "text-[#1E6FD9]",
  },
  {
    icon: Building2,
    title: "Modern Surgical Facilities",
    description: "Well-equipped infrastructure for laparoscopic procedures.",
    iconBg: "bg-[#DCEEF7]",
    iconColor: "text-[#129EA8]",
  },
  {
    icon: HeartHandshake,
    title: "Complete Medical Support",
    description: "From diagnosis to post-surgery care.",
    iconBg: "bg-[#CFEEDA]",
    iconColor: "text-[#1E9E5A]",
  },
  {
    icon: ClipboardList,
    title: "Patient-Focused Care",
    description: "Personalized treatment and dedicated support.",
    iconBg: "bg-[#E1DCF7]",
    iconColor: "text-[#6947C4]",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose" className="scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-[#F3FAFB]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#129EA8]">
            Why Cronus
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
            Why Choose Cronus Multispeciality Hospital?
          </h2>
          <span className="mx-auto mt-4 block h-1 w-14 rounded-full bg-[#129EA8]" />
          <p className="mt-5 text-lg leading-relaxed text-[#64748B]">
            A trusted destination for advanced, minimally invasive surgical care
            &mdash; backed by decades of expertise and tens of thousands of
            successful procedures.
          </p>
        </Reveal>

        <RevealGroup className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`relative overflow-hidden rounded-[26px] bg-gradient-to-br ${stat.from} ${stat.to} p-8 shadow-[0_24px_48px_-20px_rgba(11,52,70,0.45)]`}
            >
              <span className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
              <span className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
                <stat.icon className="h-7 w-7" strokeWidth={2.25} />
              </span>

              <p className="relative mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="relative mt-1 text-base font-semibold text-white/90">
                {stat.label}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-white/75">
                {stat.description}
              </p>
            </div>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Reveal
              key={feature.title}
              className="group rounded-[22px] border border-[#E4EDEF] bg-white p-6 text-center shadow-[0_10px_30px_-22px_rgba(11,52,70,0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,52,70,0.3)]"
            >
              <span
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${feature.iconBg} ${feature.iconColor} transition-transform group-hover:scale-110`}
              >
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-[#1B2936]">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex justify-center">
          <BookTrigger className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.5)] transition-all hover:brightness-105">
            Book Your Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </BookTrigger>
        </Reveal>
      </div>
    </section>
  );
}
