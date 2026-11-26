import type { Metadata } from "next";
import { JsonLd } from "@/app/components/json-ld";
import { contactMetadata, contactSchema } from "@/app/lib/seo";
import { BlogHeader } from "@/app/blog/components/blog-header";
import { BlogFooter } from "@/app/blog/components/blog-footer";
import { ContactPageHeader } from "./components/contact-page-header";
import { ContactSection } from "./components/contact-section";

export const metadata: Metadata = contactMetadata();

const schema = contactSchema();

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={schema} />
      <BlogHeader />
      <main>
        <ContactPageHeader />
        <ContactSection />
      </main>
      <BlogFooter />
    </div>
  );
}
