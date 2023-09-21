const para = document.querySelector("p");

// see inner text
console.log(para.innerText)

// edit inner text
para.innerText = "ninjas are awesome";



const paras = document.querySelectorAll("p");

//change and add content 
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " new text";
});

//insert html
const content = document.querySelector(".content");
content.innerHTML += "<h2>This is a H2 created in js</h2>"
console.log(content.innerHTML);


const people = ["mario","luigi","yoshi"];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});



//change button adress and inner text
const links = document.querySelector("a.google");

console.log(links.getAttribute("href"));
links.setAttribute("href","https://www.youtube.com");
links.innerText = "youtube link"
console.log(links.getAttribute("href"));


//change class to change css can be useful like error make button red and sucess make green

const mssg = document.querySelector("p.wooky")
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class","sucess");
console.log("p.sucess");


//create and set new attribute
//one major draw back :( completely ovverides previous styles instead of adding it
mssg.setAttribute("style","color: green;");

const fifthparagraph = document.querySelector("p.fifth");
console.log(fifthparagraph.style);
console.log(fifthparagraph.style.color);


fifthparagraph.style.margin= "50px";
fifthparagraph.style.color= "purple";
//remove - from styles because it confuses 40
fifthparagraph.style.fontSize= "60px";
//this removes this style if you put nothing
fifthparagraph.style.margin= "";


const istherediv = document.querySelector("div.isthere")

console.log(istherediv.classList);
//removes class
istherediv.classList.remove("isthere");
//adds class
istherediv.classList.add("error");
istherediv.classList.add("sucess");




//const paras = document.querySelectorAll("p");

console.log(paras)
paras.forEach(para => {
    if (para.textContent.includes("error")){
        para.classList.add("errorp");
        
    }
    else if (para.textContent.includes("sucess")){
        para.classList.add("sucessp");
    } 
    else {
        
    }
    //content.innerHTML += `<p>${person}</p>`;
});