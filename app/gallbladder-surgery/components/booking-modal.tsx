"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { AppointmentForm } from "@/app/gallbladder-surgery/components/appointment-form";

type BookingModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <BookingModalContext.Provider value={{ isOpen, open, close }}>
      {children}
      <BookingModal />
    </BookingModalContext.Provider>
  );
}

function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within a BookingModalProvider");
  }
  return ctx;
}

export function BookTrigger({
  children,
  className,
  onClick,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useBookingModal();
  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        open();
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

function BookingModal() {
  const { isOpen, close } = useBookingModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F2544]/60 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close booking form"
              className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0F2544] shadow-md transition-colors hover:bg-slate-100"
            >
              <X className="h-4 w-4" />
            </button>
            <AppointmentForm idPrefix="popup" variant="hero" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
