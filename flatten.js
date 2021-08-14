/**
 * a function that accepts a nested array with one level of nesting as an argument, and returns a single "flattened" array
 * @param {array} sourceArray
 * @returns {array} flatArray
 */

const flatten = function(sourceArray) {
  let flatArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      for (let j = 0; j < sourceArray[i].length; j++) {
        flatArray.push(sourceArray[i][j]);
      }
    } else {
      flatArray.push(sourceArray[i]);
    }
  }
  return flatArray;
};

module.exports = flatten;