import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";

// Main contact section pairing the enquiry form card with direct contact details.
export function ContactSection() {
  return (
    <section aria-label="Send a message or reach us directly" className="bg-white py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        {/* Enquiry form */}
        <div className="min-w-0 self-start rounded-2xl bg-white p-6 shadow-[0_1px_2px_rgba(11,52,70,0.05),0_16px_40px_rgba(11,52,70,0.10)] ring-1 ring-[#0B3446]/10 sm:p-8">
          <h2 id="contact-form-title" className="text-2xl font-semibold text-[#0B3446] sm:text-[1.75rem]">
            Send us a message
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#5B6B73]">
            Share a few details and our team will call you back.
          </p>
          <div className="mt-6 border-t border-[#0B3446]/10 pt-6">
            <ContactForm />
          </div>
        </div>

        <ContactDetails />
      </div>
    </section>
  );
}
