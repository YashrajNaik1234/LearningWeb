let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log(`${day} is not a day`);
}

let testscore = 92;
let lettergrade;

switch (testscore) {
  case testscore >= 90:
    lettergrade = "A";
    break;
  case testscore >= 80:
    lettergrade = "B";
    break;
  case testscore >= 70:
    lettergrade = "C";
    break;
  case testscore >= 60:
    lettergrade = "D";
    break;
  default:
    lettergrade = "F";
}

console.log(lettergrade);

let username = "Brocode";
console.log(username.charAt(2));
console.log(username.indexOf("o"));
console.log(username.length);

username = username.trim();
console.log(username);

username = username.toUpperCase();
console.log(username);

username = username.toLowerCase();
console.log(username);

username = username.repeat();
console.log(username);

let firstletter = username.startsWith(" ");
console.log(firstletter);

if (firstletter) console.log("your username cant begin with ' ");
else console.log(username);

console.log(username.includes(" "));

let phonenumber = "123-456-7890";
phonenumber = phonenumber.replaceAll("-", "");
console.log(phonenumber);

console.log(phonenumber.padStart(20, "0")); //string length  os 20 with remaining as zero in begining
console.log(phonenumber.padEnd(20, "0")); //string length  os 20 with remaining as zero in ending

const fullname = "Bro Code";
const firstname = fullname.slice(0, 3);
const lastname = fullname.slice(4, 8);

console.log(firstname);
console.log(lastname);

let firstchar = fullname.slice(0, 1);
let lastchar = fullname.slice(-1);

console.log(firstchar);
console.log(lastchar);

let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastName = fullname.slice(fullname.indexOf(" "));

console.log(firstName);
console.log(lastName);

const email = "Bro1@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(userName);
console.log(extension);

let Username = window.prompt("Enter your username");
Username = Username.trim();

let letter = Username.charAt(0);
letter = letter.toUpperCase();

let extrachar = Username.slice(1);
extrachar = extrachar.toLowerCase();

Username = letter + extrachar;
console.log(Username);

Username =
  Username.trim().charAt(0).toUpperCase() +
  Username.trim().slice().toLowerCase();
console.log(Username);

const temp = 20;
if (temp > 0) console.log("Good temp");
else if (temp <= 30) console.log("Good temp");
else console.log("Bad temp");

if (temp > 0 && temp <= 30) console.log("Good");
else console.log("Bad");

if (temp > 0 || temp <= 30) console.log("Good");
else console.log("Bad");

const isSunny = false;

if (!isSunny) console.log("Cloudy");
else console.log("Suny");

const PI = 3.14;
if (PI != 3.14) console.log("That is not PI");
else console.log("That is PI");

let Name = "";
while (Name == "") {
  Name = window.prompt(`Enter your name`);
}
console.log(`Hello ${Name}`);

do {
  Name = window.prompt(`Enter your name`);
} while (Name == "" || Name == null);

console.log(`Hello ${Name}`);

let login = false;
let naim;
let password;

while (!login) {
  naim = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (naim === "Myusername" && password === "Mypassword") {
    login = false;
    console.log("you are logged in");
  } else console.log("Invalid credentials");
}

for (let i = 0; i <= 2; i++) {
  console.log(i);
}

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Happy New Year");

for (let i = 1; i <= 20; i++) {
  if (i == 13) continue;
  if (i == 17) break;
  console.log(i);
}

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guesss numebr between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  console.log(typeof guess, guess);

  if (isNaN(guess) || guess < minNum || guess > maxNum)
    window.alert("please neter a valid number");
  else {
    attempts++;
    if (guess < answer) window.alert("Too Low , Try Again!");
    else if (guess > answer) window.alert("Too High , Try Again!");
    else {
      window.alert(
        `Coreect! The answer was ${answer},It took you ${attempts}attempts`
      );
      running = false;
    }
  }
}

function happybirthday(yourname, yourdate) {
  console.log(`Happy birthday to you ${yourname} you r ${yourdate} years old`);
}
happybirthday("Yash", 23);
happybirthday("Raj", 24);

function sum(x, y) {
  let result = x + y;
  return result;
}
function dif(x, y) {
  return Math.abs(x - y);
}
function pro(x, y) {
  return x * y;
}

let res = sum(2, 3);
console.log(res);
console.log(dif(2, 3));
console.log(pro(2, 3));

function isEven(num) {
  if (num & 1) return false;
  else return true;
}

console.log(isEven(10));

function isValidEmail(email) {
  if (email.includes("@")) return true;
  else return false;
}
console.log(isValidEmail("abc123@gmail.com"));
console.log("xyzgmail.com");
