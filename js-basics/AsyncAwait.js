console.log("==== ASYNC AWAIT CONCEPT");
const userLogin = () => {
  console.log("Enter Username and Password");
  let username = prompt("Enter username: ");
  let password = prompt("Enter password: ");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing User Authentication");
      if (username === "Namrah" && password === "Saeed") {
        resolve("User Authenticated!");
      } else {
        reject("Authentication Failed!");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Homepage as : ${userAuthStatus}`);
}

// using Promises (more readable and concise form)
// userLogin()
//   .then((response) => {
//     console.log("Validated User");
//     return goToHomePage(response);
//   })
//   .then((userAuthStatus) => {
//     console.log(userAuthStatus);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async await
// wrap your async execution into function (a named function, a function expression, or a self executing function)
async function performTask() {
  const response = await userLogin();
  console.log("Validated User");
  const userAuthStatus = await goToHomePage(response);
  console.log(userAuthStatus);
}
performTask();

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This API executed in: " + time);
    }, time);
  });
};
let apiRequests = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
//var calling 3 time makeApiCall

// i want to interact with all the promises only once all the execution of makeApiCall is done
// Promise.all(multiAPICall).then((values) => {
//   console.log(values);
// });
// in case of async await, it'll wait for the execution of eah api and then its going to execute next api
(async function () {
  for (let request of apiRequests) {
    console.log(await request());
  }
})();
