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
              className="mt-12 scroll-mt-28 text-[1.5rem] font-semibold leading-snug text-[#0B3446] first:mt-0 sm:text-[1.75rem] sm:tracking-[-0.01em]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-5 list-disc space-y-2.5 pl-6 marker:text-[#0E7C86]">
              {block.items.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-5 first:mt-0">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
