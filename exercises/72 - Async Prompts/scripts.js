const wait = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

async function destroyPopup(popup) {
	popup.classList.remove('open');
	await wait(1000);
	popup.remove();
	popup = null;
}

function ask(options) {
	return new Promise(async function (resolve) {
		const popup = document.createElement('form');
		popup.classList.add('popup');
		popup.insertAdjacentHTML(
			'afterbegin',
			`<fieldset> 
                <label>${options.title}</label>
                <input type="text" name="input"/>
                <button type="Sumbit">Sumbit</button>
            </fieldset>`
		);

		if (options.cancel) {
			const skipButton = document.createElement('button');
			skipButton.type = 'button';
			skipButton.textContent = 'Cancel';
			skipButton.addEventListener(
				'click',
				() => {
					resolve(null);
					destroyPopup(popup);
				},
				{ once: true }
			);
			popup.firstElementChild.appendChild(skipButton);
		}

		popup.addEventListener(
			'submit',
			event => {
				event.preventDefault();
				resolve(event.target.input.value);
				destroyPopup(popup);
			},
			{ once: true }
		);

		document.body.appendChild(popup);
		await wait(50);
		popup.classList.add('open');
	});
}

const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion, { once: true }));
const answers = {};

async function askQuestion(event) {
	const button = event.currentTarget;
	const answer = await ask({ title: button.dataset['title'], cancel: button.hasAttribute('data-cancel') });
	answers[button.dataset['question']] = answer;
}

const questions = [{ title: 'What is your name?' }, { title: 'What is your age?', cancel: true }, { title: 'What is your cats name?' }];

async function askMany(questions) {
	for (const question of questions) {
		const answer = await ask(question);
		console.log(question.title, answer);
	}
}

askMany(questions);
