import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { APPOINTMENT_HREF, departmentHref, departmentIcon, slugify, type BlogCategory } from "../data";
import { DEPARTMENT_ICONS } from "./department-icons";

type Props = {
  category: BlogCategory;
  headings: string[];
};

// Desktop: sticky beside the article, with the "On this page" links and the
// department card. On smaller screens only the department card shows, after
// the article.
export function ArticleSidebar({ category, headings }: Props) {
  const Icon = DEPARTMENT_ICONS[departmentIcon(category)];
  const href = departmentHref(category);
  const hasPage = !href.startsWith("/homepage");

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      {headings.length > 0 && (
        <nav aria-labelledby="blog-toc-title" className="mb-8 hidden lg:block">
          <h2 id="blog-toc-title" className="text-sm font-medium text-[#5B6B73]">
            On this page
          </h2>
          <ul className="mt-3 space-y-0.5 border-l border-[#0B3446]/10">
            {headings.map((text) => (
              <li key={text}>
                <a
                  href={`#${slugify(text)}`}
                  className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm leading-snug text-[#46575F] transition-colors hover:border-[#0E7C86] hover:text-[#0B3446]"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className="rounded-2xl bg-[#F6F3EE] p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0B6A73] ring-1 ring-[#0B3446]/10">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
        </span>
        <p className="mt-4 text-sm text-[#5B6B73]">Department</p>
        <p className="mt-0.5 text-lg font-semibold text-[#0B3446]">{category}</p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            id="blog-article-book-btn"
            href={APPOINTMENT_HREF}
            className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0E7C86] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0B6870]"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book an appointment
          </a>
          {hasPage && (
            <Link
              href={href}
              className="flex items-center justify-between gap-3 border-t border-[#0B3446]/10 pt-4 text-sm font-semibold leading-snug text-[#0B6A73] transition-colors hover:text-[#0B3446]"
            >
              About {category} at Cronus
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
