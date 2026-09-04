"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { LeadFormModal } from "@/app/components/lead-form-modal";

const LeadFormModalContext = createContext<{ openLeadForm: () => void } | null>(null);

export function LeadFormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openLeadForm = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  return (
    <LeadFormModalContext.Provider value={{ openLeadForm }}>
      {children}
      <LeadFormModal isOpen={isOpen} onClose={close} />
    </LeadFormModalContext.Provider>
  );
}

export function useLeadFormModal() {
  const context = useContext(LeadFormModalContext);
  if (!context) {
    throw new Error("useLeadFormModal must be used within a LeadFormModalProvider");
  }
  return context;
}
