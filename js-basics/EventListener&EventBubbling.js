// references of html elements
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const first1 = document.querySelector(".first1");
const second1 = document.querySelector(".second1");
const third1 = document.querySelector(".third1");

console.log("==== Event Listeners ----------------------------");
//execution of these event listeners happen in sequence as they're written
console.log("==== Event Bubbling & Capturing----------------------------");

// CASE 1: default value of capture is set for first,second, third and document
// ============================================================================
// first.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("First Box");
// });
// // more than 1 event listeners can be added with any html element
// // first.addEventListener("click", (e) => {
// //   //   console.log(e);
// //   //   console.log(e.target); // get the element itself
// //   console.log("First Box");
// // });
// second.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("Second Box");
// });
// third.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("Third Box");
// });
// // event bubbling is just a one phase of javascript
// document.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("document Box");
// });

// CASE 2: default value of capture is set for second, third and document, onlt first has capture true
// ===================================================================================================

// first.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("First1 Box");
//   },
//   { capture: true } // when clicked on third box, while entering into event capturing phase
//   // then first it starts from document(doesnot have capture true),
//   // it will go down to box 1 (first), inside there's no one with capture true, so it goes third1 (having bubbling phase)#
//   // next it goes to second, next first which is not having event bubbling phase, so it'll skip it and then again
//   // goes back to document
// );
// second.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("Second1 Box");
// });
// third.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("Third1 Box");
// });
// document.addEventListener("click", (e) => {
//   //   console.log(e);
//   //   console.log(e.target); // get the element itself
//   console.log("document Box");
// });

// CASE 3: Set capture value true for all first, second, third and document
// ========================================================================
// click on box3
// output:  starts from document, then -> first box -> second box -> third box -> third box -> second box -> document
// we'll not able to see first in bubbling phase after second box, as its only having event capture
// first.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("First Box");
//   },
//   { capture: true }
// );
// second.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("Second Box");
//   },
//   { capture: true }
// );
// third.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("Third Box");
//   },
//   { capture: true }
// );
// document.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("document Box");
//   },
//   { capture: true }
// );

console.log("==== Event Stop Propogation ----------------------------");
// if you want to stop propagation whether it is in bubbling phase or in capturing phase
// Output:  starts from document then to first box
// you'll see that starts from document then will come to first
// after first box, it's not going to go to second or the third and
// event bubbling phase also will not happen
// as i've stopped my event propagation at the box1 itself
// CASE 4: Stop Event Propagation
// ========================================================================

// first.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     e.stopPropagation();
//     console.log("First Box");
//   },
//   { capture: true }
// );
// second.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("Second Box");
//   },
//   { capture: true }
// );
// third.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("Third Box");
//   },
//   { capture: true }
// );
// document.addEventListener(
//   "click",
//   (e) => {
//     //   console.log(e);
//     //   console.log(e.target); // get the element itself
//     console.log("document Box");
//   },
//   { capture: true }
// );
// CASE 5: Stop Event Propagation
// ========================================================================
// when stopping third box event propagation, then
// Output: only third box event is triggered
// first.addEventListener("click", (e) => {
//   console.log("First Box");
// });
// second.addEventListener("click", (e) => {
//   console.log("Second Box");
// });
// third.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Third Box");
// });
// document.addEventListener("click", (e) => {
//   console.log("document Box");
// });
console.log("==== Event Prevent Default----------------------------");
// Output: Third -> second -> first -> document
// we want to prevent the default behaviour of the checkbox should be prevented

// first1.addEventListener("click", (e) => {
//   console.log("First1 Box");
// });
// second1.addEventListener("click", (e) => {
//   console.log("Second1 Box");
// });
// third1.addEventListener("click", (e) => {
//   e.preventDefault(); // events are still propagating but the
//   // default behavios of checkbox which is to get checked will not happen
//   console.log("Third1 Box");
// });
// document.addEventListener("click", (e) => {
//   console.log("document Box");
// });

console.log("==== Event Trigger Only Once  ----------------------------");
// If we want my event on a element trigger only once then we can add a parameter of once as true.
// Output: Third Box -> Second Box -> First Box -> document Box -> Third Box -> Second Box -> document Box
// first.addEventListener(
//   "click",
//   (e) => {
//     console.log("First Box");
//   },
//   { once: true } // 3rd arguement in the addEventListener
// );
// second.addEventListener("click", (e) => {
//   console.log("Second Box");
// });
// third.addEventListener("click", (e) => {
//   console.log("Third Box");
// });
// document.addEventListener("click", (e) => {
//   console.log("document Box");
// });
console.log("==== Remove Event Listener  ----------------------------");
// if you want to remove event listener at some particular point of time

// Output: Third Box -> Second Box -> Namrah -> document Box
// Output: Third Box -> Second Box -> Namrah -> document Box -> Third Box -> Second Box -> document Box
first.addEventListener("click", displayName);
setTimeout(() => {
  first.removeEventListener("click", displayName); // be carefull, you cannot use arrow function instead of displayName
  // as they both arrow function and displayName are different interms of memory reference so you need to have name of function like displayName instead of arrow function, when
  // you actually remove event listener, you cannot use anonymous function
}, 3000);

second.addEventListener("click", (e) => {
  console.log("Second Box");
});
third.addEventListener("click", (e) => {
  console.log("Third Box");
});
document.addEventListener("click", (e) => {
  console.log("document Box");
});
function displayName() {
  console.log("Namrah");
}
