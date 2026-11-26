import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, Phone } from "lucide-react";
import { CLINIC_NAME, CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { EMERGENCY_TEL_HREF } from "@/app/homepage/data";
import { BlogHeader } from "@/app/blog/components/blog-header";
import { BlogFooter } from "@/app/blog/components/blog-footer";

// Only reached after sending the contact form, so it stays out of search
// results and the sitemap. It is not blocked in robots.txt, so Google can
// still read the noindex.
export const metadata: Metadata = {
  title: `Message received | ${CLINIC_NAME}`,
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <div>
      <BlogHeader />
      <main className="bg-[#F6F3EE] px-4 py-16 sm:px-8 sm:py-24">
        <section
          aria-labelledby="contact-thanks-title"
          className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center shadow-[0_1px_2px_rgba(11,52,70,0.05),0_16px_40px_rgba(11,52,70,0.10)] ring-1 ring-[#0B3446]/10 sm:p-12"
        >
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E3F6F7] text-[#0B6A73]">
            <Check className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
          </span>
          <h1
            id="contact-thanks-title"
            className="mt-6 text-balance text-[1.75rem] font-semibold leading-tight text-[#0B3446] sm:text-4xl sm:tracking-[-0.02em]"
          >
            Thank you, we have your message
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#46575F]">
            Our team will call you back shortly on the number you shared.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              id="contact-thanks-home-btn"
              href="/homepage"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#0E7C86] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B6870]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to home
            </Link>
            <Link
              id="contact-thanks-blog-btn"
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-[#0B3446]/20 bg-white px-6 text-[15px] font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
            >
              Read our health blog
            </Link>
          </div>

          <p className="mt-8 flex items-start justify-center gap-2 border-t border-[#0B3446]/10 pt-6 text-sm leading-relaxed text-[#5B6B73]">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#D9443F]" aria-hidden="true" />
            <span>
              Need urgent care? Call our 24x7 emergency line{" "}
              <a
                href={EMERGENCY_TEL_HREF}
                className="inline-flex items-center gap-1 whitespace-nowrap font-semibold tabular-nums text-[#0B3446] underline underline-offset-4"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {CLINIC_PHONE_DISPLAY}
              </a>
            </span>
          </p>
        </section>
      </main>
      <BlogFooter />
    </div>
  );
}
