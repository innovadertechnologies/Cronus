// Content shared by the home page sections and the appointment form.

export const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const HOSPITAL_EMAIL = "info@cronushospitals.com";

export type Doctor = {
  name: string;
  speciality: string;
  // Matches one of DEPARTMENTS so the form can preselect it.
  department: string;
  image?: string;
};

export const DOCTORS: Doctor[] = [
  { name: "Dr. Chetan Kumar Gupta", speciality: "TB & Chest", department: "Internal Medicine" },
  { name: "Dr. Dheeraj Nath", speciality: "Orthopaedics", department: "Orthopaedics", image: "/dheeraj.png" },
  {
    name: "Dr. Nilotpala Mohanty",
    speciality: "Obstetrics & Gynaecology",
    department: "Obstetrics & Gynaecology",
    image: "/dr nilo.webp",
  },
  { name: "Dr. Vibhuti", speciality: "Otorhinolaryngology (ENT)", department: "ENT" },
];

export const DEPARTMENTS = [
  "Internal Medicine",
  "Orthopaedics",
  "Obstetrics & Gynaecology",
  "ENT",
  "Neuro Surgery",
  "Cardiology",
  "General & Laparoscopic Surgery",
  "Ophthalmology",
  "Dental Surgery",
];

export const ANY_DOCTOR = "Any available doctor";

export const doctorsFor = (department: string) => DOCTORS.filter((d) => d.department === department);

export const initials = (name: string) =>
  name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
