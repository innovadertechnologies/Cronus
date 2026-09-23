export type LeadSheet = "hernia" | "gallbladder" | "maternity";

// Paste each Google Sheet's Apps Script Web app URL here
// (see google-sheets/README.md). Leave "" to just log the lead.
const SHEET_URLS: Record<LeadSheet, string> = {
  hernia: "https://script.google.com/macros/s/AKfycbxUC_xgwdhH_Qrca-2-T7RT2k8AKgG2khAxo8gP-2R8LnGpIT09vtW56neKyclL1htVvg/exec",
  gallbladder: "https://script.google.com/macros/s/AKfycbwj1D_A9fqHC-1W_veS2h14dlyQOHygjfhddP0pgT5mwqDaNW0DCoqor9NrkdOvhGfA/exec",
  maternity: "https://script.google.com/macros/s/AKfycbwdXzH7Jf0DDO2uo4LYgQsKjfz56gvB2hymKdr9vVQgZW5ahpbd25YPgWqs0g4XoP3z/exec",
};

// Keys become column headers in the sheet, in this order.
export type LeadFields = Record<string, string>;

export async function recordLead(sheet: LeadSheet, fields: LeadFields) {
  const row = {
    "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ...fields,
  };

  const url = SHEET_URLS[sheet];
  if (!url) {
    console.warn(`[lead] no sheet URL set for "${sheet}", logging only`, row);
    return;
  }

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Sheet "${sheet}" rejected lead: ${res.status}`);
  }
}
