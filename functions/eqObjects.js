/**
 * a function which compares two objects to see if both objects have identical keys with identical values.
 * @param {object} object1
 * @param {object} object2
 * @returns {boolean}
 */

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (const key of object1Array) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;