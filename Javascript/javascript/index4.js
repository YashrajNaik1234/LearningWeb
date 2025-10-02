const person = {
    fullname : "SPonfgebob sqaurepants",
    age : 30,
    isStudent : true,
    hobbies: ["karate","jellyfishing","cooking"],
    address :{
        street :"124 Conch ct,",
        city:"Beskon",
        country:"Courty"
    }

}

console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.hobbies);
console.log(person);
console.log(person.address.street);
console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}

class Person{
  constructor(name, age, ...address1) {
    this.name = name;
    this.age = age;
    this.address1 = new Address(...address1);
  }
}

class Address{
    constructor(street,city,country){
        this.street = street;
        this.country = country;
        this.city = city;
    }
}

const person1 = new Person("Spoongebob",30,"124 cont st.",
                                            "Beskot",
                                            "Cotru");
                                            
const person2 = new Person("Patrick", 25, "129 cont st.", 
                                              "Beskot",
                                               "Cotru");

const person3 = new Person("Setve", 41, "128 cont st.",
                                        "Beskot",
                                         "Cotru");

console.log(person1.address1);
console.log(person3.address1.country);
console.log(person2.address1.street);

const fruits = [{name:"apple" , color :"red",caloreis :95},
                {name:"bannana" , color :"yellow",caloreis :115},
                {name:"orange" , color :"orange",caloreis :45},
                {name:"coconut" , color :"white",caloreis :145},
                {name:"pineapple" , color :"yellow",caloreis :75}];

console.log(fruits);

fruits.push({name:"grapes",color:"purple",calories:77});
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.splice(1,2);
console.log(fruits);

fruits.push({name: "bannana", color: "yellow", caloreis: 115 });

fruits.forEach(fruits => console.log(fruits.caloreis));

const fruitnames1 = fruits.map(fruit => fruit.name);
const fruitcolor1 = fruits.map((fruit) => fruit.color);
const fruitcaloreis1 = fruits.map((fruit) => fruit.caloreis);

console.log(fruitnames1);
console.log(fruitcolor1);
console.log(fruitcaloreis1);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

const lowcalFruits = fruits.filter((fruit) => fruit.caloreis < 100);
console.log(lowcalFruits);

const highcalFruits = fruits.filter((fruit) => fruit.caloreis > 100);
console.log(highcalFruits);

const maxfruit = fruits.reduce((max,fruit) => fruit.caloreis > max.caloreis ? fruit : max);
console.log(maxfruit);

const minfruit = fruits.reduce((min, fruit) =>fruit.caloreis < min.caloreis ? fruit : min);
console.log(minfruit);

const people = [
  { name: "Spongebob", age: 30, gpa: 3.0 },
  { name: "Patrick", age: 37, gpa: 1.5 },
  { name: "Squidward", age: 51, gpa: 2.5},
  { name: "Sandy", age: 27, gpa :4.0 },
];

people.sort((a,b) => a.age - b.age);
people.sort((a, b) => b.age - a.age);


people.sort((a, b) => a.gpa - b.gpa);
people.sort((a, b) => b.gpa - a.gpa);

people.sort((a, b) => a.name - b.name);
people.sort((a, b) => b.name - b.name);

people.sort((a,b) => a.name.localeCompare(b.name));
people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people);

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q'];

shuffle(cards);
console.log(cards);
function shuffle(array){
    for(let i = array.length - 1;i > 0 ;i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i] , array[random]] = [array[random] , array[i]];
    }
}

const date1 = new Date();
console.log(date1);

const date2 = new Date(2024,0,1,2,3,4,5);
console.log(date2);

const date3 = new Date("2024-01-02T12:00:00Z");
console.log(date3);

const date4 = new Date(17000000000);
console.log(date4);

const year = date4.getFullYear();
const month = date4.getMonth();
const day = date4.getDate();
const hour = date4.getHours();
const minutes = date4.getMinutes();
const seconds = date4.getSeconds();
const dayofweek = date4.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayofweek);

date4.setFullYear(2024);
date4.setMonth(0);
date4.setDate(1);
date4.setHours(2);
date4.setMinutes(4);
date4.setSeconds(1);
console.log(date4);

const date5 = new Date("2023-12-31");
const date6 = new Date("2024-01-01");

if(date6 > date5){
    console.log("happy new year");
}

function outer(){
    let messsage = "Hello";
    function inner(){
        console.log(messsage);
    }

    inner();
}


outer();

let count = 0;
count = 100000;

function increament(){
    count++;
    console.log(`count increased to ${count}`);
}

increament();
increament();

function creatCounter(){
    let cnt = 0;
    function increa() {
      cnt++;
      console.log(`cnt increased to ${cnt}`);
    }

    function getcnt(){
        return cnt;
    }

    return {increa,getcnt};
}

const counter = creatCounter();
counter.increa();
counter.increa();

console.log(`The current cnt is ${counter.getcnt()}`);

function creategame(){
    let score = 0;

    function increasescore(points) {
      score += points;
      console.log(`${points}pts`);
    }

    function decreasescore(points) {
      score -= points;
      console.log(`-${points}pts`);
    }

    function getScore() {
      return score;
    }

    return {increasescore,decreasescore,getScore};
}

const game = creategame();

game.increasescore(5);
game.increasescore(10);
game.decreasescore(7);
console.log(`The final score is ${game.getScore()}pts`);

function sayhello(){
    window.alert("Hello");
}

///setTimeout(sayhello,3000);

const timeoutid = setTimeout(() => window.alert("Hello"),3000);
clearTimeout(timeoutid);

let timoutid;
function startTimer(){
    timoutid = setTimeout(() => {
        window.alert("Hello");
    }, 3000);
    console.log("STARTED");
}

function cleartimer(){
    clearTimeout(timoutid);
    console.log("CLEARED");
}

import {PI,getcircum,getarea,getvol} from './mathUtil.js';

console.log(PI);

const circumfer = getcircum(10);
console.log(`${circumfer.toFixed(2)}cm`);

const area = getarea(10);
console.log(`${area.toFixed(2)}cm^2`);

const vol = getvol(10);
console.log(`${vol.toFixed(2)}cm^3`);

function func1(callback){
    setTimeout(() => {console.log("Task 1");
    callback()},3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);

try{
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}

console.log("Yor reached the end!");

try{
    const dividend =Number(window.prompt("Enter a dividend"));
    const divisor = Number(window.prompt("Enter a divisor"));

    if(divisor == 0){
        throw new Error("You cant divide by zero");
    }
    if(isNaN(dividend || isNaN(divisor))){
        throw new Error("value must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("End")

