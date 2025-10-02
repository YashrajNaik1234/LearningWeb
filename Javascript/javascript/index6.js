let buttons = document.querySelectorAll(".mybtn");
console.log(buttons);

buttons.forEach(ele => {
    ele.style.backgroundColor = "grey";
    ele.textContent += "😀";
});

buttons.forEach(button => {
    button.addEventListener("click",event =>{
        event.target.style.backgroundColor = "red";
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.style.backgroundColor = "aqua";
    });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "grey";
  });
});

const newbtn = document.createElement("button");
newbtn.textContent = "Button 5";
newbtn.classList = "mybtn";

document.body.appendChild(newbtn);
console.log(buttons);

buttons = document.querySelectorAll(".mybtn");
console.log(buttons); 

buttons.forEach(button =>{
    button.addEventListener("click",event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".mybtn");
        console.log(buttons);
    });
});

const mybutton = document.getElementById("mybutton");
const myh2 = document.getElementById("myh2");


myh2.classList.add("disabled");
mybutton.classList.add("enabled");
mybutton.classList.remove("enabled");

mybutton.addEventListener("mouseover",event =>{
    event.target.classList.toggle("hover");
});

mybutton.addEventListener("mouseout", (event) => {
  event.target.classList.toggle("hover");
});

mybutton.classList.add("enabled");

mybutton.addEventListener("click",event =>{
    if(event.target.classList.contains("disabled")){
        event.target.textContent += "🤬";
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }
});

let butns = document.querySelectorAll(".mybtn1");
butns.forEach(button=>{
    button.classList.add("enabled");
});

butns.forEach(button =>{
    button.addEventListener("mouseover",event =>{
        event.target.classList.toggle("hover");
    });
});

butns.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

butns.forEach(button =>{
    button.addEventListener("click",event =>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤬;"
        }
        else{
            event.target.classList.replace("enabled","disabled");
        }
    });
});

function task1(callback){
    setTimeout(() => {
        console.log("Task 1 complete")
        callback();
    }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
    callback();
  }, 1000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
    callback();
  }, 3000);
}
function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
    callback();
  }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() =>{
                console.log("All Tasks Completed11");
            });
        });
    });
});

function walkdog(){

    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const dogwalked = true;

            if(dogwalked){
                resolve("you walk the dog 🐕");
            }
            else{
                reject("You didnt walk the dog");
            }

        }, 1500);
    })
}

function cleankitchen(){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const kitchenclean= true;

            if (kitchenclean) {
              resolve("You clean Kitchen 🧹");
            } 
            else {
              reject("You didnt clean the kitchen");
            }
    },2500);
    });
}

function takeoutTrash(){
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const trashtken = false;

            if (trashtken) {
              resolve("You take out the trash 🚮");
            }
             else {
              reject("You didnt take out the trash");
            }
    },500);
    });
}

async function dochores() {
    try{
        const walkdogres = await walkdog();
        console.log(walkdogres);

        const cleankitchnres = await cleankitchen();
        console.log(cleankitchnres);

        const takeotres = await takeoutTrash();
        console.log(takeotres);

        console.log("You finished all chores!");
    }
    catch(error){
        console.log(error);
    }
}

dochores();

walkdog().then(value =>{console.log(value); return cleankitchen()})
         .then(value => {console.log(value); return takeoutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.log(error));


const names = ["Spongebob","Patrick","Squidward","Sandy"];

const jsonString = JSON.stringify(names);
console.log(jsonString);

const person = {
  name: "Spongebob",
  age: 30,
  isEmploed: true,
  hobbies: ["Jellyfishing", "karate", "Cooking"],
};

console.log(JSON.stringify(person));

const people = [{
    name: "Spongebob",
    age: 30,
    isEmploed: true,
  },

  {
    name: "Patrick",
    age: 34,
    isEmploed: false,
  },

  {
    name: "Squidward",
    age: 50,
    isEmploed: true,
  },

  {
    name: "Sandy",
    age: 27,
    isEmploed: false,
  },
];

console.log(people);

const naems = `["Spongebob","Patrick","Squidward","Sandy"]`;
const peson = `{
    "name":"Spongebob",
    "age":30,
    "isEmploed":true,
    "hobbies":["Jellyfishing","karate","Cooking"]
}`;
const peple = `[{
  "name": "Spongebob",
  "age": 30,
  "isEmploed": true
},

{
    "name":"Patrick",
    "age":34,
    "isEmploed":false
},

{
    "name":"Squidward",
    "age":50,
    "isEmploed":true
},

{
    "name":"Sandy",
    "age":27,
    "isEmploed":false
}]`;

const parseddata = JSON.parse(naems);
console.log(parseddata);

fetch("../json/index1.json")
    .then(response => response.json())
    .then(value => console.log(value));


fetch("../json/index2.json")
      .then((response) => response.json())
      .then((values) => values.forEach(value =>  console.log(value.isEmploed)))
      .catch(error => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error));

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => {
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then((data) => console.log(data.name))
  .catch((error) => console.log(error));

async function fetchdata(){
    try{
        const pokemonname = document.getElementById("pokemonname").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const imgele = document.getElementById("pokemonsprite");

        imgele.src = pokemonsprite;
        imgele.style.display = "block";
    }
    catch(error){
        console.log(error);
    }
}
