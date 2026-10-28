"use client";

import { useLeadForm } from "@/app/lib/use-lead-form";
import { CalendarCheck, Lock } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { submitUrologyLead, type UrologyLeadFormState } from "@/app/urology/actions";
import { useEffect } from "react";

const initialState: UrologyLeadFormState = { success: false };

const concerns = [
  "Kidney Stone",
  "Prostate Problem",
  "Urinary Problem",
  "Other Urology Concern",
];

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 text-gray-800 placeholder:text-slate-400 transition-colors focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/15";

export function UrologyForm({
  id,
  idPrefix = "urology",
  className = "",
  compact = false,
}: {
  id?: string;
  idPrefix?: string;
  className?: string;
  compact?: boolean;
}) {
  const { state, onSubmit, pending } = useLeadForm(submitUrologyLead, initialState);
  const inputClass = `${inputBase} ${compact ? "py-2.5" : "py-3"}`;

  useEffect(() => {
    if (state.success) {
      const form = document.getElementById(`${idPrefix}-form`);
      if (form) {
        (form as HTMLFormElement).reset();
      }
    }
  }, [state.success, idPrefix]);

  return (
    <div
      id={id}
      className={`relative scroll-mt-24 rounded-2xl border border-teal-100 bg-white shadow-[0_30px_60px_-24px_rgba(0,150,136,0.35)] ${compact ? "p-5" : "p-6 sm:p-8"} ${className}`}
    >
      <h2 className={`${compact ? "text-lg" : "text-xl"} font-bold text-gray-800`}>Book Your Urology Consultation</h2>
      {!compact && (
        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
          Get expert guidance for kidney stones and other urological problems.
        </p>
      )}

      <form
        id={`${idPrefix}-form`}
        onSubmit={pending ? undefined : onSubmit}
        className={`${compact ? "mt-3 gap-2.5" : "mt-5 gap-3"} flex flex-col`}
        noValidate
      >
        <div>
          <label htmlFor={`${idPrefix}-name`} className="sr-only">
            Full Name
          </label>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full Name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-phone`} className="sr-only">
            Mobile Number
          </label>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="Mobile Number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`${idPrefix}-concern`} className="sr-only">
            Select Your Concern
          </label>
          <select
            id={`${idPrefix}-concern`}
            name="concern"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select Your Concern
            </option>
            {concerns.map((concern) => (
              <option key={concern} value={concern}>
                {concern}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={`${idPrefix}-date`} className="sr-only">
            Preferred Appointment Date
          </label>
          <input
            id={`${idPrefix}-date`}
            name="appointmentDate"
            type="date"
            className={inputClass}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        {state.error && (
          <p role="alert" className="text-sm font-medium text-red-500">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className={`mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 ${compact ? "py-3" : "py-3.5"} text-base font-semibold text-white shadow-[0_12px_24px_-10px_rgba(20,184,166,0.7)] transition-all hover:bg-teal-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60`}
        >
          <CalendarCheck className="h-5 w-5" />
          {pending ? "Sending..." : "Book My Appointment"}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
          <Lock className="h-3.5 w-3.5" />
          Our team will contact you to assist with your appointment.
        </p>

        <p className="text-center text-xs text-[#64748B]">
          Or call us at{" "}
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-gray-800 hover:underline">
            {CLINIC_PHONE_DISPLAY}
          </a>
        </p>
      </form>
    </div>
  );
}
