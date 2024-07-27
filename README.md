# Installation

With `npm`:

```
npm install @rnacanvas/math
```

# Usage

All exports of this package can be accessed as named imports.

```javascript
// some example imports
import { min, max } from '@rnacanvas/math';
import { mean, median } from '@rnacanvas/math';
import { sortNumbers, sortedNumbers } from '@rnacanvas/math';
```

## `sum()`

Calculates the sum of an array of numbers.
Returns `0` for an empty array of numbers.

```javascript
sum([]); // 0
sum([4]); // 4
sum([5, 10, -2, 23, -54]); // -18
```

## `mean()`

Calculates the mean of an array of numbers.
Returns `NaN` for an empty array of numbers.

```javascript
mean([]); // NaN
mean([18]); // 18
mean([8, 2, -20, 16, 54]); // 12
```

## `average()`

An alias for the `mean()` function.
