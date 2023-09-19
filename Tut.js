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



let radius = 10;
const pi = 3.14;
console.log(radius);
console.log(pi);

let results = radius % 3;

console.log(results);


// double ** means to the power of
let result10 = pi * radius ** 2;

console.log(result10);


//NaN - not a number
console.log(5*"Hello")
// this gives a not a number NAN because you are trying to multiply a number by a string

let likes = 10;
let result6 = "Hello my age is" + " " + likes + " " + "likes";

console.log(result6)


//template strings
const title9 = "Best reads of 2019";
const author9 = "Diego Lopez Araiza";
const likes9 = 30;

//concatenate them way
let result9= "the blog called " + title9 + " by " + author9 + " has " + likes9 + " likes"
console.log(result9)

//template string way

// In JavaScript, template literals are created using backticks (`), 
//not regular single or double quotes. Here's the corrected code:

let result11 = `the blog called ${title9} by ${author9} has ${likes9} likes`;
console.log(result11)


//creating html templates 

let html = `
    <h2>${title9}</h2>
    <p>By  ${author9}</p>
    <span> This blog has ${likes9} likes </span>
`


//

let ninjas = ["mathew","carlos","brad"];
//override value in an array
ninjas[1] = "Remy";
console.log(ninjas[1]);

let ages = [30,20,69,839,3];
//join values in an array first method
let result12 = ninjas.join(",");
console.log(result12);
//find location of variable
let result13 = ninjas.indexOf("mathew");
console.log(result13);

//join new array to old array
let result14 = ninjas.concat(["ken","Jasqui"]);
console.log(result14);

//will give out the legth of the new array
//this form actually alters the original value not like the other opnes that just create 
// a new value with the added values
let result15 = ninjas.push("simon")
console.log(result15)

console.log(ninjas);
//push lo pone hasta el final y pop quita el ultimo => esto es lo que se referia joaq con stacks an example is control z
let result16 = ninjas.pop();
console.log(ninjas);

//if you print the result16 you can see which result was poped
console.log(result16);



// you give Null a value and undefined is given automatically
console.log(age0, age0 + 3 , `the age is ${age0}`)