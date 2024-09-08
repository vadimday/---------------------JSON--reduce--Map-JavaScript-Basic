const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
};

const bookWithRating = { ...book, rating: 4.5 };

console.log(book);
console.log(bookWithRating);
