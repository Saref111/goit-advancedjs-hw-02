const body = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
let intervalId = null;

function onStartButtonClick() {
    startButton.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopButtonClick() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

stopButton.disabled = true;
startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);
