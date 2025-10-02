const hello = function(){
    console.log("Hello");
}

const hellore = (name,age) =>{
    console.log(`Hello ${name}`);
    console.log(`You are ${age} years old`)
};
hellore("Bro",25);

hello();

setTimeout(function () {
  console.log("Hello");
}, 3000);

setTimeout(() => console.log("Hello"),2000);

const numbers = [1,2,3,4,5,6];
const sq = numbers.map((element) => Math.pow(element,2));
console.log(sq);

const cb = numbers.map((element) => Math.pow(element, 3));
console.log(cb);

const evNum = numbers.filter((element) => element % 2 === 0);
console.log(evNum);

const odNum = numbers.filter((element) => element % 2 !== 0);
console.log(odNum);

const total = numbers.reduce((accumulator,element) => accumulator + element);
console.log(total);

const person1 = {
  firstname : "Spongebob",
  lastname : "Squarepants",
  age : 30,
  isEmploayed : true,
  sayhello : function(){console.log("HI , Im Spongebob")},
  eat: function(){console.log("Im eating a Pizza")},
}

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.isEmploayed);
person1.sayhello();
person1.eat();

const person2 = {
  firstname: "Patrick",
  lastname: "Star",
  age: 42,
  isEmploayed: false,
  sayhello: () => console.log("HI , Im Patrick"),
  eat:()=>console.log("Im eating a Burger"),
};

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isEmploayed);
person2.sayhello();
person2.eat();

const person3 = {
  firstname: "Spongebob",
  favfood: "hamburgers",
  sayhello: function(){console.log(`Hi, I want ${this.favfood}`)},
  eat: function(){console.log(`${this.firstname} is eating ${this.favfood}`)},
}

person3.sayhello();
person3.eat();

const person4 = {
  firstname: "Patrick",
  favfood: "Roll",
  sayhello:  () => {console.log(`Hi, I want ${person4.favfood}`); },
  eat: () => { console.log(`${person4.firstname} is eating ${person4.favfood}`);},
};

person4.sayhello();
person4.eat();

console.log(this);

function car(make,model,year,color){
  this.make = make,
  this.model = model,
  this.color = color,
  this.year = year,
  this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new car("Ford","Mustang",2024,"red");
const car2 = new car("Tata","Hexa", 2025, "blue");
const car3 = new car("Dodge","Charger", 2026, "silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();

class product{
  constructor(name,price){
    this.name = name;
    this.price = price;
  }

  displayproduct(){
    console.log(`Product:${this.name}`);
    console.log(`Price :$${this.price.toFixed(2)}`);
  }

  calculatetotal(saletax){
    return this.price + (this.price * saletax);
  }
}

const product1 = new product("shirt",19.99);
product1.displayproduct();

const product2 = new product("pant", 17.99);
product2.displayproduct();

const product3 = new product("socks", 2.99);
product3.displayproduct();

const salestax = 0.05;
const total1 = product1.calculatetotal(salestax);
console.log(`Total price with tax : $${total1.toFixed(2)}`);

const total2 = product1.calculatetotal(salestax);
console.log(`Total price with tax : $${total2.toFixed(2)}`);

const total3 = product1.calculatetotal(salestax);
console.log(`Total price with tax : $${total3.toFixed(2)}`);

class mathutil{
  static PI = 3.14159;

  static getdiameter(radius){
    return radius * 2;
  }

  static getcircumference(radius){
    return 2 * this.PI * radius;
  }

  static getarea(radius){
    return this.PI * radius * radius;
  }
}

console.log(mathutil.PI);
console.log(mathutil.getdiameter(10));
console.log(mathutil.getcircumference(10));
console.log(mathutil.getarea(10));

class User{
  static usercount = 0;
  constructor(username){
    this.username = username;
    User.usercount++;
  }

  sayhell(){
    console.log(`Hello , my username is ${this.username}`);
  }

  static getusercount(){
    console.log(`THerer are ${User.usercount} users online`);
  }
}

const user1 = new User("spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);

user1.sayhell();
user2.sayhell();
user3.sayhell();
console.log(User.usercount);

User.getusercount();

class animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends animal{
  name = "rabbit";
  run(){
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends animal {
  name = "fish";
  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends animal {
  name = "hawk";
  fly() {
    console.log(`This ${this.name} is flying`);
  }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
hawk.sleep();
fish.swim();
rabbit.run();
hawk.fly();

class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed}mph`);
  }
}

class rabbit1 extends Animal {
  constructor(name, age, runspeed) {
    super(name,age);
    this.name = name;
    this.age = age;
    this.runspeed = runspeed;
  }

  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runspeed);
  }
}

class fish1 extends Animal {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }

  swim() {
    console.log(`This ${this.name} can swim`);
    super.move(this.swimspeed);
  }
}

class hawk1 extends Animal {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }

  fly() {
    console.log(`This ${this.name} can fly`);
    super.move(this.flyspeed);
  }
}

const rabbit2 = new rabbit1("rabbit",1,25);
const fish2 = new fish1("fish", 2, 15);
const hawk2 = new hawk1("hawk", 3, 45);

console.log(rabbit2.name);
console.log(hawk2.age);
console.log(fish2.swimspeed);
console.log(hawk2.flyspeed);
console.log(rabbit2.runspeed);

rabbit2.run();
hawk2.fly();
fish2.swim();

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else console.error("width must be a positive number");
  }

  set height(newHeight){
    if (newHeight > 0) {
      this._height = newHeight;
    } else console.error("height must be a positive number");
  }

  get width(){
    return `${this._width.toFixed(1)}cm`;
  }

  get height(){
    return `${this._height.toFixed(1)}cm`;
  }

  get area(){
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const Rectange2 = new Rectangle(156756, 345);

console.log(Rectange2.width);
console.log(Rectange2.height);
console.log(Rectange2.area);

class person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  set firstname(newfirstname) {
    if (typeof newfirstname === "string" && newfirstname.length > 0) {
      this._firstname = newfirstname;
    }
    else{
      console.error("First name must be non empty string");
    }
  }

  set lastname(newlastname) {
    if (typeof newlastname === "string" && newlastname.length > 0) {
      this._lastname = newlastname;
    }
    else{
      console.error("Last name must be non empty string");
    }
  }

  set age(newage) {
    if (typeof newage === "number" && newage >= 0) {
      this._age = newage;
    } 
    else{
      console.error("age must be a non negative number");
    }
  }

  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get age() {
    return this._age;
  }

  get fullname(){
    return this._firstname + " " + this._lastname;
  }
}

const Person = new person(40,69,"pizza");

console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.age);

const Person1 = new person("spongebob","wrek",40);

console.log(Person1.firstname);
console.log(Person1.lastname);
console.log(Person1.age);
console.log(Person1.fullname);

let a = 1;
let b =2;

[a , b] = [b , a];
console.log(a);
console.log(b);

const colors = ["red","green","blue","black","white"];
[colors[0],colors[4]] = [colors[4],colors[0]];
console.log(colors);

const [firstcolor,secondcolor,thirdcolor, ...extracolors] = colors;

console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);

const person11 = {
  firstName : "Spongebob",
  lastName : "Wrek",
  age : 30,
  job : "Fry cook",
}

const person12 = {
  firstName: "Patrick",
  lastName: "Starck",
  age: 27,
  job: "Employee",
};

const{firstName,lastName,age,job} = person11;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

function displayperson({firstname,lastname,age,job = "Unemployed"}){
  console.log(`name: ${firstname} ${lastname}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

displayperson(person2);

