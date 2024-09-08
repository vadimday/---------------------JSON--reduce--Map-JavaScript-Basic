const findLongestWord = (arr) => {
  return arr.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
};

const words = ["apple", "banana", "watermelon", "kiwi"];
console.log(findLongestWord(words));
