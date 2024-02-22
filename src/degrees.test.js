import { degrees } from './degrees';

test('degrees function', () => {
  expect(degrees(Math.PI)).toBeCloseTo(180);
  expect(degrees(Math.PI / 2)).toBeCloseTo(90);
  expect(degrees(0)).toBeCloseTo(0);
  expect(degrees(-Math.PI / 3)).toBeCloseTo(-60);
  expect(degrees(-5 * Math.PI / 6)).toBeCloseTo(-150);
  expect(degrees(11 * Math.PI / 4)).toBeCloseTo(495);
});
