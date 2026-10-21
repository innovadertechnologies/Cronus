"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { CLINIC_ADDRESS, CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { DEPARTMENTS, DOCTORS, HOSPITAL_EMAIL } from "../data";
import { requestBooking } from "./booking";

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}`;

export function Hero() {
  return (
    <section id="hero" className="bg-[#F6F3EE]">
      <div className="relative overflow-hidden">
        {/* Background photo: right side on desktop, fading into the page colour behind the copy */}
        <div className="absolute inset-0 lg:left-auto lg:w-[60%]">
          <Image
            src="/hospitalog.jpeg"
            alt="Cronus Multispeciality Hospital building, Chhatarpur"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_42%]"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#F6F3EE] via-[#F6F3EE]/40 to-transparent lg:block" />
        </div>
        <div className="absolute inset-0 bg-[#F6F3EE]/85 lg:hidden" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-8 sm:pt-10 lg:flex lg:min-h-[540px] lg:items-center lg:py-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#5B6B73]">Multispeciality hospital · Chhatarpur, South Delhi</p>

            <h1 className="mt-5 text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0B3446] sm:text-6xl lg:text-[4.1rem]">
              Best medical care for your health.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#46575F]">
              Cronus Multispeciality Hospital has been one of the leading healthcare providers in Chhatarpur, South Delhi,
              with doctors, specialists and nurses under one roof.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="button"
                onClick={() => requestBooking()}
                className="rounded-md bg-[#0E7C86] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0B6870]"
              >
                Book an appointment
              </button>
              <a
                href="#about"
                className="group inline-flex items-center gap-2 text-base font-semibold text-[#0B3446] underline decoration-[#0B3446]/25 underline-offset-[6px] transition-colors hover:decoration-[#0B3446]"
              >
                Discover more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-[#0B3446]/10 pt-6">
              <div>
                <p className="flex items-center gap-2 text-sm text-[#5B6B73]">
                  <span className="h-2 w-2 rounded-full bg-[#D9443F]" />
                  Emergency, 24x7
                </p>
                <a href={`tel:${CLINIC_PHONE_TEL}`} className="mt-1 block text-xl font-semibold text-[#0B3446] hover:text-[#D9443F]">
                  {CLINIC_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <p className="text-sm text-[#5B6B73]">Find us</p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-semibold text-[#0B3446] underline decoration-[#0B3446]/25 underline-offset-4 hover:decoration-[#0B3446]"
                >
                  100 Feet Rd, Chhatarpur
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickActions />
    </section>
  );
}

function QuickActions() {
  return (
    <div className="border-y border-[#0B3446]/10 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-[#0B3446]/10 px-4 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:divide-x lg:divide-y-0">
        <DoctorSearch />

        <div className="py-8 lg:px-10">
          <h2 className="text-lg font-semibold text-[#0B3446]">Need help?</h2>
          <p className="mt-1 text-[15px] text-[#5B6B73]">Don&apos;t hesitate to contact our support team.</p>
          <div className="mt-4 space-y-1.5 text-[15px] font-medium text-[#0B3446]">
            <a href={`tel:${CLINIC_PHONE_TEL}`} className="block hover:text-[#0E7C86]">
              {CLINIC_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${HOSPITAL_EMAIL}`} className="block break-all hover:text-[#0E7C86]">
              {HOSPITAL_EMAIL}
            </a>
          </div>
        </div>

        <div className="py-8 lg:pl-10">
          <h2 className="text-lg font-semibold text-[#0B3446]">Emergency medical care</h2>
          <p className="mt-1 text-[15px] text-[#5B6B73]">Open 24 hours a day, 7 days a week, for trauma and emergencies.</p>
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#D9443F] px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#BF3A35]"
          >
            Call for emergency
          </a>
        </div>
      </div>
    </div>
  );
}

type Result = { label: string; sub: string; department: string; doctor?: string };

const searchIndex: Result[] = [
  ...DOCTORS.map((d) => ({ label: d.name, sub: d.speciality, department: d.department, doctor: d.name })),
  ...DEPARTMENTS.map((department) => ({ label: department, sub: "Speciality", department })),
];

const popular = ["Orthopaedics", "Obstetrics & Gynaecology", "Cardiology", "ENT"];

function DoctorSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const q = query.trim().toLowerCase();
  const results = q
    ? searchIndex.filter((r) => `${r.label} ${r.sub}`.toLowerCase().includes(q)).slice(0, 6)
    : searchIndex.slice(0, DOCTORS.length);

  function choose(result: Result) {
    setOpen(false);
    setQuery(result.label);
    requestBooking({ department: result.department, doctor: result.doctor });
  }

  return (
    <div className="py-8 lg:pr-10">
      <h2 className="text-lg font-semibold text-[#0B3446]">Find a doctor</h2>
      <p className="mt-1 text-[15px] text-[#5B6B73]">Search by name or speciality.</p>

      <div className="relative mt-4">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A979D]" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && results[0]) choose(results[0]);
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="e.g. Dr. Dheeraj Nath or Orthopaedics"
          aria-label="Search doctors or specialities"
          className="w-full rounded-md border border-[#0B3446]/20 bg-white py-3 pl-10 pr-4 text-[15px] text-[#1B2936] placeholder:text-[#8A979D] focus:border-[#0E7C86] focus:outline-none focus:ring-2 focus:ring-[#0E7C86]/20"
        />

        {open && (
          <ul className="animate-slide-down absolute inset-x-0 top-full z-20 mt-1 max-h-72 overflow-auto rounded-md border border-[#0B3446]/15 bg-white py-1 shadow-lg">
            {results.length === 0 && (
              <li className="px-4 py-3 text-sm text-[#5B6B73]">Nothing found. Try a speciality like Cardiology.</li>
            )}
            {results.map((r) => (
              <li key={`${r.label}-${r.sub}`}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(r)}
                  className="flex w-full items-baseline justify-between gap-3 px-4 py-2.5 text-left hover:bg-[#F6F3EE]"
                >
                  <span className="text-[15px] font-medium text-[#0B3446]">{r.label}</span>
                  <span className="shrink-0 text-xs text-[#5B6B73]">{r.sub}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p className="mt-4 text-sm text-[#5B6B73]">
        Popular:{" "}
        {popular.map((department, i) => (
          <span key={department}>
            <button
              type="button"
              onClick={() => requestBooking({ department })}
              className="font-medium text-[#0B3446] underline decoration-[#0B3446]/25 underline-offset-4 hover:decoration-[#0B3446]"
            >
              {department}
            </button>
            {i < popular.length - 1 && ", "}
          </span>
        ))}
      </p>
    </div>
  );
}
