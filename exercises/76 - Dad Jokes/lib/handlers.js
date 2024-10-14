import { changeButton, fetchJoke } from "./utils.js";
import { jokeContainer } from "./elements.js    ";

export async function handleClick() {
	const { joke } = await fetchJoke();
	jokeContainer.textContent = joke;
	changeButton();
}