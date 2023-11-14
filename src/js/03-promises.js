import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve({ position, delay }) : reject({ position, delay });
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  event.currentTarget.reset();
  const amount = Number(formData.get('amount'));
  const step = Number(formData.get('step'));
  const delay = Number(formData.get('delay'));

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay + step * i).then(({ position, delay }) => {
      iziToast.success({
        title: 'Success',
        message: `Promise ${position} resolved after ${delay}ms`,
      });
    }).catch(({ position, delay }) => {
      iziToast.error({
        title: 'Error',
        message: `Promise ${position} rejected after ${delay}ms`,
      });
    });
  }
}

form.addEventListener('submit', onSubmit);
