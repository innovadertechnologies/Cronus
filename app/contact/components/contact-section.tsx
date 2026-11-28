import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section aria-label="Send a message or reach us directly" className="bg-white pb-16 pt-10 sm:pb-20 sm:pt-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 rounded-2xl bg-[#F6F3EE] p-6 sm:p-8">
          <h2 id="contact-form-title" className="text-2xl font-semibold text-[#0B3446]">
            Send us a message
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#46575F]">
            Share a few details and our team will call you back.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <ContactDetails />
      </div>
    </section>
  );
}
