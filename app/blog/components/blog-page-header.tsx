import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Compact page header: says straight away that this is the blog listing.
export function BlogPageHeader() {
  return (
    <section aria-labelledby="blog-title" className="border-b border-[#0B3446]/10 bg-[#F6F3EE]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-sm text-[#5B6B73]">
            <li>
              <Link href="/homepage" className="transition-colors hover:text-[#0B3446]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-[#0B3446]">
              Health blog
            </li>
          </ol>
        </nav>
        <div className="mt-6 max-w-3xl">
          <h1
            id="blog-title"
            className="text-[2rem] font-semibold leading-tight text-[#0B3446] sm:text-5xl sm:tracking-[-0.02em]"
          >
            Health insights &amp; medical blogs
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#46575F]">
            Explore expert health insights, medical advice, and practical tips to help you make informed decisions
            about your health.
          </p>
        </div>
      </div>
    </section>
  );
}
