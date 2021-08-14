/**
 * A function which accepts two primitive data types as arguments: actual outcome and expected result. The function then prints to console whether the outcome matches the expected result with an assertion statement
 * @param {primitive data type} actual
 * @param {primitive data type} expected
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
