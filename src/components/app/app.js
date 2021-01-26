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
      this.createTodoListItem(`Learn React`),
      this.createTodoListItem(`Cook dinner`),
      this.createTodoListItem(`Build Awesome App`),
    ]
  }

  createTodoListItem(label) {
    return {
      label,
      important: false,
      done: false,
      key: this.newKey++
    };
  }

  onToggleImportant =(key) => {
    console.log(`Toggle Important ${key}`);
  }

  onToggleDone =(key) => {
    console.log(`Toggle Done ${key}`);
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
      };
    })
  }

  addTask =(text) => {
    const newTask = this.createTodoListItem(text);

    this.setState(({todoListDefault})=> {

      const newTodoList = [
        ...todoListDefault, newTask
      ];

      return {
        todoListDefault: newTodoList,
      };
    })
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
          onDeleted={this.deleteTask}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddTaskForm
          onTaskAdded={this.addTask} />
      </div>
    );
  }
}
