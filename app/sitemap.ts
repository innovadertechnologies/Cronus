import type { MetadataRoute } from "next";
import { LANDING_PAGES, SITE_URL } from "@/app/lib/seo";

// Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(LANDING_PAGES).map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    images: [`${SITE_URL}${page.ogImage}`],
  }));
}
