const buttonText = ['Ugh.', '🤦🏻‍♂️', 'OMG dad.', 'You are the worst', 'Seriously?', 'Stop it.', 'Please stop', 'That was the worst one'];

const jokeContainer = document.querySelector('.joke');
const jokeButton = document.querySelector('.getJoke');
const endpoint = 'https://icanhazdadjoke.com';
jokeButton.addEventListener('click', handleClick);

async function handleClick() {
	const { joke } = await fetchJoke();
	jokeContainer.textContent = joke;
	changeButton();
}

function changeButton() {
	const currentText = jokeButton.textContent;
	let random = Math.floor(Math.random() * buttonText.length);
	while (buttonText[random] === currentText) random = Math.floor(Math.random() * buttonText.length);
	jokeButton.textContent = buttonText[random];
}

async function fetchJoke() {
	const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
	const data = await response.json();
	return data;
}
