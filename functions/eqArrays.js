/**
 * a function which compares two arrays and returns true or false, based on a perfect match.
 * @param {array} list1
 * @param {array} list2
 * @returns {boolean}
 */

const eqArrays = function(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;