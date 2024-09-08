const countOccurrences = (arr) => {
  return arr.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});
};

const strings = ["apple", "banana", "apple", "orange", "banana", "banana"];
console.log(countOccurrences(strings));
