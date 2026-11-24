import Image from "next/image";
import { Phone } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { GOOGLE_RATING, TEL_HREF } from "../data";
import { AppointmentForm } from "./appointment-form";

// One hero section: horizontal banner with the content on it → centred form.
export function Hero() {
  return (
    <section id="hero" aria-labelledby="homepage-title" className="relative bg-[#F6F3EE]">
      {/* Banner: image + content. The content sets the height, so nothing shifts while the image loads. */}
      <div className="relative isolate overflow-hidden bg-[#0B3446]">
        <Image
          src="/docimage.png"
          alt="Cronus surgeon reviewing a chest scan on a monitor in a modern operating theatre"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[70%_center] lg:object-[center_35%]"
        />
        {/* Readability scrim in the navy of the page: dense behind the text, clear over the scan monitor */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B3446]/95 via-[#0B3446]/80 to-[#0B3446]/40 lg:via-[#0B3446]/70 lg:to-[#0B3446]/0" />

        <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-8 sm:pb-36 sm:pt-16 lg:pb-40 lg:pt-24">
          <div className="max-w-2xl text-white">
            {/* Signature: a steady red dot wherever 24x7 emergency is mentioned */}
            <p className="flex items-center gap-2 text-sm font-medium text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#FF6B66]" aria-hidden="true" />
              24x7 Emergency · Chhatarpur, South Delhi
            </p>

            <h1
              id="homepage-title"
              className="mt-4 text-[2.25rem] font-semibold leading-[1.08] sm:text-5xl sm:tracking-[-0.02em] lg:text-[3.5rem] lg:tracking-[-0.03em]"
            >
              Multispeciality care for South Delhi families, close to home
            </h1>

            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80 sm:text-lg">
              Specialists in 40+ departments, a 24x7 emergency department, ICU, in-house diagnostics and a
              round-the-clock pharmacy on 100 Feet Road, Chhatarpur.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#appointment"
                className="inline-flex h-12 items-center rounded-lg bg-[#0E7C86] px-6 font-semibold text-white transition-colors hover:bg-[#0B6870]"
              >
                Book appointment
              </a>
              <a
                id="homepage-hero-call-btn"
                href={TEL_HREF}
                className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/30 px-6 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                Call {CLINIC_PHONE_DISPLAY}
              </a>
            </div>

            <p className="mt-8 text-sm text-white/65">
              Rated {GOOGLE_RATING.score} on Google from {GOOGLE_RATING.count} reviews · Cashless insurance available*
            </p>
          </div>
        </div>
      </div>

      {/* Centred appointment form, lifted over the bottom of the banner */}
      <div
        id="appointment"
        className="relative mx-auto -mt-16 max-w-6xl scroll-mt-28 px-4 pb-16 sm:-mt-24 sm:px-8 sm:pb-24"
      >
        <AppointmentForm
          idPrefix="homepage-hero-form"
          title="Book an appointment"
          subtitle="Tell us what you need and our team will call you back to confirm a time with the right specialist."
          variant="split"
          listenForBooking
        />
        <p className="mt-4 text-center text-xs text-[#5B6B73]">
          *Cashless facility subject to insurance policy, hospital network and approval.
        </p>
      </div>
    </section>
  );
}
