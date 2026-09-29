"use client";

import { useLeadForm } from "@/app/lib/use-lead-form";
import { CalendarCheck, Lock } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { submitKneeHipLead, type KneeHipLeadFormState } from "@/app/knee&hip/actions";

const initialState: KneeHipLeadFormState = { success: false };

const concerns = [
  "Knee Replacement",
  "Hip Replacement",
];

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 text-gray-800 placeholder:text-slate-400 transition-colors focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/15";

export function KneeHipForm({
  id,
  idPrefix = "knee-hip",
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
  const { state, onSubmit, pending } = useLeadForm(submitKneeHipLead, initialState);
  const inputClass = `${inputBase} ${compact ? "py-2.5" : "py-3"}`;

  return (
    <div
      id={id}
      className={`relative scroll-mt-24 rounded-2xl border border-teal-100 bg-white shadow-[0_30px_60px_-24px_rgba(0,150,136,0.35)] ${compact ? "p-5" : "p-6 sm:p-8"} ${className}`}
    >
      <h2 className={`${compact ? "text-lg" : "text-xl"} font-bold text-gray-800`}>Get Expert Advice for Your Knee or Hip Pain</h2>
      {!compact && (
        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
          Share your details and our team will call you to confirm your appointment.
        </p>
      )}

      <form onSubmit={onSubmit} className={`${compact ? "mt-3 gap-2.5" : "mt-5 gap-3"} flex flex-col`} noValidate>
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
            placeholder="Enter your name"
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
            placeholder="Enter your mobile number"
            className={inputClass}
          />
        </div>
        <div>
          <fieldset>
            <legend className="sr-only">What are you looking for?</legend>
            <p className="mb-3 text-sm font-medium text-gray-800">What are you looking for?*</p>
            <div className="flex flex-col gap-2">
              {concerns.map((concern) => (
                <label key={concern} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="concern"
                    value={concern}
                    className="h-4 w-4 text-teal-600 border-slate-300 focus:ring-teal-600 focus:ring-2"
                  />
                  <span className="text-sm text-gray-800">{concern}</span>
                </label>
              ))}
            </div>
          </fieldset>
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
          {pending ? "Sending..." : "Book My Consultation →"}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
          <Lock className="h-3.5 w-3.5" />
          Or call us at{" "}
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-gray-800 hover:underline">
            {CLINIC_PHONE_DISPLAY}
          </a>
        </p>
      </form>
    </div>
  );
}