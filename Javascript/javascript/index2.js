let x = 3;
function function1(){
    let x = 1;
    console.log(x);
}
function function2() {
  let x = 2;
  console.log(2);
}

console.log(x);

let fruits = ["apple" , "orange" , "bannana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort();
fruits.sort().reverse();

let newfruits = ["apple", "orange", "bannana"];
let Newfruits = ["apple" , "orange" , "bannana"];
let vegetables = ["carrot" , "celery" , "potatoes"];

let foods = [...fruits,...vegetables,"eggs","milk"];
console.log(foods);

let numbers = [1,2,3,4,5];
let maximun = Math.max();
let minimum = Math.min();

console.log(numbers);
console.log(maximun);
console.log(minimum);

let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

function openFridge(...Foods){
    console.log(Foods);
}

function getfood(...Foods){
    return Foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1 , food2 , food3 , food4 , food5);

const FoodS = getfood(food1 , food2 , food3 , food4 , food5);
console.log(FoodS);

function sum(...numbers){
    let result = 0;
    for(let num of numbers){
        result += num;
    }
    return result;
}

function getAverage(...numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result / numbers.length;
}

const total = getAverage(75,100,85,90,50);
console.log(total);

function combneString(...strings){
    return strings.join(" ");
}

const fullName = combneString("Mr." , "Spongebob" , "Sauarepants" ,"III");
console.log(fullName);

hello();
goodbye();
hehe(leav);

function hehe(callback){
    console.log("Hehe");
    callback();
}

function leav(){
    console.log("leave");
}

function wait(){
    console.log("Wait");
}

function hello(){
    setTimeout(function () {
        console.log("Hello!");
    },3000);
}

function goodbye(){
    console.log("Goodbye!!");
}

sum(displayConsole,12,35);
sum(displayPage, 15, 27);

function sum(callback,x , y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

let num = [1 ,2 ,3 ,4, 5];

num.forEach(double);
num.forEach(display);

function double(element,index,array){
    array[index] = element * 2;
}

function triple(element, index, array) {
  array[index] = element * 3;
}

function display(element){
    console.log(element);
}

function square(element,index,array){
    array[index] = Math.pow(element,2);
}

function cubes(element, index, array) {
  array[index] = Math.pow(element, 3);
}

let fruit = ["apple" , "bannana" , "cocunut" , "orange"];


fruit.forEach(Capitalize);
fruit.forEach(disp);

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function Capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function disp(element){
    console.log(element);
}

const nums = [1,2,3,4,5];

const squares = nums.map(square);
const cube = nums.map(cubes);

console.log(squares);
console.log(cube);

function square(element){
    return Math.pow(element,2);
}

function cubes(element) {
  return Math.pow(element,3);
}

const students = ["Adarsh" , "Vivek" , "Harsh" , "Yash"];

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}

const studentsLower = students.map(lowerCase);
console.log(studentsLower);

function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ["2024-1-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

let numb = [1,2,3,4,5,6,7];
let evenNum = numb.filter(isEven);

console.log(evenNum);

function isEven(element){
    return element % 2 === 0;
}

let oddNum = numb.filter(isOdd);

console.log(oddNum);

function isOdd(element) {
  return element % 2 === 1;
}

const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element){
    return element >= 18;
}

const child = ages.filter(ischild);
console.log(child);

function ischild(element){
    return element < 18;
}

const words = ["apple","orange","banana","kiwiw","promegranate"];
const shortwords = words.filter(getshortwords);

console.log(shortwords);

function getshortwords(element){
    return element.length <= 6;
}

const longwords = words.filter(getlongwords);

console.log(longwords);

function getlongwords(element) {
  return element.length > 6;
}

const prices = [5,30,10,25,15,20];
const tot = prices.reduce(sum1);

console.log(`$${tot.toFixed(2)}`);

function sum1(accumulator,element){
    return accumulator + element;
}

const tota = prices.reduce(sum2);

console.log(`$${tota.toFixed(2)}`);

function sum2(previous, element) {
  return previous + element;
}

const grades = [75,50,90,80,65,95];

const maxi = grades.reduce(getMax);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

const mini = grades.reduce(getMin);

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}

console.log(maxi);
console.log(mini);

const hellore = function(){
    console.log("Hello Worlds");
}

hellore();

setTimeout(hellore,5000);

const numberss = [1,2,3,4,5,6];
const sqr = numberss.map(function sq(element){
    return Math.pow(element,2);
});

console.log(sqr);

const cubr = numberss.map(function cub(element) {
  return Math.pow(element, 3);
});

console.log(cubr);

const evenums = numberss.map(function evenn(element) {
  return element % 2 === 0;
});

console.log(evenums);

const oddnums = numberss.map(function oddn(element) {
  return element % 2 == 0;
});

console.log(oddnums);

const totnum = numberss.reduce(function(accumulator,element){
    return accumulator + element;
});

console.log(totnum);
