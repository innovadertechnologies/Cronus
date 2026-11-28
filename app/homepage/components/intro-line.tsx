import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { EMERGENCY_TEL_HREF } from "../data";

export function IntroLine() {
  return (
    <section aria-labelledby="homepage-title" className="border-b border-[#0B3446]/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center sm:px-8 sm:py-5">
        <h1
          id="homepage-title"
          className="text-2xl font-semibold leading-tight text-[#0B3446] sm:text-[2rem] sm:tracking-[-0.02em]"
        >
          Your Partner in Better Health and Wellbeing
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-[#46575F] sm:text-[17px]">
          At Cronus Multispeciality Hospital Chhatarpur, we bring experienced specialists, advanced medical facilities,
          and compassionate care.
        </p>
        <div className="mt-3 space-y-1 text-sm sm:text-[15px]">
          <p className="font-medium text-[#0B3446]">
            40+ Specialities <span aria-hidden="true" className="mx-1.5 text-[#5B6B73]">|</span> 24×7 Emergency{" "}
            <span aria-hidden="true" className="mx-1.5 text-[#5B6B73]">|</span> Advanced Medical Care
          </p>
        </div>
      </div>
    </section>
  );
}
