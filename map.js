const map = function(myArray, callback) {
  const results = [];
  for (let word of myArray) {
    results.push(callback(word));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, word => word[0]));

// TEST FUNCTION
function assertArraysEqual(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === list2[i]) {
      continue;
    } else {
      return(`🛑🛑🛑 Assertion Failed: ${list1} !== ${list2}`);
    }
  }
  return(`✅✅✅ Assertion Passed: ${list1} === ${list2}`);
}

// TEST CASES

console.log(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']))

