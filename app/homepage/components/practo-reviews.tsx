import { ExternalLink, ThumbsUp } from "lucide-react";
import { PRACTO_RATING, PRACTO_REVIEWS_URL, PRACTO_STORIES, type PractoStory } from "../data";
import { PractoMark, Stars } from "./rating-icons";
import { SectionHeading } from "./section-heading";

// Same card as the Google reviews. Practo stories carry no star rating, so
// the top line shows the patient's recommendation instead of stars.
function StoryCard({ story, hidden = false }: { story: PractoStory; hidden?: boolean }) {
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
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={hidden ? -1 : undefined}
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

// Practo, laid out exactly like the Google reviews section. Practo offers no
// embed, widget or public API, so this shows its rating and short excerpts of
// real patient stories as published there (kept in data.ts), each linking to
// the full stories on Practo.
export function PractoReviews() {
  return (
    <section
      id="practo-reviews"
      aria-labelledby="homepage-practo-title"
      className="scroll-mt-24 overflow-hidden bg-[#F6F3EE] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          id="homepage-practo-title"
          eyebrow="Practo reviews"
          title="Patient stories on Practo"
          description="Stories from patients, published on Practo."
        />

        <div className="mt-10">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <PractoMark className="h-14 w-14 rounded-xl text-xl" />
              <div>
                <h3 className="text-lg font-semibold text-[#0B3446]">Practo Reviews</h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-[#5B6B73]">
                  <span className="text-xl font-semibold tabular-nums text-[#0B3446]">{PRACTO_RATING.score}</span>
                  <Stars rating={Number(PRACTO_RATING.score)} />
                  <span>({PRACTO_RATING.count} patient stories)</span>
                </p>
              </div>
            </div>
            <a
              id="homepage-practo-stories-btn"
              href={PRACTO_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#0B3446] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0E7C86]"
            >
              See all on Practo
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Continuous right-to-left carousel, same seamless two-half loop as the
          Google reviews. Pauses on hover, focus or touch. */}
      <div
        role="region"
        aria-label="Practo patient stories carousel"
        className="mt-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max animate-[marquee_70s_linear_infinite] py-2 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:px-4 sm:motion-reduce:px-8">
          <ul className="flex gap-5 pr-5">
            {PRACTO_STORIES.map((story) => (
              <StoryCard key={story.author} story={story} />
            ))}
          </ul>
          <ul className="flex gap-5 pr-5 motion-reduce:hidden" aria-hidden="true">
            {PRACTO_STORIES.map((story) => (
              <StoryCard key={story.author} story={story} hidden />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
