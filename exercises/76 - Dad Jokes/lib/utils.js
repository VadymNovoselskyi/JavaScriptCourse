import { jokeButton } from './elements.js';
const endpoint = 'https://icanhazdadjoke.com';

export async function changeButton() {
    const { default: buttonText } = await import('../data/buttonText.js');
	const currentText = jokeButton.textContent;
	let random = Math.floor(Math.random() * buttonText.length);
	while (buttonText[random] === currentText) random = Math.floor(Math.random() * buttonText.length);
	jokeButton.textContent = buttonText[random];
}

export async function fetchJoke() {
	const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
	const data = await response.json();
	return data;
}