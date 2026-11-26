import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, postHref, type BlogPost } from "../data";
import { PostImage } from "./post-image";

// One article in the listing grid. The title is the only link (stretched over
// the whole card), so screen readers hear one clear link per article. Hover
// is a colour change only: the hairline darkens and the title takes the accent.
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-[#0B3446]/10 transition-colors duration-150 hover:ring-[#0B3446]/25 focus-within:ring-2 focus-within:ring-[#0E7C86]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#E9F1F5]">
        <PostImage
          post={post}
          // Content column next to the 256px sidebar: 3 × 288px cards from
          // 1280px, 2 × ~320px from 1024px, 2 columns from 640px.
          sizes="(min-width: 1280px) 288px, (min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-medium text-[#0B6A73]">{post.category}</p>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug text-[#0B3446]">
          <Link
            href={postHref(post)}
            className="line-clamp-2 outline-none transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-[#0B6A73]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-[15px] leading-relaxed text-[#46575F]">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-[#0B3446]/10 pt-4 text-sm">
          <time dateTime={post.publishedAt} className="tabular-nums text-[#5B6B73]">
            {formatDate(post.publishedAt)}
          </time>
          <span aria-hidden="true" className="inline-flex items-center gap-1.5 font-semibold text-[#0B6A73]">
            Read more
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
