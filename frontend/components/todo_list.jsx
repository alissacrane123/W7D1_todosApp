import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => {
  const items = todos.map((el) => el)
  return (
    <ul>
      {items.map((item) => (
        <TodoListItem item={item} key={item.id} />
      )) }
    </ul>
  )
};

export default TodoList;