/*
Let's improve Steven's tip calculator even more, this time using loops!

Tasks
1. Create an array 'bills' containing all 10 test bill values

2. Create empty arrays for the tips and the totals ('tips' and 'totals')

3. Use the 'calcTip' function we wrote before (no need to repeat)
to calculate tips and total values (bill + tip) for every bill value in the bills array.
Use a for loop to perform the 10 calculations!

Test Data
22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints
Call ‘calcTip‘ in the loop and use the push method to add values to the tips and totals arrays

Bonus
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
This function calculates the average of all numbers in the given array.
This is a difficult challenge (we haven't done this before)!

Here is how to solve it:
4.1. First, you will need to add up all values in the array.
To do the addition, start by creating a variable 'sum' that starts at 0.
Then loop over the array using a for loop.
In each iteration, add the current value to the 'sum' variable.
This way, by the end of the loop, you have all values added together

4.2. To calculate the average,
divide the sum you calculated before by the length of the array (because that's the number of elements)

4.3. Call the function with the 'totals' array
*/

function calcTip(bill = 0) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr = []) {
	const sum = arr.reduce((previousValue, currentValue) => {
		return previousValue + currentValue;
	}, 0);

	return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

bills.forEach(bill => {
	const tip = calcTip(bill);

	tips.push(tip);
	totals.push(tip + bill);
});

// for (let i = 0; i < bills.length; i++) {
// 	const bill = bills[i];
// 	const tip = calcTip(bill);

// 	tips[i] = tip;
// 	totals[i] = tip + bill;
// }

console.log('bills', bills);
console.log('tips', tips);
console.log('totals', totals);
console.log('calcAverage tips', calcAverage(tips));
console.log('calcAverage totals', calcAverage(totals));
