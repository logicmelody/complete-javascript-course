/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
*/

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
const [players1, players2] = game.players;

console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;

console.log(gk, fieldPlayers);

// 3
const allPlayers = [
	...players1,
	...players2
];

console.log(allPlayers);

// 4
const players1Final = [
	...players1,
	'Thiago',
	'Coutinho',
	'Perisic'
];

console.log(players1Final);

// 5
const {
	odds: {
		team1,
		x: draw,
		team2,
	},
} = game;

console.log(team1, draw, team2);

// 6
function printGoals(...players) {
	players.forEach((player) => {
		console.log(player);
	});

	console.log(`Total scores: ${players.length}`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
// const teams = Object.keys(game.odds);

// teams.sort((a, b) => game.odds[a] - game.odds[b]);

// console.log(teams[0]);

team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');
