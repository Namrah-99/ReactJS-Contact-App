console.log("==== ES6 Default Parameters");

function multiply(a, b) {
  return a * b;
}
// console.log(multiply(2, 5));
console.log(multiply(2)); // NaN is returned

function multiply(a, b = 1) {
  //b = b || 1;
  return a * b;
}
// console.log(multiply(2, 5));
console.log(multiply(2, 10)); // NaN is returned
console.log(multiply(2, null)); // 0 is returned because of null

function makeApiCall1(url, method = "GET") {
  // we need to make a guard or check on method
  //   if (!method) {
  //     method = "GET";
  //   }
  console.log("URL:" + url);
  console.log("Method:" + method);
}
makeApiCall1("www.google.com", "POST");
makeApiCall1("www.google.com", null);
makeApiCall1("www.google.com", undefined);

//constructor function of employees
function Employees(id) {
  this.id = id;
}
function generateEmployeeId() {
  return Math.random() * 999;
}
function tagEmployee(employee) {
  employee.department = "User Experience";
  return employee;
}
console.log(tagEmployee(new Employees(generateEmployeeId())));

function tagEmployee1(employee = new Employees(generateEmployeeId())) {
  employee.department = "User Experience";
  return employee;
}
const employee1 = new Employees(generateEmployeeId());
console.log(employee1);
