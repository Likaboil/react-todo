import React from 'react';
import './task-list.css';

const TaskList = () => {
  return (
    <ul className="task-list list-group">
      <li className="list-group-item">Learn React</li>
      <li className="list-group-item">Cook dinner</li>
      <li className="list-group-item">Build Awesome App</li>
   </ul>
  );
};

export default TaskList;
