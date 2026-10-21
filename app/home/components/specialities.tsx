"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { unsplash } from "../data";
import { requestBooking } from "./booking";
import { SectionLabel } from "./section-label";

const specialities = [
  {
    name: "Orthopedics",
    department: "Orthopaedics",
    image: unsplash("1530497610245-94d3c16cda28"),
    text: "Comprehensive and advanced orthopedic services, from fractures and sports injuries to joint replacement.",
  },
  {
    name: "Neuro Surgery",
    department: "Neuro Surgery",
    image: unsplash("1559757148-5c350d0d3c56"),
    text: "Our neurosurgeons work with specialists in neurology, neuro-oncology and interventional radiology to plan each treatment.",
  },
  {
    name: "Cardiology",
    department: "Cardiology",
    image: unsplash("1530026405186-ed1f139313f8"),
    text: "A comprehensive approach to the management of heart disease.",
  },
  {
    name: "General & Laparoscopic Surgery",
    department: "General & Laparoscopic Surgery",
    image: "/compimg.jpeg",
    text: "A highly specialised team of surgeons for general and minimally invasive laparoscopic surgery.",
  },
  {
    name: "Ophthalmology",
    department: "Ophthalmology",
    image: unsplash("1574258495973-f010dfbb5371"),
    text: "Choosing an eye care provider is an important decision. After all, you will be trusting your eye doctor with your sight.",
  },
  {
    name: "Dental Surgery",
    department: "Dental Surgery",
    image: unsplash("1629909613654-28e377c37b09"),
    text: "Clinical dental care, including for children and adolescents with chronic medical and dental problems.",
  },
];

export function Specialities() {
  const [active, setActive] = useState(0);
  const current = specialities[active];

  return (
    <section id="specialities" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>What we offer</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.01em] text-[#0B3446] sm:text-[2.6rem]">
              Centres of excellence
            </h2>
          </div>
          <p className="max-w-md text-[17px] leading-relaxed text-[#46575F] lg:justify-self-end">
            Six departments where our teams have built particular depth, alongside 40+ other specialities.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <ul className="border-t border-[#0B3446]/15">
            {specialities.map((s, i) => {
              const selected = i === active;
              return (
                <li key={s.name} className="border-b border-[#0B3446]/15">
                  <button
                    type="button"
                    aria-expanded={selected}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="group flex w-full items-center gap-5 py-5 text-left sm:gap-8"
                  >
                    <span
                      className={`w-6 text-sm font-semibold tabular-nums transition-colors ${
                        selected ? "text-[#0E7C86]" : "text-[#8A979D]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-xl font-semibold transition-colors sm:text-2xl ${
                        selected ? "text-[#0B3446]" : "text-[#0B3446]/55 group-hover:text-[#0B3446]"
                      }`}
                    >
                      {s.name}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-[#0B3446] transition-transform duration-300 lg:hidden ${
                        selected ? "rotate-45" : ""
                      }`}
                    />
                    <ArrowRight
                      className={`hidden h-5 w-5 shrink-0 text-[#0E7C86] transition-opacity lg:block ${
                        selected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </button>

                  {/* Mobile: details open under the row */}
                  {selected && (
                    <div className="animate-fade-in pb-6 pl-11 sm:pl-14 lg:hidden">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                        <Image src={s.image} alt={s.name} fill sizes="100vw" className="object-cover" />
                      </div>
                      <p className="mt-4 text-[15px] leading-relaxed text-[#46575F]">{s.text}</p>
                      <button
                        type="button"
                        onClick={() => requestBooking({ department: s.department })}
                        className="mt-3 text-[15px] font-semibold text-[#0E7C86] underline underline-offset-4"
                      >
                        Book a consultation
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#E7E1D6]">
              {specialities.map((s, i) => (
                <Image
                  key={s.name}
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="45vw"
                  className={`object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div key={current.name} className="animate-fade-in mt-6 max-w-lg">
              <p className="text-[17px] leading-relaxed text-[#46575F]">{current.text}</p>
              <button
                type="button"
                onClick={() => requestBooking({ department: current.department })}
                className="group mt-4 inline-flex items-center gap-2 text-base font-semibold text-[#0B3446] underline decoration-[#0B3446]/25 underline-offset-[6px] hover:decoration-[#0B3446]"
              >
                Book a {current.name.toLowerCase()} consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
