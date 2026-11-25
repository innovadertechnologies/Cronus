import { Clock, Siren } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { TEL_HREF, WHATSAPP_HREF } from "../data";
import { AppointmentForm } from "./appointment-form";
import { SectionHeading } from "./section-heading";

export function BottomAppointment() {
  return (
    <section
      id="book-appointment"
      aria-labelledby="homepage-bottom-title"
      className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="homepage-bottom-title"
            eyebrow="We're here to help"
            title="Ready to book your visit?"
            description="Send us your details and our team will get back to you to confirm a time with the right specialist."
          />
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#D9443F]/10 text-[#D9443F]">
                <Siren className="h-5 w-5" />
              </span>
              <span className="text-[15px] text-[#46575F]">
                <span className="block font-semibold text-[#0B3446]">Emergency? Don&apos;t wait.</span>
                Call us 24x7 on{" "}
                <a href={TEL_HREF} className="font-semibold text-[#0B3446] underline underline-offset-4">
                  {CLINIC_PHONE_DISPLAY}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#1FA855]/10 text-[#1FA855]">
                <WhatsappIcon className="h-5 w-5" />
              </span>
              <span className="text-[15px] text-[#46575F]">
                <span className="block font-semibold text-[#0B3446]">Prefer to chat?</span>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0B3446] underline underline-offset-4"
                >
                  Message us on WhatsApp
                </a>
              </span>
            </li>
            <li className="flex items-center gap-4 rounded-2xl bg-white p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E3F6F7] text-[#0E7C86]">
                <Clock className="h-5 w-5" />
              </span>
              <span className="text-[15px] text-[#46575F]">
                <span className="block font-semibold text-[#0B3446]">Open round the clock</span>
                Emergency department and pharmacy, 7 days a week.
              </span>
            </li>
          </ul>
        </div>

        <AppointmentForm
          idPrefix="homepage-bottom-form"
          title="Request a callback"
          subtitle="We'll call you to confirm your appointment."
        />
      </div>
    </section>
  );
}
