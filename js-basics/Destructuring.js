console.log("==== Objects Destructuring");
let employee = {
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
};
// const name = employee.name;
// const age = employee.age;
const { firstName, age } = employee;
// const { name: fullName, age } = employee; // can give another name
// const { name: fullName = "Harry Potter", age } = employee; // can assign default value or parameter as well#
console.log(firstName);
console.log(age);

// Destructuring of Nested object
const {
  address: { city },
} = employee; // can assign default value or parameter as well

console.log(city);

// Destructuring in functions
function EmployeeName({ firstName, age }) {
  // function EmployeeName(employee) {
  console.log(`Name of employee : ${firstName} and Age of employee : ${age}`);
}
EmployeeName(employee);

console.log("==== Arrays Destructuring");
// =====================
const fruits = ["apple", "mango", "banana", "pineapple"];
// const apple = fruits[0];
// const mango = fruits[1];

// const [fruit1, fruit2] = fruits; // 1st 2 array elements
// const [fruit1, ,fruit3] = fruits; // skip 2nd one and take only 1st and 3rd
// const [fruit1, , fruit3, ...rest] = fruits; // using rest operator to access the remaining array elements

// console.log(fruit1);
// console.log(fruit3);
// console.log(rest);

console.log("==== Destructuring both arrays and objects at the same time");
console.log("-- Array of Objects ");

const contacts = [
  {
    id: "sehrishraza2022@gmail.com_1676802505169",
    name: "Sehrish Raza",
    email: "sehrishraza2022@gmail.com",
  },
  {
    id: "aliyumna01@gmail.com_1676802513135",
    name: "Yumna Ali",
    email: "aliyumna01@gmail.com",
  },
  {
    id: "amnausmani@gmail.com_1676802533362",
    name: "Amna Usmani",
    email: "amnausmani@gmail.com",
  },
  {
    id: "yweyiw_1676820962854",
    name: "ooo",
    email: "ppp",
  },
  {
    id: "bbbb_1676820974793",
    name: "ddd",
    email: "bbbb",
  },
  {
    id: "pop_1676825114205",
    name: "bnmb",
    email: "pop",
  },
];
// console.log(contacts[0].name);

// const [contact] = contacts; // 1st object is returned
// console.log(contact);

// const [{ name: contact1 }] = contacts;
// console.log(contact1);

// const [, , { email }] = contacts; // Access 3rd object email
// console.log(email);

// const [, , { email }, ...rest] = contacts;
// console.log(email);
// console.log(rest);

console.log("-- Object of Arrays ");
const company = {
  name: "Google",
  locations: ["Singapore", "India", "Germany"],
};
// console.log(company.locations[0]);
const {
  locations: [loc],
} = company;
const {
  locations: [, loc1],
} = company; // accessing 2nd location
console.log(loc);
console.log(loc1);

console.log("==== LAST CASE");
const users = [
  ["Dipesh", "Malvia"],
  ["Nikesh", "Gadekar"],
  ["Daniel", "Mether"],
];
[
  { firstName: "Namrah", lastName: "Saeed" },
  { firstName: "Sehrish", lastName: "Raza" },
  { firstName: "Komal", lastName: "Rizvi" },
];

const usersObj1 = users.map((user) => {
  return { firstName: user[0], lastName: user[1] };
});
// console.log(usersObj1)

const usersObj = users.map(([firstName, lastName]) => {
  return { firstName, lastName };
});

console.log(usersObj);
