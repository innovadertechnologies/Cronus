import { CalendarCheck, CheckCircle2, Stethoscope } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal } from "@/app/components/reveal";

const credentials = [
  "MBBS, MS – General Surgery",
  "35+ Years experienced general surgeon",
  "Expertise in Laparoscopic & General Surgery",
  "Consultation at Cronus Multispeciality Hospital, Chhatarpur",
];

export function DoctorProfile() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-[#F3FAFB]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto flex max-w-xs items-center justify-center lg:mx-0">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-[#129EA8] to-[#0B3446] shadow-[0_30px_60px_-20px_rgba(11,52,70,0.45)] sm:h-72 sm:w-72">
              <span className="absolute inset-3 rounded-full border border-white/20" />
              <span className="text-6xl font-extrabold text-white sm:text-7xl">SC</span>

              <span className="absolute -right-2 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#129EA8] shadow-lg ring-1 ring-[#E4EDEF] sm:h-16 sm:w-16">
                <Stethoscope className="h-7 w-7" strokeWidth={2} />
              </span>

              <span className="absolute -left-4 bottom-8 flex flex-col items-center rounded-2xl bg-white px-4 py-3 text-center shadow-lg ring-1 ring-[#E4EDEF]">
                <span className="text-xl font-extrabold text-[#0B3446]">35+</span>
                <span className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">
                  Years Exp.
                </span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#129EA8]">
              Our Surgeon
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
              Meet Dr. Shiv Chopra
            </h2>
            <p className="mt-2 text-lg font-semibold text-[#1B2936]">
              Senior General &amp; Laparoscopic Surgeon
            </p>
            <span className="mt-4 block h-1 w-14 rounded-full bg-[#129EA8]" />

            <ul className="mt-6 flex flex-col gap-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#3F5A66]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <BookTrigger className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.5)] transition-all hover:brightness-105">
                <CalendarCheck className="h-4 w-4" />
                Book a Consultation
              </BookTrigger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
