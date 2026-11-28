import Link from "next/link";
import { postHref, type BlogPost } from "../data";
import { PostImage } from "./post-image";

export function ArticleSidebar({ recommended }: { recommended: BlogPost[] }) {
  if (!recommended.length) return null;
  return (
    <section aria-labelledby="blog-more-title" className="lg:flex lg:min-h-0 lg:flex-col">
      <h2 id="blog-more-title" className="text-lg font-semibold text-[#0B3446] lg:shrink-0">
        More from our health blog
      </h2>
      <ul className="mt-4 grid gap-x-6 sm:grid-cols-2 lg:mt-2 lg:min-h-0 lg:grid-cols-1 lg:overflow-y-auto lg:overscroll-contain lg:pr-2 lg:[scrollbar-width:thin]">
        {recommended.map((p) => (
          <li
            key={p.id}
            className="border-t border-[#0B3446]/10 first:border-t-0 sm:[&:nth-child(2)]:border-t-0 lg:[&:nth-child(2)]:border-t"
          >
            <article className="group relative flex items-start gap-4 py-4 lg:gap-3">
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-[#E3F6F7] ring-1 ring-[#0B3446]/10 lg:h-14 lg:w-16">
                <PostImage
                  post={p}
                  sizes="80px"
                  className="transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#0B6A73]">{p.category}</p>
                <h3 className="mt-1 text-base font-semibold leading-snug text-[#0B3446]">
                  <Link
                    href={postHref(p)}
                    className="line-clamp-3 outline-none transition-colors after:absolute after:inset-0 after:rounded-lg after:content-[''] group-hover:text-[#0B6A73] focus-visible:after:outline-2 focus-visible:after:outline-[#0E7C86]"
                  >
                    {p.title}
                  </Link>
                </h3>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
