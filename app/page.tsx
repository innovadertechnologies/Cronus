import type { Metadata } from "next";
import { CLINIC_NAME } from "@/app/lib/site-config";
import { Navbar } from "./home/components/navbar";
import { Hero } from "./home/components/hero";
import { Appointment } from "./home/components/appointment";
import { About } from "./home/components/about";
import { Specialities } from "./home/components/specialities";
import { Facilities } from "./home/components/facilities";
import { Services } from "./home/components/services";
import { Doctors } from "./home/components/doctors";
import { CtaBand } from "./home/components/cta-band";
import { Footer } from "./home/components/footer";

const title = `${CLINIC_NAME} | Best Hospital in Chhatarpur, South Delhi`;
const description =
  "Cronus Multispeciality Hospital, Chhatarpur, South Delhi – 40+ medical specialities, 24x7 emergency, ICU, diagnostics and pharmacy. Book an appointment with our expert doctors.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: CLINIC_NAME,
    locale: "en_IN",
    title,
    description,
    images: [{ url: "/hospitalog.jpeg", width: 1061, height: 1137, alt: `${CLINIC_NAME} building` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/hospitalog.jpeg"] },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Appointment />
        <About />
        <Specialities />
        <Facilities />
        <Services />
        <Doctors />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
