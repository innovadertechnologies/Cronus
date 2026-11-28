import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CLINIC_NAME } from "@/app/lib/site-config";
import { BlogHeader } from "@/app/blog/components/blog-header";
import { BlogFooter } from "@/app/blog/components/blog-footer";
import { SuccessMark } from "./components/success-mark";

export const metadata: Metadata = {
  title: `Message received | ${CLINIC_NAME}`,
  robots: { index: false, follow: false },
};

const btn =
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-semibold transition-[background-color,border-color,transform] duration-150 hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86] active:translate-y-0 active:scale-[0.98]";

export default function ContactThankYouPage() {
  return (
    <div>
      <div className="flex min-h-dvh flex-col">
        <BlogHeader />
        <main className="flex flex-1 flex-col">
          <div className="relative flex flex-1 items-center overflow-hidden bg-[#F6F3EE]">
            <div className="relative mx-auto w-full max-w-3xl px-4 py-8 sm:px-8 sm:py-12">
              <section
                aria-labelledby="contact-thanks-title"
                className="relative isolate flex animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] flex-col items-center text-center"
              >
                <svg
                  viewBox="0 0 600 600"
                  className="pointer-events-none absolute left-1/2 top-[-268px] -z-10 h-[600px] w-[600px] -translate-x-1/2 sm:top-[-264px]"
                  aria-hidden="true"
                >
                  {[90, 170, 250].map((r) => (
                    <circle
                      key={r}
                      cx="300"
                      cy="300"
                      r={r}
                      fill="none"
                      stroke="#0E7C86"
                      strokeOpacity="0.09"
                    />
                  ))}
                </svg>
                <SuccessMark />
                <p className="mt-6 text-lg font-semibold text-[#0B6A73] sm:mt-8">
                  Thank You!
                </p>
                <h1
                  id="contact-thanks-title"
                  className="mt-2 max-w-[15ch] text-balance text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0B3446] sm:text-[3.25rem] lg:text-[3.5rem]"
                >
                  Your Request Has Been Received.
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-[#46575F] sm:text-lg">
                  Thank you for choosing Cronus Multispeciality Hospital. Our
                  team will contact you shortly to assist you with your
                  appointment.
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
                  <Link
                    id="contact-thanks-home-btn"
                    href="/homepage"
                    className={`${btn} bg-[#0E7C86] text-white hover:bg-[#0B6870]`}
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back to home
                  </Link>
                  <Link
                    id="contact-thanks-blog-btn"
                    href="/blog"
                    className={`${btn} border border-[#0B3446]/20 bg-white text-[#0B3446] hover:border-[#0B3446]`}
                  >
                    Read our health blog
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <BlogFooter />
    </div>
  );
}
