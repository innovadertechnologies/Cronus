import type { ComponentType } from "react";
import { Ambulance, CalendarCheck, Navigation, Siren } from "lucide-react";
import { WhatsappIcon } from "@/app/components/social-icons";
import { AMBULANCE_TEL_HREF, DIRECTIONS_URL, EMERGENCY_TEL_HREF, WHATSAPP_HREF } from "../data";

type Action = {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  external?: boolean;
  tone: "emergency" | "default" | "primary" | "whatsapp";
  barOnly?: boolean;
};

const actions: Action[] = [
  { id: "emergency", label: "24/7 Emergency", href: EMERGENCY_TEL_HREF, icon: Siren, tone: "emergency" },
  { id: "ambulance", label: "Ambulance", href: AMBULANCE_TEL_HREF, icon: Ambulance, tone: "default" },
  { id: "appointment", label: "Appointment", href: "#appointment", icon: CalendarCheck, tone: "primary" },
  { id: "directions", label: "Directions", href: DIRECTIONS_URL, icon: Navigation, tone: "default", external: true },
  { id: "whatsapp-bar", label: "WhatsApp", href: WHATSAPP_HREF, icon: WhatsappIcon, tone: "whatsapp", external: true, barOnly: true },
];

const toneClass: Record<Action["tone"], string> = {
  emergency: "text-[#C2362F] lg:bg-white",
  default: "text-[#0B3446] lg:bg-white",
  primary: "bg-[#0E7C86] text-white hover:bg-[#0B6870] lg:bg-[#0E7C86]",
  whatsapp: "text-[#178A45]",
};

const itemClass = [
  "group flex h-full flex-col items-center justify-center gap-1 px-1 py-2.5 text-[11px] font-semibold leading-tight transition-colors max-[359px]:text-[10px] sm:text-xs",
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
      <ul className="mx-auto grid max-w-2xl grid-cols-[repeat(5,minmax(0,1fr))] lg:flex lg:max-w-none lg:flex-col lg:gap-3">
        {actions.map(({ id, label, href, icon: Icon, external, tone, barOnly }) => (
          <li key={id} className={barOnly ? "lg:hidden" : undefined}>
            <a
              id={`homepage-sticky-${id}-btn`}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className={`${itemClass} ${toneClass[tone]}`}
            >
              <span className="flex items-center justify-center lg:h-12 lg:w-12 lg:shrink-0">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-center lg:whitespace-nowrap lg:pr-5 lg:opacity-0 lg:transition-opacity lg:duration-150 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
