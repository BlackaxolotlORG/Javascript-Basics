alert("Hello world");


let age = 25;
let year = 2019;

console.log(age,year);

age = 30;
console.log(age);


const points = 100;

console.log(points);



var score= 75;
console.log(score);

//Const make the variable not be able to be overwritten 
//let lets you change variables
//var is the older version so we wont use them
//cant start variable with numbers

let email = "Hello mikel doesnt let me learn javascript";
console.log(email)
console.log("Hello world");


let firstName = "Mikel";
let lastName = "Fresan";
//this looks a lot like php
let fullName = firstName + " " + lastName;
console.log(fullName);
//getting characters
console.log(fullName[0]);
//getting length
console.log(fullName.length);


//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);


let index = email.indexOf("n")
console.log(index);

//common string methods
let emailu = "Diego@gmail.com";
let result1 = emailu.lastIndexOf("o");
console.log(result1);

//this one goes from the first postion which is 0 to position 10
//here im using the mike doesnt let me study sentence instead of the email i just wrote
let result2 = email.slice(0,10);
console.log(result2);


//this one goes from position 4 to the number of positions so it goes to 14 instead of 10
//similar to slice
let result3 = email.substr(4,10);
console.log(result3);


//replace like it says
let result4 = email.replace("mikel","Josit");

console.log(result4);

//only replaces the first letter nopt all 
let result5 = email.replace("i","o");
console.log(result5);