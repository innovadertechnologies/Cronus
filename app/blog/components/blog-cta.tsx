import { CalendarCheck, Phone } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { TEL_HREF } from "@/app/homepage/data";
import { APPOINTMENT_HREF } from "../data";

// Appointment prompt before the footer. Books through the existing
// appointment form on /homepage, or by phone.
export function BlogCta() {
  return (
    <section aria-labelledby="blog-cta-title" className="bg-white pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-[#F6F3EE] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="blog-cta-title"
              className="text-[1.75rem] font-semibold leading-tight text-[#0B3446] sm:text-4xl sm:tracking-[-0.02em]"
            >
              Your health deserves expert care
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[#46575F]">
              Connect with our experienced medical team and take the next step towards better health.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              id="blog-cta-appointment-btn"
              href={APPOINTMENT_HREF}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0E7C86] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B6870]"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an appointment
            </a>
            <a
              id="blog-cta-call-btn"
              href={TEL_HREF}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#0B3446]/20 bg-white px-6 text-[15px] font-semibold tabular-nums text-[#0B3446] transition-colors hover:border-[#0B3446]"
            >
              <Phone className="h-4 w-4" />
              {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
