import { Lock } from "lucide-react";
import { AppointmentForm } from "./appointment-form";

// Main appointment form, with hospital contact details beside it (see the
// "split" variant of AppointmentForm). Every "Book appointment" link on the
// page targets #appointment.
export function AppointmentSection() {
  return (
    <section
      id="appointment"
      aria-labelledby="homepage-hero-form-title"
      className="scroll-mt-28 bg-[#F6F3EE] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <AppointmentForm
          idPrefix="homepage-hero-form"
          title="Your Health Deserves Timely Attention"
          subtitle="Connect with the right specialist at Cronus Multispeciality Hospital. Share your details, and our team will help schedule your consultation."
          labels={{
            name: "Full Name",
            phone: "Phone Number",
            department: "Select Department",
            message: "Message (Optional)",
          }}
          submitLabel="Book an Appointment"
          note={
            <>
              <Lock className="h-3.5 w-3.5" aria-hidden="true" />
              Your details are only used to arrange your visit.
            </>
          }
          variant="split"
          listenForBooking
        />
      </div>
    </section>
  );
}
