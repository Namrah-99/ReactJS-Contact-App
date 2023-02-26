console.log("==== JS call() , apply() and bind() methods");
console.log("---  call() ----------------------------------");
("use strict");
// in js, every function is treated as an object
function checkThis() {
  console.log(this); // points to windows object
}
// checkThis();

// console.log(checkThis.name);

// add breakpoint on this called 'checkThis()' and then add it to watch window on browser and then see its properties
// then expand that __proto__ property which further will have properties ( apply, bind, call functions)
// we can use these function with Object.function.name()

// console.log(checkThis.toString);

// checkThis.call(); // this gives same result as checkThis() do, points to window object
// if i use 'use strict' mode then no longer points to window oject and 'checkThis.call()' will give undefined

// .call() is used to set the context of 'this'
// checkThis.call({}); // context of 'this' will be {} empty object
// checkThis.call(1); // context of 'this' will be equal to 1
// checkThis(1); // undefine -> if i pass 1 like this, it will be passed as arguemnet not as the context of 'this'

let person = {
  checkThis: function () {
    console.log(this); // point to object person
    function checkThisAgain() {
      console.log(this); // default value of 'this' keyword will be undefined due to 'use strict' mode
    }
    checkThisAgain.call(this); // setting explicitly the context of 'this' keyword
  },
};
person.checkThis();

let nameCallApplyBind = {
  firstName: "Namrah",
  lastName: "Saeed",
};

let fullName = function (arg1, arg2) {
  console.log(`${this.firstName} ${this.lastName} is a ${arg1} and ${arg2}`);
};

fullName.call(nameCallApplyBind, "programmer", "consultant"); // setting the context of 'this'

console.log("---  apply() ----------------------------------");
// apply() works in a very similar way as that of call() instead of passing the arguemnts, you can actually pass an array of arguements
let skills = ["programmer", "consultant"];
fullName.apply(nameCallApplyBind, skills);
// you can set the context of 'this' but you can provide array of arguements

console.log("---  bind() ----------------------------------");
// bind() sets the context of 'this' during the function declaration or function expression
// while the other two call() and apply() set the context of 'this' when you call the function
// you need to have function expression in order to use bind()
// onec you add bind() to function expression, then its like you have locked the context of 'this'
let a = function () {
  console.log(this); // undefined because of 'use strict' when not using bind()
  // with bind(), empty object logs into console
  // }.bind({});
}.bind(1); // set the 'this' context, it cannot be override by anything else

let employees = {
  checkId: a,
  checkThisAgain: function () {
    console.log(this); // this is actually pointing to its callee (employees)
  },
};
// console.log(employees.checkId); // by doing this, you'll get the exact function itself
// console.log(employees.checkId()); // {} -> in order to execute it
employees.checkId();
employees.checkThisAgain();
//a();
