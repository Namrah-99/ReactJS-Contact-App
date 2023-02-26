// 3 use-cases of (?) in JavaScript

console.log("==== TERNARY OPERATOR (?) -------");

const age = 18;
let isVote = false;

// 1)  instead of if else use ?
// if (age >= 18) {
//   isVote = true;
// } else {
//   isVote = false;
// }
isVote = age >= 18 ? true : false;

console.log("User can vote : ", isVote);

// 2)  used to handle null values
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Hi ${name}`;
};
console.log(greeting({ name: "Ramsha" }));
console.log(greeting(null));

//3
console.log("==== OPTIONAL CHAINING (?.) -------");
// in db, if we have data of a person, and few oersons address detail is missing then error occurs when we try to access

const person = {
  name: "namrha",
  age: 23,
  Hobbies: ["teaching", "reading", "cookinh"],
  //   address: {
  //     street: "Sikorskiego",
  //     country: "Poland",
  //   },// cannot read property of undefined
};
console.log("Person : ", person.address?.country);

function printMagicIndex(arr) {
  //console.log(arr[6]); // can not read property of undefined
  console.log(arr?.[6]); // if the value of array is present then only check this else gives undefined
}
printMagicIndex();

console.log("==== NULLABLE COALESCING ASSIGNMENT (??=) -------");
// Nullable coalescing (??)
// assignment (?=)

// let user = "Namrah";
let user = null;
user ??= "stranger";

console.log(user); //  you just need to understand in which case
// we're going to get the value as stranger.

function configDb(options) {
  // can be used in case where port may get change but other fields remain same
  options.name ??= "admin";
  options.password ??= "admin";
  options.port ??= 5001;
  return options;
}
console.log(configDb({ port: 8000 })); // someone just pass port then u can assign default value to them
// when the incoming values are null or undefined then you can have default values to it
console.log(configDb({}));

console.log("==== NULLABLE COALESCING OPERATOR (??) -------");
const arrayop = [0, 1, 2, 3, 4];
// const arrayop = [0, 1, 2, 3, 4,5,6,7,8];
console.log(arrayop[7] ?? arrayop); // when left hand side is undefined then it's gonna return us the array

function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "namrah";
}
console.log(A() ?? C()); // function A returns undefined and then it executes function C and returns "namrah"
console.log(B() ?? C()); // since the return value is not undefined so it will not go to execute function C()
