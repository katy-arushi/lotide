function eqArrays(list1, list2) {
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] === list2[i]) {
      continue;
    } else {
      return false
    }
  }
  return true
}