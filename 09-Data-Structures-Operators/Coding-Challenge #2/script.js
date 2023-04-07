const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		]
	],
	score: '4:0',
	scored: [
		'Lewandowski',
		'Gnarby',
		'Lewandowski',
		'Hummels'
	],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

// 1
for (const [index, scored] of game.scored.entries()) {
	console.log(`Goal ${index + 1}: ${scored}`);
}

game.scored.forEach((item, index) => {
	console.log(`Goal ${index + 1}: ${item}`);
});

// 2
const oddValues = Object.values(game.odds);

const oddSum = oddValues.reduce((previous, current) => {
	return previous + current;
}, 0);

console.log(oddSum / oddValues.length);

// 3
for (const [key, value] of Object.entries(game.odds)) {
	console.log(`Odd of ${convertKeyToString(key)}: ${value}`);
}

function convertKeyToString(key) {
	return game[key] ? `victory ${game[key]}` : 'draw';
}

// 4
let scorers = {};

for (const item of game.scored) {
	scorers[item] = scorers[item] ? scorers[item] + 1 : 1;
}

console.log(scorers);
