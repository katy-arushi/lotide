const assertEqual = require('./assertEqual');

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
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"