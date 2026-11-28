import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ChevronRight, Clock, RefreshCw } from "lucide-react";
import { CLINIC_NAME } from "@/app/lib/site-config";
import { departmentIcon, formatDate, type BlogPost } from "../data";
import { DEPARTMENT_ICONS } from "./department-icons";

type Props = {
  post: BlogPost;
  minutes: number;
  imageSize?: { width: number; height: number };
};

const CRUMB =
  "inline-flex min-h-11 items-center rounded-sm underline-offset-4 transition-colors hover:text-[#0B3446] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E7C86]";

export function ArticleHeader({ post, minutes, imageSize }: Props) {
  const Icon = DEPARTMENT_ICONS[departmentIcon(post.category)];
  const ratio = imageSize ? imageSize.width / imageSize.height : 16 / 9;
  return (
    <header>
      <div className={`bg-[#F6F3EE] ${post.image ? "pb-20 sm:pb-36 lg:pb-44" : "border-b border-[#0B3446]/10 pb-10 sm:pb-14"}`}>
        <div className="mx-auto max-w-6xl animate-[rise-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both] px-4 pt-3 sm:px-8 sm:pt-7">
          <nav aria-label="Breadcrumb">
            <ol className="flex min-w-0 items-center gap-1.5 text-sm text-[#5B6B73]">
              <li className="shrink-0">
                <Link href="/homepage" className={CRUMB}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="shrink-0">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="shrink-0">
                <Link href="/blog" className={CRUMB}>
                  Health blog
                </Link>
              </li>
              <li aria-hidden="true" className="shrink-0">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="min-w-0 truncate font-medium text-[#0B3446]">
                {post.title}
              </li>
            </ol>
          </nav>

          <p className="mt-5 sm:mt-7">
            <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-white px-3 text-[13px] font-semibold text-[#0B6A73] ring-1 ring-[#0E7C86]/20">
              <Icon className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden="true" />
              {post.category}
            </span>
          </p>
          <h1
            id="blog-article-title"
            className="mt-4 text-pretty text-[2rem] font-semibold leading-[1.15] text-[#0B3446] sm:text-[2.5rem] sm:tracking-[-0.02em] lg:text-[2.75rem]"
          >
            {post.title}
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#46575F] sm:mt-5 sm:text-xl">{post.excerpt}</p>

          <div className="mt-7 flex flex-col gap-3 border-t border-[#0B3446]/15 pt-5 text-[15px] sm:mt-8 md:flex-row md:items-center md:gap-0">
            <div className="flex items-center gap-3 md:pr-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-[#0B3446]/15">
                <Image src="/logo.png" alt="" width={1353} height={742} sizes="36px" className="h-auto w-9" />
              </span>
              <span className="flex flex-col justify-center gap-0.5 leading-tight">
                <span className="text-[15px] font-medium text-[#2A3A44]">Written by</span>
                <span className="text-base font-semibold text-[#0B3446]">{CLINIC_NAME}</span>
              </span>
            </div>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-medium tabular-nums text-[#2A3A44] md:border-l md:border-[#0B3446]/15 md:pl-6">
              <li className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-[#0B6A73]" strokeWidth={1.75} aria-hidden="true" />
                <span className="sr-only">Published </span>
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </li>
              {post.updatedAt && (
                <li className="inline-flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4 text-[#0B6A73]" strokeWidth={1.75} aria-hidden="true" />
                  Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time>
                </li>
              )}
              <li className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#0B6A73]" strokeWidth={1.75} aria-hidden="true" />
                {minutes} min read
              </li>
            </ul>
          </div>
        </div>
      </div>

      {post.image && (
        <div className="mx-auto -mt-14 max-w-6xl animate-[rise-in_0.7s_cubic-bezier(0.22,1,0.36,1)_0.12s_both] px-4 [--img-max-h:300px] sm:-mt-28 sm:px-8 sm:[--img-max-h:440px] lg:-mt-36 lg:[--img-max-h:540px]">
          <div
            style={{ aspectRatio: `${ratio}`, maxHeight: "var(--img-max-h)" }}
            className="relative w-full overflow-hidden rounded-2xl bg-white shadow-[0_16px_40px_rgba(11,52,70,0.12)] ring-1 ring-[#0B3446]/10"
          >
            <Image
              src={post.image}
              alt={post.imageAlt ?? ""}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </header>
  );
}
