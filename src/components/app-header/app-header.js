import React from 'react';
import './app-header.css';

const AppHeader = ({ active, done }) => {

  return (
    <div className = "app-header d-flex">
      <h1>My Todo List</h1>
      <h2>{ active } more to do, { done } done</h2>
  </div>
  );
};

export default AppHeader;
