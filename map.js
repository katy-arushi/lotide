const map = function(myArray, callback) {
  const results = [];
  for (let word of myArray) {
    results.push(callback(word));
  }
  return results;
};

module.exports = map;