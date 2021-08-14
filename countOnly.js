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