import React from 'react';
import TodoListContainer from './todo_list_container';

class App extends React.Component {
  render() {
    return (
      <>
        <TodoListContainer />
        <h1>App Component</h1>
      </>
    )
  }
}

export default App;