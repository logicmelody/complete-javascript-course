/*
Steven is still building his tip calculator,
using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.

Tasks
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip,
calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to).
Use the function type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data below

3. Create an array 'tips' containing the tip value for each bill,
calculated from the function you created before

4. Bonus: Create an array 'totals' containing the totals values, so the bill+tip

Test data: 125, 555 and 44
*/

function calcTip(bill = 0) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log('calcTip bill 100', calcTip(100));

const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));
const totals = bills.map(bill => bill + calcTip(bill));

console.log('tips', tips);
console.log('totals', totals);
