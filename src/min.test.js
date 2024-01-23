import { min } from './min';

describe('min function', () => {
  test('an empty array of numbers', () => {
    let ns = [];

    expect(min(ns)).toBe(Infinity);
  });

  test('one number', () => {
    let ns = [12.9];

    expect(min(ns)).toBe(12.9);
  });

  test('five numbers (and the minimum number is in the middle)', () => {
    let ns = [8, 2, 3.6, -4.2, 7];

    expect(ns.length).toBe(5);

    expect(min(ns)).toBe(-4.2);
  });

  test('twelve numbers (and the minimum number is in the middle)', () => {
    let ns = [112, 92, 38.2, 1008, 904, 227, 17.4, 100, 736, 812, 335, 508.2];

    expect(ns.length).toBe(12);

    expect(min(ns)).toBe(17.4);
  });

  test('the minimum number is the first number', () => {
    let ns = [5, 12, 19, 8];

    expect(min(ns)).toBe(5);
  });

  test('the minimum number is the last number', () => {
    let ns = [-19, -100, -24, -88, -712];

    expect(min(ns)).toBe(-712);
  });
});
