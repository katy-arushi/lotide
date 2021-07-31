function assertObjectsEqual(object1, object2) {
  const inspect = require('util').inspect;
  const object1Array = Object.keys(object1)
  const object2Array = Object.keys(object2)
  if (object1Array.length !== object2Array.length) {
    return (`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  for (const key of object1Array) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return (`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
      }
    } else if (value1 !== value2) {
      return (`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
};

function eqArrays(list1, list2) {
  if (list1.length !== list2.length) {
    return false
  }
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true
}