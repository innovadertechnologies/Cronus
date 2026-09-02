"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
import { submitGallbladderLead, type LeadFormState } from "@/app/actions";

const initialState: LeadFormState = { success: false };

const conditions = [
  "Gallbladder Stones",
  "Recurring Pain",
  "Infection",
  "Inflammation",
  "Not Sure / Other",
];

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#129EA8] px-6 py-3.5 text-base font-semibold text-white shadow-[0_10px_24px_-8px_rgba(18,158,168,0.5)] transition-all hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : label}
    </button>
  );
}

export function AppointmentForm({
  id,
  idPrefix,
  variant = "hero",
  className = "",
}: {
  id?: string;
  idPrefix: string;
  variant?: "hero" | "compact";
  className?: string;
}) {
  const [state, formAction] = useActionState(submitGallbladderLead, initialState);
  const isCompact = variant === "compact";

  return (
    <div
      id={id}
      className={`relative scroll-mt-24 rounded-[28px] border border-[#129EA8]/15 bg-white p-6 shadow-[0_30px_60px_-20px_rgba(0,95,112,0.25)] sm:p-8 ${className}`}
    >
      <AnimatePresence mode="wait">
        {state.success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 py-6 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E3F6F7] text-[#129EA8]">
              <ShieldCheck className="h-7 w-7" strokeWidth={2} />
            </span>
            <h3 className="text-xl font-bold text-[#1B2936]">Request Received</h3>
            <p className="max-w-xs text-sm text-[#64748B]">
              Our team will contact you to confirm your appointment.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-[#1B2936]">
              {isCompact ? "Request an Appointment" : "Book a Consultation"}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
              {isCompact
                ? "Share your details and preferred date."
                : "Get an expert evaluation for your gallbladder condition."}
            </p>

            <form action={formAction} className="mt-6 flex flex-col gap-3.5" noValidate>
              <div>
                <label htmlFor={`${idPrefix}-name`} className="sr-only">
                  {isCompact ? "Full Name" : "Name"}
                </label>
                <input
                  id={`${idPrefix}-name`}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={isCompact ? "Full Name" : "Name"}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
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
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-date`} className="sr-only">
                  Preferred Date
                </label>
                <input
                  id={`${idPrefix}-date`}
                  name="preferredDate"
                  type="date"
                  placeholder="Preferred Date"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
                />
              </div>

              <div>
                <label htmlFor={`${idPrefix}-condition`} className="sr-only">
                  {isCompact ? "Select Condition" : "Message / Condition"}
                </label>
                {isCompact ? (
                  <select
                    id={`${idPrefix}-condition`}
                    name="condition"
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
                  >
                    <option value="" disabled>
                      Select Condition
                    </option>
                    {conditions.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                ) : (
                  <textarea
                    id={`${idPrefix}-condition`}
                    name="condition"
                    rows={3}
                    placeholder="Message / Condition"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-[#1B2936] placeholder:text-slate-400 transition-colors focus:border-[#129EA8] focus:outline-none focus:ring-4 focus:ring-[#129EA8]/15"
                  />
                )}
              </div>

              {state.error && (
                <p role="alert" className="text-sm font-medium text-[#C94B4B]">
                  {state.error}
                </p>
              )}

              <SubmitButton label={isCompact ? "Book Appointment" : "Request Appointment"} />

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-[#64748B]">
                <Lock className="h-3.5 w-3.5" />
                {isCompact
                  ? "Our team will contact you to confirm your appointment."
                  : "Your information is kept confidential."}
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
