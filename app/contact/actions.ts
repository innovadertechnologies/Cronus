"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Same flow as the other lead forms: validate, save to the "contact" sheet
// after the response (see lib/leads.ts), then send the visitor to the
// contact thank-you page.
export async function submitContactLead(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const email = String(formData.get("email") ?? "").trim();
  const department = String(formData.get("department") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  if (!department) {
    return { success: false, error: "Please select a department." };
  }

  if (email && !EMAIL_PATTERN.test(email)) {
    return { success: false, error: "Please check your email address, or leave it empty." };
  }

  recordLead("contact", {
    Name: name,
    Phone: phone,
    Email: email,
    Department: department,
    Message: message,
  });

  redirect("/contact/thank-you");
}
