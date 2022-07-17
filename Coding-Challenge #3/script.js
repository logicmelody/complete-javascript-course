/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team,
and the same time a score of at least 100 points.
Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

function getAverageScore(...scores) {
	const sum = scores.reduce((prevScore, currentScore) => {
		return prevScore + currentScore;
	}, 0);

	return sum / scores.length;
}

// const dolphinsAverageScore = getAverageScore(96, 108, 89);
// const koalasAverageScore = getAverageScore(88, 91, 110);
// const dolphinsAverageScore = getAverageScore(97, 112, 101);
// const koalasAverageScore = getAverageScore(109, 95, 123);
const dolphinsAverageScore = getAverageScore(97, 112, 80);
const koalasAverageScore = getAverageScore(109, 95, 50);

console.log('Dolphins average score', dolphinsAverageScore);
console.log('Koalas average score', koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore) {
	console.log('Dolphins win the trophy');

} else if (dolphinsAverageScore < koalasAverageScore) {
	console.log('Koalas win the trophy');

} else if (dolphinsAverageScore === koalasAverageScore) {
	console.log('Both win the trophy!');
}

if (dolphinsAverageScore >= 100 && dolphinsAverageScore > koalasAverageScore) {
	console.log('Dolphins win and have score greater than 100');

} else if (koalasAverageScore >= 100 && dolphinsAverageScore < koalasAverageScore) {
	console.log('Koalas win and have score greater than 100');

} else if (dolphinsAverageScore >= 100 && koalasAverageScore >= 100 && dolphinsAverageScore === koalasAverageScore) {
	console.log('Both win the trophy and have score greater than 100');
} else {
	console.log('No one wins the trophy');
}
