// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function calculateTemperatureAmplitude(...temperaturesArrays) {
	const temperatures = mergeArrays(temperaturesArrays);

	let maxTemperature = Number.MIN_VALUE;
	let minTemperature = Number.MAX_VALUE;

	for (let i = 0; i < temperatures.length; i++) {
		const value = temperatures[i];

		if (!isNumber(value)) {
			continue;
		}

		if (value >= maxTemperature) {
			maxTemperature = value;
		}

		if (value <= minTemperature) {
			minTemperature = value;
		}
	}

	return maxTemperature - minTemperature;
}

function mergeArrays(arrays = []) {
	let result = [];

	for (let i = 0; i < arrays.length ; i++) {
		const temp = arrays[i];

		if (!isArray(temp)) {
			continue;
		}

		result = result.concat(temp);
	}

	return result;
}

function isNumber(number) {
	return typeof number === 'number';
}

function isArray(array) {
	return Array.isArray(array);
}

console.log(calculateTemperatureAmplitude(temperatures));
console.log(calculateTemperatureAmplitude(temperatures, [1, 6, 3, 900, 3]));
console.log(calculateTemperatureAmplitude(temperatures, [1, 6, 3, 900, 3], [-1089, 5, 3, 6, 7]));
*/

function measureKelvin() {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		value: prompt('Degrees celsius:'),
	};

	debugger;

	// console.log(measurement);
	console.table(measurement);

	console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);

	const kelvin = Number(measurement.value) + 273;

	return kelvin;
}

console.log(measureKelvin());
