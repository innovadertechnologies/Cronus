import { formatDate } from "../data";

// "18 Nov 2026 · 4 min read". Reading time only when it was worked out from
// the article text.
export function PostMeta({ date, minutes }: { date: string; minutes?: number }) {
  return (
    <p className="flex items-center gap-2 text-sm tabular-nums text-[#5B6B73]">
      <time dateTime={date}>{formatDate(date)}</time>
      {minutes !== undefined && (
        <>
          <span aria-hidden="true" className="text-[#0B3446]/25">
            ·
          </span>
          <span>{minutes} min read</span>
        </>
      )}
    </p>
  );
}
