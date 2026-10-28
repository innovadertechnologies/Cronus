import { Scissors, Heart, Zap, Clock } from "lucide-react";

const benefits = [
  {
    icon: Scissors,
    title: "Smaller Surgical Incisions",
    description: "Uses small cuts instead of one large incision in suitable procedures.",
  },
  {
    icon: Heart,
    title: "Less Post-Surgery Discomfort",
    description: "May reduce pain and tissue damage compared with open surgery in selected cases.",
  },
  {
    icon: Zap,
    title: "Faster Recovery",
    description: "Many patients can return to routine activities sooner, depending on the procedure.",
  },
  {
    icon: Clock,
    title: "Potentially Shorter Hospital Stay",
    description: "Hospital stay may be shorter than with open surgery for suitable conditions.",
  },
];

export function LaparoscopicBenefits() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F3F9FD] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Why Opt for Laparoscopic Surgery?
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)] transition-all hover:shadow-[0_12px_32px_-20px_rgba(11,52,70,0.6)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E7C86]/10">
                <Icon className="h-6 w-6 text-[#0E7C86]" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0B2A4A]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
