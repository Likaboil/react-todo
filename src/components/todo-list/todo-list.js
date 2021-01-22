import React from 'react';
import './todo-list.css';
import TodoListItem from '../todo-list-item';

const TodoList = ({todoListProps}) => {

  return (
    <ul className="todo-list list-group">
      <li className="list-group-item">
        <TodoListItem label={todoListProps[0].label} important={todoListProps[0].important} />
      </li>
      <li className="list-group-item">
        <TodoListItem label={todoListProps[1].label} important={todoListProps[1].important} />
      </li>
      <li className="list-group-item">
        <TodoListItem label={todoListProps[2].label} important={todoListProps[2].important} />
      </li>
   </ul>
  );
};

export default TodoList;
