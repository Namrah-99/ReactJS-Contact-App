console.log("====   Async VS Sync");
console.log("task1");
console.log("task2");
console.log("task3");

console.log("==== BLOCKING CODE - Synchronous Programming");
// lead to bad user experience - you cannot write a performant application
console.log("start operation");

function sleep(milliseconds) {
  let startTime = new Date().getTime();
  console.log("operation is running");
  while (new Date.getTime() < startTime + milliseconds) {
    console.log("in progress");
  }
  console.log("operation is done!");
}
sleep(1000);
console.log("do something else ... ");

console.log("==== NON BLOCKING CODE - Asyncsynchronous Programming");
console.log("start operation");

function sleep1(milliseconds) {
  console.log("operation is running");
  setTimeout(() => {
    console.log("operation is done!");
  }, milliseconds);
}
sleep1(1000);
console.log("do something else ... ");
