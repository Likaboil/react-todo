import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Filters from '../filters';
import TaskList from '../task-list';
import AddTaskForm from '../add-task-form';


const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <Filters />
      </div>
      <TaskList />
      <AddTaskForm />
    </div>
  );
};

export default App;
