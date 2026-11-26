import { BLOG_CATEGORIES, BLOG_POSTS, FEATURED_POST, POSTS_PER_PAGE, departmentIcon } from "../data";
import { BlogCard } from "./blog-card";
import { BlogListing } from "./blog-listing";
import { FeaturedPost } from "./featured-post";

// The listing: category sidebar, then the featured article, the latest
// articles grid and pagination.
export function BlogGrid() {
  const items = BLOG_POSTS.map((post) => ({
    id: post.id,
    category: post.category,
    featured: Boolean(post.featured),
    card: <BlogCard post={post} />,
  }));

  return (
    <section aria-label="Articles" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <BlogListing
          items={items}
          featured={<FeaturedPost post={FEATURED_POST} />}
          categories={BLOG_CATEGORIES.map((name) => ({ name, icon: departmentIcon(name) }))}
          perPage={POSTS_PER_PAGE}
        />
      </div>
    </section>
  );
}
