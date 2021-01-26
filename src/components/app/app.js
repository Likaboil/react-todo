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

  findIdx(arr, key) {
    return arr.findIndex((item)=>item.key===key);
  }


  toggleProperty =(arr, propertyName, key) => {
    const idx = this.findIdx(arr,key);

    const oldTask = arr[idx];
    const newTask = {
      ...oldTask,
      [propertyName]: !oldTask[propertyName]
    };

    return [
      ...arr.slice(0, idx),
      newTask,
      ...arr.slice(idx + 1),
    ];
  }

  onToggleImportant =(key) => {
    this.setState(({todoListDefault})=> {

      return {
        todoListDefault: this.toggleProperty(todoListDefault, `important`, key)
      };
    })
  }

  onToggleDone =(key) => {

    this.setState(({todoListDefault})=> {

      return {
        todoListDefault: this.toggleProperty(todoListDefault, `done`, key)
      };
    })
  }

  deleteTask =(key) => {
    this.setState(({todoListDefault})=> {
      const idx=this.findIdx(todoListDefault,key);

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
    const {todoListDefault} = this.state;
    const doneCount = todoListDefault.filter((item)=> item.done).length;
    const activeCount = todoListDefault.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader
          active={activeCount}
          done={doneCount}
        />
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
