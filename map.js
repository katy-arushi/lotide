/**
 * a function that creates a new array populated with results of a callback function on every element in a specified array
 * @param {array} myArray
 * @param {function} callback
 * @returns {array} results
 */

const map = function(myArray, callback) {
  const results = [];
  for (let word of myArray) {
    results.push(callback(word));
  }
  return results;
};

module.exports = map;