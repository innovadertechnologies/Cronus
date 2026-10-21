import type { MetadataRoute } from "next";
import { LANDING_PAGES, SITE_URL } from "@/app/lib/seo";

// Served at /sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap[number] = {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: [`${SITE_URL}/hospitalog.jpeg`],
  };
  return [home, ...Object.values(LANDING_PAGES).map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    images: [`${SITE_URL}${page.ogImage}`],
  }))];
}
