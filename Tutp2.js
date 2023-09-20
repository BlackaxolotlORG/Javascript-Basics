// this whole docuement is to help with control flow in javascript

////////////for loops////////////


// first (initialization, condition, expresiion)
for (let i=0; i < 5;i++){
    console.log("in loop:",i)
}

console.log("looped finished")

//here we dont know how many elements are here 
const names= ["mario","luigi", "bowser"];

for(let i1=0; i1 < names.length; i1++){
    //print location
    console.log("in loop:",i1)
    //print names in order
    console.log(names[i1]);
    //print with html
    let html =`<div>${(names[i1])}</div>`
    console.log(html)
}

////////////while loops////////////


//initialization, condition, expresiion go in different places
i2 = 0;

while(i2 < 5){
    console.log("in while loop:",i2);
    i2++;
}



// example with names
const nameswhile = ["mario","luigi", "bowser"];

let i3 = 0;

while(i3 < nameswhile.length){
    console.log(nameswhile[i3]);
    i3++;
}


//do while loops
//does this to run it once even though the condition is not true
let i4 = 5;

do{
    console.log("val i is : ", i4);
    i4++;
} while(i4<5);




////////////if statements ////////////

const age= 220;


if( age > 20){
    console.log("You are over 20 years old")
    console.log(`Your age is ${age} years old`)
}

const amninjas = ["sahun","octavio","el mamado","bruce lee"];

if(amninjas.length > 3){
    console.log("that's a lot of ninjas")
}


/// as many else if as you want
const password= "passwrordddkddkd";
if(password.length >= 12){
    console.log("that password is super strong ")
}
else if(password.length >= 8){
    console.log("that password is long enough")
}
else{
    console.log("that password is not long enough")
}



////////////logical operators ////////////
/// satisfying many conditions 
const password2= "pas@d";

// AND is &&
if(password2.length >= 12 && password2.includes("@")){
    console.log("that password is super strong ")
}
//OR is ||
else if(password2.length >= 8 || password2.includes("@")&& password2.length >= 5){
    console.log("that password is long enough")
}
else{
    console.log("that password is not long enough")
}


////////////logical Nots (!)////////////
// run condition if it is false

console.log(!true)
console.log(true)
console.log(false)

let user = false;

if(!user){
    console.log("must login to continue")
}

///break and continue

const scores = [25,30,40,0,50,100,60];

for(let i9 = 0; i9 < scores.length; i9++){

    if(scores[i9]==0){
        continue;
    }

    console.log(`your score is: ${scores[i9]}`);

    if(scores[i9]===100){
    console.log("congrats you got the top score");
    break;

    }
}


///switch statements

const grade = "D";

switch(grade){
    case "A":
    console.log("you got an A");
    break;
    case "B":
        console.log("you got an B");
        break;
    case "C":
        console.log("you got an C");
        break;
    case "D":
        console.log("you got an D");
        break;
    case "E":
        console.log("you got an E");
        break;
    default:
        console.log("not a valid grade");
}

//this is the less optimal way to do the last function

if(grade == "A"){
    console.log("you got an A");
}else if (grade == "B"){
    console.log("you got an B");
}else if (grade == "C"){
    console.log("you got an C");
}else if (grade == "D"){
    console.log("you got an D");
}else if (grade == "E"){
    console.log("you got an E");
}else{

}

//variables & block scopes

let agetwo = 30;
if(true){
    agetwo =40;
    console.log("inside code block: ",agetwo);

}
console.log("outside: ",agetwo)

//second part 
//here we can only acess this version of age in this codeblock
let agethree = 30;
if(true){
    let agethree =40;
    let name6 = "Diego";
    console.log("inside code block: ",agetwo, name6);

}
if(true){
    console.log("inside second code block: ",agetwo);

}

//if you define something inside a codeblock you can only acess it in the codeblock
console.log("outside: ",agethree)



// we use let and const because var doesnt let you have blockscope