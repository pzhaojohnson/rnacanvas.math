import { clamp } from './clamp';

describe('clamp function', () => {
  test('a number between the floor and ceiling', () => {
    expect(clamp(6.2, 5, 9.5)).toBe(6.2);
  });

  test('a number equal to the floor', () => {
    expect(clamp(1.8, 1.8, 2.2)).toBe(1.8);
  });

  test('a number equal to the ceiling', () => {
    expect(clamp(-2.7, -5, -2.7)).toBe(-2.7);
  });

  test('a number below the floor', () => {
    expect(clamp(-2, 1.67, 8)).toBe(1.67);
  });

  test('a number above the ceiling', () => {
    expect(clamp(12, 3, 7.08)).toBe(7.08);
  });
});
