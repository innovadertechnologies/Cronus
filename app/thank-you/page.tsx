import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { CLINIC_PHONE_DISPLAY, CLINIC_PHONE_TEL } from "@/app/lib/site-config";

export const metadata = {
  title: "Thank You | Cronus Multispeciality Hospital",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#EAF6F8] px-5 py-16 text-center">
      <Image
        src="/logo.png"
        alt="Cronus Multispeciality Hospital"
        width={1353}
        height={742}
        priority
        className="h-11 w-auto"
      />

      <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
        <CheckCircle2 className="h-9 w-9" strokeWidth={2} />
      </div>

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0B3446] sm:text-4xl">
        Thank You!
      </h1>
      <p className="mt-3 max-w-md text-lg leading-relaxed text-[#3F5A66]">
        Our team will get back to you shortly to help with your hernia evaluation
        and treatment.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B3446] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(11,52,70,0.45)] transition-all hover:brightness-110"
        >
          Back to Home
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href={`tel:${CLINIC_PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B3446] bg-white px-7 py-3.5 text-base font-semibold text-[#0B3446] transition-colors hover:bg-[#0B3446] hover:text-white"
        >
          <Phone className="h-4 w-4" />
          {CLINIC_PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
