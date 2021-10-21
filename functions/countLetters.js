/**
 * a function that accepts a string of characters. It then returns an object with a tally of characters
 * @param {string} string of characters
 * @returns {object} object with a tally of characters
 */

const countLetters = function(myString) {
  const results = {};
  for (const char of myString) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = 1;
      } else {
        results[char]++;
      }
    }
  }
  return results;
};

module.exports = countLetters;