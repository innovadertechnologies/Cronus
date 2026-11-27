"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { initials } from "@/app/home/data";
import { requestBooking } from "@/app/home/components/booking";
import { FEATURED_DOCTOR, OTHER_DOCTORS, OUR_DOCTORS_URL, type HomepageDoctor } from "../data";
import { SectionHeading } from "./section-heading";

const DOCTORS = [FEATURED_DOCTOR, ...OTHER_DOCTORS.slice(0, 3)].map((doctor) => ({
  ...doctor,
  id: doctor.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, ""),
}));

const ROTATE_MS = 4000;
const EASE = "ease-[cubic-bezier(0.65,0,0.35,1)]";

function Countdown({ running, restartKey }: { running: boolean; restartKey: number }) {
  if (!running) return null;
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-1 bg-[#0B3446]/10">
      <span
        key={restartKey}
        style={{ animationDuration: `${ROTATE_MS}ms` }}
        className="block h-full origin-left animate-[fill-x_linear_both] bg-[#0E7C86]"
      />
    </span>
  );
}

function Portrait({ doctor, sizes }: { doctor: HomepageDoctor; sizes: string }) {
  return doctor.image ? (
    <Image
      src={doctor.image}
      alt={`${doctor.name}, ${doctor.speciality} at Cronus Multispeciality Hospital`}
      fill
      sizes={sizes}
      className="object-cover object-top"
    />
  ) : (
    // Until a photo is added (data.ts), a quiet initials avatar.
    <span role="img" aria-label={`${doctor.name} (photo coming soon)`} className="absolute inset-0 flex items-center justify-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl font-semibold text-[#0B6A73] ring-1 ring-[#0E7C86]/15 sm:h-24 sm:w-24 sm:text-3xl">
        {initials(doctor.name)}
      </span>
    </span>
  );
}

// Name, speciality, qualifications and introduction, plus the doctor's page
// (or the appointment form when there is no page).
function DoctorInfo({ doctor }: { doctor: HomepageDoctor }) {
  const meta = [doctor.qualifications, doctor.experience && `${doctor.experience} experience`].filter(Boolean).join(" · ");
  return (
    <>
      <p className="text-sm font-medium text-[#0B6A73]">{doctor.department}</p>
      <h3 className="mt-2 text-xl font-semibold leading-tight text-[#0B3446] xl:text-2xl xl:tracking-[-0.01em]">{doctor.name}</h3>
      <p className="mt-1 text-[15px] font-medium text-[#0B6A73]">{doctor.speciality}</p>
      {meta && <p className="mt-3 text-[13px] leading-snug text-[#5B6B73]">{meta}</p>}
      {doctor.intro && (
        <p className="mt-4 border-t border-[#0B3446]/10 pt-4 text-[15px] leading-relaxed text-[#46575F]">{doctor.intro}</p>
      )}
      {doctor.profileHref ? (
        <Link
          href={doctor.profileHref}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6A73] transition-colors hover:text-[#0B3446]"
        >
          View profile
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      ) : (
        <button
          type="button"
          onClick={() => requestBooking({ department: doctor.department })}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6A73] transition-colors hover:text-[#0B3446]"
        >
          Book a consultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export function Doctors() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  const rotating = !hovering;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % DOCTORS.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [rotating, active]);

  // Phone/tablet details box: follow the content's height (doctor change,
  // text wrapping on rotate or resize) so the box can animate to it. Until
  // this runs (server render, first paint) the box simply uses auto height.
  const panelContent = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<number>();
  useEffect(() => {
    const el = panelContent.current;
    if (!el) return;
    const observer = new ResizeObserver(() => setPanelHeight(el.offsetHeight));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const choose = (index: number) => setActive(index);
  const isMouse = (e: PointerEvent) => e.pointerType === "mouse";

  return (
    <section id="doctors" aria-labelledby="homepage-doctors-title" className="scroll-mt-24 bg-[#F6F3EE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-doctors-title"
          eyebrow="MEET OUR MEDICAL TEAM"
          title="Experienced Doctors. Thoughtful Healthcare."
          description="Our doctors combine their medical expertise and experience to provide guidance, diagnosis, and treatment across specialties."
        />

        {/* Desktop: expanding cards */}
        <ul
          onPointerEnter={(e) => isMouse(e) && setHovering(true)}
          onPointerLeave={(e) => isMouse(e) && setHovering(false)}
          className="mt-10 hidden h-[400px] gap-3 lg:flex xl:h-[420px] xl:gap-4"
        >
          {DOCTORS.map((doctor, i) => {
            const on = i === active;
            return (
              <li
                key={doctor.id}
                onPointerEnter={(e) => isMouse(e) && setActive(i)}
                className={`relative min-w-0 basis-0 overflow-hidden rounded-2xl bg-white ring-1 transition-[flex-grow,box-shadow] duration-700 ${EASE} motion-reduce:transition-none ${on
                  ? "grow-[3] shadow-[0_1px_2px_rgba(11,52,70,0.05),0_16px_40px_rgba(11,52,70,0.10)] ring-[#0E7C86]/30"
                  : "grow ring-[#0B3446]/10"
                  }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 overflow-hidden bg-[#E3F6F7] transition-[width] duration-700 ${EASE} motion-reduce:transition-none ${on ? "w-[170px] xl:w-[230px]" : "w-full"
                    }`}
                >
                  <Portrait doctor={doctor} sizes="(min-width: 1024px) 230px, 1px" />
                </div>
                <button
                  type="button"
                  onClick={() => choose(i)}
                  aria-pressed={on}
                  className="absolute inset-0 z-10 flex flex-col justify-end rounded-2xl text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0E7C86]"
                >
                  <span
                    className={`block bg-gradient-to-t from-[#0B3446]/90 via-[#0B3446]/55 to-transparent px-4 pb-4 pt-16 transition-opacity motion-reduce:transition-none ${on ? "opacity-0 duration-200" : "opacity-100 delay-300 duration-500"
                      }`}
                  >
                    <span className="line-clamp-2 text-base font-semibold leading-snug text-white">{doctor.name}</span>
                    <span className="mt-1 line-clamp-2 text-[13px] leading-snug text-white/80">{doctor.speciality}</span>
                  </span>
                </button>

                <div
                  inert={!on}
                  className={`absolute inset-y-0 left-[170px] right-0 z-20 flex items-center overflow-hidden transition-[opacity,transform] motion-reduce:transition-none xl:left-[230px] ${EASE} ${on ? "translate-x-0 opacity-100 delay-300 duration-500" : "pointer-events-none translate-x-3 opacity-0 duration-200"
                    }`}
                >
                  <div className="w-[290px] shrink-0 px-6 py-5 xl:w-[350px] xl:px-8">
                    <DoctorInfo doctor={doctor} />
                  </div>
                </div>

                {on && <Countdown running={rotating} restartKey={active} />}
              </li>
            );
          })}
        </ul>

        {/* Phones and tablets: photo tabs, then the active doctor's details */}
        <div className="mt-8 lg:hidden">
          <ul className="grid grid-cols-4 gap-2 sm:gap-4">
            {DOCTORS.map((doctor, i) => {
              const on = i === active;
              return (
                <li key={doctor.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={on}
                    aria-label={`${doctor.name}, ${doctor.speciality}`}
                    className="block w-full rounded-xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86]"
                  >
                    <span
                      className={`relative block aspect-[3/4] overflow-hidden rounded-xl bg-[#E3F6F7] ring-2 transition-[box-shadow,opacity] duration-300 ${on ? "ring-[#0E7C86]" : "opacity-70 ring-transparent"
                        }`}
                    >
                      <Portrait doctor={doctor} sizes="(min-width: 640px) 170px, 25vw" />
                    </span>
                    <span
                      className={`mt-2 line-clamp-2 text-[12px] font-semibold leading-snug sm:text-sm ${on ? "text-[#0B3446]" : "text-[#5B6B73]"
                        }`}
                    >
                      {doctor.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Only the active doctor's details are shown, so the box is as
              tall as that doctor's content. The box's height is measured and
              animated, so it grows and shrinks smoothly; the details fade in. */}
          <div
            style={{ height: panelHeight }}
            className={`relative mt-4 overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-[height] duration-500 ${EASE} motion-reduce:transition-none sm:mt-6`}
          >
            <div ref={panelContent} className="p-5 sm:p-7">
              {DOCTORS.map((doctor, i) => {
                const on = i === active;
                return (
                  <div key={doctor.id} hidden={!on} className={on ? "animate-fade-in" : undefined}>
                    <DoctorInfo doctor={doctor} />
                  </div>
                );
              })}
            </div>
            <Countdown running={rotating} restartKey={active} />
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            id="homepage-doctors-view-all-btn"
            href={OUR_DOCTORS_URL}
            className="inline-flex h-10 w-fit shrink-0 items-center gap-2 rounded-lg border border-[#0B3446]/20 bg-white px-4 text-sm font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446] sm:h-12 sm:px-6 sm:text-base"
          >
            <span>Meet Our Doctors</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
