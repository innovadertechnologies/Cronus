import { Phone, CalendarCheck } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white/95 shadow-[0_-8px_24px_-16px_rgba(11,31,51,0.3)] backdrop-blur sm:hidden">
      <a
        href={`tel:${CLINIC_PHONE_TEL}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-semibold text-[#0F2544]"
      >
        <Phone className="h-4 w-4" />
        Call Now
      </a>
      <BookTrigger className="flex flex-1 items-center justify-center gap-2 bg-[#15803D] py-3.5 text-sm font-semibold text-white">
        <CalendarCheck className="h-4 w-4" />
        Book Appointment
      </BookTrigger>
    </div>
  );
}
