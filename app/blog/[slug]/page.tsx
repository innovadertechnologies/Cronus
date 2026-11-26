import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { JsonLd } from "@/app/components/json-ld";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { blogArticleMetadata, blogArticleSchema, type BlogArticleSeo } from "@/app/lib/seo";
import { TEL_HREF } from "@/app/homepage/data";
import { ARTICLE_BODIES } from "../articles";
import { BLOG_POSTS, getPost, readingMinutes, relatedPosts, type BlogPost } from "../data";
import { BlogHeader } from "../components/blog-header";
import { BlogFooter } from "../components/blog-footer";
import { BlogCta } from "../components/blog-cta";
import { BlogCard } from "../components/blog-card";
import { ArticleHeader } from "../components/article-header";
import { ArticleBody } from "../components/article-body";
import { ArticleSidebar } from "../components/article-sidebar";

// Every article is built at build time; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function wordCount(post: BlogPost) {
  const text = (ARTICLE_BODIES[post.slug] ?? [])
    .map((b) => (b.type === "ul" ? b.items.join(" ") : b.text))
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

function seoFor(post: BlogPost): BlogArticleSeo {
  return {
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    image: post.image,
    imageAlt: post.imageAlt,
    wordCount: wordCount(post),
  };
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? blogArticleMetadata(seoFor(post)) : {};
}

export default async function BlogArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  const blocks = post ? ARTICLE_BODIES[post.slug] : undefined;
  if (!post || !blocks) notFound();

  const seo = seoFor(post);
  const headings = blocks.flatMap((b) => (b.type === "h2" ? [b.text] : []));
  const related = relatedPosts(post);

  return (
    <div>
      <JsonLd data={blogArticleSchema(seo)} />
      <BlogHeader />
      <main>
        <article aria-labelledby="blog-article-title" className="bg-white">
          <ArticleHeader post={post} minutes={readingMinutes(seo.wordCount)} />

          <div className="mx-auto grid max-w-5xl gap-12 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1fr)_256px] lg:gap-16">
            <div className="min-w-0">
              <ArticleBody blocks={blocks} />

              {/* Health information, not a consultation */}
              <aside
                aria-label="Medical disclaimer"
                className="mt-12 flex max-w-[68ch] gap-3 rounded-2xl border border-[#0B3446]/10 p-5 text-[15px] leading-relaxed text-[#46575F]"
              >
                <Info className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#5B6B73]" strokeWidth={1.5} aria-hidden="true" />
                <p>
                  This article is general health information and does not replace a consultation with a doctor. In a
                  medical emergency, call us 24x7 on{" "}
                  <a href={TEL_HREF} className="font-semibold tabular-nums text-[#0B3446] underline underline-offset-4">
                    {CLINIC_PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </aside>
            </div>

            <ArticleSidebar category={post.category} headings={headings} />
          </div>
        </article>

        {related.length > 0 && (
          <section aria-labelledby="blog-related-title" className="border-t border-[#0B3446]/10 bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <h2
                id="blog-related-title"
                className="text-[1.75rem] font-semibold leading-tight text-[#0B3446] sm:text-[2rem] sm:tracking-[-0.02em]"
              >
                More from the health blog
              </h2>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <li key={p.id}>
                    <BlogCard post={p} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <BlogCta />
      </main>
      <BlogFooter />
    </div>
  );
}
