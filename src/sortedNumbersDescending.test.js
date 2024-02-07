import { sortedNumbersDescending } from './sortedNumbersDescending';

describe('sortedNumbersDescending function', () => {
  it('returns a new array of numbers', () => {
    let ns = [5, 4, 3, 2, 1];

    let ms = sortedNumbersDescending(ns);

    expect(ms).not.toBe(ns);

    // the input array of numbers was already sorted in descending order
    expect(ms).toStrictEqual(ns);
  });

  it('does not modify the input array of numbers at all', () => {
    let ns = [1, 2, 3, 4, 5];

    let ms = sortedNumbersDescending(ns);

    // was not changed at all
    expect(ns).toStrictEqual([1, 2, 3, 4, 5]);

    expect(ms).toStrictEqual([5, 4, 3, 2, 1]);
  });

  test('an empty array of numbers', () => {
    let ns = [];

    let ms = sortedNumbersDescending(ns);

    expect(ms).toStrictEqual([]);
  });

  test('an array of one number', () => {
    let ns = [38];

    let ms = sortedNumbersDescending(ns);

    expect(ms).toStrictEqual([38]);
  });

  test('an array of eight numbers', () => {
    let ns = [512, 32, -98, 1086, 982, 1224, 0.91, 88.5];

    let ms = sortedNumbersDescending(ns);

    expect(ms).toStrictEqual([1224, 1086, 982, 512, 88.5, 32, 0.91, -98]);
  });
});
