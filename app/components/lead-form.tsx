"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Lock } from "lucide-react";
import { submitHerniaLead, type LeadFormState } from "@/app/actions";

const initialState: LeadFormState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(22,163,106,0.55)] transition-all hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "Request a Callback"}
    </button>
  );
}

export function LeadForm({ id, className = "" }: { id?: string; className?: string }) {
  const [state, formAction] = useActionState(submitHerniaLead, initialState);

  return (
    <div
      id={id}
      className={`relative rounded-[28px] border border-[#129EA8]/15 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(11,31,51,0.25)] sm:p-8 ${className}`}
    >
      <h3 className="text-xl font-bold text-[#1B2936]">Need Hernia Treatment?</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
        Get an expert evaluation and understand the right treatment option for you.
      </p>

      <form action={formAction} className="mt-6 flex flex-col gap-3.5" noValidate>
        <div>
          <label htmlFor="lead-name" className="sr-only">
            Name
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
          />
        </div>
        <div>
          <label htmlFor="lead-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="Phone Number"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
          />
        </div>
        <div>
          <label htmlFor="lead-problem" className="sr-only">
            Your Problem
          </label>
          <textarea
            id="lead-problem"
            name="problem"
            rows={3}
            placeholder="Your Problem"
            className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
          />
        </div>

        {state.error && (
          <p role="alert" className="text-sm font-medium text-[#EF5350]">
            {state.error}
          </p>
        )}

        <SubmitButton />

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
          <Lock className="h-3.5 w-3.5" />
          Your information is safe and confidential
        </p>
      </form>
    </div>
  );
}
