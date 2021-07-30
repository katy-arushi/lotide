function findKeyByValue(myObject, value) {
  for (const property in myObject) {
    if (myObject[property] === value) {
      return property
    }
  }
  return undefined
}