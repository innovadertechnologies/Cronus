"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Reveal } from "@/app/components/reveal";
import { submitMaternityLead, type MaternityLeadFormState } from "@/app/maternity/actions";

const initialState: MaternityLeadFormState = { success: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-[#F52D8A] py-3.5 text-base font-semibold text-white transition-all hover:brightness-110 shadow-[0_14px_28px_-10px_rgba(245,45,138,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending..." : "BOOK MY APPOINTMENT →"}
    </button>
  );
}

export function MaternityAppointmentCTA() {
  const [state, formAction] = useActionState(submitMaternityLead, initialState);

  return (
    <section id="book-appointment" className="relative overflow-hidden bg-[#EAF6F8]">
      <div className="relative">
        {/* Background Image */}
        <Image
          src="/maternity4.png"
          alt=""
          aria-hidden
          fill
          priority
          className="absolute inset-0 object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6F8] via-[#EAF6F8]/85 to-[#EAF6F8]/10 lg:via-[#EAF6F8]/60" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-[#1B2936]/70">
                Expert Care for You & Your Baby
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B3446] sm:text-5xl lg:text-[3.15rem]">
                Ready to Begin Your Maternity Journey?
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-4 text-lg text-[#1B2936]/80">
                Expert pregnancy care designed around you and your baby. Book your consultation today.
              </p>
            </Reveal>

          </div>

          <Reveal delay={0.2} className="relative">
            <div className="mx-auto max-w-lg lg:ml-auto lg:mr-0">
              {/* Appointment Form Card */}
              <div className="rounded-2xl bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]">
                <h3 className="mb-6 text-xl font-bold text-[#0B3446]">Book Your Appointment</h3>
                
                <form action={formAction} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <select
                        name="pregnancyStage"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20 bg-white"
                        required
                      >
                        <option value="">Pregnancy Stage</option>
                        <option>First Trimester</option>
                        <option>Second Trimester</option>
                        <option>Third Trimester</option>
                        <option>Trying to Conceive</option>
                        <option>Postnatal Care</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="date"
                        name="appointmentDate"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-[#129EA8] focus:outline-none focus:ring-2 focus:ring-[#129EA8]/20"
                        required
                      />
                    </div>
                  </div>

                  {state.error && (
                    <p role="alert" className="text-sm font-medium text-red-500">
                      {state.error}
                    </p>
                  )}

                  <SubmitButton />
                </form>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span>Call us for maternity care & appointment assistance</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}