"use client";

import type { ReactNode } from "react";
import { useBookingModal } from "./booking-modal";

// Lets server-rendered sections open the booking modal.
export function BookButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { openBookingModal } = useBookingModal();

  return (
    <button type="button" onClick={openBookingModal} className={className}>
      {children}
    </button>
  );
}
