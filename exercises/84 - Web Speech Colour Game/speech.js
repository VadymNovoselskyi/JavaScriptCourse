import { handleRecognition } from './handlers.js';
import { sortedColors, isDark } from './colors.js';

const colorsDisplay = document.querySelector('.colors');
window.SpeechRecognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;

function displayColor(colors) {
    return colors
        .map(color => `<span id="${color}" ${isDark(color) ? 'class="dark"' : ''} style="background-color: ${color};">${color}</span>`)
        .join('');
}

function start() {
	if (!('SpeechRecognition' in window)) throw new Error('Not supporting speech recognition');
	const recognition = new SpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onresult = handleRecognition;
	recognition.start();
}

start();
colorsDisplay.innerHTML = displayColor(sortedColors);