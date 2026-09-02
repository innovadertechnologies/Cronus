"use server";

import { recordLead } from "@/app/lib/leads";

export type LeadFormState = {
  success: boolean;
  error?: string;
};

const INDIAN_PHONE = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

export async function submitHerniaLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim().replace(/[\s-]/g, "");
  const problem = String(formData.get("problem") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!INDIAN_PHONE.test(phone)) {
    return { success: false, error: "Please enter a valid 10-digit Indian phone number." };
  }

  await recordLead({
    page: "hernia-treatment-delhi-ncr",
    name,
    phone,
    problem: problem || "Not specified",
    submittedAt: new Date().toISOString(),
  });

  return { success: true };
}

export async function submitGallbladderLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim().replace(/[\s-]/g, "");
  const preferredDate = String(formData.get("preferredDate") ?? "").trim();
  const condition = String(formData.get("condition") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!INDIAN_PHONE.test(phone)) {
    return { success: false, error: "Please enter a valid 10-digit Indian phone number." };
  }

  const details = [preferredDate && `Preferred date: ${preferredDate}`, condition]
    .filter(Boolean)
    .join(" | ");

  await recordLead({
    page: "gallbladder-surgery-delhi",
    name,
    phone,
    problem: details || "Not specified",
    submittedAt: new Date().toISOString(),
  });

  return { success: true };
}
