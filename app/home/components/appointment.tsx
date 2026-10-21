"use client";

import { useEffect, useRef, useState } from "react";
import { useLeadForm } from "@/app/lib/use-lead-form";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { submitHomeLead, type HomeLeadFormState } from "../actions";
import { ANY_DOCTOR, DEPARTMENTS, doctorsFor } from "../data";
import { BOOKING_EVENT, type BookingRequest } from "./booking";
import { SectionLabel } from "./section-label";

const initialState: HomeLeadFormState = { success: false };

const inputClass =
  "w-full rounded-md border border-[#0B3446]/20 bg-white px-3.5 py-3 text-[15px] text-[#1B2936] placeholder:text-[#8A979D] focus:border-[#0E7C86] focus:outline-none focus:ring-2 focus:ring-[#0E7C86]/20";

const labelClass = "mb-1.5 block text-sm font-medium text-[#0B3446]";

const modes = [
  { value: "In-person", label: "Visit the hospital" },
  { value: "Video", label: "Video consultation" },
] as const;

const steps = [
  "Pick a speciality and, if you like, a doctor.",
  "Our team calls you back to confirm a time.",
  "Visit us in Chhatarpur or consult over video.",
];

export function Appointment() {
  const { state, onSubmit, pending } = useLeadForm(submitHomeLead, initialState);
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [doctor, setDoctor] = useState(doctorsFor(DEPARTMENTS[0])[0]?.name ?? ANY_DOCTOR);
  const [mode, setMode] = useState<"In-person" | "Video">("In-person");
  const [highlight, setHighlight] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const doctors = doctorsFor(department);

  useEffect(() => {
    function onBook(event: Event) {
      const request = (event as CustomEvent<BookingRequest>).detail;
      if (request.department) {
        setDepartment(request.department);
        setDoctor(request.doctor ?? doctorsFor(request.department)[0]?.name ?? ANY_DOCTOR);
      }
      if (request.mode) setMode(request.mode);
      setHighlight(true);
      setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 500);
      setTimeout(() => setHighlight(false), 1600);
    }
    window.addEventListener(BOOKING_EVENT, onBook);
    return () => window.removeEventListener(BOOKING_EVENT, onBook);
  }, []);

  function changeDepartment(value: string) {
    setDepartment(value);
    setDoctor(doctorsFor(value)[0]?.name ?? ANY_DOCTOR);
  }

  return (
    <section id="appointment" className="scroll-mt-16 bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionLabel>Book an appointment</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#0B3446] sm:text-[2.6rem]">
            See the right specialist, at a time that suits you.
          </h2>

          <ol className="mt-10 space-y-6">
            {steps.map((step, i) => (
              <li key={step} className="flex gap-5">
                <span className="w-6 shrink-0 text-sm font-semibold tabular-nums text-[#0E7C86]">0{i + 1}</span>
                <span className="text-[17px] leading-relaxed text-[#46575F]">{step}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 border-t border-[#0B3446]/10 pt-6 text-[15px] text-[#5B6B73]">
            Prefer to talk to someone?{" "}
            <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-[#0B3446] underline underline-offset-4">
              Call {CLINIC_PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div
          className={`rounded-lg border bg-[#F6F3EE] p-6 transition-colors duration-500 sm:p-9 ${
            highlight ? "border-[#0E7C86]" : "border-transparent"
          }`}
        >
          <form onSubmit={pending ? undefined : onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <fieldset className="sm:col-span-2">
              <legend className={labelClass}>How would you like to consult?</legend>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {modes.map(({ value, label }) => (
                  <label key={value} className="flex cursor-pointer items-center gap-2.5 text-[15px] text-[#1B2936]">
                    <input
                      type="radio"
                      name="mode"
                      value={value}
                      checked={mode === value}
                      onChange={() => setMode(value)}
                      className="h-4 w-4 accent-[#0E7C86]"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="home-name" className={labelClass}>
                Name
              </label>
              <input
                ref={nameRef}
                id="home-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="home-phone" className={labelClass}>
                Phone
              </label>
              <input
                id="home-phone"
                name="phone"
                type="tel"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="98765 43210"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="home-speciality" className={labelClass}>
                Speciality
              </label>
              <select
                id="home-speciality"
                name="speciality"
                value={department}
                onChange={(e) => changeDepartment(e.target.value)}
                className={inputClass}
              >
                {DEPARTMENTS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="home-doctor" className={labelClass}>
                Doctor
              </label>
              <select
                id="home-doctor"
                name="doctor"
                value={doctor}
                onChange={(e) => setDoctor(e.target.value)}
                className={inputClass}
              >
                {doctors.map((d) => (
                  <option key={d.name}>{d.name}</option>
                ))}
                <option>{ANY_DOCTOR}</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="home-notes" className={labelClass}>
                Notes <span className="font-normal text-[#5B6B73]">(optional)</span>
              </label>
              <textarea
                id="home-notes"
                name="notes"
                rows={3}
                placeholder="Your concern, or a time that works for you"
                className={`${inputClass} resize-none`}
              />
            </div>

            {state.error && (
              <p role="alert" className="text-sm font-medium text-[#D9443F] sm:col-span-2">
                {state.error}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:col-span-2">
              <button
                type="submit"
                disabled={pending}
                className="rounded-md bg-[#0E7C86] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#0B6870] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "Sending..." : "Request appointment"}
              </button>
              <p className="text-sm text-[#5B6B73]">We only use your details to arrange your visit.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
