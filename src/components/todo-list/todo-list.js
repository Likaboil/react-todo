import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todoListProps}) => {

  const items = todoListProps.map((item) => {
    return (
      <li className="list-group-item" key={item.key}>
        <TodoListItem label={item.label} important={item.important} />
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
