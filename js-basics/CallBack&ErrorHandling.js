console.log(
  "==== Async JavaScript Callback Functions, Error Handling and Callback Hell"
);
// // other than regular functions, we have callback functions
// // callback function is a function which is passed as an arguement
// // into another function and the other function will exceute this
// // callback function at later point of time

// // callback functions are not asynchronous in nature. They're Synchronous in nature.
// console.log("Task start");
// function asyncTask(cb) {
//   console.log("Task running");
//   setTimeout(cb, 0); // change this function into async callback function, we need to use setTimeout
//   // callback function is taken out of execution flow and all the variables are allocated to memory
//   // and then our callback function is called
// }
// asyncTask(() => {
//   console.log(name1); // or "Namrah" , name1 will gice ReferenceError: cannot access 'name1' before initialization
//   // this happen because callback functions are synchronous in nature
//   // we have to make this callback function into synchronous mode so that
//   // the complete js file is compiled first and all the variables are allocated to memory
//   // and then our callback function is called
// });
// console.log("Task end");
// const name1 = "Namrah";

console.log("==== ERROR HANDLING ON CALLBACKS");
// // write error as the first arguemnet in callback
// function asyncTask2(cb) {
//   setTimeout(() => {
//     //cb("Error!"); // Uncaught Error! returned
//     cb(null, "This is data from server");
//   }, 0);
// }

// asyncTask2((err, data) => {
//   // error first callback
//   if (err) {
//     throw err;
//   } else {
//     console.log("data ", data);
//   }
// });

console.log("==== CALLBACK HELL");
// if we use callback functions and they are executing in asynchronous mode
// but you've that logic of sequences should be executed one after another in a sequenctial way
function asyncTask3(cb) {
  setTimeout(() => {
    //cb("Error!"); // Uncaught Error! returned
    cb(null, "This is data from server");
  }, 0);
}

function makeApiCallCallback(cb) {
  setTimeout(() => {
    console.log("This is Async task execution");
  }, 0);
}
// Nesting happens this way
// when you've multiple nested callbacks, it results into callback hell
// what we're doing here is that we are doing an asynchronous execution call, with the chaining of callbacks
// then we end up with nasty syntax of nested callbacks and this called callback hell
// difficult to remember a lot of sequence
// hard to understand this and not readable

// callback hell: remember a lot of sequence
makeApiCallCallback;
() => {
  makeApiCallCallback(() => {
    asyncTask3(() => {
      asyncTask3(() => {
        asyncTask3(() => {
          asyncTask3(() => {
            asyncTask3(() => {});
          });
        });
      });
    });
  });
};
// we're doing asynchronous execution call, with the chaining of callbacks, then we end up nasty syntax of nesting of callbacks
// hard to understand and readable, this is called callback hell
// in order to do these type of execution, or
// console.log("This is Async task execution");
// console.log("This is Async task execution");
// console.log("This is Async task execution");
// console.log("This is Async task execution");
// console.log("This is Async task execution");
