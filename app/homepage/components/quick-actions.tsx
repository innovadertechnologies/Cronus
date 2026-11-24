import { Ambulance, CalendarCheck, Navigation, Siren, type LucideIcon } from "lucide-react";
import { AMBULANCE_TEL_HREF, DIRECTIONS_URL, EMERGENCY_TEL_HREF } from "../data";

type Action = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  // Mobile bar colours / desktop icon colours.
  tone: "emergency" | "default" | "primary";
};

const actions: Action[] = [
  { id: "emergency", label: "24/7 Emergency", href: EMERGENCY_TEL_HREF, icon: Siren, tone: "emergency" },
  { id: "ambulance", label: "Ambulance", href: AMBULANCE_TEL_HREF, icon: Ambulance, tone: "default" },
  { id: "appointment", label: "Appointment", href: "#appointment", icon: CalendarCheck, tone: "primary" },
  { id: "directions", label: "Directions", href: DIRECTIONS_URL, icon: Navigation, tone: "default", external: true },
];

const toneClass: Record<Action["tone"], string> = {
  emergency: "text-[#D9443F] lg:bg-white",
  default: "text-[#0B3446] lg:bg-white",
  primary: "bg-[#0E7C86] text-white hover:bg-[#0B6870] lg:bg-[#0E7C86]",
};

// Mobile: a full-width bar fixed to the bottom (icon above label).
// Desktop: a vertical dock fixed to the left edge; each round icon widens on
// hover or keyboard focus to reveal its label.
const itemClass = [
  // mobile bar cell
  "group flex flex-col items-center justify-center gap-1 px-1 py-2.5 text-[11px] font-semibold leading-tight transition-colors sm:text-xs",
  // desktop dock pill
  "lg:h-12 lg:w-12 lg:flex-row lg:justify-start lg:gap-0 lg:overflow-hidden lg:rounded-full lg:p-0 lg:text-sm",
  "lg:shadow-[0_4px_16px_rgba(11,52,70,0.14)] lg:ring-1 lg:ring-[#0B3446]/10",
  "lg:transition-[width,background-color] lg:duration-200 lg:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "lg:hover:w-48 lg:focus-visible:w-48",
].join(" ");

export function QuickActions() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0B3446]/10 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_2px_rgba(11,52,70,0.05)] lg:inset-x-auto lg:bottom-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:border-0 lg:bg-transparent lg:pb-0 lg:shadow-none"
    >
      <ul className="grid grid-cols-4 lg:flex lg:flex-col lg:gap-3">
        {actions.map(({ id, label, href, icon: Icon, external, tone }) => (
          <li key={id}>
            <a
              id={`homepage-sticky-${id}-btn`}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className={`${itemClass} ${toneClass[tone]}`}
            >
              <span className="flex items-center justify-center lg:h-12 lg:w-12 lg:shrink-0">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span className="lg:whitespace-nowrap lg:pr-5 lg:opacity-0 lg:transition-opacity lg:duration-150 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
