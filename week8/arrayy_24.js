// array
// 24-07-2025

// const userName = "Siddhi";
// console.log(userName);


const user1 = [10,20,30,40,50];
const user2 = [1,2,3,4,5];

// console.log(user1.concat(user2));
// console.log()

// console.log([...user1,...user2])  //spread operator -> better approach

// let userName = "Siddhiiii"
// Array.isArray(userName); //to check whether defined variable is array or not
// console.log(Array.isArray(userName)); // false

// Array.isArray(user2);
// console.log(Array.isArray(user2)); // true

// console.log(Array.from(userName));  // converts string to array

// let num1 = 10;
// let num2 = 10;
// let num3 = 10;

// console.log(Array.of(num1,num2,num3));

// console.log(user1.slice(0,3));

// console.log(user1.splice(0,3)); // removes the elements from the array and returns the removed elements
// console.log("before :",user1);

// const newArr = user1.slice(0,3);  //slice does not modify array
// console.log("newArr(slice):",newArr);

// console.log("after slice :",user1);


// const newArr1 = user1.splice(0,3); //splice modifies array
// console.log("newArr :",newArr1);


// console.log("after splice :",user1);


// for(const element of user1){     // //for...of returns values of the array
//     console.log(element);
// }

// for(const element in user1){    // //for...in returns index values
//     console.log(element);
// } 

// for(let i=0;i<user1.length;i++) {
//     console.log(user1[i]); // prints each element of the array
    
// }
// console.log("Adding 5 to each element of the array:");
// for(let i=0;i<user1.length;i++) {
//     console.log(user1[i]+=5); // adds 5 to each element of the array   
// }

// user1.forEach(function add5(values){
//    console.log(values + 5); // adds 5 to each element of the array using forEach
// })


//ARROW FUNCTION
//Syntax:
//user.forEach((val)=>{
//    return val + 5;   
// })

// const arr1 = [10,20,30,40,50];
// arr1.forEach((val)=>{   assigns function to each value of the array
//    console.log(val +5);
// })

// const arr = (num1,num2) => {
//     console.log(num1);
//     console.log(num1+num2);
// }

// arr(13,22);

// console.log(this); //this keyword returns empty object {}

// const personInfo = {
//     name: "Siddhi",
//     age: 13,
//     greet: function greeting() {
//         console.log(this) // output: { name: 'Siddhi', age: 13, greet: [Function: greeting] }

//         return (`Hello, my name is ${this.name}.`); //output: Hello, my name is Siddhi.
//     }
// }

// console.log(personInfo.greet());


const personInfo = {
    name: "Siddhi",
    age: 13,
    greet: () =>{
        console.log(this);
       return (this.name);
 }
}

console.log(personInfo.greet());
