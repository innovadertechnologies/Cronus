import { ThumbsUp } from "lucide-react";
import { PRACTO_RATING, PRACTO_REVIEWS_URL, PRACTO_STORIES, type PractoStory } from "../data";
import { PractoMark } from "./rating-icons";
import { ReviewCarousel, SourceBar } from "./review-parts";

// Same card as the Google reviews. Practo stories carry no star rating, so
// the top line shows the patient's recommendation instead of stars.
// `copy`: the second, decorative copy of the row (seamless loop).
function StoryCard({ story, copy = false }: { story: PractoStory; copy?: boolean }) {
  return (
    <li className="w-[300px] shrink-0 sm:w-[360px]">
      <figure className="flex h-72 flex-col rounded-2xl bg-white p-6 ring-1 ring-[#0B3446]/10">
        <p className="flex items-center gap-2 text-sm font-medium text-[#0B6A73]">
          <ThumbsUp className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span className="truncate">Recommends {story.doctor}</span>
        </p>
        <blockquote className="mt-4 flex-1 overflow-hidden text-[15px] leading-relaxed text-[#46575F]">
          <p className="line-clamp-5">&ldquo;{story.excerpt}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-3 border-t border-[#0B3446]/10 pt-4">
          <span className="min-w-0 flex-1">
            <span className="block truncate text-[15px] font-semibold text-[#0B3446]">{story.author}</span>
            <span className="flex items-center gap-1.5 text-xs text-[#5B6B73]">
              <PractoMark className="h-3.5 w-3.5 text-[8px]" />
              Practo · {story.date}
            </span>
          </span>
          <a
            href={PRACTO_REVIEWS_URL}
            tabIndex={copy ? -1 : undefined}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold text-[#0B6A73] underline underline-offset-4"
            aria-label={`Read ${story.author}'s full story on Practo`}
          >
            Read
          </a>
        </figcaption>
      </figure>
    </li>
  );
}

// Practo part of the Reviews section, placed right after the Google reviews.
// Practo offers no embed, widget or public API, so this shows its rating and
// short excerpts of real patient stories as published there (kept in
// data.ts), each linking to the full stories on Practo.
export function PractoReviews() {
  return (
    <>
      <SourceBar
        icon={<PractoMark className="h-5 w-5 text-[11px]" />}
        title="Practo Reviews"
        meta={
          <>
            <span className="font-semibold tabular-nums text-[#0B3446]">{PRACTO_RATING.count} patient stories</span> on Practo
          </>
        }
        cta={{ id: "homepage-practo-stories-btn", href: PRACTO_REVIEWS_URL, label: "Read More Patient Reviews", ariaLabel: "Read more patient reviews on Practo" }}
      />
      <ReviewCarousel label="Practo patient stories carousel">
        <ul className="flex gap-5 pr-5">
          {PRACTO_STORIES.map((story) => (
            <StoryCard key={story.author} story={story} />
          ))}
        </ul>
        <ul aria-hidden="true" className="flex gap-5 pr-5 motion-reduce:hidden">
          {PRACTO_STORIES.map((story) => (
            <StoryCard key={story.author} story={story} copy />
          ))}
        </ul>
      </ReviewCarousel>
    </>
  );
}
