import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({label, important = false}) => {

  const style = {
    color: important? '#bc1c00': 'black'
  };

  return <span className="todo-list-item-label"
                style={style}>{label}</span>
};

export default TodoListItem;
