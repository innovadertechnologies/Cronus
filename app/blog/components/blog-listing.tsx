"use client";

import { useState, type ReactNode } from "react";
import { RotateCcw, SearchX } from "lucide-react";
import { BlogCategories, type CategoryOption } from "./blog-categories";
import type { DepartmentIconKey } from "./department-icons";
import { BlogPagination } from "./blog-pagination";

export type ListingItem = {
  id: string;
  category: string;
  featured: boolean;
  // Server-rendered <BlogCard>, so card markup never ships as client JS.
  card: ReactNode;
};

type Props = {
  // Server-rendered breadcrumb, H1 and intro for the hero.
  intro: ReactNode;
  items: ListingItem[];
  // Server-rendered featured card.
  featured: ReactNode;
  categories: { name: string; icon: DepartmentIconKey }[];
  perPage: number;
};

const ALL = "all";
const HEADING_ID = "blog-latest-title";

// Department filter and pagination over static, server-rendered cards. Every
// card stays in the HTML (others use the hidden attribute), so all article
// links are crawlable and hidden images are never fetched.
//
// "All articles" shows the featured article in its own card on page 1 and
// leaves it out of the grid on every page. A department lists every article
// in it, featured one included.
export function BlogListing({ intro, items, featured, categories, perPage }: Props) {
  const [category, setCategory] = useState(ALL);
  const [page, setPage] = useState(1);

  const all = category === ALL;
  const inCategory = (value: string) => items.filter((item) => item.category === value);
  const matches = all ? items.filter((item) => !item.featured) : inCategory(category);

  const pages = Math.max(1, Math.ceil(matches.length / perPage));
  const current = Math.min(page, pages);
  const start = (current - 1) * perPage;
  const visible = new Set(matches.slice(start, start + perPage).map((item) => item.id));
  const showFeatured = all && current === 1;

  const options: CategoryOption[] = [
    { value: ALL, label: "All articles", count: items.length },
    ...categories.map((c) => ({ value: c.name, label: c.name, count: inCategory(c.name).length, icon: c.icon })),
  ];
  const activeLabel = options.find((o) => o.value === category)?.label ?? "";

  // Back to the top of the results, with focus on their heading, so keyboard
  // and screen reader users continue from the new results.
  function returnToList() {
    const el = document.getElementById(HEADING_ID);
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.focus({ preventScroll: true });
    el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
  }

  function selectCategory(value: string) {
    setCategory(value);
    setPage(1);
  }

  function goTo(next: number) {
    setPage(Math.min(Math.max(next, 1), pages));
    // Next frame: after React has rendered the new page (the featured card
    // may have just been hidden, which moves the heading up).
    requestAnimationFrame(returnToList);
  }

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="blog-title" className="border-b border-[#0B3446]/10 bg-[#F6F3EE]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-12 lg:py-14">{intro}</div>
      </section>

      {/* Listing */}
      <section aria-label="Articles" className="bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <BlogCategories options={options} active={category} onSelect={selectCategory} />

          <div hidden={!showFeatured} className="mt-8 sm:mt-10">
            <h2 className="sr-only">Featured article</h2>
            {featured}
          </div>

          <div className="mb-6 mt-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-[#0B3446]/10 pb-4 sm:mt-14">
            <div className="min-w-0">
              <h2
                id={HEADING_ID}
                tabIndex={-1}
                className="scroll-mt-28 text-2xl font-semibold leading-tight text-[#0B3446] outline-none sm:text-[1.75rem]"
              >
                {all ? "Latest articles" : activeLabel}
              </h2>
              <p aria-live="polite" className="mt-1 text-sm tabular-nums text-[#5B6B73]">
                {matches.length} {matches.length === 1 ? "article" : "articles"}
              </p>
            </div>
            {!all && (
              <button
                type="button"
                onClick={() => selectCategory(ALL)}
                className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-semibold text-[#0B6A73] transition-colors hover:bg-[#E3F6F7]"
              >
                <RotateCcw className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Show all articles
              </button>
            )}
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {items.map((item) => (
              <li key={item.id} hidden={!visible.has(item.id)}>
                {item.card}
              </li>
            ))}
          </ul>

          {matches.length === 0 && (
            <div className="flex flex-col items-center rounded-2xl bg-[#F6F3EE] px-6 py-12 text-center sm:py-16">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B6A73] ring-1 ring-[#0B3446]/10">
                <SearchX className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="mt-4 text-lg font-semibold text-[#0B3446]">No articles in this department yet</p>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#46575F]">
                We are adding new articles regularly. In the meantime, browse the rest of the health library.
              </p>
              <button
                type="button"
                onClick={() => selectCategory(ALL)}
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-[#0E7C86] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#0B6870]"
              >
                <RotateCcw className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                Show all articles
              </button>
            </div>
          )}

          <BlogPagination
            page={current}
            pages={pages}
            from={matches.length ? start + 1 : 0}
            to={Math.min(start + perPage, matches.length)}
            total={matches.length}
            onPage={goTo}
          />
        </div>
      </section>
    </>
  );
}
