/**
 * Formats a phone number into the standard format:
 * (XX) XXXXX-XXXX for 11-digit numbers
 * (XX) XXXX-XXXX for 10-digit numbers
 *
 * @param phone - The phone number string to format.
 * @returns The formatted phone number or the original, if is not 10 or 11 digits.
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "")

  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3")
  }

  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
  }

  // If the phone number is not a standard 10 or 11 numbers, return the original string
  return phone
}
