import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import Root from './components/root'
import {allTodos} from './reducers/selectors';


document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, content);
  window.store = configureStore();
  window.allTodos = allTodos;
});