'use strict'

const todoForm = document.querySelector('.todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('.list');

const TODOS_KEY = 'todo';

const savedTodo = localStorage.getItem(TODOS_KEY);

let ARR_LS = [];

function handleSubmit(e) {
    e.preventDefault();
    const todoValue = todoInput.value;
    todoInput.value = '';

    const todoObj = {
        text : todoValue,
        id : ARR_LS.length
    };
    ARR_LS.push(todoObj);
    paintTodo(todoObj);
    saveTodo(ARR_LS);
}

function saveTodo(obj) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(obj));
}

function paintTodo(obj) {
    const li = document.createElement('li');
    li.setAttribute('class', 'todo');
    li.setAttribute('id', obj.id);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'checkBox');
    checkBox.setAttribute('type', 'checkbox');

    const span = document.createElement('span');
    span.setAttribute('class', 'todo-text');
    span.innerHTML=obj.text;

    const delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delBtn');
    delBtn.innerHTML='X';
    delBtn.addEventListener('click', handleDelete);

    li.appendChild(checkBox);
    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
}

function handleDelete(e) {
    const li = e.target.parentNode;
    li.remove(); // 화면에서 지워준다.

    ARR_LS = ARR_LS.filter((todo) => {
        return todo.id !== parseInt(li.id)
    })
    saveTodo(ARR_LS);
}

if(savedTodo !== null){ // LS의 todo key값 안에 value가 있다면
    const parsedToDos = JSON.parse(savedTodo); // 그 value를 객체로 뽑아와서
    ARR_LS = parsedToDos;// 배열을 객체 형태의 data로 할당
    parsedToDos.forEach(todo => paintTodo(todo)); // paintTodo에 argument로 보내준다.
}

function init() {
    todoForm.addEventListener('submit', handleSubmit);
}
init();