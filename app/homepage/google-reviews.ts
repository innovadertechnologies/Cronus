import { GOOGLE_RATING, GOOGLE_REVIEWS, MAP_SEARCH_URL, type Review } from "./data";

export type GoogleReviewsData = {
  rating: string;
  count: string;
  url: string;
  reviews: Review[];
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
      reviews: reviews.length > 0 ? reviews : FALLBACK.reviews,
      live: true,
    };
  } catch (error) {
    console.error("[google-reviews] falling back to published reviews", error);
    return FALLBACK;
  }
}
