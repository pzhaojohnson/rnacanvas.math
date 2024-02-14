import { sortedNumbers } from './sortedNumbers';

import { mean as average } from './mean';

/**
 * Returns the median of the given numbers.
 *
 * Returns the average of the two middle-most numbers if an even number of numbers is provided.
 *
 * Returns NaN for an empty array of numbers.
 */
export function median(ns: number[]): number {
  if (ns.length == 0) {
    return NaN;
  }

  let ms = sortedNumbers(ns);

  if (ms.length % 2 != 0) {
    let i = Math.floor(ms.length / 2);
    return ms[i];
  }

  let i = ms.length / 2;
  let j = i - 1;

  return average([ms[i], ms[j]]);
}
