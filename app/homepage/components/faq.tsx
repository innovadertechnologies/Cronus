import { HOMEPAGE_FAQS } from "../data";
import { FaqAccordion } from "./faq-accordion";
import { SectionHeading } from "./section-heading";

// Centred heading with the questions below it in a narrower, centred column.
// The section stays a server component; only the accordion is interactive.
export function Faq() {
  return (
    <section id="faq" aria-labelledby="homepage-faq-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading id="homepage-faq-title" eyebrow="NEED MORE INFORMATION?" title="Frequently Asked Questions" />
        <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
          <FaqAccordion faqs={HOMEPAGE_FAQS} />
        </div>
      </div>
    </section>
  );
}
