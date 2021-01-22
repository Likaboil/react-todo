import React from 'react';
import './todo-list.css';

const TodoList = () => {
  return (
    <ul className="todo-list list-group">
      <li className="list-group-item">Learn React</li>
      <li className="list-group-item">Cook dinner</li>
      <li className="list-group-item">Build Awesome App</li>
   </ul>
  );
};

export default TodoList;
