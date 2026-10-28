"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export interface UrologyLeadFormState {
  success: boolean;
  error?: string;
}

export async function submitUrologyLead(
  _prevState: UrologyLeadFormState,
  formData: FormData
): Promise<UrologyLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const concern = String(formData.get("concern") ?? "").trim();
  const appointmentDate = String(formData.get("appointmentDate") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  if (!concern) {
    return { success: false, error: "Please select your concern." };
  }

  recordLead("urology", {
    Name: name,
    Phone: phone,
    Concern: concern,
    "Preferred Appointment Date": appointmentDate || "Not specified",
  });

  redirect("/thank-you?service=urology");
}
