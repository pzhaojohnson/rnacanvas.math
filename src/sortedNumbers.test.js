import { sortedNumbers } from './sortedNumbers';

describe('sortedNumbers function', () => {
  it('returns the input numbers sorted in ascending order', () => {
    let ns = [47, 237, -487826, 36, 5.273648, 36.36, 378, 853, 61527, -378];

    expect(sortedNumbers(ns)).toStrictEqual([-487826, -378, 5.273648, 36, 36.36, 47, 237, 378, 853, 61527]);
  });

  it('returns a new array of numbers', () => {
    let ns = [7428, 3617, 3, 4892.3716, -3782, -4, -3872564];

    let ms = sortedNumbers(ns);

    expect(ms).not.toBe(ns);
  });

  it('does not modify the input array of numbers', () => {
    let ns = [5, 2838, -4728, 4.78364, -482794, 36, 17846];

    sortedNumbers(ns);

    expect(ns).toStrictEqual([5, 2838, -4728, 4.78364, -482794, 36, 17846]);
  });

  test('an empty array of numbers', () => {
    let ns = [];

    expect(sortedNumbers(ns)).toStrictEqual([]);
  });
});
