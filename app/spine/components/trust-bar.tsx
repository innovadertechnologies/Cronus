import { Bone, ShieldCheck, Stethoscope, Users } from "lucide-react";

const items = [
  { icon: Users, stat: "20,000+", label: "Happy Patients" },
  { icon: ShieldCheck, stat: "100%", label: "Cashless Insurance" },
  { icon: Stethoscope, stat: "30+", label: "Years of Expertise" },
  { icon: Bone, stat: "Advanced", label: "Spine Care" },
];

export function TrustBar() {
  return (
    <section aria-label="Why patients trust Cronus" className="bg-[#0B4A57]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-6 sm:px-8 lg:grid-cols-4 lg:py-7">
        {items.map(({ icon: Icon, stat, label }, i) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-3 px-2 sm:gap-4 ${
              i % 2 === 1 ? "border-l border-white/20" : ""
            } ${i > 0 ? "lg:border-l lg:border-white/20" : ""}`}
          >
            <Icon className="h-8 w-8 shrink-0 text-white sm:h-10 sm:w-10" strokeWidth={1.75} />
            <div>
              <p className="text-lg font-extrabold leading-tight text-white sm:text-xl">{stat}</p>
              <p className="text-xs font-medium text-white/80 sm:text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
