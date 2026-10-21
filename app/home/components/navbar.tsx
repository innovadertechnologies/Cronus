"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CLINIC_ADDRESS, CLINIC_NAME, CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { HOSPITAL_EMAIL } from "../data";
import { requestBooking } from "./booking";

const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Info strip */}
      <div className="bg-[#0B3446] text-[13px] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-8">
          <div className="flex items-center gap-6">
            <a href={`mailto:${HOSPITAL_EMAIL}`} className="hidden items-center gap-2 hover:text-white sm:inline-flex">
              <Mail className="h-3.5 w-3.5" />
              {HOSPITAL_EMAIL}
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden md:inline">100 Feet Rd, Chhatarpur, New Delhi</span>
              <span className="md:hidden">Find location</span>
            </a>
          </div>
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="inline-flex items-center gap-2 font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B66]" />
            Emergency 24x7:
            <span className="font-semibold">{CLINIC_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 bg-[#F6F3EE]/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(11,52,70,0.1),0_8px_24px_-16px_rgba(11,52,70,0.35)]" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-8 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
        >
          <a href="#hero" aria-label={`${CLINIC_NAME} home`} className="shrink-0">
            <Image
              src="/logo.png"
              alt={CLINIC_NAME}
              width={1353}
              height={742}
              sizes="120px"
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-12 sm:h-14"}`}
            />
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="hidden items-center gap-3 lg:flex"
              aria-label={`Call ${CLINIC_PHONE_DISPLAY}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B3446]/20 text-[#0B3446]">
                <Phone className="h-4 w-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-[#5B6B73]">Call us anytime</span>
                <span className="text-[15px] font-semibold text-[#0B3446]">{CLINIC_PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              aria-label={`Call ${CLINIC_PHONE_DISPLAY}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0B3446]/20 text-[#0B3446] lg:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => requestBooking()}
              className="rounded-md bg-[#0E7C86] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0B6870] sm:px-5 sm:text-[15px]"
            >
              Book appointment
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
