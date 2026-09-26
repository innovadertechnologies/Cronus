"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export interface SpineLeadFormState {
  success: boolean;
  error?: string;
}

export async function submitSpineLead(
  _prevState: SpineLeadFormState,
  formData: FormData
): Promise<SpineLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const concern = String(formData.get("concern") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please check your email address, e.g. name@example.com." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  recordLead("spine", {
    Name: name,
    Phone: phone,
    Email: email,
    Concern: concern,
  });

  redirect("/thank-you?service=spine");
}
