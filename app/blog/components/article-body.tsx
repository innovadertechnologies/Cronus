import { Info } from "lucide-react";
import { slugify } from "../data";
import type { ArticleBlock } from "../articles";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="text-[17px] leading-[1.7] text-[#2A3A44] sm:text-lg">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              id={slugify(block.text)}
              tabIndex={-1}
              className="mt-12 scroll-mt-28 border-t border-[#0B3446]/10 pt-12 text-[1.625rem] font-semibold leading-snug text-[#0B3446] outline-none first:mt-0 first:border-t-0 first:pt-0 sm:text-[1.75rem] sm:tracking-[-0.01em] lg:text-[1.875rem]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-6 space-y-3 rounded-2xl bg-[#F6F3EE] p-5 sm:p-6">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3.5 text-base leading-relaxed sm:text-[17px]">
                  <span className="mt-[9px] h-2 w-2 shrink-0 rounded-full bg-[#0E7C86] sm:mt-[10px]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "note") {
          return (
            <aside
              key={i}
              aria-label="Important"
              className="mt-6 flex gap-3.5 rounded-xl border-l-4 border-[#0E7C86] bg-[#E3F6F7]/60 p-5 text-base leading-relaxed text-[#0B3446] sm:text-[17px]"
            >
              <Info className="mt-1 h-5 w-5 shrink-0 text-[#0B6A73]" strokeWidth={1.75} aria-hidden="true" />
              <p>{block.text}</p>
            </aside>
          );
        }
        return (
          <p key={i} className="mt-5 first:mt-0 first:text-[19px] first:leading-relaxed first:text-[#0B3446] sm:first:text-[21px]">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
