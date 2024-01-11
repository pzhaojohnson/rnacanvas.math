import { sum } from './sum';

/**
 * Returns the mean of the numbers.
 *
 * Returns NaN for an empty array of numbers.
 */
export function mean(ns: number[]): number {
  let s = sum(ns);

  return s / ns.length;
}
