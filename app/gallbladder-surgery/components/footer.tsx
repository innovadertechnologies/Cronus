import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import {
  CLINIC_EMAIL,
  CLINIC_LOCATION,
  CLINIC_NAME,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  SOCIAL_LINKS,
} from "@/app/lib/site-config";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/app/components/social-icons";
import { FooterMap } from "@/app/components/footer-map";

const links = [
  { label: "About", href: "#why-choose" },
  { label: "Gallbladder Surgery", href: "#surgery" },
  { label: "Conditions", href: "#conditions" },
  { label: "Contact", href: "#final-lead-form" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: SOCIAL_LINKS.facebook },
  { label: "Instagram", icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { label: "YouTube", icon: YoutubeIcon, href: SOCIAL_LINKS.youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-12 sm:pb-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 sm:grid-cols-2 lg:grid-cols-4">
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
          <h3 className="text-sm font-bold text-[#0B3446]">Find Us</h3>
          <FooterMap className="mt-4 h-40 w-full" />
        </div>

        <div className="lg:pl-6">
          <h3 className="text-sm font-bold text-[#0B3446]">Get in Touch</h3>
          <div className="mt-4 flex flex-col gap-2.5 text-sm text-[#3F5A66]">
            <a
              href={`tel:${CLINIC_PHONE_TEL}`}
              className="inline-flex items-center gap-2 font-semibold text-[#1B2936] hover:text-[#0B3446]"
            >
              <Phone className="h-4 w-4 text-[#129EA8]" />
              {CLINIC_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${CLINIC_EMAIL}`} className="inline-flex items-center gap-2 hover:text-[#0B3446]">
              <Mail className="h-4 w-4 text-[#129EA8]" />
              {CLINIC_EMAIL}
            </a>
          </div>

          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
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
