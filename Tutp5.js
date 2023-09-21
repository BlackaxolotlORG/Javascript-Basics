//DOM


//////////////////////////////////
//////////query selectors/////////
//////////////////////////////////


//this only grabs the first p tag
const para = document.querySelector(`p`);
console.log(para);

const para2 = document.querySelector(`.err9r`);
console.log(para2);

const diverr = document.querySelector(`div.err9r`);
console.log(diverr);


//inspect element grab element you want to copy and select copy selector and then paste
const copyselector = document.querySelector(`body > div:nth-child(2) > h2`);
console.log(copyselector);


//grab all elements

const paras = document.querySelectorAll(`p`);


console.log(paras);

//log specific paragraph if you know there index
console.log(paras[0]);
//log each paragraph
paras.forEach(para => {
    console.log(para)
})

const errors = document.querySelectorAll(`.err9r`);
console.log(errors);

//////////////////////////////////
//////////query selectors/////////
//////////////////////////////////


//grab by ID
const paragraphID = document.getElementById("pragraph-id");
console.log(paragraphID);

//grab elements by class name
//cant use foreach in a html collection
const paragraphclassname = document.getElementsByClassName("err9r");
console.log(paragraphclassname);


//get elements by there tagname
const tagname = document.getElementsByTagName("p");
console.log(tagname);
console.log(tagname[1]);
