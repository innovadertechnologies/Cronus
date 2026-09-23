// Paste this into Extensions → Apps Script of each lead sheet
// (Hernia, Gallbladder, Maternity) and deploy it as a web app.

const NOTIFY_EMAIL = "CRONUSSOCIALS@GMAIL.COM";

function doPost(e) {
  const row = JSON.parse(e.postData.contents);
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheets()[0];

  // Add the header row the first time
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(Object.keys(row));
  }

  // Save the lead
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(headers.map(function (h) {
    return row[h] ? "'" + row[h] : "";
  }));

  // Email the lead
  const details = Object.keys(row).map(function (key) {
    return key + ": " + (row[key] || "-");
  }).join("\n");

  MailApp.sendEmail(
    NOTIFY_EMAIL,
    "New Lead - " + spreadsheet.getName() + " - " + row["Name"],
    "A new lead was submitted on the website.\n\n" + details + "\n\nSheet: " + spreadsheet.getUrl()
  );

  return ContentService.createTextOutput("ok");
}
