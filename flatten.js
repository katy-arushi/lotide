function flatten(sourceArray) {
  let flatArray = []
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      for (let j = 0; j < sourceArray[i].length; j++) {
        flatArray.push(sourceArray[i][j])
      }
    } else {
      flatArray.push(sourceArray[i])
    }
  }
  return flatArray
}