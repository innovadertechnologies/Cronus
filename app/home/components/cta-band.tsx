"use client";

import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { requestBooking } from "./booking";

export function CtaBand() {
  return (
    <section className="bg-[#0E7C86] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">Not sure which doctor to see?</h2>
          <p className="mt-2 text-[17px] text-white/80">Call us and we&apos;ll point you to the right specialist.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => requestBooking({ mode: "In-person" })}
            className="rounded-md bg-white px-5 py-3 font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F1F2]"
          >
            Book an appointment
          </button>
          <button
            type="button"
            onClick={() => requestBooking({ mode: "Video" })}
            className="rounded-md border border-white/40 px-5 py-3 font-semibold transition-colors hover:bg-white/10"
          >
            Video consultation
          </button>
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="rounded-md bg-[#D9443F] px-5 py-3 font-semibold transition-colors hover:bg-[#BF3A35]"
          >
            Emergency: {CLINIC_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
