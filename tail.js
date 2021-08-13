const assertEqual = require('./assertEqual');

function tail(originalArray) {
  if (originalArray.length === 0 || originalArray.length === 1) {
    return [];
  } else {
    let newArray = [];
    for (const item of originalArray) {
      newArray.push(item);
    }
    newArray.shift();
    return newArray;
  };
};

module.exports = tail;