# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

Published [here](https://www.npmjs.com/package/@akatyal/lotide) on NPM.

A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Arushi Katyal](https://github.com/katy-arushi).

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

## Usage

**Install it:**

`npm install @akatyal/lotide`

**Require it:**

`const _ = require('@akatyal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation
[assertArraysEqual.js](/assertFunctions/assertArraysEqual.js)

 * a function which utilizes eqArrays.js to compare two arrays for an exact match, then prints a pass or fail assertion

[assertEqual.js](/assertFunctions/assertEqual.js)

* a function which accepts two primitive data types as arguments: actual outcome and expected result. The function then prints to console whether the outcome matches the expected result with an assertion statement

[assertObjectsEqual.js](/assertFunctions/assertObjectsEqual.js)

* a function which takes two parameters, the actual object, and the expected object, and returns an assertion passed or failed

[countLetters.js](/functions/countLetters.js)

* a function that accepts a string of characters. It then returns an object with a tally of characters

[countOnly.js](/functions/countOnly.js)

* a function that accepts an array of names, and an object of names you wish to make a tally of. Returns a new object with a name count

[eqArrays.js](/functions/eqArrays.js)

 * a function which compares two arrays and returns true or false, based on a perfect match.

[eqObjects.js](/functions/eqObjects.js)

 * a function which compares two objects to see if both objects have identical keys with identical values.

[findKey.js](/functions/findKey.js)

 * a function that takes in an object and a callback, and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.

[findByKeyValue.js](/functions/findKeyByValue.js)

* a function that searches for a key on an object where its value matches a given value

[flatten.js](/functions/flatten.js)

* a function that accepts a nested array with infinite levels of nesting as an argument, and returns a single "flattened" array

[head.js](/functions/head.js)

* a function which accepts an array as an argument, and returns the head of the array

[letterPositions.js](/functions/letterPositions.js)

* a function that accepts a string of characters. It then returns an object with an array for each character present

[map.js](/functions/map.js)

* a function that creates a new array populated with results of a callback function on every element in a specified array

[middle.js](/functions/middle.js)

* a function that accepts an array, and returns the middle index value(s) in a new array

[tail.js](/functions/tail.js)

* a function which accepts an array as an argument, and returns the tail of the array

[takeUntil.js](/functions/takeUntil.js)

* a function that will collect items from a provided array until the callback function provided returns a truthy value

[without.js](/functions/without.js)

* a function that accepts two arrays: the source array, and an "itemsToRemove" array. It returns a new array with the items removed.
