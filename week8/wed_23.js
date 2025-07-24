//23/07/25
// revison using exercises on wb3schools
// ex for all 3 loops
// higher order loops
// functions


// function printGreeting(name) {              //function definition
//     console.log(`Hello how are you ${name}`);
// } 

// printGreeting("Sai");
// printGreeting("Siddhi");
// printGreeting("Niya");
// printGreeting("Rohan");

// function addNum(num1, num2) {
//     return num1 + num2;                     //return statement
//     console.log("I am here");
// } 

// console.log(addNum(10, 20));            //function call

// function addNum(num1, num2) {
//    let Num2=Number(num2);          //type conversion
//    let Num1=Number(num1);   
   
//    if(isNaN(Num1) || isNaN(Num2)) {  //check if either Num1 or Num2 is NaN
//        return ("Enter proper number");        //return statement    
//    return Num1 + Num2;      
//    }               //return statement   
// } 

// console.log(addNum(10, "20abc"));         //NaN -> Not a Number

// let Num = 13;
// console.log(isNaN(Num));  

// let n1 = "123";
// console.log(isNaN(n1));  //false, because n1 is a string that can be converted to a number

//Stringsssssssssss

let userName = "Helloooo";   //string literal

let userName1 = new String("Hello"); // let userName1 = new String("Hello"); //object literal

console.log(typeof(userName));
console.log(typeof(userName1));

let user = "  Sai  ";
console.log(user.length)

console.log(user.toUpperCase());
console.log(user.toLowerCase());

console.log(user.charAt(5));
console.log(user.indexOf('S')); //returns the index of first occurrence of "i"
console.log(user.indexOf('Sai')); 

let user2 = " Sai de   ";
user2.trim(); //removes whitespace from both ends of the string
console.log(user2.length); //length remains the same because trim() does not change the original string
console.log(user2.trim().length); //length after trimming

let user3 = "Saideep";
//syntax for replace() method
//user3.replace(oldVal,newVal)); //replaces oldval with newVal
console.log(user3.replace("Saideep", "Siddhi")); //replaces "Saideep"
console.log(user3.replace("d", "D")); 

let username = "Siddhi";
console.log(username.includes("dd")); //checks if "dd" is present in the string

let name = "sai%deep%ram%shyam%karan";
console.log(name.split("%")); //splits the string into an array at each occurrence of "%"


let name1 = "Saideep";
console.log(name1.substring(2,5));
console.log(name1.slice(2,5)); 

console.log(name1.substring(-4,5));
console.log(name1.slice(-4,5)); 