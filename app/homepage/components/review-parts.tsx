import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

type SourceBarProps = {
  // Small source logo shown before the heading.
  icon: ReactNode;
  title: string;
  cta: { id: string; href: string; label: string };
};

// Label row for one review source: logo and name on the left, a quiet
// "See all on …" button on the right, a hairline under both. Google and
// Practo use the same row, so the two groups read as parts of one section.
export function SourceBar({ icon, title, cta }: SourceBarProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="flex items-center justify-between gap-3 border-b border-[#0B3446]/10 pb-4 sm:gap-6">
        <h3 className="flex min-w-0 items-center gap-2 whitespace-nowrap text-base font-semibold leading-tight text-[#0B3446] sm:gap-3 sm:text-xl">
          <span className="flex h-8 w-8 shrink-0 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-white ring-1 ring-[#0B3446]/10">
            {icon}
          </span>
          {title}
        </h3>
        <a
          id={cta.id}
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg bg-white px-3.5 text-[13px] font-semibold text-[#0B3446] ring-1 ring-[#0B3446]/15 transition-colors hover:text-[#0B6A73] hover:ring-[#0E7C86]/50 sm:px-4 sm:text-sm"
        >
          {cta.label}
          <ExternalLink className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

// Full-width, continuous right-to-left row of review cards (the list is
// rendered twice and moved by half its width). Pauses on hover, focus or
// touch; with reduced motion it is a plain, swipeable row.
export function ReviewCarousel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="region" aria-label={label} className="mt-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex w-max animate-[marquee_70s_linear_infinite] py-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
        {children}
      </div>
    </div>
  );
}
