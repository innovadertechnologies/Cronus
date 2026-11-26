import type { ReactNode } from "react";
import { Award, Pill, Siren, Star, Stethoscope } from "lucide-react";
import { CountUp } from "./count-up";

type Props = { rating: string };

// Hospital Highlights: a separate horizontal strip below About. Same design
// as before; the figures count up from zero the first time the strip scrolls
// into view. The rating is the Google rating shown elsewhere on the page
// (live from Google when configured).
export function TrustStrip({ rating }: Props) {
  const items: { icon: typeof Award; value: ReactNode; label: string }[] = [
    {
      icon: Award,
      value: (
        <>
          <CountUp value={20} />+
        </>
      ),
      label: "Years of Healthcare Experience",
    },
    {
      icon: Stethoscope,
      value: (
        <>
          <CountUp value={40} />+
        </>
      ),
      label: "Medical Specialities",
    },
    { icon: Siren, value: "24×7", label: "Emergency Services" },
    { icon: Pill, value: "24×7", label: "Pharmacy" },
    {
      icon: Star,
      value: (
        <>
          <CountUp value={Number(rating)} decimals={1} />
          /5
        </>
      ),
      label: "Google Rating",
    },
  ];

  return (
    <section aria-label="Hospital Highlights" className="bg-[#0B3446] text-white">
      {/* Five items, aligned with the page container: two per row on phones (the
          last one spans the row, rows split by a hairline), one row from 640px
          with dividers only between items. */}
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 sm:grid-cols-5 sm:gap-x-0 sm:divide-x sm:divide-white/10 sm:px-8">
        {items.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex flex-col gap-3 border-t border-white/10 py-6 last:col-span-2 [&:nth-child(-n+2)]:border-t-0 sm:border-t-0 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:col-span-1 sm:last:pr-0"
          >
            <Icon className="h-[18px] w-[18px] text-[#8FD3D8]" strokeWidth={1.5} aria-hidden="true" />
            <span>
              <span className="block text-2xl font-semibold tabular-nums">{value}</span>
              <span className="mt-1 block text-sm text-white/70">{label}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
