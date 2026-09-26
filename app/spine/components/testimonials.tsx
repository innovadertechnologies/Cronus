import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Everything was explained clearly.",
    text: "A verified patient shared that Dr. Sandeep Singh explained the treatment clearly and they were satisfied with their overall experience.",
    name: "Abhinav Bhardwaj",
  },
  {
    quote: "A very good experience.",
    text: "A patient shared a positive experience with Dr. Sandeep Singh and said they would recommend him.",
    name: "Praveen Sharma",
  },
  {
    quote: "My back pain had been going on for months.",
    text: "A patient shared their experience of dealing with back pain for several months before consulting Dr. Sandeep Singh.",
    name: "Nitin Gupta",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0B2A4A] sm:text-4xl">What Our Patients Say</h2>
          <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-[#0E7C86]" aria-hidden />
        </div>

        <ul className="mt-8 grid gap-5 md:grid-cols-3 lg:gap-7">
          {testimonials.map(({ quote, text, name }) => (
            <li
              key={name}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_30px_-20px_rgba(11,52,70,0.4)] sm:p-7"
            >
              <figure className="flex flex-1 flex-col">
                <blockquote className="flex flex-1 gap-3">
                  <Quote className="h-7 w-7 shrink-0 rotate-180 fill-[#0E7C86] text-[#0E7C86]" aria-hidden />
                  <div>
                    <p className="text-base font-extrabold leading-snug text-[#0B2A4A] sm:text-lg">
                      &ldquo;{quote}&rdquo;
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{text}</p>
                  </div>
                </blockquote>
                <figcaption className="mt-5 pl-10">
                  <p className="text-sm font-extrabold uppercase tracking-wide text-[#0B2A4A]">— {name}</p>
                  <p className="mt-2 flex gap-1 text-amber-400" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" aria-hidden />
                    ))}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
