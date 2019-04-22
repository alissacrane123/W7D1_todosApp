import {connect} from 'react-redux';
import {receiveTodo} from '../actions/todo_actions';
import TodoList from './todo_list';
import {allTodos} from '../reducers/selectors';

const mapStateToProps = (state) => (
  { 
    todos: allTodos(state)
  } //this is our prop
);

const mapDispatchToProps = (dispatch) => (
  {
    receiveTodo: (todo) => (
      dispatch(receiveTodo(todo))
    )
  } //this is another prop
);

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;