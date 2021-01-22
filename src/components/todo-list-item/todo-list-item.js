import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  render() {
    const {label, important = false} = this.props;

    const style = {
      color: important? '#bc1c00': 'black'
    };

    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label"
                  style={style}>{label}</span>
        <button className="btn btn-outline-danger btn-sm float-right"
                type="button">
          <i className="fa fa-trash" />
        </button>
        <button className="btn btn-outline-success btn-sm float-right"
                type="button">
          <i className="fa fa-exclamation" />
        </button>
      </span>
    );
  }
}
