import Image from "next/image";
import { HOMEPAGE_FAQS } from "../data";
import { FaqAccordion } from "./faq-accordion";
import { SectionHeading } from "./section-heading";

// Phones and tablets: centred heading with the questions below it in a
// narrower, centred column. Desktop (1024px+): heading and questions on the
// left, a photo on the right. The photo is display:none below 1024px, so it
// takes no space there and, being lazy-loaded, is never downloaded.
// The section stays a server component; only the accordion is interactive.
export function Faq() {
  return (
    <section id="faq" aria-labelledby="homepage-faq-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-start lg:gap-16">
        <div>
          <div className="lg:[&>div]:text-left">
            <SectionHeading id="homepage-faq-title" eyebrow="NEED MORE INFORMATION?" title="Frequently Asked Questions" />
          </div>
          <div className="mx-auto mt-10 max-w-3xl sm:mt-12 lg:mx-0 lg:mt-10 lg:max-w-none">
            <FaqAccordion faqs={HOMEPAGE_FAQS} />
          </div>
        </div>

        <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl bg-[#E3F6F7] ring-1 ring-[#0B3446]/10 lg:sticky lg:top-28 lg:block">
          <Image
            src="/faq.jpg"
            alt="Doctor examining a young patient's eyes with a slit lamp at Cronus Multispeciality Hospital"
            fill
            sizes="(min-width: 1280px) 460px, 38vw"
            // Landscape photo in a portrait frame: keep the doctor and the patient in view.
            className="object-cover object-[66%_center]"
          />
        </div>
      </div>
    </section>
  );
}
