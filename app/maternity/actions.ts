"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";

export interface MaternityLeadFormState {
  success: boolean;
  error?: string;
}

const INDIAN_PHONE = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;

export async function submitMaternityLead(
  _prevState: MaternityLeadFormState,
  formData: FormData
): Promise<MaternityLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim().replace(/[\s-]/g, "");
  const pregnancyStage = String(formData.get("pregnancyStage") ?? "").trim();
  const appointmentDate = String(formData.get("appointmentDate") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!INDIAN_PHONE.test(phone)) {
    return { success: false, error: "Please enter a valid 10-digit Indian phone number." };
  }

  try {
    await recordLead("maternity", {
      Name: name,
      Phone: phone,
      "Pregnancy Stage": pregnancyStage,
      "Preferred Date": appointmentDate,
    });
  } catch (error) {
    console.error("[lead] maternity", error);
    return {
      success: false,
      error: "We couldn't submit your request. Please try again or call us directly.",
    };
  }

  // redirect() throws, so it must stay outside the try/catch.
  redirect("/thank-you?service=maternity");
}
