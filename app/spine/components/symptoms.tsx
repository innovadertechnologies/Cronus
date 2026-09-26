import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { BookButton } from "./book-button";

const symptoms = [
  { label: "Persistent Back Pain", image: "/sp1.png" },
  { label: "Pain Going Down the Leg", image: "/sp2.png" },
  { label: "Numbness or Tingling", image: "/sp3.png" },
  { label: "Leg Weakness", image: "/sp4.png" },
  { label: "Difficulty Sitting or Standing", image: "/sp5.png" },
  { label: "Pain Affecting Daily Activities", image: "/sp6.png" },
];

export function Symptoms() {
  return (
    <section id="symptoms" className="scroll-mt-16 lg:scroll-mt-20 bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Are These Symptoms Affecting Your Daily Life?
          </h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {symptoms.map(({ label, image }) => (
            <li
              key={label}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_10px_30px_-18px_rgba(11,52,70,0.35)] transition-all hover:-translate-y-1 hover:border-[#129EA8]/40 hover:shadow-[0_18px_36px_-18px_rgba(11,52,70,0.45)]"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-[#EAF4FB]">
                <Image
                  src={image}
                  alt={label}
                  fill
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="flex flex-1 items-center justify-center px-1 pb-1.5 pt-3.5 text-center text-sm font-bold leading-snug text-[#0B2A4A]">
                {label}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <BookButton className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0E7C86] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110">
            <CalendarDays className="h-5 w-5" />
            Book a Spine Consultation
          </BookButton>
        </div>
      </div>
    </section>
  );
}
