'use strict'

const clockTitle = document.querySelector('.clock');
const dateTitle = document.querySelector('.date');

function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    clockTitle.innerHTML=`${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(2, '0');
    const months = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    dateTitle.innerHTML=`${years}.${months}.${day}`;
}

function init() {
    setInterval(getTime, 1000);
    setInterval(getDate, 1000);
}
init();