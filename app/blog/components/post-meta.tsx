import { formatDate } from "../data";

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
