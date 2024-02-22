import { radians } from './radians';

test('radians function', () => {
  expect(radians(180)).toBeCloseTo(Math.PI);
  expect(radians(90)).toBeCloseTo(Math.PI / 2);
  expect(radians(0)).toBeCloseTo(0);
  expect(radians(-30)).toBeCloseTo(-Math.PI / 6);
  expect(radians(-765)).toBeCloseTo(-17 * Math.PI / 4);
  expect(radians(840)).toBeCloseTo(14 * Math.PI / 3);
});
