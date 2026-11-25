import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { LazyMap } from "./lazy-map";
import { HOSPITAL_EMAIL } from "@/app/home/data";
import { CLINIC_ADDRESS, CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { DIRECTIONS_URL, TEL_HREF, WHATSAPP_HREF } from "../data";
import { SectionHeading } from "./section-heading";

const iconClass = "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E3F6F7] text-[#0B6A73]";

export function Location() {
  return (
    <section id="location" aria-labelledby="homepage-location-title" className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-location-title"
          eyebrow="Visit us"
          title="Location & contact details"
          description="Located on 100 Feet Road in Chhatarpur, easily reachable from across South Delhi and Delhi-NCR."
        />

        {/* One card: a small square map on the left of the details (stacked on phones) */}
        <div className="mt-10 grid gap-6 rounded-2xl bg-white p-4 ring-1 ring-[#0B3446]/10 sm:grid-cols-[200px_1fr] sm:items-start sm:p-6 lg:grid-cols-[240px_1fr] lg:gap-10 lg:p-8">
          <LazyMap className="aspect-[16/9] w-full rounded-xl! sm:aspect-square" />

          <div className="flex min-w-0 flex-col">
            <address className="grid gap-5 not-italic lg:grid-cols-2 lg:gap-x-8">
              <div className="flex gap-4">
                <span className={iconClass}>
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[#5B6B73]">Address</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-[#1B2936]">{CLINIC_ADDRESS}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className={iconClass}>
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[#5B6B73]">Phone (24x7)</h3>
                  <a href={TEL_HREF} className="mt-1 block text-lg font-semibold text-[#0B3446] hover:text-[#0B6A73]">
                    {CLINIC_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className={iconClass}>
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium text-[#5B6B73]">Email</h3>
                  <a
                    href={`mailto:${HOSPITAL_EMAIL}`}
                    className="mt-1 block break-all text-[15px] font-semibold text-[#0B3446] hover:text-[#0B6A73]"
                  >
                    {HOSPITAL_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className={iconClass}>
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[#5B6B73]">Hours</h3>
                  <p className="mt-1 text-[15px] text-[#1B2936]">Emergency &amp; pharmacy open 24 hours, 7 days a week</p>
                </div>
              </div>
            </address>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                id="homepage-location-directions-btn"
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0E7C86] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#0B6870]"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
              <a
                id="homepage-location-whatsapp-btn"
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0B3446]/20 px-5 py-3 font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
              >
                <WhatsappIcon className="h-4 w-4 text-[#1FA855]" />
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
