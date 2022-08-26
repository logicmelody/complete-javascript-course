'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
	// hasDriverLicense = true; // 如果不是 strict mode 偵測不出來
	hasDriversLicense = true;
}

if (hasDriversLicense) {
	console.log('I can drive');
}
*/

// const interface = 'Audio'; // 如果不是 strict mode 偵測不出來
// const private = 543; // 如果不是 strict mode 偵測不出來

/*
function logger() {
	console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	return `Juice with ${apples} apples and ${oranges} oranges`;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

const num = Number('23');
*/

/*
// Function declaration
function calAge1(birthYear) {
	return 2037 - birthYear;
}

const age1 = calAge1(1991);

// Function expression
const calAge2 = function (birthYear) {
	return 2037 - birthYear;
};

const age2 = calAge2(1991);

console.log(age1, age2);
*/

/*
// Arrow function
const calAge3 = birthYear => 2037 - birthYear;

const age3 = calAge3(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
	const age = 2037 - birthYear;
	const retirement = 65 - age;

	// return retirement;

	return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

/*
function fruitProcessor(apples, oranges) {
	return `Juice with ${cutFruitPieces(apples)} pieces of apple and ${cutFruitPieces(oranges)} pieces of orange`;
}

function cutFruitPieces(fruit) {
	return fruit * 4;
}

console.log(fruitProcessor(2, 3));
*/

/*
const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;
	
	return retirement > 0 ? retirement : -1
	
	// return `${firstName} retires in ${retirement} years`;
};

const calcAge = function (birthYear) {
	return 2037 - birthYear;
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

/*
const friends1 = 'Michael';
const friends2 = 'Steven';
const friends3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';

console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

// Exercise
function calAge(birthYear) {
	return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calAge(years));

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calAge(years[0]), calAge(years[1]), calAge(years[years.length - 1])];

console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop();

const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
	console.log('You have a friend called Steven');
}
*/

/*
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Steven', 'Peter'],
};
*/

/*
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Steven', 'Peter'],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
	
} else {
	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';

console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Steven', 'Peter'],
	hasDriversLicense: true,

	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
	// 	// console.log(this);

	// 	return 2037 - this.birthYear;
	// },

	calcAge: function () {
		this.age = 2037 - this.birthYear;

		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
	},
};

console.log(jonas.calcAge(1991));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());
*/

/*
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition id TRUE
for (let rep = 1; rep <= 30; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
*/

/*
const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
	// Reading from jonas array
	console.log(jonas[i], typeof jonas[i]);

	// Filling types array
	// types[i] = typeof jonas[i];
	types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
	ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== 'string') {
		continue;
	}

	console.log(jonas[i]);
}

console.log('--- BREAK WITH NUMBERS ---');
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] === 'number') {
		break;
	}

	console.log(jonas[i]);
}
*/

/*
const jonas = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
	console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Repetition ${rep}`);
	}
}
*/

let rep = 1;

while (rep <= 10) {
	console.log(`While: Lifting weights repetition ${rep} 🏋️‍♀️`);

	rep++;
}

let dice = rollDice();

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = rollDice();

	if (dice === 6) {
		console.log('Loop is about to end');
	}
}

function rollDice() {
	return Math.trunc(Math.random() * 6) + 1;
}
