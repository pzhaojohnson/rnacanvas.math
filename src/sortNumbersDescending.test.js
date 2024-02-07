import { sortNumbersDescending } from './sortNumbersDescending';

describe('sortNumbersDescending function', () => {
  test('an empty array of numbers', () => {
    let ns = [];

    sortNumbersDescending(ns);

    expect(ns).toStrictEqual([]);
  });

  test('an array of one number', () => {
    let ns = [-22];

    sortNumbersDescending(ns);

    expect(ns).toStrictEqual([-22]);
  });

  test('an array of nine numbers', () => {
    let ns = [9, 2, 38, -29.3, 55, 112, 1012, -27, -2];

    expect(ns.length).toBe(9);

    sortNumbersDescending(ns);

    expect(ns).toStrictEqual([1012, 112, 55, 38, 9, 2, -2, -27, -29.3]);
  });
});
