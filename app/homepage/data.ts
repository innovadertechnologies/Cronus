// Content for the /homepage route. Everything here comes from content that
// already exists elsewhere on the site (home/data.ts, lib/seo.ts and the
// landing pages) – nothing is invented for this page.

import { CLINIC_ADDRESS, CLINIC_NAME, CLINIC_PHONE_TEL } from "@/app/lib/site-config";
import { DEPARTMENTS } from "@/app/home/data";
import type { Faq } from "@/app/lib/seo";

// ---------------------------------------------------------------------------
// Contact links
// ---------------------------------------------------------------------------

export const TEL_HREF = `tel:${CLINIC_PHONE_TEL}`;
export const WHATSAPP_HREF = `https://wa.me/${CLINIC_PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(
  `Hello ${CLINIC_NAME}, I would like to book an appointment.`
)}`;
// The site has a single hospital number; emergency and ambulance requests
// go to the same 24x7 line. Swap in a dedicated number here if one exists.
export const EMERGENCY_TEL_HREF = TEL_HREF;
export const AMBULANCE_TEL_HREF = TEL_HREF;

export const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${CLINIC_NAME}, ${CLINIC_ADDRESS}`
)}`;
export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${CLINIC_NAME}, ${CLINIC_ADDRESS}`
)}`;

// In-page navigation used by the header and footer.
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Departments", href: "#departments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Why Cronus", href: "#why-choose" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#location" },
];

// ---------------------------------------------------------------------------
// Departments
// ---------------------------------------------------------------------------

// The appointment form offers the home page departments plus Urology,
// which has its own landing page.
export const FORM_DEPARTMENTS = [...DEPARTMENTS, "Urology"];

export type Department = {
  name: string;
  text: string;
  icon:
    | "stethoscope"
    | "bone"
    | "spine"
    | "baby"
    | "scissors"
    | "droplet"
    | "ear"
    | "brain"
    | "heart"
    | "eye"
    | "smile";
  // Dedicated landing page when one exists, otherwise the appointment form.
  href: string;
};

export const DEPARTMENT_CARDS: Department[] = [
  { name: "Orthopaedics", text: "Knee & hip replacement, fractures and joint care", icon: "bone", href: "/knee-and-hip" },
  { name: "Spine Care", text: "Back pain, sciatica and slipped disc treatment", icon: "spine", href: "/spine" },
  { name: "Obstetrics & Gynaecology", text: "Pregnancy, delivery and women's health", icon: "baby", href: "/maternity" },
  { name: "Hernia Surgery", text: "Laparoscopic hernia repair", icon: "scissors", href: "/hernia" },
  { name: "Gallbladder Surgery", text: "Laparoscopic gallbladder removal", icon: "scissors", href: "/gallbladder-surgery" },
  { name: "Urology", text: "Kidney stones, prostate and urinary care", icon: "droplet", href: "/urology" },
  { name: "Internal Medicine", text: "TB, chest and general medicine", icon: "stethoscope", href: "#appointment" },
  { name: "Cardiology", text: "Diagnosis and management of heart disease", icon: "heart", href: "#appointment" },
  { name: "Neuro Surgery", text: "Brain and nerve surgery", icon: "brain", href: "#appointment" },
  { name: "ENT", text: "Ear, nose and throat care", icon: "ear", href: "#appointment" },
  { name: "Ophthalmology", text: "Eye care and vision", icon: "eye", href: "#appointment" },
  { name: "Dental Surgery", text: "Dental care for all ages", icon: "smile", href: "#appointment" },
];

// ---------------------------------------------------------------------------
// Doctors (names, titles, qualifications and experience as published on the
// existing landing pages; Dr. Chetan Kumar Gupta and Dr. Vibhuti only have a
// speciality listed, so nothing more is shown for them)
// ---------------------------------------------------------------------------

export type HomepageDoctor = {
  name: string;
  speciality: string;
  department: string;
  qualifications?: string;
  experience?: string;
  image?: string;
  profileHref?: string;
};

export const FEATURED_DOCTOR: HomepageDoctor = {
  name: "Dr. Chetan Kumar Gupta",
  speciality: "TB & Chest Specialist",
  department: "Internal Medicine",
};

export const OTHER_DOCTORS: HomepageDoctor[] = [
  {
    name: "Dr. Dheeraj Nath",
    speciality: "Orthopaedic & Joint Replacement Surgeon",
    department: "Orthopaedics",
    qualifications: "MBBS, MS – Orthopaedics",
    experience: "27+ years",
    image: "/dheeraj.png",
    profileHref: "/knee-and-hip",
  },
  {
    name: "Dr. Sandeep Singh",
    speciality: "Orthopaedics & Spine Specialist",
    department: "Orthopaedics",
    qualifications: "MBBS, MS – Orthopaedics, Fellowship in Spine Surgery",
    experience: "30+ years",
    image: "/spdoc.jpeg",
    profileHref: "/spine",
  },
  {
    name: "Dr. Kumkum Sharma",
    speciality: "Gynaecologist & Obstetrician",
    department: "Obstetrics & Gynaecology",
    qualifications: "MBBS, MS – Obstetrics & Gynaecology, DGO",
    experience: "42+ years",
    image: "/DR KUMKUM SHARMA.png",
    profileHref: "/maternity",
  },
  {
    name: "Dr. Shiv Chopra",
    speciality: "General & Laparoscopic Surgeon",
    department: "General & Laparoscopic Surgery",
    qualifications: "MBBS, MS – General Surgery",
    experience: "35+ years",
    profileHref: "/hernia",
  },
  {
    name: "Dr. Nilotpala Mohanty",
    speciality: "Gynaecologist, Obstetrician & Infertility Specialist",
    department: "Obstetrics & Gynaecology",
    qualifications: "MBBS, MD – Obstetrics & Gynaecology",
    experience: "27+ years",
    image: "/dr nilo.webp",
    profileHref: "/maternity",
  },
  {
    name: "Dr. Saurabh Kumar Sinha",
    speciality: "Urologist & Genito-Urinary Surgeon",
    department: "Urology",
    qualifications: "MBBS, MS – General Surgery, MCh – Urology",
    experience: "22+ years",
    image: "/urology_dr_photo.png",
    profileHref: "/urology",
  },
  {
    name: "Dr. Vibhuti",
    speciality: "Otorhinolaryngology (ENT)",
    department: "ENT",
  },
];

// ---------------------------------------------------------------------------
// Reviews (real Google reviews already published on the landing pages)
// ---------------------------------------------------------------------------

export const GOOGLE_RATING = { score: "4.2", count: "1,012" };

export const GOOGLE_REVIEWS = [
  {
    name: "Ravi Dass",
    timeAgo: "9 months ago",
    text: "Thank you dr dheeraj for my surgery, dr dheeraj is the best dr or ortho, staff also good and awesome, nursing staff are very intelligent and helpful, all blood test results are proper, thank you to all for nice service.",
    link: "https://share.google/t9rNAwZMvT0B40t7f",
  },
  {
    name: "Sunil Patlan",
    timeAgo: "8 months ago",
    text: "My experience is very nice. Thank you for this hospital. Dr nilotpala is one the best most humble and down to earth person... She is very calm and composed which gives confidence in the patient. All services are good. Ultrasound staff is very helpful for ultrasound patient.",
    link: "https://share.google/Upxwdi4Ynihkt3zJ1",
  },
  {
    name: "Naveen Dahiya",
    timeAgo: "8 months ago",
    text: "I had a very good experience with the surgeon doctor. The doctor was polite, professional and explained the procedure clearly. The treatment was successful and I am fully satisfied. Proper guidance was given at every step. Staff behaviour was good and supportive.",
    link: "https://share.google/tk4ojg2wgheXckcR6",
  },
];

// TODO: paste the hospital's Practo profile URL here. While it is empty the
// Practo panel shows no link (no reviews are shown for Practo either way).
export const PRACTO_PROFILE_URL = "";

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export const HOMEPAGE_FAQS: Faq[] = [
  {
    question: "How do I book an appointment at Cronus Multispeciality Hospital?",
    answer:
      "Fill in the appointment form on this page, call us or send us a WhatsApp message. Our team will call you back to confirm a suitable time with the right specialist.",
  },
  {
    question: "Is the emergency department open 24x7?",
    answer:
      "Yes. Our emergency department is open 24 hours a day, 7 days a week, for trauma and every other urgent medical need. Call our emergency number for immediate help.",
  },
  {
    question: "Which departments and specialities are available?",
    answer:
      "Cronus offers 40+ medical specialities, including Orthopaedics, Spine Care, Obstetrics & Gynaecology, General & Laparoscopic Surgery, Urology, Internal Medicine, Cardiology, Neuro Surgery, ENT, Ophthalmology and Dental Surgery.",
  },
  {
    question: "Do you accept health insurance and offer cashless treatment?",
    answer:
      "Cashless treatment is available with major insurance providers. It is subject to your insurance policy, the hospital network and the insurer's approval, so please share your policy details with our team to confirm.",
  },
  {
    question: "Are diagnostics and pharmacy available inside the hospital?",
    answer:
      "Yes. Pathology, X-ray, sonography and stress tests are done in-house, and our pharmacy is open round the clock.",
  },
  {
    question: "Where is the hospital located?",
    answer:
      "We are on 100 Feet Road, Phase 1, Chhatarpur Enclave Phase 2, Chhatarpur, New Delhi 110074. Use the Directions button on this page to open the route in Google Maps.",
  },
  {
    question: "Can I choose a specific doctor?",
    answer:
      "Yes. Mention the doctor's name in the message field of the appointment form, or tell our team when they call you back, and we will try to book you with that doctor.",
  },
];
