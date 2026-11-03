"use client";

import type { ReactNode } from "react";
import { useBookingModal } from "./booking-modal";

// Lets server-rendered sections open the booking modal.
export function BookButton({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  const { openBookingModal } = useBookingModal();

  return (
    <button id={id} type="button" onClick={openBookingModal} className={className}>
      {children}
    </button>
  );
}
