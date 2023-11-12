import flatpickr from "flatpickr";
import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysFiled = document.querySelector('[data-days]');
const hoursFiled = document.querySelector('[data-hours]');
const minutesFiled = document.querySelector('[data-minutes]');
const secondsFiled = document.querySelector('[data-seconds]');

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {        
        if (selectedDates[0] < new Date()) {
            iziToast.error({
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            startButton.disabled = true;
        } else {
            startButton.disabled = false;
        }
    },
};

flatpickr(input, options);

function onStartButtonClick() {
    startButton.disabled = true;
    const selectedDate = new Date(input.value);
    const currentDate = Date.now();
    const time = selectedDate - currentDate;
    const timeLeft = getTimeComponents(time);
    updateClockface(timeLeft);
    startTimer(time);
}

function startTimer(time) {
    const timerId = setInterval(() => {
        const timeLeft = getTimeComponents(time);
        updateClockface(timeLeft);
        time -= 1000;
        if (time < 0) {
            clearInterval(timerId);
        }
    }, 1000);
}

function getTimeComponents(time) {
    return [
        Math.floor(time / (1000 * 60 * 60 * 24)),
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        Math.floor((time % (1000 * 60)) / 1000),
    ];
}

function updateClockface([days, hours, minutes, seconds]) {
    daysFiled.textContent = days;
    hoursFiled.textContent = hours;
    minutesFiled.textContent = minutes;
    secondsFiled.textContent = seconds;
}

startButton.addEventListener('click', onStartButtonClick);


