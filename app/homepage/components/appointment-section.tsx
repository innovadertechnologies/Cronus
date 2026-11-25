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
          title="Book an appointment"
          subtitle="Tell us what you need and our team will call you back to confirm a time with the right specialist."
          variant="split"
          listenForBooking
        />
      </div>
    </section>
  );
}
