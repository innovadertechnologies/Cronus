import Image from "next/image";
import { CountUp } from "./count-up";
import { SectionLabel } from "./section-label";

const stats = [
  { value: 40, suffix: "+", label: "Medical specialities" },
  { value: 9999, suffix: "+", label: "Happy patients" },
  { value: 3, suffix: "", label: "Healthcare centres" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-[#F6F3EE] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure>
          <div className="relative aspect-[4/4.6] overflow-hidden rounded-lg">
            <Image
              src="/hospitalog.jpeg"
              alt="Cronus Multispeciality Hospital building in Chhatarpur, South Delhi"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-[#5B6B73]">The Cronus building on 100 Feet Road, Chhatarpur.</figcaption>
        </figure>

        <div className="flex flex-col justify-center">
          <SectionLabel>Who we are</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.01em] text-[#0B3446] sm:text-[2.6rem]">
            When it comes to choosing a hospital, one thing is clear: quality counts.
          </h2>
          <div className="mt-7 space-y-4 text-[17px] leading-relaxed text-[#46575F]">
            <p>
              With more than two decades of tradition, excellence and quality in providing medical care in a
              comfortable and convenient environment, we bring peace of mind to the thousands of patients we care for
              every day, with the help of our doctors, specialists and nurses.
            </p>
            <p>
              From the very beginning, our experts in Chhatarpur have looked after patients in the most outstanding
              manner, and the hospital has made a recognisable name within and beyond the area.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-3 border-t border-[#0B3446]/15">
            {stats.map(({ value, suffix, label }, i) => (
              <div key={label} className={`pt-6 ${i > 0 ? "border-l border-[#0B3446]/15 pl-4 sm:pl-8" : ""}`}>
                <dd className="text-3xl font-semibold tracking-tight text-[#0B3446] sm:text-5xl">
                  <CountUp value={value} />
                  {suffix}
                </dd>
                <dt className="mt-2 text-sm text-[#5B6B73]">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
