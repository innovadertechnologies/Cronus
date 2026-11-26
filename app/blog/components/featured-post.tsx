import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, postHref, type BlogPost } from "../data";
import { PostImage } from "./post-image";

// The featured article as the first, wider card of the listing (image left,
// text right from 640px; stacked on phones). One clear link: the title,
// stretched over the card. Its image is the page's LCP element, so it is the
// only one loaded with high priority.
export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <article className="group relative grid overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-colors duration-150 hover:ring-[#0B3446]/25 focus-within:ring-2 focus-within:ring-[#0E7C86] sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9F1F5] sm:aspect-auto sm:min-h-[280px]">
        <PostImage post={post} priority sizes="(min-width: 1280px) 410px, (min-width: 640px) 42vw, 100vw" />
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-medium text-[#0B6A73]">Featured</span>
          <span aria-hidden="true" className="text-[#0B3446]/25">
            ·
          </span>
          <span className="text-[#46575F]">{post.category}</span>
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-[#0B3446] sm:text-2xl">
          <Link
            href={postHref(post)}
            className="outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0B6A73]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-[#46575F]">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
          <time dateTime={post.publishedAt} className="tabular-nums text-[#5B6B73]">
            {formatDate(post.publishedAt)}
          </time>
          <span aria-hidden="true" className="inline-flex items-center gap-1.5 font-semibold text-[#0B6A73]">
            Read article
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
