import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');
  ReactDOM.render(<h1>it's working</h1>, content);
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
});