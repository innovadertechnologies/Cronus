"use client";

import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { CalendarDays, CheckCircle2, MapPin, Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal";

const checklist = [
  "30+ Years of Orthopedic Experience",
  "1,000+ Successful Joint Replacement Surgeries", 
  "Advanced Surgical Techniques",
];

// hipbanner.png - On desktop the image box keeps the ratio and is at
// least as tall as the hero, so the badges below can be pinned to the doctor
// in image-relative percentages and stay put at every screen size.
const DESKTOP_BG_WIDTH = "max(100%, calc(max(600px, 100svh - 5rem) * 2.445))";

// Desktop and mobile use different hero images. Each one is preloaded only
// for its own screen size and the other stays lazy (it's display:none), so a
// phone never downloads the desktop banner and vice versa.
const HERO_ALT = "Dr. Dheeraj Nath, Orthopedic & Joint Replacement Surgeon";
const desktopBg = getImageProps({ src: "/hipbanner.png", alt: HERO_ALT, fill: true, sizes: "160vw", loading: "lazy" }).props;
const mobileBg = getImageProps({ src: "/hipbanner.png", alt: HERO_ALT, fill: true, sizes: "150vw", loading: "lazy" }).props;
const DESKTOP_MEDIA = "(min-width: 1024px)";
const MOBILE_MEDIA = "(max-width: 1023px)";

export function Hero() {
  const { openBookingModal } = useBookingModal();
  preload(desktopBg.src, { as: "image", imageSrcSet: desktopBg.srcSet, imageSizes: desktopBg.sizes, media: DESKTOP_MEDIA, fetchPriority: "high" });
  preload(mobileBg.src, { as: "image", imageSrcSet: mobileBg.srcSet, imageSizes: mobileBg.sizes, media: MOBILE_MEDIA, fetchPriority: "high" });

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
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...desktopBg} className="object-cover" />
      </div>
      {/* Mobile / tablet background */}
      {/* Covers the whole hero; anchored right so the doctor stays in view and
          only the plain left edge is trimmed. */}
      <div className="absolute inset-0 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...mobileBg} className="object-cover object-[75%_center]" />
        <div className="absolute inset-y-0 left-0 w-[75%] bg-gradient-to-r from-white/85 via-white/60 to-transparent" />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[60%] bg-gradient-to-r from-white/85 via-white/50 to-transparent lg:block" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-8 sm:py-12 lg:py-10">
        <div className="max-w-[60%] sm:max-w-[55%] lg:max-w-[500px] xl:max-w-[560px]">
          <p className="hidden rounded-md border border-[#129EA8]/20 bg-white/80 px-3 py-1 text-xs font-bold text-[#0B3446] shadow-sm sm:text-sm lg:inline-flex">
            Expert Joint Care at Cronus
          </p>

          <h1 className="text-[18px] font-extrabold leading-[1.2] tracking-tight text-[#0B2A4A] sm:text-3xl lg:mt-4 lg:text-[2.6rem] xl:text-[3.1rem]">
            Get Knee & Hip Replacement Surgery from{" "}
            <span className="text-[#0E7C86]">Expert Doctors</span>
          </h1>

          <p className="mt-4 hidden text-lg leading-relaxed text-[#1B2936]/85 lg:block">
            Advanced Orthopaedic care for pain free living
          </p>

          <p className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#0E7C86] sm:text-base lg:mt-4 lg:gap-2">
            <MapPin className="h-4 w-4 shrink-0 lg:h-5 lg:w-5 fill-[#0B3446] text-white" />
            Cronus Multispeciality Hospital, Chhatarpur
          </p>

          <ul className="mt-3 flex flex-col gap-2 lg:mt-4 lg:gap-2.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2 lg:gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 lg:h-5 lg:w-5 fill-[#0E7C86] text-white" />
                <span className="text-[13px] font-medium sm:text-sm lg:text-[15px] text-[#1B2936]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 hidden gap-3 lg:flex">
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
      </div>
    </section>
  );
}