import React from 'react';
import todosReducer from '../reducers/todos_reducer';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random()) * 1000000,
      title: '',
      body: ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo-title">Title 
          <input onChange={this.updateTodoTitle} type="text" id="todo-title" value={this.state.title}/>
        </label>

        <label htmlFor="todo-body">Body
          <input onChange={this.updateTodoBody} type="text" id="todo-body" value={this.state.body} />
        </label>

        <button>Add Todo List Item</button>
      </form>
    )
  }

  updateTodoTitle(event) {
    this.setState({ title: event.target.value });
  }

  updateTodoBody(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState()
  }
}