/*
let js = 'amazing';
let firstName = 'Jonas';
let jonas_matilda = 'JM';
let $funtion = 27;
let person = 'jonas';

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Don't write code like this!
let job1 = 'Programmer';
let job2 = 'Teacher';

// 不變的常數都用大寫表示
const PI = 3.1415;

console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(myFirstJob);
*/

/*
// Primitive data types
// Number
let age = 23;

// String
let firstName = 'Jonas';

// Boolean
let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';

console.log(typeof javascriptIsFun);

// Undefined
let children;
let year;

console.log(year);
console.log(typeof year);

year = 1991;

console.log(typeof year);

// 這行會 return object，應該是要 return null，可能是 Javascript 的 bug 或 error
console.log(typeof null);

// Null

// Symbol (ES2015)

// BigInt (ES2020)
*/

/*
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

// Never use var!!!
var job = 'programmer';
job = 'teacher';

// Never write code like this!!!
lastName = 'Lin';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2 = 8
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99

console.log(x);

// Comparision operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2020);
*/

/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2020);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`

console.log(jonas);
console.log(jonasNew);
console.log(`Just a regular string...`);
console.log('String with \n\
multiple \n\
lines');

// 超級重要且好用的寫法
console.log(`String with
multiple
lines`);
*/

/*
const age = 15;

// command + control + space，可以加 emoji
if (age >= 18) {
	console.log('Sarah can start driving licience 🚗');

} else {
	console.log(`Sarah is too young. Wait another ${18 - age} years 😀`);
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
	century = 20;

} else {
	century = 21;
}

console.log(century);
*/

/*
// Type conversion
const inputYear = '1991';

// Javascript 可以把值轉換成 number, string, boolean
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old'); // "string + xxx" => 這種會被轉成 string
console.log('23' - '10' - 3, '23' + '10' + 3); // + 以外會被轉換成 number
console.log('23' * '2', '23' / '2');

let n = '1' + 1;
n = n - 1;

console.log(n); // 10
console.log(2 + 3 + 4 + '5'); // 95
console.log('10' - '4' - '3' - 2 + '5'); // 15
*/

/*
// 5 falsy values: 0, '', undefined, null, NaN
// falsy values: 經過 type coercion，會被轉換成 false 的 boolean
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;

if (money) {
	console.log("Don't spend it all");

} else {
	console.log("You should get a job");
}

let height = 100;

if (height) {
	console.log("Height is defined");

} else {
	console.log("Height is UNDEFINED");
}
*/

// === strict，不會進行 type coercion
// ==，會進行 type coercion，不要使用！
const age = '18';

if (age === 18) {
	console.log('You just became an adult (strict)');
}

if (age == 18) {
	console.log('You just became an adult (loose)');
}

// prompt()，回傳的 type 是一個 string
const favorite = Number(prompt("What's your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 === 23
	console.log('Cool! 23 is an amazing number');

} else if (favorite === 7) {
	console.log('7 is also a cool number');

} else if (favorite === 9) {
	console.log('9 is also a cool number');

} else {
	console.log('Number is not 23 or 7 or 9');
}

if (favorite !== 23) {
	console.log('Why not 23?');
}
