"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export interface KneeHipLeadFormState {
  success: boolean;
  error?: string;
}

export async function submitKneeHipLead(
  _prevState: KneeHipLeadFormState,
  formData: FormData
): Promise<KneeHipLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const concern = String(formData.get("concern") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  if (!concern) {
    return { success: false, error: "Please select either Knee Replacement or Hip Replacement." };
  }

  recordLead("knee-hip", {
    Name: name,
    Phone: phone,
    Concern: concern,
  });

  redirect("/thank-you?service=knee-hip");
}