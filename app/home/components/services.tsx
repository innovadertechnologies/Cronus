"use client";

import Image from "next/image";
import { useState } from "react";
import { unsplash } from "../data";
import { requestBooking } from "./booking";
import { SectionLabel } from "./section-label";

const tabs = [
  {
    label: "Professional experts",
    text: "Experienced consultants across 40+ specialities, so you're seen by the right person from your first visit, and everything is explained clearly along the way.",
  },
  {
    label: "Affordable pricing",
    text: "Good care shouldn't be out of reach. We keep treatment affordable and talk you through costs and insurance questions before treatment begins.",
  },
  {
    label: "Complete patient care",
    text: "Diagnostics, pharmacy, wards, ICU and follow-up all work together under one roof, with certified doctors and support available 24/7.",
  },
];

const care = [
  {
    title: "Nursing",
    image: unsplash("1584515933487-779824d29309"),
    text: "Our nursing team works to hold the hospital to the highest standards of professional care, and to keep growing alongside the patients it serves.",
  },
  {
    title: "Nutrition & diet",
    image: unsplash("1512621776951-a57141f2eefd"),
    text: "The Nutrition & Dietetics department improves the nutritional health and well-being of patients, which helps their clinical treatment work better.",
  },
];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0B3446] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel light>Easy way to get services</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.01em] sm:text-[2.6rem] sm:leading-tight">
              Because your health is our passion.
            </h2>

            <div role="tablist" aria-label="Why choose Cronus" className="mt-10 flex flex-wrap gap-x-7 border-b border-white/15">
              {tabs.map(({ label }, i) => (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`-mb-px border-b-2 pb-3 text-[15px] font-semibold transition-colors ${
                    i === active ? "border-[#8FD3D8] text-white" : "border-transparent text-white/55 hover:text-white"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <p key={active} role="tabpanel" className="animate-fade-in mt-7 min-h-[6rem] text-lg leading-relaxed text-white/80">
              {tabs[active].text}
            </p>

            <button
              type="button"
              onClick={() => requestBooking()}
              className="mt-8 rounded-md bg-white px-6 py-3.5 font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F1F2]"
            >
              Book an appointment
            </button>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-lg">
            <Image
              src={unsplash("1551601651-2a8555f1a136")}
              alt="Surgeons at work in the operation theatre"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/15 pt-14 md:grid-cols-2 md:gap-16">
          {care.map(({ title, image, text }) => (
            <article key={title} className="grid grid-cols-[110px_1fr] gap-6 sm:grid-cols-[160px_1fr]">
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image src={image} alt={title} fill sizes="160px" className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/70">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
