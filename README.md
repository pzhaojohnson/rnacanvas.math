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

### How to pass collections of numbers as parameters

In general throughout this package
collections of numbers are passed to functions/methods
in the form of iterable objects (e.g., an array),
as opposed to argument lists.

```javascript
sum([1, 2, 3, 4, 5]); // do this
sum(1, 2, 3, 4, 5); // NOT this
```

This decision was made due to the limit on how many arguments
can possibly be passed to a function in JavaScript on the stack
(often only in the 10's of thousands),
while numbers passed in as arrays are limited only by the total memory available.

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

## `isBetween()`

Returns `true` if and only if a number is within a specified range, inclusive.

```javascript
isBetween(n, floor, ceiling); // usage

isBetween(6, 7, 9); // false
isBetween(7, 7, 9); // true
isBetween(8, 7, 9); // true
isBetween(9, 7, 9); // true
isBetween(10, 7, 9); // false
```

## `isBetweenInclusive()`

An alias for the `isBetween()` function.

## `isBetweenExclusive()`

Returns `true` if and only if a number is within a specified range, exclusive.

```javascript
isBetweenExclusive(n, floor, ceiling); // usage

isBetweenExclusive(6, 7, 9); // false
isBetweenExclusive(7, 7, 9); // false
isBetweenExclusive(8, 7, 9); // true
isBetweenExclusive(9, 7, 9); // false
isBetweenExclusive(10, 7, 9); // false
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

## `sortNumbers()`

Sorts an array of numbers <b>in place</b> in ascending order.

```javascript
var ns = [8, -3, 55, 24, 39];
sortNumbers(ns);
ns; // [-3, 8, 24, 39, 55]
```

## `sortNumbersAscending()`

An alias for the `sortNumbers()` function.

## `sortNumbersDescending()`

Sorts an array of numbers <b>in place</b> in descending order.

```javascript
var ns = [9, 27, -84, 0, -19];
sortNumbersDescending(ns);
ns; // [27, 9, 0, -19, -84]
```

## `sortedNumbers()`

Returns a copy of an array of numbers sorted in ascending order.
Does not modify the input array of numbers.

```javascript
sortedNumbers([5, 28, -44, 2, -1]); // [-44, -1, 2, 5, 28]
```

## `sortedNumbersAscending()`

An alias for the `sortedNumbers()` function.

## `sortedNumbersDescending()`

Returns a copy of an array of numbers sorted in descending order.
Does not modify the input array of numbers.

```javascript
sortedNumbersDescending([6, 2, 91, -15, 25]); // [91, 25, 6, 2, -15]
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

##  `normalizeAngle()`

Normalize an angle (in radians) to a given range.

By default, normalizes angles to the range `[-Math.PI, Math.PI)`,
which is the default range returned by methods such as `Math.atan2()`.

The range to normalize to is indicated by specifying a second `floor` argument,
which is the bottom end (inclusive) of the range to normalize to.

```javascript
normalizeAngle((Math.PI / 3) + (12 * Math.PI)); // Math.PI / 3
normalizeAngle((2 * Math.PI / 3) - (28 * Math.PI)); // 2 * Math.PI / 3

// normalizes to the range [-Math.PI, Math.PI) by default
normalizeAngle(3 * Math.PI / 2); // -Math.PI / 2
normalizeAngle(-Math.PI / 3); // -Math.PI / 3

// normalize angles to the range [0, 2 * Math.PI) instead
// (by passing in a second `floor` argument of zero)
normalizeAngle(3 * Math.PI / 2, 0); // 3 * Math.PI / 2
normalizeAngle(-Math.PI / 3, 0); // (2 * Math.PI) - (Math.PI / 3)

// the second `floor` argument can be any angle
normalizeAngle(Math.PI / 3, -14 * Math.PI); // (Math.PI / 3) - (14 * Math.PI)
```
