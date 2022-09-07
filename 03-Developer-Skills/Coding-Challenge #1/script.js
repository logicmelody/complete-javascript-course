/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Tasks
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

function printForecast(temperatures = []) {
	const result = temperatures.reduce((previous, current, index) => {
		return `${previous}${getForecastText(current, index + 1)} ... `;
	}, '... ');

	console.log(result);
}

function getForecastText(temperature, index) {
	return `${temperature}ºC in ${index} days`;
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
