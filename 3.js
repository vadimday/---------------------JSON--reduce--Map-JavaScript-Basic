function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const user = {
  name: "volodya",
  age: 62,
  preferences: {
    favoriteColor: "black",
    hobbies: ["reading", "gaming"],
  },
};

const userCopy = deepCopy(user);
userCopy.preferences.favoriteColor = "red";
userCopy.preferences.hobbies.push("coding");

console.log(user.preferences.favoriteColor);
console.log(user.preferences.hobbies);
console.log(userCopy.preferences.favoriteColor);
console.log(userCopy.preferences.hobbies);
