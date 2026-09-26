# Sending form leads to Google Sheets

Each landing page sends its leads to its own Google Sheet. Every new lead is also emailed to **CRONUSSOCIALS@GMAIL.COM**.

| Page | Sheet | Key in `app/lib/leads.ts` |
|---|---|---|
| `/` (Hernia) | Hernia Leads | `hernia` |
| `/gallbladder-surgery` | Gallbladder Leads | `gallbladder` |
| `/maternity` | Maternity Leads | `maternity` |
| `/spine` | Spine Leads | `spine` |

## 1. Set up each sheet (repeat for each page)

1. Create a new Google Sheet and give it a clear name, e.g. **Cronus – Hernia Leads**. The name is used in the email subject.
2. Go to **Extensions → Apps Script**.
3. Delete what's in the editor. Paste the contents of [Code.gs](Code.gs). Click **Save**.
4. Click **Deploy → New deployment**.
   - Click the gear icon → **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
   - Click **Deploy**. When asked, allow the permissions. The script needs access to the sheet and to send email. You may see a "Google hasn't verified this app" warning. If so, click **Advanced → Go to project**.
5. Copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy.../exec`.

## 2. Paste the URLs into the website

Open [app/lib/leads.ts](../app/lib/leads.ts). Fill in the URLs:

```ts
const SHEET_URLS: Record<LeadSheet, string> = {
  hernia: "https://script.google.com/macros/s/.../exec",
  gallbladder: "https://script.google.com/macros/s/.../exec",
  maternity: "https://script.google.com/macros/s/.../exec",
  spine: "https://script.google.com/macros/s/.../exec",
};
```

Then redeploy the site.

## Columns you will get

- **Hernia:** Submitted At, Name, Phone, Email, Problem
- **Gallbladder:** Submitted At, Name, Phone, Email, Condition, Preferred Date
- **Maternity:** Submitted At, Name, Phone, Pregnancy Stage, Preferred Date
- **Spine:** Submitted At, Name, Phone, Email, Concern (Email is filled from the pop-up and the booking form at the bottom of the page)

## If you edit Code.gs later

Go to **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**. This keeps the same URL.
