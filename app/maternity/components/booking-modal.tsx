"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { MaternityForm } from "./maternity-form";
import { useBookingModal } from "./booking-modal-provider";

export function BookingModal() {
  const { isOpen, closeBookingModal } = useBookingModal();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeBookingModal}
      />
      <div className="relative w-full max-w-md mx-4">
        <button
          type="button"
          onClick={closeBookingModal}
          className="absolute -top-2 -right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-lg hover:text-gray-900"
        >
          <X className="h-4 w-4" />
        </button>
        <MaternityForm id="booking-modal-form" idPrefix="modal" />
      </div>
    </div>
  );
}