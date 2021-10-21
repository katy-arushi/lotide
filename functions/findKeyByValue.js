/**
 * a function that searches for a key on an object where its value matches a given value
 * @param {object} myObject
 * @param {string} value
 * @returns {key in object} key in the object
 */

const findKeyByValue = function(myObject, value) {
  for (const property in myObject) {
    if (myObject[property] === value) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;