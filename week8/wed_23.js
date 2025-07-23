//23/07/25
// revison using exercises on wb3schools
// ex for all 3 loops
// higher order loops
// functions


function printGreeting(name) {              //function definition
    console.log(`Hello how are you ${name}`);
} 

printGreeting("Sai");
printGreeting("Siddhi");
printGreeting("Niya");
printGreeting("Rohan");

function addNum(num1, num2) {
    return num1 + num2;                     //return statement
    console.log("I am here");
} 

console.log(addNum(10, 20));            //function call

function addNum(num1, num2) {
   let Num2=Number(num2);          //type conversion
   let Num1=Number(num1);   
   
   if(isNaN(Num1) || isNaN(Num2)) {  //check if either Num1 or Num2 is NaN
       return ("Enter proper number");        //return statement    
   return Num1 + Num2;      
   }               //return statement   
} 

console.log(addNum(10, "20abc"));         //NaN -> Not a Number

let Num = 13;
console.log(isNaN(Num));  

let n1 = "123";
console.log(isNaN(n1));  //false, because n1 is a string that can be converted to a number

