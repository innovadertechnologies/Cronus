"use client";

import { useLeadForm } from "@/app/lib/use-lead-form";
import { Lock } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { submitMaternityLead, type MaternityLeadFormState } from "@/app/maternity/actions";

const initialState: MaternityLeadFormState = { success: false };

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(236,72,153,0.55)] transition-all hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "BOOK MY APPOINTMENT"}
    </button>
  );
}

export function MaternityForm({
  id,
  idPrefix = "maternity",
  className = "",
}: {
  id?: string;
  idPrefix?: string;
  className?: string;
}) {
  const { state, onSubmit, pending } = useLeadForm(submitMaternityLead, initialState);

  return (
    <div
      id={id}
      className={`relative scroll-mt-24 rounded-[28px] border border-pink-200 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(236,72,153,0.25)] sm:p-8 ${className}`}
    >
      <h3 className="text-xl font-bold text-[#1B2936]">Ready to Begin Your Maternity Journey?</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
        Get the care, guidance and support you need throughout your pregnancy.
      </p>

      <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3" noValidate>
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-100"
          />
        </div>
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
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-100"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-pregnancy-stage`} className="sr-only">
            Pregnancy Stage
          </label>
          <select
            id={`${idPrefix}-pregnancy-stage`}
            name="pregnancyStage"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[#1B2936] transition-colors focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-100"
          >
            <option value="">Select Pregnancy Stage</option>
            <option>Planning to Conceive</option>
            <option>First Trimester (0-12 weeks)</option>
            <option>Second Trimester (13-26 weeks)</option>
            <option>Third Trimester (27-40 weeks)</option>
            <option>Postnatal Care</option>
          </select>
        </div>
        <div>
          <label htmlFor={`${idPrefix}-appointment-date`} className="sr-only">
            Preferred Appointment Date
          </label>
          <input
            id={`${idPrefix}-appointment-date`}
            name="appointmentDate"
            type="date"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[#1B2936] transition-colors focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-100"
          />
        </div>

        {state.error && (
          <p role="alert" className="text-sm font-medium text-red-500">
            {state.error}
          </p>
        )}

        <SubmitButton pending={pending} />

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
          <Lock className="h-3.5 w-3.5" />
          📞 Call us at{" "}
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-[#1B2936] hover:underline">
            {CLINIC_PHONE_DISPLAY}
          </a>
        </p>
      </form>
    </div>
  );
}