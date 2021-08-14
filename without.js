/**
 * a function that accepts two arrays: the source array, and an "itemsToRemove" array. It returns a new array with the items removed.
 * @param {array} sourceArray
 * @param {array} itemsToRemove
 * @returns {array} newArray
 */

const without = function(sourceArray, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let addItem = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (sourceArray[i] === itemsToRemove[j]) {
        addItem = false;
      }
    }
    if (addItem) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = without;