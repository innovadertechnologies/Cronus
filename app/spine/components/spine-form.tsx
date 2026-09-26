"use client";

import { useLeadForm } from "@/app/lib/use-lead-form";
import { CalendarCheck, Lock } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { submitSpineLead, type SpineLeadFormState } from "@/app/spine/actions";

const initialState: SpineLeadFormState = { success: false };

const concerns = [
  "Lower Back Pain",
  "Neck Pain",
  "Sciatica / Leg Pain",
  "Slip Disc / Disc Bulge",
  "Spinal Stenosis",
  "Other Spine Problem",
];

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15";

export function SpineForm({
  id,
  idPrefix = "spine",
  className = "",
  withEmail = false,
  compact = false,
}: {
  id?: string;
  idPrefix?: string;
  className?: string;
  withEmail?: boolean;
  // Drops the intro line and tightens padding, for placing the form inside a banner.
  compact?: boolean;
}) {
  const { state, onSubmit, pending } = useLeadForm(submitSpineLead, initialState);
  const inputClass = `${inputBase} ${compact ? "py-2.5" : "py-3"}`;

  return (
    <div
      id={id}
      className={`relative scroll-mt-24 rounded-3xl border border-[#129EA8]/20 bg-white shadow-[0_30px_60px_-24px_rgba(11,52,70,0.35)] ${compact ? "p-5" : "p-6 sm:p-8"} ${className}`}
    >
      <h2 className={`${compact ? "text-lg" : "text-xl"} font-bold text-[#0B3446]`}>Book Your Spine Consultation</h2>
      {!compact && (
        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
          Share your details and our team will call you to confirm your appointment.
        </p>
      )}

      <form onSubmit={onSubmit} className={`${compact ? "mt-3 gap-2.5" : "mt-5 gap-3"} flex flex-col`} noValidate>
        <div>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter Your Name"
            className={inputClass}
          />
        </div>
        {withEmail && (
          <div>
            <label htmlFor={`${idPrefix}-email`} className="sr-only">
              Email
            </label>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter Your Email"
              className={inputClass}
            />
          </div>
        )}
        <div>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            Phone Number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="Enter Your Phone Number"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-concern`} className="sr-only">
            Your Concern
          </label>
          <select id={`${idPrefix}-concern`} name="concern" className={inputClass}>
            <option value="">Select Your Concern</option>
            {concerns.map((concern) => (
              <option key={concern}>{concern}</option>
            ))}
          </select>
        </div>

        {state.error && (
          <p role="alert" className="text-sm font-medium text-red-500">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className={`mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0E7C86] px-6 ${compact ? "py-3" : "py-3.5"} text-base font-semibold text-white shadow-[0_12px_24px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60`}
        >
          <CalendarCheck className="h-5 w-5" />
          {pending ? "Sending..." : "Book My Consultation"}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
          <Lock className="h-3.5 w-3.5" />
          Or call us at{" "}
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-[#1B2936] hover:underline">
            {CLINIC_PHONE_DISPLAY}
          </a>
        </p>
      </form>
    </div>
  );
}
