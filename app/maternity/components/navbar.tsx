"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal-provider";

export function Navbar() {
  const { openBookingModal } = useBookingModal();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="Cronus Multispeciality Hospital"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <span className="text-sm font-medium text-[#1B2936]">Maternity Care</span>
              <span className="text-sm font-medium text-[#64748B]">Pregnancy</span>
              <span className="text-sm font-medium text-[#64748B]">Delivery</span>
              <span className="text-sm font-medium text-[#64748B]">Postnatal</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#005F70] hover:text-[#129EA8]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              onClick={openBookingModal}
              className="rounded-lg bg-[#005F70] px-4 py-2 text-sm font-semibold text-white hover:bg-[#129EA8] transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}