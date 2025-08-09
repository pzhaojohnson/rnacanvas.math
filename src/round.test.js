import { round } from './round';

test('`function round()`', () => {
  // rounding up
  expect(round(11.86837164, 4)).toBe(11.8684);
  expect(round(9.73225, 4)).toBe(9.7323);
  expect(round(10863.9753617, 6)).toBe(10863.975362);

  // rounding down
  expect(round(11.86837164, 3)).toBe(11.868);
  expect(round(9.73225, 2)).toBe(9.73);
  expect(round(10863.9753617, 5)).toBe(10863.97536);

  // negative numbers
  expect(round(-11.86837164, 3)).toBe(-11.868);
  expect(round(-9.73225, 4)).toBe(-9.7323);
  expect(round(-10863.9753617, 2)).toBe(-10863.98);

  // rounding to zero decimal places
  expect(round(-11.86837164, 0)).toBe(-12);

  // is already rounded
  expect(round(9, 0)).toBe(9);

  // not specifying the number of decimal places
  expect(round(-11.86837164)).toBe(-12);

  // invalid numbers of decimal places
  expect(() => round(-11.86837164, -1)).toThrow();
  expect(() => round(-11.86837164, 101)).toThrow();

  // the `Number.toFixed()` method seems to handle this
  expect(round(-11.86837164, 2.5)).toBe(-11.87);
});
