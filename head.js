function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

function head(myArray) {
  let element = myArray[0]
  return element
}

assertEqual(head([5]), 5);
assertEqual(head([], undefined));