import { Activity, ShieldCheck, Wallet, HeartPulse } from "lucide-react";
import { StatCounter } from "@/app/components/stat-counter";
import { Reveal } from "@/app/components/reveal";

const metrics = [
  { icon: Activity, value: 16000, suffix: "+", label: "Surgeries Performed", isCounter: true },
  { icon: HeartPulse, value: null, display: "Advanced", label: "Laparoscopic Procedures" },
  { icon: Wallet, value: null, display: "Cashless", label: "Insurance Facility" },
  { icon: ShieldCheck, value: null, display: "Complete", label: "Pre & Post Surgery Care" },
];

export function TrustMetrics() {
  return (
    <section className="border-y border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <Reveal>
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.18em] text-[#129EA8]">
            Trusted Surgical Care
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.08}>
              <div className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-slate-100 bg-[#F8FAFC] px-4 py-6 text-center transition-transform hover:-translate-y-1">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E3F6F7] text-[#129EA8]">
                  <metric.icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <p className="text-2xl font-extrabold text-[#005F70] sm:text-3xl">
                  {metric.isCounter ? (
                    <StatCounter value={metric.value as number} suffix={metric.suffix} />
                  ) : (
                    metric.display
                  )}
                </p>
                <p className="text-xs font-medium leading-snug text-[#64748B] sm:text-sm">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
