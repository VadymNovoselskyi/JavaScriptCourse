const wait = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

function getRandom(min, max, randomNumber = Math.random()) {
	return Math.floor(randomNumber * (max - min) + min);
}

async function draw(element) {
	const minSpeed = element.dataset.typeMin ?? 50;
	const maxSpeed = element.dataset.typeMax ?? 200;

	const text = element.textContent;
	let currentText = '';
	element.textContent = '';

	for (const letter of text) {
		currentText += letter;
		element.textContent = currentText;
		await wait(getRandom(minSpeed, maxSpeed));
	}
}

const elements = document.querySelectorAll('[data-type]');
elements.forEach(draw);
