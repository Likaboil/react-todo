import React from 'react';
import './todo-list.css';

const TodoListItem = (
  <span>Learn React</span>
)

const TodoList = () => {
  return (
    <ul className="todo-list list-group">
      <li className="list-group-item">{ TodoListItem }</li>
      <li className="list-group-item">{ TodoListItem }</li>
      <li className="list-group-item">{ TodoListItem }</li>
   </ul>
  );
};

export default TodoList;
