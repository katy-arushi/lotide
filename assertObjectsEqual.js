const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const object1Array = Object.keys(object1)
  const object2Array = Object.keys(object2)
  if (object1Array.length !== object2Array.length) {
    console.log((`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));

  }
  for (const key of object1Array) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        console.log((`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));
      }
    } else if (value1 !== value2) {
      console.log((`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));
    }
  }
  console.log((`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`));
};