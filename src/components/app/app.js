import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Filters from '../filters';
import TodoList from '../todo-list';
import AddTaskForm from '../add-task-form';


export default class App extends Component {

  state = {
    todoListDefault: [
      {label: "Learn React", important: true, key: 1 },
      {label: "Cook dinner", important: false, key: 2 },
      {label: "Build Awesome App", important: true, key: 3 },
    ]
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <Filters />
        </div>
        <TodoList todoListProps = {this.state.todoListDefault}
          onDeleted={(key)=> console.log(`deleted ${key}`)} />
        <AddTaskForm />
      </div>
    );
  }
}
