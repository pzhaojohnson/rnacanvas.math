import { sortNumbers as sortNumbersAscending } from './sortNumbers';

/**
 * Sorts the array of numbers (in place) in descending order.
 */
export function sortNumbersDescending(ns: number[]): void {
  sortNumbersAscending(ns);
  ns.reverse();
}
