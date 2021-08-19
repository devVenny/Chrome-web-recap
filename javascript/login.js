'use strict'

const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');


const HIDDEN_CLASSNAME = 'hidden';
const USESRNAME_LS = 'user';

const savedUserName = localStorage.getItem(USESRNAME_LS);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    paintGreeting(savedUserName);
}

function onLoginSubmit(e) {
    const loginValue = loginInput.value;
    paintGreeting(loginValue);
    saveUserName(loginValue);
    e.preventDefault();
    loginInput.value= '';
}

function paintGreeting(text) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerHTML=`Welcome ${text}`;
}

function saveUserName(text) {
    localStorage.setItem(USESRNAME_LS, text);
}