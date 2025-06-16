//! PNotify
console.warn("Бібліотека PNotify:");
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
console.log("Hello Vite! --> main.js");

//todo Подключаем мобильный модуль (опционально)
defaultModules.set(PNotifyMobile, {});

//todo: 1.Просте повідомлення 
const btnAlert = document.getElementById('btn-alert');
btnAlert.addEventListener('click', () => {
  alert({
    text: 'Привет из PNotify + Vite!',
    width: '500px',
    // type: 'notice',
    // type: 'info',
    // type: 'success',
    // type: 'error',
    delay: 2000
  });
});

//todo: 2.Повідомлення з різним текстом та стилізацією
const btnNotice = document.getElementById('btn-notice');
btnNotice.addEventListener('click', () => {
  notice({
    text: "I'm a notice message.",
    delay: 1000
  });
});

const btnInfo = document.getElementById('btn-info');
btnInfo.addEventListener('click', () => {
  info({
    text: "I'm an info message.",
    delay: 1000
  });
});

const btnSuccess = document.getElementById('btn-success');
btnSuccess.addEventListener('click', () => {
  success({
    text: "I'm an success message.",
    delay: 1000
  });
});

const btnError = document.getElementById('btn-error');
btnError.addEventListener('click', () => {
  error({
    text: "I'm an error message.",
    delay: 1000
  });
});
