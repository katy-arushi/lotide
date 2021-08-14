/**
 * a function which utilizes eqArrays.js to compare two arrays for an exact match, then prints a pass or fail assertion

 * @param {array} list1
 * @param {array} list2
 */

const eqArrays = require('./eqArrays');

const assertArraysEqual = function(list1, list2) {
  if (!eqArrays(list1, list2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${list1} !== ${list2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${list1} === ${list2}`);
  }
};

module.exports = assertArraysEqual;