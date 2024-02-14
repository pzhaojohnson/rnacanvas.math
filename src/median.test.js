import { median } from './median';

describe('median function', () => {
  test('an empty array of numbers', () => {
    let ns = [];

    expect(median(ns)).toBeNaN();
  });

  test('one number', () => {
    let ns = [8.29];

    expect(median(ns)).toBe(8.29);
  });

  test('two numbers', () => {
    let ns = [98, -54];

    expect(median(ns)).toBeCloseTo((98 + (-54)) / 2);
  });

  test('an odd number of numbers greater than one', () => {
    let ns = [55, -4, 12, 239, 41, 2, -4892, 0.5839, 22];

    expect(ns.length).toBe(9);

    expect(median(ns)).toBe(12);
  });

  test('an even number of numbers greater than two', () => {
    let ns = [5920, 428, -3910, 0.4829, 55, 2145, -948, 310, 4928391, 3394];

    expect(ns.length).toBe(10);

    expect(median(ns)).toBeCloseTo((310 + 428) / 2);
  });

  /**
   * A good thing to check
   * (since one will probably sort the input numbers in the process of finding the median).
   */
  it('does not modify the input array of numbers', () => {
    let ns = [5, 10, 22, 381, -3871, 0, 8, 8, 34, -381];

    median(ns);

    expect(ns).toStrictEqual([5, 10, 22, 381, -3871, 0, 8, 8, 34, -381]);
  });
});
