const video = document.querySelector(".webcam");
const faceCanvas = document.querySelector(".face");
const ctx = faceCanvas.getContext("2d");
const blurCanvas = document.querySelector(".blur");
const faceCtx = blurCanvas.getContext("2d");
const faceDetector = new window.FaceDetector();
const optionsInputs = document.querySelectorAll('.controls input[type="range"]');
const options = {
    SIZE: 14,
    SCALE: 1.3
};
function handleOptionsInput(event) {
    const { value, name } = event.currentTarget;
    options[name] = parseFloat(value);
}
optionsInputs.forEach((input)=>input.addEventListener("input", handleOptionsInput));
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            width: 1080,
            height: 720
        }
    });
    video.srcObject = stream;
    await video.play();
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
    blurCanvas.width = video.videoWidth;
    blurCanvas.height = video.videoHeight;
}
async function detect() {
    const faces = await faceDetector.detect(video);
    faceCtx.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
    faces.forEach((face)=>censor(face));
    ctx.clearRect(0, 0, blurCanvas.width, blurCanvas.height);
    requestAnimationFrame(detect);
}
function censor({ boundingBox: face }) {
    ctx.imageSmoothing = false;
    faceCtx.imageSmoothing = false;
    ctx.drawImage(video, face.x, face.y, face.width, face.height, face.x, face.y, options.SIZE, options.SIZE);
    const offsetX = face.width * ((options.SCALE - 1) / 2);
    const offsetY = face.height * ((options.SCALE - 1) / 2);
    faceCtx.drawImage(faceCanvas, face.x, face.y, options.SIZE, options.SIZE, face.x - offsetX, face.y - offsetY, face.width + offsetX * 2, face.height + offsetY * 2);
}
populateVideo().then(detect);

//# sourceMappingURL=face.78b1ac0f.js.map
