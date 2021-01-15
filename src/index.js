import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import SearchBtn from './components/search-btn';

const TaskList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Cook dinner</li>
      <li>Build Awesome App</li>
   </ul>
  );
};

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
