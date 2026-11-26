import type { Metadata } from "next";
import {
  CLINIC_ADDRESS,
  CLINIC_EMAIL,
  CLINIC_NAME,
  CLINIC_PHONE_TEL,
  MAIN_SITE_URL,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/app/lib/site-config";

export { MAIN_SITE_URL, SITE_URL };

const HOSPITAL_ID = `${MAIN_SITE_URL}/#hospital`;

export type Faq = { question: string; answer: string };

type Doctor = {
  name: string;
  jobTitle: string;
  specialty: string;
  qualifications: string;
  image?: string;
};

type MedicalTopic = {
  type: "MedicalProcedure" | "MedicalCondition" | "MedicalTherapy";
  name: string;
  alternateName?: string;
  description?: string;
};

export type LandingPage = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogImageAlt: string;
  breadcrumb: string;
  specialty: string;
  topics: MedicalTopic[];
  doctors: Doctor[];
};

const DR_SHIV_CHOPRA: Doctor = {
  name: "Dr. Shiv Chopra",
  jobTitle: "General & Laparoscopic Surgeon",
  specialty: "Surgical",
  qualifications: "MBBS, MS – General Surgery",
};

const DR_SANDEEP_SINGH: Doctor = {
  name: "Dr. Sandeep Singh",
  jobTitle: "Orthopaedics & Spine Specialist",
  specialty: "Musculoskeletal",
  qualifications: "MBBS – MAMC, New Delhi; MS – Orthopaedics, UCMS, New Delhi; Fellowship in Spine Surgery, VGH, Canada",
  image: "/spdoc.jpeg",
};

const DR_SAURABH_KUMAR_SINHA: Doctor = {
  name: "Dr. Saurabh Kumar Sinha",
  jobTitle: "Urologist & Genito-Urinary Surgeon",
  specialty: "Urologic",
  qualifications: "MBBS, MS – General Surgery, MCh – Urology/Genito-Urinary Surgery",
};

export const LANDING_PAGES = {
  hernia: {
    path: "/hernia",
    title: "Best Hernia Treatment in Delhi-NCR | Cronus Multispeciality Hospital",
    description:
      "Get expert hernia evaluation and advanced laparoscopic hernia surgery at Cronus Multispeciality Hospital, Chhatarpur, Delhi-NCR. 16000+ surgeries, cashless insurance. Book a consultation today.",
    keywords: [
      "hernia treatment in Delhi",
      "laparoscopic hernia surgery",
      "hernia surgeon Delhi NCR",
      "inguinal hernia surgery",
      "umbilical hernia treatment",
      "hernia hospital Chhatarpur",
    ],
    ogImage: "/og/hernia.jpg",
    ogImageAlt: "Hernia treatment at Cronus Multispeciality Hospital",
    breadcrumb: "Hernia Treatment",
    specialty: "Surgical",
    topics: [
      { type: "MedicalCondition", name: "Hernia" },
      {
        type: "MedicalProcedure",
        name: "Laparoscopic Hernia Repair",
        description:
          "Minimally invasive hernia surgery performed through small incisions using a camera and specialised instruments.",
      },
    ],
    doctors: [DR_SHIV_CHOPRA],
  },
  gallbladder: {
    path: "/gallbladder-surgery",
    title: "Best Laparoscopic Gallbladder Surgery Hospital in Delhi | Cronus Multispeciality Hospital",
    description:
      "Expert surgical evaluation and minimally invasive laparoscopic gallbladder surgery for gallstones, infection and inflammation at Cronus Multispeciality Hospital, Delhi. Book a consultation today.",
    keywords: [
      "gallbladder surgery in Delhi",
      "laparoscopic cholecystectomy",
      "gallbladder stone treatment",
      "gallstone surgery Delhi NCR",
      "gallbladder surgeon Chhatarpur",
    ],
    ogImage: "/og/gallbladder-surgery.jpg",
    ogImageAlt: "Laparoscopic gallbladder surgery at Cronus Multispeciality Hospital",
    breadcrumb: "Gallbladder Surgery",
    specialty: "Gastroenterologic",
    topics: [
      { type: "MedicalCondition", name: "Gallstones", alternateName: "Cholelithiasis" },
      { type: "MedicalCondition", name: "Gallbladder Inflammation", alternateName: "Cholecystitis" },
      {
        type: "MedicalProcedure",
        name: "Laparoscopic Gallbladder Surgery",
        alternateName: "Laparoscopic Cholecystectomy",
      },
    ],
    doctors: [DR_SHIV_CHOPRA],
  },
  kneeHip: {
    path: "/knee-and-hip",
    title: "Knee & Hip Replacement Surgery in Chhatarpur, Delhi | Cronus Multispeciality Hospital",
    description:
      "Advanced orthopaedic care for pain-free living. Expert knee & hip replacement surgery from doctors with 30+ years of orthopaedic experience and 1,000+ successful surgeries in Chhatarpur, Delhi.",
    keywords: [
      "knee replacement surgery Delhi",
      "hip replacement surgery Delhi",
      "joint replacement hospital Chhatarpur",
      "orthopaedic surgeon Delhi NCR",
      "knee pain treatment",
    ],
    ogImage: "/og/knee-and-hip.jpg",
    ogImageAlt: "Knee and hip replacement surgery at Cronus Multispeciality Hospital",
    breadcrumb: "Knee & Hip Replacement",
    specialty: "Musculoskeletal",
    topics: [
      { type: "MedicalCondition", name: "Osteoarthritis" },
      { type: "MedicalProcedure", name: "Knee Replacement Surgery", alternateName: "Total Knee Arthroplasty" },
      { type: "MedicalProcedure", name: "Hip Replacement Surgery", alternateName: "Total Hip Arthroplasty" },
    ],
    doctors: [
      {
        name: "Dr. Dheeraj Nath",
        jobTitle: "Orthopedic Surgeon & Joint Replacement Surgeon",
        specialty: "Musculoskeletal",
        qualifications: "MBBS, MS – Orthopaedics",
      },
      DR_SANDEEP_SINGH,
    ],
  },
  maternity: {
    path: "/maternity",
    title: "Complete Maternity Care in Delhi-NCR | Cronus Multispeciality Hospital",
    description:
      "Expert pregnancy & maternity care designed around you and your baby. Antenatal care, normal & C-section delivery and postnatal care under one roof at Cronus Hospital, Chhatarpur, Delhi.",
    keywords: [
      "maternity hospital in Delhi",
      "pregnancy care Delhi NCR",
      "gynaecologist in Chhatarpur",
      "normal delivery hospital",
      "antenatal and postnatal care",
    ],
    ogImage: "/og/maternity.jpg",
    ogImageAlt: "Maternity care at Cronus Multispeciality Hospital",
    breadcrumb: "Maternity Care",
    specialty: "Obstetric",
    topics: [
      { type: "MedicalTherapy", name: "Antenatal Care" },
      { type: "MedicalProcedure", name: "Normal Delivery" },
      { type: "MedicalProcedure", name: "Caesarean Section", alternateName: "C-section" },
      { type: "MedicalTherapy", name: "Postnatal Care" },
    ],
    doctors: [
      {
        name: "Dr. Kumkum Sharma",
        jobTitle: "Gynecologist & Obstetrician",
        specialty: "Obstetric",
        qualifications: "MBBS, MS – Obstetrics & Gynaecology, DGO",
        image: "/DR KUMKUM SHARMA.png",
      },
      {
        name: "Dr. Nilotpala Mohanty",
        jobTitle: "Gynecologist, Obstetrician & Infertility Specialist",
        specialty: "Obstetric",
        qualifications: "MBBS, MD – Obstetrics & Gynaecology",
        image: "/dr nilo.webp",
      },
    ],
  },
  spine: {
    path: "/spine",
    title: "Back Pain & Sciatica Treatment in Chhatarpur, Delhi | Cronus Multispeciality Hospital",
    description:
      "Expert spine evaluation and personalised surgical & non-surgical treatment for back pain, sciatica and slipped disc from Dr. Sandeep Singh (30+ years experience) at Cronus Multispeciality Hospital, Chhatarpur.",
    keywords: [
      "back pain treatment Delhi",
      "sciatica treatment Chhatarpur",
      "slipped disc treatment",
      "spine specialist Delhi NCR",
      "discectomy surgery Delhi",
    ],
    ogImage: "/og/spine.jpg",
    ogImageAlt: "Spine care with Dr. Sandeep Singh at Cronus Multispeciality Hospital",
    breadcrumb: "Spine Treatment",
    specialty: "Musculoskeletal",
    topics: [
      { type: "MedicalCondition", name: "Sciatica" },
      { type: "MedicalCondition", name: "Slipped Disc", alternateName: "Herniated Disc" },
      { type: "MedicalCondition", name: "Back Pain" },
      { type: "MedicalProcedure", name: "Discectomy" },
    ],
    doctors: [DR_SANDEEP_SINGH],
  },
  urology: {
    path: "/urology",
    title: "Kidney Stone & Urology Treatment in Chhatarpur, Delhi | Cronus Multispeciality Hospital",
    description:
      "Expert urological care and kidney stone treatment with advanced laparoscopic surgery from Dr. Saurabh Kumar Sinha (22+ years experience) at Cronus Multispeciality Hospital, Chhatarpur, Delhi.",
    keywords: [
      "kidney stone treatment Delhi",
      "urologist Chhatarpur",
      "PCNL surgery Delhi",
      "laser kidney stone treatment",
      "urology hospital Delhi NCR",
      "prostate treatment Delhi",
    ],
    ogImage: "/og/urology.jpg",
    ogImageAlt: "Urology care with Dr. Saurabh Kumar Sinha at Cronus Multispeciality Hospital",
    breadcrumb: "Urology Treatment",
    specialty: "Urologic",
    topics: [
      { type: "MedicalCondition", name: "Kidney Stones", alternateName: "Nephrolithiasis" },
      { type: "MedicalCondition", name: "Urinary Tract Problems" },
      { type: "MedicalCondition", name: "Prostate Problems" },
      {
        type: "MedicalProcedure",
        name: "PCNL Surgery",
        description: "Percutaneous Nephrolithotomy for kidney stone removal.",
      },
      { type: "MedicalProcedure", name: "Ureteroscopy", alternateName: "URS" },
      { type: "MedicalProcedure", name: "Laser Kidney Stone Treatment", alternateName: "RIRS" },
    ],
    doctors: [DR_SAURABH_KUMAR_SINHA],
  },
} satisfies Record<string, LandingPage>;

export function pageMetadata(page: LandingPage): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      title: page.title,
      description: page.description,
      images: [{ url: page.ogImage, width: 1200, height: 630, alt: page.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.ogImage],
    },
  };
}

const absolute = (path: string) => `${SITE_URL}${encodeURI(path)}`;

function hospitalSchema() {
  return {
    "@type": "Hospital",
    "@id": HOSPITAL_ID,
    name: CLINIC_NAME,
    url: MAIN_SITE_URL,
    logo: absolute("/logo.png"),
    image: absolute("/hospitalog.jpeg"),
    telephone: CLINIC_PHONE_TEL,
    email: CLINIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Feet Rd, Phase 1, Chhatarpur Enclave Phase 2, Chhatarpur",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110074",
      addressCountry: "IN",
    },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(CLINIC_ADDRESS)}`,
    areaServed: "Delhi-NCR",
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

// One JSON-LD @graph per landing page: the hospital, the page itself, what
// it is about, the doctors, breadcrumbs and (when present) the FAQs.
export function landingPageSchema(page: LandingPage, faqs: Faq[] = []) {
  const url = absolute(page.path);
  const doctors = page.doctors.map((doctor) => ({
    "@type": "Physician",
    "@id": `${url}#${doctor.name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/-$/, "")}`,
    name: doctor.name,
    jobTitle: doctor.jobTitle,
    description: `${doctor.jobTitle} at ${CLINIC_NAME}. ${doctor.qualifications}.`,
    medicalSpecialty: `https://schema.org/${doctor.specialty}`,
    image: doctor.image ? absolute(doctor.image) : undefined,
    telephone: CLINIC_PHONE_TEL,
    address: hospitalSchema().address,
    hospitalAffiliation: { "@id": HOSPITAL_ID },
  }));

  const graph: Record<string, unknown>[] = [
    hospitalSchema(),
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      primaryImageOfPage: absolute(page.ogImage),
      specialty: `https://schema.org/${page.specialty}`,
      about: page.topics.map(({ type, ...topic }) => ({ "@type": type, ...topic })),
      publisher: { "@id": HOSPITAL_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    ...doctors,
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: MAIN_SITE_URL },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// ---------------------------------------------------------------------------
// /homepage – the multispeciality hospital home page (not a single-treatment
// landing page, so it has its own metadata and schema builders).
// ---------------------------------------------------------------------------

export const HOMEPAGE = {
  path: "/homepage",
  title: `${CLINIC_NAME} | Multispeciality Hospital in Chhatarpur, South Delhi`,
  description:
    "Cronus Multispeciality Hospital, Chhatarpur, South Delhi – 40+ specialities, 24x7 emergency, ICU, in-house diagnostics and pharmacy. Book an appointment, call or WhatsApp us today.",
  keywords: [
    "multispeciality hospital in Chhatarpur",
    "hospital in South Delhi",
    "24x7 emergency hospital Delhi",
    "best hospital near Chhatarpur",
    "Cronus Hospital",
  ],
  ogImage: "/hptl.png",
  ogImageAlt: `${CLINIC_NAME} building, Chhatarpur`,
};

export function homepageMetadata(): Metadata {
  const { path, title, description, keywords, ogImage, ogImageAlt } = HOMEPAGE;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      title,
      description,
      images: [{ url: ogImage, width: 1254, height: 1254, alt: ogImageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

// Hospital + the page itself + (when present) its FAQs, as one JSON-LD @graph.
export function homepageSchema(faqs: Faq[] = []) {
  const url = absolute(HOMEPAGE.path);

  const graph: Record<string, unknown>[] = [
    hospitalSchema(),
    {
      "@type": "MedicalWebPage",
      "@id": `${url}#webpage`,
      url,
      name: HOMEPAGE.title,
      description: HOMEPAGE.description,
      inLanguage: "en-IN",
      primaryImageOfPage: absolute(HOMEPAGE.ogImage),
      about: { "@id": HOSPITAL_ID },
      publisher: { "@id": HOSPITAL_ID },
    },
  ];

  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// ---------------------------------------------------------------------------
// /blog – the health articles listing page.
// ---------------------------------------------------------------------------

export const BLOG = {
  path: "/blog",
  title: `Health Insights & Medical Blogs | ${CLINIC_NAME}`,
  description:
    "Health articles from Cronus Multispeciality Hospital, Chhatarpur: practical guidance on orthopaedics, spine care, pregnancy, urology, surgery and more, to help you make informed decisions about your health.",
  ogImage: "/hptl.png",
  ogImageAlt: `${CLINIC_NAME} building, Chhatarpur`,
};

export function blogMetadata(): Metadata {
  const { path, title, description, ogImage, ogImageAlt } = BLOG;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      title,
      description,
      images: [{ url: ogImage, width: 1254, height: 1254, alt: ogImageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

// Hospital + the listing page as a CollectionPage. Individual articles get
// BlogPosting markup once their own pages exist.
export function blogSchema() {
  const url = absolute(BLOG.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      hospitalSchema(),
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: BLOG.title,
        description: BLOG.description,
        inLanguage: "en-IN",
        about: { "@id": HOSPITAL_ID },
        publisher: { "@id": HOSPITAL_ID },
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// /blog/[slug] – one article.
// ---------------------------------------------------------------------------

export type BlogArticleSeo = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string; // ISO date
  image?: string;
  imageAlt?: string;
  wordCount: number;
};

const articlePath = (slug: string) => `${BLOG.path}/${slug}`;

export function blogArticleMetadata(article: BlogArticleSeo): Metadata {
  const path = articlePath(article.slug);
  const title = `${article.title} | ${CLINIC_NAME}`;
  const image = article.image ?? BLOG.ogImage;
  const imageAlt = article.image ? (article.imageAlt ?? article.title) : BLOG.ogImageAlt;
  return {
    title,
    description: article.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      title,
      description: article.description,
      publishedTime: article.publishedAt,
      section: article.category,
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description: article.description, images: [image] },
  };
}

// The article as a BlogPosting (published by the hospital), plus its
// breadcrumb trail: Home › Health blog › article.
export function blogArticleSchema(article: BlogArticleSeo) {
  const url = absolute(articlePath(article.slug));
  return {
    "@context": "https://schema.org",
    "@graph": [
      hospitalSchema(),
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: url,
        url,
        headline: article.title,
        description: article.description,
        image: absolute(article.image ?? BLOG.ogImage),
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        articleSection: article.category,
        wordCount: article.wordCount,
        inLanguage: "en-IN",
        author: { "@id": HOSPITAL_ID },
        publisher: { "@id": HOSPITAL_ID },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absolute(HOMEPAGE.path) },
          { "@type": "ListItem", position: 2, name: "Health blog", item: absolute(BLOG.path) },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// /contact – phone, WhatsApp, email, address and the enquiry form.
// ---------------------------------------------------------------------------

export const CONTACT = {
  path: "/contact",
  title: `Contact Us | ${CLINIC_NAME}, Chhatarpur`,
  description:
    "Contact Cronus Multispeciality Hospital, 100 Feet Road, Chhatarpur, New Delhi. Call or WhatsApp +91 96259 06617, 24x7 emergency, or send us a message and our team will call you back.",
  ogImage: "/hptl.png",
  ogImageAlt: `${CLINIC_NAME} building, Chhatarpur`,
};

export function contactMetadata(): Metadata {
  const { path, title, description, ogImage, ogImageAlt } = CONTACT;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: CLINIC_NAME,
      locale: "en_IN",
      title,
      description,
      images: [{ url: ogImage, width: 1254, height: 1254, alt: ogImageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

// Hospital (with its contact point) + the ContactPage + breadcrumbs.
export function contactSchema() {
  const url = absolute(CONTACT.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...hospitalSchema(),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CLINIC_PHONE_TEL,
          contactType: "customer service",
          areaServed: "IN",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        url,
        name: CONTACT.title,
        description: CONTACT.description,
        inLanguage: "en-IN",
        about: { "@id": HOSPITAL_ID },
        publisher: { "@id": HOSPITAL_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absolute(HOMEPAGE.path) },
          { "@type": "ListItem", position: 2, name: "Contact us", item: url },
        ],
      },
    ],
  };
}
