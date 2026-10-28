"use client";

import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { CheckCircle2, Phone } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { UrologyForm } from "./urology-form";

const checklist = [
  "22+ Years of Experience",
  "Advanced Laparoscopic Surgery",
  "Personalised Treatment Plan",
];

// Desktop and mobile use the same hero image
const HERO_ALT = "Urology and Kidney Stone Treatment at Cronus Hospital";
const desktopBg = getImageProps({ 
  src: "/urology_banner.png", 
  alt: HERO_ALT, 
  fill: true, 
  sizes: "100vw", 
  loading: "eager", 
  priority: true 
}).props;
const mobileBg = getImageProps({ 
  src: "/urology_banner.png", 
  alt: HERO_ALT, 
  fill: true, 
  sizes: "100vw", 
  loading: "eager", 
  priority: true 
}).props;
const DESKTOP_MEDIA = "(min-width: 1024px)";
const MOBILE_MEDIA = "(max-width: 1023px)";

export function Hero() {
  preload(desktopBg.src, { 
    as: "image", 
    imageSrcSet: desktopBg.srcSet, 
    imageSizes: desktopBg.sizes, 
    media: DESKTOP_MEDIA, 
    fetchPriority: "high" 
  });
  preload(mobileBg.src, { 
    as: "image", 
    imageSrcSet: mobileBg.srcSet, 
    imageSizes: mobileBg.sizes, 
    media: MOBILE_MEDIA, 
    fetchPriority: "high" 
  });

  return (
    <section
      id="hero"
      className="relative overflow-hidden lg:min-h-[calc(100svh-5rem)] lg:flex lg:items-center"
    >
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...desktopBg} loading="eager" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      {/* Background Image - Mobile */}
      <div className="absolute inset-0 lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...mobileBg} loading="eager" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0B2A4A] sm:text-4xl lg:text-5xl">
              Kidney Stone Se Pareshan?
              <span className="mt-2 block text-[#0E7C86]">
                Advanced Surgery Se Paayein Behtar Treatment
              </span>
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-[#1B2936]/85 lg:text-xl">
              Dr. Saurabh Kumar Sinha ke saath kidney stone treatment options aur expert urological care ke liye consultation book karein.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 fill-[#0E7C86] text-white" />
                  <span className="text-base font-medium text-[#1B2936]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${CLINIC_PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0E7C86] px-8 py-4 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110"
              >
                <Phone className="h-5 w-5" />
                Call Now for Consultation
              </a>
            </div>

            <p className="mt-4 text-sm text-[#64748B]">
              *Cashless facility subject to insurance policy, hospital network and approval.
            </p>
          </div>

          {/* Right Form - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <UrologyForm idPrefix="hero-desktop" />
          </div>
        </div>
      </div>
    </section>
  );
}
