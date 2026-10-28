"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { CLINIC_NAME, CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal";

export function Navbar() {
  const { openBookingModal } = useBookingModal();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="https://cronushospitals.com" className="shrink-0">
          <Image
            src="/logo.png"
            alt={CLINIC_NAME}
            width={1353}
            height={742}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="hidden items-center gap-2 rounded-xl border-2 border-[#0B3446] bg-white px-5 py-2.5 text-sm font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            {CLINIC_PHONE_DISPLAY}
          </a>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C86] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:brightness-110 sm:px-6"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
