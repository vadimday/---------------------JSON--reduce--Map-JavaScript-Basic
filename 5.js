const countFrequency = (arr) => {
  return arr.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());
};

const numbers = [1, 2, 3, 2, 4, 3, 3, 5, 1, 4];
console.log(countFrequency(numbers));
