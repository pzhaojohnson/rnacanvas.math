import { normalizeAngle } from './normalizeAngle';

test('`function normalizeAngle()`', () => {
  expect(normalizeAngle(0)).toBe(0);
  expect(normalizeAngle(0, 0)).toBe(0);
  expect(normalizeAngle(2 * Math.PI, 0)).toBe(0);

  expect(normalizeAngle(2 * Math.PI / 3)).toBeCloseTo(2 * Math.PI / 3);
  expect(normalizeAngle(2 * Math.PI / 3, Math.PI)).toBeCloseTo((2 * Math.PI / 3) + (2 * Math.PI));
  expect(normalizeAngle(2 * Math.PI / 3, -2 * Math.PI)).toBeCloseTo((2 * Math.PI / 3) - (2 * Math.PI));

  expect(normalizeAngle(Math.PI)).toBeCloseTo(-Math.PI);
  expect(normalizeAngle(Math.PI, 0)).toBeCloseTo(Math.PI);

  expect(normalizeAngle((4 * Math.PI / 5) + (12 * Math.PI))).toBeCloseTo(4 * Math.PI / 5);
  expect(normalizeAngle((4 * Math.PI / 5) + (12 * Math.PI), 16 * Math.PI)).toBeCloseTo((4 * Math.PI / 5) + (16 * Math.PI));
  expect(normalizeAngle((4 * Math.PI / 5) + (12 * Math.PI), -8 * Math.PI)).toBeCloseTo((4 * Math.PI / 5) - (8 * Math.PI));

  expect(normalizeAngle((4 * Math.PI / 5) - (12 * Math.PI))).toBeCloseTo(4 * Math.PI / 5);
  expect(normalizeAngle((4 * Math.PI / 5) - (12 * Math.PI), 16 * Math.PI)).toBeCloseTo((4 * Math.PI / 5) + (16 * Math.PI));
  expect(normalizeAngle((4 * Math.PI / 5) - (12 * Math.PI), -8 * Math.PI)).toBeCloseTo((4 * Math.PI / 5) - (8 * Math.PI));

  expect(normalizeAngle(9 * Math.PI / 5)).toBeCloseTo((9 * Math.PI / 5) - (2 * Math.PI));
  expect(normalizeAngle(9 * Math.PI / 5, 0)).toBeCloseTo(9 * Math.PI / 5);

  expect(normalizeAngle((9 * Math.PI / 5) + (24 * Math.PI))).toBeCloseTo((9 * Math.PI / 5) - (2 * Math.PI));
  expect(normalizeAngle((9 * Math.PI / 5) + (24 * Math.PI), 0)).toBeCloseTo(9 * Math.PI / 5);
  expect(normalizeAngle((9 * Math.PI / 5) + (24 * Math.PI), 16 * Math.PI)).toBeCloseTo((9 * Math.PI / 5) + (16 * Math.PI));
  expect(normalizeAngle((9 * Math.PI / 5) + (24 * Math.PI), -16 * Math.PI)).toBeCloseTo((9 * Math.PI / 5) - (16 * Math.PI));

  expect(normalizeAngle((9 * Math.PI / 5) - (24 * Math.PI))).toBeCloseTo((9 * Math.PI / 5) - (2 * Math.PI));
  expect(normalizeAngle((9 * Math.PI / 5) - (24 * Math.PI), 0)).toBeCloseTo(9 * Math.PI / 5);
  expect(normalizeAngle((9 * Math.PI / 5) - (24 * Math.PI), 16 * Math.PI)).toBeCloseTo((9 * Math.PI / 5) + (16 * Math.PI));
  expect(normalizeAngle((9 * Math.PI / 5) - (24 * Math.PI), -16 * Math.PI)).toBeCloseTo((9 * Math.PI / 5) - (16 * Math.PI));
});
