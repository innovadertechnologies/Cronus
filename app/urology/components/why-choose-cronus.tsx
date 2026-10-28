import { UserCheck, Activity, Building2, Clock } from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Experienced Urologist",
    description: "Consultation with Dr. Saurabh Kumar Sinha, an experienced urology specialist.",
  },
  {
    icon: Activity,
    title: "Advanced Treatment Options",
    description: "Urological care, including kidney stone treatment and minimally invasive procedures where appropriate.",
  },
  {
    icon: Building2,
    title: "Complete Patient Care",
    description: "Access to hospital facilities, diagnostic services and specialist care.",
  },
  {
    icon: Clock,
    title: "Emergency Support",
    description: "Hospital emergency services are available 24/7.",
  },
];

export function WhyChooseCronus() {
  return (
    <section id="why-choose" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Why Choose Cronus Multispeciality Hospital?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-[#64748B]">
            Get expert urological care, modern treatment options and patient-focused support at Cronus Multispeciality Hospital, Chhatarpur, South Delhi.
          </p>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-[#F3F9FD] p-6 shadow-[0_8px_24px_-20px_rgba(11,52,70,0.45)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E7C86]">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#0B2A4A]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://cronushospitals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-semibold text-[#0E7C86] transition-colors hover:text-[#0B6B73]"
          >
            Visit Hospital Website →
          </a>
        </div>
      </div>
    </section>
  );
}
