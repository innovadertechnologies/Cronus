import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "@/app/components/social-icons";
import { HOSPITAL_EMAIL } from "@/app/home/data";
import { CLINIC_ADDRESS, CLINIC_NAME, CLINIC_PHONE_DISPLAY, SOCIAL_LINKS } from "@/app/lib/site-config";
import { DEPARTMENT_CARDS, DIRECTIONS_URL, EMERGENCY_TEL_HREF, TEL_HREF, WHATSAPP_HREF } from "@/app/homepage/data";
import { APPOINTMENT_HREF, BLOG_NAV_LINKS } from "../data";

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: SOCIAL_LINKS.facebook },
  { label: "Instagram", icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { label: "YouTube", icon: YoutubeIcon, href: SOCIAL_LINKS.youtube },
];

const treatments = DEPARTMENT_CARDS.filter((d) => d.href.startsWith("/"));

const headingClass = "text-[15px] font-semibold text-white";
const linkClass = "text-[15px] text-white/70 transition-colors hover:text-white";

export function BlogFooter() {
  return (
    <footer className="bg-[#082736] text-white">
      <div className="bg-[#0E7C86]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <Siren className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xl font-semibold sm:text-2xl">Medical emergency? We&apos;re open 24x7.</p>
              <p className="text-[15px] text-white">Call us right away for emergency care or an ambulance.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:flex">
            <a
              id="blog-footer-emergency-btn"
              href={EMERGENCY_TEL_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-[#0B3446] transition-colors hover:bg-[#E3F6F7]"
            >
              <Phone className="h-4 w-4" />
              Call now
            </a>
            <a
              id="blog-footer-whatsapp-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_1fr_1.3fr] lg:gap-12">
        <div>
          <span className="inline-block rounded-xl bg-white p-2.5">
            <Image src="/logo.png" alt={CLINIC_NAME} width={1353} height={742} sizes="120px" className="h-11 w-auto" />
          </span>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
            A multispeciality hospital caring for families in Chhatarpur and South Delhi for more than two decades.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#0E7C86]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h2 className={headingClass}>Quick links</h2>
          <ul className="mt-5 space-y-3">
            {BLOG_NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={APPOINTMENT_HREF} className={linkClass}>
                Book appointment
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Treatments">
          <h2 className={headingClass}>Treatments</h2>
          <ul className="mt-5 space-y-3">
            {treatments.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className={`${linkClass} group inline-flex items-center gap-1`}>
                  {t.name}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Contact us</h2>
          <address className="mt-5 space-y-4 text-[15px] not-italic text-white/70">
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8FD3D8]" />
              <span className="leading-relaxed">{CLINIC_ADDRESS}</span>
            </a>
            <a href={TEL_HREF} className="flex items-center gap-3 font-semibold text-white hover:text-[#8FD3D8]">
              <Phone className="h-4 w-4 shrink-0 text-[#8FD3D8]" />
              {CLINIC_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${HOSPITAL_EMAIL}`} className="flex items-center gap-3 break-all hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-[#8FD3D8]" />
              {HOSPITAL_EMAIL}
            </a>
            <p className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-[#8FD3D8]" />
              Emergency &amp; pharmacy: 24 hours, 7 days
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-white/55 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <p>Chhatarpur, New Delhi · Delhi-NCR</p>
        </div>
      </div>
    </footer>
  );
}
