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
