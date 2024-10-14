import { hslToRgb } from './utils.js';

const WIDTH = 1500;
const HEIGHT = 1500;
const BUFFER_LENGTH = 2 ** 10;
const SLICE_WIDTH = WIDTH / BUFFER_LENGTH;
const BAR_WIDTH = SLICE_WIDTH * 2.5;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;
ctx.lineWidth = 8;
ctx.strokeStyle = '#ffc600';

let analyzer;

async function getAudio() {
	const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(err => console.error('You must give acces to the mic to proceed', err));
	const audioCtx = new AudioContext();

	analyzer = audioCtx.createAnalyser();
	const source = audioCtx.createMediaStreamSource(stream);
	source.connect(analyzer);
	analyzer.fftSize = BUFFER_LENGTH * 2;
	const timeData = new Uint8Array(BUFFER_LENGTH);
	const frequencyData = new Uint8Array(BUFFER_LENGTH);

	drawTimeData(timeData);
    drawFrequency(frequencyData);
}

function drawTimeData(timeData) {
	analyzer.getByteTimeDomainData(timeData);

	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	ctx.beginPath();
	let x = 0;
	timeData.forEach((data, i) => {
		const v = data / 128;
		const y = (v * HEIGHT) / 4;

		i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
		x += SLICE_WIDTH;
	});
	ctx.stroke();

	requestAnimationFrame(() => drawTimeData(timeData));
}

function drawFrequency(frequencyData) {
    analyzer.getByteFrequencyData(frequencyData);
    
	let x = 0;
	frequencyData.forEach((amount) => {
		const percent = amount / 255;
        const barHeight = HEIGHT *  percent;
		
        ctx.fillStyle = `hsl(${Math.abs(percent - 0.25) * 360}, 65%, 50%)`;
        ctx.fillRect(x, HEIGHT - barHeight, BAR_WIDTH, barHeight);

		x += BAR_WIDTH;
	});
	ctx.stroke();

    requestAnimationFrame(() => drawFrequency(frequencyData));
}

getAudio();
