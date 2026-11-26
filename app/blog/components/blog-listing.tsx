"use client";

import { useState, type ReactNode } from "react";
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
  items: ListingItem[];
  // Server-rendered featured card, shown on the first page of "All articles".
  featured: ReactNode;
  // Department names with their icon keys (resolved on the server).
  categories: { name: string; icon: DepartmentIconKey }[];
  perPage: number;
};

const ALL = "all";
const HEADING_ID = "blog-latest-title";

// Category sidebar + featured card + paginated grid, all over static,
// server-rendered markup. Every card stays in the HTML (others use the hidden
// attribute), so all article links are crawlable and hidden images are never
// fetched.
export function BlogListing({ items, featured, categories, perPage }: Props) {
  const [category, setCategory] = useState(ALL);
  const [page, setPage] = useState(1);

  // "All" shows the featured article in its own card and leaves it out of the
  // grid; a category lists every article in it, featured included.
  const inCategory = (value: string) =>
    items.filter((item) => (value === ALL ? !item.featured : item.category === value));

  const matches = inCategory(category);
  const pages = Math.max(1, Math.ceil(matches.length / perPage));
  const start = (page - 1) * perPage;
  const visible = new Set(matches.slice(start, start + perPage).map((item) => item.id));
  const showFeatured = category === ALL && page === 1;

  const options: CategoryOption[] = [
    { value: ALL, label: "All articles", count: items.length },
    ...categories.map((c) => ({ value: c.name, label: c.name, count: inCategory(c.name).length, icon: c.icon })),
  ];
  const activeLabel = options.find((o) => o.value === category)?.label ?? "";

  // Back to the top of the results, with focus on their heading, so keyboard
  // and screen reader users continue from the new results.
  function returnToList() {
    const heading = document.getElementById(HEADING_ID);
    if (!heading) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
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
    // grid-cols-1 (= minmax(0, 1fr)) + min-w-0: without them the chip row's
    // full width stretches the column and the whole page on phones.
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[256px_minmax(0,1fr)] lg:gap-12">
      <aside className="min-w-0">
        <BlogCategories options={options} active={category} onSelect={selectCategory} />
      </aside>

      <div className="min-w-0">
        <div hidden={!showFeatured} className="mb-12">
          <h2 className="sr-only">Featured article</h2>
          {featured}
        </div>

        <div className="mb-6 flex items-baseline justify-between gap-4 border-b border-[#0B3446]/10 pb-4">
          <h2
            id={HEADING_ID}
            tabIndex={-1}
            className="scroll-mt-28 text-xl font-semibold text-[#0B3446] outline-none sm:text-2xl"
          >
            {category === ALL ? "Latest articles" : activeLabel}
          </h2>
          <p className="shrink-0 text-sm tabular-nums text-[#5B6B73]">
            {matches.length} {matches.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} hidden={!visible.has(item.id)}>
              {item.card}
            </li>
          ))}
        </ul>

        {matches.length === 0 && (
          <p className="rounded-2xl bg-[#F6F3EE] p-8 text-center text-[15px] text-[#46575F]">
            No articles in this category yet. Please check back soon.
          </p>
        )}

        <BlogPagination
          page={page}
          pages={pages}
          from={matches.length ? start + 1 : 0}
          to={Math.min(start + perPage, matches.length)}
          total={matches.length}
          onPage={goTo}
        />
      </div>
    </div>
  );
}
