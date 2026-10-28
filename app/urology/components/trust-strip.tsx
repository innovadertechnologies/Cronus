import { Award, Clock, Activity, User } from "lucide-react";

const stats = [
  { icon: Award, label: "95% Surgical Success Rate" },
  { icon: Clock, label: "24×7 Patient Support" },
  { icon: Activity, label: "20,000+ Surgeries Performed" },
  { icon: User, label: "22+ Years of Experience" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <Icon className="h-8 w-8 text-[#0E7C86] lg:h-10 lg:w-10" />
              <p className="mt-2 text-sm font-semibold text-[#0B2A4A] lg:text-base">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
