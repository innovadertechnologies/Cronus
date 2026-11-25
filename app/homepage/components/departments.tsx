import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Droplet,
  Ear,
  Eye,
  HeartPulse,
  Scissors,
  Smile,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { DEPARTMENT_CARDS, type Department } from "../data";
import { SectionHeading } from "./section-heading";

const ICONS: Record<Department["icon"], LucideIcon> = {
  stethoscope: Stethoscope,
  bone: Bone,
  spine: Activity,
  baby: Baby,
  scissors: Scissors,
  droplet: Droplet,
  ear: Ear,
  brain: Brain,
  heart: HeartPulse,
  eye: Eye,
  smile: Smile,
};

function DepartmentCard({ department, hidden = false }: { department: Department; hidden?: boolean }) {
  const Icon = ICONS[department.icon];
  const hasPage = department.href.startsWith("/");
  return (
    <li className="w-64 shrink-0 py-2 sm:w-72">
      <Link
        href={department.href}
        tabIndex={hidden ? -1 : undefined}
        className="group flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-[#0B3446]/10 transition-[box-shadow] duration-150 hover:ring-[#0E7C86]/50"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E3F6F7] text-[#0B6A73]">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </span>
        {/* The looping duplicate uses a <p> so search engines don't see every heading twice */}
        {hidden ? (
          <p className="mt-5 text-lg font-semibold text-[#0B3446]">{department.name}</p>
        ) : (
          <h3 className="mt-5 text-lg font-semibold text-[#0B3446]">{department.name}</h3>
        )}
        <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-[#5B6B73]">{department.text}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6A73]">
          {hasPage ? "Learn more" : "Book a consultation"}
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </li>
  );
}

// Cards drift right-to-left in a seamless CSS loop (the list is rendered
// twice and moved by half its width). Hover or keyboard focus pauses it;
// with reduced motion it becomes a plain, swipeable row.
export function Departments() {
  return (
    <section
      id="departments"
      aria-labelledby="homepage-departments-title"
      className="scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          id="homepage-departments-title"
          eyebrow="Our departments"
          title="Specialist care across 40+ specialities"
          description="From joint replacement and maternity to urology and emergency care, find the right department for you."
        />
        <a
          href="#appointment"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#0B3446]/20 px-5 py-2.5 text-[15px] font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
        >
          Not sure? Ask us
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="relative mt-10">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Uses Tailwind's animate-[...] (in the utilities layer) rather than the global
              .animate-marquee class: that class is unlayered, so it would override the
              hover pause. Each half carries its own trailing gap (pr-5) so the two halves are
              exactly equal and the -50% loop has no jump. */}
          <div className="flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
            <ul className="flex gap-5 pr-5">
              {DEPARTMENT_CARDS.map((d) => (
                <DepartmentCard key={d.name} department={d} />
              ))}
            </ul>
            <ul className="flex gap-5 pr-5 motion-reduce:hidden" aria-hidden="true">
              {DEPARTMENT_CARDS.map((d) => (
                <DepartmentCard key={d.name} department={d} hidden />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
