import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { blogMetadata, blogSchema } from "@/app/lib/seo";
import { BlogHeader } from "./components/blog-header";
import { BlogFooter } from "./components/blog-footer";
import { BlogGrid } from "./components/blog-grid";
import { BlogCta } from "./components/blog-cta";

export const metadata: Metadata = blogMetadata();

const schema = blogSchema();

// Static blog listing. Header and footer are copies of the /homepage ones
// (see components/blog-header.tsx and blog-footer.tsx).
export default function BlogPage() {
  return (
    <div>
      <JsonLd data={schema} />
      <BlogHeader />
      <main>
        <BlogGrid />
        <BlogCta />
      </main>
      <BlogFooter />
    </div>
  );
}
