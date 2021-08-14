/**
 * a function that accepts a nested array with infinite levels of nesting as an argument, and returns a single "flattened" array
 * @param {array} sourceArray
 * @returns {array} flatArray
 */

const flatten = function(sourceArray) {
  let flatArray = [];
  sourceArray.forEach((item) => {
    if (Array.isArray(item)) {
      flatArray = flatArray.concat(flatten(item));
    } else {
      flatArray.push(item);
    }
  });
  return flatArray;
};

module.exports = flatten;