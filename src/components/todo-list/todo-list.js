import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = () => {
  return (
    <ul className="todo-list list-group">
      <li className="list-group-item"><TodoListItem /></li>
      <li className="list-group-item"><TodoListItem /></li>
      <li className="list-group-item"><TodoListItem /></li>
   </ul>
  );
};

export default TodoList;
