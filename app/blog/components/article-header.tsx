import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CLINIC_NAME } from "@/app/lib/site-config";
import { departmentIcon, formatDate, type BlogPost } from "../data";
import { DEPARTMENT_ICONS } from "./department-icons";

type Props = { post: BlogPost; minutes: number };

// Breadcrumb, department, title, standfirst and meta on the quiet beige band;
// the article image (the page's one rich element and its LCP) sits half over
// the band's edge. Articles without an image yet simply have none here.
export function ArticleHeader({ post, minutes }: Props) {
  const Icon = DEPARTMENT_ICONS[departmentIcon(post.category)];
  return (
    <header>
      <div className={`bg-[#F6F3EE] ${post.image ? "pb-24 sm:pb-40" : "border-b border-[#0B3446]/10 pb-12 sm:pb-16"}`}>
        <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-8 sm:pt-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex min-w-0 items-center gap-1.5 text-sm text-[#5B6B73]">
              <li className="shrink-0">
                <Link href="/homepage" className="transition-colors hover:text-[#0B3446]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="shrink-0">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="shrink-0">
                <Link href="/blog" className="transition-colors hover:text-[#0B3446]">
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

          <p className="mt-8 flex items-center gap-2 text-sm font-medium text-[#0B6A73] sm:mt-10">
            <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            {post.category}
          </p>
          <h1
            id="blog-article-title"
            className="mt-3 max-w-4xl text-[2rem] font-semibold leading-tight text-[#0B3446] sm:text-5xl sm:leading-[1.1] sm:tracking-[-0.02em]"
          >
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#46575F] sm:text-xl">{post.excerpt}</p>
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#5B6B73]">
            <span>By {CLINIC_NAME}</span>
            <span aria-hidden="true" className="text-[#0B3446]/25">
              ·
            </span>
            <time dateTime={post.publishedAt} className="tabular-nums">
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true" className="text-[#0B3446]/25">
              ·
            </span>
            <span className="tabular-nums">{minutes} min read</span>
          </p>
        </div>
      </div>

      {post.image && (
        <div className="mx-auto -mt-16 max-w-5xl px-4 sm:-mt-28 sm:px-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#E9F1F5] ring-1 ring-[#0B3446]/10">
            <Image
              src={post.image}
              alt={post.imageAlt ?? ""}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </header>
  );
}
