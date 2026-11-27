import type { ReactNode } from "react";
import { Award, ShieldCheck, Siren, Star, Stethoscope, Users } from "lucide-react";
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
    {
      icon: Users,
      value: (
        <>
          <CountUp value={50000} />+
        </>
      ),
      label: "Patients Treated",
    },
    { icon: Siren, value: "24×7", label: "Emergency Services" },
    {
      icon: ShieldCheck,
      value: (
        <>
          <CountUp value={100} />%
        </>
      ),
      label: "Cashless Insurance Support",
    },
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
      {/* Six items: two per row on phones and three per row on tablets (rows
          split by a hairline, dividers between items in a row), one row of six
          from 1024px. Every item is centred in its cell, so both sides get
          the same space. */}
      <ul className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:grid-cols-3 sm:px-8 lg:grid-cols-6">
        {items.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            className="flex flex-col items-center gap-3 border-white/10 px-2 py-6 text-center max-sm:[&:nth-child(even)]:border-l max-sm:[&:nth-child(n+3)]:border-t sm:py-8 sm:max-lg:px-4 sm:max-lg:[&:nth-child(n+4)]:border-t sm:max-lg:[&:not(:nth-child(3n+1))]:border-l lg:px-4 lg:[&:not(:first-child)]:border-l"
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
