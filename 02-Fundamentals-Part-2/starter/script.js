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

// const interface = 'Audio'; // 如果不是 strict mode 偵測不出來
// const private = 543; // 如果不是 strict mode 偵測不出來
*/

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
