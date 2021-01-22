import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = (props) => {
  return (
    <ul className="todo-list list-group">
      <li className="list-group-item">
        <TodoListItem label="Learn React" important />
      </li>
      <li className="list-group-item">
        <TodoListItem label="Cook dinner" />
      </li>
      <li className="list-group-item">
        <TodoListItem label="Build Awesome App" important />
      </li>
   </ul>
  );
};

export default TodoList;
