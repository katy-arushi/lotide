function countLetters(myString) {
  const results = {};
  for (const char of myString) {
    if (char !== " ") {
      if (!results[char]) {
        results[char] = 1;
      } else {
        results[char]++;
      }
    }
  }
  return results;
};