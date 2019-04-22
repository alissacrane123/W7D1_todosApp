import {RECEIVE_TODOS} from "../actions/todo_actions";
import {RECEIVE_TODO} from "../actions/todo_actions";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with shampoo',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with soap',
    done: true
  }
};


const todosReducer = (state=initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      const nextState = merge({}, state);
      action.todos.map((todoObj) => {
        nextState[todoObj.id] = todoObj;
      });
      return nextState;
    case RECEIVE_TODO:
      const newObj = {
        [action.todo.id]: action.todo
      }

      return merge(newObj, state);
    default:
      return state;
  }
}

export default todosReducer;