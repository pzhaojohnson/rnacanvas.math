/**
 * Rounds the number to the specified number of decimal places
 * (using the `Number.toFixed()` method).
 *
 * When the number of decimal places is not specified,
 * the number is rounded to zero decimal places.
 *
 * Throws if the number of decimal places to round to is not in the range 0 to 20, inclusive.
 */
export function round(n: number, decimalPlaces?: number): number | never {
  return Number.parseFloat(n.toFixed(decimalPlaces ?? 0));
}
