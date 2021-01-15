import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
  return (
    <div>
      <h1>My Todo List</h1>
      <h2>3 more to do, 0 done</h2>
  </div>
  );
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const SearchBtn = () => {
  return (
    <div>
      <button type="button">All</button>
      <button type="button">Active</button>
      <button type="button">Done</button>
    </div>
  );
};

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
