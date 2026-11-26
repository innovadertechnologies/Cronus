// Content for the /blog listing page.
//
// Categories are the hospital's departments exactly as the site already
// names them (the /homepage Departments section), so spelling and order stay
// in step with the rest of the site.
//
// The articles below are SAMPLE entries for the static listing. Have them
// written and medically reviewed before publishing real content. The shape
// (id, slug, title, excerpt, category, image, publishedAt, featured) is ready
// to be filled from a CMS or API later.

import { DEPARTMENT_CARDS, NAV_LINKS, type Department } from "@/app/homepage/data";

export type BlogCategory = Department["name"];

export const BLOG_CATEGORIES: BlogCategory[] = DEPARTMENT_CARDS.map((d) => d.name);

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  // Placeholder images from /public; without one the card shows the
  // department's icon instead. Replace with article images later.
  image?: string;
  imageAlt?: string;
  publishedAt: string; // ISO date
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "knee-osteoarthritis-early-signs",
    title: "Knee osteoarthritis: early signs and when to see an orthopaedic specialist",
    excerpt:
      "Morning stiffness, pain on the stairs and a knee that swells after a long walk can all be early signs of osteoarthritis. Here is what they mean, what you can do at home, and when an orthopaedic assessment helps.",
    category: "Orthopaedics",
    image: "/Osteoarthritis.png",
    imageAlt: "Illustration of a knee joint affected by osteoarthritis",
    publishedAt: "2026-11-18",
    featured: true,
  },
  {
    id: "2",
    slug: "sciatica-or-back-pain",
    title: "Sciatica or ordinary back pain? How to tell the difference",
    excerpt:
      "Pain that travels down one leg, tingling or numbness point to an irritated nerve rather than a strained muscle. Learn the common causes and the symptoms that need a spine specialist.",
    category: "Spine Care",
    image: "/sp1.png",
    imageAlt: "Illustration of the lower spine highlighting the source of back pain",
    publishedAt: "2026-11-10",
  },
  {
    id: "3",
    slug: "first-antenatal-visit",
    title: "Your first antenatal visit: what to expect and what to bring",
    excerpt:
      "The first pregnancy check-up covers your health history, routine tests and a plan for the months ahead. A simple guide to preparing for it, with a checklist of documents and questions.",
    category: "Obstetrics & Gynaecology",
    image: "/First_Consultation.png",
    imageAlt: "Gynaecologist talking with a pregnant woman during a consultation",
    publishedAt: "2026-11-04",
  },
  {
    id: "4",
    slug: "inguinal-hernia-symptoms-treatment",
    title: "Inguinal hernia: symptoms, risks of waiting and treatment options",
    excerpt:
      "A bulge in the groin that grows when you cough or lift is the classic sign. Find out why hernias do not heal on their own and how laparoscopic repair works.",
    category: "Hernia Surgery",
    image: "/inguinalharnia.png",
    imageAlt: "Illustration of an inguinal hernia in the groin",
    publishedAt: "2026-10-28",
  },
  {
    id: "5",
    slug: "gallstones-symptoms-surgery",
    title: "Gallstones: common symptoms and when surgery is recommended",
    excerpt:
      "Many gallstones cause no trouble, but pain under the right ribs after a fatty meal often does. What causes gallstones, how they are diagnosed and when gallbladder removal is advised.",
    category: "Gallbladder Surgery",
    image: "/gbc1.png",
    imageAlt: "Illustration of a gallbladder containing gallstones",
    publishedAt: "2026-10-21",
  },
  {
    id: "6",
    slug: "kidney-stones-warning-signs",
    title: "Kidney stones: warning signs and everyday prevention tips",
    excerpt:
      "Sudden pain in the side or back, blood in the urine and frequent urges to pass urine can signal a kidney stone. Simple habits that lower the risk of stones coming back.",
    category: "Urology",
    image: "/kidney_stone.png",
    imageAlt: "Illustration of a kidney with a kidney stone",
    publishedAt: "2026-10-14",
  },
  {
    id: "7",
    slug: "cough-lasting-two-weeks-tb",
    title: "A cough that lasts more than two weeks: when to get tested for TB",
    excerpt:
      "A persistent cough with fever, night sweats or weight loss should be checked. How tuberculosis is tested for, and why completing treatment matters.",
    category: "Internal Medicine",
    image: "/docimage.png",
    imageAlt: "Doctor reviewing a chest scan",
    publishedAt: "2026-10-07",
  },
  {
    id: "8",
    slug: "chest-pain-emergency-signs",
    title: "Chest pain: the symptoms that need emergency care",
    excerpt:
      "Not all chest pain is a heart attack, but some signs should never wait. Learn which symptoms mean you should call for emergency help straight away.",
    category: "Cardiology",
    publishedAt: "2026-09-30",
  },
  {
    id: "9",
    slug: "headache-red-flags",
    title: "Headaches that need attention: red-flag symptoms to know",
    excerpt:
      "Most headaches are harmless, yet a sudden severe headache, weakness or confusion needs urgent assessment. A guide to the warning signs and when to see a specialist.",
    category: "Neuro Surgery",
    publishedAt: "2026-09-23",
  },
  {
    id: "10",
    slug: "recurring-sinus-problems",
    title: "Recurring sinus trouble: causes and when to see an ENT specialist",
    excerpt:
      "Blocked nose, facial pressure and repeated infections can come from allergies, a deviated septum or chronic sinusitis. How each is identified and treated.",
    category: "ENT",
    publishedAt: "2026-09-16",
  },
  {
    id: "11",
    slug: "screen-time-eye-strain",
    title: "Screen time and eye strain: simple habits that help",
    excerpt:
      "Dry, tired eyes after a day at the screen are common. Easy changes to lighting, distance and breaks, and the symptoms that call for an eye examination.",
    category: "Ophthalmology",
    publishedAt: "2026-09-09",
  },
  {
    id: "12",
    slug: "wisdom-tooth-pain",
    title: "Wisdom tooth pain: when is extraction needed?",
    excerpt:
      "Wisdom teeth that come in crooked or only partly can trap food and cause infection. What the dentist looks for and what recovery after extraction involves.",
    category: "Dental Surgery",
    publishedAt: "2026-09-02",
  },
];

export const FEATURED_POST = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

export function postHref(post: BlogPost) {
  return `/blog/${post.slug}`;
}

export function getPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// The department's own page when it has one, otherwise the departments
// section of /homepage.
export function departmentHref(category: BlogCategory) {
  const dept = DEPARTMENT_CARDS.find((d) => d.name === category);
  return dept?.href.startsWith("/") ? dept.href : "/homepage#departments";
}

// Up to three other articles: same department first, then the newest.
export function relatedPosts(post: BlogPost, count = 3) {
  const others = BLOG_POSTS.filter((p) => p.id !== post.id);
  const same = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...same, ...rest].slice(0, count);
}

export function departmentIcon(category: BlogCategory): Department["icon"] {
  return DEPARTMENT_CARDS.find((d) => d.name === category)?.icon ?? "stethoscope";
}

// Fixed format ("18 Nov 2026"), the same on server and client.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

// Header and footer links point at the /homepage sections they come from.
export const BLOG_NAV_LINKS = NAV_LINKS.map((link) => ({ ...link, href: `/homepage${link.href}` }));
export const APPOINTMENT_HREF = "/homepage#appointment";

export const POSTS_PER_PAGE = 6;

// Reading time at ~200 words a minute, at least one minute.
export function readingMinutes(words: number) {
  return Math.max(1, Math.round(words / 200));
}

// "What you can do at home" → "what-you-can-do-at-home" (heading anchors).
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
