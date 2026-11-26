import type { MetadataRoute } from "next";
import { BLOG, LANDING_PAGES, SITE_URL } from "@/app/lib/seo";
import { BLOG_POSTS } from "@/app/blog/data";

// Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: [`${SITE_URL}/hospitalog.jpeg`],
  };
  // The blog listing and every article.
  const blog: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}${BLOG.path}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}${BLOG.path}/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      ...(post.image ? { images: [`${SITE_URL}${encodeURI(post.image)}`] } : {}),
    })),
  ];

  return [home, ...Object.values(LANDING_PAGES).map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: [`${SITE_URL}${page.ogImage}`],
  })), ...blog];
}
