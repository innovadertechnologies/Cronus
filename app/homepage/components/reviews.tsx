import type { Review } from "../data";
import type { GoogleReviewsData } from "../google-reviews";
import { GoogleIcon, PractoMark, Stars } from "./rating-icons";
import { MarqueeClone } from "./marquee-clone";
import { PractoReviews } from "./practo-reviews";
import { ReviewCarousel, SourceBar } from "./review-parts";
import { SectionHeading } from "./section-heading";

const sourceLabel: Record<Review["source"], string> = { google: "Google", practo: "Practo" };

function ReviewCard({ review }: { review: Review }) {
  const isGoogle = review.source === "google";
  return (
    <li className="w-[300px] shrink-0 sm:w-[360px]">
      <figure
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


export function Reviews({ google }: Props) {
  const reviews = google.reviews;

  return (
    <section id="reviews" aria-labelledby="homepage-reviews-title" className="scroll-mt-24 overflow-hidden bg-[#F6F3EE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-reviews-title"
          eyebrow="PATIENT EXPERIENCES"
          title="Trusted by Patients."
          description="Every patient's experience matters to us. Read what patients have shared about their consultations, treatments, and hospital experience."
        />

      </div>

      {/* 1–2. Google Reviews label, then the Google review cards */}
      <div className="mt-10">
        <SourceBar
          icon={<GoogleIcon className="h-5 w-5" />}
          title="Google Reviews"
          cta={{ id: "homepage-reviews-google-btn", href: google.url, label: "See all on Google" }}
        />
        <ReviewCarousel label="Google reviews carousel">
          <ul className="flex gap-5 pr-5">
            {reviews.map((review) => (
              <ReviewCard key={`${review.author}-${review.date}`} review={review} />
            ))}
          </ul>
          <MarqueeClone className="flex gap-5 pr-5 motion-reduce:hidden" />
        </ReviewCarousel>
      </div>

      {/* 3–4. Practo Reviews label, then the Practo review cards */}
      <div className="mt-12 sm:mt-16">
        <PractoReviews />
      </div>
    </section>
  );
}
