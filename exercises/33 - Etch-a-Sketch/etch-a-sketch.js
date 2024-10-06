const canvas = document.querySelector("#etch-a-sketch");
const context = canvas.getContext("2d");
const { width, height } = canvas;
const OFFSET = 100;
const MOVE_AMOUNT = 30;

const shakeBtn = document.querySelector("button.shake");

let hue = 0;
context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = MOVE_AMOUNT;

drawOnRandomCoords();

window.addEventListener("keydown", handleKey);
shakeBtn.addEventListener("click", clearCanvas);

function draw(options) {
    const { key } = options;

    context.beginPath();
    context.moveTo(x, y);

    switch (key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        default:
            break;
    }

    context.lineTo(x, y);
    context.stroke();

    hue += 5;
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

function handleKey(event) {
    if (event.key.includes("Arrow")) {
        event.preventDefault();
        draw({ key: event.key });
    }
}

function clearCanvas() {
    canvas.classList.add("clear");
    context.clearRect(0, 0, width, height);
    drawOnRandomCoords();

    canvas.addEventListener(
        "animationend",
        function () {
            canvas.classList.remove("clear");
        },
        { once: true }
    );
}

function drawOnRandomCoords() {
    x = Math.floor(Math.random() * (width - OFFSET * 2)) + OFFSET;
    y = Math.floor(Math.random() * (height - OFFSET * 2)) + OFFSET;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y);
    context.stroke();
}
