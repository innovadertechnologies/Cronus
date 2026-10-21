"use client";

// Lets any section (hero search, doctor cards, CTA band) prefill the
// appointment form and scroll to it without sharing React state.
export type BookingRequest = {
  department?: string;
  doctor?: string;
  mode?: "In-person" | "Video";
};

export const BOOKING_EVENT = "cronus:book";

export function requestBooking(request: BookingRequest = {}) {
  window.dispatchEvent(new CustomEvent<BookingRequest>(BOOKING_EVENT, { detail: request }));
  document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
