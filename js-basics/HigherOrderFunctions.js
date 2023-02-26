console.log("==== JavaScript Higher Order Functions and Array Methods");
// Strength of JS Array lies in the Array methods
// declared a const grocery list (array of objects)
const groceryList = [
  { name: "Bananas", price: 0.99, category: "Produce" },
  { name: "Milk", price: 2.49, category: "Dairy" },
  { name: "Bread", price: 1.99, category: "Bakery" },
  { name: "Eggs", price: 3.99, category: "Dairy" },
  { name: "Chicken", price: 7.99, category: "Meat" },
  { name: "Carrots", price: 1.49, category: "Produce" },
  { name: "Apples", price: 2.99, category: "Produce" },
  { name: "Cheese", price: 4.99, category: "Dairy" },
  { name: "Pasta", price: 1.29, category: "Pantry" },
  { name: "Rice", price: 2.49, category: "Pantry" },
];

console.log(groceryList);

console.log("--- ForEach ---------------------------------");
// works exactly like for loop and loop throuh all the objects in the array and print out all the objects
// forEach accepts 3 arguements. forEach calls the callback function one time for each element in the array. Performs the specified action for each element in an array.
// Acces each of the element
groceryList.forEach((item) => {
  console.log(`The price for ${item.name} is ${item.price}`);
});

console.log("--- Map ---------------------------------");
// returns new array , use it when you need to manipulate data in arary
const newPriceArray = groceryList.map((item) => {
  return { name: item.name, price: item.price * 2 }; // manipulating price
});
console.log(newPriceArray);

console.log("--- Filter ---------------------------------");
// returns new array , use filter to filter out data from array based on some criteria
// i only want items which are 'Dairy'
const dairyList = groceryList.filter((item) => {
  return item.category === "Dairy";
});
console.log(dairyList);

console.log("--- Find ---------------------------------");
// if we want to find a particular item from the array then use Find method
const findResults = groceryList.find((item) => {
  return item.category === "Meat";
});
console.log(findResults);

// Key Difference btw filter and find
// Filter:  filter will check all the values in the array and then return results
// Find:    find will stops its search from array as soon as it finds the first match

console.log("--- FindIndex ---------------------------------");
// if you don't want item itself but you want the index of the matched item
const findIndexResults = groceryList.findIndex((item) => {
  //   return item.category === "Meat";
  return item.name === "Pasta";
});
console.log(findIndexResults);

// Key Difference btw findIndex and find
// FindIndex:   return the index of matched item
// Find:        returns the matched item itself

console.log("--- Sort ---------------------------------");
// returns new array, takes the comparator function as arguement
// function used to determine the order of the elements.
const sortedArray = groceryList.sort((a, b) => {
  // its going to take first 2 values a,b
  // and then compares those 2 values and
  // based on that comparison its going to
  // put it in sorted array
  //   return a.name.localeCompare(b.name); // either returns - value if a<b or returns + if a>b else if a==b then returns 0.
  return a.price - b.price; // ASC order
});
console.log(sortedArray);

console.log("--- Some (act as ||) ---------------------------------");
// returns boolean value, provide criteria if it finds any of the item satisfying that criteria then returns true else false
const checkSomePrice = groceryList.some((item) => {
  return item.price > 4.99; // check all items , if it finds some of the items what are having their price > 4.99, its going to return me true
  // if none of them > 4.99 so it returns false
});
console.log(checkSomePrice);

console.log("--- Every (act as &&) ---------------------------------");
// returns boolean value, it checks every item if all the elements matching the criteria then only it returns true or false
const checkEveryPrice = groceryList.every((item) => {
  return item.price < 8;
  //   return item.price > 4.99; // check all items , if it finds them all having their price > 4.99, its going to return me true
  // if not every item's price > 4.99 so it returns false
});
console.log(checkEveryPrice);

console.log("--- Reduce (imp) ---------------------------------");
// Reduce method calls the callback function one time for each element in the array
// if I want to have the total of my grocerylist, i can use reduce with shorter syntax else can also do by iterating through all items and then summing up their price
let InitialValue = 0; // starting value for currentTotal
const total = groceryList.reduce((currentTotal, item, index) => {
  console.log("----- " + (index + 1) + " -----");
  console.log("CurrentTotal ", currentTotal);
  console.log("InitialValue ", InitialValue);
  console.log("CurrentItemPrice ", item.price);
  console.log("PriceAfterEveryIteration ", item.price + currentTotal);
  return item.price + currentTotal;
}, InitialValue);
console.log(total);

console.log("--- Includes ---------------------------------");
// returns true or false  ->  helps me to find that element is present in array or not
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.includes(5));
console.log(numbers.includes(10));

console.log("--- Concat ---------------------------------");
// returns new array, it actually concatenates 2 arrays
const letter = ["a", "b", "c", "d"];
console.log(numbers.concat(letter));

console.log("--- Flat ---------------------------------");
// flat is actually used when you have nesting of arrays
// you want all the nested or child arrays values should be added to a new array recursively
const digits = [1, 2, 3, 4, [5, 6, [7, 8]]]; // here we have double nesting then flat() only flattens the level 1 (immediate childs)
console.log(digits.flat());
const digits2 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(digits2.flat(3)); // to flatten array uptil certain levels then pass arguement

console.log("--- FlatMap ---------------------------------");
// combination of Flat and Map
// Map method calls the callback function one time for each element in array.
// calls a defined callback function on each element of an array, and returns an array that contains the results
// chaining of array methods
const numbers2 = [1, 2, 3, 4, 5, [6]];
// console.log(
//   numbers.flat.map((num) => {
//     return num * 10;
//   })
// );
// FlatMap works same as above
console.log(
  numbers.flatMap((num) => {
    return num * 10;
  })
);
