"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_NAME, CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { HOSPITAL_EMAIL } from "@/app/home/data";
import { DIRECTIONS_URL, NAV_LINKS, TEL_HREF, WHATSAPP_HREF } from "../data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="bg-[#0B3446] text-[13px] text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B66]" />
              </span>
              <span className="font-medium text-white">24x7 Emergency</span>
            </span>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 hover:text-white md:inline-flex"
            >
              <MapPin className="h-3.5 w-3.5" />
              100 Feet Rd, Chhatarpur, New Delhi
            </a>
            <span className="hidden items-center gap-1.5 lg:inline-flex">
              <Clock className="h-3.5 w-3.5" />
              Pharmacy open round the clock
            </span>
          </div>
          <a href={`mailto:${HOSPITAL_EMAIL}`} className="hidden items-center gap-1.5 hover:text-white sm:inline-flex">
            <Mail className="h-3.5 w-3.5" />
            {HOSPITAL_EMAIL}
          </a>
          <a href={TEL_HREF} className="font-semibold text-white sm:hidden">
            {CLINIC_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "border-transparent shadow-[0_1px_2px_rgba(11,52,70,0.06),0_8px_24px_rgba(11,52,70,0.06)]" : "border-[#0B3446]/10"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-8">
          <a href="#hero" aria-label={`${CLINIC_NAME} – back to top`} className="shrink-0">
            <Image
              src="/logo.png"
              alt={CLINIC_NAME}
              width={1353}
              height={742}
              sizes="120px"
              priority
              className="h-11 w-auto sm:h-14"
            />
          </a>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] font-medium text-[#1B2936] transition-colors hover:text-[#0E7C86]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              id="homepage-header-call-btn"
              href={TEL_HREF}
              aria-label={`Call ${CLINIC_PHONE_DISPLAY}`}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#0E7C86] px-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B6870] sm:px-5"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call</span>
              <span className="hidden lg:inline">{CLINIC_PHONE_DISPLAY}</span>
            </a>
            <a
              id="homepage-header-whatsapp-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#1FA855] px-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#178A45] sm:px-5"
            >
              <WhatsappIcon className="h-[18px] w-[18px]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              id="homepage-header-menu-btn"
              type="button"
              aria-expanded={open}
              aria-controls="homepage-mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#0B3446]/15 text-[#0B3446] xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="homepage-mobile-menu" className="animate-slide-down border-t border-[#0B3446]/10 bg-white xl:hidden">
            <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-8">
              <ul className="grid gap-1 sm:grid-cols-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-[#0B3446] hover:bg-[#F6F3EE]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center rounded-lg bg-[#0B3446] px-5 py-3 font-semibold text-white"
              >
                Book an appointment
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
