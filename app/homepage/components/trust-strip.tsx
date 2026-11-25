import type { ReactNode } from "react";
import { Award, Clock, ShieldCheck, Star, Stethoscope, Users } from "lucide-react";
import { CountUp } from "./count-up";

type Props = { rating: string; count: string };

// Same design as before; the numeric figures now count up from zero the
// first time the strip scrolls into view. Figures come from the site's
// existing content (and the live Google rating when configured).
export function TrustStrip({ rating, count }: Props) {
  const items: { icon: typeof Award; value: ReactNode; label: string }[] = [
    {
      icon: Award,
      value: (
        <>
          <CountUp value={20} />+ years
        </>
      ),
      label: "Of trusted care",
    },
    {
      icon: Stethoscope,
      value: (
        <>
          <CountUp value={40} />+
        </>
      ),
      label: "Medical specialities",
    },
    {
      icon: Users,
      value: (
        <>
          <CountUp value={9999} />+
        </>
      ),
      label: "Happy patients",
    },
    { icon: Clock, value: "24x7", label: "Emergency & pharmacy" },
    {
      icon: Star,
      value: (
        <>
          <CountUp value={Number(rating)} decimals={1} /> / 5
        </>
      ),
      label: `${count} Google reviews`,
    },
    { icon: ShieldCheck, value: "Cashless", label: "Insurance available*" },
  ];

  return (
    <section aria-label="Why patients trust Cronus" className="bg-[#0B3446] text-white">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
        {items.map(({ icon: Icon, value, label }) => (
          <li key={label} className="flex flex-col gap-3 bg-[#0B3446] px-4 py-6 sm:px-6 sm:py-8">
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
