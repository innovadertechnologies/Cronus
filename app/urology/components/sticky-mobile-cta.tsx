"use client";

import { CalendarCheck, Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal";

export function StickyMobileCTA() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.15)] lg:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:${CLINIC_PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#0E7C86] bg-white px-4 py-3 text-sm font-semibold text-[#0E7C86] transition-colors active:bg-[#0E7C86] active:text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <button
          onClick={openBookingModal}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0E7C86] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all active:scale-95"
        >
          <CalendarCheck className="h-4 w-4" />
          Book Consultation
        </button>
      </div>
    </div>
  );
}
