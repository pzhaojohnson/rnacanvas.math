import { flipAway } from './flipAway';

test('`function flipAway()`', () => {
  expect(flipAway(0, 0)).toBeCloseTo(Math.PI);

  expect(flipAway(Math.PI / 3, Math.PI / 6)).toBeCloseTo((Math.PI / 3) + Math.PI);
  expect(flipAway(Math.PI / 3, 4 * Math.PI / 6)).toBeCloseTo((Math.PI / 3) + Math.PI);
  expect(flipAway(Math.PI / 3, 7 * Math.PI / 6)).toBeCloseTo(Math.PI / 3);
  expect(flipAway(Math.PI / 3, 10 * Math.PI / 6)).toBeCloseTo(Math.PI / 3);

  expect(flipAway(-6 * Math.PI / 5, Math.PI / 4)).toBeCloseTo(-6 * Math.PI / 5);
  expect(flipAway(-6 * Math.PI / 5, 3 * Math.PI / 4)).toBeCloseTo((-6 * Math.PI / 5) + Math.PI);
  expect(flipAway(-6 * Math.PI / 5, 5 * Math.PI / 4)).toBeCloseTo((-6 * Math.PI / 5) + Math.PI);
  expect(flipAway(-6 * Math.PI / 5, 7 * Math.PI / 4)).toBeCloseTo(-6 * Math.PI / 5);

  // test boundary conditions
  expect(flipAway(0, (Math.PI / 2) - 0.000001)).toBeCloseTo(Math.PI);
  expect(flipAway(0, (Math.PI / 2) + 0.000001)).toBeCloseTo(0);
  expect(flipAway(0, (-Math.PI / 2) - 0.000001)).toBeCloseTo(0);
  expect(flipAway(0, (-Math.PI / 2) + 0.000001)).toBeCloseTo(Math.PI);
});
