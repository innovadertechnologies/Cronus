"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Loader2, Lock, Phone } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { useLeadForm } from "@/app/lib/use-lead-form";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { submitHomeLead, type HomeLeadFormState } from "@/app/home/actions";
import { BOOKING_EVENT, type BookingRequest } from "@/app/home/components/booking";
import { FORM_DEPARTMENTS, TEL_HREF, WHATSAPP_HREF } from "../data";

const initialState: HomeLeadFormState = { success: false };

const inputClass =
  "h-12 w-full rounded-lg border border-[#0B3446]/15 bg-white px-4 text-[15px] text-[#1B2936] placeholder:text-[#8A979D] transition-[border-color,box-shadow] duration-150 hover:border-[#0B3446]/30 focus:border-[#0E7C86] focus:outline-none focus:ring-4 focus:ring-[#0E7C86]/15";
const labelClass = "mb-2 block text-sm font-medium text-[#0B3446]";

const steps = [
  "Share your name, number and concern",
  "Our team calls you back to confirm a time",
  "Visit us on 100 Feet Road, Chhatarpur",
];

type Props = {
  // Prefix for input ids so two forms can live on one page.
  idPrefix: string;
  title: string;
  subtitle: string;
  // "split" adds an info panel beside the form (hero); "plain" is the form alone.
  variant?: "split" | "plain";
  // Only one form reacts to "Book appointment" clicks (doctor cards etc.).
  listenForBooking?: boolean;
};

// Appointment enquiry card. Submits through the existing home page server
// action, so leads land in the same sheet and go to the same thank-you page.
export function AppointmentForm({ idPrefix, title, subtitle, variant = "plain", listenForBooking = false }: Props) {
  const { state, onSubmit, pending } = useLeadForm(submitHomeLead, initialState);
  const [department, setDepartment] = useState("");
  const [highlight, setHighlight] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!listenForBooking) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    function onBook(event: Event) {
      const request = (event as CustomEvent<BookingRequest>).detail;
      if (request.department && FORM_DEPARTMENTS.includes(request.department)) setDepartment(request.department);
      setHighlight(true);
      timers.push(setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500));
      timers.push(setTimeout(() => setHighlight(false), 1600));
    }
    window.addEventListener(BOOKING_EVENT, onBook);
    return () => {
      window.removeEventListener(BOOKING_EVENT, onBook);
      timers.forEach(clearTimeout);
    };
  }, [listenForBooking]);

  const id = (field: string) => `${idPrefix}-${field}`;
  const split = variant === "split";

  const heading = (
    <div>
      <h2 id={id("title")} className="text-2xl font-semibold text-[#0B3446] sm:text-[1.75rem]">
        {title}
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#5B6B73]">{subtitle}</p>
    </div>
  );

  const form = (
    <form
      onSubmit={pending ? undefined : onSubmit}
      noValidate
      aria-labelledby={id("title")}
      className="grid gap-5 sm:grid-cols-2"
    >
      <div>
        <label htmlFor={id("name")} className={labelClass}>
          Full name
        </label>
        <input
          ref={nameRef}
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor={id("phone")} className={labelClass}>
          Phone number
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[15px] text-[#5B6B73]">
            +91
          </span>
          <input
            id={id("phone")}
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
      <div className="sm:col-span-2">
        <label htmlFor={id("department")} className={labelClass}>
          Department
        </label>
        <div className="relative">
          <select
            id={id("department")}
            name="speciality"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={`${inputClass} cursor-pointer appearance-none pr-12 ${department ? "" : "text-[#5B6B73]"}`}
          >
            <option value="">Not sure / General enquiry</option>
            {FORM_DEPARTMENTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5B6B73]"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={id("message")} className={labelClass}>
          Message <span className="font-normal text-[#5B6B73]">(optional)</span>
        </label>
        <textarea
          id={id("message")}
          name="notes"
          rows={3}
          placeholder="Your concern, preferred doctor or a time that works for you"
          className={`${inputClass} h-auto resize-none py-3`}
        />
      </div>

      {state.error && (
        <p role="alert" className="rounded-lg bg-[#D9443F]/10 px-4 py-3 text-sm font-medium text-[#B8322D] sm:col-span-2">
          {state.error}
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          id={id("submit-btn")}
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0E7C86] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0B6870] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending && <Loader2 className="h-5 w-5 animate-spin" />}
          {pending ? "Sending" : "Book appointment"}
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-[13px] text-[#5B6B73]">
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          Your details are only used to arrange your visit
        </p>
      </div>
    </form>
  );

  const cardClass = `overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(11,52,70,0.05),0_16px_40px_rgba(11,52,70,0.10)] ring-1 transition-[box-shadow] duration-300 ${
    highlight ? "ring-2 ring-[#0E7C86]" : "ring-[#0B3446]/10"
  }`;

  if (!split) {
    return (
      <div className={cardClass}>
        <div className="p-6 sm:p-8">
          {heading}
          <div className="mt-6 border-t border-[#0B3446]/10 pt-6">{form}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${cardClass} grid lg:grid-cols-[0.8fr_1.2fr]`}>
      {/* Info panel */}
      <aside className="flex flex-col bg-[#F6F3EE] p-6 sm:p-8 lg:p-10">
        {heading}

        <ol className="mt-8 hidden space-y-5 sm:block">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold tabular-nums text-[#0E7C86] ring-1 ring-[#0B3446]/10">
                {i + 1}
              </span>
              <span className="pt-1 text-[15px] leading-snug text-[#1B2936]">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-8 border-t border-[#0B3446]/10 pt-6 lg:mt-auto">
          <p className="text-sm font-medium text-[#5B6B73]">Prefer to talk to us?</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a
              href={TEL_HREF}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white text-[15px] font-semibold text-[#0B3446] ring-1 ring-[#0B3446]/15 transition-colors hover:ring-[#0B3446]/40"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              Call
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white text-[15px] font-semibold text-[#0B3446] ring-1 ring-[#0B3446]/15 transition-colors hover:ring-[#0B3446]/40"
            >
              <WhatsappIcon className="h-4 w-4 text-[#1FA855]" />
              WhatsApp
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-[#46575F]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#D9443F]" aria-hidden="true" />
            Emergency 24x7:{" "}
            <a href={TEL_HREF} className="font-semibold text-[#0B3446] hover:text-[#0E7C86]">
              {CLINIC_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </aside>

      {/* Form */}
      <div className="p-6 sm:p-8 lg:p-10">{form}</div>
    </div>
  );
}
