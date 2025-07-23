// let id ="123"
// let newId = Number(id);

// console.log(newId); // Output: 123
// console.log(typeof newId); // Output: "number"


// let isLoggedIn = true;
//     isLoggedIn = Number(isLoggedIn);

// console.log(isLoggedIn); // Output: 1
// console.log(typeof isLoggedIn); // Output: "number"    

// let user = "Ganesha";
// let age = 13;
// let email = "abc@gmail.com";

// console.log("user is",user," and age is",age,"email is",email);
// //or
// console.log(`user is ${user} and age is ${age} email is ${email}`);  //best approach

// //Operators
// console.log(1+"2"+2);  //tricky questions can be asked
// console.log(1+2+"2");

// let x = 3;
// let y = x++;   //postfix
// console.log(x); // Output: 4
// console.log(y); // Output: 3

// let a = 3; 
// let b = ++a;   //prefix

// console.log(a);  
// console.log(b); 


//comparison op
// console.log(3 == "3");  //true   checks only value

// console.log(3 === "3"); //false   checks both value and data type  

// console.log("");
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null === undefined);

//if-else-if statement
// let marks = 80;
// if(marks>=90){
//     console.log("Grade A");
// } 
// else if(marks>=75){
//    console.log("Grade B");
// }
// else{
//     console.log("Grade C");
// }


//ternary op
// let age = 13;

// let result = (age>=18) ? "Adult" : "Minor";
// console.log(result);

let day = 3;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;                    
    default:
        console.log("Invalid Input");
}


//loops
for(let i = 0; i < 5; i++) {
    console.log("Hello World");
}

for(let i = 2; i <= 10; i+=2) {
    console.log(i);
}