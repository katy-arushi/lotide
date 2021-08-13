const middle = function(myArray) {
  if (myArray.length < 3) {
    return [];
    
  } else if (myArray.length % 2 !== 0) {
    let output = []
    let middleIndex = (Math.floor((myArray.length) / 2))
    output.push(myArray[middleIndex])
    return output;

  } else {
    let output = [];
    let middleIndex2 = (Math.floor((myArray.length) / 2))
    let middleIndex1 = (Math.floor((myArray.length) / 2) - 1)
    output.push(myArray[middleIndex1])
    output.push(myArray[middleIndex2])
    return output;
  }
};

module.exports = middle;