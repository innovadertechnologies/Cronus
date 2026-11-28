import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function ContactPageHeader() {
  return (
    <section aria-labelledby="contact-title" className="bg-white">
      <div className="mx-auto max-w-7xl animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] px-4 pt-6 sm:px-8 sm:pt-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-[#5B6B73]">
            <li>
              <Link
                href="/homepage"
                className="inline-flex min-h-11 items-center rounded-sm underline-offset-4 transition-colors hover:text-[#0B3446] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86]"
              >
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

        <p className="mt-6 text-[15px] font-semibold text-[#0B6A73] sm:mt-8">Contact us</p>
        <h1
          id="contact-title"
          className="mt-2 text-[2rem] font-semibold leading-tight text-[#0B3446] sm:text-5xl sm:tracking-[-0.02em]"
        >
          Get in touch with our hospital team
        </h1>
        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[#46575F]">
          Call, WhatsApp or send us a message. Our team at Chhatarpur, South Delhi, will help you book a consultation
          or answer your questions.
        </p>
      </div>
    </section>
  );
}
