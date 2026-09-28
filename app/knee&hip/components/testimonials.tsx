"use client";

import { CalendarDays, Star } from "lucide-react";
import { useBookingModal } from "./booking-modal";

const testimonials = [
  {
    name: "Hardik Jain",
    rating: 5,
    text: "Very respectable and calm person. Did my operation very quickly and was trustworthy. Would recommend him to everyone.",
  },
  {
    name: "Shailesh Rana",
    rating: 5,
    text: "Dr. Dheeraj Nath is a well-experienced and intelligent doctor. He is very generous, compassionate and understanding.",
  },
  {
    name: "VIVEK DHIR",
    rating: 5,
    text: "I had a good experience with Dr. Sandeep Singh. I am satisfied and would recommend the doctor.",
  },
  {
    name: "AYUSHMAN CHOUDHARY",
    rating: 5,
    text: "The doctor explained everything well and the clinic staff behavior was fine. I would recommend Dr. Sandeep Singh.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating 
                ? "fill-amber-400 text-amber-400" 
                : "fill-slate-200 text-slate-200"
            }`}
          />
        ))}
      </div>
      <p className="text-[#1B2936] mb-4 leading-relaxed">"{testimonial.text}"</p>
      <p className="font-semibold text-[#0B3446]">⭐ {testimonial.name}</p>
    </div>
  );
}

export function Testimonials() {
  const { openBookingModal } = useBookingModal();

  return (
    <section id="testimonials" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-[#64748B]">Real Patient Experiences</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={openBookingModal}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C86] px-8 py-4 text-white font-semibold text-lg shadow-lg hover:brightness-110 transition-all"
          >
            <CalendarDays className="h-5 w-5" />
            Book Your Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}