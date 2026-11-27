import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  page: number; // 1-based
  pages: number;
  from: number;
  to: number;
  total: number;
  onPage: (page: number) => void;
};

const control =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-semibold tabular-nums transition-colors";

// Numbered pages with previous / next, plus "1–6 of 11 articles".
export function BlogPagination({ page, pages, from, to, total, onPage }: Props) {
  if (total === 0) return null;
  return (
    <div className="mt-10 flex flex-col items-center gap-4 border-t border-[#0B3446]/10 pt-6 sm:flex-row sm:justify-between">
      <p className="text-sm tabular-nums text-[#5B6B73]">
        {from}–{to} of {total} {total === 1 ? "article" : "articles"}
      </p>
      {pages > 1 && (
        <nav aria-label="Pagination">
          <ul className="flex items-center gap-1">
            <li>
              <button
                id="blog-prev-page-btn"
                type="button"
                onClick={() => onPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
                className={`${control} text-[#0B3446] hover:bg-[#F6F3EE] disabled:pointer-events-none disabled:text-[#0B3446]/30`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </li>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => onPage(n)}
                  aria-label={`Page ${n}`}
                  aria-current={n === page ? "page" : undefined}
                  className={`${control} ${
                    n === page ? "bg-[#0E7C86] text-white" : "text-[#0B3446] hover:bg-[#E3F6F7]"
                  }`}
                >
                  {n}
                </button>
              </li>
            ))}
            <li>
              <button
                id="blog-next-page-btn"
                type="button"
                onClick={() => onPage(page + 1)}
                disabled={page === pages}
                aria-label="Next page"
                className={`${control} text-[#0B3446] hover:bg-[#F6F3EE] disabled:pointer-events-none disabled:text-[#0B3446]/30`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
