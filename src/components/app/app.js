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
    ],
    searchLabel: ``
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

  onSearchChange =(searchLabel) =>  this.setState({searchLabel});

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

  searchTask =(items, searchLabel ) => {

    if (searchLabel.length === 0) {
      return items;
    }

    return items.filter((item) => item.label.toLowerCase()
                                            .indexOf(searchLabel.toLowerCase()) > -1);
  }

  render() {
    const {todoListDefault, searchLabel} = this.state;

    const doneCount = todoListDefault.filter((item)=> item.done).length;
    const activeCount = todoListDefault.length - doneCount;

    const visibleTodoList = this.searchTask(todoListDefault, searchLabel);

    return (
      <div className="todo-app">
        <AppHeader
          active={activeCount}
          done={doneCount}
        />
        <div className="search-panel d-flex">
          <SearchPanel
            onSearchChange={this.onSearchChange} />
          <Filters />
        </div>
        <TodoList todoListProps = {visibleTodoList}
          onDeleted={this.deleteTask}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />
        <AddTaskForm
          onTaskAdded={this.addTask} />
      </div>
    );
  }
}
