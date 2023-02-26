// console.log("==== 'this' KEYWORD ");
// console.log("--- 'this' keyword is used outside of the function");
// console.log(this);

// this.name = "Namrah";
// console.log(this.name); // will obviously giving me the page
// console.log(window.name); // this == window , will give me the page
// console.log(name); // name will give me the page (if you declare any variables on global scope, you can access them directly by the var name)

// console.log("--- 'this' keyword is used inside of the function");
// function checkThis() {
//   console.log(this); // still points to windows object
// }
// checkThis();

// conclude: whether you use this keyword inside the function or outside the function, it always points to windows object
console.log("--- 'this' keyword is used inside an object");
const person = {
  checkThis: function () {
    // whatever the calling context, it will always pointing to an object
    // few people uses 'self', others uses 'vm' view modal, others use 'that', that's how westabilizes 'this' keyword
    let self = this; // or use "use strict" then use self intead of this everywhere
    //("use strict"); // stabilizing the context of using 'this' keyword  - it removes the default 'this' context
    // which is the window object (whenever you don't have any callee to a function, it'll still
    // not point to a window object as 'use strict' removes its default behavious of 'this')
    // now u won't get into unstability of 'this' as 'this' will have just one context of object
    // and taht is the object itself
    console.log(self); // this keyword context is changed , no longer pointing to window object

    function checkThisAgain() {
      console.log(self); // context of this here : points to windows object
      self.name = "Namrah";
    }
    checkThisAgain(); // points to object as its not having any calling context
    console.log(self.name); // gives me undefined as its actually pointing to person's object not the windows object
    console.log(window.name);
  },
};
// callee of the method is object(person)
person.checkThis(); // its pointing to person object itself
console.log(person); // this keyword context is changed , no longer pointing to window object

// no calling context here. thus its pointing to windows object. object pointing to another object
// const func = person.checkThis; // this keyword context is now pointing to window
// func();
