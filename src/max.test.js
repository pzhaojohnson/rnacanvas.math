import { max } from './max';

describe('max function', () => {
  test('an empty array of numbers', () => {
    let ns = [];

    expect(max(ns)).toBe(-Infinity);
  });

  test('one number', () => {
    let ns = [33.1];

    expect(max(ns)).toBe(33.1);
  });

  test('five numbers (and the maximum number is in the middle)', () => {
    let ns = [5, 91, 33, 64, 21];

    expect(ns.length).toBe(5);

    expect(max(ns)).toBe(91);
  });

  test('twelve numbers (and the maximum number is in the middle)', () => {
    let ns = [104, 22, -88, 309, 28, 124, 445, 108, 92, -12, 298, 311];

    expect(ns.length).toBe(12);

    expect(max(ns)).toBe(445);
  });

  test('the maximum number is the first number', () => {
    let ns = [50, 12, 33, 45];

    expect(max(ns)).toBe(50);
  });

  test('the maximum number is the last number', () => {
    let ns = [5, 6, -8, 12, 19];

    expect(max(ns)).toBe(19);
  });
});
