/**
 * Returns the maximum of the numbers.
 *
 * Returns -Infinity for an empty array of numbers.
 *
 * The primary benefit of using this function over Math.max is that Math.max is limited in the number of arguments
 * that it can receive (since each argument goes onto the stack).
 */
export function max(ns: number[]): number {
  if (ns.length == 0) {
    return -Infinity;
  }

  let m = ns[0];

  ns.slice(1).forEach(n => {
    m = Math.max(m, n);
  });

  return m;
}
