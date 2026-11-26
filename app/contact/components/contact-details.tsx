import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_ADDRESS, CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { HOSPITAL_EMAIL } from "@/app/home/data";
import { DIRECTIONS_URL, TEL_HREF, WHATSAPP_HREF } from "@/app/homepage/data";

const iconBox =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F6F3EE] text-[#0B6A73]";
const rowLabel = "text-sm text-[#5B6B73]";
const rowLink = "text-[15px] font-semibold text-[#0B3446] transition-colors hover:text-[#0B6A73]";

// Direct contact details column: phone, WhatsApp, email, hours, address, and directions CTA.
export function ContactDetails() {
  return (
    <div className="min-w-0">
      <h2 className="text-xl font-semibold text-[#0B3446]">Reach us directly</h2>
      <address className="mt-4 divide-y divide-[#0B3446]/10 not-italic">
        <div className="flex gap-4 py-4">
          <span className={iconBox}>
            <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <p className={rowLabel}>Appointments &amp; enquiries</p>
            <a id="contact-call-btn" href={TEL_HREF} className={`${rowLink} tabular-nums`}>
              {CLINIC_PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="flex gap-4 py-4">
          <span className={iconBox}>
            <WhatsappIcon className="h-[18px] w-[18px]" />
          </span>
          <div>
            <p className={rowLabel}>WhatsApp</p>
            <a
              id="contact-whatsapp-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={rowLink}
            >
              Chat with us
            </a>
          </div>
        </div>
        <div className="flex gap-4 py-4">
          <span className={iconBox}>
            <Mail className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className={rowLabel}>Email</p>
            <a href={`mailto:${HOSPITAL_EMAIL}`} className={`${rowLink} break-all`}>
              {HOSPITAL_EMAIL}
            </a>
          </div>
        </div>
        <div className="flex gap-4 py-4">
          <span className={iconBox}>
            <Clock className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <p className={rowLabel}>Hours</p>
            <p className="text-[15px] text-[#1B2936]">Emergency &amp; pharmacy open 24 hours, 7 days a week</p>
          </div>
        </div>
        <div className="flex gap-4 py-4">
          <span className={iconBox}>
            <MapPin className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <p className={rowLabel}>Address</p>
            <p className="text-[15px] leading-relaxed text-[#1B2936]">{CLINIC_ADDRESS}</p>
          </div>
        </div>
      </address>

      <a
        id="contact-directions-btn"
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[#0B3446]/20 px-5 text-[15px] font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
      >
        <Navigation className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        Get directions
      </a>
    </div>
  );
}
