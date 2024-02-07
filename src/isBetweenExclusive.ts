/**
 * Returns true if the number is greater than the floor
 * and less than the ceiling.
 *
 * Returns false otherwise (including if the number is equal to the floor or the ceiling).
 */
export function isBetweenExclusive(n: number, floor: number, ceiling: number): boolean {
  return (
    n > floor
    && n < ceiling
  );
}
