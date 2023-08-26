document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

textarea.style.width = '500px';
textarea.style.height = '300px';
textarea.style.marginRight = '30px';

button.style.width = '100px';
button.style.height = '50px';
button.textContent = 'Get Result';

button.addEventListener('click', () => {
	printResult(convertToCamelCase(textarea.value))
});

function convertToCamelCase(texts = []) {
	return texts
		.split('\n')
		.filter(text => !!text)
		.map(text => text.toLowerCase().trim())
		.map(text => {
			const [first, second] = text.split('_');

			return `${first}${second.replace(second[0], second[0].toUpperCase())}`

			// const _CharIndex = text.indexOf('_');
			// const convertChar = text[_CharIndex + 1];

			// return text.replace('_' + convertChar, convertChar.toUpperCase());
		});
}

function printResult(texts = []) {
	texts.forEach((text, index) => {
		console.log(text.padEnd(20, ' ') + '✅'.repeat(index + 1));
	});
}
