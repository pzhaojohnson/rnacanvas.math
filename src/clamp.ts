/**
 * Clamps the number to the given range
 * (i.e., returns the floor if the number is below the floor,
 * returns the ceiling if the number is above the ceiling,
 * and returns the number itself if it is between the floor and the ceiling).
 *
 * It is not firmly defined what is returned when the floor is above the ceiling.
 */
export function clamp(n: number, floor: number, ceiling: number): number {
  if (n < floor) {
    return floor;
  } else if (n > ceiling) {
    return ceiling;
  } else {
    return n;
  }
}
