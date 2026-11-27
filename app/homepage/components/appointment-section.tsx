import { Lock } from "lucide-react";
import { AppointmentForm } from "./appointment-form";

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
          subtitle="Not sure which doctor to see? Share your details with us and our team at Cronus Multispeciality Hospital will call you, understand your problem and book your appointment with the right specialist. From children to senior citizens, our doctors across more than 40 specialities are here to help you and your family with care, respect and no unnecessary waiting."
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
