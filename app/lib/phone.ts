// Accepts 98765 43210, 098765 43210, +91 98765 43210, 91-98765-43210, etc.
// Returns the plain 10-digit mobile number, or null if it isn't valid.
export function normalizeIndianPhone(input: string): string | null {
  let digits = input.replace(/[\s\-().]/g, "");

  if (digits.startsWith("+91")) digits = digits.slice(3);
  else if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);

  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}

export const INVALID_PHONE_MESSAGE =
  "Please check your phone number. It should be a 10-digit mobile number, e.g. 98765 43210.";
