"use client";

import Image from "next/image";
import { CalendarDays, CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal";

const checklist = [
  "Spine & Disc Condition Evaluation",
  "Surgical & Non-Surgical Treatment Options",
  "Personalized Treatment Planning",
];

// spinebg.png is 1961×802. On desktop the image box keeps that ratio and is at
// least as tall as the hero, so the badges below can be pinned to the doctor
// in image-relative percentages and stay put at every screen size.
const DESKTOP_BG_WIDTH = "max(100%, calc(max(600px, 100svh - 5rem) * 2.445))";

function ExperienceBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-full border-4 border-white/80 bg-[#0B3446] text-center text-white shadow-[0_20px_40px_-12px_rgba(11,52,70,0.6)] ${className}`}
    >
      <span className="text-[1.9em] font-extrabold leading-none">30+</span>
      <span className="mt-[0.2em] text-[0.95em] font-bold leading-tight">Years</span>
      <span className="text-[0.62em] font-medium leading-tight text-white/85">
        of Experience
        <br />
        in Spine Care
      </span>
      <span className="mt-[0.35em] flex gap-[0.1em] text-amber-400" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-[0.7em] w-[0.7em] fill-current" />
        ))}
      </span>
    </div>
  );
}

function DoctorCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl border border-white/70 bg-white/90 px-4 py-3 shadow-[0_16px_32px_-14px_rgba(11,52,70,0.45)] backdrop-blur-md ${className}`}
    >
      <p className="text-base font-extrabold text-[#0B3446] lg:text-lg">Dr. Sandeep Singh</p>
      <p className="text-xs font-semibold text-[#1B2936]/80 lg:text-sm">Orthopaedics &amp; Spine Specialist</p>
      <p className="text-[11px] text-[#64748B] lg:text-xs">Cronus Multispeciality Hospital, Chhatarpur</p>
    </div>
  );
}

export function Hero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#F3F9FD] to-[#E4F1FA] lg:flex lg:h-[calc(100svh-5rem)] lg:min-h-[600px] lg:items-center lg:bg-none"
    >
      {/* Desktop background */}
      <div
        className="absolute right-[-20%] top-1/2 hidden aspect-[1961/802] -translate-y-1/2 lg:block xl:right-[-8%]"
        style={{ width: DESKTOP_BG_WIDTH }}
      >
        <Image
          src="/spinebg.png"
          alt="Dr. Sandeep Singh, Orthopaedics & Spine Specialist"
          fill
          priority
          sizes="(min-width: 1024px) 160vw, 1px"
          className="object-cover"
        />
        <ExperienceBadge className="absolute left-[56%] top-[26%] hidden w-[clamp(140px,10vw,176px)] text-[clamp(14px,1vw,17px)] xl:flex" />
        <DoctorCard className="absolute bottom-[13%] left-[66%] w-[clamp(260px,20vw,320px)]" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[60%] bg-gradient-to-r from-white/85 via-white/50 to-transparent lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-7 sm:px-8 sm:pt-10 lg:py-10">
        <div className="max-w-[560px] lg:max-w-[500px] xl:max-w-[560px]">
          <p className="inline-flex rounded-md border border-[#129EA8]/20 bg-white/80 px-3 py-1 text-xs font-bold text-[#0B3446] shadow-sm sm:text-sm">
            Expert Spine Care at Cronus
          </p>

          <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#0B2A4A] sm:text-5xl lg:text-[2.6rem] xl:text-[3.1rem]">
            Persistent Back Pain or Sciatica? Find the Right{" "}
            <span className="text-[#0E7C86]">Spine Treatment.</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[#1B2936]/85 sm:text-lg">
            Get expert evaluation and personalized treatment guidance from{" "}
            <strong className="font-bold text-[#0B2A4A]">Dr. Sandeep Singh</strong>, with{" "}
            <strong className="font-bold text-[#0B2A4A]">30+ years of experience</strong> in spine care.
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm font-bold text-[#0E7C86] sm:text-base">
            <MapPin className="h-5 w-5 shrink-0 fill-[#0B3446] text-white" />
            Cronus Multispeciality Hospital, Chhatarpur
          </p>

          <ul className="mt-4 flex flex-col gap-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 fill-[#0E7C86] text-white" />
                <span className="text-[15px] font-medium text-[#1B2936]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0E7C86] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110"
            >
              <CalendarDays className="h-5 w-5" />
              Book Your Consultation
            </button>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-[#0B3446] bg-white px-7 py-3 text-base font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>

        {/* Mobile / tablet banner image */}
        <div className="relative -mx-4 mt-8 h-[320px] overflow-hidden sm:-mx-8 sm:h-[420px] lg:hidden">
          <Image
            src="/spinebg.png"
            alt="Dr. Sandeep Singh, Orthopaedics & Spine Specialist"
            fill
            priority
            sizes="(max-width: 1023px) 200vw, 1px"
            className="object-cover object-[78%_20%]"
          />
          <ExperienceBadge className="absolute left-4 top-6 w-[112px] text-[11px] sm:left-8 sm:w-[140px] sm:text-sm" />
          <DoctorCard className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-8 sm:w-[300px]" />
        </div>
      </div>
    </section>
  );
}
