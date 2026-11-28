import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { APPOINTMENT_HREF, departmentHref, type BlogCategory } from "../data";

export function ArticleCta({ category }: { category: BlogCategory }) {
  const href = departmentHref(category);
  const hasPage = !href.startsWith("/homepage");
  return (
    <section aria-labelledby="blog-cta-title" className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-[#0B3446] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-[#8FD3D8]">Book a consultation</p>
            <h2
              id="blog-cta-title"
              className="mt-3 text-balance text-[1.75rem] font-semibold leading-tight sm:text-[2rem] sm:tracking-[-0.02em]"
            >
              Your Health Deserves Expert Care.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/75 sm:text-[17px]">
              Read something that sounds familiar? Book a visit with the right specialist at Cronus.
            </p>
            {hasPage && (
              <Link
                href={href}
                className="group mt-2 inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm font-semibold text-[#8FD3D8] underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                About {category} at Cronus
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            )}
          </div>

          <div className="lg:shrink-0">
            <a
              id="blog-cta-appointment-btn"
              href={APPOINTMENT_HREF}
              className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0E7C86] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#12919C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
