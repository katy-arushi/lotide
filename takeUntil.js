/**
 * a function that will collect items from a provided array until the callback function returns a truthy value
 * @param {array} array
 * @param {function} callback
 * @returns {array} results
 */

const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
};

module.exports = takeUntil;