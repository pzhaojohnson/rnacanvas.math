import { sum } from './sum';

describe('sum function', () => {
  test('zero numbers', () => {
    expect(sum([])).toBe(0);
  });

  test('one number', () => {
    expect(sum([1])).toBe(1);
    expect(sum([-16])).toBe(-16);
    expect(sum([1001])).toBe(1001);
  });

  test('six numbers', () => {
    expect(sum([500, -12, 1, 6, 837, -81])).toBe(1251);
  });
});
