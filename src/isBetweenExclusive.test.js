import { isBetweenExclusive } from './isBetweenExclusive';

test('isBetweenExclusive function', () => {
  // number is far away from floor and ceiling
  expect(isBetweenExclusive(50, 33, 68)).toBe(true);
  expect(isBetweenExclusive(11, 33, 68)).toBe(false);
  expect(isBetweenExclusive(72, 33, 68)).toBe(false);

  // number is close to floor
  expect(isBetweenExclusive(-8, -8, 2)).toBe(false);
  expect(isBetweenExclusive(-8 + 1e-6, -8, 2)).toBe(true);
  expect(isBetweenExclusive(-8 - 1e-6, -8, 2)).toBe(false);

  // number is close to ceiling
  expect(isBetweenExclusive(28, 12, 28)).toBe(false);
  expect(isBetweenExclusive(28 - 1e-6, 12, 28)).toBe(true);
  expect(isBetweenExclusive(28 + 1e-6, 12, 28)).toBe(false);

  // floor and ceiling are equal
  expect(isBetweenExclusive(5, 5, 5)).toBe(false);
  expect(isBetweenExclusive(5 - 1e-6, 5, 5)).toBe(false);
  expect(isBetweenExclusive(5 + 1e-6, 5, 5)).toBe(false);
  expect(isBetweenExclusive(5 - 6, 5, 5)).toBe(false);
  expect(isBetweenExclusive(5 + 12, 5, 5)).toBe(false);

  // floor is greater than ceiling
  expect(isBetweenExclusive(5, 6, 4)).toBe(false);
  expect(isBetweenExclusive(8, 6, 4)).toBe(false);
  expect(isBetweenExclusive(2, 6, 4)).toBe(false);
});
