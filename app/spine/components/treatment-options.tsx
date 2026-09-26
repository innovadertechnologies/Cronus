import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BookButton } from "./book-button";

const treatments = [
  {
    title: "Non-Surgical Care",
    image: "/spp1.png",
    items: ["Medication", "Physiotherapy", "Rehabilitation"],
  },
  {
    title: "Minimally Invasive Procedures",
    image: "/spp2.png",
    items: ["Endoscopic Procedures", "Discectomy", "Microdiscectomy"],
  },
  {
    title: "Surgical Treatment",
    image: "/spp3.png",
    items: ["Decompression", "Disc Surgery", "Other Spine Procedures"],
  },
];

export function TreatmentOptions() {
  return (
    <section id="treatments" className="scroll-mt-16 lg:scroll-mt-20 bg-gradient-to-b from-[#F3F9FD] to-[#E8F3FA] py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            Treatment Options for Your Spine Problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#1B2936]/80 sm:text-base">
            Your treatment depends on your{" "}
            <strong className="font-bold text-[#0B2A4A]">symptoms and spine condition</strong>. After
            evaluation, Dr. Sandeep Singh will suggest the right option for you.
          </p>
        </div>

        <ol className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-7">
          {treatments.map(({ title, image, items }, i) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border border-white bg-white p-3 shadow-[0_16px_40px_-22px_rgba(11,52,70,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_22px_44px_-20px_rgba(11,52,70,0.5)]"
            >
              <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-[#E3F1FA]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/80 bg-[#0E7C86] text-lg font-extrabold text-white shadow-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="px-2 pb-3 pt-5">
                <h3 className="text-lg font-extrabold text-[#0B2A4A] sm:text-xl">{title}</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-5 w-5 shrink-0 fill-[#0E7C86] text-white" />
                      <span className="text-[15px] font-medium text-[#1B2936]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
          <p className="text-sm font-medium text-[#1B2936]/80 sm:text-base">
            Get the right treatment after proper spine evaluation.
          </p>
          <BookButton className="rounded-xl border-2 border-[#0E7C86] bg-white px-7 py-3 text-base font-bold text-[#0B2A4A] shadow-sm transition-colors hover:bg-[#0E7C86] hover:text-white">
            Know Your Treatment Options
          </BookButton>
        </div>
      </div>
    </section>
  );
}
