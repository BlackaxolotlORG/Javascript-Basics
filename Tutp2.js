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



const password= "password";

if(password.length >= 8){
    console.log("that password is long enough")
}