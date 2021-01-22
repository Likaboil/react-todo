import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {
  return <span className="todo-list-item-label">{props.label}</span>
};

export default TodoListItem;
