"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck } from "lucide-react";
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
            <h3 className="text-xl font-bold text-[#1B2936]">Thank You</h3>
            <p className="max-w-xs text-sm text-[#64748B]">
              Thank you. Our team will contact you shortly.
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
