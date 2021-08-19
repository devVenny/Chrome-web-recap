'use strict'

const body = document.querySelector('body');

const IMAGE_COUNT = 3;

function generateRandomNum() {
    let randomNum = parseInt(Math.ceil(Math.random() * IMAGE_COUNT));
    return randomNum
}

function paintImage(randomNum) {
    const srcName = `/img/${randomNum}.jpg`
    const img = document.createElement('img');
    img.setAttribute('class', 'bgImg');
    img.setAttribute('src', srcName);
    
    body.appendChild(img);
}

function init() {
    const number = generateRandomNum();
    paintImage(number);
}
init();