function assertEqualArrays(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === list2[i]) {
      continue;
    } else {
      return(`🛑🛑🛑 Assertion Failed: ${list1} !== ${list2}`);
    }
  }
  return(`✅✅✅ Assertion Passed: ${list1} === ${list2}`);
}