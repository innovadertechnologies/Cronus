"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useLeadFormModal } from "@/app/components/lead-form-modal-provider";

export function StickyMobileCta() {
  const { openLeadForm } = useLeadFormModal();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white/95 shadow-[0_-8px_24px_-16px_rgba(11,31,51,0.3)] backdrop-blur sm:hidden">
      <a
        href={`tel:${CLINIC_PHONE_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#005F70]"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <button
        type="button"
        onClick={openLeadForm}
        className="flex flex-1 items-center justify-center gap-2 bg-[#129EA8] py-3.5 text-sm font-semibold text-white"
      >
        <CalendarCheck className="h-4 w-4" />
        Book Appointment
      </button>
    </div>
  );
}
