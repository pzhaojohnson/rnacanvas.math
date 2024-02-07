import { isBetweenInclusive } from './isBetweenInclusive';

test('isBetweenInclusive function', () => {
  // number is far away from floor and ceiling
  expect(isBetweenInclusive(50, 33, 68)).toBe(true);
  expect(isBetweenInclusive(11, 33, 68)).toBe(false);
  expect(isBetweenInclusive(72, 33, 68)).toBe(false);

  // number is close to floor
  expect(isBetweenInclusive(-8, -8, 2)).toBe(true);
  expect(isBetweenInclusive(-8 + 1e-6, -8, 2)).toBe(true);
  expect(isBetweenInclusive(-8 - 1e-6, -8, 2)).toBe(false);

  // number is close to ceiling
  expect(isBetweenInclusive(28, 12, 28)).toBe(true);
  expect(isBetweenInclusive(28 - 1e-6, 12, 28)).toBe(true);
  expect(isBetweenInclusive(28 + 1e-6, 12, 28)).toBe(false);

  // floor and ceiling are equal
  expect(isBetweenInclusive(5, 5, 5)).toBe(true);
  expect(isBetweenInclusive(5 - 1e-6, 5, 5)).toBe(false);
  expect(isBetweenInclusive(5 + 1e-6, 5, 5)).toBe(false);
  expect(isBetweenInclusive(5 - 6, 5, 5)).toBe(false);
  expect(isBetweenInclusive(5 + 12, 5, 5)).toBe(false);

  // floor is greater than ceiling
  expect(isBetweenInclusive(5, 6, 4)).toBe(false);
  expect(isBetweenInclusive(8, 6, 4)).toBe(false);
  expect(isBetweenInclusive(2, 6, 4)).toBe(false);
});
