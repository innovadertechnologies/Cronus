"use client";

import { Phone, MessageCircle } from "lucide-react";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal-provider";

export function StickyMobileCTA() {
  const { openBookingModal } = useBookingModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3 hidden">
      <div className="flex gap-3">
        <a
          href={`tel:${CLINIC_PHONE_TEL}`}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <a
          href={`https://wa.me/${CLINIC_PHONE_TEL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          type="button"
          onClick={openBookingModal}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-pink-500 px-4 py-3 text-sm font-semibold text-white"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}