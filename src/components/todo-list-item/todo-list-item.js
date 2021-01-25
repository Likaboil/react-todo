import React, { Component } from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  };

  OnLabelClick = () => {
    this.setState(({done}) => {
      return {
        done: !done
      };
    });
  };

  render() {
    const {label} = this.props;
    const {done, important} = this.state;

    let classNames = "todo-list-item";

    if(done) {
      classNames += ' done';
    }

    const style = {
      color: important? '#bc1c00': 'black'
    };

    return (
      <span className={classNames}>
        <span className="todo-list-item-label"
              style={style}
              onClick={this.OnLabelClick}>
          {label}
        </span>
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
