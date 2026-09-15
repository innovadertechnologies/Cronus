import { AlertTriangle, Diamond, ArrowRight } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";

const complications = [
  "Repeated stomach pain",
  "Gallbladder swelling or infection",
  "Jaundice (yellow eyes or skin)",
  "Bile duct blockage",
  "Pancreatitis (inflammation of the pancreas)",
];

export function SymptomsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-[#F8D7DC] bg-gradient-to-br from-[#FDF0F2] to-white px-6 py-10 text-center shadow-[0_20px_50px_-30px_rgba(216,50,74,0.35)] sm:py-14">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8D7DC] text-[#D8324A]">
              <AlertTriangle className="h-8 w-8" strokeWidth={2.25} />
            </span>

            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#B02840] sm:text-3xl">
              Don&rsquo;t Ignore Gallstones
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#64748B]">
              If gallstones are left untreated, they may cause:
            </p>

            <ul className="mx-auto mt-8 flex w-full flex-wrap justify-center gap-5 text-center">
              {complications.map((item) => (
                <li
                  key={item}
                  className="flex w-full flex-col items-center gap-3 rounded-2xl bg-white px-5 py-6 ring-1 ring-[#F8D7DC] shadow-[0_8px_20px_-16px_rgba(11,31,51,0.4)] sm:w-[calc((100%-2.5rem)/3)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8D7DC] text-[#D8324A]">
                    <Diamond className="h-4 w-4" strokeWidth={2.5} fill="currentColor" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-[#1B2936]">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base font-semibold text-[#0B3446]">
              Don&rsquo;t ignore recurring pain or symptoms.
            </p>
            <p className="mt-1 text-sm text-[#64748B]">Get evaluated by a surgeon in time.</p>

            <div className="mt-7 flex justify-center">
              <BookTrigger className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.5)] transition-all hover:brightness-105">
                Book Your Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </BookTrigger>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
