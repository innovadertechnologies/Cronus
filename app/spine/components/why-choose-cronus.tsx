import { Hospital, Stethoscope, Trophy, Users } from "lucide-react";

const reasons = [
  { icon: Trophy, title: "30+ Years", text: "Spine & Orthopaedic Experience" },
  { icon: Users, title: "5,000+", text: "Surgeries Performed" },
  { icon: Stethoscope, title: "Spine Specialist", text: "Expertise in Spine Care & Surgery" },
  { icon: Hospital, title: "Multiple Spine Procedures", text: "Advanced Surgical Treatment Options" },
];

export function WhyChooseCronus() {
  return (
    <section id="why-choose" className="bg-gradient-to-b from-[#F3F9FD] to-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Why Choose Cronus Multispeciality Hospital?
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white px-4 py-6 text-center shadow-[0_10px_30px_-20px_rgba(11,52,70,0.4)] transition-all hover:-translate-y-1 hover:border-[#129EA8]/40 sm:px-6 sm:py-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E3F1FA] text-[#0E6F9E]">
                <Icon className="h-7 w-7" strokeWidth={2} />
              </span>
              <p className="mt-4 text-base font-extrabold leading-tight text-[#0B2A4A] sm:text-xl">{title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#64748B] sm:text-sm">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
