const map = function(myArray, callback) {
  const results = [];
  for (let word of myArray) {
    results.push(callback(word));
  }
  return results;
};

// TEST CASES
const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, word => word[0]));
console.log(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']))

