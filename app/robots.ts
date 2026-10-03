import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/lib/seo";

// Served at /robots.txt. /thank-you stays crawlable so Google can read its
// noindex tag; blocking it here would hide that tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
