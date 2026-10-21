"use server";

import { redirect } from "next/navigation";
import { recordLead } from "@/app/lib/leads";
import { INVALID_PHONE_MESSAGE, normalizeIndianPhone } from "@/app/lib/phone";

export type HomeLeadFormState = {
  success: boolean;
  error?: string;
};

export async function submitHomeLead(
  _prevState: HomeLeadFormState,
  formData: FormData
): Promise<HomeLeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = normalizeIndianPhone(String(formData.get("phone") ?? ""));
  const speciality = String(formData.get("speciality") ?? "").trim();
  const doctor = String(formData.get("doctor") ?? "").trim();
  const mode = String(formData.get("mode") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!name) {
    return { success: false, error: "Please enter your name." };
  }

  if (!phone) {
    return { success: false, error: INVALID_PHONE_MESSAGE };
  }

  recordLead("home", {
    Name: name,
    Phone: phone,
    Speciality: speciality,
    Doctor: doctor,
    "Consultation Type": mode,
    Notes: notes,
  });

  redirect("/thank-you?service=home");
}
