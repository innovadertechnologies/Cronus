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
        {/* Background Image */}
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

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <Reveal>
              <p className="text-sm font-semibold tracking-wide text-[#1B2936]/70">
                Complete Maternity Care, Every Step of the Way
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B3446] sm:text-5xl lg:text-[3.15rem]">
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

          <Reveal delay={0.2} className="relative">
            <div className="mx-auto max-w-lg lg:ml-auto lg:mr-0">
              <MaternityForm id="maternity-form" className="relative" />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative border-t border-[#129EA8]/15 bg-[#E3F6F7]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 divide-x divide-[#129EA8]/15 px-5 py-4 sm:py-6 sm:px-8">
          {trustStrip.map(({ icon: Icon, stat, label }) => (
            <div key={label} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-2 sm:px-0 sm:first:pl-0 sm:[&:not(:first-child)]:pl-4">
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