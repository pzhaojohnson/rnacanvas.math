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

## `median()`

Returns the median of an array of numbers.
If there an even number of numbers,
then the average of the middle two numbers is returned.
Returns `NaN` for an empty array of numbers.

```javascript
median([]); // NaN
median([6]); // 6
median([11, 17]); // 14
median([4, -9, 28, 22, 9, 7, -3]); // 7
```

## `min()`

Returns the minimum of an array of numbers.
Returns `Infinity` for an empty array of numbers.

```javascript
min([]); // Infinity
min([57]); // 57
min([5, 9, -12, 18, -19, 24]); // -19
```

## `max()`

Returns the maximum of an array of numbers.
Returns `-Infinity` for an empty array of numbers.

```javascript
max([]); // -Infinity
max([-84]); // -84
max([18, 1, 55, -28, 19.4]); // 55
```

## `clamp()`

Clamp a number to a given range.

```javascript
clamp(n, floor, ceiling); // usage

clamp(2, 5, 10); // 5
clamp(18, 5, 10); // 10
clamp(6, 5, 10); // 6 (is already in range)
```

## `areWithin()`

Returns `true` if two numbers are within a specified distance from each other.

```javascript
areWithin(n1, n2, maxDifference); // usage

areWithin(5, 5, 0); // true
areWithin(5, 5, 2); // true
areWithin(5, 6, 2); // true
areWithin(5, 7, 2); // true
areWithin(5, 8, 2); // false
```

## `degrees()`

Convert a given angle in radians to degrees.

```javascript
degrees(Math.PI); // 180
degrees(-Math.PI); // -180

degrees(Math.PI / 3); // 60
degrees(-11 * Math.PI / 4); // -495
```

## `radians()`

Convert a given angle in degrees to radians.

```javascript
radians(180); // Math.PI
radians(-180); // -Math.PI

radians(60); // Math.PI / 3
radians(-495); // -11 * Math.PI / 4
```
