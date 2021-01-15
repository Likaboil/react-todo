import React from 'react';
import ReactDOM from 'react-dom';

const App = (
  <div>
    <div>
      <h1>My Todo List</h1>
      <h2>3 more to do, 0 done</h2>
    </div>
    <div>
      <input placeholder="search" />
      <div>
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Done</button>
      </div>
    </div>
    <ul>
      <li>Learn React</li>
      <li>Cook dinner</li>
      <li>Build Awesome App</li>
    </ul>
    <form>
      <input type="text"
             placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>
  </div>
);

ReactDOM.render(App,
  document.getElementById('root'));
