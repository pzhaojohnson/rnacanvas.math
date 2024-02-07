/**
 * Returns true if the absolute difference between the two numbers
 * is less than or equal to the specified maximum difference.
 *
 * Returns false otherwise.
 */
export function areWithin(n1: number, n2: number, maxDifference: number): boolean {
  return Math.abs(n1 - n2) <= maxDifference;
}
