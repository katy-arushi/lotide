function tail(originalArray) {
  let newArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    newArray.push(originalArray[i]);
  }
  if (originalArray.length === 0 || originalArray.length === 1) {
    return [];
  }
  newArray.shift();
  return newArray;
}