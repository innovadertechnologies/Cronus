import { slugify } from "../data";
import type { ArticleBlock } from "../articles";

// The article text at a comfortable reading width. Section headings get ids
// so the "On this page" list can link to them; scroll-mt keeps them clear of
// the sticky site header.
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="max-w-[68ch] text-[17px] leading-[1.75] text-[#2A3A44] sm:text-lg">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              id={slugify(block.text)}
              className="mt-10 scroll-mt-28 border-t border-[#0B3446]/10 pt-10 text-[1.5rem] font-semibold leading-snug text-[#0B3446] first:mt-0 first:border-t-0 first:pt-0 sm:text-[1.75rem] sm:tracking-[-0.01em]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-6 divide-y divide-[#0B3446]/10 rounded-2xl bg-[#F6F3EE] px-5 sm:px-6">
              {block.items.map((item) => (
                <li key={item} className="flex gap-3 py-3.5 text-base leading-relaxed sm:text-[17px]">
                  <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0E7C86]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          // The opening paragraph reads as the lead: a step larger, in navy.
          <p key={i} className="mt-5 first:mt-0 first:text-[19px] first:leading-relaxed first:text-[#0B3446] sm:first:text-[21px]">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
