import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BookButton } from "./book-button";

const surgeryReasons = [
  "Pain continues despite treatment",
  "A slipped disc presses on a nerve",
  "Numbness or weakness develops",
  "Pain starts affecting daily activities",
];

const discectomyFor = [
  "Slipped or herniated disc",
  "Nerve pressure",
  "Persistent sciatica",
  "Symptoms not improving with other treatment",
];

const buttonClass =
  "inline-flex w-full items-center justify-center rounded-xl bg-[#0E7C86] px-6 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_-10px_rgba(14,124,134,0.7)] transition-all hover:brightness-110 sm:w-auto";

function Checklist({ items, small = false }: { items: string[]; small?: boolean }) {
  return (
    <ul className={`flex flex-col ${small ? "gap-2" : "gap-3.5"}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <CheckCircle2
            className={`mt-0.5 shrink-0 fill-[#0E7C86] text-white ${small ? "h-[18px] w-[18px]" : "h-5 w-5"}`}
          />
          <span className={`font-medium text-[#1B2936] ${small ? "text-sm" : "text-[15px] sm:text-base"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function SurgeryInfo() {
  return (
    <section id="surgery" className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* When may spine surgery be needed */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">
            When May Spine Surgery Be Needed?
          </h2>
          <p className="mt-3 text-sm text-[#1B2936]/80 sm:text-base">
            Not every back pain needs surgery. Surgery may be considered when:
          </p>
        </div>

        <div className="mt-8 grid items-center gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="md:self-center">
            <Checklist items={surgeryReasons} />
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_16px_40px_-22px_rgba(11,52,70,0.5)]">
            <Image
              src="/sp1.png"
              alt="Man holding his lower back in pain"
              fill
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_65%]"
            />
          </div>

          <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-[#EEF6FC] to-[#DDEDF8] p-6 text-center md:col-span-2 lg:col-span-1 lg:p-8">
            <p className="text-lg font-extrabold leading-snug text-[#0B2A4A] sm:text-xl">
              The right treatment starts
              <br />
              with the right diagnosis.
            </p>
            <div className="mt-5">
              <BookButton className={buttonClass}>Book Spine Consultation</BookButton>
            </div>
          </div>
        </div>

        {/* What is discectomy */}
        <div className="mt-10 rounded-3xl bg-gradient-to-br from-[#F3F9FD] to-[#E4F1FA] p-5 sm:mt-12 sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-8">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#0B3A6B] shadow-[0_16px_40px_-22px_rgba(11,52,70,0.6)]">
              <Image
                src="/sp7.png"
                alt="Illustration of a herniated disc pressing on a nerve"
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-3xl lg:text-center">
                What Is Discectomy Surgery?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1B2936]/85 sm:text-base">
                <strong className="font-bold text-[#0B2A4A]">Discectomy</strong> is a procedure used to remove the
                part of a slipped or herniated disc that is pressing on a nerve.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#1B2936]/85 sm:text-base">
                It may help reduce leg pain, numbness and nerve-related symptoms in suitable patients.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-[0_10px_30px_-20px_rgba(11,52,70,0.45)] md:col-span-2 lg:col-span-1">
              <p className="font-bold text-[#0B2A4A]">Discectomy may be recommended for:</p>
              <div className="mt-3">
                <Checklist items={discectomyFor} small />
              </div>
              <div className="mt-5">
                <BookButton className={`${buttonClass} lg:w-full`}>Book Your Spine Consultation</BookButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
