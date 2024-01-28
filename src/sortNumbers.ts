/**
 * Sorts the provided array of numbers in place
 * (i.e., edits the provided array of numbers).
 */
export function sortNumbers(ns: number[]): void {
  ns.sort((a, b) => a - b);
}
