'use strict';

/*
function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName}, You are ${age}, born in ${birthYear}`;

		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;

			// Creating NEW variable with same name as outer scope's variable
			const firstName = 'Steven';

			// Reasssigning outer scope's variable
			output = 'NEW OUTPUT!';

			const str = `Oh, and you're a millenial, ${firstName}`;
			
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}

		// console.log(str);
		console.log(millenial);
		// console.log(add(2, 3));
		console.log(output);
	}

	printAge();

	return age;
}

const firstName = 'Jonas';

calcAge(1991);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
	return a + b;
}

const addExpr = function (a, b) {
	return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);

if (!numProducts) {
	deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

console.log(this);

const calaAge = function (birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
}

const calaAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	console.log(this);
}

calaAge(1991);
calaAgeArrow(1980);

const jonas = {
	year: 1991,
	calaAge: function () {
		console.log(this);
		console.log(2037 - this.year);
	},
};

jonas.calaAge();

const matilda = {
	year: 2017,
};

matilda.calaAge = jonas.calaAge;
matilda.calaAge();

const f = jonas.calaAge;

f();
*/

/*
var firstName = 'Matilda';

const jonas = {
	firstName: 'Jonas',
	year: 1991,
	calcAge: function () {
		// console.log(this);
		console.log(2037 - this.year);

		// Solution 1
		// const self = this; // self or that
		// const isMillenial = function () {
		//   console.log(self);
		//   console.log(self.year >= 1981 && self.year <= 1996);
		// };

		// Solution 2
		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`Hey ${this.firstName}`);
	},
};

jonas.calcAge();
// jonas.greet();

// arguments keyword
const addExpr = function (a, b) {
	console.log(arguments);

	return a + b;
};

var addArrow = (a, b) => {
	console.log(arguments);

	return a + b;
};

addExpr(2, 3);
addExpr(2, 3, 4, 5, 6);
*/

/*
let age = 30;
let oldAge = age;

age = 31;

console.log(age);
console.log(oldAge);

const me = {
	name: 'Jonas',
	age: 30,
};
const friend = me;

friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName, oldLastName);

// Reference types
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
};
const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// Copying objects
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
