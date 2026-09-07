import { UserCheck, Building2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const points = [
  { icon: UserCheck, label: "Experienced Specialists" },
  { icon: Building2, label: "Modern Surgical Facilities" },
  { icon: HeartHandshake, label: "Comprehensive Care" },
  { icon: ShieldCheck, label: "Patient-Focused Treatment" },
];

export function TrustStrip() {
  return (
    <section className="bg-[#15803D]">
      <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-6 sm:px-8 sm:py-7">
        <div className="flex min-w-max justify-start gap-8 sm:min-w-0 sm:justify-between sm:gap-6">
          {points.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.08} className="shrink-0 sm:shrink">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <point.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="whitespace-nowrap text-sm font-semibold text-white/90 sm:whitespace-normal">
                  {point.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
