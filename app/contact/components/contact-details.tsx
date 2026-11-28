import { ArrowRight, Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_ADDRESS, CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { HOSPITAL_EMAIL } from "@/app/home/data";
import { DIRECTIONS_URL, EMERGENCY_TEL_HREF, TEL_HREF, WHATSAPP_HREF } from "@/app/homepage/data";
import { LazyMap } from "@/app/homepage/components/lazy-map";

const row = "flex min-h-11 items-start gap-3 py-2.5 text-[15px] leading-6 text-[#2A3A44]";
const link =
  "rounded-sm font-medium text-[#0B3446] underline-offset-4 transition-colors hover:text-[#0B6A73] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86]";
const icon = "mt-[3px] h-[18px] w-[18px] shrink-0 text-[#0B6A73]";

export function ContactDetails() {
  return (
    <div className="flex min-w-0 flex-col">
      <h2 className="text-2xl font-semibold text-[#0B3446]">Prefer to call or write?</h2>
      <address className="mt-4 not-italic">
        <ul>
          <li className={row}>
            <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center" aria-hidden="true">
              <Siren className={`${icon} text-red-500`} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span>
              Emergency, open 24x7:{" "}
              <a id="contact-emergency-btn" href={EMERGENCY_TEL_HREF} className={`${link} tabular-nums`}>
                {CLINIC_PHONE_DISPLAY}
              </a>
            </span>
          </li>
          <li className={row}>
            <Phone className={icon} strokeWidth={1.75} aria-hidden="true" />
            <span>
              Appointments:{" "}
              <a id="contact-call-btn" href={TEL_HREF} className={`${link} tabular-nums`}>
                {CLINIC_PHONE_DISPLAY}
              </a>
            </span>
          </li>
          <li className={row}>
            <WhatsappIcon className={icon} />
            <a id="contact-whatsapp-btn" href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={link}>
              Chat with us on WhatsApp
            </a>
          </li>
          <li className={row}>
            <Mail className={icon} strokeWidth={1.75} aria-hidden="true" />
            <a href={`mailto:${HOSPITAL_EMAIL}`} className={`${link} break-all`}>
              {HOSPITAL_EMAIL}
            </a>
          </li>
          <li className={row}>
            <Clock className={icon} strokeWidth={1.75} aria-hidden="true" />
            Emergency &amp; pharmacy open 24 hours, 7 days a week
          </li>
        </ul>
      </address>

      <div className="relative mt-6 min-h-[420px] flex-1 overflow-hidden rounded-2xl bg-[#E9F1F5] ring-1 ring-[#0B3446]/10">
        <LazyMap className="absolute inset-0 h-full w-full rounded-none! border-0! grayscale-[0.4]" />
        <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(11,52,70,0.12)] sm:inset-x-4 sm:bottom-4 sm:p-6">
          <h3 className="text-lg font-semibold text-[#0B3446]">Visit the hospital</h3>
          <p className="mt-2 flex gap-2 text-[15px] leading-relaxed text-[#2A3A44]">
            <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#0B6A73]" strokeWidth={1.75} aria-hidden="true" />
            {CLINIC_ADDRESS}
          </p>
          <a
            id="contact-directions-btn"
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex h-11 items-center gap-2 rounded-lg border border-[#0B3446]/20 bg-white px-4 text-[15px] font-semibold text-[#0B3446] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[#0B3446] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86] active:translate-y-0 active:scale-[0.98]"
          >
            Get directions
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
