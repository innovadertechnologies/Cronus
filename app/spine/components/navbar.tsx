import Image from "next/image";
import { CalendarCheck, Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { BookButton } from "./book-button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8 lg:h-20">
        <a href="#hero" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="Cronus Multispeciality Hospital"
            width={1353}
            height={742}
            priority
            className="h-10 w-auto lg:h-14"
          />
        </a>

        {/* On mobile these live in the sticky bottom bar instead */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0B3446] px-5 py-2 text-sm font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <BookButton className="inline-flex items-center gap-2 rounded-lg border-2 border-[#0E7C86] bg-[#0E7C86] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110">
            <CalendarCheck className="h-4 w-4" />
            Book Now
          </BookButton>
        </div>
      </div>
    </header>
  );
}
