"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "@/app/components/reveal";

const testimonials = [
  {
    name: "Happy Mother",
    image: "/testimonial-1.jpg",
    rating: 5,
    text: "Supportive care and a wonderful experience throughout my pregnancy.",
  },
  {
    name: "Happy Mother",
    image: "/testimonial-2.jpg", 
    rating: 5,
    text: "The team was caring, attentive and made us feel comfortable.",
  },
  {
    name: "Happy Parents",
    image: "/testimonial-3.jpg",
    rating: 5,
    text: "We felt well-guided and supported at every step.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-[#0B3446] sm:text-4xl">
              Care That Makes a Difference
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-[#64748B]">
              Real experiences from mothers who chose Cronus for their maternity journey.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden bg-pink-100">
                    <div className="flex h-full w-full items-center justify-center text-pink-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2936]">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <Quote className="h-5 w-5 text-pink-300 mb-3" />
                <p className="text-[#64748B] leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-pink-600 font-medium">— {testimonial.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}