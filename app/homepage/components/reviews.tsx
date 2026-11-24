import { ExternalLink, Quote, Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEWS, MAP_SEARCH_URL, PRACTO_PROFILE_URL } from "../data";
import { SectionHeading } from "./section-heading";

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-[#FBBC05] text-[#FBBC05]`} />
      ))}
    </span>
  );
}



export function Reviews() {
  return (
    <section id="reviews" aria-labelledby="homepage-reviews-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-reviews-title"
          eyebrow="Patient reviews"
          title="What our patients say"
          description="Real reviews from patients, published on Google."
        />

        {/* Platform summaries */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl bg-[#F6F3EE] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                <GoogleIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0B3446]">Google Reviews</h3>
                <p className="mt-0.5 flex items-center gap-2 text-sm text-[#5B6B73]">
                  <span className="text-xl font-semibold text-[#0B3446]">{GOOGLE_RATING.score}</span>
                  <Stars />
                  <span>({GOOGLE_RATING.count})</span>
                </p>
              </div>
            </div>
            <a
              id="homepage-reviews-google-btn"
              href={MAP_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B3446] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E7C86]"
            >
              See all on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-[#F6F3EE] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#14BEF0] text-xl font-semibold text-white">
                P
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0B3446]">Practo Reviews</h3>
                <p className="mt-0.5 text-sm text-[#5B6B73]">Read patient feedback for our doctors on Practo.</p>
              </div>
            </div>
            {PRACTO_PROFILE_URL && (
              <a
                id="homepage-reviews-practo-btn"
                href={PRACTO_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0B3446] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E7C86]"
              >
                View on Practo
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Google review cards */}
        <ul className="mt-6 grid gap-5 md:grid-cols-3">
          {GOOGLE_REVIEWS.map((review, i) => (
            <li key={review.link}>
              <figure className="relative flex h-full flex-col rounded-2xl bg-white p-6 ring-1 ring-[#0B3446]/10 sm:p-7">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[#0E7C86]/15" aria-hidden="true" />
                <Stars />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-[#46575F]">
                  <p className="line-clamp-6">&ldquo;{review.text}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-[#0B3446]/10 pt-5">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E3F6F7] text-sm font-semibold text-[#0E7C86]"
                    aria-hidden="true"
                  >
                    {review.name
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold text-[#0B3446]">{review.name}</span>
                    <span className="flex items-center gap-1 text-xs text-[#5B6B73]">
                      <GoogleIcon className="h-3 w-3" /> {review.timeAgo}
                    </span>
                  </span>
                  <a
                    href={review.link.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-sm font-semibold text-[#0E7C86] underline underline-offset-4"
                    aria-label={`Read ${review.name}'s full review on Google`}
                  >
                    Read
                  </a>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
