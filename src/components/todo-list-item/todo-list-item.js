import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  render() {
    const {label, important = false} = this.props;

    const style = {
      color: important? '#bc1c00': 'black'
    };

    return <span className="todo-list-item-label"
                  style={style}>{label}</span>;
  }
}
