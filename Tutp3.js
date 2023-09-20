//function declaration
greet();



function greet(){
    console.log("hello there");
}
// fucntion declarations can be put anywhere because they run first 

//function expression
//variable = equal to function = expression
const speak = function(){
    console.log("hello good day!");
};  

speak();


// arguments and parameters

//local variable
const speak2 = function(name){
    console.log(`hello good day ${name}!`);
};  

speak2("Remy");

//local variable
// luigi and night are defaults
const speak3 = function(name1 = "luigi",time = "night"){
    console.log(`hello good day ${name1} its ${time}!`);
};  

speak3("Remy", "12 am");
speak3();

//returning values
const calcarea = function(radius){
    let area = 3.14 * radius**2;
    return area 
};

const areaf = calcarea(5);
console.log(areaf)


/// or

const calcarea2 = function(radius){
    return 3.14 * radius**2;
};

const areaf2 = calcarea(5);
console.log(areaf2)


const calcVal = function(areaf2){

};
calcVal(areaf2);


//arrow functions which are better:

const calcarrow= (radius)=>{
    return 3.14 * radius**2;
};

const areaarrow = calcarrow(7);
console.log(areaarrow)


//new form with one parameter and one return
const calcarrow2= radius=> 3.14 * radius**2;

const areaarrow2 = calcarrow2(8);
console.log("area is ", areaarrow2)



/// changing regular functions to arrow functions