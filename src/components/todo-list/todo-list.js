import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todoListProps}) => {

  const items = todoListProps.map((item) => {

    const {key, ...itemProps} = item;

    return (
      <li className="list-group-item" key={key}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="todo-list list-group">
      {items}
   </ul>
  );
};

export default TodoList;
