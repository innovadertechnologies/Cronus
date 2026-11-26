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
  { name: "Orthopaedics", text: "Bone, joint and fracture care", icon: "bone", href: "/knee-and-hip" },
  { name: "Spine Care", text: "Back pain, sciatica and slipped disc treatment", icon: "spine", href: "/spine" },
  { name: "Obstetrics & Gynaecology", text: "Pregnancy, delivery and women's healthcare", icon: "baby", href: "/maternity" },
  { name: "Hernia Surgery", text: "Surgical management of hernia", icon: "scissors", href: "/hernia" },
  { name: "Gallbladder Surgery", text: "Laparoscopic gallbladder procedures", icon: "scissors", href: "/gallbladder-surgery" },
  { name: "Urology", text: "Kidney stones, prostate and urinary conditions", icon: "droplet", href: "/urology" },
  { name: "Internal Medicine", text: "General medicine, chest conditions and TB", icon: "stethoscope", href: "#appointment" },
  { name: "Cardiology", text: "Heart health evaluation and treatment", icon: "heart", href: "#appointment" },
  { name: "Neuro Surgery", text: "Brain and nerve-related surgical care", icon: "brain", href: "#appointment" },
  { name: "ENT", text: "Ear, nose, and throat treatments", icon: "ear", href: "#appointment" },
  { name: "Ophthalmology", text: "Eye care and vision-related conditions", icon: "eye", href: "#appointment" },
  { name: "Dental Surgery", text: "Dental treatments for different age groups", icon: "smile", href: "#appointment" },
];

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

// Overall Google rating as already published on the landing pages. Used
// until the Google Places API is configured (see ./google-reviews.ts).
export const GOOGLE_RATING = { score: "4.2", count: "1,012" };

export type Review = {
  source: "google" | "practo";
  author: string;
  rating: number;
  text: string;
  // Relative ("8 months ago") as shown by the platform.
  date: string;
  link?: string;
};

// Genuine Google reviews already published on the knee & hip, maternity and
// spine pages, copied verbatim with their Google share links. Shown only
// when live reviews from the Google Places API are not available. The
// relative dates are as they were when the reviews were captured.
export const GOOGLE_REVIEWS: Review[] = [
  {
    source: "google",
    author: "Ravi Dass",
    rating: 5,
    date: "9 months ago",
    text: "Thank you dr dheeraj for my surgery, dr dheeraj is the best dr or ortho, staff also good and awesome, nursing staff are very intelligent and helpful, all blood test results are proper, thank you to all for nice service. Clean...",
    link: "https://share.google/t9rNAwZMvT0B40t7f",
  },
  {
    source: "google",
    author: "Sunil Patlan",
    rating: 5,
    date: "8 months ago",
    text: "My experience is very nice . Thank you for this hospital .Dr nilotpala is one the best most humble and down to earth person... She is very calm and posted which gives confidence in the patient...she is available on phone and any given point of time which we believe is the most friendlist gesture.....If you are looking the best gynaecologist dr . Please meet dr nilotpala Mohanty in cronus hospital becouse she is very nice and great doctor.all sevices are good . Ultrasound staff is very helpful for ultrasound patient",
    link: "https://share.google/Upxwdi4Ynihkt3zJ1",
  },
  {
    source: "google",
    author: "Ram Chauhan",
    rating: 5,
    date: "9 months ago",
    text: "Dr Sandeep Singh I had a very good experience with this orthopedic doctor.He is knowledge polite and diagnoses the problem accurately.The treatment plan was explained in a simple way and I truly appreciate his caring attitude toward patients....",
    link: "https://share.google/XadmP5yjkF8xYbRMa",
  },
  {
    source: "google",
    author: "Naveen Dahiya",
    rating: 5,
    date: "8 months ago",
    text: "I had a very good experience with the surgeon doctor.The doctor was polite, professional and explained the procedure clearly. The treatment was successful and I am fully satisfied. Proper guidance was given at evey step. staff behaviour was good and supportive.",
    link: "https://share.google/tk4ojg2wgheXckcR6",
  },
  {
    source: "google",
    author: "Charlotte Bonaventure (BabyGirlFoLife)",
    rating: 5,
    date: "6 months ago",
    text: "One of best gynaecologist i have met she understands patients concerns very well and gives the right advice Dr nilotpala Mohanty her behaviour is friendly and respectful which makes patients feel  relaxed I would definitely recommend her to others thanks",
    link: "https://share.google/4T9xJU2954guBzpgb",
  },
  {
    source: "google",
    author: "Sachin Gupta",
    rating: 5,
    date: "a year ago",
    text: "I love this hospital, I loved to thanks dr.dheeraj nath (orthopedic). All staff are very cooperative and humble. Pantry is soo good 👍 I recommend this hospital to patients.",
    link: "https://share.google/LbPlSrcu1rGKgQFHK",
  },
  {
    source: "google",
    author: "Abhishek Kumar",
    rating: 5,
    date: "5 months ago",
    text: "I had a very positive experience with the gynaecologist at this hospitalThe Doctor is extremely knowledge patient and understand. She listens carefully to concerns and explain every details in a very clear and simple way which makes patients feel comfortable and confident……",
    link: "https://share.google/uwbKoiuNxSKzN8HHB",
  },
  {
    source: "google",
    author: "Parveen Kumar",
    rating: 5,
    date: "8 months ago",
    text: "I had a very good experience with the orthopedic doctor. The doctor listened patiently explained the problem clearly and suggested the right treatment. The staff was cooperative and the clinic was clean. Highly recommended for bone and joint problems.",
    link: "https://share.google/vpsIqyNGFaP61T7ii",
  },
  {
    source: "google",
    author: "Dharmbir Dahiya",
    rating: 5,
    date: "8 months ago",
    text: "I consulted the orthopedic doctor for knee pain and I am fully satisfied with the treatment. The doctor is very knowledgeable polite and supportive. proper diagnosis was done and medicines were effective. Staff behavior was good and waiting time was minimal overall a very positive experience.",
    link: "https://share.google/gCkiwqFyDF8EZhAKb",
  },
];

// ---------------------------------------------------------------------------
// Hero carousel (existing banner images from the landing pages)
// ---------------------------------------------------------------------------

export const HERO_SLIDES = [
  {
    src: "/gbhbanner.png",
    alt: "Cronus Multispeciality Hospital building with the 24x7 Emergency entrance, Chhatarpur",
    position: "object-[82%_center] lg:object-center",
  },
  {
    src: "/hipbanner.png",
    alt: "Dr. Dheeraj Nath and Dr. Sandeep Singh, orthopaedic specialists at Cronus Hospital",
    position: "object-[72%_center] lg:object-center",
  },
  {
    src: "/spinebanner.png",
    alt: "Dr. Sandeep Singh, orthopaedics and spine specialist at Cronus Hospital",
    position: "object-[74%_center] lg:object-center",
  },
  {
    src: "/urology_banner_with_dr.png",
    alt: "Dr. Saurabh Kumar Sinha, urologist at Cronus Hospital",
    position: "object-[75%_center] lg:object-center",
  },
  {
    src: "/docimage.png",
    alt: "Cronus surgeon reviewing a chest scan in a modern operating theatre",
    position: "object-[40%_center] lg:object-[center_35%]",
  },
];

// Existing pages on the main hospital website.
export const ABOUT_US_URL = "https://cronushospitals.com/about-us/";
export const OUR_DOCTORS_URL = "https://cronushospitals.com/our-doctors/";

// Practo has no embed, widget or public API for reviews, so the page shows the
// hospital's Practo rating and links to its patient stories there. Figures as
// shown on the Practo profile on 2026-11-25 – update them here when they change.
export const PRACTO_PROFILE_URL = "https://www.practo.com/delhi/hospital/cronus-multispeciality-hospital-chattarpur-1";
export const PRACTO_REVIEWS_URL = `${PRACTO_PROFILE_URL}/reviews`;
// score = patient rating; excellence = Practo's separate "Hospital Excellence Rating".
export const PRACTO_RATING = { score: "3.5", count: "334", excellence: "4.2" };

export type PractoStory = {
  author: string;
  date: string;
  doctor: string;
  // A short excerpt quoted exactly as written on Practo (full story is linked).
  excerpt: string;
};

// Patient stories from the hospital's Practo profile (all marked "I recommend
// the doctor" there). Short excerpts only, quoted exactly as published, each
// linking to the full stories on Practo. Dates are as shown on 2026-11-25.
export const PRACTO_STORIES: PractoStory[] = [
  {
    author: "Ishani Sachdeva",
    date: "3 years ago",
    doctor: "Dr. Nilotpala Mohanty",
    excerpt: "I had one of the most frank and open conversations with the doctor about my problem.",
  },
  {
    author: "Piyush Dwivedi",
    date: "a year ago",
    doctor: "Dr. Kumkum Sharma",
    excerpt: "Highly recommend her for anyone looking for a trusted gynaecologist.",
  },
  {
    author: "Rupali",
    date: "3 years ago",
    doctor: "Dr. Nilotpala Mohanty",
    excerpt: "She does not create unnecessary fear about anything and always clears all the doubts.",
  },
  {
    author: "H S Singh",
    date: "a year ago",
    doctor: "Dr. Kumkum Sharma",
    excerpt: "A patient friendly doctor so difficult to find these days.",
  },
  {
    author: "Aditi",
    date: "6 years ago",
    doctor: "Dr. Chetan Kumar Gupta",
    excerpt: "Doctor is very intelligent",
  },
  {
    author: "Rituraj Saurabh",
    date: "9 months ago",
    doctor: "Dr. Kumkum Sharma",
    excerpt: "Highly recommended.",
  },
];

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export const HOMEPAGE_FAQS: Faq[] = [
  {
    question: "1. What medical specialities are available at Cronus Multispeciality Hospital?",
    answer:
      "Cronus offers 40+ medical specialities, including Orthopaedics, Spine Care, Obstetrics & Gynaecology, Urology, Cardiology, Internal Medicine, ENT, Ophthalmology, and General Surgery.",
  },
  {
    question: "2. Does Cronus Hospital provide 24×7 emergency services?",
    answer:
      "Yes. Cronus Multispeciality Hospital provides round-the-clock emergency services for patients requiring urgent medical attention.",
  },
  {
    question: "3. Can I book an appointment with a specific doctor?",
    answer:
      "Yes. You can mention your preferred doctor's name while filling out the appointment form or contact our team directly for assistance.",
  },
  {
    question: "4. Are diagnostic facilities available within the hospital?",
    answer: "Yes. The hospital provides in-house pathology, X-ray, sonography, and stress testing facilities.",
  },
  {
    question: "5. Does the hospital offer cashless insurance facilities?",
    answer:
      "Yes. Cashless treatment is available with major insurance providers, subject to your insurance policy and insurer approval.",
  },
  {
    question: "6. Where is Cronus Multispeciality Hospital located?",
    answer:
      "Cronus Multispeciality Hospital is located on 100 Feet Road, Chhatarpur, New Delhi, making it accessible to patients across South Delhi and nearby areas.",
  },
];
