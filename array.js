const country = "bangladesh";
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, Name: "agun" };
const friends = [13, 14, 17, 21, 16, 15, 20];

function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(typeof friends);

// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);
// console.log(add(10, 2));

// --------------------------
console.log(friends.includes(19));
console.log(friends.includes(21));

if (friends.indexOf(21) !== -1) {
  console.log("array er moddhe ache");
} else {
  console.log("array er moddhe nei");
}

// concat :
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
