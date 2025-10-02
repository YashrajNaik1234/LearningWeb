document.getElementById("");

document.title = "MY website";
document.body.style.backgroundColor = "hsl(181, 89.90%, 69.00%)";

console.dir(document);

const username = "Bro Code";
const welcmsg = document.getElementById("welcome-msg");

welcmsg.textContent += username === "" ? `Guest` : username;

const myheading = document.getElementById("my-heading");
myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";

console.log(myheading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "green";

for(let fruit of fruits){
    fruit.style.backgroundColor = "pink";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});

const h4Ele = document.getElementsByTagName("h4");
console.log(h4Ele);

h4Ele[0].style.backgroundColor = "blue";

const liele = document.getElementsByTagName("li");
for(let li of liele){
    li.style.backgroundColor = "green";
}

Array.from(liele).forEach(li =>{
    li.style.backgroundColor = "lightgreen";
})

const ele = document.querySelector(".fruits");

ele.style.backgroundColor = "white";
console.log(ele);

const foods = document.querySelectorAll(".fruits");

foods[1].style.backgroundColor = "orange";
console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "RGB";
});

const elem = document.getElementById("fss");
const firstchild = elem.firstElementChild;
firstchild.style.backgroundColor = "lightyellow";

const ulele = document.querySelectorAll("ul");
ulele.forEach(ul=>{
    const first = ul.firstElementChild;
    first.style.backgroundColor = "grey";
});

const lastchild = elem.lastElementChild;
lastchild.style.backgroundColor = "gold";

ulele.forEach((ul) => {
  const last = ul.lastElementChild;
  last.style.backgroundColor = "gold";
});

const elee = document.getElementById("apple");
const nxtsib = elee.nextElementSibling;
nxtsib.style.backgroundColor = "blue";

const eleo = document.getElementById("orange");
const prev = eleo.previousElementSibling;
prev.style.backgroundColor = "orange";

const parent = eleo.parentElement;
parent.style.backgroundColor = "green";

const elec = document.getElementById("dss");
const chiln = elec.children;

chiln[1].style.backgroundColor = "purple";

const newh2 = document.createElement("h2");
newh2.textContent = "I like pizaa!";

document.body.append(newh2);
document.body.prepend(newh2);

newh2.id = "myh1";
newh2.style.color = "tomato";
newh2.style.textAlign = "center";

document.getElementById("box1").prepend(newh2);

const box2 = document.getElementById("box2");
document.body.insertBefore(newh2,box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newh2,boxes[1]);

document.getElementById("box2").append(newh2);

document.getElementById("box2").removeChild(newh2);

const newlistitem = document.createElement("li");
newlistitem.textContent = "Coconut";

newlistitem.style.fontWeight = "bold";
newlistitem.style.backgroundColor = "Purple";
//document.getElementById("Orange").append(newlistitem);

//const bannana = document.getElementById("Bannana");
//document.getElementById("fruities".insertBefore(newlistitem,bannana));

const fruity = document.querySelectorAll("#fruities li");
document.getElementById("fruities").insertBefore(newlistitem,fruity[1]);

const mybox = document.getElementById("mybox");

function changecolor(event){
    event.target.style.backgroundColor = "red";
    event.target.textContent = "OUCH! 🤔";
}

mybox.addEventListener("click",changecolor);

mybox.addEventListener("click",(event) => {
    event.target.style.backgroundColor = "yellow";
});

mybox.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "blue";
});

mybox.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "pink";
});

const mybutton = document.getElementById("mybutton");

mybutton.addEventListener("click", (event) => {
  mybox.style.backgroundColor = "yellow";
  mybox.textContent = "OUCH! 😓";
});

mybutton.addEventListener("mouseover", (event) => {
  mybox.style.backgroundColor = "blue";
  mybox.textContent = "Dont do it 😯";
});

mybutton.addEventListener("mouseout", (event) => {
  mybox.style.backgroundColor = "pink";
  mybox.textContent = "Click me 😳";
});

document.addEventListener("keydown",event =>{
    console.log('Key down = ${event.key}');
});


document.addEventListener("keyup", (event) => {
  console.log('Key up = ${event.key}');
});

const mybox1 = document.getElementById("my-box");

document.addEventListener("keydown", (event) => {
  mybox1.textContent = "😓";
  mybox1.style.backgroundColor = "red";
});

document.addEventListener("keyup", (event) => {
  mybox1.textContent = "😀";
  mybox1.style.backgroundColor = "yellow";
});


const moveamt = 10;
let x = 0;
let y = 0;

const mybox2 = document.getElementById("my-box");

document.addEventListener("keydown",event =>{
    if(event.key.startsWith("Arrow")){
        switch (event.key) {
            case "ArrowUp":
                y -= moveamt;
                break;
            case "ArrowDown":
                y += moveamt;
                break;
            case "ArrowLeft":
                x -= moveamt;
                break;
            case "ArrowRight":
                x += moveamt;
                break;
        }

        mybox2.style.top = `${y}px`;
        mybox2.style.left = `${x}px`;
    }
});

document.addEventListener("keydown", (event) => {
  mybox2.textContent = "😓";
  mybox2.style.backgroundColor = "red";
});

document.addEventListener("keyup", (event) => {
  mybox2.textContent = "🥱";
  mybox2.style.backgroundColor = "rgb(0, 255, 76";
});

const mybtn = document.getElementById("mybtn");
const myimg = document.getElementById("mypic");

mybtn.addEventListener("click",event =>{
    if(myimg.style.visibility === "hidden"){
        myimg.style.visibility = "visible";
        mybtn.textContent = "Hide";
    }
    else{
        myimg.style.visibility ="hidden";
        mybtn.textContent = "Show";
    }
});

