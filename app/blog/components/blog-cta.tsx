import { CalendarCheck } from "lucide-react";
import { APPOINTMENT_HREF } from "../data";

// Appointment prompt before the footer, stacked and centred. Books through the
// appointment form on /homepage; call and WhatsApp live in the footer band
// right below.
export function BlogCta() {
  return (
    <section aria-labelledby="blog-cta-title" className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center rounded-2xl bg-[#F6F3EE] px-6 py-10 text-center ring-1 ring-[#0B3446]/5 sm:px-10 sm:py-14">
          <p className="text-sm font-medium text-[#0B6A73]">BOOK A CONSULTATION</p>
          <h2
            id="blog-cta-title"
            className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight text-[#0B3446] sm:text-4xl sm:tracking-[-0.02em]"
          >
            Your Health Deserves Expert Care
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-[#46575F] sm:text-[17px]">
            Read something that sounds familiar? Book a visit with the right specialist at Cronus.
          </p>
          <a
            id="blog-cta-appointment-btn"
            href={APPOINTMENT_HREF}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0E7C86] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B6870]"
          >
            <CalendarCheck className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
