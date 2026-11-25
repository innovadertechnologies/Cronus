import { ExternalLink } from "lucide-react";
import type { Review } from "../data";
import type { GoogleReviewsData } from "../google-reviews";
import { GoogleIcon, PractoMark, Stars } from "./rating-icons";
import { MarqueeClone } from "./marquee-clone";
import { SectionHeading } from "./section-heading";

const sourceLabel: Record<Review["source"], string> = { google: "Google", practo: "Practo" };

function ReviewCard({ review }: { review: Review }) {
  const isGoogle = review.source === "google";
  return (
    <li className="w-[300px] shrink-0 sm:w-[360px]">
      <figure
        // relative: keeps the sr-only rating inside the card (and inside the
        // scroll container) even when the carousel is not transformed.
        className="relative flex h-72 flex-col rounded-2xl bg-white p-6 ring-1 ring-[#0B3446]/10"
      >
        <div className="flex items-center gap-2">
          <Stars rating={review.rating} />
          <span className="sr-only">{review.rating} out of 5 stars</span>
        </div>
        <blockquote className="mt-4 flex-1 overflow-hidden text-[15px] leading-relaxed text-[#46575F]">
          <p className="line-clamp-5">{review.text}</p>
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-3 border-t border-[#0B3446]/10 pt-4">
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[15px] font-semibold text-[#0B3446]">{review.author}</span>
            <span className="flex items-center gap-1.5 text-xs text-[#5B6B73]">
              {isGoogle ? <GoogleIcon className="h-3.5 w-3.5" /> : <PractoMark className="h-3.5 w-3.5 text-[8px]" />}
              {sourceLabel[review.source]}
              {review.date && <> · {review.date}</>}
            </span>
          </span>
          {review.link && (
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-[#0B6A73] underline underline-offset-4"
              aria-label={`Read ${review.author}'s full review on ${sourceLabel[review.source]}`}
            >
              Read
            </a>
          )}
        </figcaption>
      </figure>
    </li>
  );
}

type Props = { google: GoogleReviewsData };

// Platform summaries plus a continuous right-to-left carousel of reviews.
// Google data is live from the Places API when configured, otherwise the
// genuine reviews already published on the site (see google-reviews.ts).
// Practo has its own section (practo-reviews.tsx).
export function Reviews({ google }: Props) {
  const reviews = google.reviews;

  return (
    <section id="reviews" aria-labelledby="homepage-reviews-title" className="scroll-mt-24 overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-reviews-title"
          eyebrow="Google reviews"
          title="What our patients say"
          description="Reviews from patients, published on Google."
        />

        <div className="mt-10">
          <div className="flex flex-col gap-4 rounded-2xl bg-[#F6F3EE] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                <GoogleIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[#0B3446]">Google Reviews</h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-[#5B6B73]">
                  <span className="text-xl font-semibold tabular-nums text-[#0B3446]">{google.rating}</span>
                  <Stars rating={Number(google.rating)} />
                  <span>({google.count} reviews)</span>
                </p>
              </div>
            </div>
            <a
              id="homepage-reviews-google-btn"
              href={google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0B3446] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E7C86]"
            >
              See all on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Continuous right-to-left carousel. Two identical halves, each with its
          own trailing gap, move by -50% so the loop is seamless. Pauses on
          hover, focus or touch; becomes a swipeable row with reduced motion. */}
      <div
        role="region"
        aria-label="Patient reviews carousel"
        className="mt-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max animate-[marquee_70s_linear_infinite] py-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
          <ul className="flex gap-5 pr-5">
            {reviews.map((review) => (
              <ReviewCard key={`${review.author}-${review.date}`} review={review} />
            ))}
          </ul>
          <MarqueeClone className="flex gap-5 pr-5 motion-reduce:hidden" />
        </div>
      </div>
    </section>
  );
}
