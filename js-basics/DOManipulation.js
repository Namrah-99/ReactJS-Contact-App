//**************************************PART 1**************************************************************************

console.log("========== JS Outputs");
//console.log(prompt("What is your name? "));
console.error("I am an error");
console.warn("I am a warning");
console.info("I am an info");

console.log("==========  JS Variables");
// var, let and const

// var x = 5; // Global scope - when you declare something as var, it has aglobal scope means it'll go to windows object
// let y = 10; // Block level scope - can be changed later during the application execution
const z = 15; // remain constant throughout the application (cannot be changed)

//z = 20; // Uncaught TypeError: Assignment to constant variable

if (true) {
  let y = 5;
  var x = 6;
  console.log(x);
  console.log(y);
}
console.log(x);
//console.log(y); Uncaught ReferenceError: y is not defined as its block level scope so it cannot be accessed outside if condition
//but var can be  due to global scope
console.log(z);

// Note: Not always declare everything with var as the global scope becomes polluted so its not recommended to declare var always
// ====
console.log("==========  JS Operators");
// Arithmetic (+,-,/,*)
console.log(2 + 2);
// Assignment (++x,--x,x++,x--)
let xch = 10;
console.log(++xch);
console.log(xch++);
console.log("==========  JS DataTypes");
// JS is dynamic typed language, you don't need to define type while declaring variable
// while declaration, need to define type, then use TypeScript (superset of JS)

// Primitive datatypes:       String, Number, Boolean, null, undefined, symbol
let nameDatatype = "Namrah";
let age = 29; // no float or double in js, just Number (-1,0.5), treat everything as Number
let isProgrammer = true;
let noValue = null; // type of null is always object
let unAssigned; // by default a variable will always have undefined value

console.log(typeof nameDatatype);
// Non-Primitive datatypes: ?

console.log("==========  Strings and Methods");
let firstName = "Namrah";
let lastName = "Saeed";
let languages = "HTML,CSS,Javascript";
let name = new String("Namrah Saeed"); // we never us this constructor function to define string
console.log(typeof name); // object
console.log(typeof firstName); // string
// Methods
console.log(firstName.length);
console.log(firstName.concat(lastName));
console.log(`My firstname is ${firstName} and lastname is ${lastName}`); // ES6 template literals for concating strings
console.log(
  "My firstname is " + firstName + " and " + lastName + " is ${lastName}"
);
console.log(languages.substr(1)); // starts from 1 index
console.log(languages.substr(1, 6));
console.log(languages.substring(1, 6)); // not includes the last index value
console.log(languages.split(",")); // get new array of strings
console.log(languages.split(",")[2]);
console.log(languages.replace("HTML", "HTML5"));
// for more string methods visit ("https://www.w3schools.com/jsref/jsref_splice.asp")

//**************************************PART 2**************************************************************************
console.log("========== JS Arrays/ Array Methods");
let frameworks = ["Angular", "React", "Vue"];
let databases = new Array("DB2", "SQL", "MongoDB");
// Accessing
console.log(frameworks);
console.log(frameworks[0]);
console.log(frameworks[5]); // undefines

// Assignment
databases[0] = "Oracle";
console.log(databases);

// Array Methods
console.log(databases.sort());
console.log(databases.pop()); // remove element from last
console.log(databases.shift()); // remove element from start
console.log(databases.push("casandra")); // add element at the last index
console.log(databases.unshift("Postgre")); // add element at 0th index
console.log(databases);

// Check Array type
console.log(typeof frameworks); // object (becoz array and objects are primitive datatype)
console.log(Array.isArray(frameworks)); // a way to check if its an array or not
console.log(frameworks instanceof Array); // another way to check if its array or not

console.log("========== JS Objects , Literals");

let employee = {
  id: 101,
  firstNamee: "Namrah",
  lastNamee: "Saeed",
  agee: 29,
  doj: "20/12/2023",
  address: { city: "Makati", country: "Philipines" },
  skills: ["HTML", "CSS", "JS"],
  fullName: function () {
    // Method in object
    console.log(this); // gives object itself - reference to callee
    return `${this.firstNamee}	${this.lastNamee}`; // for referencing employee itself use 'this'
  },
};

console.log(typeof employee); // object

// 'this' always points to the callee of function
console.log(this); // calling on script file and top most parent is window

//Access objects properties
console.log(employee.address.city);
console.log(employee.skills[2]);
console.log(employee.fullName());

console.log("========== ES6 Destructuring");
const { firstNamee, agee } = employee;
console.log(firstName);

console.log("========== JS Array of Objects");
// real life data always comes in array of objects form
let employees = [
  {
    id: 101,
    firstName: "Namrah",
    lastName: "Saeed",
    age: 29,
    doj: "20/12/2023",
    address: { city: "Makati", country: "Philipines" },
    skills: ["HTML", "CSS", "JS"],
    fullName: function () {
      console.log(this); // returns windows object which is its callee - so referencing to window
      return `${this.firstName}	${this.lastName}`;
    },
  },
  {
    id: 102,
    firstName: "Aqsa",
    lastName: "Saeed",
    age: 23,
    doj: "20/12/2023",
    address: { city: "Makati", country: "Philipines" },
    skills: ["HTML", "CSS", "JS"],
    fullName: function () {
      console.log(this); // returns windows object which is its callee - so referencing to window
      return `${this.firstName}	${this.lastName}`;
    },
  },
  {
    id: 103,
    firstName: "Hamza",
    lastName: "Saeed",
    age: 25,
    doj: "20/12/2023",
    address: { city: "Makati", country: "Philipines" },
    skills: ["HTML", "CSS", "JS"],
    fullName: function () {
      console.log(this); // returns windows object which is its callee - so referencing to window
      return `${this.firstName}	${this.lastName}`;
    },
  },
];
// Access objects
console.log(employees[0]);
// Access Prperties
console.log(employees[0].age);
console.log(employees[1].skills[1]); // traverse employees[0] till you recieve the actual property

// JSON is the way of sending data to backend from frontend and then to frontend from backend.
const employeesJSON = JSON.stringify(employees); // returns json object which u actually send to server
console.log(employeesJSON);
const empArray = JSON.parse(employeesJSON); // returns javascriot array of objects (use it when recieve json obj from server back in response)
console.log(empArray);
//JSONEditorOnline (online tool available)

console.log("========== JS Loops (for, while, for of loop)");

// for loop
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].age);
}

// while loop
let j = 0;
while (j < employees.length) {
  console.log(employees[j].age);
  j++;
}

// for of loop
for (let employee of employees) {
  console.log(employee.firstName);
}

console.log("========== JS High Order Array Methods");

// forEach loop
employees.forEach(function (emp) {
  console.log(emp.lastName);
});

// Map (array of first Names) - returns array
const firstNames = employees.map(function (emp) {
  return emp.firstName;
});

// Filter (from the employees array, i've filter out employees based on some criteria)
const filteredResults = employees.filter(function (emp) {
  // returns new array
  return emp.id == "101";
});
console.log(filteredResults);

// Chaining
const filteredMapResults = employees
  .filter(function (emp) {
    // filter out based on some criteria
    return emp.id == "101";
  })
  .map(function (emp) {
    // then get array of firstName
    return emp.firstName;
  });
console.log(filteredMapResults);
//**************************************PART 3**************************************************************************

console.log("========== Conditions, IF and Switch");

let ifx = 10;
let ify = 20;
// if (ifx == "10") {
if (ifx == "10" || y === 10) {
  console.log("ifx is equal to 10");
} else if (x < 5) {
  console.log("ifx is less than 5");
} else {
  console.log("ifx is not equal to 10");
}

// Difference btw == and ===?
// == -> implicit checking (value)
// === -> strict checking (value + dataType)

// Ternary Operator
console.log(ifx === 10 ? "True" : "False");

// Switch
// const dev = "HTML";
const dev = "CSS";
switch (dev) {
  case "HTML":
    console.log("I am HTML developer");
    break;
  case "CSS":
    console.log("I am CSS developer");
    break;
  default:
    console.log("I am a beginner");
    break;
}

console.log("========== Functions");

// Regular function declaration
function showText(text, text1) {
  console.log(text);
  console.log(text1);
}
showText("Good Morning!", "Good Night!"); // can pass more than 1 arguement

// ES6 Arrow functions : ES6 way of writing functions
const showText1 = (text, text1) => console.log(`${text}  ${text1}`);
showText("Good Morning!", "Good Night!");

console.log("========== Constructor Functions and Prototypes");

// Constructor Object: way of creating when u use object oriented programming
// Constructor obj will act as blueprint -> acting as , s2 acting as object class

// function Mobile -> for constructor uppercase
// function mobile -> for regular functions

function Mobile(brand, price, launchDate) {
  this.brand = brand;
  this.price = price;
  this.launchDate = new Date(launchDate);
}
// create object instance
const s2 = new Mobile("Samsung", "$250", "24/02/2023");
// console.log(s2);

console.log("========== PROTOTYPES");
// Every Object will have proto property -> which is an object
// you can add method or properties to this proto property

Mobile.prototype.ram = "4GB";
Mobile.prototype.getLaunchYear = function () {
  return this.launchDate.getFullYear();
};
console.log(s2);

console.log("========== ES6 Classes");
// in es6, its just a syntactic sugar, nothing has changed
// have similar concepts of class and objects

class Mobilee {
  constructor(brand, price, launchDate) {
    this.brand = brand;
    this.price = price;
    this.launchDate = new Date(launchDate);
  }
  getLaunchYear() {
    return this.launchDate.getFullYear();
  }
}
Mobilee.prototype.memory = "12GB";
const s3 = new Mobilee("Huvawei", "$450", "04/07/2023");
console.log(s3);
console.log(s3.getLaunchYear());

//**************************************PART 4**************************************************************************

console.log("========== Window Object and DOM");
console.log(window);
//console.log(this); // callee is still window obj

console.log(window.location); // route of page, all info related to browser history

console.log(window.document); // complete html of page

console.log("========== Single/ Multiple Elements");
// Select DOM Elements

// Single Element
console.log(window.document.getElementById("contact"));
console.log(window.document.querySelector("section"));

// Multiple Elements
console.log(document.getElementsByClassName("item")); // DrawBack: returns HTMLCollection, on whihc u cannot apply array methods
// then you've to convert HTMLCollection into Array then apply array methods
console.log(document.getElementsByTagName("li")); // returns HTMLCollection
console.log(document.querySelectorAll("li")); // returns NodeList, now you can apply for loop

const nodeList = document.querySelectorAll("li");
nodeList.forEach((node) => {
  console.log(node);
});

console.log("========== DOM Manipulation using JS");

// manipulate the text on HTML document
const h4 = document.querySelector(".itemsList >h4");
// h4.innerText = "Contact List";
h4.textContent = "Contact List1";

// change text if li tags
const ul = document.querySelector(".itemsList >ul");
ul.firstElementChild.innerText = "HTML";
ul.lastElementChild.textContent = "JavaScript";
ul.children[1].innerHTML = "<h4>CSS</h4>";

// change style of first li element
ul.firstElementChild.style.background = "tomato";

console.log("========== Events");

const btn = document.getElementById("toggle");
btn.addEventListener("click", (e) => {
  console.log(e);
  const ul = document.querySelector(".itemsList >ul");
  //   if (ul.style.display === "block") {
  //     ul.style.display = "none";
  //   } else {
  //     ul.style.display = "block";
  //   }
  ul.style.display = ul.style.display === "block" ? "none" : "block";
});

console.log("========== Form Validation");
// what we're going to do is , when user types firstname and lastname, we're going to create dynamic li items from js
const myForm = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const msg = document.querySelector(".msg");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault(); // on submission , page refreshes so to avoid that
  //   console.log("clicked");
  if (fname.value === "" || lname.value === "") {
    msg.style.display = "block";
    msg.style.background = "red";
    msg.textContent = "All fields are mandatory!";
  } else {
    let ulElement = document.getElementById("contact__ul");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${fname.value} | ${lname.value}`));
    ulElement.appendChild(li);

    msg.style.display = "block";
    msg.style.background = "green";
    msg.textContent = "Succes";

    fname.value = "";
    lname.value = "";
  }
}

function removeMsg() {
  // called on onclick of inputs, when user wants to type names
  msg.style.display = "none";
}
console.log("========== Dynamic user list");
