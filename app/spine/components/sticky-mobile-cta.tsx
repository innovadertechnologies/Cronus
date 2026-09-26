import { CalendarCheck, Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { BookButton } from "./book-button";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(11,52,70,0.25)] backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={`tel:${CLINIC_PHONE_TEL}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#0B3446] bg-white px-4 py-3 text-sm font-semibold text-[#0B3446]"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <BookButton className="flex flex-1 items-center justify-center gap-2 rounded-xl border-2 border-[#0E7C86] bg-[#0E7C86] px-4 py-3 text-sm font-semibold text-white">
          <CalendarCheck className="h-4 w-4" />
          Book Now
        </BookButton>
      </div>
    </div>
  );
}
