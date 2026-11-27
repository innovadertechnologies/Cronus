import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DEPARTMENT_CARDS, type Department } from "../data";
import { SectionHeading } from "./section-heading";

// Photo on top (same 16:10 frame on every card), then name, text and link.
// Hover: teal ring, a soft shadow and a slow zoom of the photo inside its frame.
// `copy`: the second, decorative copy of the list that makes the loop
// seamless. It stays clickable but is out of the tab order and has no headings.
function DepartmentCard({ department, copy = false }: { department: Department; copy?: boolean }) {
  const hasPage = department.href.startsWith("/");
  const Title = copy ? "p" : "h3";
  return (
    <li className="w-64 shrink-0 py-2 sm:w-72">
      <Link
        href={department.href}
        tabIndex={copy ? -1 : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-[box-shadow] duration-300 hover:shadow-[0_12px_32px_rgba(11,52,70,0.10)] hover:ring-[#0E7C86]/50"
      >
        <div className={`relative aspect-[16/10] overflow-hidden ${department.imageFit === "contain" ? "bg-white" : "bg-[#E3F6F7]"}`}>
          <Image
            src={department.image}
            alt={department.imageAlt}
            fill
            sizes="(min-width: 640px) 288px, 256px"
            className={`${department.imageFit === "contain" ? "object-contain p-2" : "object-cover"} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none`}
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <Title className="text-lg font-semibold text-[#0B3446]">{department.name}</Title>
          <p className="mt-1.5 flex-1 text-[15px] leading-relaxed text-[#5B6B73]">{department.text}</p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6A73]">
            {hasPage ? "Learn more" : "Book a consultation"}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
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
          eyebrow="OUR MEDICAL DEPARTMENTS"
          title="Specialised Care for Every Health Need"
          description="Our expert doctors provide comprehensive medical and surgical care across multiple specialities, supported by advanced facilities and modern treatment options. "
        />
      </div>

      <div className="relative mt-10">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent sm:w-24" />

        {/* While it moves, the row cannot be scrolled at all (overflow clip,
            not even by focus or find-in-page), so it never runs past the
            cards into empty space. With reduced motion it is a plain row
            that can be swiped. */}
        <div className="overflow-x-clip motion-reduce:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
            <ul className="flex gap-5 pr-5">
              {DEPARTMENT_CARDS.map((d) => (
                <DepartmentCard key={d.name} department={d} />
              ))}
            </ul>
            {/* Second copy, rendered with the page: the track moves by half
                its width, then starts again, so the loop never shows a gap. */}
            <ul aria-hidden="true" className="flex gap-5 pr-5 motion-reduce:hidden">
              {DEPARTMENT_CARDS.map((d) => (
                <DepartmentCard key={d.name} department={d} copy />
              ))}
            </ul>
          </div>
        </div>

      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-8 lg:flex-row justify-center mt-4">
        <a
          href="#appointment"
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg border border-[#0B3446]/20 px-5 py-2.5 text-[15px] font-semibold text-[#0B3446] transition-colors hover:border-[#0B3446]"
        >
          Explore All Departments
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
