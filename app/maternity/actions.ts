"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export interface MaternityLeadFormState {
  success: boolean;
  error?: string;
}

export async function submitMaternityLead(
  _prevState: MaternityLeadFormState,
  formData: FormData
): Promise<MaternityLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const pregnancyStage = String(formData.get("pregnancyStage") ?? "").trim();
  const appointmentDate = String(formData.get("appointmentDate") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  recordLead("maternity", {
    Name: name,
    Phone: phone,
    "Pregnancy Stage": pregnancyStage,
    "Preferred Date": appointmentDate,
  });

  redirect("/thank-you?service=maternity");
}
