import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import SearchBtn from '../search-btn';
import TaskList from '../task-list';
import AddTaskForm from '../add-task-form';

const App = () => {
  return (
    <div>
      <AppHeader />
      <div>
        <SearchPanel />
        <SearchBtn />
      </div>
      <TaskList />
      <AddTaskForm />
    </div>
  );
};

export default App;
