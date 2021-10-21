/**
 * a function that takes in an object and a callback, and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
 * @param {object} object
 * @param {function} callback
 * @returns {key in object} key in the object
 */

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;