import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { postHref, type BlogPost } from "../data";
import { CategoryBadge } from "./category-badge";
import { PostImage } from "./post-image";
import { PostMeta } from "./post-meta";

export function FeaturedPost({ post, minutes }: { post: BlogPost; minutes?: number }) {
  return (
    <article className="group relative grid overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(11,52,70,0.04),0_16px_40px_rgba(11,52,70,0.10)] focus-within:ring-2 focus-within:ring-[#0E7C86] lg:grid-cols-2 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9F1F5] md:aspect-[16/8] lg:aspect-auto lg:min-h-[420px]">
        <PostImage
          post={post}
          priority
          sizes="(min-width: 1280px) 730px, (min-width: 1024px) 50vw, 100vw"
          className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-white px-3 text-[13px] font-semibold text-[#0B3446] ring-1 ring-inset ring-[#0B3446]/15">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E7C86]" aria-hidden="true" />
            Featured article
          </span>
          <CategoryBadge category={post.category} />
        </div>
        <h3 className="mt-5 text-balance text-2xl font-semibold leading-tight text-[#0B3446] sm:text-[1.75rem] lg:text-[2rem] lg:tracking-[-0.01em]">
          <Link
            href={postHref(post)}
            className="outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0B6A73]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 line-clamp-3 text-base leading-relaxed text-[#46575F] lg:text-[17px]">{post.excerpt}</p>
        <div className="mt-6 border-t border-[#0B3446]/10 pt-5">
          <PostMeta date={post.publishedAt} minutes={minutes} />
        </div>
        <span
          aria-hidden="true"
          className="mt-5 inline-flex h-12 items-center gap-2 self-start rounded-lg bg-[#0E7C86] px-5 text-[15px] font-semibold text-white transition-colors group-hover:bg-[#0B6870]"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
