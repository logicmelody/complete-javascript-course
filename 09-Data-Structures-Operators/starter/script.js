'use strict';

// Data needed for a later exercise
const flights =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 23,
	},
	[weekdays[5]]: {
		open: 0, // Open 24 hours
		close: 24,
	},
};

// Data needed for first part of the section
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	orderDelivery({
		starterIndex = 1,
		mainIndex = 0,
		time = '20:00',
		address,
	}) {
		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

console.log(newName);

const passenger = 'jessica ann smith davis';

function capitalizeName(name) {
	return name
		.split(' ')
		.map(name => capitalize(name))
		// .map(name[0].toUpperCase() + name.slice(1))
		.join(' ');
}

function capitalize(name) {
	return name.replace(name[0], name[0].toUpperCase())
}

console.log(capitalizeName('jessica and smith davis'));
console.log(capitalizeName('jonas schmedtmann'));

// Padding
const message = 'Go to gate 23';

console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

function maskCreditCard(number) {
	const str = number + '';

	return str.slice(-4).padStart(str.length, '*');
}

console.log(maskCreditCard(433784638647384));
console.log(maskCreditCard('123442342242424'));

// Repeat
const message2 = 'Bad weather... All Departure Delayed... ';

console.log(message2.repeat(5));

function planesInLine(n) {
	console.log(`There ate ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(10);

/*
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passenger);
// console.log(passengerLower);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '   Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceGB);
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';

console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
	console.log('Part of the NEW Airbus family');
}
*/

// Practice exercise
// const checkBaggage = function (items) {
// 	const baggage = items.toLowerCase();

// 	if (baggage.includes('knife') || baggage.includes('gun')) {
// 		console.log('You are NOT allowed on board');

// 	} else {
// 		console.log('Welcome aboard');
// 	}
// }

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Get some snacks and a gun for protection');


/* Working with Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
	// B and E are middle seats
	const s = seat.slice(-1);

	if (s === 'B' || s === 'E') {
		console.log('You got the middle seat 😬');

	} else {
		console.log('You got lucky');
	}
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
*/

/*
const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'Javascript'],
	['correct', 3],
	[true, 'Correct 👍'],
	[false, 'Try again']
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));

console.log(hoursMap);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
	if (typeof key === 'number') {
		console.log(`Answer ${key}: ${value}`);
	}
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
	.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
	.set('open', 11)
	.set('close', 23)
	.set(true, 'We are open')
	.set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;

console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2)
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');

console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));
*/

/*
const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza'
]);

console.log(ordersSet);
console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();

console.log(ordersSet);

for (const order of ordersSet) {
	console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Mannger', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];

console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('jonasschmedtmann').size);
*/

/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
	openStr += `${day}, `
}

console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);

console.log(values);

// Entire object
const entries = Object.entries(openingHours);

console.log(entries);

// [key, value]
for (const [day, { open, close, }] of entries) {
	console.log(`On ${day} we open at ${open} and close at ${close}`);
}
*/

/*
if (restaurant.openingHours && restaurant.openingHours.mon) {
	console.log(restaurant.openingHours.mon.open);
}

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
	const open = restaurant.openingHours[day]?.open ?? 'closed';

	console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
	{
		name: 'Johnas',
		email: 'hello@jonas.io',
	}
];
// const users = [];

console.log(users[0]?.name ?? 'User array empty');
*/

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
	console.log(item);
}

for (const [i, el] of menu.entries()) {
	console.log(`${i + 1}: ${el}`);
}

// console.log(...menu.entries());
*/

/*
const rest1 = {
	name: 'Capri',
	// numGuests: 20,
	numGuests: 0,
};

const rest2 = {
	name: 'La Piazza',
	owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/

/*
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// Short Circuiting (&& and ||)
console.log('---- OR ----');

// Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas
console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical example
if (restaurant.orderPizza) {
	restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// 1. Destructuring

// Arrays
// Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// Rest, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Objects
const {
	sat,
	...weekdays
} = restaurant.openingHours;
console.log(weekdays);

// 2. Functions
const add = function (...values) {
	let sum = 0;

	for (let i = 0; i < values.length; i++) {
		sum += values[i];
	}

	return sum;

	// return values.reduce((previous, current) => {
	// 	return previous + current;
	// }, 0);
}

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7]
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
// The Spread Operator (...)
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [
	...restaurant.starterMenu,
	...restaurant.mainMenu,
];
console.log(menu);

// Iterables: arrays, strings, maps, sets. Not objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real world example
const ingredients = [
	// prompt("Let's make pasta! Ingredient 1?"),
	// prompt("Let's make pasta! Ingredient 2?"),
	// prompt("Let's make pasta! Ingredient 3?")
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newResturant = {
	foundedIn: 1998,
	...restaurant,
	founder: 'Guiseppe',
}
console.log(newResturant);

const restaurantCopy = {
	...restaurant,
};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// Destructuring objects
restaurant.orderDelivery({
	time: '22:30',
	address: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2,
});

restaurant.orderDelivery({
	address: 'Via del Sole, 21',
	starterIndex: 1,
});

const {
	name,
	openingHours,
	categories,
} = restaurant;

console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const {
	menu = [],
	starterMenu: starters = [],
} = restaurant;

console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = {
	a: 23,
	b: 7,
	c: 14,
};

({ a, b, } = obj);

console.log(a, b);

// Nested objects
const {
	fri: {
		open: o,
		close: c,
	},
} = openingHours;

console.log(o, c);
*/


/*
// Destructuring arrays
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;

console.log(a, b, c);
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;

console.log(main, secondary);

// Switching variables
// const temp = main;

// main = secondary;
// secondary = temp;

// console.log(main, secondary);

[secondary, main] = [main, secondary];

console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// const [i, ,j] = nested;
// console.log(i, j);

// Nested destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
