import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  render() {
    const {label, OnDeleted, onToggleDone, onToggleImportant, done, important} = this.props;

    let classNames = "todo-list-item";

    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label"
              onClick={onToggleDone}>
          {label}
        </span>
        <button className="btn btn-outline-danger btn-sm float-right"
                type="button"
                onClick={OnDeleted}>
          <i className="fa fa-trash" />
        </button>
        <button className="btn btn-outline-success btn-sm float-right"
                type="button"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
