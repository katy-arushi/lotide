/**
 * a function which accepts an array as an argument, and returns the tail (every element but the first) of the array
 * @param {array} originalArray
 * @returns {array} newArray
 */

const tail = function(originalArray) {
  if (originalArray.length === 0 || originalArray.length === 1) {
    return [];
  } else {
    let newArray = originalArray.slice(1);
    return newArray;
  }
};

module.exports = tail;