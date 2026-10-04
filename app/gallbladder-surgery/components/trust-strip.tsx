import { UserCheck, Building2, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const points = [
  { icon: UserCheck, label: "Experienced Specialists" },
  { icon: Building2, label: "Modern Surgical Facilities" },
  { icon: HeartHandshake, label: "Cashless Treatment Available" },
  { icon: ShieldCheck, label: "Patient-Focused Treatment" },
];

export function TrustStrip() {
  return (
    <section className="bg-[#0B3446]">
      {/* Phones: 2x2 grid with the icon above the label. sm+: one row. */}
      <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:flex sm:justify-between sm:gap-6">
          {points.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.08}>
              <div className="flex flex-col items-center gap-2.5 text-center sm:flex-row sm:gap-3 sm:text-left">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white sm:h-10 sm:w-10">
                  <point.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="text-[13px] font-semibold leading-snug text-white/90 sm:text-sm">
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
