import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

type SourceBarProps = {
  icon: ReactNode;
  title: string;
  meta?: ReactNode;
  cta: { id: string; href: string; label: string; ariaLabel?: string };
};

export function SourceBar({ icon, title, meta, cta }: SourceBarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="flex flex-col items-stretch gap-4 border-b border-[#0B3446]/10 pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-[#0B3446]/10 sm:h-10 sm:w-10">
            {icon}
          </span>
          <div className="min-w-0">
            <h3 className="whitespace-nowrap text-base font-semibold leading-tight text-[#0B3446] sm:text-xl">{title}</h3>
            {meta && <div className="mt-1 text-[13px] leading-snug text-[#5B6B73] sm:text-sm">{meta}</div>}
          </div>
        </div>
        <a
          id={cta.id}
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={cta.ariaLabel}
          className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3.5 text-[13px] font-semibold text-[#0B3446] ring-1 ring-[#0B3446]/15 transition-colors hover:text-[#0B6A73] hover:ring-[#0E7C86]/50 sm:px-4 sm:text-sm"
        >
          {cta.label}
          <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export function ReviewCarousel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      role="region"
      aria-label={label}
      className="mt-6 overflow-x-clip motion-reduce:overflow-x-auto [scrollbar-width:none] lg:[mask-image:linear-gradient(to_right,transparent_64px,black_128px)] [&::-webkit-scrollbar]:hidden"
    >
      <div className="flex w-max animate-[marquee_70s_linear_infinite] py-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
        {children}
      </div>
    </div>
  );
}
