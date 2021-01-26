import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import Filters from '../filters';
import TodoList from '../todo-list';
import AddTaskForm from '../add-task-form';


export default class App extends Component {

  newKey=100;

  state = {
    todoListDefault: [
      {label: "Learn React", important: true, key: 1 },
      {label: "Cook dinner", important: false, key: 2 },
      {label: "Build Awesome App", important: true, key: 3 },
    ]
  }

  deleteTask =(key) => {
    this.setState(({todoListDefault})=> {
      const idx=todoListDefault.findIndex((item)=>item.key===key);

      const newTodoList = [
        ...todoListDefault.slice(0,idx),
        ...todoListDefault.slice(idx+1)
      ];

      return {
        todoListDefault: newTodoList
      }
    })
  }

  addTask =(text) => {
    const newTask = {
      label: text,
      important: false,
      key: this.newKey++
    };
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
          onDeleted={this.deleteTask} />
        <AddTaskForm
          onTaskAdded={this.addTask}
        />
      </div>
    );
  }
}
