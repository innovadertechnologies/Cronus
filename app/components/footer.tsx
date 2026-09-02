import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CLINIC_LOCATION, CLINIC_NAME, CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";

const links = [
  { label: "Hernia Treatment", href: "#hero" },
  { label: "Laparoscopic Surgery", href: "#laparoscopy" },
  { label: "Contact", href: "#lead-form" },
  { label: "FAQs", href: "#faq" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#005F70] pb-24 pt-12 sm:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <span className="inline-block rounded-xl bg-white p-2.5">
            <Image
              src="/logo.png"
              alt={CLINIC_NAME}
              width={1353}
              height={742}
              className="h-11 w-auto"
            />
          </span>
          <p className="mt-3 text-sm text-white/50">{CLINIC_LOCATION}</p>
          <a
            href={`tel:${CLINIC_PHONE_TEL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {CLINIC_PHONE_DISPLAY}
          </a>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:flex sm:flex-wrap sm:gap-x-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 sm:px-8">
        <p className="text-xs leading-relaxed text-white/40">
          This page provides general information and is not a substitute for
          professional medical advice, diagnosis or treatment.
        </p>
      </div>
    </footer>
  );
}
