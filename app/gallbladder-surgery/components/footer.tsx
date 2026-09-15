import Image from "next/image";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { BookTrigger } from "@/app/gallbladder-surgery/components/booking-modal";
import {
  CLINIC_EMAIL,
  CLINIC_LOCATION,
  CLINIC_NAME,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
} from "@/app/lib/site-config";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/app/components/social-icons";

const links = [
  { label: "About", href: "#why-choose" },
  { label: "Gallbladder Surgery", href: "#surgery" },
  { label: "Conditions", href: "#conditions" },
  { label: "Contact", href: "#lead-form" },
  { label: "Privacy Policy", href: "#" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-12 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 sm:grid-cols-3">
        <div>
          <span className="inline-block rounded-xl border border-slate-200 bg-white p-2.5">
            <Image
              src="/logo.png"
              alt={CLINIC_NAME}
              width={1353}
              height={742}
              className="h-11 w-auto"
            />
          </span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#64748B]">
            Expert surgical evaluation and minimally invasive laparoscopic
            gallbladder surgery in {CLINIC_LOCATION}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#0B3446]">Quick Links</h3>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#3F5A66] transition-colors hover:text-[#0B3446]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#0B3446]">Get in Touch</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#3F5A66]">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center gap-2 font-semibold text-[#1B2936] hover:text-[#0B3446]"
            >
              <Phone className="h-4 w-4" />
              {CLINIC_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-[#0B3446]">
              {CLINIC_EMAIL}
            </a>
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]/40"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <BookTrigger className="flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-105">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </BookTrigger>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B3446] text-white transition-colors hover:bg-[#129EA8]"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-5 pt-6 sm:px-8">
        <p className="text-xs leading-relaxed text-[#94A3B8]">
          This page provides general information and is not a substitute for
          professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
}
