/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉
*/

const markInfo = {
	mass: 78,
	height: 1.69,
};

const johnInfo = {
	mass: 92,
	height: 1.95,
};

function compareBMI(markInfo = {}, johnInfo = {}) {
	const markHigherBMI = getBMI(markInfo.mass, markInfo.height) > getBMI(johnInfo.mass, johnInfo.height);

	return markHigherBMI;
}

function getBMI(mass, height) {
	return mass / height ** 2;
}

if (compareBMI(markInfo, johnInfo)) {
	console.log(`Mark's BMI (${getBMI(markInfo.mass, markInfo.height)}) is higher than John's (${getBMI(johnInfo.mass, johnInfo.height)})!`);

} else {
	console.log(`John's BMI (${getBMI(johnInfo.mass, johnInfo.height)}) is higher than Mark's (${getBMI(markInfo.mass, markInfo.height)})!`);
}
