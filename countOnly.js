/**
 * a function that accepts an array of names, and an object of names you wish to make a tally of. Returns a new object with a name count
 * @param {array} allItems 
 * @param {object} itemsToCount 
 * @returns {object} results
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        // checking if the item is already counted in the results object
        results[item] += 1;
        // if already in the object, add 1 to it's value
      } else {
        results[item] = 1;
        // if not in the object, add it and set it's value to 1
      }
    }
  }
  return results;
};

module.exports = countOnly;