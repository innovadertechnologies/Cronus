"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export type LeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitHerniaLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const email = String(formData.get("email") ?? "").trim();
  const problem = String(formData.get("problem") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  recordLead("hernia", {
    Name: name,
    Phone: phone,
    Email: email,
    Problem: problem,
  });

  redirect("/thank-you?service=hernia");
}

export async function submitGallbladderLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const email = String(formData.get("email") ?? "").trim();
  const preferredDate = String(formData.get("preferredDate") ?? "").trim();
  const condition = String(formData.get("condition") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  recordLead("gallbladder", {
    Name: name,
    Phone: phone,
    Email: email,
    Condition: condition,
    "Preferred Date": preferredDate,
  });

  redirect("/thank-you?service=gallbladder");
}
