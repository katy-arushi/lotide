const letterPositions = function(sentence) {
  const results = {}
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (sentence[i] !== " ") {
      if (!results[char]) {
        results[char] = [i]
      } else {
        results[char].push(i);
      }
    }
  }
  return results;
};