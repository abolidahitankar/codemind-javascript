console.log("=====querySelector() DOM API using element class ======");
const toolElement = document.querySelector(".tools");
console.log(toolElement.innerText);

console.log("=====querySelectorAll() DOM API using element class ======");
const toolsElement = document.querySelectorAll(".tools");
for (const element of toolsElement) {
    console.log(element.innerText);  
}

id="hobbiesHeading"
console.log(`====== EVENTS =========`);
const hobbiesHeading = document.querySelector("#hobbiesHeading");
hobbiesHeading.addEventListener("click", ()=>{
    console.log("Hey buddy.. Smile!!");
});

const addition = document.querySelector("#addition");
addition.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne+numTwo);
});