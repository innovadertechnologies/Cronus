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
