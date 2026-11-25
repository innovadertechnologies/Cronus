// Live Google rating and reviews through the official Google Places API (New).
// Runs on the server only: the API key is read from the environment and never
// reaches the browser.
//
// To switch it on, set both in the hosting environment (e.g. Hostinger's
// environment variables) and redeploy:
//   GOOGLE_PLACES_API_KEY  – a key with "Places API (New)" enabled, restricted
//                            to that API (it is used server-side, not in a browser)
//   GOOGLE_PLACE_ID        – the hospital's Place ID (find it with Google's
//                            Place ID Finder)
//
// The Places API returns the overall rating, the review count and up to 5
// reviews chosen by Google. Until it is configured (or if a request fails),
// the page shows the rating and the genuine Google reviews already published
// on the site, so nothing is ever invented.

import { GOOGLE_RATING, GOOGLE_REVIEWS, MAP_SEARCH_URL, type Review } from "./data";

export type GoogleReviewsData = {
  rating: string;
  count: string;
  url: string;
  reviews: Review[];
  // true when the data came from the Places API just now.
  live: boolean;
};

type PlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string; uri?: string };
  googleMapsUri?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

const FALLBACK: GoogleReviewsData = {
  rating: GOOGLE_RATING.score,
  count: GOOGLE_RATING.count,
  url: MAP_SEARCH_URL,
  reviews: GOOGLE_REVIEWS,
  live: false,
};

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=en`, {
      headers: {
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
      },
      // Refresh at most once a day.
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error(`Places API HTTP ${res.status}`);

    const place = (await res.json()) as PlacesResponse;
    const reviews: Review[] = (place.reviews ?? [])
      .map((r) => ({
        source: "google" as const,
        author: r.authorAttribution?.displayName ?? "Google user",
        rating: r.rating ?? 0,
        text: (r.originalText?.text ?? r.text?.text ?? "").trim(),
        date: r.relativePublishTimeDescription ?? "",
        link: r.googleMapsUri ?? r.authorAttribution?.uri,
      }))
      .filter((r) => r.text && r.rating > 0);

    return {
      rating: place.rating != null ? place.rating.toFixed(1) : FALLBACK.rating,
      count: place.userRatingCount != null ? place.userRatingCount.toLocaleString("en-IN") : FALLBACK.count,
      url: place.googleMapsUri ?? FALLBACK.url,
      // Google returns at most 5; keep the published ones as well if it returns none.
      reviews: reviews.length > 0 ? reviews : FALLBACK.reviews,
      live: true,
    };
  } catch (error) {
    console.error("[google-reviews] falling back to published reviews", error);
    return FALLBACK;
  }
}
