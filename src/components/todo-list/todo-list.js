import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = () => {
  return (
    <ul className="todo-list list-group">
      <li className="list-group-item">
        <TodoListItem label="Learn React" />
      </li>
      <li className="list-group-item">
        <TodoListItem label="Cook dinner" />
      </li>
      <li className="list-group-item">
        <TodoListItem label="Build Awesome App" />
      </li>
   </ul>
  );
};

export default TodoList;
