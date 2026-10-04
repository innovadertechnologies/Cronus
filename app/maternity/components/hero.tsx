"use client";

import Image from "next/image";
import { CheckCircle2, Phone, Heart, Baby, ShieldCheck } from "lucide-react";
import { MaternityForm } from "./maternity-form";
import { Reveal } from "@/app/components/reveal";
import { StatCounter } from "@/app/components/stat-counter";
import { CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { useBookingModal } from "./booking-modal-provider";

const checklist = [
  "Complete Pregnancy Care",
  "Experienced Care Team", 
  "Mother & Baby Care",
];

const trustStrip = [
  {
    icon: Heart,
    stat: "2500+",
    label: "Happy Mothers",
  },
  {
    icon: Baby,
    stat: "Safe Normal Deliveries",
    // label: "with Expert Care",
  },
  {
    icon: ShieldCheck,
    stat: "24/7 Support",
    // label: "During Pregnancy",
  },
];

export function Hero() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="hero" className="relative overflow-hidden bg-[#EAF6F8]">
      <div className="relative">
        {/* Desktop: the photo fills the hero behind both the text and the form. */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/maternity1.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6F8] via-[#EAF6F8]/85 to-[#EAF6F8]/10 lg:via-[#EAF6F8]/60" />
        </div>

        <div className="relative mx-auto grid max-w-7xl lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:overflow-visible lg:p-0">
            {/* Mobile/tablet: the photo is the background of the content only, with
                the mother on the right and a light wash on the left so the text
                on top of it stays readable. */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/maternity1.png"
                alt=""
                aria-hidden
                fill
                priority
                sizes="(min-width: 1024px) 1px, 250vw"
                className="object-cover object-[30%_top] sm:object-[45%_top]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6F8]/95 via-[#EAF6F8]/75 via-55% to-[#EAF6F8]/25" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EAF6F8]/80 to-transparent" />
            </div>

            <div className="relative">
              <Reveal>
                <p className="text-sm font-semibold tracking-wide text-[#1B2936]/70">
                  Complete Maternity Care, Every Step of the Way
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="mt-3 max-w-[17rem] text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-[#0B3446] sm:max-w-none sm:text-5xl lg:text-[3.15rem]">
                  Expert pregnancy & maternity care designed around you and your baby.
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <ul className="mt-7 flex flex-col gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] font-semibold text-[#1B2936]">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={openBookingModal}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.55)] transition-all hover:brightness-110"
                  >
                    Book a Consultation
                  </button>
                  <a
                    href={`tel:${CLINIC_PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B3446] bg-white px-7 py-3.5 text-base font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call / WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Mobile/tablet: the form sits in its own deep-teal band below the photo. */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#0B3446] to-[#0E5566] px-5 py-10 sm:px-8 sm:py-14 lg:overflow-visible lg:bg-none lg:p-0">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#129EA8]/35 blur-3xl lg:hidden" />
            <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#129EA8]/25 blur-3xl lg:hidden" />
            <Reveal delay={0.2} className="relative">
              <div className="mx-auto max-w-lg lg:ml-auto lg:mr-0">
                <MaternityForm id="maternity-form" className="relative" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#129EA8]/15 bg-[#E3F6F7]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 divide-x divide-[#129EA8]/15 px-5 py-4 sm:py-6 sm:px-8">
          {trustStrip.map(({ icon: Icon, stat, label }) => (
            <div key={stat} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-2 sm:px-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-4">
              <span className="flex h-8 w-8 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#129EA8] shadow-sm">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.25} />
              </span>
              <span className="flex flex-col text-center sm:text-left">
                <span className="text-sm font-extrabold text-[#0B3446] sm:text-base lg:text-lg">
                  {stat === "2500+" ? <StatCounter value={2500} suffix="+" /> : stat}
                </span>
                <span className="text-xs font-medium text-[#3F5A66] sm:text-xs lg:text-sm">{label}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}