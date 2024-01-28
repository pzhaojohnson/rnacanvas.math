import { sortNumbers } from './sortNumbers';

describe('sortNumbers function', () => {
  test('zero numbers', () => {
    let ns = [];

    sortNumbers(ns);

    expect(ns).toStrictEqual([]);
  });

  test('one number', () => {
    let ns = [74218.3617];

    sortNumbers(ns);

    expect(ns).toStrictEqual([74218.3617]);
  });

  test('nine numbers', () => {
    let ns = [
      -179.45156898337956,
      -26.06873614340975,
      -101.25654317219946,
      38.34299305041486,
      0.5395635521245765,
      -58.24622842687853,
      129.05002396438613,
      -195.18144517663694,
      110.38222315948667,
    ];

    sortNumbers(ns);

    expect(ns).toStrictEqual([
      -195.18144517663694,
      -179.45156898337956,
      -101.25654317219946,
      -58.24622842687853,
      -26.06873614340975,
      0.5395635521245765,
      38.34299305041486,
      110.38222315948667,
      129.05002396438613,
    ]);
  });
});
