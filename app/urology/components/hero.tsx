"use client";

import { getImageProps } from "next/image";
import { preload } from "react-dom";
import { CheckCircle2, Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const checklist = [
  "22+ Years of Experience",
  "Advanced Laparoscopic Surgery",
  "Personalised Treatment Plan",
];

// Desktop and mobile use the same hero image
const HERO_ALT = "Dr. Saurabh Kumar Sinha - Urology and Kidney Stone Treatment at Cronus Hospital";
const desktopBg = getImageProps({ 
  src: "/urology_banner_with_dr.png", 
  alt: HERO_ALT, 
  fill: true, 
  sizes: "100vw", 
  loading: "eager", 
  priority: true 
}).props;
const mobileBg = getImageProps({ 
  src: "/urology_banner_with_dr.png", 
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
      className="relative min-h-[450px] overflow-hidden sm:min-h-[550px] md:min-h-[650px] lg:min-h-[calc(100svh-5rem)] lg:flex lg:items-center"
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
        <img {...mobileBg} loading="eager" className="object-cover object-[75%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-40% to-white/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-16">
        <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[60%]">
          <h1 className="text-[22px] font-extrabold leading-[1.25] tracking-tight text-[#0B2A4A] sm:text-[28px] md:text-3xl lg:text-5xl">
            Kidney Stone Se Pareshan?
            <span className="mt-1 block text-[#0E7C86] sm:mt-1.5 lg:mt-2">
              Advanced Surgery Se Paayein Behtar Treatment
            </span>
          </h1>

          <p className="mt-3 text-[13px] leading-relaxed text-[#1B2936]/85 sm:mt-4 sm:text-[15px] md:text-base lg:text-xl">
            Dr. Saurabh Kumar Sinha ke saath kidney stone treatment options aur expert urological care ke liye consultation book karein.
          </p>

          <ul className="mt-4 flex flex-col gap-2 sm:mt-5 md:mt-6 md:gap-2.5 lg:gap-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 fill-[#0E7C86] text-white md:h-5 md:w-5" />
                <span className="text-[12px] font-medium text-[#1B2936] sm:text-[13px] md:text-sm lg:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 md:mt-8 md:flex-row md:gap-3">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0E7C86] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110 sm:text-sm md:gap-2.5 md:px-7 md:py-3.5 lg:px-8 lg:py-4 lg:text-base"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call Now for Consultation
            </a>
          </div>

          <p className="mt-3 text-[10px] text-[#64748B] sm:mt-4 sm:text-[11px] md:text-xs lg:text-sm">
            *Cashless facility subject to insurance policy, hospital network and approval.
          </p>
        </div>
      </div>
    </section>
  );
}
