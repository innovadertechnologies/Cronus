import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { EMERGENCY_TEL_HREF } from "@/app/homepage/data";

// Compact page header with breadcrumb, intro copy, and the 24x7 emergency line.
export function ContactPageHeader() {
  return (
    <section aria-labelledby="contact-title" className="border-b border-[#0B3446]/10 bg-[#F6F3EE]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-[#5B6B73]">
            <li>
              <Link href="/homepage" className="transition-colors hover:text-[#0B3446]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-[#0B3446]">
              Contact us
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16">
          <div className="max-w-2xl">
            <h1
              id="contact-title"
              className="text-[2rem] font-semibold leading-tight text-[#0B3446] sm:text-5xl sm:tracking-[-0.02em]"
            >
              Contact us
            </h1>
            <p className="mt-4 text-[17px] leading-relaxed text-[#46575F]">
              Call, WhatsApp or send us a message. Our team at Chhatarpur, South Delhi, will help you book a
              consultation or answer your questions.
            </p>
          </div>

          {/* The 24x7 line, marked with the site's emergency red dot */}
          <a
            id="contact-emergency-btn"
            href={EMERGENCY_TEL_HREF}
            className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-[#0B3446]/10 transition-colors hover:ring-[#D9443F]/40 sm:p-6"
          >
            <span className="h-3 w-3 shrink-0 rounded-full bg-[#D9443F]" aria-hidden="true" />
            <span>
              <span className="block text-sm text-[#5B6B73]">Emergency, open 24x7</span>
              <span className="mt-0.5 block text-2xl font-semibold tabular-nums text-[#0B3446] transition-colors group-hover:text-[#B8322D]">
                {CLINIC_PHONE_DISPLAY}
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
