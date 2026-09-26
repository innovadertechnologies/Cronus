import Image from "next/image";
import { MapPin } from "lucide-react";
import { SpineForm } from "./spine-form";

export function FinalCTA() {
  return (
    <section id="book" className="scroll-mt-16 bg-[#F3F9FD] pb-10 sm:pb-14 lg:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#0A3F7F] shadow-[0_24px_50px_-28px_rgba(6,43,87,0.7)]">
          <Image
            src="/spfb.png"
            alt=""
            aria-hidden
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-left"
          />
          {/* Darkens the spine behind the text where the columns overlap it */}
          <div className="absolute inset-0 bg-[#062B57]/70 xl:bg-transparent xl:bg-gradient-to-r xl:from-transparent xl:via-[#062B57]/30 xl:to-[#062B57]/50" />

          <div className="relative grid items-center gap-6 p-5 sm:p-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.15fr)_minmax(0,0.95fr)] xl:gap-8 xl:py-7">
            {/* Leaves the glowing spine visible on wide screens */}
            <div className="hidden xl:block" aria-hidden />

            <div className="text-white">
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl xl:text-[2rem]">
                Ready to Take the Next Step for Your Spine Health?
              </h2>
              <p className="mt-3 text-base text-white/85">
                Persistent back pain or sciatica shouldn&apos;t be ignored.
              </p>
              <p className="mt-2 text-base text-white/85">
                Get your condition evaluated by <strong className="font-bold text-white">Dr. Sandeep Singh</strong>,
                and understand the treatment options suitable for you.
              </p>
              <p className="mt-4 flex items-center gap-2.5 text-base font-semibold">
                <MapPin className="h-5 w-5 shrink-0 fill-white text-[#0A3F7F]" />
                Cronus Multispeciality Hospital, Chhatarpur
              </p>
            </div>

            <SpineForm idPrefix="cta" withEmail compact className="w-full md:max-w-md md:justify-self-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
