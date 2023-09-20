//example of callback function
const ul = document.querySelector(".people");

const people= ["Remy", "Diego", "Octavius","Adolfo"];

let html = "";

people.forEach(person => {
    //create html template
    html += `<li "style= color:green">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
