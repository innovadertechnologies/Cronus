"use client";

import { useState } from "react";
import { ChevronDown, Loader2, Lock } from "lucide-react";
import { useLeadForm } from "@/app/lib/use-lead-form";
import { FORM_DEPARTMENTS } from "@/app/homepage/data";
import { submitContactLead, type ContactFormState } from "../actions";

const initialState: ContactFormState = { success: false };

// Same field styles as the /homepage appointment form.
const inputClass =
  "h-12 w-full rounded-lg border border-[#0B3446]/15 bg-white px-4 text-[15px] text-[#1B2936] placeholder:text-[#8A979D] transition-[border-color,box-shadow] duration-150 hover:border-[#0B3446]/30 focus:border-[#0E7C86] focus:outline-none focus:ring-4 focus:ring-[#0E7C86]/15";
const labelClass = "mb-2 block text-sm font-medium text-[#0B3446]";
const optional = (
  <span className="font-normal text-[#5B6B73]"> (optional)</span>
);

// Enquiry form. Submits through submitContactLead, which redirects to
// /contact/thank-you. useLeadForm keeps what was typed if a field needs fixing.
export function ContactForm() {
  const { state, onSubmit, pending } = useLeadForm(
    submitContactLead,
    initialState,
  );
  const [department, setDepartment] = useState("");

  return (
    <form
      onSubmit={pending ? undefined : onSubmit}
      noValidate
      aria-labelledby="contact-form-title"
      className="grid gap-5"
    >
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Full name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClass}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone number
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[15px] text-[#5B6B73]">
              +91
            </span>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="98765 43210"
              className={`${inputClass} pl-14`}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email{optional}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-department" className={labelClass}>
          Department
        </label>
        <div className="relative">
          <select
            id="contact-department"
            name="department"
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none pr-12 ${department ? "" : "text-[#5B6B73]"}`}
          >
            <option value="">Select department</option>
            {FORM_DEPARTMENTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6B73]"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          How can we help?{optional}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Your question, the doctor you want to see or a good time to call you"
          className={`${inputClass} h-auto resize-none py-3`}
        />
      </div>

      {state.error && (
        <p
          role="alert"
          className="rounded-lg bg-[#D9443F]/10 px-4 py-3 text-sm font-medium text-[#B8322D]"
        >
          {state.error}
        </p>
      )}

      <div className="mt-1 flex flex-col gap-3">
        <button
          id="contact-submit-btn"
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0E7C86] px-8 text-base font-semibold text-white transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#0B6870] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86] active:translate-y-0 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending && (
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          )}
          {pending ? "Sending" : "Send message"}
        </button>
        <p className="flex items-center justify-center gap-1.5 text-[13px] text-[#46575F]">
          <Lock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Your details are only used to reply to you.
        </p>
      </div>
    </form>
  );
}
