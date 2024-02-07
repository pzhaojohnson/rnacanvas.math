/**
 * Returns true if the number is greater than or equal to the floor
 * and less than or equal to the ceiling.
 *
 * Returns false otherwise.
 */
export function isBetweenInclusive(n: number, floor: number, ceiling: number): boolean {
  return (
    n >= floor
    && n <= ceiling
  );
}
