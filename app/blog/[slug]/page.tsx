import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { JsonLd } from "@/app/components/json-ld";
import { CLINIC_PHONE_DISPLAY } from "@/app/lib/site-config";
import { blogArticleMetadata, blogArticleSchema, type BlogArticleSeo } from "@/app/lib/seo";
import { TEL_HREF } from "@/app/homepage/data";
import { ARTICLE_BODIES, articleWordCount } from "../articles";
import { BLOG_POSTS, getPost, readingMinutes, relatedPosts, slugify, type BlogPost } from "../data";
import { BlogHeader } from "../components/blog-header";
import { BlogFooter } from "../components/blog-footer";
import { ArticleHeader } from "../components/article-header";
import { ArticleBody } from "../components/article-body";
import { ArticleSidebar } from "../components/article-sidebar";
import { ArticleToc } from "../components/article-toc";
import { ArticleCta } from "../components/article-cta";
import { publicImageSize } from "../image-size";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
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
    wordCount: articleWordCount(post.slug),
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
  const headings = blocks.flatMap((b) => (b.type === "h2" ? [{ id: slugify(b.text), text: b.text }] : []));
  const recommended = relatedPosts(post, 4);

  return (
    <div>
      <JsonLd data={blogArticleSchema(seo)} />
      <BlogHeader />
      <main>
        <article aria-labelledby="blog-article-title" className="bg-white">
          <ArticleHeader
            post={post}
            minutes={readingMinutes(seo.wordCount)}
            imageSize={post.image ? publicImageSize(post.image) : undefined}
          />

          <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-8 sm:py-14 lg:grid lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12 lg:py-16 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">
            <div className="order-2 min-w-0 lg:order-none lg:col-start-1 lg:row-start-1">
              <ArticleBody blocks={blocks} />

              <aside
                aria-label="Medical disclaimer"
                className="mt-12 flex gap-3 rounded-2xl bg-[#F6F3EE] p-5 text-[15px] leading-relaxed text-[#46575F]"
              >
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#5B6B73]" strokeWidth={1.75} aria-hidden="true" />
                <p>
                  This article is general health information and does not replace a consultation with a doctor. In a
                  medical emergency, call us 24x7 on{" "}
                  <a href={TEL_HREF} className="font-semibold tabular-nums text-[#0B3446] underline underline-offset-4">
                    {CLINIC_PHONE_DISPLAY}
                  </a>
                </p>
              </aside>
            </div>

            <aside
              aria-label="On this page and more articles"
              className="contents lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:flex lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:self-start"
            >
              <div className="hidden lg:block lg:shrink-0">
                <ArticleToc headings={headings} />
              </div>
              <div className="order-3 mt-12 border-t border-[#0B3446]/10 pt-10 lg:mt-8 lg:flex lg:min-h-0 lg:flex-col lg:border-t-0 lg:pt-0">
                <ArticleSidebar recommended={recommended} />
              </div>
            </aside>
          </div>
        </article>

        <ArticleCta category={post.category} />
      </main>
      <BlogFooter />
    </div>
  );
}
