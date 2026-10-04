"use client";

import { X } from "lucide-react";
import { LeadForm } from "@/app/components/lead-form";

export function LeadFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    isOpen && (
      <div
        onClick={onClose}
        className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[#0B3446]/60 p-4 backdrop-blur-sm"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="animate-pop-in relative w-full max-w-lg"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0B3446] shadow-lg transition-transform hover:scale-105"
          >
            <X className="h-4 w-4" />
          </button>
          <LeadForm id="modal-lead-form" />
        </div>
      </div>
    )
  );
}
