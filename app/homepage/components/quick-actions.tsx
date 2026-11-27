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
  // Mobile bar colours / desktop icon colours.
  tone: "emergency" | "default" | "primary" | "whatsapp";
  // Bar only: from 1376px WhatsApp is its own round button (whatsapp-button.tsx).
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
  emergency: "text-[#C2362F] min-[1376px]:bg-white",
  default: "text-[#0B3446] min-[1376px]:bg-white",
  primary: "bg-[#0E7C86] text-white hover:bg-[#0B6870] min-[1376px]:bg-[#0E7C86]",
  whatsapp: "text-[#178A45]",
};

// Below 1376px: a bar fixed to the bottom of the screen (icon above label).
// The page reserves its height (page.tsx), so it never covers content.
// From 1376px: a vertical dock fixed to the left edge. It only appears where
// the side gutter beside the 1280px content column is wide enough for it
// (16px gap + 48px icon + 16px clear of the content), so it can't sit on top
// of headings, text or buttons. Each round icon widens on hover or keyboard
// focus to reveal its label.
const itemClass = [
  // bar cell
  "group flex h-full flex-col items-center justify-center gap-1 px-1 py-2.5 text-[11px] font-semibold leading-tight transition-colors sm:text-xs",
  // dock pill
  "min-[1376px]:h-12 min-[1376px]:w-12 min-[1376px]:flex-row min-[1376px]:justify-start min-[1376px]:gap-0 min-[1376px]:overflow-hidden min-[1376px]:rounded-full min-[1376px]:p-0 min-[1376px]:text-sm",
  "min-[1376px]:shadow-[0_4px_16px_rgba(11,52,70,0.14)] min-[1376px]:ring-1 min-[1376px]:ring-[#0B3446]/10",
  "min-[1376px]:transition-[width,background-color] min-[1376px]:duration-200 min-[1376px]:ease-[cubic-bezier(0.22,1,0.36,1)]",
  "min-[1376px]:hover:w-48 min-[1376px]:focus-visible:w-48",
].join(" ");

export function QuickActions() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0B3446]/10 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-1px_2px_rgba(11,52,70,0.05)] min-[1376px]:inset-x-auto min-[1376px]:bottom-auto min-[1376px]:left-4 min-[1376px]:top-1/2 min-[1376px]:-translate-y-1/2 min-[1376px]:border-0 min-[1376px]:bg-transparent min-[1376px]:pb-0 min-[1376px]:shadow-none"
    >
      <ul className="mx-auto grid max-w-2xl grid-cols-5 min-[1376px]:flex min-[1376px]:max-w-none min-[1376px]:flex-col min-[1376px]:gap-3">
        {actions.map(({ id, label, href, icon: Icon, external, tone, barOnly }) => (
          <li key={id} className={barOnly ? "min-[1376px]:hidden" : undefined}>
            <a
              id={`homepage-sticky-${id}-btn`}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className={`${itemClass} ${toneClass[tone]}`}
            >
              <span className="flex items-center justify-center min-[1376px]:h-12 min-[1376px]:w-12 min-[1376px]:shrink-0">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="text-center min-[1376px]:whitespace-nowrap min-[1376px]:pr-5 min-[1376px]:opacity-0 min-[1376px]:transition-opacity min-[1376px]:duration-150 min-[1376px]:group-hover:opacity-100 min-[1376px]:group-focus-visible:opacity-100">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
