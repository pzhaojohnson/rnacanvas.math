/**
 * Returns the minimum of the numbers.
 *
 * Returns Infinity for an empty array of numbers.
 *
 * The primary benefit of using this function over Math.min is that Math.min is limited in the number of arguments
 * that it can receive (since each argument goes onto the stack).
 */
export function min(ns: number[]): number {
  if (ns.length == 0) {
    return Infinity;
  }

  let m = ns[0];

  ns.slice(1).forEach(n => {
    m = Math.min(m, n);
  });

  return m;
}
