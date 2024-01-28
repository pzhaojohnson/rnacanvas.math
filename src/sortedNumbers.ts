import { sortNumbers } from './sortNumbers';

/**
 * Returns a copy of the provided array of numbers sorted in ascending order.
 *
 * (Does not modify the provided array of numbers.)
 */
export function sortedNumbers(ns: number[]): number[] {
  let ms = [...ns];

  sortNumbers(ms);

  return ms;
}
