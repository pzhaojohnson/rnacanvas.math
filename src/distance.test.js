import { distance } from './distance';

test('`function distance()`', () => {
  expect(distance(5, -3)).toBeCloseTo(8);

  // switch order
  expect(distance(-3, 5)).toBeCloseTo(8);

  // some more test cases
  [
    [[11, 21], 10],
    [[1.1, 23.9], 22.8],
    [[-6.1, 3.1], 9.2]
  ].forEach(([[n1, n2], d]) => {
    expect(distance(n1, n2)).toBeCloseTo(d);

    // switch order
    expect(distance(n2, n1)).toBeCloseTo(d);
  });

  // test nonfinite numbers
  expect(distance(1, NaN)).toBeNaN();
  expect(distance(Infinity, 2)).toBe(Infinity);
});
