import { sortedNumbers as sortedNumbersAscending } from './sortedNumbers';

/**
 * Returns a copy of the array of numbers
 * that has been sorted in descending order.
 *
 * Does not modify the input array of numbers at all.
 */
export function sortedNumbersDescending(ns: number[]): number[] {
  let ms = sortedNumbersAscending(ns);
  ms.reverse();
  return ms;
}
