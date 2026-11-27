import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postHref, type BlogPost } from "../data";
import { CategoryBadge } from "./category-badge";
import { PostImage } from "./post-image";
import { PostMeta } from "./post-meta";

// The featured article: large image left, text right from 768px; stacked
// below that. One link (the title) stretched over the card, so the whole card
// is clickable. Its image is the page's LCP element, so it is the only one
// loaded with high priority.
export function FeaturedPost({ post, minutes }: { post: BlogPost; minutes?: number }) {
  return (
    <article className="group relative grid overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(11,52,70,0.04),0_16px_40px_rgba(11,52,70,0.10)] focus-within:ring-2 focus-within:ring-[#0E7C86] md:grid-cols-2 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9F1F5] md:aspect-auto md:min-h-[360px] lg:min-h-[400px]">
        <PostImage
          post={post}
          priority
          sizes="(min-width: 1280px) 710px, (min-width: 1024px) 56vw, (min-width: 768px) 50vw, 100vw"
          className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-sm font-semibold text-[#0B3446]">Featured article</span>
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#0B3446] sm:text-[1.75rem] lg:text-[2rem] lg:tracking-[-0.01em]">
          <Link
            href={postHref(post)}
            className="outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0B6A73]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-base leading-relaxed text-[#46575F]">{post.excerpt}</p>
        <div className="mt-5">
          <PostMeta date={post.publishedAt} minutes={minutes} />
        </div>
        <span
          aria-hidden="true"
          className="mt-6 inline-flex h-11 items-center gap-2 self-start rounded-lg bg-[#0E7C86] px-5 text-[15px] font-semibold text-white transition-colors group-hover:bg-[#0B6870]"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
