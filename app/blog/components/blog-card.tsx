import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postHref, type BlogPost } from "../data";
import { CategoryBadge } from "./category-badge";
import { PostImage } from "./post-image";
import { PostMeta } from "./post-meta";

type Props = { post: BlogPost; minutes?: number };

// One article in a grid. The title is the only link (stretched over the whole
// card), so screen readers hear one clear link per article. Hover lifts the
// card with a soft shadow and slowly zooms the image inside its frame.
export function BlogCard({ post, minutes }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(11,52,70,0.04),0_12px_32px_rgba(11,52,70,0.10)] focus-within:ring-2 focus-within:ring-[#0E7C86]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9F1F5]">
        <PostImage
          post={post}
          // Full-width grid: 3 columns from 1024px (≈384px at 1280+), 2 from 640px.
          sizes="(min-width: 1280px) 384px, (min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div>
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug text-[#0B3446]">
          <Link
            href={postHref(post)}
            className="line-clamp-2 outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0B6A73]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[15px] leading-relaxed text-[#46575F]">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#0B3446]/10 pt-4">
          <PostMeta date={post.publishedAt} minutes={minutes} />
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-[#0B6A73]"
          >
            Read article
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
