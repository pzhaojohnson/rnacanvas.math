import { normalizeAngle } from './normalizeAngle';

/**
 * If the angle is within 90 degrees of the other angle,
 * returns the angle plus 180 degrees (in radians).
 *
 * Otherwise, returns the angle unchanged.
 *
 * Input angles and the returned angle are all to be expressed in radians.
 */
export function flipAway(angle: number, otherAngle: number): number {
  otherAngle = normalizeAngle(otherAngle, angle);

  let diff = otherAngle - angle;

  if (diff < Math.PI / 2 || diff > 3 * Math.PI / 2) {
    angle += Math.PI;
  }

  return angle;
}
