"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface BookingModalContextType {
  isOpen: boolean;
  openBookingModal: () => void;
  closeBookingModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => setIsOpen(false);

  return (
    <BookingModalContext.Provider value={{ isOpen, openBookingModal, closeBookingModal }}>
      {children}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (context === undefined) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return context;
}