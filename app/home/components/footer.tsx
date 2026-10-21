import Image from "next/image";
import Link from "next/link";
import {
  CLINIC_ADDRESS,
  CLINIC_NAME,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_TEL,
  SOCIAL_LINKS,
} from "@/app/lib/site-config";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/app/components/social-icons";
import { FooterMap } from "@/app/components/footer-map";
import { HOSPITAL_EMAIL } from "../data";

const explore = [
  { label: "About us", href: "#about" },
  { label: "Specialities", href: "#specialities" },
  { label: "Facilities", href: "#facilities" },
  { label: "Our doctors", href: "#doctors" },
  { label: "Book an appointment", href: "#appointment" },
];

const treatments = [
  { label: "Knee & hip replacement", href: "/knee-and-hip" },
  { label: "Spine & back pain", href: "/spine" },
  { label: "Hernia treatment", href: "/hernia" },
  { label: "Gallbladder surgery", href: "/gallbladder-surgery" },
  { label: "Maternity care", href: "/maternity" },
];

const socials = [
  { label: "Facebook", icon: FacebookIcon, href: SOCIAL_LINKS.facebook },
  { label: "Instagram", icon: InstagramIcon, href: SOCIAL_LINKS.instagram },
  { label: "YouTube", icon: YoutubeIcon, href: SOCIAL_LINKS.youtube },
];

const headingClass = "text-sm font-semibold text-[#0B3446]";
const linkClass = "text-[15px] text-[#46575F] transition-colors hover:text-[#0B3446]";

export function Footer() {
  return (
    <footer className="bg-[#F6F3EE]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_0.8fr_1fr_1.3fr] lg:gap-10">
        <div>
          <Image src="/logo.png" alt={CLINIC_NAME} width={1353} height={742} sizes="130px" className="h-14 w-auto" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-[#46575F]">
            A multispeciality hospital caring for families in Chhatarpur and South Delhi for more than two decades.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0B3446]/20 text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Explore">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {explore.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Treatments">
          <h2 className={headingClass}>Treatments</h2>
          <ul className="mt-4 space-y-2.5">
            {treatments.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClass}>Visit us</h2>
          <address className="mt-4 text-[15px] not-italic leading-relaxed text-[#46575F]">{CLINIC_ADDRESS}</address>
          <dl className="mt-4 space-y-1 text-[15px]">
            <div className="flex gap-2">
              <dt className="text-[#5B6B73]">Emergency:</dt>
              <dd>
                <a href={`tel:${CLINIC_PHONE_TEL}`} className="font-semibold text-[#0B3446] hover:text-[#D9443F]">
                  {CLINIC_PHONE_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-[#5B6B73]">Email:</dt>
              <dd>
                <a href={`mailto:${HOSPITAL_EMAIL}`} className="font-semibold text-[#0B3446] hover:text-[#0E7C86]">
                  {HOSPITAL_EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <FooterMap className="mt-5 h-36 w-full" />
        </div>
      </div>

      <div className="border-t border-[#0B3446]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-[#5B6B73] sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <p>Open 24 hours for emergencies.</p>
        </div>
      </div>
    </footer>
  );
}
