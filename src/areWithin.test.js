import { areWithin } from './areWithin';

test('areWithin function', () => {
  // the two numbers are equal
  expect(areWithin(10, 10, 0)).toBe(true);
  expect(areWithin(10, 10, 5)).toBe(true);
  expect(areWithin(10, 10, -2)).toBe(false);

  // first number is smaller
  expect(areWithin(7, 19, 0)).toBe(false);
  expect(areWithin(7, 19, 6)).toBe(false);
  expect(areWithin(7, 19, 19 - 7)).toBe(true);
  expect(areWithin(7, 19, 19 - 7 - 1e-6)).toBe(false);
  expect(areWithin(7, 19, 19 - 7 + 1e-6)).toBe(true);
  expect(areWithin(7, 19, 100)).toBe(true);
  expect(areWithin(7, 19, -3)).toBe(false);

  // second number is smaller
  expect(areWithin(3, -5, 0)).toBe(false);
  expect(areWithin(3, -5, 2)).toBe(false);
  expect(areWithin(3, -5, 3 - (-5))).toBe(true);
  expect(areWithin(3, -5, 3 - (-5) - 1e-6)).toBe(false);
  expect(areWithin(3, -5, 3 - (-5) + 1e-6)).toBe(true);
  expect(areWithin(3, -5, 50)).toBe(true);
  expect(areWithin(3, -5, -10)).toBe(false);
});
