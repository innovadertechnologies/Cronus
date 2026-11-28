"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { ChevronDown } from "lucide-react";

export type TocHeading = { id: string; text: string };

export function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState(headings[0]?.id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          setActive(visible[0].target.id);
          return;
        }
        const above = els.filter((el) => el.getBoundingClientRect().top < 112);
        if (above.length) setActive(above[above.length - 1].id);
        else setActive(els[0].id);
      },
      { rootMargin: "-112px 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scroll = () => {
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      target.focus({ preventScroll: true });
    };
    history.replaceState(null, "", `#${id}`);
    setActive(id);
    if (open) {
      setOpen(false);
      window.setTimeout(scroll, reduce ? 0 : 320);
    } else {
      scroll();
    }
  };

  if (!headings.length) return null;

  return (
    <nav
      aria-labelledby="blog-toc-title"
      className="rounded-2xl bg-[#F6F3EE] ring-1 ring-[#0B3446]/10"
    >
      <h2 id="blog-toc-title" className="text-[15px] font-semibold text-[#0B3446]">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="blog-toc-list"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0E7C86] lg:hidden"
        >
          <span>
            On this page
            <span className="ml-2 text-sm font-normal text-[#5B6B73]">{headings.length} sections</span>
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-[#0B6A73] transition-transform duration-300 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </button>
        <span className="hidden px-6 pt-5 lg:block">
          On this page
          <span className="ml-2 text-sm font-normal text-[#5B6B73]">{headings.length} sections</span>
        </span>
      </h2>

      <div
        id="blog-toc-list"
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none lg:grid-rows-[1fr] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className={`min-h-0 overflow-hidden transition-[visibility] duration-300 lg:visible ${open ? "visible" : "invisible"}`}>
          <ol className="mx-5 mb-4 border-l border-[#0B3446]/10 lg:mx-6 lg:mb-5 lg:mt-3">
            {headings.map((h, i) => {
              const on = h.id === active;
              return (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    onClick={(e) => go(e, h.id)}
                    aria-current={on ? "location" : undefined}
                    className={`-ml-px flex min-h-11 items-start gap-3 border-l-2 py-3 pl-4 text-[15px] leading-snug transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0E7C86] ${on
                      ? "border-[#0E7C86] font-medium text-[#0B3446]"
                      : "border-transparent text-[#2A3A44] hover:border-[#0B3446]/25 hover:text-[#0B6A73]"
                      }`}
                  >
                    <span className={`tabular-nums w-5 shrink-0 ${on ? "text-[#0B6A73]" : "text-[#5B6B73]"}`} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {h.text}
                  </a>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </nav>
  );
}
