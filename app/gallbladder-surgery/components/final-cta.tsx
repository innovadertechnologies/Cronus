import Image from "next/image";
import { Phone, CalendarCheck } from "lucide-react";
import { AppointmentForm } from "@/app/gallbladder-surgery/components/appointment-form";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import { Reveal } from "@/app/components/reveal";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const tags = ["Gallbladder Stones", "Recurring Pain", "Infection", "Inflammation"];

export function FinalCta() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gbhbanner.png"
          alt="Cronus Multispeciality Hospital building exterior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2544] via-[#0F2544]/55 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
            Your Health. Our Priority.
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Need Gallbladder Surgery?
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80">
            Get expert evaluation and surgical care at Cronus Multispeciality
            Hospital, Delhi.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/70">
            {tags.join("  •  ")}
          </p>

          <h3 className="mt-7 text-lg font-bold text-white">
            Book Your Consultation Today
          </h3>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#15803D] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(21,128,61,0.55)] transition-all hover:brightness-105"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <BookTrigger className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#0F2544]">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </BookTrigger>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <AppointmentForm id="final-lead-form" idPrefix="final" variant="compact" />
        </Reveal>
      </div>
    </section>
  );
}
