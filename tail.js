const tail = function(originalArray) {
  if (originalArray.length === 0 || originalArray.length === 1) {
    return [];
  } else {
    let newArray = originalArray.slice(1);
    return newArray;
  }
};

module.exports = tail;