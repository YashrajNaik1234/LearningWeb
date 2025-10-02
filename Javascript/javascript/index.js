console.log("Hello");
console.log("I like pizza");

window.alert("This is an alert");
window.alert("I like pizza");

//THis is a comment
/* This 
is 
a 
comment
*/

document.getElementById("myH2").textContent = "Hello";
document.getElementById(`myP`).textContent = "I like Pizza";

let age1 = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof gpa);
console.log(`You are ${age1} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is : ${gpa}`);

let online = true;
console.log(`Bro is online : ${online}`);

let forSale = true;
console.log(`Is this car for Sale : ${forSale}`);

let isStudent = true;
console.log(`Enrolled : ${isStudent}`);

let fullName = "Yash";
let age = 22;
let Student = true;

document.getElementById("p1").textContent = `Your name is : ${fullName}`;
document.getElementById("p2").textContent = `Yous age is : ${age}`;
document.getElementById("p3").textContent = `Enrolled : ${Student}`;

let students = 29;

students = students + 1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 2;

let extrastudent = students;

students += 1;
students *= 2;
students /= 2;
students **= 2;
students %= 2;

students++;
students--;

let result = 1 + 2 * 3 + 4 ** 2;
result = 6 / 2 ** 7;

console.log(students);
console.log(extrastudent);
console.log(result);

let username1;
username1 = window.prompt("whats ur username ?");
console.log(username1);

let username;
document.getElementById("mysubmit").onclick = function () {
  username = document.getElementById("mytext").value;
  document.getElementById("myh3").textContent = `Hello ${username}`;
};

let age2 = window.prompt("How old are you ?");
age = Number(age);
age2 += 1;
console.log(age2);
console.log(age2, typeof age2);

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a cricle`);
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);

document.getElementById("mySubmit").onclick = function () {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * pi * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
};

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

let x1 = 3.21;
let y1 = 2;
let z1;

z1 = Math.round(x1);
z1 = Math.ceil(x1);
z1 = Math.floor(x1);
z1 = Math.trunc(x1);
z1 = Math.pow(x1, y1);
z1 = Math.sqrt(x1);
z1 = Math.log(x1);
z1 = Math.sin(x1);
z1 = Math.cos(x1);
z1 = Math.tan(x1);
z1 = Math.abs(x1);
z1 = Math.sign(x1);

let max = Math.max(x1, y1, z1);
let min = Math.min(x1, y1, z1);

console.log(z);

let randonNum;
randomNum = Math.floor(Math.random() * 100) + 1;

const max1 = 100;
const min1 = 50;
let randonNum1;
randomNum1 = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
console.log(randomNum1);

const mybutton = document.getElementById("mybutton");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");

let randomnum1;
let randomnum2;
let randomnum3;
const min2 = 1;
const max2 = 6;
mybutton.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    mylabel1.textContent = randomnum1;
    mylabel2.textContent = randomnum2;
    mylabel3.textContent = randomnum3;
}

let agex = 24;
if(age >= 18){
    console.log("Allowed");
}
else{
    console.log("Not allowed");
}

let time = 9;

if(time < 12) console.log("Good Morning");
else console.log("Good Afternoon");

let isStu = false;
if(isStu) console.log("Yes");
else console.log("No");

let agelicen = 15;
let hasLicen = false;

if(agelicen >= 16){
    console.log("Elligible");
    if(hasLicen) console.log("You already have");
    else console.log("You dont have");
}
else console.log("U must be 16+");

let money = 100;

if(money >= 100) console.log("Happy");
else if(money > 0) console.log("Save");
else console.log("Sad");

document.getElementById("submit").onclick = function(){
    let Age = document.getElementById("age").value;

    if(Age < 16) document.getElementById("ageBtn").textContent = `You are not Elligible`;
    else if(Age >= 16 && Age < 20) document.getElementById("ageBtn").textContent = "You are Elligble";
    else document.getElementById("ageBtn").textContent = `You are not Elligble`;
}

const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const paysubmit = document.getElementById("paysubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

paysubmit.onclick = function(){

  if(mycheckbox.checked) subResult.textContent = `You are Subscribed`;
  else subResult.textContent = `You are not Subscribed`;

  if (visaBtn.checked) payResult.textContent = `You are paying with Visa`;
  else if (masterBtn.checked) payResult.textContent = `You are paying with Mastercard`;
  else if (paypalBtn.checked) payResult.textContent = `You are paying with Paypal`;
  else payResult.textContent = `You must select a payment`;
}

let ageter = 21;
let message;
if(ageter >= 18) message = "You're an Adult";
else message ="You're an Minor";

let message1 = age >= 18 ? "You're an Adult" : "You're an Minor";;

let time1 = 16;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isStudent1 = true;
let message2 = isStudent1 ? "You are a Student" : "You r not a Student";

