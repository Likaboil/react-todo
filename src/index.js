import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import SearchBtn from './components/search-btn';
import TaskList from './components/task-list';

const AddTaskForm = () => {
  return (
    <form>
      <input type="text"
              placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>
  );
};

const App = (
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

ReactDOM.render(App,
  document.getElementById('root'));
