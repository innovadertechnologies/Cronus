import { articleMinutes } from "../articles";
import { BLOG_CATEGORIES, BLOG_POSTS, FEATURED_POST, POSTS_PER_PAGE, departmentIcon } from "../data";
import { BlogCard } from "./blog-card";
import { BlogListing } from "./blog-listing";
import { BlogPageHeader } from "./blog-page-header";
import { FeaturedPost } from "./featured-post";

// Hero, filter pills, featured article, the latest articles grid and
// pagination. Cards are rendered here on the server; the listing only shows
// and hides them.
export function BlogGrid() {
  const items = BLOG_POSTS.map((post) => ({
    id: post.id,
    category: post.category,
    featured: post.id === FEATURED_POST.id,
    card: <BlogCard post={post} minutes={articleMinutes(post.slug)} />,
  }));

  return (
    <BlogListing
      intro={<BlogPageHeader />}
      items={items}
      featured={<FeaturedPost post={FEATURED_POST} minutes={articleMinutes(FEATURED_POST.slug)} />}
      categories={BLOG_CATEGORIES.map((name) => ({ name, icon: departmentIcon(name) }))}
      perPage={POSTS_PER_PAGE}
    />
  );
}
