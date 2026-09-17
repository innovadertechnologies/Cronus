import { redirect } from "next/navigation";

export interface MaternityLeadFormState {
  success: boolean;
  error?: string;
}

export async function submitMaternityLead(
  prevState: MaternityLeadFormState,
  formData: FormData
): Promise<MaternityLeadFormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const pregnancyStage = formData.get("pregnancyStage") as string;
  const appointmentDate = formData.get("appointmentDate") as string;

  if (!name || !phone) {
    return {
      success: false,
      error: "Name and phone number are required.",
    };
  }

  if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
    return {
      success: false,
      error: "Please enter a valid 10-digit phone number.",
    };
  }

  try {
    // Here you would typically save to a database or send to an API
    console.log("Maternity lead submitted:", {
      name,
      phone,
      pregnancyStage,
      appointmentDate,
      service: "maternity",
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to thank you page
    redirect("/thank-you?service=maternity");
  } catch (error) {
    console.error("Error submitting maternity lead:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}