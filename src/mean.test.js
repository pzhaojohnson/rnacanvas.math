import { mean } from './mean';

describe('mean function', () => {
  test('zero numbers', () => {
    expect(mean([])).toBeNaN();
  });

  test('one number', () => {
    expect(mean([2])).toBe(2);
    expect(mean([-124])).toBe(-124);
    expect(mean([55.2])).toBeCloseTo(55.2);
  });

  test('seven numbers', () => {
    expect(mean([14, 0.88, -129, 55, 2, 1002, 908])).toBeCloseTo(264.69714285714286);
  });
});
