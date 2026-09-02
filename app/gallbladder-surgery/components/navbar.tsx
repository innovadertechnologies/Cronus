"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, CalendarCheck } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Gallbladder Problems", href: "#conditions" },
  { label: "Laparoscopic Surgery", href: "#surgery" },
  { label: "Why Choose Us", href: "#why-choose" },
  { label: "Contact", href: "#lead-form" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(11,31,51,0.04)]"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a href="#hero" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Cronus Multispeciality Hospital"
            width={1353}
            height={742}
            priority
            className="h-10 w-auto sm:h-12"
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1B2936]/80 transition-colors hover:text-[#129EA8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#005F70] transition-colors hover:border-[#129EA8] hover:text-[#129EA8]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href="#lead-form"
            className="flex items-center gap-2 rounded-xl bg-[#129EA8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-105"
          >
            <CalendarCheck className="h-4 w-4" />
            Book Appointment
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            aria-label="Call Now"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#005F70]"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#005F70]"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#1B2936] hover:bg-slate-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
                <a
                  href={`tel:${CLINIC_PHONE_TEL}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-[#005F70]"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href="#lead-form"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-4 py-3 text-sm font-semibold text-white"
                >
                  <CalendarCheck className="h-4 w-4" />
                  Book Appointment
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
