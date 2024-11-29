/**
 * Normalizes an angle (in radians) to a given range.
 *
 * Normalizes to the range [-Math.PI, Math.PI) by default.
 *
 * @param angle The angle to normalize.
 * @param floor The bottom end (inclusive) of the range to normalize to (defaults to -Math.PI).
 */
export function normalizeAngle(angle: number, floor=-Math.PI): number {
  let diff = angle - floor;

  diff %= 2 * Math.PI;

  diff = diff >= 0 ? diff : diff + (2 * Math.PI);

  return floor + diff;
}
