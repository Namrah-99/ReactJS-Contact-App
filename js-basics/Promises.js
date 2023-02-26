console.log("==== PROMISES");

/* new Promise() // Creates a new Promise.
	@param executor  // A callback used to initialize the promise. 
	This callback is passed two arguments: 
		resolve callback used to resolve the promise with a value or the result of another promise
		reject callback used to reject the promise with a provided reason or error.
 */
console.log("--- CREATING PROMISE AND INITIALIZING IT");
const promise = new Promise((resolve, reject) => {
  console.log("Async Task execution");
  throw "erorrsss"; // when you throw error, it calls the reject method by default, automatically being catched in the catch function
  if (false) {
    // true || false
    const person = { name: "Dipesh" };
    resolve(person);
  } else {
    const error = { errCode: "1001" };
    reject(error);
  }
});
console.log("--- How CAN I INTERACT WITH THIS PROMISE");
//(hover over then method to know details)
promise
  .then(
    (val) => {
      console.log(val);
    },
    (err) => {
      // want to catch error then remove this callback
      //console.log(err);
      throw "Error!";
    }
  )
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Clean Up");
  });

console.log("--- Promise which is already being resolved/done");

let presolved = Promise.resolve("Execution is done");

//let prejected = Promise.reject("Execution is rejected");
// even if they already resolved or rejected, we can still interact using then handler
// this part we vannot do in callback functions, once callback function is executed you cannot anything with it or cannot interact with it
// but that's not the case with promises and that's where promises has advantages as compared to callbacks

presolved.then((val) => {
  console.log(val);
});

// Promises are asynchronous in nature by default whereas callbacks are not asynchronous and for making them async, we need to use setTimeout.

/* function asyncTask(cb) {
  cb();
}
asyncTask(() => {
  console.log(name);
});
const name = "Namrah";
//Above code will give error "Reference Error: cannot access name before initialization"
 */
function asyncTask() {
  return Promise.resolve();
}
asyncTask().then(() => {
  console.log(name2);
});
const name2 = "NamrahPromise";

// Promises are async in nature and they're taken out if execution flow and then executed later on.
// so we get the var name as its already being allocated in the memory and js runtime engine, will e able to get the value "name"
console.log("--- Chaining in Promises");
// saw in the callback functions that when we have to logical sequence one after another we result into nesting of callback functions and which gives us callback hell

// const pp = Promise.resolve("done");
const pp = Promise.reject("failed!");
pp.then((val) => {
  console.log(val);
  return "done2";
})
  .then((val) => {
    console.log(val);
    return "done3";
  })
  .then((val) => {
    console.log(val);
  })
  .catch((val) => console.log(val));
// if you don't return anything from the then method, then your chain will get break

console.log("PROMISE all() and race()");
const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in: " + time);
    }, time);
  });
};
// makeApiCall(1000).then((val) => {
//   console.log(val);
// });

// there is a scenario that we want to make multiple api calls and all those api calls go simultaneously (at the same time)#

let multiAPICall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
//var calling 3 time makeApiCall

// i want to interact with all the promises only once all the execution of makeApiCall is done
Promise.all(multiAPICall).then((values) => {
  console.log(values);
});

// race() = i only get one value among 3 apis which gets executed first
Promise.race(multiAPICall).then((value) => {
  console.log(value);
});
