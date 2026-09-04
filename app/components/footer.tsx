import { MapPin, Phone, Mail } from "lucide-react";
import {
  CLINIC_EMAIL,
  CLINIC_LOCATION,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
} from "@/app/lib/site-config";
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/app/components/social-icons";

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: "#" },
  { label: "Instagram", icon: InstagramIcon, href: "#" },
  { label: "YouTube", icon: YoutubeIcon, href: "#" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pb-24 pt-6 sm:pb-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between sm:px-8">
        <div className="flex flex-col items-center gap-3 text-sm text-[#3F5A66] sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#129EA8]" />
            {CLINIC_LOCATION}
          </span>
          <a href={`tel:${CLINIC_PHONE_TEL}`} className="flex items-center gap-2 hover:text-[#0B3446]">
            <Phone className="h-4 w-4 text-[#129EA8]" />
            {CLINIC_PHONE_DISPLAY}
          </a>
          <a href={`mailto:${CLINIC_EMAIL}`} className="flex items-center gap-2 hover:text-[#0B3446]">
            <Mail className="h-4 w-4 text-[#129EA8]" />
            {CLINIC_EMAIL}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[#3F5A66]">Follow Us</span>
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
    </footer>
  );
}
