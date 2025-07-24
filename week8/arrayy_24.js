// array
// 24-07-2025

// const userName = "Siddhi";
// console.log(userName);


const user1 = [10,20,30,40,50];
const user2 = [1,2,3,4,5];

// console.log(user1.concat(user2));
// console.log()

// console.log([...user1,...user2])  //spread operator -> better approach

let userName = "Siddhiiii"
Array.isArray(userName); //to check whether defined variable is array or not
console.log(Array.isArray(userName)); // false

Array.isArray(user2);
console.log(Array.isArray(user2)); // true

console.log(Array.from(userName));  // converts string to array

let num1 = 10;
let num2 = 10;
let num3 = 10;

console.log(Array.of(num1,num2,num3));

console.log(user1.slice(0,3));

console.log(user1.splice(0,3)); // removes the elements from the array and returns the removed elements