import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Centred blog hero: breadcrumb, label, H1 and intro.
export function BlogPageHeader() {
  return (
    <div className="text-center">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center justify-center gap-1.5 text-sm text-[#5B6B73]">
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
      <p className="mt-6 text-sm font-medium text-[#0B6A73]">HEALTH LIBRARY</p>
      <h1
        id="blog-title"
        className="mt-3 text-balance text-[2rem] font-semibold leading-tight text-[#0B3446] sm:text-[2.75rem] sm:tracking-[-0.02em] lg:text-5xl"
      >
        Health Insights &amp; Medical Blogs
      </h1>
      <p className="mx-auto mt-4 text-pretty text-base leading-relaxed text-[#46575F] sm:text-[17px]">
        Plain-language guides to common symptoms, conditions and treatments, and when it is time to see a specialist
        at Cronus.
      </p>
    </div>
  );
}
