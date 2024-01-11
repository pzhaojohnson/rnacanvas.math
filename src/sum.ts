/**
 * Returns the sum of the numbers.
 */
export function sum(ns: number[]): number {
  let s = 0;

  ns.forEach(n => s += n);

  return s;
}
