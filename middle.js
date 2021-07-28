function middle(myArray) {
  if (myArray.length === 1 || myArray.length === 2) {
    return []
  } else if (myArray.length % 2 !== 0) {
    let middleIndex = (Math.floor((myArray.length)/2))
    return myArray[middleIndex]
  } else {
    let output = []
    let middleIndex2 = (Math.floor((myArray.length)/2))
    let middleIndex1 = (Math.floor((myArray.length)/2) - 1)
    output.push(myArray[middleIndex1])
    output.push(myArray[middleIndex2])
    return output
  }
}