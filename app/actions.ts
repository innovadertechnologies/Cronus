"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";

export type LeadFormState = {
  success: boolean;
  error?: string;
};

const INDIAN_PHONE = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

const SAVE_FAILED = "We couldn't submit your request. Please try again or call us directly.";

export async function submitHerniaLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim().replace(/[\s-]/g, "");
  const email = String(formData.get("email") ?? "").trim();
  const problem = String(formData.get("problem") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!INDIAN_PHONE.test(phone)) {
    return { success: false, error: "Please enter a valid 10-digit Indian phone number." };
  }

  try {
    await recordLead("hernia", {
      Name: name,
      Phone: phone,
      Email: email,
      Problem: problem,
    });
  } catch (error) {
    console.error("[lead] hernia", error);
    return { success: false, error: SAVE_FAILED };
  }

  redirect("/thank-you?service=hernia");
}

export async function submitGallbladderLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim().replace(/[\s-]/g, "");
  const email = String(formData.get("email") ?? "").trim();
  const preferredDate = String(formData.get("preferredDate") ?? "").trim();
  const condition = String(formData.get("condition") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!INDIAN_PHONE.test(phone)) {
    return { success: false, error: "Please enter a valid 10-digit Indian phone number." };
  }

  try {
    await recordLead("gallbladder", {
      Name: name,
      Phone: phone,
      Email: email,
      Condition: condition,
      "Preferred Date": preferredDate,
    });
  } catch (error) {
    console.error("[lead] gallbladder", error);
    return { success: false, error: SAVE_FAILED };
  }

  redirect("/thank-you?service=gallbladder");
}
