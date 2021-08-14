/**
 * a function that accepts a string of characters. It then returns an object with an array for each character present
 * @param {string} sentence
 * @returns {object} results
 */

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (sentence[i] !== " ") {
      if (!results[char]) {
        results[char] = [i];
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;