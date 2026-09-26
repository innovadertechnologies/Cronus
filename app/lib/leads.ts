import { after } from "next/server";

export type LeadSheet = "hernia" | "gallbladder" | "maternity" | "spine";

// Paste each Google Sheet's Apps Script Web app URL here
// (see google-sheets/README.md). Leave "" to just log the lead.
const SHEET_URLS: Record<LeadSheet, string> = {
  hernia: "https://script.google.com/macros/s/AKfycbxUC_xgwdhH_Qrca-2-T7RT2k8AKgG2khAxo8gP-2R8LnGpIT09vtW56neKyclL1htVvg/exec",
  gallbladder: "https://script.google.com/macros/s/AKfycbwj1D_A9fqHC-1W_veS2h14dlyQOHygjfhddP0pgT5mwqDaNW0DCoqor9NrkdOvhGfA/exec",
  maternity: "https://script.google.com/macros/s/AKfycbwdXzH7Jf0DDO2uo4LYgQsKjfz56gvB2hymKdr9vVQgZW5ahpbd25YPgWqs0g4XoP3z/exec",
  spine: "https://script.google.com/macros/s/AKfycbxMXuZiOHDabH4GxzYOKTx1t-rJmSMykibe03w97cL4xBXCnr8M2C6FoQZiM3o4JtZq/exec",
};

// Keys become column headers in the sheet, in this order.
export type LeadFields = Record<string, string>;

// Saving to the sheet (and the email it sends) takes a couple of seconds, so
// it runs after the response: the visitor lands on the thank-you page
// straight away instead of waiting on Google.
export function recordLead(sheet: LeadSheet, fields: LeadFields) {
  const row = {
    "Submitted At": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ...fields,
  };

  const url = SHEET_URLS[sheet];
  if (!url) {
    console.warn(`[lead] no sheet URL set for "${sheet}", logging only`, row);
    return;
  }

  after(async () => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        await sendToSheet(url, row);
        return;
      } catch (error) {
        // The full lead is in the log so it can be recovered by hand.
        console.error(`[lead] ${sheet} sheet save failed (attempt ${attempt})`, error, row);
      }
    }
  });
}

async function sendToSheet(url: string, row: LeadFields) {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(row),
    cache: "no-store",
    // Apps Script runs doPost, then answers with a 302 to a result page.
    // The row is already saved by then, so skip following it.
    redirect: "manual",
  });

  if (res.status !== 302 && !res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
}
