export type LeadPayload = {
  page: string;
  name: string;
  phone: string;
  problem: string;
  submittedAt: string;
};

// TODO: wire this up to a real destination (CRM, email service, Google
// Sheet, etc). For now every lead is just logged server-side so the
// booking flow can be built, tested and demoed end to end.
export async function recordLead(payload: LeadPayload) {
  console.log("[lead]", payload);
}
