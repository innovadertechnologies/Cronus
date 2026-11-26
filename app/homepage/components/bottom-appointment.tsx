import { Phone, Siren } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { TEL_HREF, WHATSAPP_HREF } from "../data";
import { AppointmentForm } from "./appointment-form";
import { SectionHeading } from "./section-heading";

// Final appointment section. "Book an Appointment" is the form's own button;
// calling and WhatsApp sit beside the text.
export function BottomAppointment() {
  return (
    <section
      id="book-appointment"
      aria-labelledby="homepage-bottom-title"
      className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="homepage-bottom-title"
            eyebrow="WE'RE HERE FOR YOUR HEALTH"
            title="The Right Care Begins with the Right Consultation"
            description={
              <>
                Whether you need a specialist consultation, diagnostic services, or medical treatment, Cronus
                Multispeciality Hospital is here to guide you at every step.
                <span className="mt-4 block">Connect with our team to schedule your appointment.</span>
              </>
            }
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              id="homepage-bottom-call-btn"
              href={TEL_HREF}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#0B3446] px-6 font-semibold tabular-nums text-white transition-colors hover:bg-[#0E7C86]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now: {CLINIC_PHONE_DISPLAY}
            </a>
            <a
              id="homepage-bottom-whatsapp-btn"
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-[#0B3446]/20 bg-white px-6 font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <AppointmentForm
          idPrefix="homepage-bottom-form"
          labelledBy="homepage-bottom-title"
          labels={{ name: "Full Name", phone: "Phone Number", department: "Department", message: "Message" }}
          submitLabel="Book an Appointment"
          note={
            <>
              <Siren className="h-3.5 w-3.5 text-[#D9443F]" aria-hidden="true" />
              Emergency Support: Available 24×7
            </>
          }
        />
      </div>
    </section>
  );
}
