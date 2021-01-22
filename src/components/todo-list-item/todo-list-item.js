import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label}) => {
  return <span className="todo-list-item-label">{label}</span>
};

export default TodoListItem;
