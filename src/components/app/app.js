import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Filters from '../filters';
import TodoList from '../todo-list';
import AddTaskForm from '../add-task-form';


const App = () => {

  const todoListDefault = [
    {label: "Learn React", important: true, key: 1 },
    {label: "Cook dinner", important: false, key: 2 },
    {label: "Build Awesome App", important: true, key: 3 },
  ]

  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <Filters />
      </div>
      <TodoList todoListProps = {todoListDefault} />
      <AddTaskForm />
    </div>
  );
};

export default App;
